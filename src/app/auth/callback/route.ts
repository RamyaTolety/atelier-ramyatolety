import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken, fetchUserinfo } from "@/lib/ludwitt";
import { createSession } from "@/lib/session";

const STATE_COOKIE = "ludwitt_oauth_state";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const expectedState = req.cookies.get(STATE_COOKIE)?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    const res = NextResponse.redirect(new URL("/?signin=invalid", req.url));
    res.cookies.delete(STATE_COOKIE);
    return res;
  }

  try {
    const redirectUri = new URL("/auth/callback", req.nextUrl.origin).toString();
    const token = await exchangeCodeForToken(code, redirectUri);
    const user = await fetchUserinfo(token.access_token);

    await createSession({ sub: user.sub, email: user.email, name: user.name });

    const res = NextResponse.redirect(new URL("/learn", req.url));
    res.cookies.delete(STATE_COOKIE);
    return res;
  } catch (err) {
    console.error("Ludwitt sign-in failed", err);
    const res = NextResponse.redirect(new URL("/?signin=failed", req.url));
    res.cookies.delete(STATE_COOKIE);
    return res;
  }
}

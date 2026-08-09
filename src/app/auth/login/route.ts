import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { buildAuthorizeUrl } from "@/lib/ludwitt";

const STATE_COOKIE = "ludwitt_oauth_state";

export async function GET(req: NextRequest) {
  const state = randomBytes(24).toString("hex");
  const redirectUri = new URL("/auth/callback", req.nextUrl.origin).toString();

  const res = NextResponse.redirect(buildAuthorizeUrl(redirectUri, state));
  res.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });
  return res;
}

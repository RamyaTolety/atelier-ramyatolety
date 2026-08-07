import { NextRequest, NextResponse } from "next/server";
import { verifyLaunchToken } from "@/lib/ludwitt";
import { createSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/?launch=missing", req.url));
  }

  try {
    const claims = await verifyLaunchToken(token);
    await createSession({ sub: claims.sub, email: claims.email, appId: claims.app_id });
    return NextResponse.redirect(new URL("/learn", req.url));
  } catch (err) {
    console.error("Launch token rejected", err);
    return NextResponse.redirect(new URL("/?launch=invalid", req.url));
  }
}

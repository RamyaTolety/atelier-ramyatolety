import "server-only";
import { jwtVerify } from "jose";

export type LaunchClaims = {
  sub: string;
  email?: string;
  app_id: string;
};

export type LudwittEventType =
  | "lesson_started"
  | "lesson_completed"
  | "quiz_submitted"
  | "session_heartbeat";

function config() {
  const appId = process.env.LUDWITT_APP_ID;
  const apiKey = process.env.LUDWITT_API_KEY;
  const jwtSecret = process.env.LUDWITT_JWT_SECRET;
  const baseUrl = process.env.LUDWITT_API_BASE_URL;
  return { appId, apiKey, jwtSecret, baseUrl };
}

export async function verifyLaunchToken(token: string): Promise<LaunchClaims> {
  const { jwtSecret } = config();
  if (!jwtSecret) throw new Error("LUDWITT_JWT_SECRET is not set");

  const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret), {
    algorithms: ["HS256"],
  });

  if (!payload.sub || !payload.app_id) {
    throw new Error("Launch token missing required claims");
  }

  return {
    sub: payload.sub as string,
    email: payload.email as string | undefined,
    app_id: payload.app_id as string,
  };
}

export async function postLudwittEvent(params: {
  userId: string;
  type: LudwittEventType;
  metadata?: Record<string, unknown>;
}) {
  const { appId, apiKey, baseUrl } = config();
  if (!appId || !apiKey || !baseUrl) {
    console.warn("Ludwitt event skipped: integration env vars not configured", params.type);
    return { ok: false as const, skipped: true as const };
  }

  try {
    const res = await fetch(`${baseUrl}/apps/${appId}/events`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        user_id: params.userId,
        type: params.type,
        metadata: params.metadata ?? {},
        occurred_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("Ludwitt event failed", res.status, await res.text());
      return { ok: false as const, status: res.status };
    }
    return { ok: true as const };
  } catch (err) {
    console.error("Ludwitt event request errored", err);
    return { ok: false as const, error: String(err) };
  }
}

export async function fetchLudwittMetrics(): Promise<{ qualified_users: number } | null> {
  const { appId, apiKey, baseUrl } = config();
  if (!appId || !apiKey || !baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}/apps/${appId}/metrics`, {
      headers: { authorization: `Bearer ${apiKey}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as { qualified_users: number };
  } catch {
    return null;
  }
}

import "server-only";

const AUTHORIZE_URL = "https://pitchrise.ludwitt.com/oauth/authorize";
const TOKEN_URL = "https://pitchrise.ludwitt.com/api/oauth/token";
const USERINFO_URL = "https://pitchrise.ludwitt.com/api/oauth/userinfo";

// Identity only: Atelier has no AI feature that spends a student's credits,
// so we never request credits:read / credits:spend, and never touch the
// AI proxy or balance endpoints. Least privilege for what this app actually does.
const SCOPE = "profile";

function clientId() {
  const id = process.env.LUDWITT_CLIENT_ID;
  if (!id) throw new Error("LUDWITT_CLIENT_ID is not set");
  return id;
}

function clientSecret() {
  const secret = process.env.LUDWITT_CLIENT_SECRET;
  if (!secret) throw new Error("LUDWITT_CLIENT_SECRET is not set");
  return secret;
}

export function buildAuthorizeUrl(redirectUri: string, state: string): string {
  const url = new URL(AUTHORIZE_URL);
  url.searchParams.set("client_id", clientId());
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("state", state);
  return url.toString();
}

type TokenResponse = {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

export async function exchangeCodeForToken(
  code: string,
  redirectUri: string,
): Promise<TokenResponse> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId(),
      client_secret: clientSecret(),
    }),
  });

  if (!res.ok) {
    throw new Error(`Ludwitt token exchange failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as TokenResponse;
}

export type LudwittUser = {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
};

export async function fetchUserinfo(accessToken: string): Promise<LudwittUser> {
  const res = await fetch(USERINFO_URL, {
    headers: { authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Ludwitt userinfo failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as LudwittUser;
}

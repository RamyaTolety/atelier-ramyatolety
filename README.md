# Atelier

Learn to make things, well.

A cozy learning app covering design tools, video and content craft, traditional art media,
world art traditions, and writing craft: bite-sized lessons, each with a real exercise and a
quick check. Built for Phase 2 Project 1 of the Hult Cohort Developer Program (Ludwitt learning
integration).

The site is fully public. No account is required to browse tracks or take quizzes. Signing in
with Ludwitt establishes a session so progress is saved between visits; browsing without one
still works, it just doesn't persist.

## Architecture

- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Content:** `src/lib/content.ts`, a static, typed dataset of tracks and lessons. No CMS.
- **Identity:** Ludwitt OAuth (Bring-your-own-backend tier). `GET /auth/login` redirects to
  Ludwitt's authorize endpoint requesting only the `profile` scope (no credit scopes; this app
  never spends a student's credits). `GET /auth/callback` verifies the CSRF `state`, exchanges
  the returned code for a token server-to-server, reads identity from Ludwitt's userinfo
  endpoint, then discards the Ludwitt access token and issues Atelier's own short-lived session
  cookie (signed with `SESSION_SECRET`). There is no password or account system of Atelier's own.
- **Data:** Firestore (via the Admin SDK, server-side only) stores per-user lesson progress at
  `users/{sub}/lessons/{trackSlug}__{lessonSlug}`. No client-side Firestore access is used, so
  `firestore.rules` denies all direct client reads and writes. If Firestore isn't configured,
  progress calls fail soft and the site keeps working without saved progress.
- **Hosting:** Vercel

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.local.example` to `.env.local` and fill in:
   - `SESSION_SECRET`: any long random string (used to sign Atelier's own session cookie).
   - `FIREBASE_SERVICE_ACCOUNT_KEY`: a Firebase service account JSON, minified to one line.
     Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com),
     enable **Firestore Database** (production mode), deploy `firestore.rules`, then generate a
     key under **Project settings, Service accounts, Generate new private key**.
   - `LUDWITT_CLIENT_ID`, `LUDWITT_CLIENT_SECRET`: from the Ludwitt Creator dashboard after
     registering the app (see below). Optional for local development; the site runs fine
     without them, sign-in just won't work until they're set.
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Registering with Ludwitt

1. Deploy the app first (see Deployment below) so a real production URL exists.
2. Sign in at [ludwitt.com/developers](https://www.ludwitt.com/developers), go to **Creator**,
   and register a new app on the **Bring-your-own-backend** tier with:
   - **Redirect URI:** `https://<your-domain>/auth/callback`
   - **Website:** `https://<your-domain>`
3. Store the returned `client_id` and `client_secret` as `LUDWITT_CLIENT_ID` and
   `LUDWITT_CLIENT_SECRET` in Vercel's environment variables, not in git.

## Deployment

1. `vercel link` (creates `.vercel/project.json`, not committed).
2. Add `SESSION_SECRET`, `FIREBASE_SERVICE_ACCOUNT_KEY`, `LUDWITT_CLIENT_ID`, and
   `LUDWITT_CLIENT_SECRET` as Vercel project environment variables.
3. `vercel --prod`.

## Known limitations

- Progress persistence depends on optional configuration (Firestore). The core lesson content
  and quizzes work without it, they just won't remember where you left off.
- Quiz feedback for anonymous visitors is client-side only; nothing is persisted until they
  sign in with Ludwitt.
- This app never requests credit scopes and never calls Ludwitt's AI proxy or credit-balance
  endpoints. It has no AI feature that would spend a student's money, so it deliberately doesn't
  wire up code paths near real payment credits that nothing in the app actually uses.

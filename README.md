# Atelier

Learn to make things, well.

A cozy learning app covering design tools, video and content craft, traditional art media,
world art traditions, and writing craft: bite-sized lessons, each with a real exercise and a
quick check. Built for Phase 2 Project 1 of the Hult Cohort Developer Program (Ludwitt learning
integration).

The site is fully public. No account is required to browse tracks or take quizzes. Launching
from Ludwitt establishes a session so progress is saved between visits and learning events are
reported to the platform; browsing without one still works, it just doesn't persist.

## Architecture

- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Content:** `src/lib/content.ts`, a static, typed dataset of tracks and lessons. No CMS.
- **Identity:** Ludwitt launch tokens only. `GET /launch?token=` verifies an HS256 JWT signed
  with the app's `LUDWITT_JWT_SECRET`, then issues Atelier's own short-lived session cookie
  (signed separately with `SESSION_SECRET`). There is no password or account system.
- **Data:** Firestore (via the Admin SDK, server-side only) stores per-user lesson progress at
  `users/{sub}/lessons/{trackSlug}__{lessonSlug}`. No client-side Firestore access is used, so
  `firestore.rules` denies all direct client reads and writes. If Firestore isn't configured,
  progress calls fail soft and the site keeps working without saved progress.
- **Ludwitt integration:** `src/lib/ludwitt.ts` verifies launch tokens and posts
  `lesson_started`, `lesson_completed`, and `quiz_submitted` events to
  `POST /v1/apps/{app_id}/events`. Event posting also fails soft (logs a warning) if the
  integration env vars aren't set, so local development and anonymous browsing never depend on
  Ludwitt being reachable.
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
   - `LUDWITT_APP_ID`, `LUDWITT_API_KEY`, `LUDWITT_JWT_SECRET`, `LUDWITT_API_BASE_URL`: from the
     Ludwitt developer portal after registering the app (see below). Optional for local
     development; the site runs fine without them.
3. Run the dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Registering with Ludwitt

1. Deploy the app first (see Deployment below) so a real `launch_url` and `repo_url` exist.
2. Sign in at [ludwitt.com/developers](https://www.ludwitt.com/developers) and register the app
   with `launch_url` set to `https://<your-domain>/launch` and `repo_url` set to this repository.
3. Store the returned `app_id`, `api_key`, and `jwt_secret` as `LUDWITT_APP_ID`,
   `LUDWITT_API_KEY`, and `LUDWITT_JWT_SECRET` in Vercel's environment variables, not in git.

## Deployment

1. `vercel link` (creates `.vercel/project.json`, not committed).
2. Add `SESSION_SECRET`, `FIREBASE_SERVICE_ACCOUNT_KEY`, and the `LUDWITT_*` variables as Vercel
   project environment variables.
3. `vercel --prod`.

## Known limitations

- Progress and Ludwitt event delivery both depend on optional configuration (Firestore, Ludwitt
  keys). The core lesson content and quizzes work without either.
- Quiz feedback for anonymous visitors is client-side only; nothing is persisted until they
  arrive through a valid Ludwitt launch.

import "server-only";
import { cert, getApps, getApp, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

function loadApp(): App {
  if (getApps().length) return getApp();

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set");
  }
  const serviceAccount = JSON.parse(raw);
  return initializeApp({ credential: cert(serviceAccount) });
}

let db: Firestore | undefined;

// Lazy on purpose: this module gets imported by route/page modules that Next
// evaluates during the build's page-data collection pass, before env vars
// from .env.local/Vercel are necessarily in scope. Initializing eagerly at
// module load throws and fails the build.
export function adminDb(): Firestore {
  if (!db) db = getFirestore(loadApp());
  return db;
}

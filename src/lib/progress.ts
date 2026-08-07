import "server-only";
import { adminDb } from "@/lib/firebaseAdmin";

export type LessonProgress = {
  status: "started" | "completed";
  startedAt?: string;
  completedAt?: string;
  quizAnswerId?: string;
  quizCorrect?: boolean;
};

function lessonKey(trackSlug: string, lessonSlug: string) {
  return `${trackSlug}__${lessonSlug}`;
}

// Progress is a nice-to-have layered on top of a site that already works
// without an account. If Firestore is unreachable or unconfigured, these
// fail soft (empty progress, a no-op write) rather than taking down a page
// render or an event post.

export async function getUserProgress(sub: string): Promise<Record<string, LessonProgress>> {
  try {
    const snap = await adminDb().collection("users").doc(sub).collection("lessons").get();
    const progress: Record<string, LessonProgress> = {};
    snap.forEach((doc) => {
      progress[doc.id] = doc.data() as LessonProgress;
    });
    return progress;
  } catch (err) {
    console.error("getUserProgress failed", err);
    return {};
  }
}

export async function markLessonStarted(sub: string, trackSlug: string, lessonSlug: string) {
  try {
    const ref = adminDb()
      .collection("users")
      .doc(sub)
      .collection("lessons")
      .doc(lessonKey(trackSlug, lessonSlug));
    const existing = await ref.get();
    if (existing.exists) return;
    await ref.set({ status: "started", startedAt: new Date().toISOString() });
  } catch (err) {
    console.error("markLessonStarted failed", err);
  }
}

export async function markLessonCompleted(
  sub: string,
  trackSlug: string,
  lessonSlug: string,
  quizAnswerId: string,
  quizCorrect: boolean,
) {
  try {
    const ref = adminDb()
      .collection("users")
      .doc(sub)
      .collection("lessons")
      .doc(lessonKey(trackSlug, lessonSlug));
    await ref.set(
      {
        status: "completed",
        completedAt: new Date().toISOString(),
        quizAnswerId,
        quizCorrect,
      },
      { merge: true },
    );
  } catch (err) {
    console.error("markLessonCompleted failed", err);
  }
}

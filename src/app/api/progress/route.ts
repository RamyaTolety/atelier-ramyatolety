import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getLesson } from "@/lib/content";
import { markLessonStarted, markLessonCompleted } from "@/lib/progress";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "No active session" }, { status: 401 });
  }

  const body = await req.json();
  const { trackSlug, lessonSlug, action, quizAnswerId } = body as {
    trackSlug: string;
    lessonSlug: string;
    action: "start" | "complete";
    quizAnswerId?: string;
  };

  const found = getLesson(trackSlug, lessonSlug);
  if (!found) {
    return NextResponse.json({ error: "Unknown lesson" }, { status: 404 });
  }

  if (action === "start") {
    await markLessonStarted(session.sub, trackSlug, lessonSlug);
    return NextResponse.json({ ok: true });
  }

  if (action === "complete") {
    if (!quizAnswerId) {
      return NextResponse.json({ error: "quizAnswerId required" }, { status: 400 });
    }
    const correct =
      found.lesson.quiz.options.find((o) => o.id === quizAnswerId)?.correct === true;

    await markLessonCompleted(session.sub, trackSlug, lessonSlug, quizAnswerId, correct);

    return NextResponse.json({ ok: true, correct });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

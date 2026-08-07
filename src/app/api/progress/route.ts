import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { getLesson } from "@/lib/content";
import { markLessonStarted, markLessonCompleted } from "@/lib/progress";
import { postLudwittEvent } from "@/lib/ludwitt";

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
    await postLudwittEvent({
      userId: session.sub,
      type: "lesson_started",
      metadata: { track: trackSlug, lesson: lessonSlug },
    });
    return NextResponse.json({ ok: true });
  }

  if (action === "complete") {
    if (!quizAnswerId) {
      return NextResponse.json({ error: "quizAnswerId required" }, { status: 400 });
    }
    const correct =
      found.lesson.quiz.options.find((o) => o.id === quizAnswerId)?.correct === true;

    await postLudwittEvent({
      userId: session.sub,
      type: "quiz_submitted",
      metadata: { track: trackSlug, lesson: lessonSlug, answer: quizAnswerId, correct },
    });

    await markLessonCompleted(session.sub, trackSlug, lessonSlug, quizAnswerId, correct);

    await postLudwittEvent({
      userId: session.sub,
      type: "lesson_completed",
      metadata: { track: trackSlug, lesson: lessonSlug },
    });

    return NextResponse.json({ ok: true, correct });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

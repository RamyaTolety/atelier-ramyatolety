import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson } from "@/lib/content";
import { getSession } from "@/lib/session";
import { getUserProgress } from "@/lib/progress";
import LessonInteraction from "@/components/LessonInteraction";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ trackSlug: string; lessonSlug: string }>;
}) {
  const { trackSlug, lessonSlug } = await params;
  const found = getLesson(trackSlug, lessonSlug);
  if (!found) notFound();
  const { track, lesson } = found;

  const session = await getSession();
  const progress = session
    ? (await getUserProgress(session.sub))[`${trackSlug}__${lessonSlug}`]
    : undefined;

  const idx = track.lessons.findIndex((l) => l.slug === lessonSlug);
  const next = track.lessons[idx + 1];

  return (
    <article className="space-y-8 max-w-2xl">
      <div>
        <Link href={`/learn/${track.slug}`} className="text-sm text-ink-500 hover:text-clay-600">
          ← {track.title}
        </Link>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-ink-900">{lesson.title}</h1>
        <p className="text-ink-700">{lesson.summary}</p>
      </div>

      <div className="space-y-4 text-ink-900 leading-relaxed">
        {lesson.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="paper-card rounded-xl p-5 space-y-2">
        <h2 className="font-serif font-semibold text-ink-900">Practice</h2>
        <p className="text-sm text-ink-700">{lesson.practice}</p>
      </div>

      <div className="paper-card rounded-xl p-5 space-y-2">
        <h2 className="font-serif font-semibold text-ink-900">Apply it</h2>
        <p className="text-sm text-ink-700">{lesson.applyIt}</p>
      </div>

      <LessonInteraction
        trackSlug={track.slug}
        lessonSlug={lesson.slug}
        quiz={lesson.quiz}
        initialStatus={progress?.status}
        initialAnswerId={progress?.quizAnswerId}
        nextHref={next ? `/learn/${track.slug}/${next.slug}` : `/learn/${track.slug}`}
        nextLabel={next ? `Next: ${next.title}` : "Back to track"}
      />
    </article>
  );
}

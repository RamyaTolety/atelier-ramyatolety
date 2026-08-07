import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrack } from "@/lib/content";
import { getSession } from "@/lib/session";
import { getUserProgress } from "@/lib/progress";
import TrackBadge from "@/components/TrackBadge";

export default async function TrackPage({
  params,
}: {
  params: Promise<{ trackSlug: string }>;
}) {
  const { trackSlug } = await params;
  const track = getTrack(trackSlug);
  if (!track) notFound();

  const session = await getSession();
  const progress = session ? await getUserProgress(session.sub) : {};

  return (
    <div className="space-y-8">
      <div>
        <Link href="/learn" className="text-sm text-ink-500 hover:text-clay-600">
          ← All tracks
        </Link>
        <div className="mt-2 flex items-center gap-3">
          <TrackBadge title={track.title} accent={track.accent} />
          <div>
            <h1 className="font-serif text-3xl font-semibold text-ink-900">{track.title}</h1>
            <p className="text-ink-700">{track.description}</p>
          </div>
        </div>
      </div>

      <ol className="space-y-3">
        {track.lessons.map((lesson, i) => {
          const status = progress[`${track.slug}__${lesson.slug}`]?.status;
          return (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${track.slug}/${lesson.slug}`}
                className="paper-card flex items-center gap-4 rounded-xl px-5 py-4 hover:-translate-y-0.5 transition"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                    status === "completed"
                      ? "bg-sage-400/30 text-sage-500"
                      : "bg-paper-200 text-ink-500"
                  }`}
                >
                  {status === "completed" ? "✓" : i + 1}
                </span>
                <span>
                  <span className="block font-medium text-ink-900">{lesson.title}</span>
                  <span className="block text-sm text-ink-700">{lesson.summary}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="paper-card rounded-2xl p-5 space-y-3">
          <h2 className="font-serif font-semibold text-ink-900">Getting started</h2>
          <ul className="space-y-2 text-sm text-ink-700">
            {track.gettingStarted.map((tip, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-clay-500">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="paper-card rounded-2xl p-5 space-y-4">
          <h2 className="font-serif font-semibold text-ink-900">Resources</h2>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wide text-sage-500">Free</h3>
            <ul className="mt-1 space-y-1.5 text-sm">
              {track.resources.free.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-clay-600 underline hover:text-clay-500"
                  >
                    {r.label}
                  </a>{" "}
                  <span className="text-ink-500">({r.source})</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wide text-gold-500">Paid</h3>
            <ul className="mt-1 space-y-1.5 text-sm">
              {track.resources.paid.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-clay-600 underline hover:text-clay-500"
                  >
                    {r.label}
                  </a>{" "}
                  <span className="text-ink-500">({r.source})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

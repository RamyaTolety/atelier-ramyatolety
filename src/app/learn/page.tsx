import Link from "next/link";
import { tracks } from "@/lib/content";
import { getSession } from "@/lib/session";
import { getUserProgress } from "@/lib/progress";
import TrackBadge from "@/components/TrackBadge";

const ACCENT_CLASS: Record<string, string> = {
  clay: "bg-clay-400/20 text-clay-600",
  sage: "bg-sage-400/25 text-sage-500",
  blush: "bg-blush-400/25 text-clay-600",
  gold: "bg-gold-400/25 text-gold-500",
};

export default async function LearnDashboard() {
  const session = await getSession();
  const progress = session ? await getUserProgress(session.sub) : {};

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold text-ink-900">Your tracks</h1>
        <p className="text-ink-700 mt-1">Pick up where you left off, or start something new.</p>
        {!session && (
          <p className="mt-2 text-xs text-ink-500">
            Browsing without a Ludwitt session: quizzes still work, but progress won&apos;t be
            saved between visits.
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {tracks.map((track) => {
          const completedCount = track.lessons.filter(
            (l) => progress[`${track.slug}__${l.slug}`]?.status === "completed",
          ).length;

          return (
            <Link
              key={track.slug}
              href={`/learn/${track.slug}`}
              className="paper-card rounded-2xl p-5 space-y-2 block hover:-translate-y-0.5 transition"
            >
              <div className="flex items-center justify-between">
                <TrackBadge title={track.title} accent={track.accent} />
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${ACCENT_CLASS[track.accent]}`}
                >
                  {completedCount} of {track.lessons.length} done
                </span>
              </div>
              <h2 className="font-serif text-lg font-semibold text-ink-900">{track.title}</h2>
              <p className="text-sm text-ink-700">{track.tagline}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

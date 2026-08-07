import Link from "next/link";
import { tracks, totalLessonCount } from "@/lib/content";
import { getSession } from "@/lib/session";
import TrackBadge from "@/components/TrackBadge";

const CATEGORY_LABEL: Record<string, string> = {
  tool: "Digital Tool",
  medium: "Traditional Medium",
  style: "World Art Style",
  writing: "Writing Craft",
};

const ACCENT_CLASS: Record<string, string> = {
  clay: "bg-clay-400/20 text-clay-600",
  sage: "bg-sage-400/25 text-sage-500",
  blush: "bg-blush-400/25 text-clay-600",
  gold: "bg-gold-400/25 text-gold-500",
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ launch?: string }>;
}) {
  const session = await getSession();
  const { launch } = await searchParams;

  return (
    <div className="space-y-14">
      <section className="text-center space-y-5 py-6">
        <p className="inline-block rounded-full bg-clay-400/15 px-4 py-1 text-xs font-medium tracking-wide text-clay-600">
          A cozy studio for design, art, and writing craft
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ink-900 text-balance">
          Learn to make things, <span className="text-clay-500">well.</span>
        </h1>
        <p className="mx-auto max-w-xl text-ink-700">
          Design tools, video and content craft, traditional media, world art traditions, and
          writing: {totalLessonCount()} bite-sized lessons, each with a real exercise and a quick
          check.
        </p>
        <Link
          href="/learn"
          className="inline-block rounded-full bg-clay-500 px-6 py-3 text-sm font-medium text-paper-50 shadow-sm hover:bg-clay-600 transition"
        >
          Browse tracks
        </Link>

        <div className="mx-auto max-w-md text-xs text-ink-500">
          {session ? (
            <p>Signed in through Ludwitt. Your progress is being saved as you go.</p>
          ) : launch === "invalid" || launch === "missing" ? (
            <p>
              That Ludwitt link wasn&apos;t a valid session, so progress won&apos;t be saved for
              it. You can still browse everything below; no sign in required.
            </p>
          ) : (
            <p>
              No sign in required to browse or take quizzes. Open this app from your{" "}
              <a
                className="text-clay-600 underline"
                href="https://www.ludwitt.com/developers"
                target="_blank"
                rel="noreferrer"
              >
                Ludwitt
              </a>{" "}
              dashboard if you want your progress saved between visits.
            </p>
          )}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">Tracks</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {tracks.map((track) => (
            <div key={track.slug} className="paper-card rounded-2xl p-5 space-y-2">
              <div className="flex items-center justify-between">
                <TrackBadge title={track.title} accent={track.accent} />
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${ACCENT_CLASS[track.accent]}`}
                >
                  {CATEGORY_LABEL[track.category]}
                  {track.region ? `, ${track.region}` : ""}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ink-900">{track.title}</h3>
              <p className="text-sm text-ink-700">{track.tagline}</p>
              <p className="text-xs text-ink-500">{track.lessons.length} lessons</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

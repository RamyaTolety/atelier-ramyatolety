const BADGE_CLASS: Record<string, string> = {
  clay: "bg-clay-400/25 text-clay-600",
  sage: "bg-sage-400/30 text-sage-500",
  blush: "bg-blush-400/30 text-clay-600",
  gold: "bg-gold-400/30 text-gold-500",
};

export default function TrackBadge({
  title,
  accent,
}: {
  title: string;
  accent: "clay" | "sage" | "blush" | "gold";
}) {
  return (
    <span
      aria-hidden
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-base font-semibold ${BADGE_CLASS[accent]}`}
    >
      {title.charAt(0)}
    </span>
  );
}

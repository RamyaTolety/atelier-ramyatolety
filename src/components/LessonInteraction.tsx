"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { QuizOption } from "@/lib/content";

type Props = {
  trackSlug: string;
  lessonSlug: string;
  quiz: { question: string; options: QuizOption[] };
  initialStatus?: "started" | "completed";
  initialAnswerId?: string;
  nextHref: string;
  nextLabel: string;
};

export default function LessonInteraction({
  trackSlug,
  lessonSlug,
  quiz,
  initialStatus,
  initialAnswerId,
  nextHref,
  nextLabel,
}: Props) {
  const [selected, setSelected] = useState<string | undefined>(initialAnswerId);
  const [completed, setCompleted] = useState(initialStatus === "completed");
  const [submitting, setSubmitting] = useState(false);
  const startedFired = useRef(false);

  useEffect(() => {
    if (startedFired.current || initialStatus) return;
    startedFired.current = true;
    fetch("/api/progress", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ trackSlug, lessonSlug, action: "start" }),
    }).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submitQuiz() {
    if (!selected || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ trackSlug, lessonSlug, action: "complete", quizAnswerId: selected }),
      });
      setCompleted(true);
    } finally {
      setSubmitting(false);
    }
  }

  const correctId = quiz.options.find((o) => o.correct)?.id;

  return (
    <div className="paper-card rounded-xl p-5 space-y-4">
      <h2 className="font-serif font-semibold text-ink-900">Check your understanding</h2>
      <p className="text-sm text-ink-700">{quiz.question}</p>

      <div className="space-y-2">
        {quiz.options.map((option) => {
          const isSelected = selected === option.id;
          const showResult = completed;
          return (
            <button
              key={option.id}
              type="button"
              disabled={completed}
              onClick={() => setSelected(option.id)}
              className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm transition ${
                showResult && option.id === correctId
                  ? "border-sage-400 bg-sage-400/15 text-ink-900"
                  : showResult && isSelected
                    ? "border-clay-400 bg-clay-400/10 text-ink-900"
                    : isSelected
                      ? "border-clay-400 bg-clay-400/10 text-ink-900"
                      : "border-paper-300 hover:border-clay-300"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {!completed ? (
        <button
          type="button"
          onClick={submitQuiz}
          disabled={!selected || submitting}
          className="rounded-full bg-clay-500 px-5 py-2 text-sm font-medium text-paper-50 disabled:opacity-40 hover:bg-clay-600 transition"
        >
          {submitting ? "Submitting…" : "Submit & complete lesson"}
        </button>
      ) : (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-sage-500">
            {selected === correctId ? "Nice, that's right." : "Logged. See the highlighted answer above."}
          </span>
          <Link
            href={nextHref}
            className="rounded-full bg-ink-900 px-5 py-2 text-sm font-medium text-paper-50 hover:bg-ink-700 transition"
          >
            {nextLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}

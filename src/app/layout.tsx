import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier: Learn to Make Things",
  description:
    "Bite-sized lessons on design tools, video and content craft, traditional art media, world art traditions, and writing craft.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-paper-300/70">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-serif font-semibold text-ink-900">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-clay-400/25 font-serif text-base font-semibold text-clay-600 brush-wiggle"
              >
                A
              </span>
              Atelier
            </Link>
            <nav className="flex items-center gap-5 text-sm text-ink-700">
              <Link href="/learn" className="hover:text-clay-600">
                Tracks
              </Link>
              <a
                href="https://www.ludwitt.com/developers"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline hover:text-clay-600"
              >
                Ludwitt
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-ink-500">
          Atelier, Hult Cohort Developer Program, Summer 2026. Built by{" "}
          <a
            className="underline hover:text-clay-600"
            href="https://github.com/RamyaTolety"
            target="_blank"
            rel="noreferrer"
          >
            @RamyaTolety
          </a>
          .
        </footer>
      </body>
    </html>
  );
}

import Link from "next/link";
import AccentButton from "@/components/shared/AccentButton";

export const metadata = { title: "hehe — Asmi" };

const games = [{ title: "Cook Eggs", href: "/games/cook-eggs.html" }];

export default function HehePage() {
  return (
    <div className="grid-container flex min-h-[80vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-heading text-heading text-text-primary">You found it 🥚</p>

      <p className="text-body text-text-secondary max-w-[36ch]">
        A tiny game corner. Pick something to play.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {games.map((game) => (
          <AccentButton key={game.title} href={game.href} external>
            {game.title}
          </AccentButton>
        ))}
      </div>

      <Link
        href="/"
        className="mt-4 rounded px-4 py-2 text-text-primary transition-colors hover:bg-state-hover"
      >
        ← Home
      </Link>
    </div>
  );
}

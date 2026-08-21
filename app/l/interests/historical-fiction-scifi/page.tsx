import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Historical Fiction & Sci-Fi — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Historical Fiction & Sci-Fi"
      meta="Two very different genres, one same question: what does conflict do to people?"
      tags={["Fiction", "Historical Research", "Worldbuilding"]}
    >
      <p>
        My first novel,{" "}
        <Link href="/l/writing/abandoned-and-left-behind" className="underline">
          Abandoned and Left Behind
        </Link>
        , is grounded in real WWII and Cold War-era history — the weapons, the era,
        the texture of 1969 America. Getting that right meant actual research, not
        just vibes: reading about the period, checking details, making sure the world
        felt earned rather than decorative.
      </p>
      <p>
        My second manuscript, Hell on Planet B, moves the same core question —
        loyalty, family, what war does to the people inside it — into a science
        fiction setting on another planet. Switching genres on purpose was partly a
        challenge to myself: could I build a convincing world from scratch instead of
        researching one that already existed? Historical fiction and sci-fi end up
        being two different tools aimed at the same target — showing what conflict
        costs a person, not just what it costs a side.
      </p>
      <p>
        Writing both taught me the same lesson research did: the first draft is never
        the good version, and that&rsquo;s fine. It just has to exist so there&rsquo;s
        something to fix.
      </p>
    </LDetailShell>
  );
}

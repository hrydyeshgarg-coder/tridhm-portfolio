import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "Abandoned and Left Behind — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Published Novel · Self-Published"
      title="Abandoned and Left Behind"
      meta="Published May 14, 2024 · 165 pages · Action-Adventure"
      tags={["Amazon", "Historical Fiction", "165 pages"]}
      externalHref="https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC"
      externalLabel="View on Amazon"
    >
      <p className="italic opacity-90">
        It&rsquo;s 1969. The Red Blood Gang era has risen up again. They decide to rob a
        bank, but it failed miserably. Now Harry and James are left behind, chased by
        the FBI. Now it is up to them to survive. As they keep their eyes open for the
        most dangerous gangs and FBI agents, they try to find their gang again, picking
        and losing from friends along the way. They stumble upon mysteries of the world
        and the US as they tried to relocate their family. Will they find a way back
        home? Or will they be executed for their crimes?
      </p>

      <p>
        A 165-page action-adventure novel researched against real{" "}
        <strong>World War II and Cold War history</strong> — the weapons, the era, and
        the world the characters move through are grounded in genuine historical
        research, not invented from nothing. The cover was developed in collaboration
        with a designer to match the tone of the story.
      </p>

      <p>
        The book was self-published on Amazon in 2024 and has sold copies to real
        readers, currently holding a <strong>4.0 out of 5</strong> rating.
      </p>

      <p>
        A second full-length manuscript, <strong>Hell on Planet B</strong>, was
        completed in 2024 — a story set during a war on another planet, following a man
        estranged from the family he fights to return to. It explores the consequences
        of conflict from a more personal, human angle than the first book. It is
        finished but not yet published.
      </p>
    </DetailShell>
  );
}

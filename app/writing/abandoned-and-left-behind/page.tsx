import Image from "next/image";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Abandoned and Left Behind — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Published Novel · Self-Published"
      title="Abandoned and Left Behind"
      meta="Published May 14, 2024 · 165 pages · Action-Adventure"
      tags={["Amazon", "Historical Fiction", "165 pages"]}
      externalHref="https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC"
      externalLabel="View on Amazon"
    >
      <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto sm:mx-0">
        <div className="rounded-lg overflow-hidden border shadow-sm" style={{ borderColor: "rgba(20,24,20,0.10)" }}>
          <Image src="/images/book-cover-front.jpg" alt="Abandoned and Left Behind front cover" width={300} height={480} className="w-full h-auto" />
        </div>
        <div className="rounded-lg overflow-hidden border shadow-sm" style={{ borderColor: "rgba(20,24,20,0.10)" }}>
          <Image src="/images/book-cover-back.jpg" alt="Abandoned and Left Behind back cover" width={300} height={480} className="w-full h-auto" />
        </div>
      </div>

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
        research. The cover was developed in collaboration with a designer to match the
        tone of the story.
      </p>
      <p>
        The book was self-published on Amazon in 2024 and has sold copies to real
        readers, currently holding a <strong>4.0 out of 5</strong> rating.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-75 text-[13.5px]" style={{ borderColor: "#b8763f" }}>
        &ldquo;Tridhm Garg is a young author. His love for writing came from his
        tutoring teacher, Mrs. Murphy. With the teacher&rsquo;s help, he has improved
        in his writing and editing. His interest is to connect with his new audiences
        and write more and more novels on different genres.&rdquo;
        <footer className="not-italic text-[11px] opacity-60 mt-1">— author bio, back cover</footer>
      </blockquote>
      <p>
        A second full-length manuscript, <strong>Hell on Planet B</strong>, was
        completed in 2024 — a story set during a war on another planet, following a man
        estranged from the family he fights to return to. It is finished but not yet
        published.
      </p>
    </LDetailShell>
  );
}

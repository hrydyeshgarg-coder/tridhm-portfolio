import Link from "next/link";
import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "Writing & Storytelling — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Interested In · 04"
      title="Writing & Storytelling — I Like Creating Worlds That Don't Exist"
      meta="On the questions data can't answer"
      tags={["Fiction", "Worldbuilding", "Novels"]}
    >
      <p>Writing gives me something that science and technology don&rsquo;t.</p>
      <p>There isn&rsquo;t always a correct answer.</p>
      <p>
        I&rsquo;ve written two novels.{" "}
        <Link href="/writing/abandoned-and-left-behind" className="underline">
          Abandoned and Left Behind
        </Link>{" "}
        became a roughly 40,000-word novel involving criminals abandoned by their
        gang, and I researched historical material, collaborated on the cover, and
        published the book. I later wrote Hell on Planet B, which explores war on
        another planet and the consequences of that conflict.
      </p>
      <p>One thing I really enjoy about writing is starting with almost nothing.</p>
      <p>Maybe I have a character.</p>
      <p>Maybe I have a setting.</p>
      <p>Maybe I just have one scene in my head.</p>
      <p>Then I have to create everything else.</p>
      <p>Who is this person?</p>
      <p>What does he want?</p>
      <p>What is he afraid of?</p>
      <p>Why does he hate someone?</p>
      <p>What would make him betray somebody?</p>
      <p>What would make him sacrifice himself?</p>
      <p>Suddenly that one idea starts becoming an entire world.</p>
      <p>
        Writing also lets me explore questions that aren&rsquo;t easy to answer with
        data.
      </p>
      <p>
        There isn&rsquo;t an algorithm that can perfectly explain why someone loves
        their family, hates someone, becomes violent, forgives somebody, stays loyal,
        or changes.
      </p>
      <p>Those are human questions.</p>
      <p>And I find them just as interesting as technical ones.</p>
      <p>
        Writing has also taught me that creating something takes patience. Forty
        thousand words don&rsquo;t appear because you had one good idea. There are
        bad paragraphs, scenes that don&rsquo;t work, ideas that have to be thrown
        away, and moments where you have absolutely no idea what happens next.
      </p>
      <p>Then you keep going.</p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        AI lets me explore what machines can learn. Writing lets me explore what
        people feel, fear, believe, and become.
      </blockquote>
    </DetailShell>
  );
}

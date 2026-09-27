import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "A Résumé Doesn't Show Everything That Matters — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="What Life Has Taught Me So Far · 05"
      title="I Learned That a Résumé Doesn't Show Everything That Matters"
      meta="On the gap between what's listed and what's real"
      tags={["Reflection", "Perspective", "Growth"]}
    >
      <p>
        I&rsquo;m proud of things like becoming an AP Scholar with Distinction, being
        inducted into National Honor Society, participating in research programs,
        publishing research, writing books, and doing leadership programs.
      </p>
      <p>
        But I&rsquo;m also starting to realize something kind of weird: some of the
        moments that have taught me the most would probably only take up one line on
        a résumé.
      </p>
      <p>
        A résumé can say I volunteered at a homeless shelter. It can&rsquo;t really
        explain what it felt like to interact with the people there.
      </p>
      <p>
        It can say I participated in a dialogue program. It doesn&rsquo;t show the
        moment when someone said something that made me rethink my own opinion.
      </p>
      <p>
        It can say I wrote a novel. It doesn&rsquo;t show all the times I stared at a
        blank page wondering what I was supposed to write next.
      </p>
      <p>
        And it can list an AI research project with an accuracy percentage, but it
        can&rsquo;t show all the mistakes and confusion that happened before I ever
        got that number.
      </p>
      <p>
        I obviously still care about grades, college, awards, and accomplishing
        things. I&rsquo;m a teenager — I&rsquo;d be lying if I said those things
        don&rsquo;t matter to me. But I&rsquo;m beginning to understand that they
        aren&rsquo;t the whole story.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#92400e" }}>
        What life has taught me so far: I want to accomplish big things, but I
        don&rsquo;t want my life to become just a list of accomplishments. I want the
        things I do to actually mean something to me — and hopefully to somebody else
        too.
      </blockquote>
    </LDetailShell>
  );
}

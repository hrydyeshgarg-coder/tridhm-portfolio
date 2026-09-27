import Link from "next/link";
import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "Being Bad at Something at First Is Normal — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="What Life Has Taught Me So Far · 04"
      title="I Learned That Being Bad at Something at First Is Normal"
      meta="On rewrites, runtime errors, and the myth of the first draft"
      tags={["Writing", "Coding", "Persistence"]}
    >
      <p>Writing a novel sounds pretty cool after you finish it.</p>
      <p>Writing the novel is a completely different story.</p>
      <p>
        I wrote a roughly 40,000-word book, researched its historical background,
        worked on the cover, edited it, published it, and eventually sold copies. I
        later wrote{" "}
        <Link href="/writing/abandoned-and-left-behind" className="underline">
          another novel
        </Link>{" "}
        about interplanetary war and its effects on people and families.
      </p>
      <p>
        There were definitely moments when something I wrote sounded way better in my
        head than it did on the page. I had to rewrite things, change ideas, and
        sometimes admit that something just wasn&rsquo;t working.
      </p>
      <p>
        Coding has taught me basically the same lesson in a different way. You can
        spend forever writing something, press Run, and immediately get an error.
        That can be annoying, but eventually you figure out what went wrong and try
        again.
      </p>
      <p>
        I used to think being good at something meant you should be able to do it
        correctly. Now I think being good at something usually means you have failed
        at it enough times that you know what to try next.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#b8763f" }}>
        What life has taught me so far: My first attempt doesn&rsquo;t need to be
        amazing. It just needs to exist so I have something to improve.
      </blockquote>
    </DetailShell>
  );
}

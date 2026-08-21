import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Doing Something \"Cool\" Isn't Enough for Me — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="What Life Has Taught Me So Far · 02"
      title="I Learned That Doing Something &ldquo;Cool&rdquo; Isn't Enough for Me"
      meta="On the shift from 'does it work' to 'what is it for'"
      tags={["AI Research", "Civic Technology", "Applied ML"]}
    >
      <p>
        I&rsquo;ve always been interested in computers and AI. At first, a lot of the
        excitement came from just figuring out how things worked. Training a model,
        writing Python code, seeing an accuracy number go up, or finally getting
        something to run after staring at an error message forever feels pretty
        awesome.
      </p>
      <p>
        But once I started doing actual research, I started thinking more about what
        all of this technology could be used for. One of my projects used{" "}
        <Link href="/l/research/satellite-poverty-cnn" className="underline">
          satellite imagery and AI to predict poverty levels
        </Link>
        , and I also helped build{" "}
        <Link href="/l/engineering/dfw-community-hub" className="underline">
          a community website
        </Link>{" "}
        that connected people with resources and allowed residents to report
        problems.
      </p>
      <p>
        That changed the way I looked at technology. I still think building an
        impressive model is cool. But now my next question is usually, &ldquo;Okay,
        but what can somebody actually do with this?&rdquo;
      </p>
      <p>
        I don&rsquo;t want to spend my life making complicated things just because
        they are complicated. I want to understand how technology can solve problems
        that real people deal with.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#4f46e5" }}>
        What life has taught me so far: The coolest technology isn&rsquo;t always the
        technology with the fanciest code. Sometimes it&rsquo;s the thing that makes
        one person&rsquo;s life a little easier.
      </blockquote>
    </LDetailShell>
  );
}

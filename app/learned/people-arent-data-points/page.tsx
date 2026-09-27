import Link from "next/link";
import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "People Aren't Data Points — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="What Life Has Taught Me So Far · 03"
      title="I Learned That People Aren't Data Points"
      meta="On the difference between a graph and a person"
      tags={["Community Service", "AI Research", "Perspective"]}
    >
      <p>
        I spend a lot of time looking at numbers. In AI research, there are datasets,
        percentages, accuracy scores, training samples, testing samples, and graphs.
        My{" "}
        <Link href="/research/satellite-poverty-cnn" className="underline">
          poverty-prediction research
        </Link>
        , for example, involved training a CNN using thousands of satellite images
        and measuring how accurately the model could predict poverty levels.
      </p>
      <p>On a computer screen, poverty can become a number.</p>
      <p>Then I volunteered at a homeless shelter.</p>
      <p>
        There, poverty wasn&rsquo;t a number anymore. I was helping distribute food,
        water, blankets, hygiene supplies, and other basic things to people who
        actually needed them.
      </p>
      <p>That difference stuck with me.</p>
      <p>
        A computer can tell me that a problem exists. Data can show me how large the
        problem is. AI might even help us figure out where the problem is happening.
        But none of that completely tells me what it feels like to be the person
        living through it.
      </p>
      <p>
        I think that is something I want to remember as I get deeper into AI. It is
        really easy to get excited about a 90% accuracy score and forget what the
        numbers might actually represent.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#c2427a" }}>
        What life has taught me so far: Data can help me understand the world, but I
        never want to forget that there are actual people behind the numbers.
      </blockquote>
    </DetailShell>
  );
}

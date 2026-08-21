import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "AI for Social Good — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="AI for Social Good"
      meta="Why the applications matter as much as the accuracy"
      tags={["Machine Learning", "Applied Research", "Public Impact"]}
    >
      <p>
        The technical side of machine learning is interesting on its own — but what
        actually pulled me in was noticing how often the hardest, most human problems
        are also the least-served by AI research. Poverty measurement. Depression
        screening. Network security for organizations that can&rsquo;t afford to share
        their data. These aren&rsquo;t glamorous benchmarks; they&rsquo;re slow,
        messy, and genuinely useful if you get them right.
      </p>
      <p>
        That&rsquo;s the thread connecting the research I&rsquo;ve actually done:{" "}
        <Link href="/l/research/satellite-poverty-cnn" className="underline">
          using satellite imagery to estimate poverty
        </Link>{" "}
        in regions where door-to-door surveys are expensive or impossible,{" "}
        <Link href="/l/research/depression-screening-dass42" className="underline">
          screening for depression
        </Link>{" "}
        from data that&rsquo;s already being collected, and{" "}
        <Link href="/l/research/federated-intrusion-detection" className="underline">
          detecting network intrusions
        </Link>{" "}
        without ever centralizing anyone&rsquo;s private data. Each one is a case
        where the model only matters if it can be trusted and actually deployed —
        which is a different, harder bar than just hitting a good accuracy number.
      </p>
      <p>
        I try to hold both halves of that at once: get the math right, and get the
        application right. A model that&rsquo;s 99% accurate but unusable by the
        people who need it hasn&rsquo;t done social good — it&rsquo;s done a paper.
      </p>
    </LDetailShell>
  );
}

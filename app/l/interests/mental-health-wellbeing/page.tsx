import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Mental Health & Wellbeing — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Mental Health & Wellbeing"
      meta="Early detection as an engineering problem, not just a medical one"
      tags={["Depression Screening", "Applied ML", "Public Health"]}
    >
      <p>
        Depression is common, under-diagnosed, and often caught late — not because
        nobody cares, but because screening is slow, self-reported, and easy to
        avoid. That gap between &ldquo;this is treatable if caught early&rdquo; and
        &ldquo;most people aren&rsquo;t screened early&rdquo; is what led me to work
        on{" "}
        <Link href="/l/research/depression-screening-dass42" className="underline">
          machine learning-based depression screening
        </Link>{" "}
        using the DASS-42 dataset.
      </p>
      <p>
        The goal wasn&rsquo;t to replace clinicians — it was to build something fast
        enough and accurate enough to flag risk early, especially for students and
        young adults who are the least likely to seek out a formal assessment on
        their own. XGBoost hit 98.72% accuracy in that work, which matters less as a
        leaderboard number and more as evidence that a lightweight, digital-first
        screening tool is actually feasible.
      </p>
      <p>
        This is also personal in a quieter way — being a teenager balancing research,
        writing, school, and community work means noticing, in myself and in peers,
        how easy it is to let mental health slide when everything else looks fine on
        paper. I&rsquo;d rather build tools that catch that earlier than most people
        do on their own.
      </p>
    </LDetailShell>
  );
}

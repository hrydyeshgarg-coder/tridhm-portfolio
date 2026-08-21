import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Federated & Privacy-Preserving ML — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Federated & Privacy-Preserving ML"
      meta="You shouldn't have to give up your data to benefit from a model trained on it"
      tags={["Federated Learning", "Cybersecurity", "Deep Learning"]}
    >
      <p>
        The standard way to train a good intrusion-detection model is to pool
        everyone&rsquo;s raw network traffic into one place. The problem is obvious
        once you say it out loud: most organizations can&rsquo;t or won&rsquo;t share
        their raw traffic with anyone, which makes centralized training impractical
        for exactly the environments — distributed, multi-organization networks —
        where it&rsquo;s needed most.
      </p>
      <p>
        That contradiction is what my paper on{" "}
        <Link href="/l/research/federated-intrusion-detection" className="underline">
          federated deep learning for intrusion detection
        </Link>{" "}
        tries to resolve. Each client trains a model on its own data, locally, and
        only the trained parameters — never the raw traffic — get shared and combined
        using Federated Averaging. The result held up at 99.68% accuracy, matching
        centralized approaches without asking anyone to give up their data.
      </p>
      <p>
        What I like about this direction generally is that it treats privacy as a
        constraint to design around, not an afterthought to bolt on later. A model
        that only works if everyone gives up their privacy first isn&rsquo;t really a
        solution for the organizations that need it most.
      </p>
    </LDetailShell>
  );
}

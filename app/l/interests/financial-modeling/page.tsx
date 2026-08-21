import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Financial Modeling — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Financial Modeling"
      meta="Sequences, not snapshots — markets only make sense over time"
      tags={["LSTM", "Time Series", "Quantitative Analysis"]}
    >
      <p>
        Most of the machine learning problems I&rsquo;ve worked on are about
        classifying something at a single point in time — is this area poor, is this
        person depressed, is this traffic an intrusion. Markets are different: a
        single day&rsquo;s price tells you almost nothing without the sequence of
        days before it. That&rsquo;s what drew me to{" "}
        <Link href="/l/research/lstm-market-forecast" className="underline">
          intraday market forecasting
        </Link>{" "}
        with LSTM networks — a genuinely sequential problem.
      </p>
      <p>
        Using ten years of Infosys Ltd. trading history, I trained two dedicated LSTM
        models — one for daily highs, one for daily lows — on 1,500-timestep
        sequences. Both models hit an R² above 0.94, meaning the historical pattern
        alone explains most of next-day price movement, without any news sentiment or
        macroeconomic data folded in.
      </p>
      <p>
        What keeps this interesting to me isn&rsquo;t the trading angle so much as the
        modeling challenge — figuring out how much of a system&rsquo;s future is
        actually encoded in its own past, and building something that can learn that
        pattern instead of being told it explicitly.
      </p>
    </LDetailShell>
  );
}

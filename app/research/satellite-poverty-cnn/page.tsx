import { DetailShell, Figure } from "@/components/DetailShell";

export const metadata = { title: "Satellite Poverty Prediction — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="IEEE Research Paper · Co-Author"
      title="Harnessing Satellite Imagery with Convolutional Neural Networks for Poverty Prediction"
      meta="2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA) · December 2024"
      tags={["Python", "PyTorch", "CNN", "Computer Vision"]}
      heroImage="/images/poverty-satellite-1.png"
      heroAlt="Satellite imagery of a densely built settlement"
      externalHref="https://ieeexplore.ieee.org/document/10882295"
      externalLabel="View on IEEE Xplore"
    >
      <p className="text-[13px] font-semibold" style={{ color: "#0d9463" }}>
        📍 Presented at the 2024 International Conference on Artificial Intelligence and Quantum
        Computation-Based Sensor Application (ICAIQSA), December 2024.
      </p>
      <p>
        Ground-truth poverty data is expensive and slow to collect — it usually means
        door-to-door household surveys across regions that are often hard to reach.
        This paper asks a different question: can a computer look at a satellite
        photograph and estimate how poor an area is, without anyone ever setting foot
        there?
      </p>
      <p>
        The approach uses a <strong>convolutional neural network (CNN)</strong> — the
        same class of model that powers modern image recognition — trained on satellite
        imagery of Africa. Rather than being told explicitly what to look for, the
        network learns on its own which visual patterns correlate with poverty: road
        density, the layout and materials of buildings, vegetation cover, and general
        land use.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <Figure src="/images/poverty-satellite-2.png" alt="Satellite imagery of settlement adjacent to green space" caption="Dense settlement bordering open land — the kind of texture and layout the model learns from." />
        <Figure src="/images/poverty-satellite-3.png" alt="Satellite imagery of settlement with unpaved roads" caption="Roof material, road paving, and building density all carry signal about an area's economic conditions." />
      </div>

      <p>
        To make sure the model was actually learning something generalizable, the
        dataset was split <strong>70% for training and 30% for testing</strong>. The
        model never saw the test images during training, so its performance on that
        held-out set is a fair measure of how well it would work on a brand-new region.
      </p>

      <Figure src="/images/poverty-methodology-trim.jpg" alt="Methodology flowchart: image dataset to data visualization, preprocessing, conversion, splitting, training, and result" caption="Fig. 1 — the full pipeline: raw image dataset → preprocessing → CNN training → evaluation on held-out test data." width={656} height={219} />

      <p>
        The final model reached <strong>90% accuracy</strong> on the test set — a strong
        result for a problem this indirect, where the model has to infer an economic
        condition purely from visual texture and geometry.
      </p>

      <Figure src="/images/poverty-satellite-4.png" alt="Satellite imagery of a rural village settlement" caption="A more rural settlement pattern from the same imagery set — sparser buildings, different road structure." />

      <p>
        The paper was co-authored and published to IEEE Xplore.
      </p>

      <div className="p-4 rounded-lg border-2" style={{ borderColor: "#0d9463", background: "#0d946308" }}>
        <p className="text-[12px] font-semibold flex items-center gap-2" style={{ color: "#0d9463" }}>
          📖 Cited By
        </p>
        <p className="text-[11.5px] opacity-75 mt-1.5 leading-relaxed">
          Hen Hen Lukmana, Muhammad Al-Husaini, Iseu Siti Aisyah, Lilik Hidayanti, Luh Desi
          Puspareni, Vito Hafizh Cahaya Putra, Muhammad Sidiq Asyaky, &ldquo;Edge-Aware
          AI-Model: A Lightweight Deep-Learning for Mapping of Child Growth,&rdquo; 2025 Tenth
          International Conference on Informatics and Computing (ICIC), pp.&nbsp;1&ndash;5, 2025.
        </p>
        <a
          href="https://ieeexplore.ieee.org/document/11309636"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold underline mt-2"
          style={{ color: "#0d9463" }}
        >
          View citing paper on IEEE Xplore
        </a>
      </div>
    </DetailShell>
  );
}

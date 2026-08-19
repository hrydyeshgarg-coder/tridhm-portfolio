import { HDetailShell } from "@/components/HDetailShell";

export const metadata = { title: "Satellite Poverty Prediction — Tridhm Garg" };

export default function Page() {
  return (
    <HDetailShell
      eyebrow="IEEE Research Paper — Co-Author"
      title="Harnessing Satellite Imagery with Convolutional Neural Networks for Poverty Prediction"
      meta="2024 International Conference on Artificial Intelligence and Quantum Computation-Based Sensor Application (ICAIQSA) · December 2024"
      externalHref="https://ieeexplore.ieee.org/document/10882295"
      externalLabel="View on IEEE Xplore"
    >
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
      <p>
        To make sure the model was actually learning something generalizable, the
        dataset was split <strong>70% for training and 30% for testing</strong>. The
        model never saw the test images during training, so its performance on that
        held-out set is a fair measure of how well it would work on a brand-new region.
      </p>
      <p>
        The final model reached <strong>90% accuracy</strong> on the test set — a strong
        result for a problem this indirect, where the model has to infer an economic
        condition purely from visual texture and geometry.
      </p>
      <p>
        The paper was co-authored, presented at the IEEE ICAIQSA conference, and
        published to IEEE Xplore.
      </p>
    </HDetailShell>
  );
}

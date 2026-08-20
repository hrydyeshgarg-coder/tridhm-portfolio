import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "Federated Intrusion Detection — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="IEEE Research Paper · Co-Author"
      title="Federated Deep Learning for Privacy-Preserving Intrusion Detection in Distributed Network Environments"
      meta="2026 6th International Conference on Intelligent Technologies (CONIT) · June 19–21, 2026"
      tags={["Python", "Federated Learning", "Cybersecurity", "Deep Learning"]}
      heroImage="/images/cyber-hero.png"
      heroAlt="Abstract illustration of distributed encrypted network nodes"
      externalHref="https://ieeexplore.ieee.org/document/11621464"
      externalLabel="View on IEEE Xplore"
    >
      <p>
        Traditional network intrusion detection systems work by pooling raw traffic
        data from every client into one central location to train a single model.
        That&rsquo;s a real privacy problem — organizations often can&rsquo;t or
        won&rsquo;t share their raw network data with anyone else, which makes
        centralized systems impractical for distributed environments where multiple
        independent networks need protection.
      </p>
      <p>
        This paper proposes a <strong>federated learning</strong> architecture instead.
        A deep neural network is trained separately on each distributed client&rsquo;s
        own data — the raw data never leaves that client. Only the trained
        model&rsquo;s parameters are sent out, and they&rsquo;re combined across all
        clients using the <strong>Federated Averaging (FedAvg) algorithm</strong> to
        build one global intrusion-detection model, without any client ever exposing
        its actual network traffic.
      </p>

      <Figure src="/images/cyber-architecture.jpg" alt="System architecture: CICIDS2017 dataset flows through preprocessing, label encoding, client data splitting, per-client DNN training, FedAvg aggregation, and global evaluation" caption="Fig. 1 — proposed system architecture, trained on the CICIDS2017 intrusion-detection dataset." width={900} height={640} />

      <p>
        The results held up: <strong>99.68% accuracy</strong> and{" "}
        <strong>99.76% ± 0.03% cross-validation accuracy</strong>, meaning performance
        stayed consistent even as the data was split differently across clients. The
        model also produced near-perfect F1 scores broken down by individual attack
        type.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <Figure src="/images/cyber-accuracy-loss.jpg" alt="Client 1 accuracy and loss plots across training epochs" caption="Client-side accuracy and loss converge within a handful of epochs." />
        <Figure src="/images/cyber-cv-fold.jpg" alt="Cross-validation accuracy and loss per fold, all near 0.997" caption="Fig. 5 — 5-fold cross-validation of the aggregated global model, mean accuracy 0.9976." />
      </div>

      <p>
        The core finding: this approach matches the performance of centralized
        training while actually preserving data privacy — directly applicable to
        real-world cybersecurity services.
      </p>
    </LDetailShell>
  );
}

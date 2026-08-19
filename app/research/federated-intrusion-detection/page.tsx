import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "Federated Intrusion Detection — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="IEEE Research Paper · Co-Author"
      title="Federated Deep Learning for Privacy-Preserving Intrusion Detection in Distributed Network Environments"
      meta="2026 6th International Conference on Intelligent Technologies (CONIT) · June 19–21, 2026"
      tags={["Python", "Federated Learning", "Cybersecurity", "Deep Learning"]}
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

      <p>
        The results held up: <strong>99.68% accuracy</strong> and{" "}
        <strong>99.76% ± 0.03% cross-validation accuracy</strong>, meaning performance
        stayed consistent even as the data was split differently across clients. The
        model also produced near-perfect F1 scores broken down by individual attack
        type — not just accurate on average, but reliable at catching specific kinds of
        intrusions.
      </p>

      <p>
        The core finding: this approach matches the performance of centralized
        training while actually preserving data privacy — making it directly
        applicable to real-world cybersecurity services where organizations need
        strong intrusion detection but can&rsquo;t pool their raw data.
      </p>
    </DetailShell>
  );
}

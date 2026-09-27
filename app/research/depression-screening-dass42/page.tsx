import { DetailShell, Figure } from "@/components/DetailShell";

export const metadata = { title: "Depression Screening ML — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="IEEE Research Paper · Co-Author · Accepted"
      title="Machine Learning-Based Mental Health Assessment and Depression Screening Using the U.S. DASS-42 Dataset"
      meta="International Conference on Emerging Digital Intelligence and Generative Engineering (EDIGE 2026) · October 30–31, 2026"
      tags={["Python", "XGBoost", "Random Forest", "ANN", "EDIGE 2026"]}
      heroImage="/images/depression-hero.png"
      heroAlt="Illustration of mental health analytics using AI and machine learning"
    >
      <p className="text-[13px] font-semibold" style={{ color: "#0d9463" }}>
        📅 Accepted — presenting at the International Conference on Emerging Digital
        Intelligence and Generative Engineering (EDIGE 2026), October 30–31, 2026.
      </p>
      <p>
        Identifying depression early can help ensure timely intervention and improved
        mental health outcomes. This paper presents a machine learning approach to
        binary depression classification using a U.S.-specific subset of the publicly
        available <strong>DASS-42 dataset</strong>.
      </p>
      <p>
        Three models were trained and compared under the same pre-processing
        conditions: <strong>Random Forest</strong>, <strong>XGBoost</strong>, and an{" "}
        <strong>Artificial Neural Network (ANN)</strong>.
      </p>

      <Figure src="/images/depression-infographic2.png" alt="Infographic summarizing the dataset, methodology, model comparison, and impact of the depression classification study" caption="Study overview — dataset (3,730 balanced samples), methodology, model comparison, and real-world impact." width={1672} height={941} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-lg border p-4" style={{ borderColor: "rgba(20,24,20,0.12)", background: "#ffffff" }}>
          <p className="text-[11px] opacity-55 mb-2">XGBOOST</p>
          <p className="text-[15px] font-bold" style={{ color: "#c2610d" }}>98.72%</p>
          <p className="text-[11px] opacity-60">Accuracy</p>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "rgba(20,24,20,0.12)", background: "#ffffff" }}>
          <p className="text-[11px] opacity-55 mb-2">ANN</p>
          <p className="text-[15px] font-bold">97.20%</p>
          <p className="text-[11px] opacity-60">Accuracy</p>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: "rgba(20,24,20,0.12)", background: "#ffffff" }}>
          <p className="text-[11px] opacity-55 mb-2">RANDOM FOREST</p>
          <p className="text-[15px] font-bold">92.94%</p>
          <p className="text-[11px] opacity-60">Accuracy</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Figure src="/images/depression-confusion-matrix.png" alt="Confusion matrices for XGBoost, ANN, and Random Forest" caption="Fig. 2 — confusion matrices for all three models on the held-out test set." width={532} height={694} />
        <Figure src="/images/depression-learning-curve.png" alt="Accuracy and loss learning curves for the ANN across training epochs" caption="Fig. 3 — ANN accuracy/loss curves across training epochs, showing stable convergence." width={517} height={520} />
      </div>

      <p>
        XGBoost was the top performer and was further tested on unseen samples, where
        it proved suitable for fast prediction — making it a potential tool for{" "}
        <strong>digital depression screening for students and young adults</strong>.
      </p>
      <p className="text-[13px] opacity-60 italic">
        This paper has been accepted to EDIGE 2026 and is scheduled for presentation at
        the end of October 2026. This page will be updated with the IEEE Xplore link
        once it&rsquo;s published.
      </p>
    </DetailShell>
  );
}

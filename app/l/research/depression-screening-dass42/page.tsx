import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Depression Screening ML — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Research Paper · Submitted, Not Yet Accepted"
      title="Machine Learning-Based Mental Health Assessment and Depression Screening Using the U.S. DASS-42 Dataset"
      meta="Co-Author · Submitted for peer review"
      tags={["Python", "XGBoost", "Random Forest", "ANN", "Under Review"]}
    >
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

      <div className="grid grid-cols-3 gap-3">
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

      <p>
        XGBoost was the top performer and was further tested on unseen samples, where
        it proved suitable for fast prediction — making it a potential tool for{" "}
        <strong>digital depression screening for students and young adults</strong>.
      </p>
      <p className="text-[13px] opacity-60 italic">
        This paper has been submitted for peer review and has not yet been accepted or
        published. This page will be updated with the venue and publication link once a
        decision is reached.
      </p>
    </LDetailShell>
  );
}

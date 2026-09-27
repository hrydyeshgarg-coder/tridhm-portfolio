import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "UT Dallas K-12 Outreach — AI Deep Dive — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Training · Jun – Aug 2025"
      title="UT Dallas K-12 Outreach — AI Deep Dive"
      meta="8-week intensive technical training program"
      tags={["Python", "PyTorch", "NumPy", "Pandas", "scikit-learn", "Matplotlib"]}
      titleLogo="/images/logo-utd.webp"
    >
      <p>
        Through the UT Dallas K-12 Outreach AI Deep Dive program, I completed an
        intensive technical training initiative focused on the core fundamentals of
        Artificial Intelligence and advanced machine learning models.
      </p>

      <Figure
        src="/images/utd-k12-sign.png"
        alt="Illustration of Tridhm at UT Dallas, next to the UT Dallas K-12 Outreach sign"
        width={1397}
        height={1126}
      />

      <p>
        During this hands-on program, I investigated, designed, and coded{" "}
        <strong>Greedy Algorithms</strong>, while also building, inspecting, and
        training both standard <strong>Neural Networks</strong> and{" "}
        <strong>Convolutional Neural Networks (CNNs)</strong>.
      </p>
      <p>
        To power these models, I mastered essential Python programming techniques
        like lambda functions and gained extensive practical experience using
        industry-standard libraries, including Pandas, PyTorch, NumPy, scikit-learn,
        and Matplotlib.
      </p>
      <p>
        This experience allowed me to bridge the gap between complex mathematical
        theory and real-world data science applications.
      </p>
    </LDetailShell>
  );
}

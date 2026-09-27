import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "Flower Mound Leadership Program — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Leadership · Aug 2026 – Apr 2027"
      title="Flower Mound Leadership Program"
      meta="Advanced personal and professional growth initiative"
      tags={["Team Management", "Accountability", "Character Development"]}
      titleLogo="/images/logo-student-leadership.png"
    >
      <p>
        Through the Flower Mound Leadership Program, I am participating in an
        advanced personal and professional growth initiative focused on long-term
        community impact.
      </p>

      <Figure
        src="/images/fm-leadership-sign.png"
        alt="Illustration of Tridhm at a Flower Mound Leadership Program session"
        width={1448}
        height={1086}
      />

      <p>
        Serving in an active role, I focus on developing essential organizational
        skills, including team management, team building, accountability, and
        strategic goal setting.
      </p>
      <p>
        Beyond learning tactical leadership strategies, this program emphasizes
        ethical development, helping me build a strong foundation of character,
        personal integrity, and responsible citizenship that I bring to all of my
        team initiatives.
      </p>
    </LDetailShell>
  );
}

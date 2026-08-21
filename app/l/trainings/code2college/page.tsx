import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Code2College — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Training · Jun 2026 – Present"
      title="Code2College"
      meta="Workforce development and technical training initiative"
      tags={["Python", "Software Development", "Mentorship"]}
      titleLogo="/images/logo-code2college.png"
    >
      <p>
        Through the Code2College program, I engaged in an intensive workforce
        development and technical training initiative designed to prepare high
        school students for careers in STEM.
      </p>
      <p>
        During this summer program, I mastered Python programming and applied it
        directly to building hands-on software development projects. Working
        alongside industry mentors, I learned to write clean, efficient code,
        troubleshoot software bugs, and manage the full project lifecycle.
      </p>
      <p>
        This experience bridged the gap between academic learning and early career
        immersion, allowing me to build a strong portfolio of Python projects while
        developing the professional readiness required to excel in elite technology
        and software engineering environments.
      </p>
    </LDetailShell>
  );
}

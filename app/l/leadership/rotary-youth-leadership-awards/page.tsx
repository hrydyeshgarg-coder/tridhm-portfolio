import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "Rotary Youth Leadership Awards — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Leadership · June 2026"
      title="Rotary Youth Leadership Awards (RYLA)"
      meta="Denton, TX · 40-hour intensive leadership development program"
      tags={["Communication", "Teamwork", "Problem Solving"]}
      titleLogo="/images/logo-rotary.png"
      heroImage="/images/ryla-collage-1.png"
      heroAlt="RYLA — Rotary Youth Leadership Awards collage of team activities"
    >
      <p>
        In June 2026, I participated in the Rotary Youth Leadership Awards (RYLA) in
        Denton, TX, completing an intensive 40-hour leadership development program.
      </p>
      <p>
        As an active member, I engaged in hands-on, team-based activities designed to
        build and test core competencies in communication and collaborative problem-
        solving. This immersive experience challenged me to apply leadership
        strategies in real-time scenarios while actively practicing open-mindedness,
        valuing diverse perspectives, and learning how to unite a team to achieve a
        common goal.
      </p>

      <Figure
        src="/images/ryla-collage-2.png"
        alt="RYLA — communication, collaboration, leadership, and innovation"
        caption="RYLA's four core pillars: Communication, Collaboration, Leadership, and Innovation — 'Learn. Lead. Inspire.'"
        width={1536}
        height={1024}
      />
    </LDetailShell>
  );
}

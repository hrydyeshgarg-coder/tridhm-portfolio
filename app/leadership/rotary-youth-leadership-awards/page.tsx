import { DetailShell, Figure } from "@/components/DetailShell";

export const metadata = { title: "Rotary Youth Leadership Awards — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Leadership · June 2026"
      title="Rotary Youth Leadership Awards (RYLA)"
      meta="Denton, TX · 40-hour intensive leadership development program"
      tags={["Communication", "Teamwork", "Problem Solving"]}
      titleLogo="/images/logo-rotary.png"
    >
      <p>
        In June 2026, I participated in the Rotary Youth Leadership Awards (RYLA) in
        Denton, TX, completing an intensive 40-hour leadership development program.
      </p>

      <Figure
        src="/images/ryla-sign.png"
        alt="Illustration of Tridhm standing next to the RYLA (Rotary Youth Leadership Awards) sign"
        width={1473}
        height={1068}
      />

      <p>
        As an active member, I engaged in hands-on, team-based activities designed to
        build and test core competencies in communication and collaborative problem-
        solving. This immersive experience challenged me to apply leadership
        strategies in real-time scenarios while actively practicing open-mindedness,
        valuing diverse perspectives, and learning how to unite a team to achieve a
        common goal.
      </p>
    </DetailShell>
  );
}

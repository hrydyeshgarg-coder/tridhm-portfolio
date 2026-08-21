import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "Roar 4 Change — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Community Service · Jul 2023 – Dec 2025"
      title="Roar 4 Change — Shelter Coordinator"
      meta="2.5 years supporting homeless shelters across multiple DFW cities"
      tags={["Crisis Logistics", "Community Leadership", "Public Service"]}
      titleLogo="/images/logo-roar4change.jpg"
    >
      <p>
        My volunteer experience with Roar 4 Change provided me with a profound
        opportunity to develop critical skills in crisis logistics, empathetic
        communication, and high-pressure team coordination.
      </p>

      <Figure
        src="/images/roar4change-sign.png"
        alt="Illustration of Tridhm at a Roar 4 Change shelter"
        width={1448}
        height={1086}
      />

      <p>
        By assisting shelter staff with rapid setup, intake procedures, and safety
        enforcement, I gained firsthand experience managing public safety protocols
        and organizing resources under tight deadlines.
      </p>
      <p>
        Distributing essential provisions taught me the logistics of community
        resource management, while working directly with displaced families allowed
        me to cultivate deep patience, emotional intelligence, and professional
        composure during sensitive situations.
      </p>
      <p>
        Collaborating with a diverse group of volunteers sharpened my adaptability
        and teamwork, giving me a strong foundation in community leadership and
        public service that I carry into all my future endeavors.
      </p>
    </LDetailShell>
  );
}

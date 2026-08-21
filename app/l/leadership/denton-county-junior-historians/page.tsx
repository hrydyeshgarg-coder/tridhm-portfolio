import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Denton County Junior Historians — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Leadership · Sep 2025 – May 2027"
      title="Denton County Junior Historians"
      meta="Sponsored by the Denton County Office of History and Culture"
      tags={["Local History", "Museum Curation", "Archival Research"]}
      titleLogo="/images/logo-denton-county.jpg"
    >
      <p>
        I am a member of the Denton County Junior Historians, a passionate group of
        high school students preserving the vibrant history of North Texas.
        Sponsored by the Denton County Office of History and Culture, our chapter
        researches local landmarks, curates museum collections, and creates
        award-winning multimedia projects.
      </p>
      <p>
        Whether I am scriptwriting historical videos, handling archival materials, or
        volunteering at community heritage fairs, I am dedicated to making local
        history accessible, engaging, and unforgettable.
      </p>
    </LDetailShell>
  );
}

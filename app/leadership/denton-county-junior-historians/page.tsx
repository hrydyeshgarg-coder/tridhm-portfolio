import { DetailShell, Figure } from "@/components/DetailShell";

export const metadata = { title: "Denton County Junior Historians — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
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

      <Figure
        src="/images/denton-county-sign.png"
        alt="Illustration of Tridhm at the Denton County courthouse, next to the Denton County Junior Historians sign"
        width={1448}
        height={1086}
      />

      <p>
        Whether I am scriptwriting historical videos, handling archival materials, or
        volunteering at community heritage fairs, I am dedicated to making local
        history accessible, engaging, and unforgettable.
      </p>
    </DetailShell>
  );
}

import { LDetailShell, Figure } from "@/components/LDetailShell";

export const metadata = { title: "DFW Community Hub — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Software Engineering · Live in Production"
      title="DFW Community Hub"
      meta="Developer · June – August 2026 · 20 hours per week"
      tags={["Next.js", "FastAPI", "Supabase", "TypeScript", "Python"]}
      titleLogo="/images/logo-civichub.png"
      heroImage="/images/dfwcomp-home.jpg"
      heroAlt="DFW Community Hub homepage screenshot"
      externalHref="https://www.dfwcomp.org"
      externalLabel="Visit dfwcomp.org"
    >
      <p>
        DFW Community Hub is a civic intelligence platform covering the entire
        Dallas–Fort Worth metroplex — built and shipped to real users, not a classroom
        exercise. It runs on a Next.js and TypeScript frontend backed by a Python
        FastAPI service and a Supabase (Postgres) database, deployed and live in
        production today.
      </p>
      <p>As a developer on the project, the work centered on the features residents actually rely on:</p>
      <ul className="list-disc pl-5 flex flex-col gap-2">
        <li>
          A <strong>civic issue reporting system</strong> that routes each submitted
          report to the correct city department automatically, based on category and
          ZIP code.
        </li>
        <li>
          A searchable directory of <strong>child and family support opportunities</strong>{" "}
          across DFW — resources often scattered across dozens of disconnected city and
          nonprofit websites, brought into one place.
        </li>
        <li>
          Public resident tools covering <strong>organizations, volunteer
          opportunities, and city-level data</strong>, so residents can find real help
          without knowing which of thirty different city departments to call.
        </li>
      </ul>

      <Figure src="/images/dfwcomp-map.jpg" alt="DFW Community Hub 'Know Your City' Dallas parks map view" caption="The Know Your City map view — real, live public data for Dallas residents." />

      <p>
        The platform is genuinely live — not a prototype or a portfolio demo. Real
        residents can visit it, report an issue in their neighborhood today, and have
        it reach the right people.
      </p>
    </LDetailShell>
  );
}

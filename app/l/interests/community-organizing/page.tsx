import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Community Organizing — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Community Organizing"
      meta="The work that doesn't show up as a percentage anywhere"
      tags={["Roar 4 Change", "Leadership", "Volunteering"]}
    >
      <p>
        For two and a half years I&rsquo;ve worked with Roar 4 Change as a shelter
        coordinator, supporting homeless shelters across multiple DFW cities —
        helping with intake, organizing supplies, and just being present for
        residents who needed something steadier than a one-time donation drop-off.
      </p>
      <p>
        Alongside that, leadership programs — Rotary Youth Leadership Awards, Denton
        County Junior Historians, the Flower Mound Leadership Program, and Student
        Council — have all been about the same underlying skill: getting a group of
        people with different opinions to actually move somewhere together, which
        turns out to have very little to do with being the loudest person in the
        room.
      </p>
      <p>
        None of this shows up as an accuracy score or a GitHub commit. But it&rsquo;s
        probably taught me more about how systems actually fail people — and how a
        small, consistent effort compounds over years — than any single project has.
        It&rsquo;s also the reason civic technology and AI-for-good work feel
        connected to me instead of separate: I&rsquo;ve seen both the spreadsheet
        version of a problem and the version where you&rsquo;re handing someone a
        blanket.
      </p>
    </LDetailShell>
  );
}

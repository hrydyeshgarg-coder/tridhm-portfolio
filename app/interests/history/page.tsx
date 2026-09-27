import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "History — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interested In · 03"
      title="History — I Want to Understand Why Things Happened"
      meta="On decisions made without the benefit of hindsight"
      tags={["Denton County Junior Historians", "Historical Research", "Writing"]}
    >
      <p>
        I like history, but I&rsquo;m not interested in it just because I want to
        memorize dates, battles, presidents, or treaties.
      </p>
      <p>The part that interests me is why.</p>
      <p>
        Why did somebody make that decision? Why did two countries go to war? Why did
        ordinary people support something? Why didn&rsquo;t somebody stop it? What
        did people living through the event actually experience? And what happened
        afterward?
      </p>
      <p>
        My interest in history has taken me outside the classroom. Through Denton
        County Junior Historians, I&rsquo;ve helped build museum exhibits,
        volunteered at historical events, and researched projects using county
        archives.
      </p>
      <p>
        History has also worked its way into my writing. While writing Abandoned and
        Left Behind, I researched World War II and weapons in America during the Cold
        War.
      </p>
      <p>
        I think what fascinates me is that history looks obvious after it happens.
      </p>
      <p>
        We know what decision caused what consequence because we&rsquo;re looking
        backward.
      </p>
      <p>The people living through it didn&rsquo;t have that advantage.</p>
      <p>They were making decisions without knowing what would happen next.</p>
      <p>That actually connects back to my interest in technology.</p>
      <p>
        We&rsquo;re living through a period where AI is changing incredibly quickly.
        We don&rsquo;t know exactly what its impact will be 10, 20, or 50 years from
        now.
      </p>
      <p>One day, people will probably study this period as history too.</p>
      <p>That makes me wonder:</p>
      <p className="italic">What will they think about the decisions we&rsquo;re making today?</p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        History helps me understand how people made decisions in the past, and that
        makes me think harder about the decisions we&rsquo;re making about our
        future.
      </blockquote>
    </LDetailShell>
  );
}

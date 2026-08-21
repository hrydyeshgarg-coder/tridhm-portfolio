import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Research — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interested In · 02"
      title="Research — I Like Questions That Don't Already Have Answers"
      meta="On not knowing, and why that's the interesting part"
      tags={["Research", "IEEE Papers", "Curiosity"]}
    >
      <p>
        Research has become another major interest of mine because it&rsquo;s very
        different from normal schoolwork.
      </p>
      <p>
        In school, most questions already have answers. The teacher knows the answer.
        The textbook knows the answer. Usually, I&rsquo;m trying to figure out
        whether I know the answer.
      </p>
      <p>Research feels different.</p>
      <p>You can start with:</p>
      <p className="italic">&ldquo;I don&rsquo;t know.&rdquo;</p>
      <p>And that&rsquo;s completely okay.</p>
      <p>
        My research experiences have included using CNNs with satellite imagery for
        poverty prediction and LSTMs for market forecasting. Both eventually led to
        conference presentations and published papers.
      </p>
      <p>
        Of course I&rsquo;m proud of getting research published, but what interests
        me more is everything that happens before the finished paper.
      </p>
      <p>You start with a question.</p>
      <p>You find data.</p>
      <p>You realize the data isn&rsquo;t as simple as you thought.</p>
      <p>You build something.</p>
      <p>It doesn&rsquo;t work.</p>
      <p>You change something.</p>
      <p>Now something else doesn&rsquo;t work.</p>
      <p>Eventually you get a result, and then you have another problem:</p>
      <p className="italic">What does this result actually mean?</p>
      <p>
        Research has made me realize that not knowing something isn&rsquo;t
        necessarily a weakness.
      </p>
      <p>Sometimes &ldquo;I don&rsquo;t know&rdquo; is the beginning of something interesting.</p>
      <p>That&rsquo;s the part I want to keep exploring.</p>
      <p>
        I don&rsquo;t want my education to only be about learning answers other
        people already discovered. Eventually, I want to understand things deeply
        enough that I can start asking some of my own questions.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        I like taking something I don&rsquo;t understand and slowly figuring out how
        I could find an answer.
      </blockquote>
    </LDetailShell>
  );
}

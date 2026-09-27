import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "About Me — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="About Me"
      title="Hi, I'm Tridhm Garg"
      meta="A high school student still figuring out where all of this is headed"
      tags={["AI", "Research", "Writing", "History", "Community"]}
    >
      <p>
        A high school student who is still figuring out exactly where all of my
        interests will take me.
      </p>
      <p>
        If there is one thing that connects most of what I do, it is curiosity. I
        tend to get interested in something and then want to understand what is
        happening underneath it. That is what originally pulled me toward artificial
        intelligence. I don&rsquo;t just want to use AI — I want to understand how
        different models evolved, how they learn from datasets, why one model works
        better than another, and what happens when we change the data or training
        process.
      </p>
      <p>
        That curiosity has taken me into AI research, where I&rsquo;ve worked with
        CNNs for poverty prediction and LSTMs for market forecasting. I&rsquo;ve also
        spent time learning Python, neural networks, deep learning, computer vision,
        NLP, and other areas of AI.
      </p>
      <p>But technology is only one part of me.</p>
      <p>
        I&rsquo;m also really interested in history and writing. I&rsquo;ve worked on
        museum exhibits and researched local history through county archives.
        I&rsquo;ve also written two novels, including a 40,000-word book that I
        independently researched and published. Writing gives me a completely
        different way to think about people, conflict, choices, and consequences.
      </p>
      <p>
        Another part of my life has been community and leadership. I&rsquo;ve
        participated in leadership programs, Model UN, Student Council, community
        projects, and volunteer work. Working in shelters especially gave me a
        perspective that I couldn&rsquo;t get from a classroom or a dataset.
      </p>
      <p>
        I don&rsquo;t see these as completely separate interests. AI makes me curious
        about how machines learn. History makes me curious about why societies
        change. Writing makes me curious about how people think. Research makes me
        comfortable with questions I can&rsquo;t immediately answer. Volunteering and
        leadership remind me that whatever I learn eventually exists in a world
        filled with real people.
      </p>
      <p>I&rsquo;m still learning, experimenting, writing, building, and changing my mind about things.</p>
      <p>And I think that&rsquo;s probably the best description of me right now:</p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        I&rsquo;m someone who likes asking why, figuring out how things work, and
        then wondering what I can do with what I&rsquo;ve learned.
      </blockquote>
    </DetailShell>
  );
}

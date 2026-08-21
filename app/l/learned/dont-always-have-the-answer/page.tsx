import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "I Don't Always Have to Have the Answer — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="What Life Has Taught Me So Far · 01"
      title="I Learned That I Don't Always Have to Have the Answer"
      meta="On leadership, listening, and letting go of being right"
      tags={["Leadership", "Student Council", "Model UN"]}
    >
      <p>
        For a long time, I thought being a leader meant being confident, speaking up,
        and knowing what to do. I thought if I was put in charge of something, people
        expected me to have the answer. But after being involved in leadership
        programs, Student Council, Model UN, and Schoolhouse Dialogues, I started
        realizing that leadership is actually a lot more complicated than that.
      </p>
      <p>
        Sometimes I have an idea that sounds great in my head, and then somebody else
        points out something I completely missed. Sometimes I disagree with someone
        at first, but once I actually listen to why they think that way, their
        opinion starts making more sense. I&rsquo;ve learned that listening
        doesn&rsquo;t mean I&rsquo;m weak or that I don&rsquo;t know what I&rsquo;m
        doing. It means I&rsquo;m willing to admit that I don&rsquo;t know everything.
      </p>
      <p>
        I&rsquo;m still learning this because, like most people my age, I sometimes
        want to prove that my idea is the right one. But I&rsquo;m getting better at
        stopping myself and hearing other people out.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#7c3aed" }}>
        What life has taught me so far: Being a leader isn&rsquo;t about being the
        smartest or loudest person in the room. Sometimes it&rsquo;s about knowing
        when to stop talking and actually listen.
      </blockquote>
    </LDetailShell>
  );
}

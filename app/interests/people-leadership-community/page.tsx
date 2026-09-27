import { DetailShell } from "@/components/DetailShell";

export const metadata = { title: "People, Leadership & Community — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Interested In · 05"
      title="People, Leadership & Community — I Want to Understand the Human Side"
      meta="On the interest I didn't recognize as an interest at first"
      tags={["Leadership", "Community Service", "Roar 4 Change"]}
    >
      <p>This is probably the interest I didn&rsquo;t recognize as an &ldquo;interest&rdquo; at first.</p>
      <p>A lot of my activities involve people.</p>
      <p>
        Through RYLA and the Flower Mound Leadership Program, I&rsquo;ve worked on
        communication, problem solving, teamwork, accountability, goal setting,
        open-mindedness, character, and integrity.
      </p>
      <p>
        Through Model UN and Schoolhouse Dialogues, I&rsquo;ve had to think about
        problems from perspectives other than my own and actually listen to people
        who might disagree with me.
      </p>
      <p>And volunteering showed me something completely different.</p>
      <p>
        At Roar 4 Change, I helped set up temporary sleeping arrangements and
        distribute food, water, blankets, hygiene products, and other supplies to
        individuals and families staying in shelters.
      </p>
      <p>
        Those experiences made me interested in something that is probably harder to
        understand than any AI model:
      </p>
      <p className="italic">People.</p>
      <p>
        Why do we disagree? Why can two people experience the same event and remember
        it completely differently? Why does someone follow one leader but not
        another? How do you help someone without assuming you already understand
        what they need? How do people with completely different opinions actually
        work together?
      </p>
      <p>I don&rsquo;t think I have answers to most of those questions yet.</p>
      <p>But I think understanding them matters.</p>
      <p>Especially if I eventually work in AI.</p>
      <p>
        We can create incredibly intelligent machines, but those machines are going
        to exist in a world full of very complicated human beings.
      </p>
      <p>
        Someone has to decide how AI is used. Someone has to decide what problems
        matter. Someone has to think about who benefits. And someone has to remember
        that behind a dataset might be an actual person.
      </p>
      <blockquote className="border-l-2 pl-4 italic opacity-90" style={{ borderColor: "#0d9463" }}>
        The more I learn about technology, the more I realize that understanding
        people may be just as important as understanding machines.
      </blockquote>
    </DetailShell>
  );
}

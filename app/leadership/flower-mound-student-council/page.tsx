import { DetailShell, Figure } from "@/components/DetailShell";

export const metadata = { title: "Flower Mound High School Student Council — Tridhm Garg" };

export default function Page() {
  return (
    <DetailShell
      eyebrow="Leadership · Sep 2023 – Jan 2024"
      title="Flower Mound High School Student Council"
      meta="Weekly meetings, campus events, and school spirit"
      tags={["Event Planning", "Teamwork", "Creative Problem-Solving"]}
      titleLogo="/images/logo-fmhs.png"
    >
      <p>
        As a member of the Flower Mound High School Student Council, I collaborate
        with student leaders and school staff to foster school spirit and support our
        campus community. I attend weekly meetings to brainstorm, pitch, and organize
        campus activities.
      </p>

      <Figure
        src="/images/fm-student-council-sign.png"
        alt="Illustration of Tridhm at Flower Mound High School, next to the Student Council sign"
        width={1448}
        height={1086}
      />

      <p>
        My active contributions include designing and setting up decorations for the
        Flower Mound 9 campus during the high-energy Flower Mound Showdown week, as
        well as planning and executing our Librarian Appreciation Event to honor our
        school&rsquo;s staff.
      </p>
      <p>
        Through this role, I focus on teamwork, event planning, and creative
        problem-solving to make our school a more welcoming and vibrant place.
      </p>
    </DetailShell>
  );
}

import Link from "next/link";
import { LDetailShell } from "@/components/LDetailShell";

export const metadata = { title: "Civic Technology — Tridhm Garg" };

export default function Page() {
  return (
    <LDetailShell
      eyebrow="Interest"
      title="Civic Technology"
      meta="Software that has to work for people who never asked to use it"
      tags={["Next.js", "Public Infrastructure", "DFW"]}
    >
      <p>
        Most software gets to choose its users — people opt in because they want the
        product. Civic software doesn&rsquo;t get that luxury. A resident reporting a
        pothole, or a family looking for support services, isn&rsquo;t a customer
        who&rsquo;s excited to be there; they&rsquo;re just trying to get something
        done, often on a bad day. That constraint is what makes civic tech genuinely
        harder than it looks, and it&rsquo;s what pulled me into working on{" "}
        <Link href="/l/engineering/dfw-community-hub" className="underline">
          DFW Community Hub
        </Link>
        .
      </p>
      <p>
        The platform routes issue reports to the correct city department by category
        and ZIP code, and pulls together child and family support resources that are
        normally scattered across dozens of disconnected city and nonprofit websites.
        None of that is flashy. All of it is the kind of thing that only matters if it
        actually works every single time, for people with no patience for a confusing
        interface.
      </p>
      <p>
        Working on something that&rsquo;s live in production — not a class project,
        not a demo — changed how seriously I take edge cases and error states. A bug
        in a school project is a bad grade. A bug in a civic reporting tool is someone
        whose real problem doesn&rsquo;t reach the right department.
      </p>
    </LDetailShell>
  );
}

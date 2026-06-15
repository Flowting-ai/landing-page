import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { CrewVisual } from "./visuals";

export default function CrewSection() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="Multi-agent workforce"
          title="One manager. A coordinated crew."
          lead="One audit trail across your team. No more personal AI accounts leaking customer data."
        />
        <Reveal delay={0.14}>
          <div className="mx-auto mt-12 max-w-3xl">
            <CrewVisual />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

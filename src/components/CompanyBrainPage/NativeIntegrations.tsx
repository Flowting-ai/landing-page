import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { IntegrationsGrid } from "./visuals";

export default function NativeIntegrations() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="Native integrations"
          title="Plugs into every app you already use."
          lead="OAuth-authenticated. Bidirectional. Audit-logged. No middleware."
        />
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center">
            <span className="font-display text-[clamp(3.5rem,2.4rem+5vw,7rem)] leading-none text-ink">250+</span>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10">
            <IntegrationsGrid />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

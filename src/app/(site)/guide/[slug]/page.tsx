import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearningGuide from "@/components/GuidePage/LearningGuide";
import GuideShell from "@/components/GuidePage/GuideShell";
import { getGuide, getGuideSlugs } from "@/lib/guides";

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Learning Guide — Souvenir" };
  const desc = guide.overview || `A step-by-step Souvenir learning guide: ${guide.title}.`;
  return {
    title: `${guide.title} — Souvenir`,
    description: desc.slice(0, 155),
    alternates: { canonical: `/guide/${guide.slug}` },
  };
}

export default async function GuideSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return (
    <GuideShell>
      <LearningGuide guide={guide} />
    </GuideShell>
  );
}

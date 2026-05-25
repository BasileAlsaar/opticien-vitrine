import { VideoHero } from "@/components/hero/VideoHero";
import { Manifesto } from "@/components/sections/Manifesto";
import { CollectionTeasers } from "@/components/sections/CollectionTeasers";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { VisitCTA } from "@/components/sections/VisitCTA";

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <Manifesto />
      <CollectionTeasers />
      <BrandStrip />
      <SplitFeature />
      <VisitCTA />
    </>
  );
}

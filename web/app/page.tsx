import { PageLayout } from "@/components/templates/PageLayout";
import { HeroSection } from "@/components/organisms/HeroSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { CtaSection } from "@/components/organisms/CtaSection";

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
    </PageLayout>
  );
}

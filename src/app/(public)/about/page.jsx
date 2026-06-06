import IntroSection from "@/components/public/IntroSection";
import WhyChooseUsSection from "@/components/public/WhyChooseUsSection";
import ProcessSection from "@/components/public/ProcessSection";
import TeamSection from "@/components/public/TeamSection";
import StatsSection from "@/components/public/StatsSection";
import CtaSection from "@/components/public/CtaSection";

export default function AboutPage() {
  return (
    <div>
      <IntroSection 
        title="About Us"
        subtitle="We are a creative digital agency"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
      />
      <ProcessSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
}

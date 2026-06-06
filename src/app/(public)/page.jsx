import HelpYouSection from "@/components/public/HelpYouSection";
import HeroSection from "@/components/public/HeroSection";
import PortfolioSection from "@/components/public/PortfolioSection";
import StatsSection from "@/components/public/StatsSection";
import CustomersSection from "@/components/public/CustomersSection";
import TestimonialsSection from "@/components/public/TestimonialsSection";
import TeamSection from "@/components/public/TeamSection";
import CtaSection from "@/components/public/CtaSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HelpYouSection />
      <PortfolioSection />
      <CustomersSection />
      <TestimonialsSection />
      <TeamSection />
      <CtaSection />
    </div>
  );
}

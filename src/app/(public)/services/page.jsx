import CtaSection from "@/components/public/CtaSection";
import CustomersSection from "@/components/public/CustomersSection";
import Footer from "@/components/public/Footer";
import HelpYouSection from "@/components/public/HelpYouSection";
import IntroSection from "@/components/public/IntroSection";
import ProcessSection from "@/components/public/ProcessSection";
import TestimonialsSection from "@/components/public/TestimonialsSection";

export default function ServicesPage() {
  return (
    <div>
      <IntroSection 
        title="Services"
        subtitle="We provide a wide range of Services"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue."
      />
      <HelpYouSection />
      <CustomersSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

import IntroSection from "@/components/public/IntroSection";
import ContactFormSection from "@/components/public/ContactFormSection";
import CtaSection from "@/components/public/CtaSection";

export default function ContactPage() {
  return (
    <div>
      <IntroSection 
        title="Contact Us"
        subtitle="Get in touch with our expert team"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
      />
      <ContactFormSection />
      <CtaSection />
    </div>
  );
}

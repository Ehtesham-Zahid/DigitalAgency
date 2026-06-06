import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhyChooseUsSection = () => {
  const items = [
    {
      value: "quality",
      trigger: "Best Quality Designs",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      value: "support",
      trigger: "24x7 Live Support",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      value: "projects",
      trigger: "Result Oriented Projects",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      value: "award",
      trigger: "Award Winning Support Team",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      value: "roi",
      trigger: "Best ROI Techniques",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      value: "professionals",
      trigger: "Experienced Professionals",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
  ];

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[45vh]">
      <div className="relative w-full h-[180px] lg:h-auto overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: "url('/why-choose-us.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#252b4d]/40 pointer-events-none" />
      </div>

      <div className="bg-[#f7fafe] flex flex-col justify-center items-start py-6 px-6 lg:py-8 lg:px-16 xl:py-10 xl:px-20">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mt-3 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
          </p>

          <div className="bg-white rounded-lg p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100/50">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border-gray-100">
                  <AccordionTrigger className="text-base font-semibold text-[#1e2547] hover:no-underline py-3 cursor-pointer">
                    {item.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-3">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
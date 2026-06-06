import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01.",
      title: "Discover",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    },
    {
      number: "02.",
      title: "Define",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    },
    {
      number: "03.",
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    },
    {
      number: "04.",
      title: "Develop",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    },
    {
      number: "05.",
      title: "Deploy",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    },
    {
      number: "06.",
      title: "Deliver",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar."
    }
  ];

  return (
    <section className="bg-[#f7fafe] pt-20 md:pt-32 pb-20 md:pb-32 border-b border-neutral-200">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="max-w-3xl flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">
            Our 6-D Process
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start text-left">
              <span className="text-6xl md:text-7xl font-black text-slate-200/60 leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-[#1e2547] mt-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-3 max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
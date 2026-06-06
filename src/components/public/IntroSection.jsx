import React from "react";

const IntroSection = ({
  title = "Services",
  subtitle = "We provide a wide range of Services",
  description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue."
}) => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 text-center">
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/intro-img.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#252b4d]/85 pointer-events-none z-0" />

      <div className="relative z-10 w-11/12 mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-white font-bold text-lg md:text-xl mt-4 max-w-2xl">
          {subtitle}
        </p>
        <p className="text-white/80 text-sm md:text-base font-normal leading-relaxed mt-4 max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
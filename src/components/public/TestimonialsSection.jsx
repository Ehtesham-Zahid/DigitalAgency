import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f7fafe] py-20 md:py-32">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2547] leading-tight tracking-tight max-w-3xl">
          &ldquo;Amazing Designs and Quality Work!&rdquo;
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
          Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo.
          Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac
          malesuada vulputate pharetra.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
            <img
              src="/testimonial.jpg"
              alt="John Doe"
              className="h-full w-full object-contain rounded-full"
            />
          </div>
          <h4 className="text-lg font-bold text-[#1e2547] mt-4">
            John Doe
          </h4>
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase mt-1">
            CEO, ACME INC.
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
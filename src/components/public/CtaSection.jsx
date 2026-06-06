import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#6878d6] tracking-tight">
            Would you like to start a project with us?
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-3 max-w-3xl">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0">
          <Button className="bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm md:text-base h-auto px-8 py-3.5 md:py-4 rounded transition-all duration-300 shadow-md">
            GET A QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
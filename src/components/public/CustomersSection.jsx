import React from "react";
import { Hexagon, Leaf, Layers, Shapes } from "lucide-react";

const CustomersSection = () => {
  return (
    <section className="bg-white pt-20 md:pt-32">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">
            Our Customers
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="w-full border-t border-b border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 py-12 bg-[#f8fafc]/50">
          {/* Logo 1 */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <div className="flex items-center space-x-2 opacity-45 hover:opacity-80 transition-opacity duration-300">
              <Hexagon className="h-8 w-8 text-slate-800 stroke-[1.75]" />
              <span className="text-xl font-extrabold tracking-wider text-slate-800 uppercase">Logo</span>
            </div>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <div className="flex items-center space-x-2 opacity-45 hover:opacity-80 transition-opacity duration-300">
              <Leaf className="h-8 w-8 text-slate-800 stroke-[1.75]" />
              <span className="text-xl font-bold text-slate-800">LOGOIPSUM</span>
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <div className="flex items-center space-x-2 opacity-45 hover:opacity-80 transition-opacity duration-300">
              <Layers className="h-8 w-8 text-slate-800 stroke-[1.75]" />
              <span className="text-xl font-semibold text-slate-800">LOGOIPSUM</span>
            </div>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center justify-center p-6 md:p-8">
            <div className="flex items-center space-x-2 opacity-45 hover:opacity-80 transition-opacity duration-300">
              <Shapes className="h-8 w-8 text-slate-800 stroke-[1.75]" />
              <span className="text-xl font-bold text-slate-800 lowercase">logoipsum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;

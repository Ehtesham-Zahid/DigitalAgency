import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "87",
      label: "Satisfied Clients"
    },
    {
      number: "150",
      label: "Projects Completed"
    },
    {
      number: "28",
      label: "Accolades Earned"
    },
    {
      number: "56K+",
      label: "Lines of Code"
    }
  ];

  return (
    <section className="bg-[#f7fafe] py-12 md:py-24">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <h3 className="text-[#1e2547] text-2xl font-bold tracking-tight">
            Some Numbers
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-2 max-w-[240px]">
            Lorem ipsum dolor sit amet, consec tetur adipis.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <span className="text-[#6878d6] text-5xl md:text-6xl font-black leading-none tracking-tight">
                {stat.number}
              </span>
              <div className="text-left font-bold text-[#1e2547] text-sm leading-tight max-w-[90px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
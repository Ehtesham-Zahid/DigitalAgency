import React from "react";

const TeamSection = () => {
  const members = [
    {
      name: "Joanne Williams",
      role: "Founder",
      image: "/team-1.jpg"
    },
    {
      name: "Fred Buster",
      role: "Director OPS",
      image: "/team-2.jpg"
    },
    {
      name: "Lisa Hoffman",
      role: "Director HR",
      image: "/team-3.jpg"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">
            Meet Our Leadership
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-sm shadow-sm">
                <img
                  src={member.image}
                  alt={"team-image"}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
              <h4 className="text-[#1e2547] text-lg md:text-xl font-bold mt-5">
                {member.name}
              </h4>
              <span className="text-gray-400 font-semibold text-xs tracking-widest uppercase mt-1.5">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

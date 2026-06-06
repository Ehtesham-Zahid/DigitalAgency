import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const images = [
    "/portfolio1.jpg",
    "/portfolio2.jpg",
    "/portfolio3.jpg",
    "/portfolio4.jpg"
  ];

  return (
    <section className="bg-white pt-20 md:pt-32">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">
            Portfolio
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 w-full">
          {images.map((imgSrc, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-sm group">
              <img
                src={imgSrc}
                alt={`Portfolio project ${idx + 1}`}
                className="w-full aspect-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Button className="bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm md:text-base h-auto px-8 py-3.5 md:py-4 rounded transition-all duration-300 shadow-md">
            EXPLORE MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
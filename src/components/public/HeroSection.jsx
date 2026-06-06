import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-900 overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none z-0" 
        style={{ backgroundImage: "url('/home-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#252b4d]/85 pointer-events-none z-0" />

      <div className="relative z-10 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left">
          <span className="inline-block text-sm md:text-lg font-bold tracking-wide text-white mb-4">
            Fastest And Most Lightweight WP Theme
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            Create Amazing Business Websites
          </h1>
          <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mt-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Morbi fringilla congue libero, ac malesuada vulputate pharetra.
          </p>
          <div className="mt-8">
            <Button className="bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm md:text-base h-auto px-6 py-3.5 md:px-8 md:py-4 rounded transition-all duration-300 shadow-md">
              BOOK A MEETING
            </Button>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
          {/* Left empty for background image focus on desktop layouts */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


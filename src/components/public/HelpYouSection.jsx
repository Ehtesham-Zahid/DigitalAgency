import { Button } from "@/components/ui/button";
import { SquarePen, AppWindow, Send, Lightbulb, CreditCard, CircleUser } from "lucide-react";

const HelpYouCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]  transition-all duration-300 flex flex-col items-start text-left">
      <div className="text-[#6878d6] dark:text-[#8b9bf0] mb-6">
        <Icon className="h-10 w-10 stroke-[1.5]" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-secondary   mb-3">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const HelpYouSection = () => {
  const cards = [
    {
      Icon: SquarePen,
      title: "Design",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    },
    {
      Icon: AppWindow,
      title: "Development",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    },
    {
      Icon: Send,
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    },
    {
      Icon: Lightbulb,
      title: "Social Media",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    },
    {
      Icon: CreditCard,
      title: "eCommerce",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    },
    {
      Icon: CircleUser,
      title: "Help & Support",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue."
    }
  ];

  return (
    <section className="bg-[#f7fafe]   py-20 md:py-32">
      <div className="w-11/12 mx-auto flex flex-col items-center text-center">
        {/* Header Area */}
        <div className="max-w-3xl flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547]  tracking-tight">
            How can we help you?
          </h2>
          <p className="text-gray-500 dark:text-neutral-400 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
          <div className="mt-8">
            <Button className="bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm md:text-base h-auto px-8 py-3.5 md:py-4 rounded transition-all duration-300 shadow-md">
              BOOK A MEETING
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24 w-full">
          {cards.map((card, idx) => (
            <HelpYouCard 
              key={idx}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpYouSection;

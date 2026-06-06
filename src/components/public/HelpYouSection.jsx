"use client"

import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";

const HelpYouCard = ({ iconName, title, description }) => {
  const IconComponent = LucideIcons[iconName] || LucideIcons.HelpCircle;
  return (
    <div className="bg-white dark:bg-neutral-900 p-8 md:p-10 rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]  transition-all duration-300 flex flex-col items-start text-left">
      <div className="text-[#6878d6] dark:text-[#8b9bf0] mb-6">
        <IconComponent className="h-10 w-10 stroke-[1.5]" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#1e2547] mb-3">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const HelpYouSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
   
  async function fetchServices(){
    try {
      setLoading(true);
      setError("");
      const res = await fetch('/api/services')
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to load services.");
      }
      setServices(data)
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchServices();
  }, [])

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

        {loading && (
          <div className="text-gray-500 mt-16 text-sm font-medium animate-pulse">
            Loading services...
          </div>
        )}
        {error && (
          <div className="text-red-500 mt-16 text-sm font-semibold">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24 w-full">
            {services.map((service, idx) => (
              <HelpYouCard 
                key={service._id || idx}
                iconName={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HelpYouSection;

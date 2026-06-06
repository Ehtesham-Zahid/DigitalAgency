import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e2547] text-white border-t border-gray-700/30 pt-20 md:pt-28 pb-4">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Digital Agency
          </h2>
          <p className="text-white text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>
          <div className="flex space-x-4">
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">FB</div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">TW</div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">LI</div>
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">IG</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Email Marketing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
            Useful Links
          </h3>
          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-white transition-colors">About Company</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">
            Contact
          </h3>
          <div className="space-y-4 text-sm text-white">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-0.5 text-[#6878d6]" />
              <span>1678 Lenore Drive, San Francisco, CA 94120</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-[#6878d6]" />
              <span>[EMAIL_ADDRESS]</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-[#6878d6]" />
              <span>+1 (650) 253-0000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto border-t border-gray-700/30 mt-16 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-xs md:text-sm">
            © 2026 Digital Agency Project. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-white text-xs">Terms & Conditions</a>
            <a href="#" className="text-white hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white text-xs">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
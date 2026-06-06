import React from "react";
import Link from "next/link";
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
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-[#6878d6] transition-colors cursor-pointer" aria-label="Facebook">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-[#6878d6] transition-colors cursor-pointer" aria-label="Twitter">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-[#6878d6] transition-colors cursor-pointer" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-[#6878d6] transition-colors cursor-pointer" aria-label="Instagram">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
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
            <li><Link href="/login" className="hover:text-white transition-colors">Login Page</Link></li>
            <li><Link href="/admin" className="hover:text-white transition-colors">Admin</Link></li>
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
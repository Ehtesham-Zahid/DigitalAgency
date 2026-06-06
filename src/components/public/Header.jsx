"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-11/12 mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain cursor-pointer" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8 text-white/90 font-medium text-sm lg:text-base">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact">
            <Button className="bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm px-6 py-6 rounded transition-all duration-300 shadow-md">
              REQUEST QUOTE
            </Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-all duration-200"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[350px] opacity-100 bg-[#1e2547]/95 backdrop-blur-md border-t border-white/10" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-11/12 mx-auto py-6 flex flex-col space-y-6">
          <ul className="flex flex-col space-y-4 text-white/90 font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200 cursor-pointer py-1 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200 cursor-pointer py-1 block">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200 cursor-pointer py-1 block">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors duration-200 cursor-pointer py-1 block">
                Contact
              </Link>
            </li>
          </ul>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
            <Button className="w-full bg-[#6878d6] hover:bg-[#4d61d6] text-white font-semibold text-sm py-3 rounded transition-all duration-300 shadow-md">
              REQUEST QUOTE
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

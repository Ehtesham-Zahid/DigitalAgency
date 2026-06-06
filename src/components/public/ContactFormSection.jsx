"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, Smartphone } from "lucide-react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission state
    console.log("Contact request submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-[#f7fafe] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Request Free Consultation Card & Map */}
          <div className="lg:col-span-8 flex flex-col w-full">
            <h2 className="text-[#1e2547] text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
              Request Free Consultation
            </h2>
            
            <div className="bg-white rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100/80 overflow-hidden grid grid-cols-1 md:grid-cols-2">
              
              {/* Form Side */}
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-5">
                  {submitted && (
                    <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg p-4 text-sm font-semibold transition-all">
                      Thank you! Your request has been sent.
                    </div>
                  )}
                  
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3.5 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white transition-all duration-200 text-sm"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email *"
                      required
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3.5 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white transition-all duration-200 text-sm"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg py-3.5 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6878d6] focus:bg-white transition-all duration-200 text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-fit bg-[#6878d6] hover:bg-[#5767c5] text-white font-bold py-3.5 px-8 rounded-lg shadow-sm hover:shadow transition-all duration-200 uppercase tracking-wider text-xs cursor-pointer mt-2"
                >
                  Submit
                </button>
              </form>

              {/* Map Side */}
              <div className="w-full h-full min-h-[350px] md:min-h-full relative bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-77.0369!3d38.9072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>

            </div>
          </div>

          {/* Right Column - Get In Touch Info */}
          <div className="lg:col-span-4 flex flex-col w-full lg:pl-4">
            <h2 className="text-[#1e2547] text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
              Get In Touch
            </h2>
            
            <div className="flex flex-col">
              <h3 className="text-[#1e2547] text-sm font-extrabold uppercase tracking-wider mb-6">
                Reach Us
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-[#6878d6] w-5 h-5 shrink-0 mt-1" />
                  <span className="text-gray-500 text-sm md:text-base leading-relaxed">
                    123/B, Route 66, Downtown
                    <br />
                    Washington, DC 20004, USA
                  </span>
                </li>
                
                <li className="flex items-start gap-4">
                  <Mail className="text-[#6878d6] w-5 h-5 shrink-0 mt-1" />
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-500 hover:text-[#6878d6] text-sm md:text-base transition-colors duration-200"
                  >
                    info@example.com
                  </a>
                </li>
                
                <li className="flex items-start gap-4">
                  <Phone className="text-[#6878d6] w-5 h-5 shrink-0 mt-1" />
                  <a
                    href="tel:+0019876543210"
                    className="text-gray-500 hover:text-[#6878d6] text-sm md:text-base transition-colors duration-200"
                  >
                    +001 987-654-3210
                  </a>
                </li>
                
                <li className="flex items-start gap-4">
                  <Smartphone className="text-[#6878d6] w-5 h-5 shrink-0 mt-1" />
                  <a
                    href="tel:+0019876543210"
                    className="text-gray-500 hover:text-[#6878d6] text-sm md:text-base transition-colors duration-200"
                  >
                    +001 987-654-3210
                  </a>
                </li>
              </ul>

              <h3 className="text-[#1e2547] text-sm font-extrabold uppercase tracking-wider mt-12 mb-4">
                Call us Toll Free
              </h3>
              <p className="text-3xl sm:text-4xl font-black text-[#6878d6] tracking-tight hover:text-[#5767c5] transition-colors duration-200">
                <a href="tel:1-800-123-4567">1-800-123-4567</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

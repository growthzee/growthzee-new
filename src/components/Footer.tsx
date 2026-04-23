"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full pt-20 bg-black overflow-hidden font-sans">
      {/* Background Image & Effects */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* left dominant bloom */}
        <div className="absolute -left-40 -top-32 w-[680px] h-[680px] rounded-full bg-[#80e01a] opacity-30 blur-[140px]" />
        {/* right supporting bloom */}
        <div className="absolute right-[-120px] bottom-[-80px] w-[520px] h-[520px] rounded-full bg-[#80e01a] opacity-20 blur-[140px]" />
        {/* subtle hotspot */}
        <div className="absolute right-16 top-10 w-[320px] h-[320px] rounded-full bg-white opacity-10 blur-[120px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="text-center mt-10">
          <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
            Join our <span className="text-[#80e01a]">newsletter</span>
          </h1>
          <p className="text-white/70 text-[18px] font-mono mt-5">
            Get the{" "}
            <span className="text-[#80e01a]">
              latest updates, exclusive offers, and more straight
            </span>{" "}
            to your inbox!
          </p>
          <div className="mx-auto w-full md:w-2/5 flex sm:flex-row flex-col gap-x-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/50 border border-[#80e01a] rounded-xl py-5 px-5 outline-none placeholder:text-white/60 focus:border-[#80e01a] focus:ring-2 focus:ring-[#80e01a]/40 focus:text-white mt-5 transition-all"
            />
            <button className="text-[14px] uppercase border-2 border-[#80e01a] text-[#80e01a] font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#80e01a] hover:text-black transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-20">
            {/* Left Info */}
            <div className="md:w-1/3 text-left">
              {/* Placeholder for Logo if image is missing */}
              <div className="text-2xl font-black text-white tracking-tighter mb-4">
                GROWTH<span className="text-[#80e01a]">ZEE</span>.
              </div>
              <p className="text-white/70 text-[18px] font-mono mt-5 leading-relaxed">
                <span className="text-[#80e01a]">GrowthZee</span> is a
                full-service business and web solution{" "}
                <span className="text-[#80e01a]">agency</span> dedicated to
                helping businesses thrive in the digital age. Our team of
                experts specializes in{" "}
                <span className="text-[#80e01a]">
                  web development, design, SEO, and digital marketing.
                </span>
              </p>
            </div>
            <div className="md:w-1/4 sm:w-1/2 w-0"></div>
            {/* Links */}
            <div className="md:w-1/4">
              <h4 className="text-2xl md:text-[28px] text-left text-white font-semibold uppercase">
                Links
              </h4>
              <ul className="text-white/70 space-y-4 text-left cursor-pointer text-[18px] font-mono mt-5">
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href="/#home">Home</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href="/#portfolio">Portfolio</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href="/#services">Services</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="hover:text-[#80e01a] duration-300 transition-all">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="md:w-1/3 text-left">
              <h4 className="text-2xl md:text-[28px] text-white font-semibold uppercase">
                Contact
              </h4>
              <p className="text-white/70 text-[18px] font-mono mt-5 cursor-pointer hover:text-[#80e01a] transition-colors">
                support@growthzee.com
              </p>
              <p
                onClick={() => window.open(`https://wa.link/oy4na3`, "_blank")}
                className="text-white/70 text-[18px] font-mono mt-2 cursor-pointer hover:text-[#80e01a] transition-colors"
              >
                WhatsApp: +91 99638 32825
              </p>
              <p className="text-white/70 text-[18px] font-mono mt-4 leading-relaxed">
                First Floor, Office No. 01, Nerals House, <br />
                Near Shyam Nagar Gurudwara, Opp. Krishna Mandir, Shyam Nagar,
                Raipur <br /> Chhattisgarh – 492006
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-black hover:bg-[#80e01a] transition-all text-[20px]"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/growthzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-black hover:bg-[#80e01a] transition-all text-[20px]"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/growthzee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-black hover:bg-[#80e01a] transition-all text-[20px]"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/growthzee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-[#80e01a] rounded-full p-3 hover:text-black hover:bg-[#80e01a] transition-all text-[20px]"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- New Bottom Strip (Info Edge + Businesses) --- */}
      <div className="relative z-10 border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto px-4 py-8 flex flex-col xl:flex-row justify-between items-center gap-8">
          {/* Left Side: Lecomake Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <img
              src="https://res.cloudinary.com/doy1iucnw/image/upload/v1764053666/lecomake_website_logo_updated_hai4yd.png" // Used your uploaded image filename assuming local serve or fallback to placeholder if needed in real app
              alt="Lecomake Logo"
              className="h-10 w-auto invert"
            />
            <div className="text-[10px] sm:text-xs text-gray-500 font-sans leading-relaxed">
              <p>All trademarks are the property of their respective owners</p>
              <p>All rights reserved © 2025 Lecomake.</p>
            </div>
          </div>

          {/* Right Side: Our Businesses */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Our businesses
            </span>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10">
              {/* GrowthZee Logo - Full Color (No Grayscale) */}
              <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo.png"
                  alt="GrowthZee Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://res.cloudinary.com/doy1iucnw/image/upload/v1764138930/fulllogo_transparent_lo5vkw.png"
                  alt="Tisa Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://res.cloudinary.com/doy1iucnw/image/upload/v1764138988/ninebytez_fk1kfa.png"
                  alt="Ninebytes Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

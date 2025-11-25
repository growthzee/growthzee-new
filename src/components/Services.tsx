"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Social Media Marketing",
    link: "/social-media-management",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-white stroke-[1] fill-none group-hover:stroke-[#80e01a] transition-colors duration-300"
      >
        <circle cx="50" cy="50" r="45" strokeDasharray="4,4" />
        <line x1="50" y1="25" x2="50" y2="75" />
        <line x1="25" y1="50" x2="75" y2="50" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Performance Marketing",
    link: "/performance-marketing",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-white stroke-[1] fill-none group-hover:stroke-[#80e01a] transition-colors duration-300"
      >
        <circle cx="35" cy="40" r="25" />
        <circle cx="65" cy="40" r="25" />
        <circle cx="50" cy="65" r="25" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ecommerce Management",
    link: "/ecommerce-management",
    icon: (
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full stroke-white stroke-[1] fill-none group-hover:stroke-[#80e01a] transition-colors duration-300"
      >
        <rect x="2" y="2" width="96" height="56" />
        <path d="M2,58 C2,2 98,2 98,58" />
        <line x1="61" y1="2" x2="61" y2="58" />
        <line x1="61" y1="38" x2="98" y2="38" />
        <path d="M61,38 C61,58 80,58 80,38" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Website & Web Design",
    link: "/website-design",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-white stroke-[1] fill-none group-hover:stroke-[#80e01a] transition-colors duration-300"
      >
        <circle cx="50" cy="50" r="6" />
        <circle cx="20" cy="80" r="5" />
        <circle cx="80" cy="20" r="5" />
        <circle cx="80" cy="80" r="5" />
        <circle cx="20" cy="20" r="5" />
        <line x1="50" y1="50" x2="20" y2="80" />
        <line x1="50" y1="50" x2="80" y2="20" />
        <line x1="50" y1="50" x2="80" y2="80" />
        <line x1="50" y1="50" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "SEO Optimization",
    link: "/seo",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-white stroke-[1] fill-none group-hover:stroke-[#80e01a] transition-colors duration-300"
      >
        <circle cx="50" cy="50" r="8" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </svg>
    ),
  },
];

const GrowthSolutions = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 lg:py-32 font-sans min-h-screen relative border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-32 items-start">
          {/* --- LEFT COLUMN: Cards List --- */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {solutions.map((item, index) => (
              <SolutionCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* --- RIGHT COLUMN: Sticky Content --- */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="flex flex-col items-start">
              {/* Tag */}
              <div className="mb-8 px-4 py-1.5 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[10px] font-bold tracking-[0.2em] text-[#80e01a] uppercase">
                • Solutions
              </div>

              {/* Heading */}
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-12">
                Proven growth <br />
                solutions{" "}
                <span className="font-serif italic font-normal text-gray-400">
                  for scaling
                </span>{" "}
                <br />
                <span className="font-serif italic font-normal text-gray-400">
                  your brand
                </span>
              </h2>

              {/* Circular Action Button (Updated Color) */}
              <button className="group relative w-32 h-32 sm:w-40 sm:h-40 bg-[#80e01a] rounded-full flex flex-col items-center justify-center gap-1 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(128,224,26,0.3)]">
                <div className="bg-black rounded-full p-2 mb-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest text-center px-2 leading-tight">
                  See if you're <br /> ready
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleClick = () => {
    window.location.href = item.link;
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={`
        group relative w-full h-[300px] sm:h-[340px] transition-all duration-700 ease-out cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Tab Label (Top Left) */}
      <div className="absolute -top-[1px] left-0 z-10">
        <div className="flex items-end">
          {/* Main Tab Body */}
          <div className="bg-[#121212] h-[32px] px-8 rounded-t-xl border-t border-l border-white/10 group-hover:border-[#80e01a] transition-colors duration-300"></div>
          {/* Slanted Connector */}
          <div className="w-8 h-[32px] bg-[#121212] origin-bottom-left transform -skew-x-[20deg] rounded-tr-lg border-t border-r border-white/10 -ml-4 group-hover:border-[#80e01a] transition-colors duration-300"></div>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="relative h-full w-full bg-[#121212] rounded-r-3xl rounded-bl-3xl rounded-tl-none border border-white/10 overflow-hidden group-hover:border-[#80e01a] transition-colors duration-300 p-8 sm:p-10 flex flex-col justify-between">
        {/* Icon Area */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-white">
          {item.icon}
        </div>

        {/* Content Area */}
        <div className="flex items-end justify-between w-full">
          <h3 className="text-3xl sm:text-4xl font-bold text-white max-w-[80%] leading-[1.1] tracking-tight group-hover:text-[#80e01a] transition-colors duration-300">
            {item.title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          {/* Arrow Button at bottom right */}
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#80e01a] group-hover:text-black group-hover:border-[#80e01a] transition-all duration-300 transform group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Subtle Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#80e01a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default GrowthSolutions;

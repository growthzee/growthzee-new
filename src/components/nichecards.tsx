"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const NicheCards = () => {
  const niches = [
    {
      id: 1,
      title: "Clothing",
      bigText: "Cloth",
      cases: "20 Cases",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cosmetics",
      bigText: "Cosm",
      cases: "13 Cases",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Electronics",
      bigText: "Elect",
      cases: "27 Cases",
      image:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Supplements",
      bigText: "Supp",
      cases: "14 Cases",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Other Niches",
      bigText: "Others",
      cases: "17 Cases",
      image:
        "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-0 md:px-8 font-sans overflow-hidden border-y border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Heading - Centered */}
        <div className="text-center mb-12 px-4 md:px-0">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Our <span className="text-[#80e01a]">Cases.</span>
          </h2>
        </div>

        {/* Responsive Layout Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-0 scrollbar-hide">
          {niches.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-auto snap-center flex flex-col gap-3 group cursor-pointer"
            >
              {/* Top Label: Case Count */}
              <span className="text-sm font-bold text-gray-500 pl-1 group-hover:text-[#80e01a] transition-colors">
                {item.cases}
              </span>

              {/* Main Card */}
              <div className="relative h-[450px] md:h-[500px] w-full bg-[#111] rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#80e01a]/50 hover:shadow-[0_0_30px_rgba(128,224,26,0.1)] hover:-translate-y-2">
                {/* --- DEFAULT STATE: Big Serif Text --- */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="font-serif text-[8rem] md:text-[6rem] lg:text-[9rem] xl:text-[10rem] italic text-white/5 leading-none tracking-tighter select-none whitespace-nowrap transform -translate-x-4">
                    {item.bigText}
                  </span>
                </div>

                {/* --- HOVER STATE: Image Overlay --- */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* --- TOP RIGHT: Arrow Button --- */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#80e01a] group-hover:bg-[#80e01a] shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black" />
                  </div>
                </div>

                {/* --- BOTTOM LEFT: Title --- */}
                <div className="absolute bottom-8 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 translate-y-0">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default NicheCards;

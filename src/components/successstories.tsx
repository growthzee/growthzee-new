"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  PenTool,
  X,
} from "lucide-react";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");

  const cases = [
    {
      id: 1,
      title: "Jewelry",
      description: "Online store of jewelry pieces",
      date: "JUN, 2025 — TODAY",
      tags: ["Jewelry", "Meta Ads", "Google Ads", "USA"],
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
      stats: { budget: "$45,725", profit: "$141,092", roas: "308%" },
    },
    {
      id: 2,
      title: "Electric scooters",
      description: "Online store of electric scooters",
      date: "MAR, 2025 — TODAY",
      tags: ["Electronics", "Meta Ads", "Google Ads", "USA"],
      image:
        "https://images.unsplash.com/photo-1591829981547-3f45418c4b4e?q=80&w=2071&auto=format&fit=crop",
      stats: { budget: "$16,183", profit: "$120,631", roas: "745%" },
    },
    {
      id: 3,
      title: "Canvas prints",
      description: "Online store of canvas prints",
      date: "JUN, 2025 — TODAY",
      tags: ["Home decor", "Google Ads", "USA"],
      image:
        "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop",
      stats: { budget: "$7,311", profit: "$16,408", roas: "224%" },
    },
    {
      id: 4,
      title: "Organic Skincare",
      description: "Natural skincare products brand",
      date: "JAN, 2025 — TODAY",
      tags: ["Beauty", "TikTok Ads", "USA"],
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
      stats: { budget: "$12,500", profit: "$38,200", roas: "305%" },
    },
    {
      id: 5,
      title: "Smart Home",
      description: "Smart home security devices",
      date: "FEB, 2025 — TODAY",
      tags: ["Tech", "Google Ads", "EU"],
      image:
        "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop",
      stats: { budget: "$25,000", profit: "$95,000", roas: "380%" },
    },
  ];

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cases.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const openContact = (title) => {
    setSelectedInterest(title);
    setIsContactOpen(true);
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-20 font-sans overflow-hidden relative border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Top Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-xs font-bold tracking-widest text-[#80e01a] uppercase mb-6">
            • CASES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Success stories{" "}
            <span className="font-serif italic font-normal text-gray-400">
              shaped
            </span>{" "}
            by our <br className="hidden md:block" />
            proven practices
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {cases.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <CaseCard
                  item={item}
                  onContact={() => openContact(item.title)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls & Progress */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
          {/* Arrow Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all
                                ${
                                  currentIndex === 0
                                    ? "border-white/10 text-gray-600 cursor-not-allowed"
                                    : "border-white/30 text-white hover:bg-[#80e01a] hover:text-black hover:border-[#80e01a]"
                                }
                            `}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all
                                ${
                                  currentIndex === maxIndex
                                    ? "border-white/10 text-gray-600 cursor-not-allowed"
                                    : "border-white/30 text-white hover:bg-[#80e01a] hover:text-black hover:border-[#80e01a]"
                                }
                            `}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 max-w-3xl w-full flex gap-2 h-1">
            {cases.map((_, idx) => (
              <div
                key={idx}
                className={`h-full rounded-full flex-1 transition-all duration-500 
                                    ${
                                      idx <=
                                        currentIndex + (itemsPerPage - 1) &&
                                      idx >= currentIndex
                                        ? "bg-[#80e01a]"
                                        : "bg-white/10"
                                    }
                                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal Overlay */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h3 className="text-2xl font-black text-white">
                Let's Talk Business
              </h3>
              <button
                onClick={() => setIsContactOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <div className="p-8">
              <p className="text-gray-400 mb-6">
                Interested in results like{" "}
                <span className="font-bold text-[#80e01a]">
                  {selectedInterest}
                </span>
                ? Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-[#80e01a] focus:ring-0 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-[#80e01a] focus:ring-0 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-[#80e01a] focus:ring-0 outline-none transition-all resize-none placeholder:text-gray-700"
                  ></textarea>
                </div>
                <button className="w-full bg-[#80e01a] text-black font-bold py-4 rounded-xl hover:bg-white transition-all mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const CaseCard = ({ item, onContact }) => {
  const handleMoreDetails = () => {
    // Simulate navigation
    window.location.href = `/case-study/${item.id}`;
  };

  return (
    <div className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-sm border border-white/5 hover:border-[#80e01a]/50 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
      {/* --- Image Section --- */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Image Overlay gradient */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Tags */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --- Content Section with Custom Shape --- */}
      <div className="relative flex-1 bg-[#1a1a1a] flex flex-col -mt-6 z-10">
        {/* The Custom Shape SVG for the "Tab" effect - Recolor to match dark bg */}
        <div className="absolute -top-[24px] left-0 w-full h-[24px] pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 24"
          >
            <path
              d="M0,24 L0,0 L40,0 C45,0 48,24 55,24 L100,24 L100,24 Z"
              fill="#1a1a1a" // Matches card background
            />
          </svg>
        </div>

        {/* Main Body Content */}
        <div className="px-8 pb-8 pt-2 flex flex-col h-full">
          {/* Date Badge */}
          <div className="flex items-center gap-2 mb-4 relative z-20">
            <div className="w-8 h-8 rounded-full bg-[#80e01a] flex items-center justify-center text-black shadow-sm">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">
              {item.date}
            </span>
          </div>

          {/* Titles */}
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-400 font-medium mb-8">{item.description}</p>

          {/* Stats Grid */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-end border-b border-dashed border-white/10 pb-1">
              <span className="text-gray-500 font-bold text-sm">Budget:</span>
              <span className="text-xl font-bold text-white">
                {item.stats.budget}
              </span>
            </div>
            <div className="flex justify-between items-end border-b border-dashed border-white/10 pb-1">
              <span className="text-gray-500 font-bold text-sm">Profit:</span>
              <span className="text-xl font-bold text-white">
                {item.stats.profit}
              </span>
            </div>
            <div className="flex justify-between items-end border-b border-dashed border-white/10 pb-1">
              <span className="text-gray-500 font-bold text-sm">ROAS:</span>
              <span className="text-xl font-bold text-[#80e01a]">
                {item.stats.roas}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={handleMoreDetails}
              className="flex-1 bg-[#111] border border-white/10 hover:bg-white/10 text-white text-xs font-bold py-4 rounded-full transition-colors uppercase tracking-wide"
            >
              More Details
            </button>
            <button
              onClick={onContact}
              className="flex-1 bg-[#80e01a] hover:bg-white text-black text-xs font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              I want the same
              <div className="bg-black rounded-full p-1">
                <PenTool className="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

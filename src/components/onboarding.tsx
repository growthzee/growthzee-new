"use client";

import React, { useState, useEffect, useRef } from "react";
import { Edit, Search, List, TrendingUp } from "lucide-react";

const WorkProcess = () => {
  const [activeWeek, setActiveWeek] = useState(null);
  const sectionRef = useRef(null);
  const weekRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    weekRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const weeks = [
    {
      number: 1,
      title: "Onboarding",
      icon: Edit,
      // Updated to Growthzee Green
      color: "from-[#80e01a] to-[#4ade80]",
      iconBg: "bg-gradient-to-br from-[#80e01a] to-[#4ade80]",
      circleBorder: "#80e01a",
      items: [
        { id: 1, text: "Briefing" },
        { id: 2, text: "Debriefing" },
        { id: 3, text: "Account access" },
        { id: 4, text: "Project system setup" },
      ],
    },
    {
      number: 2,
      title: "Exploration",
      icon: Search,
      // White/Silver variant for contrast
      color: "from-white to-gray-400",
      iconBg: "bg-gradient-to-br from-white to-gray-400",
      circleBorder: "#ffffff",
      items: [
        { id: 5, text: "Unit economics" },
        { id: 6, text: "Website audit" },
        { id: 7, text: "Advertising audit" },
        { id: 8, text: "Competitor analysis" },
        { id: 9, text: "Strategy development" },
      ],
    },
    {
      number: 3,
      title: "Setup",
      icon: List,
      // Darker Green variant
      color: "from-[#80e01a] to-emerald-600",
      iconBg: "bg-gradient-to-br from-[#80e01a] to-emerald-600",
      circleBorder: "#80e01a",
      items: [
        { id: 10, text: "Tracking setup" },
        { id: 11, text: "Merchant setup" },
        { id: 12, text: "Ad content creation" },
        { id: 13, text: "Campaigns setup" },
      ],
    },
    {
      number: 4,
      title: "Growth",
      icon: TrendingUp,
      // White variant
      color: "from-white to-gray-300",
      iconBg: "bg-gradient-to-br from-white to-gray-300",
      circleBorder: "#ffffff",
      items: [
        { id: 14, text: "Reporting setup" },
        { id: 15, text: "Actionable insights" },
        { id: 16, text: "Results optimization" },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-4 md:px-8 font-sans text-white border-y border-white/5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#80e01a] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10" ref={sectionRef}>
        {/* Added Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold uppercase tracking-widest mb-6">
            How We Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Onboarding <span className="text-[#80e01a]">Process.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            From kickoff to scale, our systematic approach ensures nothing falls
            through the cracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {weeks.map((week, index) => (
            <div
              key={week.number}
              ref={(el) => (weekRefs.current[index] = el)}
              className="week-card opacity-0 translate-y-8 flex flex-col h-full group"
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveWeek(week.number)}
              onMouseLeave={() => setActiveWeek(null)}
            >
              {/* Folder Tab Top */}
              <div className="flex relative z-10 translate-y-[1px]">
                <div
                  className={`
                    px-4 py-2 rounded-t-2xl border-t border-l border-r border-white/10 
                    text-xs font-bold uppercase tracking-wider flex items-center gap-2
                    transition-colors duration-500
                    ${
                      activeWeek === week.number
                        ? "bg-[#1a1a1a] border-b-[#1a1a1a] text-[#80e01a]"
                        : "bg-[#111] text-gray-500 border-b-white/10"
                    }
                  `}
                >
                  <span
                    className={
                      activeWeek === week.number
                        ? "text-white"
                        : "text-gray-600"
                    }
                  >
                    [{week.number}]
                  </span>
                  WEEK
                </div>
                {/* Slanted visual */}
                <div className="w-6 h-8 relative overflow-hidden">
                  <div
                    className={`
                      absolute bottom-0 left-0 w-8 h-8 rounded-bl-xl border-l border-white/10 origin-bottom-left transform skew-x-[20deg]
                      transition-colors duration-500
                      ${
                        activeWeek === week.number
                          ? "bg-[#1a1a1a]"
                          : "bg-[#111]"
                      }
                    `}
                  ></div>
                </div>
              </div>

              {/* Main Card Body */}
              <div
                className={`
                  card-container flex-1 rounded-tr-2xl rounded-b-2xl rounded-tl-none border p-6 relative overflow-hidden
                  transition-all duration-700 ease-out
                  ${
                    activeWeek === week.number
                      ? "card-hover border-[#80e01a]/50 bg-[#1a1a1a]"
                      : "bg-[#111] border-white/10"
                  }
                `}
              >
                {/* Animated gradient background overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    week.color
                  } opacity-0 transition-opacity duration-700 ${
                    activeWeek === week.number ? "gradient-active" : ""
                  }`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Title Section */}
                  <div className="mb-8 lg:mb-10">
                    <h3
                      className={`
                        text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-700
                        ${
                          activeWeek === week.number
                            ? "text-white"
                            : "text-gray-300"
                        }
                      `}
                    >
                      {week.title}
                    </h3>
                  </div>

                  {/* Icon Circle with Animation */}
                  <div className="relative mb-10 flex justify-center">
                    <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                      {/* Dashed Circle */}
                      <svg
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-linear ${
                          activeWeek === week.number ? "rotating" : ""
                        }`}
                        style={{ transform: "rotate(-90deg)" }}
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="47"
                          fill="none"
                          strokeWidth="1.5"
                          strokeDasharray="8, 8"
                          className="transition-all duration-700"
                          style={{
                            stroke:
                              activeWeek === week.number
                                ? week.circleBorder
                                : "#333",
                          }}
                        />
                      </svg>

                      {/* Icon Container */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`
                            icon-container w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl transition-all duration-500
                            ${
                              activeWeek === week.number
                                ? `${week.iconBg} scale-110 shadow-[0_0_30px_rgba(128,224,26,0.3)]`
                                : "bg-[#222] shadow-sm border border-white/5"
                            }
                          `}
                        >
                          <week.icon
                            className={`w-7 h-7 lg:w-8 lg:h-8 transition-colors duration-500 ${
                              activeWeek === week.number
                                ? "text-black"
                                : "text-gray-500"
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      {/* Connection Line (desktop only) */}
                      {index < weeks.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 left-[calc(100%+20px)] w-8 overflow-visible z-0 pointer-events-none">
                          <div
                            className={`h-px bg-gradient-to-r from-white/20 to-transparent transform -translate-y-1/2 transition-all duration-700 ${
                              activeWeek === week.number
                                ? "w-full from-[#80e01a]"
                                : "w-full"
                            }`}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-2">
                    {week.items.map((item, itemIndex) => (
                      <div
                        key={item.id}
                        className={`
                          item-row group flex items-center p-2 rounded-lg cursor-pointer transition-all duration-300
                          ${
                            activeWeek === week.number
                              ? "item-visible hover:bg-white/5"
                              : ""
                          }
                        `}
                        style={{
                          transitionDelay:
                            activeWeek === week.number
                              ? `${itemIndex * 60}ms`
                              : "0ms",
                        }}
                      >
                        <span
                          className={`
                            flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-bold rounded-full mr-3 transition-all duration-300
                            ${
                              activeWeek === week.number
                                ? "bg-[#80e01a] text-black scale-110"
                                : "bg-[#222] text-gray-600"
                            }
                          `}
                        >
                          {item.id}
                        </span>
                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes dashRotate {
          0% {
            transform: rotate(-90deg);
          }
          100% {
            transform: rotate(270deg);
          }
        }
        .rotating {
          animation: dashRotate 8s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientPulse {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        .week-card {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .week-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .card-hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
        }
        .gradient-active {
          opacity: 0.1;
          animation: gradientPulse 3s ease-in-out infinite;
        }
        .item-visible {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;

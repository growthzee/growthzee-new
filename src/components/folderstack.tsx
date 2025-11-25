"use client";

import React, { useState } from "react";
import {
  Camera,
  Calendar,
  User,
  Users,
  Network,
  Search as SearchIcon,
  FileText as FileSearch,
  Target,
  Settings,
  PenTool,
  Layers,
  BarChart,
  TrendingUp,
  Zap,
} from "lucide-react";

const FolderStack = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const weeks = [
    {
      id: 1,
      title: "Onboarding",
      description:
        "We conduct a briefing with you and assess the project's scope. If both parties are ready to proceed after the briefing all necessary accesses are provided to us. The team begins setting up the project system.",
      result:
        "The project's goals, expectations, target audience and key performance indicators (KPIs) are clear. Necessary tools and systems are configured.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subFeatures: [
        { icon: User, title: "Selecting Specialists" },
        { icon: Users, title: "Communication Standards" },
        { icon: Network, title: "Project Management" },
      ],
    },
    {
      id: 2,
      title: "Exploration",
      description:
        "We dive deep into your business metrics, analyzing unit economics and conducting comprehensive audits of your website and current advertising efforts to identify opportunities.",
      result:
        "A complete roadmap of opportunities and a clear understanding of the competitive landscape. We have a solid strategy ready for execution.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subFeatures: [
        { icon: SearchIcon, title: "Unit Economics" },
        { icon: FileSearch, title: "Website Audit" },
        { icon: Target, title: "Competitor Analysis" },
      ],
    },
    {
      id: 3,
      title: "Setup",
      description:
        "Our technical team configures all tracking pixels, sets up merchant centers, and creates high-converting ad creatives tailored to your brand's voice and audience.",
      result:
        "All technical tracking is verified. Creative assets are approved and uploaded. Campaign structures are built and ready for launch.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subFeatures: [
        { icon: Settings, title: "Tracking Setup" },
        { icon: PenTool, title: "Creative Production" },
        { icon: Layers, title: "Campaign Build" },
      ],
    },
    {
      id: 4,
      title: "Growth",
      description:
        "We launch the campaigns and immediately begin our optimization cycle. We report weekly on performance and provide actionable insights for scaling.",
      result:
        "Consistent growth in ROAS and revenue. Transparent reporting and a clear path forward for scaling your marketing budget profitably.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subFeatures: [
        { icon: BarChart, title: "Reporting Setup" },
        { icon: TrendingUp, title: "Actionable Insights" },
        { icon: Zap, title: "Results Optimization" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] py-12 md:py-24 font-sans overflow-x-hidden border-y border-white/5">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            How We <span className="text-[#80e01a]">Execute.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured four-step process designed to take you from onboard to
            growth in record time.
          </p>
        </div>

        <div className="flex flex-col w-full gap-y-8">
          {weeks.map((week, index) => (
            <FolderItem
              key={week.id}
              week={week}
              index={index}
              isOpen={expandedIndex === index}
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FolderItem = ({ week, isOpen, onClick }) => {
  return (
    <div
      className={`
                relative w-full transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            `}
      style={{
        zIndex: isOpen ? 100 : 10,
      }}
    >
      {/* --- Tab Label --- */}
      <div
        className="absolute left-0 transition-all duration-500 ease-in-out"
        style={{
          top: "-36px",
          left: "0px",
          zIndex: 20,
        }}
      >
        <div className="flex items-end relative group">
          {/* Tab Main Body */}
          <div
            className={`
                        pl-6 pr-3 py-2 rounded-tl-2xl flex items-center gap-2 
                        transition-colors duration-500 relative z-10 h-[36px]
                        ${isOpen ? "bg-[#1a1a1a]" : "bg-[#111]"}
                    `}
          >
            <span className="text-[10px] font-bold text-[#80e01a] tracking-widest uppercase whitespace-nowrap">
              [{String(week.id).padStart(2, "0")}] WEEK
            </span>
            <Camera className="w-3 h-3 text-gray-600" />
          </div>

          {/* Slanted Right Edge of the Tab */}
          <div className="relative w-8 h-[36px] overflow-hidden -ml-[1px]">
            <div
              className={`
                            absolute bottom-0 left-0 w-10 h-[36px]
                            origin-bottom-left transform -skew-x-[25deg] rounded-tr-md transition-colors duration-500
                            ${isOpen ? "bg-[#1a1a1a]" : "bg-[#111]"}
                        `}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Main Card --- */}
      <div
        onClick={onClick}
        className={`
                    relative w-full bg-[#1a1a1a] rounded-r-[32px] rounded-bl-[32px] rounded-tl-none overflow-hidden 
                    transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer border border-white/5
                    ${
                      isOpen
                        ? "shadow-2xl ring-1 ring-white/10 pb-8"
                        : "h-[110px] sm:h-[130px] hover:border-[#80e01a]/30"
                    }
                `}
        style={{ borderTopLeftRadius: "0px" }}
      >
        <div
          className={`flex ${
            isOpen
              ? "flex-col lg:flex-row items-start"
              : "flex-row items-center"
          } h-full w-full`}
        >
          {/* LEFT COLUMN: Gradient & Sub-features */}
          <div
            className={`
                            relative flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                            ${
                              isOpen
                                ? "w-full lg:w-[50%] p-8" // Expanded
                                : "w-[40%] sm:w-[35%] lg:w-[30%] h-full p-0" // Collapsed
                            }
                        `}
          >
            {/* Gradient Folder Shape */}
            <div
              className={`
                                relative w-full bg-gradient-to-br from-[#80e01a] to-[#4ade80] transition-all duration-700
                                ${isOpen ? "h-[360px] shadow-lg" : "h-full"}
                            `}
              style={{
                borderRadius: isOpen ? "24px" : "0",
                // Geometry:
                clipPath: isOpen
                  ? "polygon(0% 0%, 85% 0%, 90% 10%, 100% 10%, 100% 100%, 0% 100%)" // Folder
                  : "polygon(0 0, 100% 0, 85% 100%, 0% 100%)", // Slant
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>

              {/* Image (Expanded Only) */}
              <div
                className={`
                                    absolute bg-black rounded-[16px] overflow-hidden transition-all duration-500 border border-white/10
                                    ${
                                      isOpen
                                        ? "inset-4 mt-12 opacity-100 visible"
                                        : "inset-1 opacity-0 invisible"
                                    }
                                `}
              >
                <img
                  src={week.image}
                  alt="Dashboard"
                  className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                {/* Mockup UI Bars */}
                <div className="absolute top-4 left-4 w-24 h-2 bg-white/20 rounded-full backdrop-blur-md"></div>
                <div className="absolute top-8 left-4 w-16 h-2 bg-white/20 rounded-full backdrop-blur-md"></div>
              </div>
            </div>

            {/* Sub-features Grid */}
            <div
              className={`
                                grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 transition-all duration-500 transform
                                ${
                                  isOpen
                                    ? "opacity-100 translate-y-0 delay-200"
                                    : "opacity-0 -translate-y-4 hidden"
                                }
                            `}
            >
              {week.subFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-white/5 p-4 rounded-2xl flex flex-col items-start text-left gap-3 hover:border-[#80e01a]/30 transition-colors group/feature"
                >
                  <div className="w-10 h-10 rounded-full bg-[#80e01a] text-black flex items-center justify-center shadow-[0_0_20px_rgba(128,224,26,0.2)] group-hover/feature:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-white leading-tight">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div
            className={`
                            flex flex-col flex-1 transition-all duration-700 h-full
                            ${
                              isOpen
                                ? "justify-start pt-16 pr-12 pl-8"
                                : "justify-center pr-4 sm:pr-12 pl-6"
                            }
                        `}
          >
            {/* Title */}
            <h2
              className={`
                                font-black tracking-tighter text-white transition-all duration-700 leading-none
                                ${
                                  isOpen
                                    ? "text-5xl lg:text-7xl mb-8"
                                    : "text-2xl sm:text-4xl lg:text-6xl ml-[-10px] lg:ml-[-20px]"
                                }
                            `}
            >
              {week.title}
            </h2>

            {/* Details (Expanded Only) */}
            <div
              className={`
                                space-y-8 transition-all duration-700 ease-in-out overflow-hidden origin-top
                                ${
                                  isOpen
                                    ? "opacity-100 max-h-[800px]"
                                    : "opacity-0 max-h-0"
                                }
                            `}
            >
              <p className="text-lg text-gray-400 leading-relaxed font-medium max-w-2xl">
                {week.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-[#80e01a] font-bold text-xl uppercase tracking-widest text-xs">
                  Expected Result:
                </h4>
                <p className="text-gray-300 leading-relaxed text-base max-w-2xl border-l-2 border-[#80e01a] pl-4">
                  {week.result}
                </p>
              </div>

              <div className="pt-6">
                <button className="group/btn bg-[#80e01a] text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-4 hover:bg-white transition-all">
                  Book Strategy Call
                  <div className="bg-black text-white p-2 rounded-full group-hover/btn:scale-110 transition-transform">
                    <Calendar className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderStack;

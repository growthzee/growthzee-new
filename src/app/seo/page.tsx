"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe,
  Layers,
  LayoutGrid,
  MapPin,
  Minus,
  MousePointer2,
  Plus,
  Search,
  ShieldAlert,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

// --- Data ---
const seoServices = [
  {
    title: "Technical Architecture",
    desc: "Google can't rank what it can't crawl. We fix site structure, core web vitals, schema markup, and indexing issues.",
    icon: <LayoutGrid className="w-6 h-6" />,
    stat: "+40% Crawl Rate",
  },
  {
    title: "Keyword Dominance",
    desc: "We target high-intent keywords that drive revenue, not just vanity traffic. Mapping user intent to your pages.",
    icon: <Target className="w-6 h-6" />,
    stat: "Top 3 Rankings",
  },
  {
    title: "Content Authority",
    desc: "Creating long-form, data-backed content that earns backlinks naturally and positions you as the industry leader.",
    icon: <FileText className="w-6 h-6" />,
    stat: "3x Organic Traffic",
  },
  {
    title: "Authority Building",
    desc: "White-hat link acquisition from high DR sites. No PBNs, no spam. Just real relationships and high-quality mentions.",
    icon: <Layers className="w-6 h-6" />,
    stat: "High DR Links",
  },
];

const rankingProcess = [
  {
    step: "01",
    title: "The Audit",
    text: "Comprehensive forensic analysis of your site's health, backlink profile, and competitor gaps.",
  },
  {
    step: "02",
    title: "The Fix",
    text: "Cleaning up technical debt, improving page speed, and fixing broken user journeys.",
  },
  {
    step: "03",
    title: "The Content",
    text: "Deploying high-velocity content silos that capture semantic search intent.",
  },
  {
    step: "04",
    title: "The Surge",
    text: "Aggressive promotion and link building to push pages from page 2 to #1.",
  },
];

export default function SeoOptimization() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // State for Local vs Global Switcher
  const [activeTab, setActiveTab] = useState("local");

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#80e01a] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <header className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#80e01a] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[1px] w-12 bg-[#80e01a]"></span>
              <span className="text-[#80e01a] text-xs font-bold tracking-[0.3em] uppercase">
                Search Engine Dominance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              RANK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] to-white/60">
                HIGHER.
              </span>{" "}
              <br />
              SELL MORE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10"
            >
              Invisible websites don't generate revenue. We engineer search
              strategies that put your brand in front of customers exactly when
              they are ready to buy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-[#80e01a] text-black font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(128,224,26,0.2)] flex items-center gap-2">
                Get Free Audit <Search size={16} />
              </button>
              <div className="px-6 py-4 border border-white/10 flex items-center gap-3 rounded bg-white/5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-800 border border-black flex items-center justify-center text-[10px] font-bold"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                        alt="avatar"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400">
                  Trust the experts
                </span>
              </div>
            </motion.div>
          </div>

          {/* Abstract SEO Visualization */}
          <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:flex items-center justify-center">
            <motion.div
              style={{ rotate }}
              className="absolute w-[400px] h-[400px] border border-white/5 rounded-full flex items-center justify-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#80e01a] rounded-full shadow-[0_0_20px_#80e01a]"></div>
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] h-[250px] border border-white/10 rounded-full border-dashed"
            ></motion.div>

            <div className="relative z-10 bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 w-80 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">
                  SEO_DASHBOARD.EXE
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Organic Traffic</span>
                    <span className="text-[#80e01a]">+245%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-[#80e01a] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Keyword Rankings</span>
                    <span className="text-[#80e01a]">+120</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-[#80e01a] rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 bg-[#80e01a]/10 rounded border border-[#80e01a]/20 mt-4">
                  <div className="flex items-center gap-2 text-[#80e01a] text-xs font-bold">
                    <CheckCircle2 size={14} />
                    <span>Rank #1 Achieved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Ticker --- */}
      <div className="w-full bg-[#80e01a] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-black font-black uppercase tracking-wider text-lg">
                Technical SEO
              </span>
              <span className="text-black text-xl">✦</span>
              <span className="text-black font-black uppercase tracking-wider text-lg">
                Content Strategy
              </span>
              <span className="text-black text-xl">✦</span>
              <span className="text-black font-black uppercase tracking-wider text-lg">
                Backlinks
              </span>
              <span className="text-black text-xl">✦</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* --- Real-Time Analytics Dashboard (NEW) --- */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Total <span className="text-[#80e01a]">Transparency.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No more guessing. We provide a real-time, custom dashboard so you
            can see exactly where every penny of your budget goes and the
            results it drives.
          </p>
        </div>

        <div className="relative bg-[#111] rounded-3xl border border-white/10 p-4 md:p-8 overflow-hidden shadow-2xl">
          {/* Glass Effect Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {/* Sidebar Mock */}
            <div className="hidden lg:flex flex-col gap-4 p-4 border-r border-white/5">
              <div className="flex items-center gap-3 text-[#80e01a] font-bold mb-8">
                <Activity /> Growthzee OS
              </div>
              {[
                "Overview",
                "Rankings",
                "Backlinks",
                "Site Health",
                "Content",
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg cursor-pointer text-sm font-medium ${
                    i === 0
                      ? "bg-white/10 text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main Dashboard Area */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#80e01a]/10 rounded-lg text-[#80e01a]">
                    <MousePointer2 size={18} />
                  </div>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    +12% <ArrowUpRight size={12} />
                  </span>
                </div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Organic Traffic
                </h4>
                <span className="text-2xl font-bold text-white">45,201</span>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                    <Target size={18} />
                  </div>
                  <span className="text-green-500 text-xs font-bold flex items-center">
                    +5 <ArrowUpRight size={12} />
                  </span>
                </div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Keywords in Top 3
                </h4>
                <span className="text-2xl font-bold text-white">84</span>
              </div>
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    <Zap size={18} />
                  </div>
                  <span className="text-white text-xs font-bold flex items-center">
                    98/100
                  </span>
                </div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Health Score
                </h4>
                <span className="text-2xl font-bold text-white">Excellent</span>
              </div>

              {/* Big Chart Area */}
              <div className="md:col-span-2 bg-black/40 p-6 rounded-2xl border border-white/5 min-h-[200px] flex flex-col justify-end">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-white">
                    Traffic Growth (6 Mo)
                  </h4>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#80e01a]"></div>
                    <span className="text-xs text-gray-500">Organic</span>
                  </div>
                </div>
                {/* CSS Bar Chart Mock */}
                <div className="flex items-end justify-between gap-2 h-32">
                  {[30, 45, 40, 60, 75, 50, 80, 95, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-[#80e01a]/20 rounded-t-sm relative group hover:bg-[#80e01a] transition-colors"
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h * 100}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pie Chart Area */}
              <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 rounded-full border-[12px] border-[#80e01a]/20 flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full border-[12px] border-[#80e01a] rounded-full border-l-transparent border-b-transparent rotate-45"></div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-white">
                      72%
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase">
                      Mobile
                    </span>
                  </div>
                </div>
                <h4 className="mt-4 text-sm font-bold text-gray-300">
                  Device Split
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-20 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            THE <span className="text-[#80e01a]">ALGORITHM</span> WHISPERERS.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Search engines update 1000s of times a year. We keep your site
            future-proof with a holistic approach to optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoServices.map((service, idx) => (
            <div
              key={idx}
              className="group p-10 rounded-[2rem] bg-[#111] border border-white/10 hover:border-[#80e01a] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <TrendingUp size={100} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-[#80e01a] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 pr-10">
                  {service.desc}
                </p>
                <div className="inline-block px-4 py-2 rounded bg-[#80e01a]/10 border border-[#80e01a]/30 text-[#80e01a] text-xs font-bold uppercase tracking-widest">
                  Typical Result: {service.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Local vs Global Switcher (NEW) --- */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="bg-[#0f0f0f] rounded-[3rem] p-8 md:p-16 border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your <span className="text-[#80e01a]">Battlefield.</span>
            </h2>
            <p className="text-gray-400">
              Different goals require different strategies. Which one fits you?
            </p>

            {/* Toggle */}
            <div className="flex justify-center mt-8">
              <div className="bg-black p-1 rounded-full border border-white/10 inline-flex">
                <button
                  onClick={() => setActiveTab("local")}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === "local"
                      ? "bg-[#80e01a] text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Local SEO
                </button>
                <button
                  onClick={() => setActiveTab("global")}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === "global"
                      ? "bg-[#80e01a] text-black"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  Global SEO
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Dynamic Content Based on Tab */}
            <AnimatePresence mode="wait">
              {activeTab === "local" ? (
                <motion.div
                  key="local"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6 text-[#80e01a]">
                    <MapPin size={24} />
                    <span className="font-bold text-xl">
                      Dominate "Near Me" Searches
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Perfect for brick-and-mortar stores, clinics, and service
                    providers. We optimize your Google Business Profile, build
                    local citations, and generate reviews to make you the #1
                    choice in your neighborhood.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>Google Map Pack Optimization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>Local Citation Building</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>Review Management Strategy</span>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="global"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6 text-[#80e01a]">
                    <Globe size={24} />
                    <span className="font-bold text-xl">
                      International Expansion
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    For eCommerce brands and SaaS companies scaling worldwide.
                    We structure your Hreflang tags, create localized content,
                    and build high-authority backlinks to compete on the global
                    stage.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>Technical Hreflang Setup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>International Keyword Research</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#80e01a] w-5 h-5" />{" "}
                      <span>High-DR Link Acquisition</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Visual for both tabs */}
            <div className="relative h-[400px] bg-black rounded-3xl border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="bg-[#80e01a] text-black text-xs font-bold px-3 py-1 rounded mb-3 inline-block">
                  {activeTab === "local"
                    ? "CASE STUDY: DENTIST"
                    : "CASE STUDY: SAAS"}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {activeTab === "local"
                    ? "+300% Calls in 90 Days"
                    : "10k to 100k Monthly Visitors"}
                </h3>
                <button className="text-sm font-bold text-gray-300 hover:text-white flex items-center gap-2">
                  Read Full Story <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison: Us vs Them --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Why <span className="text-[#80e01a]">Growthzee</span> Wins.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 max-w-5xl mx-auto">
            {/* The Bad Way */}
            <div className="p-8 md:p-12 border border-red-500/20 bg-red-950/5 rounded-3xl opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-8">
                <ShieldAlert className="text-red-500" />
                <h3 className="text-xl font-bold text-red-500 uppercase tracking-widest">
                  Cheap SEO Agencies
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>Spammy backlinks that get you penalized (PBNs).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>Keyword stuffing that ruins user experience.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>Vanity metrics (traffic) with zero conversions.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <span>"Set it and forget it" monthly reports.</span>
                </li>
              </ul>
            </div>

            {/* The Good Way */}
            <div className="p-8 md:p-12 border border-[#80e01a] bg-[#80e01a]/5 rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(128,224,26,0.1)]">
              <div className="absolute top-0 right-0 px-4 py-2 bg-[#80e01a] text-black text-xs font-bold uppercase rounded-bl-xl">
                Recommended
              </div>
              <div className="flex items-center gap-3 mb-8">
                <Zap className="text-[#80e01a]" />
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                  Growthzee Approach
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#80e01a] mt-1 shrink-0" />
                  <span>
                    Data-led content clusters that build topical authority.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#80e01a] mt-1 shrink-0" />
                  <span>
                    Technical audits ensuring 100/100 Core Web Vitals.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#80e01a] mt-1 shrink-0" />
                  <span>Focus on "Money Keywords" that drive sales.</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#80e01a] mt-1 shrink-0" />
                  <span>Transparent, live ROI dashboards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Case Study / Success (NEW) --- */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-[#80e01a] rounded-full blur-[80px] opacity-20"></div>
              <h2 className="text-4xl font-bold mb-6">
                Real Results.
                <br />
                No Fluff.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                See how we helped{" "}
                <span className="text-white font-bold">TechFlow.io</span> scale
                from invisible to industry leader in just 8 months.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-[#111] rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-[#80e01a] mb-1">
                    450%
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    Organic Traffic
                  </div>
                </div>
                <div className="p-6 bg-[#111] rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-[#80e01a] mb-1">
                    $2.1M
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    Revenue Generated
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#80e01a] pl-6 italic text-gray-300">
                "Growthzee didn't just get us traffic. They got us customers.
                Their technical expertise is unmatched in the industry."
              </blockquote>
              <div className="mt-4 pl-6 font-bold text-white">
                — Alex Chen, CEO of TechFlow
              </div>
            </div>

            {/* Graph Visual */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-white">Organic Visibility</h3>
                <div className="flex gap-2 text-xs">
                  <span className="text-gray-500">Before</span>
                  <span className="text-[#80e01a]">After Growthzee</span>
                </div>
              </div>

              <div className="h-64 w-full flex items-end justify-between gap-1 relative">
                {/* Fake Graph */}
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <svg
                    viewBox="0 0 100 50"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 45 Q 20 44, 40 40 T 100 5"
                      fill="none"
                      stroke="#80e01a"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 45 Q 20 44, 40 40 T 100 5 V 50 H 0 Z"
                      fill="url(#gradient)"
                      opacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#80e01a" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Data Points */}
                <div className="absolute top-[80%] left-[10%] w-3 h-3 bg-red-500 rounded-full border-2 border-[#111]"></div>
                <div className="absolute top-[10%] right-[0%] w-3 h-3 bg-[#80e01a] rounded-full border-2 border-[#111] shadow-[0_0_10px_#80e01a]"></div>

                {/* Annotation */}
                <div className="absolute top-[10%] right-[5%] bg-[#111] border border-[#80e01a] px-3 py-1 rounded text-[10px] text-[#80e01a] font-bold">
                  We started here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Ranking Roadmap --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            The Ranking <span className="text-[#80e01a]">Roadmap.</span>
          </h2>
          <p className="text-gray-400">
            No magic wands. Just a proven, repeatable engineering process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#80e01a]/50 to-transparent z-0"></div>

          {rankingProcess.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#050505] border border-[#80e01a] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(128,224,26,0.15)]">
                <span className="text-3xl font-black text-[#80e01a]">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed px-4">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          SEO Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="How long does it take to see results?"
            answer="SEO is a marathon, not a sprint. Technical fixes often show impact in 2-4 weeks. Significant rankings and traffic growth typically typically ramp up between months 3-6 as content matures and authority builds."
          />
          <FAQItem
            question="Do you guarantee #1 rankings?"
            answer="No ethical agency can guarantee a specific #1 spot because Google's algorithm changes daily. We DO guarantee increases in organic traffic, keyword visibility, and lead quality based on proven methodologies."
          />
          <FAQItem
            question="What makes 'Technical SEO' so important?"
            answer="Think of Technical SEO as the foundation of a house. If your site is slow, has broken links, or can't be crawled by bots, even the best content won't rank. We fix the foundation first."
          />
          <FAQItem
            question="Do I really need a blog?"
            answer="Yes. Content is how you capture users at different stages of the buying journey. A blog allows you to target informational keywords, build authority, and earn backlinks naturally."
          />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#80e01a] to-transparent"></div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            READY TO <span className="text-[#80e01a]">DOMINATE?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Your competitors are optimizing right now. Don't let them take your
            customers. Get a free 15-point video audit of your site today.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-10 py-5 bg-[#80e01a] text-black font-bold text-lg uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(128,224,26,0.4)]">
              Get My Audit
            </button>
            <button className="w-full md:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Helper Component for FAQ ---
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-[#0a0a0a] overflow-hidden hover:border-white/20 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-white">{question}</span>
        <span
          className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <Minus size={16} className="text-[#80e01a]" />
          ) : (
            <Plus size={16} />
          )}
        </span>
      </button>
      <div
        className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}

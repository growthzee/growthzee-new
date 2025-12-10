"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clapperboard,
  Cpu,
  Eye,
  Heart,
  Layers,
  MessageCircle,
  Play,
  Repeat,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#80e01a] transition-colors group"
      >
        <span className="text-lg font-medium text-white group-hover:text-[#80e01a] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#80e01a]" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Specialized Card for UGC Visuals
const UGCCard = ({ video, creator, stats }) => (
  <div className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg hover:shadow-[#80e01a]/20 transition-all duration-300">
    <img
      src={video}
      alt="UGC Content"
      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-12 h-12 bg-[#80e01a] rounded-full flex items-center justify-center text-black">
        <Play className="w-5 h-5 fill-current ml-1" />
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full border border-[#80e01a] overflow-hidden">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white text-sm font-bold shadow-black drop-shadow-md">
          @{creator.name}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs font-medium text-gray-200">
        <span className="flex items-center gap-1">
          <Heart className="w-3 h-3 fill-[#80e01a] text-[#80e01a]" />{" "}
          {stats.likes}
        </span>
        <span className="flex items-center gap-1">
          <BarChart3 className="w-3 h-3" /> {stats.views}
        </span>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description, benefits }) => (
  <div className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#80e01a]/40 transition-colors duration-300 flex flex-col h-full">
    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#80e01a]/30 flex items-center justify-center text-[#80e01a] mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-8 leading-relaxed">{description}</p>
    <div className="mt-auto space-y-3">
      {benefits.map((b, i) => (
        <div key={i} className="flex items-center gap-3">
          <Check className="w-4 h-4 text-[#80e01a]" />
          <span className="text-sm text-gray-300">{b}</span>
        </div>
      ))}
    </div>
  </div>
);

const MetricBlock = ({ title, value, unit, icon, description }) => (
  <div className="bg-[#111] border border-white/10 rounded-xl p-6 text-center hover:border-[#80e01a]/50 transition-colors duration-300">
    <div className="text-[#80e01a] mb-3 mx-auto w-8 h-8">{icon}</div>
    <p className="text-3xl md:text-5xl font-extrabold text-white mb-1">
      {value}
      <span className="text-xl font-bold text-[#80e01a] ml-1">{unit}</span>
    </p>
    <h4 className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-3">
      {title}
    </h4>
    <p className="text-xs text-gray-500">{description}</p>
  </div>
);

const ComparisonRow = ({ label, us, them, check }) => (
  <div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center">
    <div className="text-gray-300 font-medium text-sm md:text-base">
      {label}
    </div>
    <div
      className={`text-center font-bold ${
        check ? "text-[#80e01a]" : "text-white"
      }`}
    >
      {check ? <CheckCircle2 className="w-6 h-6 mx-auto" /> : us}
    </div>
    <div className="text-center text-gray-500 text-sm">
      {them === "X" ? <X className="w-6 h-6 mx-auto text-red-500/50" /> : them}
    </div>
  </div>
);

// --- Data ---

const faqs = [
  {
    question: "What is the difference between UGC and Influencer Marketing?",
    answer:
      "UGC is authentic, brand-focused content, while influencer marketing relies on the creator’s personality and audience.",
  },
  {
    question: "Do you handle the community management daily?",
    answer:
      "Yes—our team manages replies, comments, DMs, and daily engagement for your brand.",
  },
  {
    question: "Can I use the UGC videos for paid ads?",
    answer:
      "Yes, all delivered UGC includes full usage rights for paid ads at no extra cost.",
  },
  {
    question: "How do you vet the creators?",
    answer:
      "Each creator goes through quality checks, niche matching, and sample reviews before joining our private network.",
  },
];

const ugcExamples = [
  {
    video:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    creator: {
      name: "jessica_life",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "12K", views: "450K" },
  },
  {
    video:
      "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1000&auto=format&fit=crop",
    creator: {
      name: "tech_dave",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "8.5K", views: "210K" },
  },
  {
    video:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    creator: {
      name: "beauty_ann",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "22K", views: "1.2M" },
  },
  {
    video:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop",
    creator: {
      name: "fit_mark",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "15K", views: "890K" },
  },
];

const creatorNetwork = [
  {
    title: "Diversity",
    description:
      "Creators from every niche and demographic ensure your brand reaches the right audience.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Quality",
    description:
      "Every creator specializes in high-conversion storytelling aligned with platform standards.",
    icon: <Clapperboard className="w-6 h-6" />,
  },
  {
    title: "Speed",
    description:
      "Most projects are delivered within 7–10 days for faster content turnaround.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Compliance",
    description:
      "You get full usage rights for all delivered assets with zero hidden conditions.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

const organicMetrics = [
  {
    title: "Follower Growth",
    value: "350",
    unit: "%",
    icon: <BarChart3 className="w-6 h-6" />,
    description:
      "We help brands grow their organic followers by 350% on average.",
  },
  {
    title: "Engagement Rate",
    value: "12",
    unit: "%",
    icon: <MessageCircle className="w-6 h-6" />,
    description:
      "We consistently deliver engagement levels above industry standards.",
  },
  {
    title: "Profile Visits",
    value: "50",
    unit: "K+",
    icon: <Users className="w-6 h-6" />,
    description:
      "Strong creatives and smart strategy bring consistent profile traffic.",
  },
];

const ugcMetrics = [
  {
    title: "Ad CTR",
    value: "2.1",
    unit: "%",
    icon: <ArrowRight className="w-6 h-6" />,
    description:
      "Our UGC ads perform 1.8x better than regular ads for higher conversions.",
  },
  {
    title: "CPA Reduction",
    value: "35",
    unit: "%",
    icon: <Check className="w-6 h-6" />,
    description:
      "Better ad performance leads to lower acquisition costs and higher profits.",
  },
  {
    title: "Retention",
    value: "65",
    unit: "%",
    icon: <Play className="w-6 h-6" />,
    description: "We hook viewers in 3 seconds and keep them watching longer.",
  },
];

export default function SocialAndUGC() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("organic"); // 'organic' or 'ugc'

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#80e01a] selection:text-black">
      <Navbar />

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#80e01a]/10 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#80e01a]/5 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* --- Hero Section --- */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3 fill-current" />
            Social & Content Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
          >
            Authenticity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] to-white">
              Is The New Viral.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Stop interrupting. Start engaging. We combine
            <span className="text-white font-bold">
              {" "}
              strategic organic management
            </span>{" "}
            with
            <span className="text-white font-bold"> high-converting UGC </span>
            to build trust and drive sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#80e01a] text-black font-bold rounded-full hover:bg-[#80e01a]/90 transition-all shadow-[0_0_20px_rgba(128,224,26,0.3)] flex items-center gap-2">
              <Zap className="w-4 h-4 fill-current" />
              Get Organic Growth
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Order UGC Content
            </button>
          </motion.div>
        </div>

        {/* --- Metric-Focused Results Section --- */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Tangible Results. No Fluff.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Organic Metrics */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#80e01a] mb-8 flex items-center gap-3">
                <Repeat className="w-6 h-6" /> Organic Performance
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {organicMetrics.map((metric, idx) => (
                  <MetricBlock key={idx} {...metric} />
                ))}
              </div>
            </div>

            {/* UGC Metrics */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#80e01a] mb-8 flex items-center gap-3">
                <Smartphone className="w-6 h-6" /> UGC Creative Impact
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {ugcMetrics.map((metric, idx) => (
                  <MetricBlock key={idx} {...metric} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- The Pivot: Organic vs UGC Toggle Section --- */}
        <div className="mb-32">
          <div className="flex justify-center mb-12">
            <div className="bg-[#111] p-1.5 rounded-full border border-white/10 inline-flex relative">
              <div
                className={`absolute h-[calc(100%-12px)] top-1.5 transition-all duration-300 rounded-full bg-[#80e01a] ${
                  activeTab === "organic"
                    ? "left-1.5 w-[160px]"
                    : "left-[170px] w-[160px]"
                }`}
              ></div>
              <button
                onClick={() => setActiveTab("organic")}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-[160px] ${
                  activeTab === "organic"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Organic Social
              </button>
              <button
                onClick={() => setActiveTab("ugc")}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors w-[160px] ${
                  activeTab === "ugc"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                UGC Studio
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "organic" ? (
              <motion.div
                key="organic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
              >
                <ServiceCard
                  icon={<Users className="w-6 h-6" />}
                  title="Community Management"
                  description="We don't post and vanish — we become the brand voice of your brand. As a leading digital marketing company in India, we react to comments, DMs, and other daily interactions to not only build relationships but also convert followers into loyal fans."
                  benefits={[
                    "Daily Engagement",
                    "Sentiment Analysis",
                    "Crisis Management",
                    "Inbox Zero Strategy",
                  ]}
                />
                <ServiceCard
                  icon={<Repeat className="w-6 h-6" />}
                  title="Strategy & Curation"
                  description="Consistency is what leads to trust. We prepare and design the whole content work for your brand so that it is always a polished and professional one. From captions to hashtags, we make sure your feed is performing at the level of top digital marketing companies in India."
                  benefits={[
                    "Content Calendar",
                    "Caption Copywriting",
                    "Hashtag Strategy",
                    "Visual Grid Planning",
                  ]}
                />
              </motion.div>
            ) : (
              <motion.div
                key="ugc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
              >
                <ServiceCard
                  icon={<UserCheck className="w-6 h-6" />}
                  title="Creator Sourcing"
                  description="Stop wasting time scrolling. We match your brand with vetted content creators who actually look like your target customer and know how to make hooks."
                  benefits={[
                    "Demographic Matching",
                    "Vetted Creator Network",
                    "Contract Negotiation",
                    "Rights Management",
                  ]}
                />
                <ServiceCard
                  icon={<Clapperboard className="w-6 h-6" />}
                  title="Content Production"
                  description="We manage the entire creative brief. You get high-resolution, native-style videos (Reels/TikToks) ready to post or use in your paid ad campaigns."
                  benefits={[
                    "Scripting & Briefing",
                    "Native Editing Style",
                    "Hook Variations",
                    "Fast Turnaround",
                  ]}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- NEW SECTION: The Content Pyramid (Replaces Pricing) --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-[#80e01a] mb-3 uppercase tracking-widest">
              The Strategy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Content Matrix
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our strategy helps brands scale fast, making us one of the best
              digital marketing companies in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stage 1: Attract */}
            <div className="p-8 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group hover:border-[#80e01a]/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Attract</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Viral & Reach
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We create viral, trend-based content that boosts visibility
                  like the top digital marketing companies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Reels
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Memes
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Trends
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 2: Nurture */}
            <div className="p-8 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group hover:border-[#80e01a]/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#80e01a]/10 rounded-full blur-[40px] group-hover:bg-[#80e01a]/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#80e01a]/20 text-[#80e01a] flex items-center justify-center mb-6">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Nurture</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Trust & Value
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Our educational, story-driven content builds trust, making
                  brands choose us for reliable digital marketing services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Carousels
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    How-To
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    BTS
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 3: Convert */}
            <div className="p-8 rounded-3xl bg-[#111] border border-white/10 relative overflow-hidden group hover:border-[#80e01a]/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] group-hover:bg-purple-500/20 transition-all"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Convert</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                  Sales & Action
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Benefit-led content with strong CTAs drives sales and traffic,
                  delivering results expected from the best digital marketing
                  company in India.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Reviews
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Promos
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                    Launches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Creator Network Section --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-[#80e01a] mb-3 uppercase tracking-widest">
              Our Secret Weapon
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Vetted Creator Network
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our private network includes only top-quality creators carefully
              selected for brand fit and consistency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creatorNetwork.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[#111] border border-white/10 rounded-xl hover:border-[#80e01a]/40 transition-colors duration-300"
              >
                <div className="text-[#80e01a] mx-auto w-12 h-12 flex items-center justify-center mb-4 border border-[#80e01a]/30 rounded-full bg-black">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- UGC Showcase --- */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Real People. Real Results.
              </h2>
              <p className="text-gray-400 max-w-lg">
                Consumers trust people, not logos. Check out some of the
                high-performing creative assets we&apos;ve produced.
              </p>
            </div>
            <button className="flex items-center gap-2 text-[#80e01a] font-bold hover:underline underline-offset-4">
              View Full Case Studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scrolling/Grid of Phones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {ugcExamples.map((item, idx) => (
              <UGCCard key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* --- NEW SECTION: Comparison Table --- */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Hiring in-house is expensive and risky. Hiring freelancers is
                inconsistent. We offer the sweet spot: Agency reliability with a
                dedicated team feel.
              </p>
              <div className="p-6 bg-[#80e01a]/10 border border-[#80e01a]/20 rounded-2xl">
                <p className="text-[#80e01a] font-bold text-lg mb-2">
                  Cost Efficiency
                </p>
                <p className="text-sm text-gray-300">
                  Partnering with us costs{" "}
                  <span className="text-white font-bold">60% less</span> than
                  hiring a full-time Social Media Manager + Content Creator +
                  Editor.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4 pb-6 border-b border-white/10 mb-2">
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                    Feature
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#80e01a] font-bold text-center">
                    GrowthZee
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold text-center">
                    In-House Hire
                  </div>
                </div>
                <ComparisonRow
                  label="Cost per Month"
                  us="Fixed Fee"
                  them="$5k - $8k"
                  check={true}
                />
                <ComparisonRow
                  label="Content Production"
                  us="Included"
                  them="Extra Cost"
                  check={true}
                />
                <ComparisonRow
                  label="Expertise"
                  us="Entire Team"
                  them="One Person"
                  check={true}
                />
                <ComparisonRow
                  label="Availability"
                  us="Always On"
                  them="9-5 Only"
                  check={true}
                />
                <ComparisonRow
                  label="Tools & Tech"
                  us="Included"
                  them="Extra Cost"
                  check={true}
                />
                <ComparisonRow
                  label="Turnaround Time"
                  us="24-48 Hours"
                  them="Varies"
                  check={true}
                />
                <div className="pt-6 text-center">
                  <p className="text-xs text-gray-500 italic">
                    Comparison based on average US agency & salary rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Tech Stack & Workflow --- */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powered by Pro Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">Analytics</h3>
              <p className="text-xs text-gray-400">
                Clear visual insights showing which content performs best across
                metrics and demographics.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">Scheduling</h3>
              <p className="text-xs text-gray-400">
                Automated posting at peak times to maximize reach with zero
                effort.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">Design</h3>
              <p className="text-xs text-gray-400">
                Premium editing tools that turn your raw footage into
                scroll-stopping visuals.
              </p>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">Trend AI</h3>
              <p className="text-xs text-gray-400">
                AI-powered trend detection that helps you catch viral moments
                before they peak.
              </p>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Common Questions
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Everything you need to know about our organic & UGC process.
          </p>
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

        {/* --- Final CTA --- */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#111] border border-white/10 p-12 text-center mb-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[#80e01a]/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to build a <br />
              <span className="text-[#80e01a]">Community</span>?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Stop yelling into the void. Start creating content that people
              actually want to watch and share.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#80e01a] text-black text-lg font-bold uppercase rounded-full shadow-[0_0_40px_rgba(128,224,26,0.4)] hover:shadow-[0_0_60px_rgba(128,224,26,0.6)] transition-all duration-300"
            >
              Book A Strategy Call
            </motion.button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

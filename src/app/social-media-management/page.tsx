"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
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
  Repeat,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
  Clock,
} from "lucide-react";

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

const UGCCard = ({ videoSource, creator, stats, href }) => (
  <Link href={href || "#"} className="block group">
    <div className="relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#80e01a]/20 transition-all duration-500">
      <video
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
        <div className="w-16 h-16 bg-[#80e01a] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(128,224,26,0.6)]">
          <ArrowUpRight className="w-8 h-8 stroke-[2.5px]" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#80e01a] p-0.5 overflow-hidden bg-black">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-bold tracking-tight">
              @{creator.name}
            </span>
            <span className="text-[#80e01a] text-[10px] font-bold uppercase tracking-widest">
              Verified Creator
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs font-bold text-gray-300 bg-white/5 backdrop-blur-md rounded-xl p-3 border border-white/10">
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-[#80e01a] text-[#80e01a]" />{" "}
            {stats.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-gray-400" /> {stats.views}
          </span>
        </div>
      </div>
    </div>
  </Link>
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
    videoSource:
      "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767784156/Video-27_hukdvq.mp4",
    href: "https://www.instagram.com/reel/DNGQLxeIifp/?igsh=bmdqcGxwYnd5ODFn",
    creator: {
      name: "vorne_in",
      avatar:
        "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767786328/white_logo_vorne_430x_zp8gbg.webp?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "241", views: "45.6k" },
  },
  {
    videoSource:
      "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767784101/Video-698_fcpoya.mp4",
    href: "https://www.instagram.com/reel/DM7YthgzQ1X/?igsh=c2d5eWc4cTR3bXlx",
    creator: {
      name: "growthzee",
      avatar:
        "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785945/GrowthZee_Final_Logo_White-01_ftuoqk.png?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "327", views: "171k" },
  },
  {
    videoSource:
      "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767785368/Video-774_ha7s0j.mp4",
    href: "https://www.instagram.com/reel/DNYJ1QKS9Xt/?igsh=bG53MjBkMjhuejVz",
    creator: {
      name: "kerala_secrets_",
      avatar:
        "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785943/logo_kerala_vn2wgn.png?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "182", views: "23.9k" },
  },
  {
    videoSource:
      "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767785790/Introducing_Jobzshala_A_unique_job_portal_built_to_support_jobseekers_across_the_globe_making_pgciej.mp4",
    href: "https://www.instagram.com/reel/C37wceLSy76/?igsh=OHZ5Y3kzaTRrcWV0",
    creator: {
      name: "jobzshala",
      avatar:
        "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785943/Jobzshala_Logo-01_ktihz3.png?auto=format&fit=crop&w=100&q=80",
    },
    stats: { likes: "2.7k", views: "60.8K" },
  },
];

const organicMetrics = [
  {
    title: "Follower Growth",
    value: "350",
    unit: "%",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Average growth across managed organic accounts.",
  },
  {
    title: "Engagement",
    value: "12",
    unit: "%",
    icon: <MessageCircle className="w-6 h-6" />,
    description: "Consistent engagement levels above industry standards.",
  },
  {
    title: "Profile Visits",
    value: "50",
    unit: "K+",
    icon: <Users className="w-6 h-6" />,
    description: "Monthly profile traffic driven by viral strategy.",
  },
];

const ugcMetrics = [
  {
    title: "Ad CTR",
    value: "2.1",
    unit: "%",
    icon: <ArrowRight className="w-6 h-6" />,
    description: "UGC ads perform 1.8x better than static assets.",
  },
  {
    title: "CPA Reduction",
    value: "35",
    unit: "%",
    icon: <Check className="w-6 h-6" />,
    description: "Lower acquisition costs through authentic content.",
  },
  {
    title: "Retention",
    value: "65",
    unit: "%",
    icon: <Clock className="w-6 h-6" />,
    description: "High watch times with effective visual hooks.",
  },
];

export default function SocialAndUGC() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("organic");

  const scrollToCaseStudies = (e) => {
    e.preventDefault();
    const element = document.getElementById("case-studies");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#80e01a] selection:text-black">
      <Navbar />

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#80e01a]/10 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* --- Hero --- */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3 fill-current" />
            Social & Content Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            We combine{" "}
            <span className="text-white font-bold">
              strategic organic management
            </span>{" "}
            with{" "}
            <span className="text-white font-bold">high-converting UGC</span> to
            drive real growth.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* 1. DOWNLOAD BUTTON UPDATE */}
            <a
              href="/Growthzee_SMM_Offer.pdf"
              download="Growthzee_SMM_Offer.pdf"
            >
              <button className="px-8 py-4 bg-[#80e01a] text-black font-bold rounded-full hover:bg-[#80e01a]/90 transition-all shadow-[0_0_20px_rgba(128,224,26,0.3)] flex items-center gap-2">
                <Zap className="w-4 h-4 fill-current" /> Learn More
              </button>
            </a>

            {/* 2. CASE STUDIES SCROLL UPDATE */}
            <Link href="#case-studies">
              <button
                onClick={scrollToCaseStudies}
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                View Case Studies
              </button>
            </Link>
          </div>
        </div>

        {/* --- Metrics --- */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#80e01a] mb-8">
                Organic Performance
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {organicMetrics.map((m, i) => (
                  <MetricBlock key={i} {...m} />
                ))}
              </div>
            </div>
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#80e01a] mb-8">
                UGC Creative Impact
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {ugcMetrics.map((m, i) => (
                  <MetricBlock key={i} {...m} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Tab Switcher --- */}
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
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold w-[160px] ${
                  activeTab === "organic"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Organic Social
              </button>
              <button
                onClick={() => setActiveTab("ugc")}
                className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold w-[160px] ${
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
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activeTab === "organic" ? (
                <>
                  <ServiceCard
                    icon={<Users className="w-6 h-6" />}
                    title="Community Management"
                    description="We react to comments, DMs, and daily interactions to convert followers into loyal fans."
                    benefits={[
                      "Daily Engagement",
                      "Sentiment Analysis",
                      "Inbox Zero Strategy",
                    ]}
                  />
                  <ServiceCard
                    icon={<Repeat className="w-6 h-6" />}
                    title="Strategy & Curation"
                    description="Consistency leads to trust. We prepare and design the whole content roadmap for your brand."
                    benefits={[
                      "Content Calendar",
                      "Caption Copywriting",
                      "Visual Grid Planning",
                    ]}
                  />
                </>
              ) : (
                <>
                  <ServiceCard
                    icon={<UserCheck className="w-6 h-6" />}
                    title="Creator Sourcing"
                    description="We match your brand with vetted creators who actually look like your target customer."
                    benefits={[
                      "Demographic Matching",
                      "Vetted Network",
                      "Rights Management",
                    ]}
                  />
                  <ServiceCard
                    icon={<Clapperboard className="w-6 h-6" />}
                    title="Content Production"
                    description="Native-style videos (Reels/TikToks) ready to post or use in your paid ad campaigns."
                    benefits={[
                      "Scripting & Briefing",
                      "Native Editing",
                      "Hook Variations",
                    ]}
                  />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- CASE STUDIES SECTION (ID ADDED HERE) --- */}
        <div id="case-studies" className="mb-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Case Studies
              </h2>
              <p className="text-gray-400 max-w-lg">
                Click on any video to see the full creative breakdown and
                performance analysis.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-[#80e01a] font-bold hover:underline underline-offset-4"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {ugcExamples.map((item, idx) => (
              <UGCCard key={idx} {...item} />
            ))}
          </div>
        </div>

        {/* --- Comparison Table --- */}
        <div className="mb-32">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why GrowthZee?
            </h2>
            <div className="max-w-4xl mx-auto">
              <ComparisonRow
                label="Cost per Month"
                us="Fixed Fee"
                them="$5k - $8k"
                check={true}
              />
              <ComparisonRow
                label="Content Assets"
                us="Unlimited"
                them="Extra Cost"
                check={true}
              />
              <ComparisonRow
                label="Turnaround"
                us="24-48 Hours"
                them="Varies"
                check={true}
              />
              <ComparisonRow
                label="Team Expertise"
                us="Entire Studio"
                them="One Person"
                check={true}
              />
            </div>
          </div>
        </div>

        {/* --- FAQ --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
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
          <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[#80e01a]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to scale?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Stop yelling into the void. Start creating content people actually
              share.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-[#80e01a] text-black text-lg font-bold uppercase rounded-full shadow-[0_0_40px_rgba(128,224,26,0.4)] transition-all"
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

"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  Heart,
  MessageCircle,
  Repeat,
  Sparkles,
  Users,
  X,
  Zap,
  Play,
  Pause,
  Volume2,
  VolumeX,
  TrendingUp,
  Share2,
  ExternalLink,
  Eye,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// --- Types & Data ---

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
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

const clientLogos = [
  { name: "Asian Bond", logo: "/asian bond logo 001.png", category: "B2B & Tech", description: "B2B Financial Scaling Solutions", growth: "+310% Reach", platforms: ["linkedin", "instagram"] },
  { name: "GrowthZee Partner", logo: "/fulllogo_transparent.png", category: "B2B & Tech", description: "Agency Growth Systems", growth: "+450% Engagement", platforms: ["instagram", "youtube", "linkedin"] },
  { name: "Rasoi King", logo: "/rasoi king new logo (1).png", category: "Lifestyle & FMCG", description: "D2C Spices & Gourmet Brand", growth: "+280% Sales", platforms: ["instagram", "facebook"] },
  { name: "Eco Lifestyle", logo: "/IMG_2413.png", category: "E-Commerce", description: "Sustainable Consumer Retail", growth: "+500% Views", platforms: ["instagram", "tiktok"] },
  { name: "Modish Wear", logo: "/Untitled-design-1 (4).png", category: "E-Commerce", description: "D2C Apparel & Modern Fashion", growth: "+380% Conversions", platforms: ["instagram", "tiktok", "facebook"] },
  { name: "Kbiyara", logo: "/kbiyara logo green.png", category: "E-Commerce", description: "Organic Ayurvedic Wellness Range", growth: "+420% Leads", platforms: ["instagram", "youtube"] },
  { name: "Jobzshala", logo: "/Jobzshala Logo-02.png", category: "Education & Services", description: "Global Career Platform & Portal", growth: "+620% Traffic", platforms: ["linkedin", "instagram", "youtube"] },
  { name: "Modern Living", logo: "/logo lockup green.png", category: "Lifestyle & FMCG", description: "Smart Home Living Systems", growth: "+210% Reach", platforms: ["instagram", "facebook"] },
  { name: "Auraways", logo: "/Auraways logo 1.png", category: "Education & Services", description: "Global Travel & Immigration Support", growth: "+340% Bookings", platforms: ["instagram", "youtube", "linkedin"] },
  { name: "Haripriye", logo: "/HARIPRIYE LOGO-01.png", category: "Lifestyle & FMCG", description: "Artisanal Traditional Confectionery", growth: "+290% Engagement", platforms: ["instagram", "facebook"] },
  { name: "Corporate Hub", logo: "/logo.png", category: "B2B & Tech", description: "Corporate Workplace Accelerator", growth: "+180% Leads", platforms: ["linkedin"] },
  { name: "Athleta Gear", logo: "/474802338_660290993335714_3333538994452480484_n.jpg", category: "E-Commerce", description: "Performance Wear & Fitness App", growth: "+530% Views", platforms: ["instagram", "tiktok"] },
  { name: "Cafe Delight", logo: "/514589699_18275147488279885_1787357067326707066_n.jpg", category: "Lifestyle & FMCG", description: "Aesthetic Specialty Coffee Chain", growth: "+260% Footfall", platforms: ["instagram", "facebook"] },
  { name: "Elite Decor", logo: "/533137437_17851901640527703_3307439172453013123_n.jpg", category: "E-Commerce", description: "Luxury Furnishings & Bespoke Home", growth: "+310% Sales", platforms: ["instagram", "pinterest"] },
  { name: "TechSprint", logo: "/612992896_17874398616472016_3111202136808826232_n.jpg", category: "B2B & Tech", description: "Next-gen SaaS Workflow Tools", growth: "+490% Installs", platforms: ["linkedin", "youtube"] },
  { name: "Glow & Co", logo: "/619934683_17849456628666008_8975028287258288799_n.jpg", category: "E-Commerce", description: "Organic Vegan Skincare Studio", growth: "+370% Subscriptions", platforms: ["instagram", "tiktok"] },
];

const ugcExamples = [
  {
    videoSource: "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767784156/Video-27_hukdvq.mp4",
    href: "https://www.instagram.com/reel/DNGQLxeIifp/?igsh=bmdqcGxwYnd5ODFn",
    creator: {
      name: "vorne_in",
      avatar: "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767786328/white_logo_vorne_430x_zp8gbg.webp?auto=format&fit=crop&w=100&q=80",
    },
    title: "Vorne Activewear Launch Promo",
    category: "Reels & Ads",
    stats: { likes: "241", views: "45.6k", shares: "128", comments: "18" },
    strategy: {
      hook: "Instant visual contrast: showcasing material flexibility within the first 1.5 seconds.",
      retention: "Fast-cut styling sync'd to upbeat lo-fi track keeps completion rate high.",
      cta: "Exclusive discount code overlay with direction to shop via bio.",
    }
  },
  {
    videoSource: "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767784101/Video-698_fcpoya.mp4",
    href: "https://www.instagram.com/reel/DM7YthgzQ1X/?igsh=c2d5eWc4cTR3bXlx",
    creator: {
      name: "growthzee",
      avatar: "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785945/GrowthZee_Final_Logo_White-01_ftuoqk.png?auto=format&fit=crop&w=100&q=80",
    },
    title: "Organic Brand Strategy Roadmap",
    category: "Explainer Content",
    stats: { likes: "327", views: "171k", shares: "1.2k", comments: "89" },
    strategy: {
      hook: "Direct bold question: 'Why your social campaigns are burning cash without conversions?'",
      retention: "Step-by-step whiteboard animation & screen overlays mapping ad frameworks.",
      cta: "CTA to download full free audit templates directly from DM automation.",
    }
  },
  {
    videoSource: "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767785368/Video-774_ha7s0j.mp4",
    href: "https://www.instagram.com/reel/DNYJ1QKS9Xt/?igsh=bG53MjBkMjhuejVz",
    creator: {
      name: "kerala_secrets_",
      avatar: "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785943/logo_kerala_vn2wgn.png?auto=format&fit=crop&w=100&q=80",
    },
    title: "Kerala Hidden Getaways Tour",
    category: "UGC Travel",
    stats: { likes: "182", views: "23.9k", shares: "490", comments: "31" },
    strategy: {
      hook: "Visual pattern interrupt: crystal-clear waterfall drone shot with text overlay 'Don't go to Munnar before seeing this.'",
      retention: "Pacing matches ambient forest sounds, shifting perspective from macro to drone.",
      cta: "Prompts users to save the reel for their next itinerary planning cycle.",
    }
  },
  {
    videoSource: "https://res.cloudinary.com/dkt9cyu1u/video/upload/v1767785790/Introducing_Jobzshala_A_unique_job_portal_built_to_support_jobseekers_across_the_globe_making_pgciej.mp4",
    href: "https://www.instagram.com/reel/C37wceLSy76/?igsh=OHZ5Y3kzaTRrcWV0",
    creator: {
      name: "jobzshala",
      avatar: "https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785943/Jobzshala_Logo-01_ktihz3.png?auto=format&fit=crop&w=100&q=80",
    },
    title: "Introducing Jobzshala Portal",
    category: "Brand Promos",
    stats: { likes: "2.7k", views: "60.8k", shares: "830", comments: "142" },
    strategy: {
      hook: "High-relatability trigger: 'How I sorted 150 job applications in under 5 minutes.'",
      retention: "Split-screen showcasing platform interface vs creator reacting in real-time.",
      cta: "Direct swipe-up link setup for immediate registration on the website portal.",
    }
  },
];

const faqs = [
  {
    question: "What is the difference between UGC and Influencer Marketing?",
    answer:
      "UGC (User Generated Content) focus is on authentic, high-converting content creators filming tailored assets for your brand's ad library or organic feed. You own the content rights. Influencer marketing relies purely on the influencer sharing content to their own existing audience for exposure.",
  },
  {
    question: "Do you handle the community management daily?",
    answer:
      "Absolutely. Our dedicated moderators manage comment threads, replies, incoming customer DMs, and outbound community engagement loops daily so your channels remain highly interactive and responsive.",
  },
  {
    question: "Can I use the UGC videos for paid advertising?",
    answer:
      "Yes, all custom UGC and reels created during our campaigns include full perpetual commercial usage rights, allowing you to run them as paid Meta, TikTok, or YouTube ads with zero extra licensing costs.",
  },
  {
    question: "How do you select and vet the creators?",
    answer:
      "We source creators from our private, curated network. Each creator undergoes rigorous checks on visual quality, audio fidelity, hook delivery, and historical retention performance matching your specific industry niche.",
  },
];

// --- Custom Components ---

const ComparisonRow = ({ label, us, them, check }) => (
  <div className="grid grid-cols-3 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/[0.01] transition-colors px-4 rounded-lg">
    <div className="text-gray-300 font-medium text-sm md:text-base">
      {label}
    </div>
    <div className={`text-center font-bold ${check ? "text-[#80e01a]" : "text-white"}`}>
      {check ? (
        <div className="flex items-center justify-center gap-2 text-[#80e01a]">
          <CheckCircle2 className="w-5 h-5 fill-black" />
          <span className="text-xs md:text-sm tracking-wider font-extrabold uppercase hidden md:inline">GrowthZee Core</span>
        </div>
      ) : (
        us
      )}
    </div>
    <div className="text-center text-gray-500 text-sm">
      {them === "X" ? <X className="w-5 h-5 mx-auto text-red-500/50" /> : them}
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description, benefits }) => (
  <motion.div
    whileHover={{ y: -6, borderColor: "rgba(128, 224, 26, 0.4)" }}
    className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:shadow-[0_15px_30px_rgba(128,224,26,0.05)] transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#80e01a]/5 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:bg-[#80e01a]/10 transition-colors duration-300"></div>
    <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-[#80e01a] mb-6 shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#80e01a] transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
      {description}
    </p>
    <div className="mt-auto space-y-3 border-t border-white/5 pt-6">
      {benefits.map((b, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#80e01a]/10 border border-[#80e01a]/30 flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-[#80e01a]" />
          </div>
          <span className="text-xs md:text-sm text-gray-300 font-medium">{b}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const MetricBlock = ({ title, value, unit, icon, description }) => (
  <motion.div
    whileHover={{ scale: 1.02, borderColor: "rgba(128,224,26,0.3)" }}
    className="bg-[#111] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 shadow-lg relative group overflow-hidden"
  >
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#80e01a]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="text-[#80e01a] mb-3 mx-auto w-10 h-10 bg-[#80e01a]/5 rounded-full flex items-center justify-center border border-[#80e01a]/20">
      {icon}
    </div>
    <p className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">
      {value}
      <span className="text-lg font-extrabold text-[#80e01a] ml-0.5">{unit}</span>
    </p>
    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">
      {title}
    </h4>
    <p className="text-[11px] text-gray-500 leading-normal max-w-[200px] mx-auto">
      {description}
    </p>
  </motion.div>
);

export default function SocialAndUGC() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Client Portfolio Grid states
  const [selectedClientCategory, setSelectedClientCategory] = useState<string>("All");
  
  // Reels Player states
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  // Live Analytics Simulator states
  const [simulatorMode, setSimulatorMode] = useState<"without" | "with">("with");

  // Heart Floating particles state for Hero mockup
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const heartCounter = useRef<number>(0);

  // Auto incremental counter state for followers
  const [followerCount, setFollowerCount] = useState<number>(12410);

  // Register interval for floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const id = heartCounter.current++;
      const left = Math.random() * 80 + 10; // random percentage left offset
      const delay = Math.random() * 0.5;
      setHearts((prev) => [...prev, { id, left, delay }]);
      
      // Keep state clean
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 3000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Increment followers dynamically
  useEffect(() => {
    const countInterval = setInterval(() => {
      setFollowerCount((prev) => {
        if (prev < 89203) {
          // Increment faster at the start and slow down near the cap
          const diff = Math.floor(Math.random() * 450) + 150;
          return Math.min(prev + diff, 89203);
        }
        return 89203;
      });
    }, 150);

    return () => clearInterval(countInterval);
  }, []);

  // Reset counters periodically for demo effect
  useEffect(() => {
    const resetInterval = setInterval(() => {
      setFollowerCount(12410);
    }, 30000);
    return () => clearInterval(resetInterval);
  }, []);

  // Handle Video Player Progress Tracking
  const handleTimeUpdate = () => {
    if (videoPlayerRef.current) {
      const current = videoPlayerRef.current.currentTime;
      const duration = videoPlayerRef.current.duration;
      if (duration) {
        setVideoProgress((current / duration) * 100);
      }
    }
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoPlayerRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      videoPlayerRef.current.currentTime = percentage * videoPlayerRef.current.duration;
      setVideoProgress(percentage * 100);
    }
  };

  const togglePlay = () => {
    if (videoPlayerRef.current) {
      if (isVideoPlaying) {
        videoPlayerRef.current.pause();
      } else {
        videoPlayerRef.current.play().catch(err => console.log(err));
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Trigger media autoplay update on active reel swap
  useEffect(() => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.load();
      const playPromise = videoPlayerRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsVideoPlaying(true);
        }).catch(() => {
          setIsVideoPlaying(false);
        });
      }
    }
    setVideoProgress(0);
  }, [activeVideoIdx]);

  // Client filtering
  const categories = ["All", "E-Commerce", "B2B & Tech", "Lifestyle & FMCG", "Education & Services"];
  const filteredClients = selectedClientCategory === "All"
    ? clientLogos
    : clientLogos.filter(client => client.category === selectedClientCategory);

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#80e01a] selection:text-black antialiased overflow-x-hidden">
      <Navbar />

      {/* --- Ambient Background Glows --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#80e01a]/10 rounded-full blur-[140px] opacity-25 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#80e01a]/5 rounded-full blur-[140px] opacity-15"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-28 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-36 mt-8">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(128,224,26,0.15)]"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Next-Gen Social Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-white mb-6 leading-[0.9]"
            >
              Authentic Reels. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] via-[#c6ff7a] to-white">
                Savage Scale.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              We don't do boring corporate announcements. We build high-converting content engines combining{" "}
              <span className="text-white font-bold decoration-[#80e01a] decoration-2 underline underline-offset-4">organic strategy</span>{" "}
              with native{" "}
              <span className="text-[#80e01a] font-bold">UGC creatives</span> that print views and drive pipeline.
            </motion.p>

            {/* Certifications and Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 w-full max-w-lg mb-10 text-center"
            >
              <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center">
                <TrendingUp className="w-5 h-5 text-[#80e01a] mb-1" />
                <span className="text-white text-sm font-bold">50M+ Views</span>
                <span className="text-[10px] text-gray-500">Organic Reach</span>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center">
                <Users className="w-5 h-5 text-[#80e01a] mb-1" />
                <span className="text-white text-sm font-bold">100+ Brands</span>
                <span className="text-[10px] text-gray-500">Scaled Globally</span>
              </div>
              <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex flex-col justify-center items-center">
                <CheckCircle2 className="w-5 h-5 text-[#80e01a] mb-1" />
                <span className="text-white text-sm font-bold">In-house Studio</span>
                <span className="text-[10px] text-gray-500">End-to-end UGC</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Growthzee_SMM_Offer.pdf"
                download="Growthzee_SMM_Offer.pdf"
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#80e01a] rounded-full blur-[10px] opacity-35 group-hover:opacity-60 transition-opacity"></div>
                <button className="relative px-8 py-4 bg-[#80e01a] text-black font-bold rounded-full hover:bg-[#97f62e] transition-all flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-current" /> Download SMM Offer
                </button>
              </a>

              <button
                onClick={(e) => scrollToSection(e, "video-portfolio")}
                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Explore Video Reels
              </button>
            </motion.div>
          </div>

          {/* Right Hero: Dynamic Interactive Social Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Sparkles / Stars behind mockup */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-[#80e01a] rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#80e01a] rounded-full animate-bounce"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-80 h-[500px] bg-zinc-950 border-[6px] border-zinc-800 rounded-[2.5rem] shadow-[0_0_50px_rgba(128,224,26,0.1)] overflow-hidden flex flex-col group z-10"
              style={{ perspective: 1000 }}
            >
              {/* Phone Camera Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-40 flex justify-center items-center">
                <div className="w-24 h-4 bg-zinc-850 rounded-b-2xl flex items-center justify-around px-3">
                  <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
                  <div className="w-8 h-1 bg-zinc-900 rounded-full"></div>
                </div>
              </div>

              {/* Interactive Hover Blueprint Overlay */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-30 flex flex-col justify-center items-start p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-[#80e01a]/30 rounded-[2rem]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-2 py-0.5 rounded bg-[#80e01a]/20 border border-[#80e01a]/40 text-[#80e01a] text-[10px] font-mono font-bold uppercase">Blueprint</div>
                  <span className="text-white text-xs font-bold">GrowthZee Core Framework</span>
                </div>
                <h4 className="text-[#80e01a] text-lg font-bold mb-6">High-Retention Funnel</h4>
                
                <div className="space-y-4 w-full">
                  <div className="border-l-2 border-[#80e01a] pl-3">
                    <p className="text-xs text-white font-bold">0-3 Seconds: Hook Setup</p>
                    <p className="text-[10px] text-gray-400">High contrast visual interrupt matching user scroll patterns.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-3">
                    <p className="text-xs text-white font-bold">3-10 Seconds: Retention Beats</p>
                    <p className="text-[10px] text-gray-400">Sound design beats, fast zoom transitions, automated text logs.</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-3">
                    <p className="text-xs text-white font-bold">10-15 Seconds: CTA Trigger</p>
                    <p className="text-[10px] text-gray-400">Contextual prompt matching DM automation codes for conversion.</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[10px] text-gray-400 w-full justify-between">
                  <span>Hover to explore feeds</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#80e01a]" />
                </div>
              </div>

              {/* Status Bar */}
              <div className="pt-7 px-6 flex justify-between items-center text-[10px] font-bold text-gray-400 z-20 bg-zinc-950">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3 h-3 rotate-90" />
                  <span className="font-mono">5G</span>
                  <div className="w-5 h-2.5 border border-gray-500 rounded-sm p-0.5 flex items-center">
                    <div className="w-full h-full bg-gray-400 rounded-2xs"></div>
                  </div>
                </div>
              </div>

              {/* IG Style App Header */}
              <div className="px-4 py-3 flex justify-between items-center border-b border-white/5 bg-zinc-950/80 backdrop-blur z-20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff8a00] to-[#da0079] p-0.5">
                    <div className="w-full h-full rounded-full border border-black overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785945/GrowthZee_Final_Logo_White-01_ftuoqk.png?auto=format&fit=crop&w=100&q=80"
                        alt="Growthzee Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold leading-tight">growthzee</span>
                    <span className="text-[9px] text-[#80e01a] font-semibold uppercase tracking-wider">Campaign Hub</span>
                  </div>
                </div>
                <Instagram className="w-4 h-4 text-gray-400" />
              </div>

              {/* IG Profile Stats Block */}
              <div className="px-4 py-3 bg-zinc-950/40 border-b border-white/5 flex justify-around text-center z-10">
                <div>
                  <p className="text-sm font-black text-white">492</p>
                  <p className="text-[9px] text-gray-500">posts</p>
                </div>
                <div>
                  <p className="text-sm font-black text-[#80e01a] tabular-nums font-mono">
                    {followerCount.toLocaleString()}
                  </p>
                  <p className="text-[9px] text-gray-500">followers</p>
                </div>
                <div>
                  <p className="text-sm font-black text-white">411</p>
                  <p className="text-[9px] text-gray-500">following</p>
                </div>
              </div>

              {/* IG Scrolling Feed Mockup */}
              <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-none z-10">
                <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-3 relative overflow-hidden">
                  
                  {/* Floating hearts container inside post mockup */}
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    {hearts.map((h) => (
                      <motion.div
                        key={h.id}
                        initial={{ opacity: 0, y: 300, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [300, 200, 100, 20], scale: [0.5, 1.2, 1, 0.6] }}
                        transition={{ duration: 2.2, ease: "easeOut", delay: h.delay }}
                        className="absolute bottom-4"
                        style={{ left: `${h.left}%` }}
                      >
                        <Heart className="w-5 h-5 text-red-500 fill-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Post Title */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-zinc-700 overflow-hidden">
                      <img src="https://res.cloudinary.com/dkt9cyu1u/image/upload/v1767785945/GrowthZee_Final_Logo_White-01_ftuoqk.png" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] text-white font-bold">growthzee</span>
                    <span className="text-[9px] text-[#80e01a] ml-auto font-mono">Sponsored</span>
                  </div>

                  {/* Creative Showcase Image Mock */}
                  <div className="aspect-square bg-zinc-950 rounded-lg overflow-hidden border border-white/5 relative flex items-center justify-center">
                    <img 
                      src="/Untitled-design-1 (4).png" 
                      alt="Product Mock" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[8px] font-mono text-[#80e01a] border border-[#80e01a]/30">
                      UGC AD CAMPAIGN
                    </div>
                    <div className="z-10 flex flex-col items-center text-center p-4">
                      <div className="w-10 h-10 rounded-full bg-[#80e01a]/20 border border-[#80e01a] flex items-center justify-center text-[#80e01a] mb-2 shadow-[0_0_15px_rgba(128,224,26,0.3)] animate-pulse">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <span className="text-white text-xs font-black uppercase tracking-wider">Viral Optimization</span>
                      <span className="text-[9px] text-[#80e01a] font-bold">+380% ROAS</span>
                    </div>
                  </div>

                  {/* Interactivity indicators */}
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-[10px] font-bold text-gray-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-red-500">
                        <Heart className="w-3.5 h-3.5 fill-current" /> 18.2K
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" /> 840
                      </span>
                    </div>
                    <span className="text-[#80e01a] flex items-center gap-1">
                      94% Retention <Check className="w-3 h-3" />
                    </span>
                  </div>

                </div>
              </div>

              {/* Phone Footer bar */}
              <div className="h-10 bg-zinc-950 border-t border-white/5 flex justify-center items-center z-20">
                <div className="w-32 h-1 bg-white/20 rounded-full"></div>
              </div>
            </motion.div>
            
            {/* Absolute side tags for visual complexity */}
            <div className="absolute top-20 right-[-30px] hidden xl:flex flex-col items-start gap-2 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-xl z-20 animate-bounce" style={{ animationDuration: "5s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Live stats</span>
              </div>
              <p className="text-lg font-black text-white">+5,290 hrs</p>
              <p className="text-[9px] text-gray-500">Videos watched this month</p>
            </div>
            
            <div className="absolute bottom-16 left-[-30px] hidden xl:flex flex-col items-start gap-2 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-xl z-20 animate-bounce" style={{ animationDuration: "6s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#80e01a] rounded-full"></div>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Global UGC</span>
              </div>
              <p className="text-lg font-black text-[#80e01a]">180+ Creators</p>
              <p className="text-[9px] text-gray-500">In private vetting pool</p>
            </div>
          </div>
        </div>

        {/* --- INFINITE CLIENT LOGO MARQUEE --- */}
        <div className="mb-20 overflow-hidden relative w-full border-t border-b border-white/5 py-12 bg-zinc-950/20">
          <style>{`
            @keyframes marquee-forward {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-forward {
              animation: marquee-forward 35s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 35s linear infinite;
              display: flex;
              width: max-content;
            }
          `}</style>
          
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#80e01a] font-extrabold mb-2">Our Partner Ecosystem</h2>
            <p className="text-xl font-bold text-white">Powering Brands Across the Globe</p>
          </div>

          <div className="flex flex-col gap-6 relative w-full">
            {/* Forward Row */}
            <div className="flex w-full overflow-hidden">
              <div className="animate-marquee-forward gap-12 items-center px-6">
                {[...clientLogos, ...clientLogos].map((client, idx) => (
                  <div key={`f-${idx}`} className="h-16 w-44 flex items-center justify-center bg-zinc-900/40 border border-white/5 rounded-xl px-4 hover:border-[#80e01a]/30 transition-colors group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-9 w-auto object-contain max-w-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reverse Row */}
            <div className="flex w-full overflow-hidden">
              <div className="animate-marquee-reverse gap-12 items-center px-6">
                {[...clientLogos, ...clientLogos].map((client, idx) => (
                  <div key={`r-${idx}`} className="h-16 w-44 flex items-center justify-center bg-zinc-900/40 border border-white/5 rounded-xl px-4 hover:border-[#80e01a]/30 transition-colors group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-9 w-auto object-contain max-w-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- CLIENT PORTFOLIO GRID (FILTERABLE) --- */}
        <div className="mb-36">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Client Portfolio</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Filter and explore our client list, metrics achieved, and active platforms managed.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedClientCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-wider ${
                  selectedClientCategory === cat
                    ? "bg-[#80e01a] text-black border-[#80e01a] shadow-[0_0_15px_rgba(128,224,26,0.25)]"
                    : "bg-zinc-900 text-gray-400 border-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredClients.map((client) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={client.name}
                  className="group relative bg-zinc-950 border border-white/5 rounded-2xl p-6 h-48 flex flex-col justify-between overflow-hidden hover:border-[#80e01a]/30 transition-all duration-300"
                >
                  {/* Glowing background blob on hover */}
                  <div className="absolute inset-0 bg-[#80e01a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                  {/* Standard view */}
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-10 w-auto max-w-full object-contain grayscale group-hover:scale-95 group-hover:opacity-20 transition-all duration-300"
                    />
                  </div>

                  <div className="flex justify-between items-center relative z-10 pt-4 border-t border-white/5">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-[#80e01a] transition-colors">{client.name}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{client.category}</span>
                  </div>

                  {/* Detailed Hover Card Overlay */}
                  <div className="absolute inset-0 bg-zinc-950 border-2 border-[#80e01a]/20 p-5 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-black text-white uppercase tracking-wider">{client.name}</span>
                        <div className="flex gap-1.5">
                          {client.platforms.map((platform) => {
                            if (platform === "instagram") return <Instagram key={platform} className="w-3.5 h-3.5 text-gray-400 hover:text-white" />;
                            if (platform === "linkedin") return <Linkedin key={platform} className="w-3.5 h-3.5 text-gray-400 hover:text-white" />;
                            if (platform === "youtube") return <Youtube key={platform} className="w-3.5 h-3.5 text-gray-400 hover:text-white" />;
                            return <ExternalLink key={platform} className="w-3.5 h-3.5 text-gray-400 hover:text-white" />;
                          })}
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-normal">{client.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Growth Matrix</span>
                      <span className="text-xs font-black text-[#80e01a] flex items-center gap-1 font-mono">
                        <TrendingUp className="w-3.5 h-3.5" /> {client.growth}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* --- PREMIUM DUAL-PANE VIDEO REELS PLAYER --- */}
        <div id="video-portfolio" className="mb-36 scroll-mt-28">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded bg-[#80e01a]/10 border border-[#80e01a]/20 text-[#80e01a] text-xs font-bold uppercase tracking-wider">
                Video Reels Showcase
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Creative Reels & UGC</h2>
              <p className="text-gray-400 max-w-lg mt-2 text-sm">
                Interact with the mobile player frame to play, pause, or mute. Click other reels to swap videos and see campaign details.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="flex items-center gap-1.5 text-[#80e01a] font-bold hover:underline underline-offset-4 text-sm group"
            >
              View Full Gallery <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Frame: Main Phone Player & Metadata (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#111] border border-white/10 rounded-[2.5rem] p-6 lg:p-8">
              
              {/* Phone Player container (Span 5) */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black border-4 border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl group/player">
                  
                  {/* Dynamic Video Element */}
                  <video
                    ref={videoPlayerRef}
                    src={ugcExamples[activeVideoIdx].videoSource}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onClick={togglePlay}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* Gradient Shadow overlays */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-10"></div>
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"></div>

                  {/* Muted/Unmuted Alert */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 bg-[#80e01a] rounded-full animate-ping"></span>
                    <span className="text-[9px] font-bold font-mono tracking-widest text-[#80e01a] uppercase">Active</span>
                  </div>

                  {/* Custom Controls Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2 z-20">
                    
                    {/* Custom Progress bar */}
                    <div 
                      onClick={handleTimelineClick}
                      className="h-1 bg-white/20 rounded-full w-full cursor-pointer relative overflow-hidden group/timeline"
                    >
                      <div 
                        className="h-full bg-[#80e01a] absolute left-0 top-0 transition-all duration-75"
                        style={{ width: `${videoProgress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Play / Pause Toggle */}
                      <button 
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white"
                      >
                        {isVideoPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                      </button>

                      {/* Title & Creator */}
                      <div className="flex flex-col text-center max-w-[140px]">
                        <span className="text-[10px] text-white font-black truncate">@{ugcExamples[activeVideoIdx].creator.name}</span>
                        <span className="text-[8px] text-gray-400 truncate">{ugcExamples[activeVideoIdx].title}</span>
                      </div>

                      {/* Mute/Volume Toggle */}
                      <button 
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white"
                      >
                        {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Center Play Overlay on Pause */}
                  {!isVideoPlaying && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-15"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#80e01a]/95 text-black flex items-center justify-center shadow-[0_0_20px_rgba(128,224,26,0.4)] transform scale-100 hover:scale-105 transition-transform duration-300">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Video Strategic Matrix Pane (Span 7) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border-2 border-[#80e01a] p-0.5 overflow-hidden bg-black flex-shrink-0">
                      <img
                        src={ugcExamples[activeVideoIdx].creator.avatar}
                        alt={ugcExamples[activeVideoIdx].creator.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-white text-sm font-bold tracking-tight">@{ugcExamples[activeVideoIdx].creator.name}</span>
                        <span className="bg-[#80e01a]/10 border border-[#80e01a]/30 text-[#80e01a] px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">Creator Network</span>
                      </div>
                      <span className="text-xs text-gray-500">{ugcExamples[activeVideoIdx].category}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-snug">
                    {ugcExamples[activeVideoIdx].title}
                  </h3>

                  {/* Strategy Roadmap details */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4">
                      <span className="text-[9px] font-black text-[#80e01a] uppercase tracking-wider block mb-1">Retention Hook</span>
                      <p className="text-xs text-gray-300 leading-normal">{ugcExamples[activeVideoIdx].strategy.hook}</p>
                    </div>
                    <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4">
                      <span className="text-[9px] font-black text-[#80e01a] uppercase tracking-wider block mb-1">Visual Editing & Pacing</span>
                      <p className="text-xs text-gray-300 leading-normal">{ugcExamples[activeVideoIdx].strategy.retention}</p>
                    </div>
                    <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-4">
                      <span className="text-[9px] font-black text-[#80e01a] uppercase tracking-wider block mb-1">Conversion CTA Framework</span>
                      <p className="text-xs text-gray-300 leading-normal">{ugcExamples[activeVideoIdx].strategy.cta}</p>
                    </div>
                  </div>
                </div>

                {/* Video metrics matrix */}
                <div className="grid grid-cols-4 gap-2 text-center bg-zinc-900/40 border border-white/5 rounded-2xl p-4 mt-auto">
                  <div>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Views</span>
                    <span className="text-sm font-black text-white flex items-center justify-center gap-1 font-mono">
                      <Eye className="w-3.5 h-3.5 text-gray-400" /> {ugcExamples[activeVideoIdx].stats.views}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Likes</span>
                    <span className="text-sm font-black text-red-500 flex items-center justify-center gap-1 font-mono">
                      <Heart className="w-3.5 h-3.5 fill-current" /> {ugcExamples[activeVideoIdx].stats.likes}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Comments</span>
                    <span className="text-sm font-black text-white flex items-center justify-center gap-1 font-mono">
                      <MessageCircle className="w-3.5 h-3.5 text-gray-400" /> {ugcExamples[activeVideoIdx].stats.comments}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Shares</span>
                    <span className="text-sm font-black text-[#80e01a] flex items-center justify-center gap-1 font-mono">
                      <Share2 className="w-3.5 h-3.5 text-[#80e01a]" /> {ugcExamples[activeVideoIdx].stats.shares}
                    </span>
                  </div>
                </div>

                {/* Clickout Link */}
                <a 
                  href={ugcExamples[activeVideoIdx].href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 hover:border-[#80e01a]/30 bg-zinc-950 text-white font-bold hover:text-[#80e01a] transition-all text-xs uppercase tracking-wider"
                >
                  <Instagram className="w-4 h-4 text-[#80e01a]" /> View Original Reel on Instagram <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

            {/* Right List: Playlist Selection (Span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto max-h-[640px] pr-2 scrollbar-thin">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block px-2">Reels Playlist ({ugcExamples.length})</span>
              
              {ugcExamples.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveVideoIdx(idx)}
                  className={`flex gap-4 p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    activeVideoIdx === idx
                      ? "bg-[#111] border-[#80e01a]/40 shadow-[0_5px_15px_rgba(128,224,26,0.03)]"
                      : "bg-zinc-950/60 border-white/5 hover:border-white/20 hover:bg-[#111]/30"
                  }`}
                >
                  {/* Aspect reel layout */}
                  <div className="w-16 h-24 bg-zinc-900 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 relative">
                    <video
                      src={item.videoSource}
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="w-4 h-4 text-white fill-white opacity-85" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] text-[#80e01a] font-bold font-mono">@{item.creator.name}</span>
                        {activeVideoIdx === idx && (
                          <span className="w-2 h-2 rounded-full bg-[#80e01a]"></span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#80e01a] transition-colors truncate">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex gap-4 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {item.stats.views}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <Heart className="w-3 h-3 fill-current" /> {item.stats.likes}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- LIVE PERFORMANCE ANALYTICS SIMULATOR --- */}
        <div className="mb-36 max-w-5xl mx-auto">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            
            {/* Background dynamic light beam grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Text Left */}
              <div className="lg:w-1/2 flex flex-col items-start">
                <span className="text-[10px] font-black tracking-widest text-[#80e01a] uppercase bg-[#80e01a]/10 border border-[#80e01a]/20 px-3 py-1 rounded mb-4">
                  Growth Simulator
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Organic Traffic & Reach Simulator
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Compare the trajectory of social channels. With active content curation, video hooks, and daily community loops, we scale reach exponentially instead of flattening out.
                </p>

                {/* Toggles */}
                <div className="flex bg-black p-1 border border-white/10 rounded-full w-full max-w-sm mb-6">
                  <button
                    onClick={() => setSimulatorMode("without")}
                    className={`flex-1 py-3 text-xs font-bold uppercase rounded-full tracking-wider transition-all duration-300 ${
                      simulatorMode === "without"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    Without GrowthZee
                  </button>
                  <button
                    onClick={() => setSimulatorMode("with")}
                    className={`flex-1 py-3 text-xs font-bold uppercase rounded-full tracking-wider transition-all duration-300 ${
                      simulatorMode === "with"
                        ? "bg-[#80e01a] text-black border border-[#80e01a]"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    With GrowthZee
                  </button>
                </div>

                {/* Performance delta box */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <TrendingUp className={`w-6 h-6 ${simulatorMode === 'with' ? 'text-[#80e01a]' : 'text-red-500'}`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Estimated Performance Delta</p>
                    <p className={`text-xl font-black ${simulatorMode === 'with' ? 'text-[#80e01a]' : 'text-red-500'}`}>
                      {simulatorMode === 'with' ? "+4.2X Organic Reach Scale" : "-85% Traction Loss"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Graphical Simulator Right (Chart box) */}
              <div className="lg:w-1/2 w-full bg-black/60 border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between aspect-video shadow-2xl">
                
                {/* Simulated Chart Stats */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Average Monthly Reach</span>
                    <span className="text-2xl font-black text-white font-mono tabular-nums">
                      {simulatorMode === "with" ? "4.2M Accounts" : "180K Accounts"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-zinc-800 animate-ping"></span>
                    <span className="text-[10px] text-gray-500 font-mono">SIMULATION_LOG_ON</span>
                  </div>
                </div>

                {/* SVG Chart Drawing */}
                <div className="flex-1 w-full relative min-h-[140px]">
                  
                  {/* Grid Lines background */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="border-b border-white/5 w-full"></div>
                    <div className="border-b border-white/5 w-full"></div>
                    <div className="border-b border-white/5 w-full"></div>
                    <div className="border-b border-white/5 w-full"></div>
                  </div>

                  <svg className="w-full h-full absolute inset-0 z-10 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-growth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#80e01a" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#80e01a" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="gradient-flat" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* With Growthzee Curve */}
                    {simulatorMode === "with" && (
                      <>
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          d="M 0 35 Q 20 33 40 25 T 80 12 T 100 2"
                          fill="none"
                          stroke="#80e01a"
                          strokeWidth="2.5"
                        />
                        <motion.path
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          d="M 0 35 Q 20 33 40 25 T 80 12 T 100 2 L 100 40 L 0 40 Z"
                          fill="url(#gradient-growth)"
                        />
                        {/* Pulse dot at the end */}
                        <circle cx="100" cy="2" r="2.5" fill="#80e01a" className="animate-ping" style={{ transformOrigin: '100px 2px' }} />
                        <circle cx="100" cy="2" r="1.5" fill="#80e01a" />
                      </>
                    )}

                    {/* Without Growthzee Curve */}
                    {simulatorMode === "without" && (
                      <>
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                          d="M 0 35 L 20 34 L 40 36 L 60 33 L 80 35 L 100 34"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2.5"
                        />
                        <motion.path
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          d="M 0 35 L 20 34 L 40 36 L 60 33 L 80 35 L 100 34 L 100 40 L 0 40 Z"
                          fill="url(#gradient-flat)"
                        />
                        <circle cx="100" cy="34" r="1.5" fill="#ef4444" />
                      </>
                    )}
                  </svg>
                </div>

                {/* Chart Timeline Labels */}
                <div className="flex justify-between items-center text-[9px] text-gray-500 font-mono mt-4 pt-3 border-t border-white/5">
                  <span>Month 1</span>
                  <span>Month 2</span>
                  <span>Month 3</span>
                  <span>Month 4</span>
                  <span>Month 5</span>
                  <span>Month 6</span>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* --- ORGANIC METRICS OVERVIEW --- */}
        <div className="mb-36 max-w-5xl mx-auto">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-black text-white mb-10 text-center uppercase tracking-wider">
              Organic Baseline Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {organicMetrics.map((m, i) => (
                <MetricBlock key={i} {...m} />
              ))}
            </div>
          </div>
        </div>

        {/* --- ORGANIC SERVICES & BLUEPRINTS --- */}
        <div className="mb-36 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Our SMM Framework</h2>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Every package is designed to act as a structured engine with clear deliverables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Users className="w-7 h-7" />}
              title="Community Management & Loyalty"
              description="We represent your brand. We daily review comments, react to discussions, answer inbound queries, and build loops to convert scrolling traffic into recurring brand advocates."
              benefits={[
                "Daily Comment/DM Moderation",
                "Brand Voice & Sentiment Alignment",
                "Outbound Niche Interaction Loops",
                "FAQ Automation Setup",
              ]}
            />
            <ServiceCard
              icon={<Repeat className="w-7 h-7" />}
              title="Organic Content Roadmapping"
              description="Consistency represents scale. We blueprint detailed visual schedules, write high-engagement hooks/copywriting scripts, and manage daily publishing schedules."
              benefits={[
                "Multi-channel Content Calendar",
                "High-conversion Caption Copywriting",
                "Visual Feed Grid Curation",
                "SEO Keywords & Tag Architectures",
              ]}
            />
          </div>
        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="mb-36">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center tracking-tight">
              Why Choose GrowthZee?
            </h2>
            <div className="max-w-4xl mx-auto border border-white/5 rounded-2xl overflow-hidden bg-black/35 p-4">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-white/10 text-center font-bold text-xs uppercase tracking-widest text-gray-500 px-4">
                <div className="text-left">Focus Deliverable</div>
                <div>GrowthZee Platform</div>
                <div>Traditional Agencies</div>
              </div>

              <ComparisonRow
                label="Contract Cost structure"
                us="Flat Retainer"
                them="$5k - $8k"
                check={true}
              />
              <ComparisonRow
                label="Content Delivery"
                us="Unlimited Scale"
                them="Limited Assets"
                check={true}
              />
              <ComparisonRow
                label="Turnaround Cycles"
                us="24-48 Hour Sprint"
                them="7-14 Days"
                check={true}
              />
              <ComparisonRow
                label="Team Architecture"
                us="Full Studio Sprint Squad"
                them="1 Freelancer"
                check={true}
              />
              <ComparisonRow
                label="Creator Sourcing Rights"
                us="Included & Vetted"
                them="Extra Fees"
                check={true}
              />
            </div>
          </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-3xl mx-auto mb-36">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight">
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

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="relative rounded-[3rem] overflow-hidden bg-[#111] border border-white/10 p-12 text-center mb-24">
          <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-[#80e01a]/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#80e01a] block mb-4">Launch Strategy</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              Ready to scale?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Stop throwing budgets into flat static ads. Let's install a dedicated content engine that converts organic attention into business revenue.
            </p>
            
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <div className="absolute inset-0 bg-[#80e01a] rounded-full blur-[15px] opacity-40 group-hover:opacity-75 transition-opacity"></div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-12 py-5 bg-[#80e01a] text-black text-base font-bold uppercase rounded-full shadow-[0_0_35px_rgba(128,224,26,0.3)] transition-all tracking-wider"
              >
                Book A Strategy Call
              </motion.button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

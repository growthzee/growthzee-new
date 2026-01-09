"use client";

import { useState } from "react";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Package,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Star,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Quote,
} from "lucide-react";

// --- Data ---
const services = [
  {
    id: "01",
    title: "Seller Central Ops",
    desc: "Fully managed Amazon and Flipkart accounts - no stress for you. We take care of product posts, stock status, progress tracking, also rule updates, so you stay free to grow your business while we sort out the messy details behind the scenes.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "Listing SEO",
    desc: "We create web-friendly titles and descriptions packed with popular search terms. So your items show up faster in results - thanks to smart online strategies that boost visibility right when shoppers are looking.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "PPC Dominance",
    desc: "Aggressive PPC moves made for Amazon plus Flipkart. Our focus? Drop ACOS while boosting sales using Sponsored Products, Brands, or Display Ads instead. Real results only - no fluff. Better returns every time",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "Brand Stores",
    desc: "We craft top-notch product pages plus brand stores that boost interaction, also sales. Through our online marketing help, your business gets ahead - different from everyone else selling similar stuff.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "05",
    title: "Inventory Logic",
    desc: "Using data-driven forecasting, we prevent stockouts and manage FBA shipments smoothly. Our digital marketing company aligns your supply chain with real customer demand.",
    icon: <Package className="w-6 h-6" />,
  },
];

const marketplaces = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Meesho", color: "#f43397" },
  { name: "Myntra", color: "#ff3f6c" },
  { name: "Ajio", color: "#2c4152" },
  { name: "Nykaa", color: "#fc2779" },
];

const timeline = [
  {
    step: "01",
    title: "Audit",
    text: "We take a close look at product listings, store performance, while checking where rivals fall short. Since we’re top-rated in online promotion, our reviews uncover unseen chances that lift revenue quickly.",
  },
  {
    step: "02",
    title: "Optimize",
    text: "From SEO to product images and A+ content, our team revamps everything for higher conversions. This is where our digital marketing agency delivers real impact.",
  },
  {
    step: "03",
    title: "Launch",
    text: "We run targeted ad campaigns that boost sales right away - so you see results fast. Our online marketing makes sure each rupee works hard for your business instead of vanishing into thin air.",
  },
  {
    step: "04",
    title: "Scale",
    text: "Using advanced analytics, we expand into new marketplaces and scale ad spend profitably — the reason we’re known for the best digital marketing in India.",
  },
];

const stats = [
  { label: "Avg. Revenue Growth", value: "300%" },
  { label: "Reduction in ACOS", value: "25%" },
  { label: "Listings Optimized", value: "10k+" },
  { label: "Client Retention", value: "96%" },
];

export default function EcommerceManagement() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#80e01a] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- Distinct Hero Section --- */}
      <header className="relative pt-40 pb-20 lg:pt-60 lg:pb-40 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#80e01a] rounded-full blur-[180px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[1px] w-12 bg-[#80e01a]"></span>
              <span className="text-[#80e01a] text-xs font-bold tracking-[0.3em] uppercase">
                Ecommerce Experts
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              SELL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] to-white/50">
                MORE.
              </span>{" "}
              <br />
              STRESS{" "}
              <span className="italic font-serif font-thin text-white/60">
                LESS.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10"
            >
              As the best digital marketing company ., we handle all your
              Amazon, Flipkart, and Meesho tasks - product pages, promotions,
              stock, daily workflows - freeing you up to create a brand people
              enjoy. Full control of your profiles along with results-focused ad
              campaigns helps boost sales without stress
            </motion.p>

            {/* UPDATED BUTTON FOR PDF DOWNLOAD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/Growthzee_Amazon_Performance_growth_partner.pdf" // Path relative to public folder
                download="Growthzee_Amazon_Performance_growth_partner.pdf" // Optional: Renames the file for the user
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-[#80e01a] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Abstract Visuals */}
          <div className="relative hidden lg:block">
            <motion.div
              style={{ y }}
              className="absolute right-0 top-0 w-64 h-80 bg-[#111] border border-white/10 rounded-2xl p-6 transform rotate-6 z-10 shadow-2xl"
            >
              <div className="w-12 h-12 bg-[#80e01a] rounded-full mb-4 flex items-center justify-center text-black font-bold">
                <TrendingUp />
              </div>
              <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-32 bg-white/10 rounded mb-8"></div>
              <div className="space-y-2">
                <div className="h-12 w-full bg-white/5 rounded border border-white/5"></div>
                <div className="h-12 w-full bg-white/5 rounded border border-white/5"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute right-40 top-20 w-64 h-80 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 transform -rotate-6 z-0 opacity-50 blur-[1px]"
            ></motion.div>
          </div>
        </div>
      </header>

      {/* --- Infinite Marquee --- */}
      <section className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {[...marketplaces, ...marketplaces, ...marketplaces].map((m, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-white/20 uppercase tracking-widest flex items-center gap-4"
            >
              {m.name}{" "}
              <span className="w-2 h-2 bg-[#80e01a] rounded-full"></span>
            </span>
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
      </section>

      {/* --- Services Grid --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl lg:text-6xl font-black uppercase mb-6">
            Complete <span className="text-[#80e01a]">Dominance.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We don't just "manage" accounts. We aggressively optimize every
            single touchpoint to squeeze maximum revenue from the marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="lg:col-span-2 bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/10 hover:border-[#80e01a]/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <ShoppingCart size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-[#80e01a]">
                {services[0].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {services[0].title}
              </h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                {services[0].desc}
              </p>
            </div>
          </div>

          {/* Tall Card */}
          <div className="lg:row-span-2 bg-[#80e01a] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between text-black group">
            <div>
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-6 bg-black text-white">
                {services[2].icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">{services[2].title}</h3>
              <p className="text-black/70 text-lg leading-relaxed">
                {services[2].desc}
              </p>
            </div>
            <div className="mt-12">
              <div className="w-full h-px bg-black/10 mb-6"></div>
              <span className="font-bold uppercase tracking-wider text-xs">
                Highest ROI Service
              </span>
            </div>
          </div>

          {/* Standard Cards */}
          {services.slice(1, 2).map((s) => (
            <div
              key={s.id}
              className="bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-[#80e01a]">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
          {services.slice(3).map((s) => (
            <div
              key={s.id}
              className="bg-[#111] rounded-[2rem] p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 text-[#80e01a]">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Comparison Section --- */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Don't Build a <span className="text-[#80e01a]">Team.</span> <br />
            Buy a <span className="text-white">System.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-[#111]">
          {/* Column 1: Freelancer */}
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col items-center text-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Freelancer</h3>
            <p className="text-sm text-gray-400 mb-8 h-10">
              Cheaper, but limited capabilities and reliability.
            </p>
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Strategy</span>
                <XCircle className="text-red-500 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Design + Ads</span>
                <XCircle className="text-red-500 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Cost</span>
                <span className="text-white font-bold">$</span>
              </div>
            </div>
          </div>

          {/* Column 2: In-House Team */}
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col items-center text-center opacity-50 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white mb-2">In-House Team</h3>
            <p className="text-sm text-gray-400 mb-8 h-10">
              Expensive overheads, training costs, and management headaches.
            </p>
            <div className="space-y-6 w-full">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Strategy</span>
                <CheckCircle2 className="text-white w-5 h-5" />
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Design + Ads</span>
                <CheckCircle2 className="text-white w-5 h-5" />
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-sm">Cost</span>
                <span className="text-white font-bold">$$$$$</span>
              </div>
            </div>
          </div>

          {/* Column 3: Us (Highlighted) */}
          <div className="p-10 bg-[#80e01a] flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
            <h3 className="text-xl font-black text-black mb-2 uppercase tracking-widest">
              Our Agency
            </h3>
            <p className="text-sm text-black/70 font-medium mb-8 h-10">
              Full stack expert team for a fraction of the cost.
            </p>
            <div className="space-y-6 w-full text-black font-bold">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="text-sm">Strategy</span>
                <CheckCircle2 className="text-black w-6 h-6" />
              </div>
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="text-sm">Design + Ads</span>
                <CheckCircle2 className="text-black w-6 h-6" />
              </div>
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="text-sm">Cost</span>
                <span className="text-black font-bold">$$</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Timeline Process --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Blueprint to <span className="text-[#80e01a]">Bestseller</span>
          </h2>
          <p className="text-gray-400">
            Our tested method runs on best digital marketing companies help that
            all over India rely on - so you know it works.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="bg-[#050505] p-6 border border-white/10 rounded-2xl hover:border-[#80e01a] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-[#1a1a1a] text-white font-bold flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#80e01a] group-hover:text-black transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#80e01a] rounded-full blur-[200px] opacity-5 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2">
                Results <span className="text-[#80e01a]">Talk.</span>
              </h2>
              <p className="text-gray-400">Don't take our word for it.</p>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  fill="#80e01a"
                  className="text-[#80e01a] w-5 h-5"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                brand: "EcoHome Essentials",
                quote:
                  "We were stuck at ₹5L/month for a year. These guys came in, fixed our catalog, and we hit ₹25L in just 90 days.",
                stat: "+400% Growth",
              },
              {
                name: "Rahul Verma",
                brand: "Urban Kicks",
                quote:
                  "The ACOS reduction was immediate. They cut our wasted ad spend and reinvested it into ranking. Profitable from month one.",
                stat: "18% ACOS",
              },
              {
                name: "Priya D.",
                brand: "Luxe Beauty",
                quote:
                  "Listing design matters. The A+ content they designed completely changed our conversion rate. Professional, fast, and aggressive.",
                stat: "4.5% Conv. Rate",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-[#80e01a]/50 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <Quote className="text-[#80e01a] mb-6 w-8 h-8 opacity-50" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <div className="w-full h-px bg-white/10 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {t.brand}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold rounded border border-[#80e01a]/20">
                      {t.stat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Do you guarantee sales?"
            answer="We guarantee the planning, the work, and the optimization. Although no one can take control of the market, we let our results do the talking."
          />
          <FAQItem
            question="What is your pricing structure?"
            answer="Our hybrid model is composed of a flat retainer + a small percentage of the revenue."
          />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#80e01a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tight leading-[0.9]">
              STOP LOSING SALES <br /> TO COMPETITORS.
            </h2>
            <p className="text-black/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Your customers are searching for you right now. Let's make sure
              they find you.
            </p>
            <button className="px-10 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl">
              Audit My Store
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Helper Component ---
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

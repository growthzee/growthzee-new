"use client";

import Navbar from "@/common/Navbar";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

// -----------------------------------------------------------------------

const partners = [
  { name: "Flipkart", src: "/images/flipkart.png" },
  { name: "Amazon", src: "/images/amazone.png" },
  { name: "Myntra", src: "/images/myntra.png" },
  { name: "Meta Ads", src: "/images/meta.png" },
  { name: "Google Ads", src: "/images/gads.png" },
  { name: "Shopify", src: "/images/shopify.png" },
];

// 1. DUPLICATE 4 TIMES
// We repeat the array 4 times to ensure the 'tape' is long enough
// to cover wide screens without showing a gap before the loop resets.
const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* --- Background Elements (Unchanged) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute right-[-10%] top-[-12%] w-[560px] h-[560px] blur-[140px] opacity-40 bg-[radial-gradient(closest-side,rgba(128,224,26,0.35),transparent_70%)]"></div>
        <div className="absolute left-[-12%] bottom-[-14%] w-[620px] h-[620px] blur-[150px] opacity-40 bg-[radial-gradient(closest-side,rgba(128,224,26,0.32),transparent_70%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#80e01a]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-[#80e01a]/12 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 rotate-45 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="rgba(128,224,26,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <rect
              width="100"
              height="100"
              fill="none"
              stroke="rgba(128,224,26,0.4)"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 26px), repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 26px)",
            WebkitMaskImage:
              "radial-gradient(70% 70% at 50% 50%, white 60%, transparent 100%)",
            maskImage:
              "radial-gradient(70% 70% at 50% 50%, white 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(128,224,26,0.1) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 100%, rgba(128,224,26,0.1) 150%, transparent 200%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <Navbar />

      <div className="w-full px-6 flex-grow flex items-center justify-center relative z-10 pt-20 md:pt-32">
        <div className="w-full max-w-none text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
          >
            Scale Your D2C Brand to
            <span className="text-[#80e01a]"> 10X ROAS</span>{" "}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            GrowthZee helps D2C brands turn
            <span className="text-[#80e01a]"> ad spend</span> into{" "}
            <span className="text-[#80e01a]">predictable sales</span> by running
            and optimizing all your performance channels with a{" "}
            <span className="text-[#80e01a]">dedicated performance</span>{" "}
            marketing team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-black font-medium bg-[#80e01a] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-block px-8 py-4 text-gray-300 font-medium border border-gray-600 rounded-full hover:border-[#80e01a] hover:text-[#80e01a] transition-colors"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center mb-12 space-y-6"
          >
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <Users className="w-4 h-4 text-[#80e01a] mr-2" />
              </div>
              <span className="text-gray-300 text-sm font-medium">
                Trusted by <span className="text-white">20+ D2C founders</span>{" "}
                worldwide
              </span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[#80e01a] font-bold text-lg">
                  ₹2.5Cr+
                </span>
                <span>GMV Managed</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#80e01a] font-bold text-lg">3.2x</span>
                <span>Avg ROAS</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-[#80e01a] font-bold text-lg">20+</span>
                <span>Brands</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden mask-gradient pb-6">
        <motion.div
          className="flex gap-14 sm:gap-20 items-center whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            // 2. INCREASED DURATION
            // Since the list is longer (4x), we increase duration to keep speed steady
            duration: 60,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          style={{ width: "fit-content" }}
        >
          {/* 3. USING REPEATED ARRAY (4x) */}
          {repeatedPartners.map((partner, index) => (
            <div
              key={index}
              // 4. INCREASED HEIGHT
              // h-20 (80px) on mobile, h-28 (112px) on desktop
              className="relative h-20 sm:h-28 w-auto flex-shrink-0 group flex items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-full object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

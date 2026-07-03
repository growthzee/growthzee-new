"use client";

import { useState } from "react";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const executionSteps = [
  {
    step: "01",
    title: "Deep-Dive Brand Audit",
    tagline: "Validation Path",
    description:
      "We thoroughly evaluate your unit economics, historical ad attribution metrics, conversion health logs, and inventory pipelines to calculate baseline velocity projections.",
    icon: "analytics",
  },
  {
    step: "02",
    title: "Tech Stack & Pixel Sync",
    tagline: "Data Matching Core",
    description:
      "Our core developers integrate server-side tracking pipelines, Meta Conversions API (CAPI), and clean Google Analytics 4 mapping schemas to securely lock down attribution values.",
    icon: "sync_alt",
  },
  {
    step: "03",
    title: "Omnichannel Scale Setup",
    tagline: "Ecosystem Run",
    description:
      "Our creative and media-buying sprint squads deploy full creative strategies, high-retention vertical UGC hooks, and target funnel structures across primary performance channels.",
    icon: "rocket_launch",
  },
  {
    step: "04",
    title: "Automated Profit Split",
    tagline: "Shared Alignment",
    description:
      "No fixed bills. At the close of each accounting month cycle, we process mutual calculations matching your net revenue sheets directly against our tier matrix.",
    icon: "payments",
  },
];

const partnerInclusions = [
  {
    title: "Performance Marketing",
    icon: "trending_up",
    color: "#9bfe3d",
    items: [
      "Meta Ads Strategy & Management",
      "Campaign Structure Design",
      "Daily Optimization",
      "Budget Scaling Strategy",
      "Performance Monitoring",
    ],
  },
  {
    title: "Shopify Growth",
    icon: "shopping_cart",
    color: "#00F0FF",
    items: [
      "Shopify Store Audit",
      "Store Optimization",
      "Conversion Rate Optimization (CRO)",
      "Funnel Design",
      "Checkout Optimization",
      "Customer Journey Planning",
    ],
  },
  {
    title: "Sales Funnel Design",
    icon: "filter_alt",
    color: "#A855F7",
    items: [
      "Customer Journey Mapping",
      "Landing Page Strategy",
      "Retargeting Funnel",
      "Upsell & Cross-Sell Strategy",
    ],
  },
  {
    title: "Creative Planning",
    icon: "palette",
    color: "#9bfe3d",
    items: [
      "Monthly Creative Strategy",
      "Ad Creative Planning",
      "Creative Design",
      "Ad Copywriting",
      "Performance-Based Creative Testing",
    ],
  },
  {
    title: "UGC Creator Support",
    icon: "movie",
    color: "#00F0FF",
    items: [
      "UGC Creator Research",
      "Creator Shortlisting",
      "Contact Details & Introduction",
      "Collaboration Coordination Support",
    ],
    footer:
      "Note: We introduce and connect creators. Commercial discussions, negotiations, product dispatch, and payments will be managed directly between the brand and the creator.",
  },
  {
    title: "Amazon Growth",
    icon: "package",
    color: "#A855F7",
    items: [
      "Store Audit",
      "Listing Optimization",
      "Product SEO",
      "Keyword Research",
      "Catalog Management",
      "Amazon Sponsored Ads",
      "Performance Optimization",
    ],
  },
  {
    title: "Flipkart Growth",
    icon: "storefront",
    color: "#9bfe3d",
    items: [
      "Store Optimization",
      "Product Listing Optimization",
      "Keyword Optimization",
      "Flipkart Ads Management",
      "Performance Monitoring",
    ],
  },
  {
    title: "Business Growth Planning",
    icon: "insights",
    color: "#00F0FF",
    items: [
      "Competitor Analysis",
      "Market Positioning",
      "Product Profit Analysis",
      "Pricing Strategy",
      "Quarterly Growth Roadmap",
      "Monthly Growth Review",
    ],
  },
];

const commissionTiers = [
  { range: "₹0 – ₹1,00,000", commission: "30%", tax: "GST Included" },
  { range: "₹1,00,000 – ₹2,00,000", commission: "20%", tax: "GST Included" },
  { range: "₹2,00,001 – ₹5,00,000", commission: "15%", tax: "Plus 18% GST" },
  { range: "₹5,00,001 – ₹10,00,000", commission: "10%", tax: "Plus 18% GST" },
  {
    range: "₹10,00,001 – ₹1,00,00,000",
    commission: "7.5%",
    tax: "Plus 18% GST",
  },
  { range: "Above ₹1 Crore", commission: "7.5%", tax: "Plus 18% GST" },
];

export default function PartnerProgramPage() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <div className="blueprint-grid min-h-screen bg-black text-[#e5e2e1] antialiased overflow-x-hidden selection:bg-primary selection:text-black">
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <main className="pt-24 md:pt-24 pb-24">
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-16 md:py-24 text-center relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#80e01a]/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#80e01a]/10 border border-[#80e01a]/20 text-[#9bfe3d] font-mono text-[10px] md:text-xs tracking-wider mb-6 relative z-10"
            >
              <span className="material-symbols-outlined text-[14px]">
                handshake
              </span>
              GROWTHZEE PERFORMANCE PARTNER PROGRAM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-6xl md:text-[76px] leading-tight max-w-5xl mx-auto mb-6 bg-gradient-to-r from-white via-[#bfcab0] to-white/40 bg-clip-text text-transparent relative z-10"
            >
              We Don&apos;t Charge Monthly Fees. <br />
              <span className="text-[#9bfe3d] italic font-normal font-jost">
                We Grow Together.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-lg md:text-xl text-[#bfcab0] max-w-3xl mx-auto mb-12 leading-relaxed relative z-10"
            >
              Our Performance Growth Model is crafted exclusively for ambitious
              D2C brands looking for a dedicated, long-term ecosystem scale
              partner. If you don&apos;t make revenue, we don&apos;t get paid.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <a
                href="#onboarding-framework"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#80e01a] text-[#1a3700] font-bold text-sm md:text-base hover:shadow-[0_0_30px_rgba(155,254,61,0.4)] transition-all uppercase tracking-wider text-center"
              >
                How It Works
              </a>
              <a
                href="#revenue-model"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm md:text-base transition-all uppercase tracking-wider text-center"
              >
                Commission Shares
              </a>
            </div>
          </section>

          {/* New "How It Works" Steps Section */}
          <section
            id="onboarding-framework"
            className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto relative border-t border-white/5"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#00F0FF] tracking-widest uppercase mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  route
                </span>
                Ecosystem Operational Flow
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Our Onboarding Strategy Blueprint
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm max-w-xl mx-auto">
                From code synchronization to baseline scaling run sprints, here
                is how we align variables with your brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
              {/* Optional background connect tracking bar line visible on wide resolutions */}
              <div className="hidden lg:block absolute top-[62px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#9bfe3d]/20 via-[#00F0FF]/20 to-transparent z-0" />

              {executionSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full relative z-10 hover:border-[#00F0FF]/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#9bfe3d]">
                        <span className="material-symbols-outlined text-[24px]">
                          {step.icon}
                        </span>
                      </div>
                      <span className="font-mono text-3xl font-extrabold bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent tracking-tighter">
                        {step.step}
                      </span>
                    </div>

                    <div className="font-mono text-[9px] text-[#00F0FF] uppercase tracking-wider mb-1">
                      {step.tagline}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white font-jost mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#bfcab0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Core Program Features Matrix Inclusions Section */}
          <section
            id="inclusions"
            className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto relative border-t border-white/5"
          >
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Complete Omnichannel Execution Suite
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm max-w-xl mx-auto">
                Every operational pillar required to build a multi-million
                market brand is fully loaded into our partner lifecycle
                framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {partnerInclusions.map((inclusion, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full relative group transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5"
                      style={{
                        backgroundColor: `${inclusion.color}15`,
                        color: inclusion.color,
                      }}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {inclusion.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-jost">
                      {inclusion.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 flex-grow mb-4">
                    {inclusion.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs md:text-sm text-[#e5e2e1] leading-relaxed"
                      >
                        <span
                          className="material-symbols-outlined text-[16px] shrink-0 mt-0.5"
                          style={{ color: inclusion.color }}
                        >
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {inclusion.footer && (
                    <p className="text-[10px] font-mono text-[#bfcab0] leading-normal pt-4 mt-auto border-t border-white/5 italic">
                      {inclusion.footer}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Dynamic Growth Share Commission Table Section */}
          <section
            id="revenue-model"
            className="py-20 px-4 md:px-8 max-w-[1100px] mx-auto border-t border-white/5"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#00F0FF] tracking-widest uppercase mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  account_balance_wallet
                </span>
                Transparent Shared Alignment
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Scale-Linked Revenue Share Structure
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm max-w-xl mx-auto">
                Our rates reduce proportionally as your brand volume scales up.
                We succeed entirely on optimization thresholds.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/2 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3700]/5 via-transparent to-[#00F0FF]/5 pointer-events-none" />

              <div className="grid grid-cols-2 md:grid-cols-3 bg-white/5 border-b border-white/10 px-6 py-4 font-mono text-[10px] md:text-xs text-[#00F0FF] uppercase tracking-widest font-bold">
                <div>Monthly Net Revenue Bucket</div>
                <div className="text-right md:text-center">Growthzee Share</div>
                <div className="hidden md:block text-right">Tax Provisions</div>
              </div>

              <div className="divide-y divide-white/5">
                {commissionTiers.map((tier, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredTier(index)}
                    onMouseLeave={() => setHoveredTier(null)}
                    className={`grid grid-cols-2 md:grid-cols-3 px-6 py-5 items-center transition-all duration-300 ${
                      hoveredTier === index
                        ? "bg-[#80e01a]/5 border-x border-[#80e01a]/20"
                        : ""
                    }`}
                  >
                    <div className="font-jost text-sm md:text-lg text-white font-medium tracking-wide">
                      {tier.range}
                    </div>

                    <div className="text-right md:text-center">
                      <span className="text-xl md:text-2xl font-extrabold text-[#9bfe3d] tracking-tight">
                        {tier.commission}
                      </span>
                      <span className="md:hidden block text-[10px] font-mono text-[#bfcab0] mt-0.5">
                        {tier.tax}
                      </span>
                    </div>

                    <div className="hidden md:block text-right font-mono text-xs text-[#bfcab0]">
                      {tier.tax}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/3 to-transparent border-l-2 border-[#9bfe3d] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <h4 className="text-sm font-bold text-white mb-1 font-jost">
                  Ready to unlock a proper full ecosystem performance
                  partnership?
                </h4>
                <p className="text-xs text-[#bfcab0]">
                  We limit active brand partner slots quarterly to protect
                  attention metrics. Apply to check baseline validation sync
                  paths.
                </p>
              </div>
              <button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#9bfe3d] text-[#1a3700] font-bold text-xs uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_20px_rgba(155,254,61,0.3)] transition-all cursor-pointer">
                Apply For Audit Partnership
              </button>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

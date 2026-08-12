"use client";

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

const launchPartnerInclusions = [
  {
    title: "Performance Marketing",
    icon: "trending_up",
    color: "#9bfe3d",
    items: [
      "Meta Ads Strategy & Planning",
      "Campaign Structure Design",
      "Audience Research",
      "Campaign Setup & Launch",
      "Daily Campaign Monitoring",
      "Budget Optimization",
      "ROAS Optimization",
      "Performance Analysis",
      "Monthly Growth Strategy",
    ],
  },
  {
    title: "Shopify Growth",
    icon: "shopping_cart",
    color: "#00F0FF",
    items: [
      "Shopify Store Audit",
      "Shopify Store Optimization",
      "Homepage Optimization",
      "Product Page Optimization",
      "Sales Funnel Design",
      "Checkout Optimization",
      "Conversion Rate Optimization (CRO)",
      "Customer Journey Optimization",
    ],
  },
  {
    title: "Sales Funnel Strategy",
    icon: "filter_alt",
    color: "#A855F7",
    items: [
      "Meta Ads Funnel Design",
      "Shopify Sales Funnel Design",
      "Customer Journey Mapping",
      "Retargeting Funnel",
      "Upsell Strategy",
      "Cross-Sell Strategy",
    ],
  },
  {
    title: "Creative Strategy & Ad Design",
    icon: "palette",
    color: "#9bfe3d",
    items: [
      "Monthly Creative Planning",
      "Performance Ad Creatives",
      "Ad Copywriting",
      "Offer Planning",
      "Creative Testing",
      "Hook Strategy",
      "Landing Page Creative Suggestions",
    ],
    footer:
      "Creative quantity is not fixed. The number of creatives will be planned based on your monthly advertising budget, campaign objectives, and business growth targets.",
  },
  {
    title: "Amazon Growth Management",
    icon: "package",
    color: "#00F0FF",
    items: [
      "Amazon Store & Seller Central Management",
      "Account Health, Buy Box & Inventory Monitoring",
      "Listing SEO Optimization (Title, Bullet Points, Description, Backend Terms)",
      "Amazon PPC Management (Sponsored Products, Bid & Search Term Optimization)",
      "Catalog Management & Suppressed Listing Resolution",
      "Keyword Research & Competitor Analysis",
      "Product Ranking Strategy & Sales Growth Planning",
    ],
  },
  {
    title: "Marketplace & UGC Support",
    icon: "movie",
    color: "#A855F7",
    items: [
      "Up to 10 Active SKUs Marketplace Support",
      "Amazon Listing Support & Performance Monitoring",
      "Research & Shortlist Relevant UGC Creators & Influencers",
      "Share Contact Details & Coordinate Initial Introductions",
    ],
    footer:
      "Note: GrowthZee's responsibility is limited to creator discovery, shortlisting, and introductions. Commercial discussions, pricing negotiations, contracts, product dispatch, and payments will be handled directly between the client and the creator.",
  },
  {
    title: "Business Growth Planning",
    icon: "insights",
    color: "#9bfe3d",
    items: [
      "Competitor Analysis",
      "Market Positioning",
      "Product Profitability Analysis",
      "Pricing Strategy",
      "Monthly Business Review",
      "Quarter Roadmap",
    ],
  },
  {
    title: "Reporting & Dedicated Support",
    icon: "dashboard",
    color: "#00F0FF",
    items: [
      "Monthly Performance Report & Review Meeting",
      "Quarterly Business Growth Report & Recommendations",
      "Dedicated Account Manager Assistance",
      "WhatsApp, Email & Priority Support",
    ],
  },
];

export default function PartnerProgramPage() {
  return (
    <>
      <Navbar />

      <div className="blueprint-grid min-h-screen bg-black text-[#e5e2e1] antialiased overflow-x-hidden selection:bg-primary selection:text-black">
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <main className="pt-24 pb-24">
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
                rocket_launch
              </span>
              GROWTHZEE LAUNCH PARTNER™ (PLAN A)
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-6xl md:text-[76px] leading-tight max-w-5xl mx-auto mb-6 bg-gradient-to-r from-white via-[#bfcab0] to-white/40 bg-clip-text text-transparent relative z-10"
            >
              End-to-End Performance Marketing <br />
              <span className="text-[#9bfe3d] italic font-normal font-jost">
                & eCommerce Growth Program
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-lg md:text-xl text-[#bfcab0] max-w-3xl mx-auto mb-12 leading-relaxed relative z-10"
            >
              Built for Startup D2C Brands & Emerging eCommerce Businesses
              looking to scale profitably without heavy traditional agency
              retainer loads.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <a
                href="#inclusions"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#80e01a] text-[#1a3700] font-bold text-sm md:text-base hover:shadow-[0_0_30px_rgba(155,254,61,0.4)] transition-all uppercase tracking-wider text-center"
              >
                Check Plan Scope
              </a>
              <a
                href="#revenue-model"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm md:text-base transition-all uppercase tracking-wider text-center"
              >
                Partnership Model
              </a>
            </div>
          </section>

          {/* Onboarding Framework Flow Section */}
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

          {/* Core Program Features Inclusions Section */}
          <section
            id="inclusions"
            className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto relative border-t border-white/5"
          >
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Complete Execution Matrix
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm max-w-xl mx-auto">
                Every operational growth engine metric required to build your
                brand is natively packed into Plan A.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {launchPartnerInclusions.map((inclusion, idx) => (
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
                    <p className="text-[11px] font-mono text-[#bfcab0] leading-normal pt-4 mt-auto border-t border-white/5 bg-white/2 p-3 rounded-lg border border-white/5">
                      {inclusion.footer}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Fair Usage Policy Grid & Non-Inclusions Grid Callout Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-[1280px] mx-auto text-left">
              <div className="p-6 md:p-8 rounded-2xl bg-white/2 border border-white/5">
                <h4 className="text-base font-bold text-[#00F0FF] mb-4 flex items-center gap-2 font-jost">
                  <span className="material-symbols-outlined">gavel</span> 📌
                  Fair Usage Policy
                </h4>
                <ul className="text-xs text-[#bfcab0] space-y-2.5 leading-relaxed">
                  <li>
                    • Includes **Up to 10 Active SKUs** portfolio maintenance
                    scope mapping.
                  </li>
                  <li>
                    • Connect tracking for **1 Shopify Store**, **1 Amazon
                    Seller**, and **1 Meta Ads Account**.
                  </li>
                  <li>
                    • Creative distribution mapped directly into media spend
                    volume run scopes.
                  </li>
                  <li className="text-[10px] italic pt-2 border-t border-white/5 text-white/40">
                    * Additional store instances or extended custom SKU limits
                    require a distinct commercial proposal expansion update
                    path.
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-white/2 border border-white/5">
                <h4 className="text-base font-bold text-[#A855F7] mb-4 flex items-center gap-2 font-jost">
                  <span className="material-symbols-outlined">block</span> ❌
                  Not Included (Available as Add-ons)
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-[#bfcab0]">
                  <div>• Product Photography & Shoots</div>
                  <div>• A+ Content & Brand Store Design</div>
                  <div>• CGI & 3D Product Videos</div>
                  <div>• Logo, Trademark & Branding</div>
                  <div>• Custom Shopify App Code</div>
                  <div>• Influencer / UGC Payout Costs</div>
                  <div className="col-span-2 text-[#9bfe3d] font-semibold mt-1">
                    • Active Live Client Advertising Budget
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Performance Growth Partnership Transition (Replaced Old Table) */}
          <section
            id="revenue-model"
            className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto border-t border-white/5"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#9bfe3d] tracking-widest uppercase mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  insights
                </span>
                Stage 2 Scaled Upgrade
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                Performance Growth Partnership Model
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm max-w-xl mx-auto">
                Once your brand achieves ₹3,00,000+ Monthly Revenue, your plan
                automatically upgrades to our zero-fixed-fee model.
              </p>
            </div>
            {/* Quick Context Deck */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-[#80e01a]">
                <div className="font-mono text-[10px] text-[#9bfe3d] uppercase tracking-wider mb-1">
                  Monthly Investment
                </div>
                {/* <h3 className="text-2xl font-bold text-white mb-2 font-jost">
                  ₹19,999 + 18% GST / Month
                </h3> */}
                <p className="text-xs text-[#bfcab0] leading-relaxed">
                  Valid until your brand achieves ₹3,00,000 in Monthly Revenue.
                  Once crossing consistently, your plan automatically
                  transitions to our Performance Growth Partnership Model.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-[#00F0FF]">
                <div className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider mb-1">
                  Best For
                </div>
                <ul className="text-xs text-[#e5e2e1] space-y-1 font-medium font-jost grid grid-cols-2 gap-1 mt-2">
                  <li>• Startup D2C Brands</li>
                  <li>• Shopify eCommerce</li>
                  <li>• Amazon Sellers</li>
                  <li>• Up to 10 Active SKUs</li>
                </ul>
              </div>
            </div>

            {/* Scale Transition Breakdown Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center items-stretch">
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border-l-2 border-[#9bfe3d]">
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-2">
                  Partnership Fee
                </span>
                {/* <div className="text-5xl font-extrabold text-[#9bfe3d] tracking-tight mb-2">
                  3.5%
                </div> */}
                <p className="text-xs text-[#bfcab0] leading-relaxed">
                  Calculated cleanly off total monthly net revenue metrics (GST
                  Included).
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-2">
                  Settlement Policy
                </span>
                <div className="text-xl font-bold text-white mb-2 font-jost">
                  Monthly Settlement
                </div>
                <p className="text-xs text-[#bfcab0] leading-relaxed">
                  Revenue settlement will be completely evaluated and finalized
                  on the last calendar day of every single month.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase tracking-wider block mb-2">
                  Invoice Reconciliation
                </span>
                <div className="text-xl font-bold text-white mb-2 font-jost">
                  Post-Reconciliation
                </div>
                <p className="text-xs text-[#bfcab0] leading-relaxed">
                  Monthly invoices will be generated and issued right after
                  revenue reconciliation is completed.
                </p>
              </div>
            </div>

            {/* Promise Ecosystem Banner Component */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#1A3700]/30 via-black/40 to-transparent border border-white/10 max-w-[1280px] mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#9bfe3d]/5 blur-2xl rounded-full" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="max-w-3xl">
                  <div className="text-[#9bfe3d] font-mono text-[10px] tracking-widest uppercase mb-1.5 font-bold">
                    ⭐ THE GROWTHZEE PROMISE
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-jost">
                    We Operate Natively as Your Embedded Growth Partner
                  </h4>
                  <p className="text-xs md:text-sm text-[#bfcab0] leading-relaxed">
                    At GrowthZee, we don&apos;t function like traditional
                    segmented agencies. We integrate Performance Marketing,
                    Shopify Architecture CRO, Amazon Operations Management, Ad
                    Scripting Visual Strategy, and Corporate Unit Economics
                    Analysis into a singular execution system explicitly focused
                    on sustainable scaling velocity metrics.
                  </p>
                </div>
                <button className="w-full md:w-auto px-8 py-4 rounded-full bg-[#9bfe3d] text-[#1a3700] font-bold text-sm uppercase tracking-wider whitespace-nowrap hover:shadow-[0_0_20px_rgba(155,254,61,0.4)] transition-all cursor-pointer">
                  Apply For Blueprint Audit
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

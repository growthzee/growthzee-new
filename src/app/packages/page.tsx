"use client";

import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/common/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Flipkart", src: "/images/flipkart.png" },
  { name: "Amazon", src: "/images/amazone.png" },
  { name: "Myntra", src: "/images/myntra.png" },
  { name: "Meta Ads", src: "/images/meta.png" },
  { name: "Google Ads", src: "/images/gads.png" },
  { name: "Shopify", src: "/images/shopify.png" },
];

const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

const performancePlans = [
  {
    id: 1,
    name: "Meta Ads Management",
    price: "9,999",
    suffix: "+ 5% of ad spend",
    budget: "30k to 1 lac",
    points: [
      "Strategy & Planning",
      "Business & Competitor Analysis",
      "Audience Research",
      "Campaign Strategy",
      "Sales Funnel Planning",
      "Media Buying Strategy",
      "Campaign Setup",
      "Meta Pixel Setup",
      "Conversion API Setup",
      "Campaign Structure Design",
      "Audience Creation",
      "Custom & Lookalike Audiences",
      "Optimization",
      "Daily Campaign Monitoring",
      "Budget Optimization",
      "Bid Strategy Optimization",
      "ROAS Optimization",
      "A/B Testing",
      "Creative Strategy",
      "Ad Copywriting",
      "Creative Direction",
      "UGC Strategy",
      "Offer Testing",
      "Performance Analysis",
      "Reporting",
      "Weekly Report",
      "Monthly Performance Report",
      "Strategy Call",
    ],
  },
  {
    id: 2,
    name: "Meta Ads + Shopify",
    price: "19,999",
    suffix: "+ 5% of ad spend",
    budget: "30k to 1 lac",
    points: [
      "Everything in Meta Ads +",
      "Shopify Store Management",
      "Store Audit",
      "Homepage Optimization",
      "Product Page Optimization",
      "Collection Page Optimization",
      "Navigation Improvement",
      "Mobile Optimization",
      "Speed Optimization",
      "Checkout Optimization",
      "Payment Gateway Review",
      "Shipping Configuration",
      "CRO (Conversion Rate Optimization)",
      "Sales Funnel Optimization",
      "Add to Cart Optimization",
      "Checkout Funnel",
      "Trust Badge Placement",
      "Review Integration",
      "Upsell & Cross Sell Strategy",
    ],
  },
  {
    id: 3,
    name: "Shopify Store Management",
    price: "24,999",
    suffix: "(one time)",
    budget: "",
    points: [
      "Store Setup & Management",
      "Store Audit",
      "Theme Optimization",
      "Product Upload",
      "Collection Management",
      "Navigation Setup",
      "Homepage Design Improvements",
      "Mobile Optimization",
      "Conversion Optimization",
      "Product Page CRO",
      "Checkout Optimization",
      "Trust Building Elements",
      "Review Management",
      "Email Capture Setup",
      "Analytics",
      "GA4 Integration",
      "Pixel Integration",
      "Conversion Tracking",
    ],
  },
  {
    id: 4,
    name: "Amazon Store Management",
    price: "14,999",
    suffix: "/mo",
    budget: "",
    points: [
      "Marketplace Audit",
      "Account Health Check",
      "Brand Analysis",
      "Competitor Analysis",
      "Listing Optimization",
      "SEO Title",
      "Bullet Points",
      "Description",
      "Backend Keywords",
      "A+ Content Suggestions",
      "Catalogue Management",
      "Listing Creation",
      "Listing Updates",
      "Variation Management",
      "Inventory Monitoring",
      "Amazon Ads",
      "Sponsored Products",
      "Sponsored Brands",
      "Sponsored Display",
      "Bid Optimization",
      "Search Term Optimization",
      "Growth Strategy",
      "Keyword Ranking Plan",
      "Pricing Strategy",
      "Review Growth Strategy",
    ],
  },
  {
    id: 5,
    name: "Flipkart Store Management",
    price: "9,999",
    suffix: "/mo",
    budget: "",
    points: [
      "Store Audit",
      "Seller Health Check",
      "Listing Audit",
      "Competition Analysis",
      "Listing Optimization",
      "Product SEO",
      "Images Optimization",
      "Description",
      "Keyword Optimization",
      "Ads Management",
      "Sponsored Ads",
      "Campaign Optimization",
      "Keyword Research",
      "Performance Monitoring",
      "Growth Strategy",
      "Pricing Strategy",
      "Inventory Monitoring",
      "Rating Improvement Plan",
    ],
  },
  {
    id: 6,
    name: "Meta Ads + Amazon",
    price: "19,999",
    suffix: "/mo",
    budget: "",
    points: [
      "Everything in Meta Ads +",
      "Everything in Amazon Store Management +",
      "Integration Strategy",
      "Meta to Amazon Funnel",
      "Creative Alignment",
      "Product Scaling Strategy",
      "Bestseller Growth Strategy",
    ],
  },
  {
    id: 7,
    name: "Meta Ads + Flipkart",
    price: "14,999",
    suffix: "/mo",
    budget: "",
    points: [
      "Everything in Meta Ads +",
      "Everything in Flipkart Store Management +",
      "Marketplace Funnel",
      "Traffic Strategy",
      "Conversion Strategy",
      "Scaling Plan",
    ],
  },
  {
    id: 8,
    name: "Meta Ads + Amazon + Shopify",
    price: "19,999",
    suffix: "/mo",
    budget: "",
    points: [
      "✅ Meta Ads",
      "✅ Shopify Management",
      "✅ Amazon Management",
      "Unified Growth System",
      "Multi-Channel Funnel",
      "Customer Journey Mapping",
      "Retargeting Strategy",
      "Cross-Platform Analytics",
      "Revenue Growth Planning",
    ],
  },
  {
    id: 9,
    name: "Meta Ads + Flipkart + Shopify",
    price: "17,999",
    suffix: "/mo",
    budget: "",
    points: [
      "✅ Meta Ads",
      "✅ Shopify",
      "✅ Flipkart",
      "Growth Strategy",
      "Omnichannel Funnel",
      "Conversion Optimization",
      "Retention Strategy",
      "Weekly Growth Review",
    ],
  },
  {
    id: 10,
    name: "Meta Ads + Shopify + Amazon + Flipkart",
    price: "24,999",
    suffix: "/mo",
    budget: "",
    points: [
      "Meta Ads",
      "Shopify",
      "Amazon",
      "Flipkart",
      "Complete Omnichannel Growth",
      "Complete Business Audit",
      "Competitor Analysis",
      "Customer Journey Mapping",
      "Pricing Strategy",
      "Product Profit Analysis",
      "Sales Funnel Design",
      "Growth Roadmap",
      "CRO Strategy",
      "Retention Strategy",
      "Monthly Business Review",
    ],
  },
  {
    id: 11,
    name: "Google Ads Management",
    price: "9,999",
    suffix: "(Depend on budget)",
    budget: "",
    points: [
      "Google Search Ads",
      "Campaign Setup",
      "Keyword Research",
      "Negative Keywords",
      "Ad Copywriting",
      "Shopping Ads",
      "Merchant Center Optimization",
      "Feed Optimization",
      "Product Performance",
      "Performance Management",
      "Conversion Tracking",
      "Bid Optimization",
      "Weekly Reporting",
    ],
  },
  {
    id: 12,
    name: "Google Ads + Meta Ads",
    price: "19,999",
    suffix: "(Depend on budget)",
    budget: "",
    points: [
      "✅ Google Ads",
      "✅ Meta Ads",
      "Cross Platform Strategy",
      "Attribution Planning",
      "Budget Allocation",
      "Audience Sharing",
      "Funnel Optimization",
    ],
  },
  {
    id: 13,
    name: "Google Ads + Meta Ads + Shopify",
    price: "24,999",
    suffix: "(Depend on budget)",
    budget: "",
    points: [
      "Google Ads",
      "Meta Ads",
      "Shopify",
      "Complete D2C Growth",
      "CRO Suite",
      "Customer Journey",
      "Landing Page Strategy",
      "Performance Dashboard",
    ],
  },
  {
    id: 14,
    name: "Google Ads + Meta Ads + Amazon",
    price: "24,999",
    suffix: "(Depend on budget)",
    budget: "",
    points: [
      "Google Ads",
      "Meta Ads",
      "Amazon",
      "Marketplace Scaling",
      "Brand Visibility",
      "Keyword Domination",
      "Sales Growth Strategy",
      "ROAS Optimization",
    ],
  },
  {
    id: 15,
    name: "Google Ads + Meta Ads + Amazon + Flipkart",
    price: "29,999",
    suffix: "(Depend on budget)",
    budget: "",
    points: [
      "Google Ads",
      "Meta Ads",
      "Amazon",
      "Flipkart",
      "Marketplace Growth System",
      "Multi-Marketplace Strategy",
      "Inventory Planning",
      "Revenue Dashboard",
      "Monthly Scaling Plan",
    ],
  },
  {
    id: 16,
    name: "Google Ads + Meta Ads + Amazon + Flipkart + Shopify",
    price: "34,999",
    suffix: "(Depend on budget)",
    budget: "🚀 Complete Growth Engine",
    points: [
      "Phase 1: Complete Business Audit & Market Research",
      "Phase 2: Sales Funnel Design & Content Strategy",
      "Phase 3: Omni-Channel Marketing Operations Management",
      "Phase 4: Retention Marketing & CRO Dashboards",
      "Weekly Optimization Sprints",
      "Monthly Growth Strategy Meeting",
      "Quarterly Business Scaling Plan",
      "⭐ Recommendation (USP Included)",
    ],
  },
];

const fullGrowthPlans = [
  {
    id: 1,
    name: "Startup Creative Plan",
    price: "9,999",
    suffix: "/mo",
    budget: "₹30,000 – ₹75,000/mo",
    points: ["4 Static ads Creatives", "2 carousel ads Creatives"],
  },
  {
    id: 2,
    name: "Growth Creative Plan",
    price: "14,999",
    suffix: "/mo",
    budget: "₹75,000 – ₹1.5L/mo",
    points: ["6 Static ads Creatives", "4 carousel ads Creatives"],
  },
  {
    id: 3,
    name: "Scale Creative Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹1.5L – ₹2L/mo",
    points: [
      "16 Static Creatives",
      "8 Motion Creatives",
      "12 Video Ads",
      "15 Ad Copies",
      "15 Headlines",
      "6 Creative Angles",
      "UGC Script Writing",
      "Hooks & CTA Variations",
      "Monthly Creative Strategy",
    ],
  },
  {
    id: 4,
    name: "Advanced Growth Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹2L – ₹3L/mo",
    points: [
      "20 Static Creatives",
      "10 Motion Creatives",
      "16 Video Ads",
      "20 Ad Copies",
      "8 Creative Angles",
      "4 UGC Scripts",
      "Thumbnail Design",
      "Creative Performance Analysis",
      "Weekly Creative Optimization",
    ],
  },
  {
    id: 5,
    name: "Premium Scale Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹3L – ₹5L/mo",
    points: [
      "25 Static Creatives",
      "12 Motion Creatives",
      "20 Video Ads",
      "10 UGC Concepts",
      "25 Ad Copies",
      "Competitor Ad Library Analysis",
      "Offer Testing",
      "Landing Page Creative Suggestions",
      "Weekly Creative Review",
    ],
  },
  {
    id: 6,
    name: "Business Growth Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹5L – ₹7L/mo",
    points: [
      "30 Static Creatives",
      "15 Motion Creatives",
      "24 Video Ads",
      "12 UGC Concepts",
      "Product Demo Scripts",
      "Creator Briefs",
      "Creative Testing Matrix",
      "Performance Dashboard",
    ],
  },
  {
    id: 7,
    name: "Brand Scale Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹7L – ₹10L/mo",
    points: [
      "35 Static Creatives",
      "18 Motion Creatives",
      "30 Video Ads",
      "15 UGC Scripts",
      "8 Offer Concepts",
      "Hook Library",
      "Monthly Creative Workshop",
    ],
  },
  {
    id: 8,
    name: "Elite Performance Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹10L – ₹15L/mo",
    points: [
      "40 Static Creatives",
      "20 Motion Creatives",
      "35 Video Ads",
      "20 UGC Scripts",
      "Founder Video Concepts",
      "Product Launch Creatives",
      "Influencer Briefs",
      "Creative Performance Dashboard",
    ],
  },
  {
    id: 9,
    name: "Enterprise Creative Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹15L – ₹20L/mo",
    points: [
      "50 Static Creatives",
      "25 Motion Creatives",
      "40 Video Ads",
      "CGI Planning",
      "Premium UGC",
      "Brand Story Videos",
      "Creative Sprint Every Week",
    ],
  },
  {
    id: 10,
    name: "National Brand Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹20L – ₹30L/mo",
    points: [
      "60 Static Creatives",
      "30 Motion Creatives",
      "50 Video Ads",
      "Full UGC Strategy",
      "Campaign Calendar",
      "Seasonal Campaign Planning",
      "Monthly Creative Shoot Planning",
    ],
  },
  {
    id: 11,
    name: "ScaleUp Enterprise",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹30L – ₹50L/mo",
    points: [
      "Unlimited Creative Requests*",
      "Weekly Campaign Concepts",
      "Product Launch Campaigns",
      "CGI Concepts",
      "Premium Video Ads",
      "Multiple Creative Teams",
      "Brand Creative Guidelines",
    ],
  },
  {
    id: 12,
    name: "Unicorn Growth Plan",
    price: "Custom",
    suffix: "Contact for pricing",
    budget: "₹50L – 1Cr/mo",
    points: [
      "Dedicated Creative Team",
      "Dedicated Copywriter",
      "Dedicated Motion Designer",
      "Dedicated Video Editor",
      "Weekly Creative Strategy Meeting",
      "Unlimited Testing Roadmap*",
      "Product Launch Campaigns",
      "Celebrity/Influencer Campaign Concepts",
      "Omni-Channel Creative Strategy",
      "Creative Performance Dashboard",
      "Quarterly Brand Refresh",
    ],
  },
];

const individualServices = [
  {
    name: "Product Listing",
    price: "500",
    suffix: "/ Per SKU",
    description:
      "Professional end-to-end catalogue synchronization, keyword insertion, and compliance mapping across major platforms.",
  },
  {
    name: "A+ Content",
    price: "5,000",
    suffix: "One-time",
    description:
      "Rich media layouts, structured descriptive storytelling modules, and visual brand layouts to boost conversion metrics.",
  },
  {
    name: "Catalogue Design",
    price: "2,500",
    suffix: "One-time",
    description:
      "Symmetric and crisp design indices built to highlight variants, dimensions, specifications, and primary visual hooks.",
  },
  {
    name: "Shopify Landing Page",
    price: "7,500",
    suffix: "One-time",
    description:
      "High-performance framework execution with optimized codebases, custom UI accents, and accelerated checkout funnels.",
  },
  {
    name: "Email Marketing Setup",
    price: "2,500",
    suffix: "Setup fee",
    description:
      "Core architectural automation flows including welcome sequences, abandoned cart triggers, and segmented updates.",
  },
  {
    name: "WhatsApp Automation",
    price: "2,500",
    suffix: "Setup fee",
    description:
      "Instant notification infrastructure including order confirmations, real-time shipment updates, and automated re-engagement utilities.",
  },
  {
    name: "GA4 + GTM Setup",
    price: "10,000",
    suffix: "One-time",
    description:
      "Advanced event measurement layout, cross-domain user tracking, variables schema auditing, and customized web tracking configuration.",
  },
  {
    name: "Meta Pixel + CAPI",
    price: "7,500",
    suffix: "One-time",
    description:
      "Server-side integration to protect data matching signals, tracking attribution logs, and bypass cookies constraints.",
  },
  {
    name: "Google Merchant Center",
    price: "7,500",
    suffix: "One-time",
    description:
      "Product feeds optimization, error resolutions diagnostics, policy configuration compliance, and smart shopping integration.",
  },
  {
    name: "Product Photoshoot",
    price: "Custom",
    suffix: "Based on requirements",
    description:
      "Premium commercial visual productions with creative studio direction, framing rules, and specialized adjustments.",
  },
  {
    name: "UGC Video",
    price: "Custom",
    suffix: "Based on requirements",
    description:
      "Authentic, high-retention vertical assets configured around explicit script angles, natural hooks, and strategic calls to action.",
  },
];

export default function MarketingPricingPage() {
  const [activeTab, setActiveTab] = useState<
    "smm" | "performance" | "full-suite" | "service"
  >("performance");

  const [revenue, setRevenue] = useState<number>(500000);
  const [budget, setBudget] = useState<number>(50000);
  const [estimatedGrowth, setEstimatedGrowth] = useState<string>("₹12.4 Cr");

  const [performanceIndex, setPerformanceIndex] = useState<number>(0);
  const [growthSuiteIndex, setGrowthSuiteIndex] = useState<number>(0);

  const [expandedPerformanceCards, setExpandedPerformanceCards] = useState<
    Record<number, boolean>
  >({});
  const [expandedGrowthCards, setExpandedGrowthCards] = useState<
    Record<number, boolean>
  >({});

  const touchStart = useRef<number>(0);
  const touchEnd = useRef<number>(0);

  useEffect(() => {
    const annualGrowth = revenue * 12 + budget * 8;
    setEstimatedGrowth("₹" + (annualGrowth / 10000000).toFixed(1) + " Cr");
  }, [revenue, budget]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (type: "perf" | "growth") => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    const maxOffset =
      typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

    if (type === "perf") {
      if (isSwipeLeft && performanceIndex < performancePlans.length - maxOffset)
        setPerformanceIndex((p) => p + 1);
      if (isSwipeRight && performanceIndex > 0)
        setPerformanceIndex((p) => p - 1);
    } else {
      if (isSwipeLeft && growthSuiteIndex < fullGrowthPlans.length - maxOffset)
        setGrowthSuiteIndex((g) => g + 1);
      if (isSwipeRight && growthSuiteIndex > 0)
        setGrowthSuiteIndex((g) => g - 1);
    }
    touchStart.current = 0;
    touchEnd.current = 0;
  };

  return (
    <>
      <Navbar />

      <div className="blueprint-grid min-h-screen bg-black text-[#e5e2e1] antialiased overflow-x-hidden selection:bg-primary selection:text-black">
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <main className="pt-24 md:pt-32">
          {/* Hero Section */}
          <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-20 text-center transition-all duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] font-mono text-[10px] md:text-xs tracking-wider mb-4 md:mb-6">
              <span className="material-symbols-outlined text-[14px]">
                bolt
              </span>
              TRUSTED BY 500+ FAST-GROWING BRANDS
            </div>
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-[80px] sm:leading-tight leading-none max-w-4xl mx-auto mb-6 md:mb-8 bg-gradient-to-r from-white via-[#bfcab0] to-white/50 bg-clip-text text-transparent">
              Digital Marketing Packages That{" "}
              <span className="text-[#9bfe3d] italic font-normal">
                Actually
              </span>{" "}
              Grow Your Business
            </h1>
            <p className="font-sans text-lg md:text-xl text-[#bfcab0] max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Whether you're a startup, local business, D2C brand, or
              enterprise, choose a growth package designed to generate leads,
              increase sales, and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#80e01a] text-[#1a3700] font-bold text-base md:text-lg hover:shadow-[0_0_40px_rgba(155,254,61,0.5)] transition-all flex items-center justify-center gap-2">
                Get Free Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white/10 transition-all">
                Compare Packages
              </button>
            </div>
          </section>

          {/* Trust Bar Section - Restored to full size */}
          <div className="flex w-full overflow-hidden mask-gradient pb-6">
            <motion.div
              className="flex gap-14 sm:gap-20 items-center whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              style={{ width: "fit-content" }}
            >
              {repeatedPartners.map((partner, index) => (
                <div
                  key={index}
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

          {/* Pricing Engine Section */}
          <section
            className="py-12 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto"
            id="pricing-section"
          >
            <div className="flex flex-col items-center mb-10 md:mb-16">
              <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12 overflow-x-auto max-w-full no-scrollbar">
                <button
                  onClick={() => setActiveTab("smm")}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-full font-mono text-xs md:text-sm transition-all whitespace-nowrap ${activeTab === "smm" ? "bg-[#80e01a] text-[#1a3700] font-bold shadow-lg" : "text-[#bfcab0] hover:text-[#e5e2e1]"}`}
                >
                  Social Media
                </button>
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-full font-mono text-xs md:text-sm transition-all whitespace-nowrap ${activeTab === "performance" ? "bg-[#80e01a] text-[#1a3700] font-bold shadow-lg" : "text-[#bfcab0] hover:text-[#e5e2e1]"}`}
                >
                  Performance
                </button>
                <button
                  onClick={() => setActiveTab("full-suite")}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-full font-mono text-xs md:text-sm transition-all whitespace-nowrap ${activeTab === "full-suite" ? "bg-[#80e01a] text-[#1a3700] font-bold shadow-lg" : "text-[#bfcab0] hover:text-[#e5e2e1]"}`}
                >
                  Growth Suite
                </button>
                <button
                  onClick={() => setActiveTab("service")}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-full font-mono text-xs md:text-sm transition-all whitespace-nowrap ${activeTab === "service" ? "bg-[#80e01a] text-[#1a3700] font-bold shadow-lg" : "text-[#bfcab0] hover:text-[#e5e2e1]"}`}
                >
                  Services
                </button>
              </div>
              <h2 className="text-2xl md:text-5xl font-bold text-center mb-3 md:mb-4">
                Choose Your Growth Velocity
              </h2>
              <p className="text-[#bfcab0] text-xs md:text-sm text-center max-w-xl">
                Flexible plans designed for different stages of business
                maturity and aggressive scaling goals.
              </p>
            </div>

            {/* SMM Tab View Content */}
            {activeTab === "smm" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fadeIn">
                <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col">
                  <div className="font-mono text-xs text-[#00F0FF] uppercase mb-4 tracking-wider">
                    SMM Basic
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl md:text-4xl font-bold">
                      ₹10,000
                    </span>
                    <span className="text-[#bfcab0]">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      "2 Platforms",
                      "12 Posts",
                      "Basic Engagement",
                      "Monthly Report",
                    ].map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs md:text-sm text-[#e5e2e1]"
                      >
                        <span className="material-symbols-outlined text-[#00F0FF] text-[18px]">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">
                    Choose Plan
                  </button>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  <div className="font-mono text-xs text-[#00F0FF] uppercase mb-4 tracking-wider">
                    SMM Pro
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl md:text-4xl font-bold">
                      ₹20,000
                    </span>
                    <span className="text-[#bfcab0]">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      "4 Platforms",
                      "20 Posts",
                      "Community Management",
                      "Monthly Reels (2)",
                      "Advanced Analytics",
                    ].map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs md:text-sm text-[#e5e2e1]"
                      >
                        <span className="material-symbols-outlined text-[#00F0FF] text-[18px]">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3.5 rounded-xl bg-[#00eefc] text-[#00363a] font-bold hover:shadow-[0_0_20px_rgba(0,238,252,0.4)] transition-all text-sm">
                    Popular Choice
                  </button>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl flex flex-col">
                  <div className="font-mono text-xs text-[#00F0FF] uppercase mb-4 tracking-wider">
                    SMM Elite
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl md:text-4xl font-bold">
                      ₹40,000
                    </span>
                    <span className="text-[#bfcab0]">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {[
                      "All Platforms",
                      "Daily Posting",
                      "Influencer Coordination",
                      "4 Reels/mo",
                      "Dedicated Social Lead",
                    ].map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs md:text-sm text-[#e5e2e1]"
                      >
                        <span className="material-symbols-outlined text-[#00F0FF] text-[18px]">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            )}

            {/* Performance Marketing Managed Slider view */}
            {activeTab === "performance" && (
              <div className="w-full relative">
                <div className="flex justify-between items-center mb-4 md:mb-6 max-w-[1280px] mx-auto">
                  <span className="text-[11px] md:text-xs font-mono text-[#bfcab0]">
                    Showing {performanceIndex + 1} -{" "}
                    {typeof window !== "undefined" && window.innerWidth < 768
                      ? performanceIndex + 1
                      : Math.min(
                          performanceIndex + 3,
                          performancePlans.length,
                        )}{" "}
                    of {performancePlans.length} Strategic Channels
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        performanceIndex > 0 &&
                        setPerformanceIndex(performanceIndex - 1)
                      }
                      disabled={performanceIndex === 0}
                      className="w-8 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        performanceIndex <
                          performancePlans.length -
                            (typeof window !== "undefined" &&
                            window.innerWidth < 768
                              ? 1
                              : 3) && setPerformanceIndex(performanceIndex + 1)
                      }
                      disabled={
                        performanceIndex >=
                        performancePlans.length -
                          (typeof window !== "undefined" &&
                          window.innerWidth < 768
                            ? 1
                            : 3)
                      }
                      className="w-8 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

                <div
                  className="overflow-hidden w-full py-2"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd("perf")}
                >
                  <div
                    className="flex flex-row gap-4 md:gap-6 transition-transform duration-500 ease-out w-full items-stretch"
                    style={{
                      transform:
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? `translateX(-${performanceIndex * 89}vw)`
                          : `translateX(-${performanceIndex * (100 / 3 + 0.65)}%)`,
                    }}
                  >
                    {performancePlans.map((pkg) => {
                      const isOpen = !!expandedPerformanceCards[pkg.id];
                      const renderedPoints = isOpen
                        ? pkg.points
                        : pkg.points.slice(0, 5);

                      return (
                        <div
                          key={pkg.id}
                          className="glass-card p-5 md:p-6 rounded-2xl flex flex-col h-full w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 transition-all duration-300"
                        >
                          <div>
                            <div className="font-mono text-[9px] md:text-[10px] text-[#9bfe3d] uppercase tracking-wider mb-2 flex justify-between items-center">
                              <span>Plan {pkg.id}</span>
                              {pkg.budget && (
                                <span className="text-[#00F0FF] font-medium tracking-normal lowercase">
                                  ({pkg.budget})
                                </span>
                              )}
                            </div>
                            <h3 className="text-base md:text-lg font-bold font-jost text-white mb-3 min-h-[44px] flex items-center leading-snug">
                              {pkg.name}
                            </h3>
                            <div className="mb-4 md:mb-6">
                              <span className="text-2xl md:text-3xl font-extrabold text-white">
                                ₹{pkg.price}
                              </span>
                              <div className="text-[10px] md:text-[11px] text-[#bfcab0] font-mono mt-0.5">
                                {pkg.suffix}
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 mb-6 flex-grow flex flex-col">
                            {renderedPoints.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-xs text-[#e5e2e1] leading-relaxed animate-fadeIn"
                              >
                                {!point.startsWith("✅") &&
                                  !point.includes("Phase") && (
                                    <span className="material-symbols-outlined text-[#9bfe3d] text-[14px] shrink-0 mt-0.5">
                                      check_circle
                                    </span>
                                  )}
                                <span
                                  className={
                                    point.startsWith("✅") ||
                                    point.includes("Phase")
                                      ? "text-[#9bfe3d] font-semibold tracking-wide block mt-1"
                                      : ""
                                  }
                                >
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                            {pkg.points.length > 5 && (
                              <div className="text-left">
                                <button
                                  onClick={() =>
                                    setExpandedPerformanceCards((prev) => ({
                                      ...prev,
                                      [pkg.id]: !prev[pkg.id],
                                    }))
                                  }
                                  className="inline-flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
                                >
                                  <span>
                                    {isOpen ? "Hide Details" : "View Details"}
                                  </span>
                                  <span
                                    className="material-symbols-outlined text-[12px]"
                                    style={{
                                      transform: isOpen
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                    }}
                                  >
                                    keyboard_arrow_down
                                  </span>
                                </button>
                              </div>
                            )}
                            <button className="w-full py-2.5 rounded-xl bg-[#80e01a] text-[#1a3700] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(155,254,61,0.35)] transition-all cursor-pointer">
                              Choose Plan
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 p-4 md:p-6 rounded-xl bg-white/3 border border-white/5 max-w-[1280px] mx-auto">
                  <h4 className="text-[10px] md:text-xs font-mono text-[#00F0FF] uppercase tracking-widest text-center mb-4">
                    Every Growthzee Performance Plan Includes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[10px] md:text-xs text-[#bfcab0]">
                    {[
                      "Dedicated Account Manager",
                      "Weekly Performance Report",
                      "Monthly Strategy Call",
                      "Dedicated WhatsApp Support",
                      "Competitor Monitoring",
                      "Performance Dashboard",
                      "Growth Recommendations",
                      "Continuous Optimization",
                    ].map((val, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#9bfe3d] text-[14px]">
                          check_circle
                        </span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Full Growth Suite Tab Content */}
            {activeTab === "full-suite" && (
              <div className="w-full relative">
                <div className="flex justify-between items-center mb-4 md:mb-6 max-w-[1280px] mx-auto">
                  <span className="text-[11px] md:text-xs font-mono text-[#bfcab0]">
                    Showing {growthSuiteIndex + 1} -{" "}
                    {typeof window !== "undefined" && window.innerWidth < 768
                      ? growthSuiteIndex + 1
                      : Math.min(
                          growthSuiteIndex + 3,
                          fullGrowthPlans.length,
                        )}{" "}
                    of {fullGrowthPlans.length} Ads Creative Plans
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        growthSuiteIndex > 0 &&
                        setGrowthSuiteIndex(growthSuiteIndex - 1)
                      }
                      disabled={growthSuiteIndex === 0}
                      className="w-8 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_back
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        growthSuiteIndex <
                          fullGrowthPlans.length -
                            (typeof window !== "undefined" &&
                            window.innerWidth < 768
                              ? 1
                              : 3) && setGrowthSuiteIndex(growthSuiteIndex + 1)
                      }
                      disabled={
                        growthSuiteIndex >=
                        fullGrowthPlans.length -
                          (typeof window !== "undefined" &&
                          window.innerWidth < 768
                            ? 1
                            : 3)
                      }
                      className="w-8 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white disabled:opacity-20 hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

                <div
                  className="overflow-hidden w-full py-2"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd("growth")}
                >
                  <div
                    className="flex flex-row gap-4 md:gap-6 transition-transform duration-500 ease-out w-full items-stretch"
                    style={{
                      transform:
                        typeof window !== "undefined" && window.innerWidth < 768
                          ? `translateX(-${growthSuiteIndex * 89}vw)`
                          : `translateX(-${growthSuiteIndex * (100 / 3 + 0.65)}%)`,
                    }}
                  >
                    {fullGrowthPlans.map((pkg) => {
                      const isOpen = !!expandedGrowthCards[pkg.id];
                      const renderedPoints = isOpen
                        ? pkg.points
                        : pkg.points.slice(0, 5);

                      return (
                        <div
                          key={pkg.id}
                          className="glass-card p-5 md:p-6 rounded-2xl flex flex-col h-full w-[85vw] md:w-[calc(33.333%-16px)] shrink-0 transition-all duration-300"
                        >
                          <div>
                            <div className="font-mono text-[9px] md:text-[10px] text-[#00F0FF] uppercase tracking-wider mb-2 flex justify-between items-center">
                              <span>Creative Plan {pkg.id}</span>
                              <span className="text-[#9bfe3d] font-medium tracking-normal lowercase">
                                {pkg.budget}
                              </span>
                            </div>
                            <h3 className="text-base md:text-lg font-bold font-jost text-white mb-3 min-h-[44px] flex items-center leading-snug">
                              {pkg.name}
                            </h3>
                            <div className="mb-4 md:mb-6">
                              <span className="text-2xl md:text-3xl font-extrabold text-white">
                                ₹{pkg.price}
                              </span>
                              <div className="text-[10px] md:text-[11px] text-[#bfcab0] font-mono mt-0.5">
                                {pkg.suffix}
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 mb-6 flex-grow flex flex-col">
                            {renderedPoints.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-xs text-[#e5e2e1] leading-relaxed animate-fadeIn"
                              >
                                <span className="material-symbols-outlined text-[#00F0FF] text-[14px] shrink-0 mt-0.5">
                                  check_circle
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="space-y-3 pt-4 border-t border-white/5 mt-auto">
                            {pkg.points.length > 5 && (
                              <div className="text-left">
                                <button
                                  onClick={() =>
                                    setExpandedGrowthCards((prev) => ({
                                      ...prev,
                                      [pkg.id]: !prev[pkg.id],
                                    }))
                                  }
                                  className="inline-flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
                                >
                                  <span>
                                    {isOpen ? "Hide Details" : "View Details"}
                                  </span>
                                  <span
                                    className="material-symbols-outlined text-[12px]"
                                    style={{
                                      transform: isOpen
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                    }}
                                  >
                                    keyboard_arrow_down
                                  </span>
                                </button>
                              </div>
                            )}
                            <button className="w-full py-2.5 rounded-xl bg-[#00eefc] text-[#00363a] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,238,252,0.35)] transition-all cursor-pointer">
                              Select Plan
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 p-4 md:p-6 rounded-xl bg-white/3 border border-white/5 max-w-[1280px] mx-auto">
                  <h4 className="text-[10px] md:text-xs font-mono text-[#9bfe3d] uppercase tracking-widest text-center mb-4">
                    ⭐ Common Deliverables (Every Plan Includes)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[10px] md:text-xs text-[#bfcab0]">
                    {[
                      "Creative Strategy Session",
                      "Competitor Creative Research",
                      "Meta Ads Creative Optimization",
                      "Copywriting",
                      "Primary Text Generation",
                      "Headlines Exploration",
                      "CTA Variant Testing",
                      "Creative Performance Report",
                    ].map((val, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#9bfe3d] text-[14px]">
                          check_circle
                        </span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Individual Services Tab Content */}
            {activeTab === "service" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fadeIn max-w-[1280px] mx-auto items-stretch">
                {individualServices.map((svc, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 md:p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#00F0FF]/40"
                  >
                    <div>
                      <div className="font-mono text-[9px] md:text-[10px] text-[#00F0FF] uppercase tracking-wider mb-2">
                        Standalone Service
                      </div>
                      <h3 className="text-base md:text-lg font-bold font-jost text-white mb-2 leading-snug">
                        {svc.name}
                      </h3>
                      <p className="text-xs text-[#bfcab0] leading-relaxed mb-4 md:mb-6">
                        {svc.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-4 border-t border-white/5 pt-4 flex items-baseline gap-1">
                        <span className="text-xl md:text-2xl font-extrabold text-white">
                          {svc.price === "Custom" ? "Custom" : `₹${svc.price}`}
                        </span>
                        <span className="text-[10px] md:text-[11px] font-mono text-[#bfcab0]">
                          {svc.suffix}
                        </span>
                      </div>
                      <button className="w-full py-2.5 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-[#00F0FF] transition-all cursor-pointer">
                        Book Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ROI Calculator Section */}
          <section className="py-12 md:py-24 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-[1280px] mx-auto">
              <div className="glass-card p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
                    Calculate Your Growth ROI
                  </h2>
                  <p className="text-[#bfcab0] text-xs md:text-sm mb-6 md:mb-10 leading-relaxed">
                    Use our proprietary calculator to estimate the revenue
                    impact of professional marketing at your current scale.
                  </p>
                  <div className="space-y-6 md:space-y-8">
                    <div className="space-y-3 md:space-y-4">
                      <label className="flex justify-between font-mono text-xs md:text-sm">
                        Current Monthly Revenue{" "}
                        <span>
                          ₹<span>{revenue.toLocaleString("en-IN")}</span>
                        </span>
                      </label>
                      <input
                        type="range"
                        min="100000"
                        max="5000000"
                        step="50000"
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
                      />
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <label className="flex justify-between font-mono text-xs md:text-sm">
                        Planned Marketing Budget{" "}
                        <span>
                          ₹<span>{budget.toLocaleString("en-IN")}</span>
                        </span>
                      </label>
                      <input
                        type="range"
                        min="15000"
                        max="1000000"
                        step="5000"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#9bfe3d]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-black/40 border border-white/5 rounded-2xl text-center flex flex-col justify-center min-h-[250px] md:min-h-[300px]">
                  <div className="font-mono text-[10px] md:text-xs text-[#bfcab0] uppercase mb-3 md:mb-4 tracking-wider">
                    Estimated 12-Month Growth
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-[#9bfe3d] mb-2">
                    {estimatedGrowth}
                  </div>
                  <div className="text-sm md:text-lg text-[#00F0FF] mb-6 md:mb-8 font-medium">
                    Expected ROI: 4.2x
                  </div>
                  <div className="w-full h-1.5 md:w-full md:h-2 bg-white/5 rounded-full overflow-hidden mb-6 md:mb-8">
                    <div
                      className="h-full bg-gradient-to-r from-[#9bfe3d] to-[#00F0FF]"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <button className="text-[#9bfe3d] text-xs md:text-sm font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all">
                    Download Detailed Projection Report
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call to Action Section */}
          <section className="py-12 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto">
            <div className="relative rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-20 overflow-hidden text-center bg-gradient-to-br from-[#1A3700] via-[#131313] to-[#002022] border border-white/10">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-5 w-16 h-16 bg-[#9bfe3d]/10 blur-[40px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-5 w-20 h-20 bg-[#00F0FF]/10 blur-[40px] rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-2xl md:text-6xl font-bold mb-4 md:mb-8 tracking-tight">
                Ready to Scale Your Business?
              </h2>
              <p className="text-[#bfcab0] text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Stop guessing and start growing. Our team of specialists is
                ready to build your customized high-performance growth engine.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#9bfe3d] text-[#1a3700] font-bold text-base md:text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(155,254,61,0.3)]">
                  Get Your Free Growth Audit
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base md:text-xl hover:scale-105 transition-all">
                  View Success Stories
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

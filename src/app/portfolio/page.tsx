"use client";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaStar,
  FaTimes,
} from "react-icons/fa";

// 1. Redefined Interface with rich graphical metadata
interface Portfolio {
  id: number;
  name: string;
  img: string;
  brand: string;
  category?: string;
  rating?: number;
  year?: string;
  description?: string;
  link: string;
  metrics?: { label: string; value: string; graphData?: number[] };
  techStack?: string[];
  scope?: string[];
  seoValue?: number;
  colors?: string[]; // Color palettes for design koncepts
}

// 2. Updated data with rich metadata
const PortfolioData: Portfolio[] = [
  {
    id: 1,
    name: "Vorne Perfmes",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742446/Artboard_4_tduabx.jpg",
    brand: "Vorne",
    category: "Shopify Store",
    rating: 5.0,
    year: "2025",
    description:
      "A premium Shopify store for luxury perfumes, featuring an elegant layout, smooth navigation, and a refined shopping experience.",
    link: "https://vorne.in",
    metrics: {
      label: "Sales Conversion Growth",
      value: "+340% Boost",
      graphData: [10, 25, 45, 30, 65, 80, 120],
    },
    techStack: [
      "Shopify Liquid",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
    ],
    scope: [
      "Custom Storefront Redesign",
      "Checkout Funnel Audit",
      "Page Speed Optimisation",
    ],
  },
  {
    id: 2,
    name: "Kerala Secrets",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767087/Artboard_4_pdockh.jpg",
    brand: "Kerala Secrets",
    category: "Shopify Store",
    rating: 4.9,
    year: "2025",
    description:
      "A beauty and wellness Shopify store inspired by traditional Kerala formulations, designed with warm visuals and a clean product-focused UI.",
    link: "https://keralasecrets.com",
    metrics: {
      label: "ROAS Multiplier",
      value: "4.2x ROAS",
      graphData: [12, 18, 26, 42, 35, 48, 62],
    },
    techStack: ["Shopify OS 2.0", "Tailwind CSS", "Alpine.js"],
    scope: [
      "Theme Refactoring",
      "Responsive Navigation Layout",
      "Product Page CRO",
    ],
  },
  {
    id: 3,
    name: "Fitleasure",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767215/bambbo_made_ldsy1a.jpg",
    brand: "Fitleasure",
    category: "Shopify Store",
    rating: 5.0,
    year: "2025",
    description:
      "A modern and energetic Shopify store for an activewear brand, built with bold visuals, sleek UI, and a performance-driven shopping flow.",
    link: "https://fitleasure.com",
    metrics: {
      label: "Average Order Value Boost",
      value: "+28% AOV",
      graphData: [20, 24, 30, 28, 35, 38, 45],
    },
    techStack: ["React", "Shopify API", "Framer Motion", "Tailwind CSS"],
    scope: [
      "Headless Commerce Architecture",
      "Cart Upsell Integration",
      "Dynamic Animations",
    ],
  },
  {
    id: 4,
    name: "Asian Bond",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1772107284/Asian_Bond_Creative_01_ggd4bl.jpg",
    brand: "AsianBond",
    category: "Web App",
    rating: 4.8,
    year: "2025",
    description:
      "A construction materials web app built with a professional layout, offering product clarity, durability-focused details, and a smooth browsing experience for industrial buyers.",
    link: "https://www.asianbond.in/",
    metrics: {
      label: "Client Inquiries",
      value: "+180% Leads",
      graphData: [8, 14, 20, 28, 32, 45, 56],
    },
    techStack: ["Next.js", "Node.js", "MongoDB", "Express"],
    scope: [
      "Custom Database Architecture",
      "Lead Capturing Forms",
      "Responsive B2B Portal",
    ],
  },
  {
    id: 5,
    name: "The Inkboy",
    img: "/images/inkboy.png",
    brand: "Ink Boy",
    category: "SEO Optimization",
    rating: 4.9,
    year: "2024",
    description:
      "A Tattoo studio website optimized for search engines to attract local clients.",
    link: "https://theinkboy.com",
    seoValue: 97,
    techStack: ["WordPress", "RankMath Pro", "Cloudflare CDN"],
    scope: [
      "Local SEO Schema Setup",
      "Keyword Mapping Analysis",
      "Site Loading Speed optimization",
    ],
  },
  {
    id: 6,
    name: "Jobzshala",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767281/story02_zkh2xf.jpg",
    brand: "Jobzshala",
    category: "SEO Optimization",
    rating: 5.0,
    year: "2025",
    description:
      "A job portal website optimized for SEO to connect job seekers with employers.",
    link: "https://jobzshala.com/",
    seoValue: 99,
    techStack: ["Next.js", "JSON-LD Schema", "Yoast SEO", "Vercel"],
    scope: [
      "Technical Sitemap Restructure",
      "Domain Authority Expansion",
      "Meta Tag Optimisation Pipeline",
    ],
  },
  {
    id: 7,
    name: "TurfTown",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767364/Screenshot_2026-07-11_at_16-25-58_Instagram_hovtos.png",
    brand: "TurfTown",
    category: "Web App",
    rating: 5.0,
    year: "2024",
    description:
      "A modern sports community web app designed to help users discover nearby games, venues, coaches, and tournaments with a smooth, fast, and intuitive experience.",
    link: "https://turftown.in/",
    metrics: {
      label: "User Engagement Rate",
      value: "+310% Retention",
      graphData: [40, 52, 60, 68, 79, 90, 110],
    },
    techStack: ["React Native", "Next.js API", "PostgreSQL", "Socket.io"],
    scope: [
      "Real-time Booking Algorithm",
      "Interactive Stadium Map",
      "Push Alert Integration Flow",
    ],
  },
  {
    id: 8,
    name: "Unbound",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767422/Artboard_10_Uploaded_yhzagc.jpg",
    brand: "Unbound",
    category: "Shopify Store",
    rating: 4.8,
    year: "2025",
    description:
      "A sleek and premium Shopify store built for a modest fashion brand, offering a refined shopping experience with clean product displays, minimal UI, and seamless navigation.",
    link: "https://unbound.ae/",
    metrics: {
      label: "Checkout Funnel Dropoffs",
      value: "-34% Reduction",
      graphData: [50, 42, 38, 30, 26, 20, 15],
    },
    techStack: ["Shopify OS 2.0", "Tailwind CSS", "JavaScript"],
    scope: [
      "Custom One-page Checkout layout",
      "Mega Menu Development",
      "SEO Optimisation",
    ],
  },
  {
    id: 9,
    name: "Tisarealtors",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767510/tisa_ad_2_hipdrv.jpg",
    brand: "Tisarealtors",
    category: "Web App",
    rating: 4.8,
    year: "2024",
    description:
      "A professional real estate web platform designed to help users discover premium Dubai properties with advanced search filters, polished UI, and a smooth user experience.",
    link: "https://tisarealtors.com/",
    metrics: {
      label: "Property Lead Conversions",
      value: "2.4x Inquiries",
      graphData: [15, 20, 25, 22, 28, 35, 42],
    },
    techStack: ["Next.js", "Algolia Search", "GraphQL", "Tailwind CSS"],
    scope: [
      "High-speed Advanced Filter search",
      "Interactive Map Cluster pinning",
      "Dubai CRM Sync pipeline",
    ],
  },
  {
    id: 10,
    name: "Eldita",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767566/Screenshot_2026-07-11_at_16-29-20_Instagram_bvfsvu.png",
    brand: "Eldita",
    category: "Shopify Store",
    rating: 4.5,
    year: "2024",
    description:
      "A modern Shopify store built for premium baby furniture, offering a clean layout, elegant product presentation, and a smooth shopping experience tailored for parents.",
    link: "https://eldita.com.au/",
    metrics: {
      label: "Site Speed Index",
      value: "95/100 Mobile",
      graphData: [60, 70, 75, 82, 88, 92, 95],
    },
    techStack: ["Shopify Custom Theme", "Sass", "JavaScript"],
    scope: [
      "Mobile UI/UX Refinement",
      "Product Configurator Tool",
      "Conversion Optimisation",
    ],
  },
  {
    id: 11,
    name: "Stokke",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767614/Screenshot_2026-07-11_at_16-30-10_Instagram_bh16mu.png",
    brand: "Stokke",
    category: "Shopify Store",
    rating: 4.7,
    year: "2024",
    description:
      "A sleek and high-conversion Shopify store designed for premium baby products, featuring minimal UI, intuitive navigation, and a seamless buying journey for modern families.",
    link: "https://stokkeshop.com.au/",
    metrics: {
      label: "Average User Session Duration",
      value: "+40% Time",
      graphData: [100, 115, 120, 130, 125, 138, 140],
    },
    techStack: ["Shopify Liquid", "Tailwind CSS", "JavaScript"],
    scope: [
      "Custom Product Matrix Grid",
      "Cart Optimization",
      "Checkout localization",
    ],
  },
  {
    id: 12,
    name: "Cocoa Creme",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767667/Screenshot_2026-07-11_at_16-31-02_Instagram_iklgoj.png",
    brand: "Cocoa Creme",
    category: "SEO Optimization",
    rating: 4.8,
    year: "2024",
    description:
      "A visually rich restaurant web app crafted to showcase fine dining with elegance. Smooth navigation, immersive visuals, and a premium design that elevates the culinary brand experience.",
    link: "https://cocoaandcreme.in/",
    seoValue: 96,
    techStack: ["Next.js", "Yoast SEO", "Sass"],
    scope: [
      "Local Citation Syncing",
      "Responsive Gallery optimization",
      "Schema.org structured data setup",
    ],
  },
  {
    id: 13,
    name: "Marriott Bonvoy",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767744/Screenshot_2026-07-11_at_16-32-19_Instagram_q5dgod.png",
    brand: "Marriott Bonvoy",
    category: "SEO Optimization",
    rating: 4.8,
    year: "2024",
    description:
      "A polished and high-performance hotel booking platform delivering a seamless user journey, intuitive search, and world-class UI to match the luxury of the Marriott brand.",
    link: "https://www.marriott.com/",
    seoValue: 95,
    techStack: ["React", "Custom JSON-LD schema", "Edge Cache CDN"],
    scope: [
      "Internationalization SEO tags",
      "Core Web Vitals Audit",
      "Dynamic landing page index mapping",
    ],
  },
  {
    id: 14,
    name: "Mathsya",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767804/Screenshot_2026-07-11_at_16-33-19_Instagram_aandqg.png",
    brand: "Mathsya",
    category: "SEO Optimization",
    rating: 4.9,
    year: "2024",
    description:
      "A refined restaurant website designed to highlight signature dishes, authentic flavors, and a heritage dining experience — all wrapped in a clean, modern, and user-friendly interface.",
    link: "https://www.mathsya.co.in/",
    seoValue: 98,
    techStack: ["WordPress", "SEO schema markup", "WebP converter assets"],
    scope: [
      "Google Map Pack Indexing",
      "Menu keyword mapping",
      "Lighthouse Core speed optimization",
    ],
  },
  {
    id: 16,
    name: "Off Sinners",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1783767902/Screenshot_2026-07-11_at_16-34-56_Instagram_oy7zyv.png",
    brand: "Off Sinners",
    category: "Shopify Store",
    rating: 4.8,
    year: "2025",
    description:
      "A warm, trust-building Shopify store for streetwear clothing. Clean product pages, simple navigation, and a natural color palette designed to inspire confident purchases.",
    link: "https://offsinners.com/",
    metrics: {
      label: "Cart Add Rate",
      value: "+45% Growth",
      graphData: [5, 8, 12, 11, 15, 18, 22],
    },
    techStack: ["Shopify OS 2.0", "Tailwind CSS", "JavaScript"],
    scope: [
      "Grid Layout redesign",
      "Dynamic color filters",
      "Speed-optimised checkout flows",
    ],
  },
  {
    id: 17,
    name: "NOHO",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742456/mashala-mint-Recovered_01_tryexq.jpg",
    brand: "NOHO",
    category: "Designs",
    rating: 4.8,
    year: "2025",
    description:
      "Design concepts for a potato chips brand packaging, highlighting flavor details.",
    link: "",
    colors: ["#146a3b", "#e4aa0e", "#d8271e"],
    techStack: ["Adobe Illustrator", "Photoshop", "Cinema 4D"],
    scope: [
      "Visual Branding Direction",
      "3D Product Mockup rendering",
      "Packaging Graphics Layout",
    ],
  },
  {
    id: 18,
    name: "Kbiyara Crest",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742453/opening_soon_lfxq6d.jpg",
    brand: "Kbiyara Crest",
    category: "Designs",
    rating: 4.8,
    year: "2025",
    description:
      "Graphic design layout and advertising concepts for Kbiyara Crest hotel brand.",
    link: "",
    colors: ["#2d3142", "#d8b4f8", "#ffffff"],
    techStack: ["Adobe InDesign", "Photoshop", "Figma"],
    scope: [
      "Brand Guidelines manual",
      "Social Media Graphics",
      "Print Collaterals development",
    ],
  },
  {
    id: 19,
    name: "Vorne",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742459/Artboard_6_gsuowj.jpg",
    brand: "Vorne",
    category: "Designs",
    rating: 5,
    year: "2025",
    description:
      "Minimalist visual identity design and product assets for Vorne perfume bottle label.",
    link: "",
    colors: ["#000000", "#c29d38", "#efeff3"],
    techStack: ["Figma", "Illustrator", "Dimension"],
    scope: [
      "Luxury Brand Identity",
      "Bottle Decal Graphics",
      "Visual Tone guide book",
    ],
  },
  {
    id: 20,
    name: "Vorne Studio",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742446/Artboard_4_tduabx.jpg",
    brand: "Vorne Studio",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Design concept presentation boards for perfume marketing advertisements.",
    link: "",
    colors: ["#5d4b3b", "#dfcaae", "#2c2c2a"],
    techStack: ["Photoshop", "Lightroom", "Illustrator"],
    scope: [
      "Ad Campaign concepts",
      "Commercial Photography retouching",
      "Social grid asset design",
    ],
  },
  {
    id: 21,
    name: "Fitleasure Layout",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742444/Artboard_11_jcul0c.jpg",
    brand: "Fitleasure",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Dynamic typographic and activewear brand assets showcase design layouts.",
    link: "",
    colors: ["#df3b57", "#241f20", "#f2f2f2"],
    techStack: ["Figma", "Illustrator"],
    scope: [
      "Activewear Graphic design",
      "Typography hierarchy mapping",
      "Grid structure layouts",
    ],
  },
  {
    id: 22,
    name: "Jobzshala Graphics",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742450/4_vaas4n.jpg",
    brand: "Jobzshala",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "High-engagement infographics and layout designs showing job seeker insights.",
    link: "",
    colors: ["#0c5adb", "#2dce89", "#ffffff"],
    techStack: ["Adobe Illustrator", "Figma"],
    scope: [
      "Dashboard Data Visualisation",
      "Iconography library creation",
      "Social media template kits",
    ],
  },
  {
    id: 23,
    name: "NOHO peri-peri",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742424/PERI-PERI_03_skqmhl.jpg",
    brand: "NOHO",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Packaging graphics and flavor illustration layouts for NOHO chips brand.",
    link: "",
    colors: ["#c5161c", "#ffd100", "#161616"],
    techStack: ["Adobe Illustrator", "Cinema 4D Rendering"],
    scope: [
      "Flavor Visual Asset system",
      "Product Packaging layout",
      "Retail display layouts",
    ],
  },
  {
    id: 24,
    name: "Dream Holiday Hub",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742432/Artboard_1_dqnkvi.jpg",
    brand: "Dream Holiday Hub",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Marketing graphic layouts and layout concept designs for Dream Holiday Hub travel company.",
    link: "",
    colors: ["#03a9f4", "#e91e63", "#ffffff"],
    techStack: ["Photoshop", "Lightroom", "Figma"],
    scope: [
      "Travel Advertisement assets",
      "Visual color grading",
      "Typography design guidelines",
    ],
  },
  {
    id: 25,
    name: "Elite Taxi",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742438/3_am_vujm9j.jpg",
    brand: "Elite Taxi",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Typography layout and modern mobile app visual styles for taxi brand.",
    link: "",
    colors: ["#ffd60a", "#000000", "#f8f9fa"],
    techStack: ["Figma", "Illustrator"],
    scope: [
      "App Interface layouts",
      "Brand typography selection",
      "Marketing banner guidelines",
    ],
  },
  {
    id: 26,
    name: "Livin Buddy",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742435/Found_the_perfect_space_kcm0fy.jpg",
    brand: "Livin Buddy",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Minimal UI mockup assets and graphic illustrations for room-mate app onboarding screens.",
    link: "",
    colors: ["#8b5cf6", "#f43f5e", "#ffffff"],
    techStack: ["Figma", "Adobe Illustrator"],
    scope: [
      "App User Interface Guidelines",
      "Onboarding Illustration system",
      "Icon mapping sets",
    ],
  },
  {
    id: 27,
    name: "Dream Holiday",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742429/Artboard_4_1_mt0xca.jpg",
    brand: "Dream Holiday Hub",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Widescreen poster banners and marketing designs for luxury island travel deals.",
    link: "",
    colors: ["#00a8cc", "#ffffff", "#27496d"],
    techStack: ["Photoshop", "Illustrator"],
    scope: [
      "Poster layout composition",
      "Color temperature enhancement",
      "Social header kit layout",
    ],
  },
  {
    id: 29,
    name: "Fitleasure Blue",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742441/blue1_hlzxz0.jpg",
    brand: "Fitleasure",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Product layout grids and catalog designs for activewear fitness apparel.",
    link: "",
    colors: ["#1d4ed8", "#1e293b", "#ffffff"],
    techStack: ["Adobe InDesign", "Photoshop"],
    scope: [
      "Seasonal Product Catalog layouts",
      "Image layout framing",
      "Typographic catalog style rules",
    ],
  },
  {
    id: 30,
    name: "NOHO package",
    img: "https://res.cloudinary.com/dbtmhiwij/image/upload/v1766742426/PERI-PERI_02_tajyxr.jpg",
    brand: "NOHO",
    category: "Designs",
    rating: 4.9,
    year: "2025",
    description:
      "Packaging wrap decals and 3D visual models for NOHO peri-peri flavor chips.",
    link: "",
    colors: ["#d9230f", "#008a4b", "#ffdd00"],
    techStack: ["Cinema 4D", "Photoshop Mockups", "Illustrator"],
    scope: [
      "Bag packaging layout blueprint",
      "3D scene composition",
      "Logo visual adjustments",
    ],
  },
];

const categories = [
  "All",
  "Shopify Store",
  "Web App",
  "SEO Optimization",
  "Designs",
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: "🎯" },
  { number: "100%", label: "Client Satisfaction", icon: "⭐" },
  { number: "4.9", label: "Average Rating", icon: "🏆" },
  { number: "25+", label: "Happy Clients", icon: "😊" },
];

// Custom Sub-components for Graphical Elements
function Sparkline({
  data,
  color = "#80e01a",
}: {
  data: number[];
  color?: string;
}) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 100;
  const height = 30;

  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height * 0.8 - height * 0.1;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-24 h-8 overflow-visible"
    >
      <motion.polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        points={points}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <path
        d={`M 0,${height} L ${points} L ${width},${height} Z`}
        fill={`url(#sparkline-grad-${color.replace("#", "")})`}
        opacity="0.15"
      />
      <defs>
        <linearGradient
          id={`sparkline-grad-${color.replace("#", "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RadialGauge({
  value,
  label = "SEO Score",
}: {
  value: number;
  label?: string;
}) {
  const radius = 20;
  const strokeWidth = 3.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-3 bg-white/[0.01] border border-white/5 rounded-xl px-4 py-2.5">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx="24"
            cy="24"
            r={radius}
            fill="transparent"
            stroke="#80e01a"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[10px] font-bold text-white tracking-tight">
          {value}
        </span>
      </div>
      <div>
        <div className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider leading-none mb-1">
          {label}
        </div>
        <div className="text-[11px] font-bold text-white leading-none">
          Index Rating
        </div>
      </div>
    </div>
  );
}

function BrowserMockup({
  children,
  url,
}: {
  children: React.ReactNode;
  url?: string;
}) {
  return (
    <div className="w-full bg-[#0d0d15] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl relative flex flex-col h-full group/browser">
      <div className="h-7 bg-[#0a0a0f] border-b border-zinc-900 px-3 flex items-center gap-1.5 flex-shrink-0 relative">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <div className="mx-auto bg-zinc-900/60 border border-zinc-800/50 rounded text-[9px] text-zinc-600 px-4 py-0.5 max-w-[160px] w-full text-center truncate font-mono select-none">
          {url || "https://growthzee.com"}
        </div>
      </div>
      <div className="relative flex-grow overflow-hidden w-full h-full min-h-[160px]">
        {children}
      </div>
    </div>
  );
}

function FeaturedCardDeck({
  items,
  onSelect,
}: {
  items: Portfolio[];
  onSelect: (p: Portfolio) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center select-none max-w-sm mx-auto">
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(128,224,26,0.1),transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      {items.slice(0, 3).map((project, idx) => {
        const isCurrent = activeIndex === idx;

        let zIndex = 10 - idx;
        let scale = 1 - idx * 0.05;
        let translateY = idx * 22;
        let rotate = idx * -4;
        let opacity = 1 - idx * 0.25;

        if (isCurrent) {
          scale = 1.04;
          translateY = -8;
          rotate = 0;
          opacity = 1;
          zIndex = 20;
        }

        return (
          <motion.div
            key={project.id}
            style={{ zIndex }}
            animate={{
              y: translateY,
              scale,
              rotate,
              opacity,
            }}
            whileHover={isCurrent ? { scale: 1.07, y: -12 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => {
              if (isCurrent) {
                onSelect(project);
              } else {
                setActiveIndex(idx);
              }
            }}
            className="absolute w-[260px] md:w-[300px] aspect-[16/10] bg-[#0c0c14] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Window bar mockup */}
            <div className="h-6 bg-[#07070a] border-b border-zinc-900/80 flex items-center justify-between px-3">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[8px] text-zinc-500 font-mono tracking-tight truncate max-w-[120px]">
                {project.brand}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#80e01a] animate-pulse" />
            </div>

            <div className="relative w-full h-[calc(100%-24px)]">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="text-[8px] font-bold text-[#80e01a] tracking-widest uppercase mb-0.5">
                  {project.category}
                </div>
                <div className="text-[11px] font-bold text-white truncate">
                  {project.name}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Navigation Indicators */}
      <div className="absolute -bottom-4 flex gap-1.5 z-30">
        {items.slice(0, 3).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? "bg-[#80e01a] w-5" : "bg-zinc-800 hover:bg-zinc-700"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "metrics" | "scope">(
    "overview",
  );

  const filteredProjects = PortfolioData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

  const getCategoryCount = (category: string) => {
    if (category === "All") return PortfolioData.length;
    return PortfolioData.filter((p) => p.category === category).length;
  };

  const hasLink = (project: Portfolio) => {
    return project.link && project.link.trim() !== "";
  };

  return (
    <section className="w-full bg-[#030014] relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 blueprint-grid opacity-[0.2]" />

        {/* Ambient lights */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -70, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#80e01a]/8 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[5%] w-[550px] h-[550px] rounded-full bg-[#80e01a]/6 blur-[150px]"
        />

        {/* Ambient SVG noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 z-10 border-b border-zinc-900/60 bg-black/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#80e01a] animate-pulse" />
                <span className="text-[9px] font-bold tracking-wider text-gray-300 uppercase">
                  Featured Client Projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-white lg:text-[52px] md:text-[44px] text-[30px] font-extrabold leading-tight tracking-tight text-balance"
              >
                We Build{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80e01a] to-[#c0f283] font-black">
                  Digital Masterpieces
                </span>{" "}
                That Perform.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-400 text-xs md:text-sm mt-5 max-w-xl leading-relaxed"
              >
                Explore our portfolio of high-impact e-commerce stores, custom
                applications, and data-backed search strategies. We turn code
                into commercial growth.
              </motion.p>

              {/* Graphic metrics panel */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-3 gap-3 mt-8 max-w-md bg-white/[0.01] border border-white/5 rounded-2xl p-4 backdrop-blur-sm"
              >
                <div className="text-left border-r border-zinc-900 pr-2">
                  <div className="text-[#80e01a] text-lg font-black leading-none">
                    3.2x
                  </div>
                  <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider mt-1.5">
                    Avg ROAS Gain
                  </div>
                </div>
                <div className="text-left border-r border-zinc-900 px-2">
                  <div className="text-[#80e01a] text-lg font-black leading-none">
                    99%
                  </div>
                  <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider mt-1.5">
                    Speed Index
                  </div>
                </div>
                <div className="text-left pl-2">
                  <div className="text-[#80e01a] text-lg font-black leading-none">
                    ₹1.5Cr+
                  </div>
                  <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider mt-1.5">
                    GMV Managed
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side interactive 3D Stack */}
            <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0">
              <FeaturedCardDeck
                items={PortfolioData}
                onSelect={(p) => {
                  setSelectedImage(p);
                  setActiveTab("overview");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-900 pb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                Explore Our Technical Index
              </h2>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                Click any dashboard card below to access design blueprints, tech
                stacks, and live code statistics.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#80e01a] inline-block animate-ping" />
                Active Database: {PortfolioData.length} entries
              </span>
            </div>
          </div>

          {/* Sliding filters */}
          <div className="mb-14">
            <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md max-w-2xl mx-auto relative">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                const count = getCategoryCount(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-gradient-to-r from-[#80e01a] to-[#60b015] rounded-xl shadow-md shadow-[#80e01a]/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${isSelected ? "text-black font-bold" : "text-gray-400 group-hover:text-white"}`}
                    >
                      {category}
                    </span>
                    <span
                      className={`relative z-10 text-[8px] px-1.5 py-0.5 rounded transition-all duration-300 ${
                        isSelected
                          ? "bg-black/15 text-black font-bold"
                          : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-300"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bento-style Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Determine layout column spanning
                // Let's make top-performing stores Vorne (id 1) and TurfTown (id 7) occupy 2 columns as highlighted case studies
                const isLargeBento =
                  (project.id === 1 || project.id === 7) &&
                  selectedCategory === "All";

                if (isLargeBento) {
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => {
                        setSelectedImage(project);
                        setActiveTab("overview");
                      }}
                      className="col-span-1 md:col-span-2 relative group flex flex-col md:flex-row bg-[#08080f]/90 border border-zinc-900 rounded-2xl overflow-hidden hover:border-[#80e01a]/30 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(128,224,26,0.06)]"
                    >
                      {/* Left: Mockup frame */}
                      <div className="w-full md:w-1/2 p-4 flex items-center justify-center flex-shrink-0 bg-zinc-950/40">
                        <BrowserMockup url={project.link}>
                          <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </BrowserMockup>
                      </div>

                      {/* Right: Technical specifications block */}
                      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#80e01a]/15 border border-[#80e01a]/20 text-[#80e01a] px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">
                              CASE STUDY HIGHLIGHT
                            </span>
                            <span className="text-zinc-500 text-[10px] font-semibold">
                              {project.year}
                            </span>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors duration-300">
                            {project.name}
                          </h3>

                          <p className="text-gray-400 text-xs leading-relaxed mb-6">
                            {project.description}
                          </p>

                          {/* Graphical element inside bento card: Sparkline */}
                          {project.metrics && (
                            <div className="flex items-center gap-6 p-3 bg-zinc-950 rounded-xl border border-zinc-900/60 w-fit mb-6">
                              <div>
                                <div className="text-[8px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">
                                  {project.metrics.label}
                                </div>
                                <div className="text-sm font-black text-[#80e01a]">
                                  {project.metrics.value}
                                </div>
                              </div>
                              {project.metrics.graphData && (
                                <Sparkline data={project.metrics.graphData} />
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-zinc-900/80">
                          <div className="flex flex-wrap gap-1">
                            {(project.techStack || ["Liquid", "Tailwind"])
                              .slice(0, 3)
                              .map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[9px] bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-[#80e01a] font-bold group-hover:underline">
                            <span>Explore Case</span>
                            <FaArrowRight className="text-[9px] transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Render standard 1-column layouts based on category type
                if (project.category === "Designs") {
                  // Graphical Frame with Corner Brackets for Designs
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => {
                        setSelectedImage(project);
                        setActiveTab("overview");
                      }}
                      className="relative group bg-zinc-950/40 p-4 border border-zinc-900 rounded-2xl hover:border-[#80e01a]/30 transition-all duration-500 flex flex-col justify-between h-full"
                    >
                      {/* High-tech corner brackets */}
                      <div className="absolute top-2 left-2 text-zinc-800 select-none pointer-events-none text-xs font-mono">
                        ┌
                      </div>
                      <div className="absolute top-2 right-2 text-zinc-800 select-none pointer-events-none text-xs font-mono">
                        ┐
                      </div>
                      <div className="absolute bottom-2 left-2 text-zinc-800 select-none pointer-events-none text-xs font-mono">
                        └
                      </div>
                      <div className="absolute bottom-2 right-2 text-zinc-800 select-none pointer-events-none text-xs font-mono">
                        ┘
                      </div>

                      <div className="relative aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={project.img}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-center gap-2 mb-2">
                          <span className="text-[#80e01a] text-[8px] font-bold tracking-widest uppercase bg-[#80e01a]/10 px-2 py-0.5 rounded border border-[#80e01a]/20">
                            {project.year}
                          </span>
                          <span className="text-zinc-600 text-[9px] font-semibold uppercase">
                            {project.brand}
                          </span>
                        </div>

                        <h3 className="text-xs md:text-sm font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors truncate">
                          {project.name}
                        </h3>

                        <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Dynamic color palette for Designs */}
                        <div className="mt-auto pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {(
                              project.colors || [
                                "#000000",
                                "#ffffff",
                                "#80e01a",
                              ]
                            ).map((c) => (
                              <div
                                key={c}
                                style={{ backgroundColor: c }}
                                className="w-3.5 h-3.5 rounded-full border border-zinc-900/80 shadow"
                                title={c}
                              />
                            ))}
                          </div>

                          <span className="text-zinc-600 text-[9px] font-mono">
                            concept.dec
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Standard Web Dev / SEO Layouts
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedImage(project);
                      setActiveTab("overview");
                    }}
                    className="relative group flex flex-col justify-between bg-zinc-950/40 p-4 border border-zinc-900 rounded-2xl hover:border-[#80e01a]/30 transition-all duration-500 h-full"
                  >
                    <div className="mb-4">
                      {project.category === "SEO Optimization" ? (
                        // Standard Image for SEO, but we append dial later
                        <div className="relative aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden">
                          <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                      ) : (
                        // Browser Mockup wrapper for Shopify stores / Web Apps
                        <BrowserMockup url={project.link}>
                          <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </BrowserMockup>
                      )}
                    </div>

                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-center gap-2 mb-2">
                        <span className="text-[#80e01a] text-[8px] font-bold tracking-widest uppercase bg-[#80e01a]/10 px-2 py-0.5 rounded border border-[#80e01a]/20">
                          {project.year}
                        </span>
                        <span className="text-zinc-600 text-[9px] font-semibold uppercase">
                          {project.brand}
                        </span>
                      </div>

                      <h3 className="text-xs md:text-sm font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors truncate">
                        {project.name}
                      </h3>

                      <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Graphical elements inside standard cards */}
                      <div className="mt-auto">
                        {project.seoValue ? (
                          <div className="mb-3">
                            <RadialGauge value={project.seoValue} />
                          </div>
                        ) : (
                          project.metrics && (
                            <div className="flex items-center justify-between p-2.5 bg-zinc-950 rounded-xl border border-zinc-900/60 mb-3">
                              <div>
                                <div className="text-[8px] text-zinc-500 font-semibold uppercase tracking-wider mb-0.5">
                                  Performance Boost
                                </div>
                                <div className="text-xs font-black text-[#80e01a]">
                                  {project.metrics.value}
                                </div>
                              </div>
                              {project.metrics.graphData && (
                                <Sparkline
                                  data={project.metrics.graphData.slice(0, 5)}
                                />
                              )}
                            </div>
                          )
                        )}

                        <div className="pt-3 border-t border-zinc-900/60 flex items-center justify-between text-[9px]">
                          <span className="text-zinc-600 uppercase font-bold tracking-wide">
                            {project.category}
                          </span>

                          <div className="flex items-center gap-1 text-[#80e01a] font-bold">
                            <span>Details</span>
                            <FaArrowRight className="text-[8px] transform group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-10 md:p-16 text-center max-w-5xl mx-auto mt-24"
          >
            <div className="absolute inset-0 blueprint-grid opacity-[0.06] pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#80e01a]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#80e01a]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                Ready to scale your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80e01a] to-[#c0f283]">
                  digital footprint
                </span>
                ?
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
                Let&apos;s collaborate to translate your requirements into a{" "}
                <span className="text-[#80e01a] font-semibold">
                  high-converting digital reality
                </span>
                . We build custom applications and campaign setups optimized for
                absolute efficiency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#80e01a] to-[#60b015] hover:shadow-[0_0_20px_rgba(128,224,26,0.3)] text-black px-6 py-3.5 rounded-xl font-bold text-xs cursor-pointer transition-all duration-300"
                >
                  <span>Get Started Today</span>
                  <FaArrowRight className="text-xs ml-2" />
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-zinc-800 bg-white/[0.01] hover:bg-white/[0.04] hover:border-zinc-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs cursor-pointer transition-all duration-300"
                >
                  Explore Services
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Control Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-[#07070a]/95 border border-zinc-800/80 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(128,224,26,0.12)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-50 bg-white/5 border border-white/10 hover:bg-[#80e01a] hover:text-black p-2.5 rounded-full shadow-lg transition-all duration-300 cursor-pointer text-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <FaTimes className="text-xs" />
              </button>

              {/* Left Column: device visual mockup representation */}
              <div className="relative w-full md:w-1/2 h-[240px] md:h-auto min-h-[220px] bg-zinc-950/60 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-zinc-900/80">
                <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />

                <div className="w-full h-full relative flex items-center justify-center">
                  {selectedImage.category === "Designs" ? (
                    // Design presentation board mockup frame with corner details
                    <div className="w-full aspect-[16/10] bg-[#0c0c14] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative p-4 flex flex-col justify-between h-4/5">
                      <div className="absolute top-1.5 left-1.5 text-zinc-700 pointer-events-none text-[8px] font-mono">
                        ┌
                      </div>
                      <div className="absolute top-1.5 right-1.5 text-zinc-700 pointer-events-none text-[8px] font-mono">
                        ┐
                      </div>
                      <div className="absolute bottom-1.5 left-1.5 text-zinc-700 pointer-events-none text-[8px] font-mono">
                        └
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 text-zinc-700 pointer-events-none text-[8px] font-mono">
                        ┘
                      </div>

                      <div className="relative w-full h-[85%] rounded-lg overflow-hidden border border-zinc-900">
                        <Image
                          src={selectedImage.img}
                          alt={selectedImage.name}
                          fill
                          className="object-cover"
                          sizes="400px"
                        />
                      </div>
                      <div className="flex gap-1.5">
                        {(selectedImage.colors || ["#000", "#fff"]).map((c) => (
                          <div
                            key={c}
                            style={{ backgroundColor: c }}
                            className="w-3 h-3 rounded-full border border-black shadow-sm"
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Realistic browser layout for products/web apps
                    <div className="w-full h-5/6">
                      <BrowserMockup url={selectedImage.link}>
                        <Image
                          src={selectedImage.img}
                          alt={selectedImage.name}
                          fill
                          className="object-contain md:object-cover p-1 bg-[#030014]"
                          priority
                          sizes="(max-width: 768px) 95vw, 45vw"
                        />
                      </BrowserMockup>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Tabbed developer dashboard representation */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[55vh] md:max-h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#80e01a]/15 border border-[#80e01a]/20 text-[#80e01a] px-2.5 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase">
                      {selectedImage.category}
                    </span>
                    <span className="text-zinc-600 text-xs font-semibold tracking-wider">
                      {selectedImage.year}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mb-5">
                    {selectedImage.name}
                  </h2>

                  {/* Dashboard Tab Selector */}
                  <div className="flex border-b border-zinc-900 mb-6 gap-6 text-[10px] font-bold uppercase tracking-wider relative z-10">
                    {["overview", "metrics", "scope"].map((tab) => {
                      if (
                        tab === "metrics" &&
                        !selectedImage.metrics &&
                        !selectedImage.seoValue
                      )
                        return null;
                      const isTabActive = activeTab === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`pb-2.5 relative cursor-pointer font-bold ${isTabActive ? "text-[#80e01a]" : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                          {tab}
                          {isTabActive && (
                            <motion.div
                              layoutId="modalTabLine"
                              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#80e01a]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[160px]">
                    {activeTab === "overview" && (
                      <div className="space-y-4">
                        <p className="text-gray-400 text-xs leading-relaxed font-medium">
                          {selectedImage.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 pt-4">
                          <div className="p-2.5 rounded-xl bg-white/[0.01] border border-white/5">
                            <div className="text-[8px] font-semibold text-zinc-500 uppercase tracking-wider mb-0.5">
                              Partner Brand
                            </div>
                            <div className="text-[10px] font-bold text-white">
                              {selectedImage.brand}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white/[0.01] border border-white/5">
                            <FaStar className="text-[#FFD700] text-xs" />
                            <div>
                              <div className="text-[8px] font-semibold text-zinc-500 uppercase tracking-wider leading-none mb-1">
                                Client Review
                              </div>
                              <div className="text-[10px] font-bold text-white leading-none">
                                {selectedImage.rating} / 5.0 Rating
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "metrics" && (
                      <div className="space-y-4">
                        {selectedImage.metrics ? (
                          <>
                            <div className="p-3.5 bg-zinc-950 border border-zinc-900 rounded-xl">
                              <div className="text-[8px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                                {selectedImage.metrics.label}
                              </div>
                              <div className="text-xl font-black text-[#80e01a]">
                                {selectedImage.metrics.value}
                              </div>
                            </div>

                            {selectedImage.metrics.graphData && (
                              <div className="p-3.5 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center justify-between">
                                <div>
                                  <div className="text-[8px] text-zinc-500 uppercase tracking-widest font-semibold mb-0.5">
                                    Growth Trajectory
                                  </div>
                                  <div className="text-[10px] text-white font-bold">
                                    Dynamic Performance Trend
                                  </div>
                                </div>
                                <Sparkline
                                  data={selectedImage.metrics.graphData}
                                />
                              </div>
                            )}
                          </>
                        ) : selectedImage.seoValue ? (
                          <div className="space-y-3">
                            <div className="p-3.5 bg-zinc-950 border border-zinc-900 rounded-xl flex items-center justify-between">
                              <RadialGauge value={selectedImage.seoValue} />
                            </div>
                            <div className="p-3.5 bg-zinc-950 border border-zinc-900 rounded-xl">
                              <div className="text-[8px] text-[#80e01a] uppercase font-bold tracking-widest mb-1">
                                SEO BENCHMARK AUDIT
                              </div>
                              <p className="text-gray-500 text-[10px] leading-relaxed">
                                Our search architecture optimization achieved
                                95%+ ratings on page performance, layout shift
                                indices, and crawl efficiency metrics.
                              </p>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    )}

                    {activeTab === "scope" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {(
                            selectedImage.scope || [
                              "E-commerce Consulting",
                              "Custom UI/UX Design",
                              "Performance Optimization",
                            ]
                          ).map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                              <div className="w-4 h-4 rounded-full bg-[#80e01a]/10 border border-[#80e01a]/20 flex items-center justify-center text-[8px] text-[#80e01a]">
                                <FaCheck />
                              </div>
                              <span className="text-xs text-gray-300 font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-zinc-900">
                          <div className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                            Technologies Employed
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {(
                              selectedImage.techStack || [
                                "Next.js",
                                "React",
                                "TailwindCSS",
                              ]
                            ).map((tech, i) => (
                              <span
                                key={i}
                                className="text-[9px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-900/80 mt-6">
                  {hasLink(selectedImage) ? (
                    <motion.a
                      href={selectedImage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#80e01a] to-[#60b015] hover:shadow-[0_0_20px_rgba(128,224,26,0.3)] text-black py-3 px-6 rounded-xl font-bold text-xs cursor-pointer transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Visit Live Project</span>
                    </motion.a>
                  ) : (
                    <div className="flex-1 flex items-center justify-center gap-2 bg-zinc-900/50 border border-zinc-800 text-zinc-500 py-3 px-6 rounded-xl font-bold text-xs cursor-default select-none">
                      <span>Concept Preview</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </section>
  );
}

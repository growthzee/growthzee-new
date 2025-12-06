"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// --- Main Services Data ---
const servicesData = [
  // {
  //   id: "01",
  //   title: "Social Media Marketing",
  //   link: "/social-media-management",
  //   description:
  //     "Engage your audience and build brand loyalty with data-driven social strategies across Instagram, LinkedIn, and TikTok.",
  //   tags: ["Content Strategy", "Community Mgmt", "Influencer Marketing"],
  //   icon: (
  //     <svg
  //       viewBox="0 0 100 100"
  //       className="w-full h-full stroke-black stroke-[1.5] fill-none"
  //     >
  //       <circle cx="50" cy="50" r="45" strokeDasharray="4,4" />
  //       <line x1="50" y1="25" x2="50" y2="75" />
  //       <line x1="25" y1="50" x2="75" y2="50" />
  //     </svg>
  //   ),
  // },
  {
    id: "02",
    title: "Performance Marketing",
    link: "/performance-marketing",
    description:
      "Maximize ROI with targeted ad campaigns. We optimize every dollar spent on Meta, Google, and beyond to drive conversions.",
    tags: ["PPC", "Media Buying", "Conversion Rate Optimization"],
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-black stroke-[1.5] fill-none"
      >
        <circle cx="35" cy="40" r="25" />
        <circle cx="65" cy="40" r="25" />
        <circle cx="50" cy="65" r="25" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Ecommerce Management",
    link: "/ecommerce-management",
    description:
      "Scale your online store with full-service management. From inventory planning to customer experience, we handle the operations.",
    tags: ["Shopify Experts", "Inventory Ops", "CX Strategy"],
    icon: (
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full stroke-black stroke-[1.5] fill-none"
      >
        <rect x="2" y="2" width="96" height="56" />
        <path d="M2,58 C2,2 98,2 98,58" />
        <line x1="61" y1="2" x2="61" y2="58" />
        <line x1="61" y1="38" x2="98" y2="38" />
        <path d="M61,38 C61,58 80,58 80,38" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Website & Web Design",
    link: "/website-design",
    description:
      "Create a stunning digital presence. We design high-performance websites that tell your brand story and convert visitors.",
    tags: ["UX/UI Design", "Next.js Development", "Responsive Design"],
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-black stroke-[1.5] fill-none"
      >
        <circle cx="50" cy="50" r="6" />
        <circle cx="20" cy="80" r="5" />
        <circle cx="80" cy="20" r="5" />
        <circle cx="80" cy="80" r="5" />
        <circle cx="20" cy="20" r="5" />
        <line x1="50" y1="50" x2="20" y2="80" />
        <line x1="50" y1="50" x2="80" y2="20" />
        <line x1="50" y1="50" x2="80" y2="80" />
        <line x1="50" y1="50" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "SEO Optimization",
    link: "/seo",
    description:
      "Climb the rankings and stay there. Our technical and content SEO strategies drive sustainable organic traffic growth.",
    tags: ["Technical SEO", "Link Building", "Content Marketing"],
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full stroke-black stroke-[1.5] fill-none"
      >
        <circle cx="50" cy="50" r="8" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2="50"
            y2="10"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </svg>
    ),
  },
  // {
  //   id: "06",
  //   title: "Lead Generation",
  //   link: "/lead-generation",
  //   description:
  //     "High‑intent, qualified leads for real estate and other high‑ticket services using Meta and Google ads.",
  //   tags: ["Real Estate", "High Ticket", "Funnel Strategy"],
  //   icon: (
  //     <svg
  //       viewBox="0 0 100 100"
  //       className="w-full h-full stroke-black stroke-[1.5] fill-none"
  //     >
  //       {/* Funnel Shape */}
  //       <polygon points="20,20 80,20 55,65 55,90 45,90 45,65" />
  //       <line x1="20" y1="20" x2="80" y2="20" />
  //       {/* Dotted path for flow */}
  //       <circle cx="50" cy="35" r="2" fill="black" stroke="none" />
  //       <circle cx="50" cy="45" r="2" fill="black" stroke="none" />
  //       <circle cx="50" cy="55" r="2" fill="black" stroke="none" />
  //     </svg>
  //   ),
  // },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#80e01a] selection:text-black">
      <Navbar />

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#80e01a]/10 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#80e01a]/5 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/5 text-[#80e01a] text-xs font-bold tracking-[0.2em] uppercase"
          >
            • Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.95]"
          >
            Digital solutions that <br className="hidden md:block" />
            <span className="text-[#80e01a] italic font-serif font-light relative">
              accelerate
              <svg
                className="absolute w-full h-3 bottom-0 left-0 text-[#80e01a]/30 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just run ads; we build ecosystems. From acquisition to
            retention, our holistic approach ensures sustainable scaling for
            ambitious brands.
          </motion.p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* --- CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-12 md:p-24 text-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#80e01a]/5 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight relative z-10">
            Ready to scale <span className="text-[#80e01a]">your brand?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Stop guessing and start growing. Schedule a free strategy call with
            our team today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-10 py-5 bg-[#80e01a] text-black text-lg font-bold uppercase rounded-full shadow-[0_0_40px_rgba(128,224,26,0.4)] hover:shadow-[0_0_60px_rgba(128,224,26,0.6)] transition-all duration-300"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

// --- Individual Service Card Component ---
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={() => (window.location.href = service.link)}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 h-full flex flex-col overflow-hidden hover:border-[#80e01a]/50 transition-colors duration-500 cursor-pointer"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#80e01a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Row: Icon & Number */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#80e01a] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(128,224,26,0.3)]">
          {service.icon}
        </div>
        <span className="text-5xl font-serif italic text-white/5 font-black group-hover:text-[#80e01a]/10 transition-colors duration-500 absolute right-0 top-0">
          {service.id}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#80e01a] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-8 flex-1 text-sm">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10 group-hover:border-[#80e01a]/20 transition-colors duration-500">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/5 group-hover:border-[#80e01a]/30 group-hover:text-[#80e01a] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

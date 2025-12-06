"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  Minus,
  PenTool,
  Plus,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  XCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";

// --- Data ---
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Shopify",
  "WordPress",
  "MongoDB",
  "AWS",
  "Tailwind",
  "Framer Motion",
  "Vercel",
];

const devServices = [
  {
    id: "shopify",
    title: "Shopify Storefronts",
    subtitle: "Conversion-Focused Ecommerce",
    desc: "We create quick-loading Shopify sites that convert well - using tailored designs, seamless connections, while focusing on mobile speed.",
    features: [
      "Custom Theme Development",
      "App Integration",
      "CRO Optimization",
    ],
    icon: <ShoppingBag className="w-8 h-8 text-black" />,
    color: "bg-[#95BF47]", // Shopify Greenish
    textColor: "text-black",
  },
  {
    id: "nextjs",
    title: "Next.js Development",
    subtitle: "Blazing-Fast SEO Engines",
    desc: "Fast websites today use server-side tricks so they show up fast in search results while loading right away. They run quick thanks to smart tech behind the scenes that helps them pop open instantly.",
    features: ["Server-Side Rendering", "Top-tier SEO", "Vercel Deployment"],
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "bg-black",
    border: "border-white/20",
    textColor: "text-white",
  },
  {
    id: "mern",
    title: "MERN Stack Apps",
    subtitle: "Custom Web Applications",
    desc: "We create strong, growing apps - like SaaS tools, dashboards, or online hubs - with MongoDB, Express, React, but also Node.",
    features: ["Full-Stack Logic", "Real-time Data", "API Development"],
    icon: <Database className="w-8 h-8 text-[#80e01a]" />,
    color: "bg-[#111]",
    border: "border-[#80e01a]/50",
    textColor: "text-white",
  },
  {
    id: "web-app",
    title: "Web App Development",
    subtitle: "Modern Web Systems",
    desc: "We build quick, safe, web tools that fit your company - simple to run, smooth-working, yet ready to expand over time.",
    features: ["Custom Features", "Security Hardening", "Speed Optimization"],
    icon: <Layout className="w-8 h-8 text-white" />,
    color: "bg-[#21759b]", // WP Blue
    textColor: "text-white",
  },
];

const hostingFeatures = [
  {
    icon: <Rocket />,
    title: "Turbo Speed",
    desc: "NVMe SSDs work with LiteSpeed machines - loads super quick.",
  },
  {
    icon: <ShieldCheck />,
    title: "Ironclad Security",
    desc: "Get free SSL plus regular malware checks along with automatic DDoS defense.",
  },
  {
    icon: <Globe />,
    title: "99.9% Uptime",
    desc: "Fault-tolerant web hubs keep your page running nonstop.",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    desc: "We get what you do, your targets - also who uses it - before we begin anything.",
    icon: <Search className="text-black" />,
  },
  {
    id: "02",
    title: "Architect",
    desc: "We're setting up the database, picking a solid tech combo, while sketching out smooth interface designs.",
    icon: <PenTool className="text-black" />,
  },
  {
    id: "03",
    title: "Construct",
    desc: "We craft solid code, while putting together the front end along with the back end - making sure everything’s tested well.",
    icon: <Code2 className="text-black" />,
  },
  {
    id: "04",
    title: "Deploy",
    desc: "We got the server ready, then hooked up the domain - after that, we did SEO and quality tests before going live.",
    icon: <Rocket className="text-black" />,
  },
];

export default function WebsiteDesign() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#80e01a] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <header className="relative pt-40 pb-20 lg:pt-60 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#80e01a] rounded-full blur-[200px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Code2 size={16} className="text-[#80e01a]" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
              Digital Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              DIGITAL EMPIRES.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
          >
            From high-conversion Shopify stores to complex custom Web
            Applications. We code the infrastructure that powers your business
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-[#80e01a] text-black font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(128,224,26,0.3)]">
              Start Project <ArrowRight size={16} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </header>

      {/* --- Tech Stack Marquee --- */}
      <section className="py-8 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee-tech">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl font-bold text-white/20 uppercase tracking-widest flex items-center gap-4 font-mono"
            >
              {tech} <span className="text-[#80e01a] text-sm">●</span>
            </span>
          ))}
        </div>
        <style jsx>{`
          .animate-marquee-tech {
            animation: marquee 30s linear infinite;
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

      {/* --- Development Services --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#80e01a]">Codebase.</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            We don't use templates. We engineer solutions tailored to your
            specific business logic and scalability needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-8 md:p-12 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 ${
                service.color
              } ${service.border ? `border ${service.border}` : ""}`}
            >
              {/* Icon Background Effect */}
              <div className="absolute -right-10 -bottom-10 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                <div className="scale-[5]">{service.icon}</div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 bg-white/10 backdrop-blur-md`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-3xl font-bold mb-2 ${service.textColor}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-bold uppercase tracking-widest mb-6 opacity-70 ${service.textColor}`}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className={`text-lg leading-relaxed mb-8 opacity-80 ${service.textColor}`}
                  >
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div
                    className={`w-full h-px mb-6 opacity-20 ${
                      service.textColor === "text-black"
                        ? "bg-black"
                        : "bg-white"
                    }`}
                  ></div>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-2 font-medium ${service.textColor}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            service.textColor === "text-black"
                              ? "bg-black"
                              : "bg-[#80e01a]"
                          }`}
                        ></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Comparison Section (New) --- */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stop Using <br />
              <span className="text-gray-500 line-through decoration-[#80e01a] decoration-4">
                Templates.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Generic themes are bloated, insecure, and look like everyone else.
              Custom engineering is the only way to stand out and rank high.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 border border-white/10 rounded-xl bg-white/5 opacity-50">
                <XCircle className="text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Template Site</h4>
                  <p className="text-sm text-gray-500">
                    Slow load times due to unused code bloat. Security
                    vulnerabilities from excessive plugins.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 border border-[#80e01a] rounded-xl bg-[#80e01a]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#80e01a] text-black text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                  Our Standard
                </div>
                <CheckCircle2 className="text-[#80e01a] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">
                    Growthzee Architecture
                  </h4>
                  <p className="text-sm text-gray-400">
                    Hand-coded for 100/100 Lighthouse scores. Hardened security
                    and infinite scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] rounded-3xl p-8 border border-white/10 relative">
            {/* Code Comparison Visual */}
            <div className="font-mono text-xs md:text-sm overflow-hidden">
              <div className="mb-2 text-gray-500">// Spaghetti Code (Them)</div>
              <div className="text-red-400/50 mb-8 blur-[1px]">
                {`<div><div class="wrapper"><div class="inner-wrapper"><div class="plugin-container">...</div></div></div></div>`}
              </div>

              <div className="mb-2 text-[#80e01a]">
                // Clean Architecture (Us)
              </div>
              <div className="text-gray-300">
                <span className="text-purple-400">export default</span>{" "}
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-300">Hero</span>() {"{"} <br />
                &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-red-400">motion.div</span>{" "}
                <span className="text-orange-300">initial</span>=
                <span>{`{{ opacity: 0 }}`}</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-red-400">h1</span>&gt;High
                Performance&lt;/<span className="text-red-400">h1</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
                <span className="text-red-400">motion.div</span>&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section (New) --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-[#80e01a]">Build Protocol.</span>
          </h2>
          <p className="text-gray-400">How we go from concept to deployment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connecting Line */}
              {i !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-white/10 z-0"></div>
              )}

              <div className="relative z-10 bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-[#80e01a] transition-colors duration-300 h-full">
                <div className="w-16 h-16 bg-[#111] rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#80e01a] transition-colors duration-300">
                  <span className="group-hover:text-black transition-colors duration-300">
                    {step.icon}
                  </span>
                </div>
                <div className="text-[#80e01a] font-mono text-sm mb-2 opacity-50">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Hosting & Infrastructure --- */}
      <section className="py-24 px-6 lg:px-16 bg-[#0a0a0a] border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#80e01a]/30 bg-[#80e01a]/5 mb-6">
              <Server size={14} className="text-[#80e01a]" />
              <span className="text-[#80e01a] text-xs font-bold uppercase">
                Managed Hosting
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We don't just create it
              <br />
              instead <span className="text-[#80e01a]">we keep it </span>{" "}
              running.
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Quit stressing over crashes, laggy pages, or messed-up servers.
              Your hosted site runs quick, stays safe, yet remains up all the
              time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {hostingFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-[#80e01a]">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual / Interactive Element */}
          <div className="relative h-[500px] bg-[#111] rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Server Rack Visual */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(128,224,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(128,224,26,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <motion.div
              style={{ rotate }}
              className="relative z-10 w-64 h-64 border-2 border-[#80e01a]/30 rounded-full flex items-center justify-center"
            >
              <div className="absolute inset-0 border-t-2 border-[#80e01a] rounded-full animate-spin-slow"></div>
              <Cpu size={64} className="text-[#80e01a]" />
            </motion.div>

            <div className="absolute bottom-10 left-10 right-10 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#80e01a] animate-pulse"></div>
                <span className="text-xs font-mono text-[#80e01a]">
                  SYSTEM STATUS: OPERATIONAL
                </span>
              </div>
              <span className="text-xs font-mono text-gray-500">
                LATENCY: 12ms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Mobile Optimization Section --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="bg-[#111] rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 border border-white/5">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mobile First. <br />
              <span className="text-gray-500">
                Because 70% of traffic is small screen.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We design for the thumb, not just the mouse. Your website will
              look and function flawlessly on every device, ensuring you capture
              every mobile customer.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                <Smartphone className="text-[#80e01a]" />
                <div>
                  <h4 className="font-bold text-white">
                    Responsive Touchpoints
                  </h4>
                  <p className="text-sm text-gray-500">
                    Buttons sized for fingers, not cursors.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                <Zap className="text-[#80e01a]" />
                <div>
                  <h4 className="font-bold text-white">Optimized Images</h4>
                  <p className="text-sm text-gray-500">
                    Next-gen formats for instant mobile loading.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[550px] bg-black border-8 border-[#222] rounded-[3rem] shadow-2xl overflow-hidden"
            >
              {/* Mock Mobile Screen */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-[#050505] p-4 pt-12 flex flex-col gap-4 opacity-80">
                <div className="w-full h-32 bg-[#80e01a]/10 rounded-xl border border-[#80e01a]/20 flex items-center justify-center">
                  <span className="text-[#80e01a] font-bold text-xl">
                    Growthzee
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2 h-24 bg-white/5 rounded-lg"></div>
                  <div className="w-1/2 h-24 bg-white/5 rounded-lg"></div>
                </div>
                <div className="w-full h-12 bg-[#80e01a] rounded-full mt-auto mb-4"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section (New) --- */}
      <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Who owns the code after the project is done?"
            answer="The code ownership goes to you. We, as a top digital marketing agency and best digital marketing company, do not keep any code ownership with us after the final payment; rather, we transfer 100% ownership to you."
          />
          <FAQItem
            question="Will my site be easy to edit?"
            answer="Certainly. We create user-friendly dashboards as a part of our best digital marketing services so that your team will be able to update content without any difficulty."
          />
          <FAQItem
            question="Do you provide maintenance?"
            answer="Yes, we are glad to. Our digital marketing agency has on offer monthly care plans that include updates, content changes, and 24/7 monitoring."
          />
          <FAQItem
            question="How long does a typical build take?"
            answer="Generally, corporate sites are done in 4–6 weeks. The timeline for advanced web apps or e-commerce projects is 8–12 weeks, depending on the features, and this is all backed up by our expert digital marketing ​‍​‌‍​‍‌services."
          />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            READY TO <span className="text-[#80e01a]">UPGRADE?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Whether you need a simple WordPress blog or a complex MERN stack
            application, we have the code to make it happen.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto px-10 py-4 bg-[#80e01a] text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
              Get A Quote
            </button>
            <button className="w-full md:w-auto px-10 py-4 bg-[#111] text-white border border-white/10 font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors duration-300">
              See Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Helper Component for FAQ ---
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

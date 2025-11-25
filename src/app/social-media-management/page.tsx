"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Check,
  ChevronDown,
  MessageCircle,
  PenTool,
  Quote,
  Search,
  Share2,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

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

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="relative pl-12 pb-12 last:pb-0 border-l border-white/10 last:border-0">
    <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-full bg-[#111] border border-[#80e01a] flex items-center justify-center text-[#80e01a] shadow-[0_0_15px_rgba(128,224,26,0.2)] z-10">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#80e01a]/30 transition-colors duration-300">
    <div className="text-[#80e01a]">
      <Quote className="w-8 h-8 fill-current opacity-50" />
    </div>
    <p className="text-gray-300 italic leading-relaxed">
      "{testimonial.quote}"
    </p>
    <div className="mt-auto flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-bold text-white">{testimonial.author}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

const RecentWorkCard = ({ work }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
    <img
      src={work.image}
      alt={work.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <p className="text-[#80e01a] text-xs font-bold tracking-widest uppercase mb-2">
        {work.category}
      </p>
      <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
        <p className="text-gray-300 text-sm pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {work.result}
        </p>
      </div>
    </div>
  </div>
);

// --- Data ---

const offerings = [
  {
    title: "Strategy & Planning",
    description:
      "We analyze your audience and competitors to build a roadmap that cuts through the noise. No guesswork, just data-backed direction.",
    icon: <Share2 className="w-6 h-6 text-black" />,
  },
  {
    title: "Content Creation",
    description:
      "From thumb-stopping Reels to high-value carousel posts. We produce creative assets that tell your brand story and drive engagement.",
    icon: <PenTool className="w-6 h-6 text-black" />,
  },
  {
    title: "Community Management",
    description:
      "Building a loyal following requires active listening. We manage your DMs, comments, and engagement to foster a real community.",
    icon: <MessageCircle className="w-6 h-6 text-black" />,
  },
  {
    title: "Influencer Campaigns",
    description:
      "Leverage authority by partnering with the right voices. We handle outreach, negotiation, and management of influencer partnerships.",
    icon: <Users className="w-6 h-6 text-black" />,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Transparent monthly reports that show exactly what's working. We track reach, engagement rate, and conversion metrics.",
    icon: <BarChart3 className="w-6 h-6 text-black" />,
  },
];

const benefits = [
  "Consistent Brand Voice across all platforms.",
  "High-Quality Content that resonates with your audience.",
  "Data-Driven Decisions based on real-time analytics.",
  "Increased Engagement and community growth.",
  "Time Saving so you can focus on running your business.",
];

const faqs = [
  {
    question: "Which platforms do you specialize in?",
    answer:
      "We specialize in Instagram, TikTok, LinkedIn, Facebook, and Pinterest. We tailor our strategy based on where your target audience is most active.",
  },
  {
    question: "Do you create the content or do we provide it?",
    answer:
      "We can do both! We offer full-service content creation (graphics, reels, copy) or we can work with assets you provide to curate a cohesive feed.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We look at key metrics aligned with your goals: Engagement Rate, Reach, Website Clicks, and Conversion/Sales. We provide detailed monthly reports.",
  },
  {
    question: "What is the minimum contract length?",
    answer:
      "We typically recommend a 3-month minimum engagement to allow enough time for strategy implementation, testing, and optimization to show significant results.",
  },
];

const processSteps = [
  {
    title: "Discovery & Audit",
    description:
      "We dive deep into your current presence, audit your competitors, and identify your ideal customer persona.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Strategy Development",
    description:
      "We craft a bespoke content pillars, visual identity, and engagement strategy tailored to your business goals.",
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: "Execution & Management",
    description:
      "Our team handles posting, community engagement, and daily management to keep your brand active and growing.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Optimization & Scale",
    description:
      "We analyze performance data monthly to refine our approach and scale what's working best.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
];

const testimonials = [
  {
    quote:
      "GrowthZee completely transformed our Instagram presence. We went from 2k to 50k followers in just 6 months, and our sales have doubled.",
    author: "Sarah Jenkins",
    role: "CEO, Glow Cosmetics",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "The content they produce is top-notch. It perfectly captures our brand voice. The team is responsive, creative, and data-driven.",
    author: "Michael Chen",
    role: "Marketing Director, TechFlow",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "Their influencer campaign management saved us so much time and delivered incredible ROI. Highly recommend for any e-comm brand.",
    author: "Emily Davis",
    role: "Founder, EcoStyle",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
  },
];

const recentWork = [
  {
    title: "Urban Outfitters Campaign",
    category: "Influencer Marketing",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    result: "3.5M Reach • 12% Engagement Rate",
  },
  {
    title: "TechStart Launch",
    category: "Social Strategy",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    result: "10k New Followers • 5x Lead Gen",
  },
  {
    title: "FreshFoods Rebrand",
    category: "Content Creation",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    result: "Viral Reel Series • 200% Sales Uplift",
  },
];

export default function SocialMediaMarketing() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#80e01a] selection:text-black">
      <Navbar />

      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#80e01a]/10 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#80e01a]/5 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* --- Hero Section --- */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#80e01a]/30 bg-[#80e01a]/10 text-[#80e01a] text-xs font-bold tracking-widest uppercase"
          >
            <div className="w-2 h-2 rounded-full bg-[#80e01a] animate-pulse"></div>
            Social Media Marketing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
          >
            Amplify your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] to-white">
              brand voice.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We don't just post content; we build communities. Turn your social
            media channels into powerful engines for brand awareness and
            customer loyalty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#80e01a] text-black font-bold rounded-full hover:bg-[#80e01a]/90 transition-all shadow-[0_0_20px_rgba(128,224,26,0.3)]">
              Get a Strategy Audit
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* --- Content Split: Offerings & Benefits --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Left: What We Do (Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-1 bg-[#80e01a] rounded-full"></span>
              What We Deliver
            </motion.h2>

            {offerings.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#80e01a]/50 transition-colors duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#80e01a] flex items-center justify-center shadow-[0_0_20px_rgba(128,224,26,0.2)] text-black">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Why Choose Us (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              {/* Why Us Card */}
              <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                {/* Decorative Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#80e01a]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="text-2xl font-bold mb-8">Why GrowthZee?</h3>
                <ul className="space-y-6">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#80e01a] flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-[#80e01a]" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Card */}
              <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8">Our Process</h3>
                <div className="space-y-0">
                  {processSteps.map((step, idx) => (
                    <ProcessStep key={idx} {...step} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Recent Work Section --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Recent Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how we've helped other brands achieve explosive growth through
              social media.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentWork.map((work, idx) => (
              <RecentWorkCard key={idx} work={work} />
            ))}
          </div>
        </div>

        {/* --- Testimonials Section --- */}
        <div className="mb-32 bg-[#111] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* --- Platforms Section --- */}
        <div className="border-t border-white/10 pt-20 mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Platforms We Master
            </h2>
            <p className="text-gray-400">
              We optimize content specifically for the algorithms of each major
              platform.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
            {[
              "Instagram",
              "TikTok",
              "LinkedIn",
              "Facebook",
              "Twitter/X",
              "Pinterest",
              "YouTube",
            ].map((platform) => (
              <div
                key={platform}
                className="px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:border-[#80e01a] hover:text-[#80e01a] hover:bg-[#80e01a]/10 transition-colors cursor-default"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
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
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to go viral?
          </h2>
          <p className="text-gray-400 mb-10">
            Let's build a social presence that drives real business results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#80e01a] text-black text-lg font-bold uppercase rounded-full shadow-[0_0_40px_rgba(128,224,26,0.4)] hover:shadow-[0_0_60px_rgba(128,224,26,0.6)] transition-all duration-300"
          >
            Start Your Campaign
          </motion.button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

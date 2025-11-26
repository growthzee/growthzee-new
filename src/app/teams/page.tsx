"use client";

import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Coffee,
  Globe,
  Heart,
  Laptop,
  Linkedin,
  Quote,
  Users,
  Zap,
} from "lucide-react";

// --- Team Member Data ---
const teamMembers = [
  {
    id: 1,
    name: "Ashutosh Bhaskar",
    role: "CEO & Founder",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980611/1746397814880_kq2o2l.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980861/Screenshot_2025-11-24_161043_b7qiwe.png",
    linkedin: "https://www.linkedin.com/in/ashutosh864/",
  },
  {
    id: 2,
    name: "Pankaj Chandrawanshi",
    role: "Creative Head, Graphic Designer, 3D Artist",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985704/pankaj_first_image_p8hjne.png",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985706/pankaj_second_image_zdjkls.png",
    linkedin:
      "https://www.linkedin.com/in/pankaj-kumar-chandrawanshi-672918316/",
  },
  {
    id: 3,
    name: "Ayan Pakhira",
    role: "Technical Head & Full-Stack Developer",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763984233/20251105_124328_bivwqf.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763981200/20251109_092137_za1m9h.jpg",
    linkedin: "https://www.linkedin.com/in/ayan-pakhira-93a18baa/",
  },
  {
    id: 4,
    name: "Ishika Tyagi",
    role: "HR Recuiter Team",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764052727/WhatsApp_Image_2025-11-25_at_11.43.59_AM_dlghvl.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764052727/WhatsApp_Image_2025-11-25_at_11.49.05_AM_rvnxy5.jpg",
    linkedin: "https://www.linkedin.com/in/ishika-tyagi23",
  },

  {
    id: 5,
    name: "Priya Das",
    role: "Social Media Planner",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980615/PXL_20251110_150432814.RAW-01.COVER_z39eqv.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980616/PXL_20251110_150226289.RAW-01.COVER_ynh2tm.jpg",
    linkedin: "https://www.linkedin.com/in/daspriya2711/",
  },
  {
    id: 6,
    name: "Ashee Agrawal",
    role: "SEO executive",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763982699/IMG_7726_plt4ab_1_yzlb88.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763981966/IMG_8081_uif8wx.jpg",
    linkedin: "https://www.linkedin.com/in/ashee-agrawal-36805622b",
  },
  {
    id: 7,
    name: "Arindam Biswas",
    role: "Senior Video Editor",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980612/IMG_20251115_104356_kb8vuk.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980613/IMG_20251116_160414_1_h0wura.jpg",
    linkedin: "https://www.linkedin.com/in/arindam-biswas-272813243",
  },
  {
    id: 8,
    name: "Sourav Bharti",
    role: "E-commerce Expert",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763982671/IMG_1087_po8f1q.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763982672/IMG_3222_ljfs1d.jpg",
    linkedin: "https://www.linkedin.com/in/sourav-bharti-0b968a179",
  },
  {
    id: 9,
    name: "Vivek Naik",
    role: "Senior Graphic Designer",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763984379/1702194090139-01_uzstul.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763984379/1705659569708-01_s6dfji.jpg",
    linkedin: "https://www.linkedin.com/in/vivek-naik-2a065a2a2",
  },
  {
    id: 10,
    name: "Ritik Singh",
    role: "Senior Graphic Designer ",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763984877/1001486856_zp0yad.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763984879/IMG_20251124_160605_hqxu37.png",
    linkedin: "https://www.linkedin.com/in/ritik-kumar-85828a343",
  },
  {
    id: 11,
    name: "Hamir Thapliya",
    role: "Video Editor",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764136698/341140393_141784228855439_6958175145674348213_n_un42ds.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764136697/WhatsApp_Image_2025-11-25_at_13.52.57_bzmct6.jpg",
    linkedin: "#",
  },
  {
    id: 12,
    name: "Ankit Patel",
    role: "Junior Video Editor",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980650/Screenshot_20251124_144632_Gallery_ofobxl.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763980650/20250320_063646_iknen0.jpg",
    linkedin: "#",
  },
  {
    id: 13,
    name: "Om Prakash",
    role: "Junior Video Editor",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985886/om_first_image_kslqfu.png",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985885/om_second_image_dni6ki.png",
    linkedin: "https://www.linkedin.com/in/om-prakash-927323277",
  },
  {
    id: 14,
    name: "Damini Panjawani",
    role: "Seo Intern",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763988388/IMG_20251124_172450_f9iggy.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763988388/IMG-20250309-WA0004_p91ygc.jpg",
    linkedin: "https://www.linkedin.com/in/damini-panjwani-80b138370",
  },
  {
    id: 15,
    name: "Shruti Barman",
    role: "Graphic Designer Intern",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764047443/WhatsApp_Image_2025-11-24_at_8.29.24_PM_vjgvok.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1764047444/IMG-20251124-WA0037_uuzrvg.jpg",
    linkedin: "https://www.linkedin.com/in/shruti-barman-a9b73439a",
  },
  {
    id: 16,
    name: "Mahi Sharma",
    role: "Graphic Designer Intern",
    image1:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985348/IMG-20250602-WA0062_phc2jx.jpg",
    image2:
      "https://res.cloudinary.com/doy1iucnw/image/upload/v1763985349/IMG-20250830-WA0253_nzw3rs.jpg",
    linkedin: "https://www.linkedin.com/in/mahi-sharma-855ba3278",
  },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
];

export default function Teams() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#80e01a] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <header className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#80e01a] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">
              Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            MEET THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#80e01a] to-white/40">
              EXPERTS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-12"
          >
            A collective of creative minds and technical wizards dedicated to
            your success. We bring passion, expertise, and innovation to every
            project.
          </motion.p>
        </div>
      </header>

      {/* --- Team Grid Section --- */}
      <section className="py-20 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem]"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden bg-[#111]">
                <motion.img
                  src={member.image1}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <motion.img
                  src={member.image2}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Overlay and Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#80e01a] text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300"
                  >
                    Visit Profile <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {/* Name and Role (Always Visible) */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-10 transition-all duration-500 group-hover:bottom-16">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#80e01a] font-medium tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Founder's Vision Section --- */}
      <section className="py-24 bg-[#111] border-y border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#80e01a]/5 skew-x-12 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Area */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10"
              >
                <img
                  src="https://res.cloudinary.com/doy1iucnw/image/upload/v1763980611/1746397814880_kq2o2l.jpg"
                  alt="Ashutosh Bhaskar - Founder & CEO"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
                  <span className="text-[#80e01a] font-bold uppercase tracking-widest text-sm">
                    The Founder
                  </span>
                </div>
              </motion.div>
              {/* Decorative dots */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Quote className="text-[#80e01a] w-12 h-12 mb-8 opacity-50" />
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
                OBSESSED WITH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80e01a] to-white">
                  IMPACT.
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                &quot;I founded Growthzee with a simple belief: digital agencies
                shouldn&apos;t just deliver assets; they should deliver revenue.
                We aren&apos;t here to just build pretty websites. We are here
                to build engines of growth that allow visionary companies to
                dominate their markets.&quot;
              </p>
              <div>
                <h4 className="text-white text-xl font-bold">
                  Ashutosh Bhaskar
                </h4>
                <p className="text-gray-500 uppercase tracking-widest text-sm mt-1">
                  CEO & Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#80e01a]">DNA.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What drives us to push boundaries every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Speed Matters",
              text: "We move fast and break things, but we fix them even faster. In digital, slow is dead.",
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Client Obsession",
              text: "We treat your business like it's our own. Your P&L is our scorecard.",
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Radical Truth",
              text: "No fluff. No jargon. Just honest data and transparent strategies that work.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 hover:border-[#80e01a] transition-colors duration-300 group"
            >
              <div className="w-16 h-16 bg-[#111] rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-[#80e01a] group-hover:text-black transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Culture Gallery (NEW) --- */}
      <section className="py-20 bg-[#111] border-y border-white/5 overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            More Than <span className="text-[#80e01a]">Just Work.</span>
          </h2>
          <p className="text-gray-400">
            Behind the screens, we are travelers, gamers, and creators.
          </p>
        </div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...cultureImages, ...cultureImages].map((img, i) => (
            <div
              key={i}
              className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10"
            >
              <img
                src={img}
                alt="Culture"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          .animate-marquee {
            animation: marquee 40s linear infinite;
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

      {/* --- Perks & Benefits (NEW) --- */}
      <section className="py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why <span className="text-[#80e01a]">We Stay.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We take care of our people so they can take care of the work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Globe />,
              title: "Remote First",
              desc: "Work from anywhere. Bali, Berlin, or your bedroom.",
            },
            {
              icon: <Laptop />,
              title: "Top Gear",
              desc: "Latest MacBooks and 4K monitors for everyone.",
            },
            {
              icon: <Coffee />,
              title: "Unlimited PTO",
              desc: "We trust you to manage your time and energy.",
            },
            {
              icon: <BookOpen />,
              title: "Learning Budget",
              desc: "$2000/yr stipend for courses and conferences.",
            },
          ].map((perk, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:bg-[#111] transition-colors"
            >
              <div className="text-[#80e01a] mb-4">{perk.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-gray-400">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Global Stats (NEW) --- */}
      <section className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
              15+
            </h3>
            <p className="text-[#80e01a] text-sm font-bold uppercase tracking-widest">
              Countries
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
              100%
            </h3>
            <p className="text-[#80e01a] text-sm font-bold uppercase tracking-widest">
              Remote
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
              4.9
            </h3>
            <p className="text-[#80e01a] text-sm font-bold uppercase tracking-widest">
              Glassdoor
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
              24/7
            </h3>
            <p className="text-[#80e01a] text-sm font-bold uppercase tracking-widest">
              Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* --- Join Us CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#80e01a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tight leading-[0.9]">
              BUILD THE FUTURE <br /> WITH US.
            </h2>
            <p className="text-black/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              We are always looking for extraordinary talent. If you&apos;re
              ready to do the best work of your life, let&apos;s talk.
            </p>
            <button className="px-10 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl flex items-center gap-2 mx-auto">
              View Open Roles <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

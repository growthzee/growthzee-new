"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaEye,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";

// 1. Updated Interface to include 'link'
interface Portfolio {
  id: number;
  name: string;
  img: string;
  brand: string;
  category?: string;
  rating?: number;
  year?: string;
  description?: string;
  link: string; // Added link property
}

// 2. Updated Data with links
const PortfolioData: Portfolio[] = [
  {
    id: 1,
    name: "Vorne Perfmes",
    img: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764592233/Screenshot_2025-12-01_at_18-00-23_Vorne_Affordable_Luxury_Perfumes_from_India_d5orfb.png",
    brand: "Vorne",
    category: "Shopify Store",
    rating: 5.0,
    year: "2025",
    description:
      "A Shopify store for premium perfumes with a sleek design and seamless user experience.",
    link: "https://vorne.in", // Example link
  },
  {
    id: 2,
    name: "Kerala Secrets",
    img: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764592670/Screenshot_2025-12-01_at_18-07-41_Kerala_Secrets_-_A_Beauty_Legacy_from_the_Lands_of_Kerala_bd4vjp.png",
    brand: "Kerala Secrets",
    category: "Shopify Store",
    rating: 4.9,
    year: "2025",
    description:
      "A beauty and wellness Shopify store inspired by traditional Kerala remedies.",
    link: "https://keralasecrets.com", // Replace with actual link
  },
  {
    id: 3,
    name: "Fitleasure",
    img: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764592983/Screenshot_2025-12-01_at_18-11-20_Online_shopping_site_for_Latest_Activewear_Exclusively_for_Women_Fitleasure_fbzqck.png",
    brand: "Fitleasure",
    category: "Shopify Store",
    rating: 5.0,
    year: "2025",
    description:
      "A fitness and athleisure shopify store with a modern and energetic design.",
    link: "https://fitleasure.com", // Replace with actual link
  },
  {
    id: 4,
    name: "Asian Bond",
    img: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764593128/Screenshot_2025-12-01_at_18-14-12_Best_Concrete_Hardener_in_India_Asian_Bond_Manufacturer_fnnlgf.png",
    brand: "AsianBond",
    category: "Web App",
    rating: 4.8,
    year: "2025",
    description:
      "A construction materials web app with a focus on durability and reliability.",
    link: "https://www.asianbond.in/", // Replace with actual link
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
    link: "https://theinkboy.com", // Replace with actual link
  },
  {
    id: 6,
    name: "Jobzshala",
    img: "https://res.cloudinary.com/doy1iucnw/image/upload/v1764593519/Screenshot_2025-12-01_at_18-21-48_Explore_More_Jobs_Career_Opportunities_in_India_2025_Jobzshala_tx0kwd.png",
    brand: "Jobzshala",
    category: "SEO Optimization",
    rating: 5.0,
    year: "2025",
    description:
      "A job portal website optimized for SEO to connect job seekers with employers.",
    link: "https://jobzshala.com/", // Replace with actual link
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

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = PortfolioData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section className="w-full">
      <Navbar />

      {/* Hero Section with Dark Background */}
      <div className="relative w-full pt-20 min-h-screen bg-black">
        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-5 min-h-screen">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#80e01a]/10 to-[#80e01a]/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-[#80e01a]/20 to-[#80e01a]/10 rounded-full blur-xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block p-4 bg-gradient-to-r from-[#80e01a]/20 to-[#80e01a]/30 rounded-full mb-8"
            >
              <div className="text-5xl">🎨</div>
            </motion.div>

            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
              Our <span className="text-[#80e01a]">Creative Portfolio</span>{" "}
              Showcasing <span className="text-[#80e01a]">Excellence</span> in
              Digital Innovation.
            </h1>

            <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
              Explore our collection of{" "}
              <span className="text-[#80e01a]">stunning projects</span> that
              showcase our creativity, technical expertise, and commitment to
              delivering{" "}
              <span className="text-[#80e01a]">
                exceptional digital experiences
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 px-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#2F2741] to-[#2F2741] px-8 py-12 h-full transition-all duration-300 border border-transparent hover:border-t hover:border-l hover:border-[#80e01a] hover:bg-gradient-to-b hover:from-[#03001400] hover:via-[#80e01a]/20 hover:to-[#80e01a]/30 hover:shadow-[0_0_40px_rgba(128,224,26,0.4)]"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-[#A3A3A3] text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Section with Dark Background */}
      <div className="w-full bg-black py-16 px-5">
        <div className="container mx-auto">
          <div className="absolute left-10 w-24 h-24 bg-gradient-to-r from-[#80e01a]/10 to-[#80e01a]/20 rounded-full blur-xl"></div>
          <div className="absolute right-20 w-32 h-32 bg-gradient-to-r from-[#80e01a]/20 to-[#80e01a]/10 rounded-full blur-xl"></div>

          {/* Title and Button Section */}
          <div className="flex justify-between items-center sm:flex-row flex-col mb-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=""
            >
              <h2 className="lg:text-[48px] md:text-[36px] text-[28px] text-white font-medium leading-tight">
                View our projects to see our <br />{" "}
                <span className="text-[#80e01a]">quality and creativity</span>.
              </h2>
              <p className="text-[#A3A3A3] text-[16px] mt-4 max-w-lg">
                Each project represents our dedication to{" "}
                <span className="text-[#80e01a]">excellence</span>,{" "}
                <span className="text-[#80e01a]">innovation</span>, and client
                satisfaction. Discover the stories behind our most{" "}
                <span className="text-[#80e01a]">
                  successful collaborations
                </span>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 mt-6 sm:mt-0"
            >
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-[14px] uppercase bg-gradient-to-r from-[#80e01a] to-[#60b015] text-white font-bold py-4 px-8 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                GET STARTED
                <FaArrowRight className="text-sm" />
              </motion.a>

              <div className="flex items-center gap-2 text-[#A3A3A3] text-sm">
                <FaStar className="text-[#FFD700]" />
                <span>4.9/5 Client Rating</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#80e01a] to-[#60b015] text-white shadow-lg"
                    : "bg-gray-800 text-[#A3A3A3] border border-gray-700 hover:border-[#80e01a] hover:text-[#80e01a] shadow-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-[#80e01a]/50">
                    <div className="relative overflow-hidden">
                      <div className="relative w-full h-[280px]">
                        <Image
                          src={project.img || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#80e01a] px-3 py-1 rounded-full text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                          <FaStar className="text-[#FFD700] text-xs" />
                          <span className="text-xs font-semibold text-[#171717]">
                            {project.rating}
                          </span>
                        </div>
                      </div>

                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="absolute bottom-4 left-4 right-4 flex gap-3"
                          >
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              // View details keeps opening the modal
                              className="flex-1 bg-white/90 backdrop-blur-sm text-[#80e01a] py-2 px-4 rounded-xl font-semibold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                              <FaEye />
                              View Details
                            </motion.button>

                            {/* 3. Grid External Link Button */}
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} // Prevent modal from opening
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-[#80e01a]/90 backdrop-blur-sm text-white p-2 rounded-xl hover:bg-[#80e01a] transition-colors flex items-center justify-center"
                            >
                              <FaExternalLinkAlt />
                            </motion.a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#80e01a] text-xs font-semibold bg-[#80e01a]/10 px-2 py-1 rounded-md">
                          {project.year}
                        </span>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFD700] text-xs" />
                          <span className="text-xs text-[#A3A3A3]">
                            {project.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[18px] font-bold text-white mb-2 group-hover:text-[#80e01a] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-[#A3A3A3] text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-[#666666] text-[12px] uppercase font-semibold">
                          {project.brand}
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-[#80e01a] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <FaArrowRight className="text-sm" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-gradient-to-r from-[#80e01a]/5 to-[#80e01a]/10 rounded-3xl p-12 border border-[#80e01a]/20"
          >
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your{" "}
              <span className="text-[#80e01a]">Next Project</span>?
            </h3>
            <p className="text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your{" "}
              <span className="text-[#80e01a]">vision to life</span>. We&apos;re
              passionate about creating{" "}
              <span className="text-[#80e01a]">
                exceptional digital experiences
              </span>{" "}
              that drive results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#80e01a] to-[#60b015] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <FaTimes className="text-[#666666]" />
              </button>

              <div className="relative w-full h-[60vh] bg-gray-100">
                <Image
                  src={selectedImage.img || "/placeholder.svg"}
                  alt={selectedImage.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 95vw, 80vw"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-2">
                      {selectedImage.name}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#80e01a] font-semibold">
                        {selectedImage.brand}
                      </span>
                      <span className="text-[#666666]">•</span>
                      <span className="text-[#666666]">
                        {selectedImage.year}
                      </span>
                      <span className="text-[#666666]">•</span>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-[#FFD700] text-sm" />
                        <span className="text-[#666666]">
                          {selectedImage.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-[#80e01a]/10 text-[#80e01a] px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>

                <p className="text-[#666666] text-lg leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex gap-4">
                  {/* 4. Modal Live Project Button */}
                  <motion.a
                    href={selectedImage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#80e01a] to-[#60b015] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <FaExternalLinkAlt />
                    View Live Project
                  </motion.a>
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

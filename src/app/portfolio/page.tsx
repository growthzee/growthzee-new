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

interface Portfolio {
  id: number;
  name: string;
  img: string;
  brand: string;
  category?: string;
  rating?: number;
  year?: string;
  description?: string;
}

const PortfolioData: Portfolio[] = [
  {
    id: 1,
    name: "Interior Solutions Website Design",
    img: "/images/project1.png",
    brand: "Interior Pro",
    category: "Web Design",
    rating: 5.0,
    year: "2024",
    description:
      "Modern interior design website with stunning visuals and seamless user experience.",
  },
  {
    id: 2,
    name: "Dog care Website Design",
    img: "/images/project2.png",
    brand: "PetCare Plus",
    category: "Web Design",
    rating: 4.9,
    year: "2024",
    description:
      "Comprehensive pet care platform with booking system and health tracking.",
  },
  {
    id: 3,
    name: "Course Platform",
    img: "/images/project3.png",
    brand: "EduTech",
    category: "Web App",
    rating: 5.0,
    year: "2023",
    description:
      "Interactive learning platform with video streaming and progress tracking.",
  },
  {
    id: 4,
    name: "Habit Tracking Website Design",
    img: "/images/project4.png",
    brand: "HabitFlow",
    category: "Mobile App",
    rating: 4.8,
    year: "2024",
    description:
      "Beautiful habit tracking app with gamification and social features.",
  },
  {
    id: 5,
    name: "Tradilib Website Design",
    img: "/images/project5.png",
    brand: "TradiLib",
    category: "Web Design",
    rating: 4.9,
    year: "2023",
    description:
      "Traditional library management system with modern digital interface.",
  },
  {
    id: 6,
    name: "Dashboard Designs",
    img: "/images/project6.png",
    brand: "Analytics Pro",
    category: "Dashboard",
    rating: 5.0,
    year: "2024",
    description:
      "Advanced analytics dashboard with real-time data visualization.",
  },
];

const categories = ["All", "Web Design", "Web App", "Mobile App", "Dashboard"];

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
      <div className="relative w-full pt-20 min-h-screen">
        <div
          className="absolute inset-0 z-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-5 min-h-screen">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#7A41F2]/10 to-[#342582]/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-[#342582]/10 to-[#7A41F2]/10 rounded-full blur-xl"></div>

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
              className="inline-block p-4 bg-gradient-to-r from-[#7A41F2]/20 to-[#342582]/20 rounded-full mb-8"
            >
              <div className="text-5xl">🎨</div>
            </motion.div>

            <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-medium md:leading-[70px]">
              Our Creative Portfolio Showcasing Excellence in Digital
              Innovation.
            </h1>

            <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
              Explore our collection of stunning projects that showcase our
              creativity, technical expertise, and commitment to delivering
              exceptional digital experiences.
            </p>
          </motion.div>

          {/* Stats Section */}
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
                className="flex flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#2F2741] to-[#2F2741] px-8 py-12 h-full transition-all duration-300 border border-transparent hover:border-t hover:border-l hover:border-[#7A41F2] hover:bg-gradient-to-b hover:from-[#03001400] hover:via-[#342582] hover:to-[#7A41F2] hover:shadow-[0_0_40px_rgba(122,65,242,0.4)]"
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

      {/* Content Section with Light Background */}
      <div className="w-full bg-[#F8F9FA] py-20 -mx-5">
        <div className="container mx-auto px-5">
          {/* Title and Button Section */}
          <div className="flex justify-between items-center sm:flex-row flex-col mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=""
            >
              <h2 className="lg:text-[48px] md:text-[36px] text-[28px] text-[#171717] font-medium leading-tight">
                View our projects to see our <br /> quality and creativity.
              </h2>
              <p className="text-[#666666] text-[16px] mt-4 max-w-lg">
                Each project represents our dedication to excellence,
                innovation, and client satisfaction. Discover the stories behind
                our most successful collaborations.
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
                className="flex items-center gap-2 text-[14px] uppercase bg-gradient-to-r from-[#7A41F2] to-[#342582] text-white font-bold py-4 px-8 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                GET STARTED
                <FaArrowRight className="text-sm" />
              </motion.a>

              <div className="flex items-center gap-2 text-[#666666] text-sm">
                <FaStar className="text-[#FFD700]" />
                <span>4.9/5 Client Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Category Filter */}
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
                    ? "bg-gradient-to-r from-[#7A41F2] to-[#342582] text-white shadow-lg"
                    : "bg-white text-[#666666] border border-gray-200 hover:border-[#7A41F2] hover:text-[#7A41F2] shadow-sm"
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
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
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

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#7A41F2] px-3 py-1 rounded-full text-xs font-semibold">
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

                      {/* Hover Actions */}
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
                              className="flex-1 bg-white/90 backdrop-blur-sm text-[#7A41F2] py-2 px-4 rounded-xl font-semibold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                              <FaEye />
                              View Details
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-[#7A41F2]/90 backdrop-blur-sm text-white p-2 rounded-xl hover:bg-[#7A41F2] transition-colors"
                            >
                              <FaExternalLinkAlt />
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#7A41F2] text-xs font-semibold bg-[#7A41F2]/10 px-2 py-1 rounded-md">
                          {project.year}
                        </span>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#FFD700] text-xs" />
                          <span className="text-xs text-[#666666]">
                            {project.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[18px] font-bold text-[#171717] mb-2 group-hover:text-[#7A41F2] transition-colors">
                        {project.name}
                      </h3>

                      <p className="text-[#666666] text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-[#A3A3A3] text-[12px] uppercase font-semibold">
                          {project.brand}
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-[#7A41F2] opacity-0 group-hover:opacity-100 transition-all duration-300"
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-gradient-to-r from-[#7A41F2]/5 to-[#342582]/5 rounded-3xl p-12"
          >
            <h3 className="text-[#171717] text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life. We&apos;re
              passionate about creating exceptional digital experiences that
              drive results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#7A41F2] to-[#342582] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
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
                      <span className="text-[#7A41F2] font-semibold">
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
                  <span className="bg-[#7A41F2]/10 text-[#7A41F2] px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>

                <p className="text-[#666666] text-lg leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#7A41F2] to-[#342582] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    View Live Project
                  </motion.button>
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

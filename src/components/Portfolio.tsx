"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Portfolio {
  id: number;
  name: string;
  img: string;
  brand: string;
}
const PortfolioData: Portfolio[] = [
  {
    id: 1,
    name: "Interior Solutions Website Design",
    img: "/images/project1.png",
    brand: "brand name",
  },
  {
    id: 2,
    name: "Dog care Website Design",
    img: "/images/project2.png",
    brand: "brand name",
  },
  {
    id: 3,
    name: "Course Platform",
    img: "/images/project3.png",
    brand: "brand name",
  },
  {
    id: 4,
    name: "Habit Tracking Website Design",
    img: "/images/project4.png",
    brand: "brand name",
  },
  {
    id: 5,
    name: "Tradilib Website Design",
    img: "/images/project5.png",
    brand: "brand name",
  },
  {
    id: 6,
    name: "Dashboard Designs",
    img: "/images/project6.png",
    brand: "brand name",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<Portfolio | null>(null);
  return (
    <section
      id="portfolio"
      className="relative w-full py-20 z-0 min-h-[100vh] bg-black text-white overflow-hidden"
    >
      {/* Background with green gradient effects (LEFT side) - mirrors Hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Big green bloom anchored to left */}
        <div className="absolute top-[-6rem] left-[-8%] h-[720px] w-[720px] rounded-full blur-[180px] bg-[#80e01a] opacity-35" />
        {/* Inner white hotspot inside the green bloom */}
        <div className="absolute top-[-2rem] left-[2%] h-[420px] w-[420px] rounded-full blur-[140px] bg-white/20" />
        {/* Left-origin soft spread with smooth falloff */}
        <div className="absolute inset-y-0 left-0 w-[70%] bg-[radial-gradient(900px_700px_at_5%_10%,rgba(128,224,26,0.45)_0%,rgba(128,224,26,0.18)_35%,rgba(0,0,0,0)_70%)]" />
        {/* Vignette to preserve contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_15%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.9)_100%)]" />

        {/* Boosted right-side glow visibility */}
        <div className="absolute top-[-2rem] right-[-5%] h-[760px] w-[760px] rounded-full blur-[180px] bg-[#80e01a] opacity-45" />
        <div className="absolute top-[2rem] right-[2%] h-[440px] w-[440px] rounded-full blur-[140px] bg-white/25" />
        <div className="absolute inset-y-0 right-0 w-[58%] bg-[radial-gradient(860px_640px_at_95%_18%,rgba(128,224,26,0.5)_0%,rgba(128,224,26,0.24)_42%,rgba(0,0,0,0)_78%)]" />
      </div>

      {/* Ensure all content sits above glows and remains white for contrast */}
      <div className="relative z-10 container mx-auto px-5 text-white">
        {/* Title and Button */}
        <div className="flex justify-between items-center sm:flex-row flex-col mt-10">
          <div>
            <h1 className="lg:text-[56px] md:text-[40px] text-[32px] text-white font-semibold">
              View our projects to see our <br />{" "}
              <span className="text-[#80e01a]">quality and creativity.</span>
            </h1>
            <p className="text-white/90 text-[18px] font-mono mt-5">
              Explore the range of services we offer to elevate your online
              presence and drive growth.
            </p>
          </div>

          {/* Make CTA highly visible with border, glow shadow, and focus ring */}
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center text-[14px] uppercase bg-[#80e01a] text-white font-bold py-4 px-7 rounded-xl mt-4 cursor-pointer transition-all border border-[#80e01a] shadow-[0_0_0_0_rgba(128,224,26,0)] hover:shadow-[0_0_34px_rgba(128,224,26,0.55)] hover:bg-[#80e01a]/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#80e01a]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View Portfolio
          </a>
        </div>

        {/* Portfolio Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5">
          {PortfolioData.map((project) => (
            <div
              key={project.id}
              className="col-span-1 cursor-pointer"
              onClick={() => setSelectedImage(project)}
            >
              <div className="rounded-2xl">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={project.img || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  {/* Enforce white titles for strong contrast */}
                  <h2 className="text-[18px] font-medium text-white">
                    {project.name}
                  </h2>
                  <p className="text-white/80 text-[12px] uppercase mt-2 font-semibold">
                    {project.brand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl mx-4 mr-14 mt-20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-10 right-0 text-white text-2xl z-10 hover:text-[#80e01a] transition-colors"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>

                <div className="relative w-full aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                  <Image
                    src={selectedImage.img || "/placeholder.svg"}
                    alt={selectedImage.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 95vw, 80vw"
                  />
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-b-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                    {selectedImage.name}
                  </h2>
                  <p className="text-[#A3A3A3] text-sm sm:text-base uppercase mt-1 font-medium">
                    {selectedImage.brand}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa"; // Import icons

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  index: number; // Added index for staggered animation
}

export function BlogCard({
  slug,
  title,
  description,
  image,
  date,
  author,
  index,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -10 }} // Lift effect on hover
      className="group cursor-pointer"
    >
      <Link href={`/blogs/${slug}`} className="block h-full">
        <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
          <div className="relative overflow-hidden">
            <div className="relative w-full h-[280px]">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Date Badge (top-left) */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-[#7A41F2] px-3 py-1 rounded-full text-xs font-semibold">
                {date}
              </span>
            </div>
            {/* Rating Badge (top-right) */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                <FaStar className="text-[#FFD700] text-xs" />
                <span className="text-xs font-semibold text-[#171717]">
                  5.0
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#171717] mb-2 group-hover:text-[#7A41F2] transition-colors">
                {title}
              </h3>
              <p className="text-[#666666] text-sm mb-3 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[#A3A3A3] text-[12px] uppercase font-semibold">
                By {author}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[#7A41F2] opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span className="text-sm font-semibold">Read More</span>
                <FaArrowRight className="text-base" />{" "}
                {/* Slightly larger arrow */}
              </motion.div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

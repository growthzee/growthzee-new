"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  index: number;
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
  // Calculate reading time based on description length
  const readingTime = Math.ceil(description.length / 200) || 1;

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20"
    >
      <Link href={`/blogs/${slug}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=300&width=500"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src =
                "/placeholder.svg?height=300&width=500&text=Blog+Image";
            }}
          />
        </div>

        <div className="p-6">
          {/* Meta information */}
          <div className="flex items-center space-x-4 text-sm text-white/70 mb-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(date)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {readingTime} min read
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-white/70">
              <User className="w-4 h-4 mr-1" />
              {author}
            </div>

            <span className="text-purple-300 font-medium text-sm group-hover:text-purple-200 transition-colors">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

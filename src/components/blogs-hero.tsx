"use client";

import { motion } from "framer-motion";

export function BlogsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-6xl mx-auto px-4 mb-16"
    >
      <h1 className="text-white capitalize lg:text-[56px] md:text-[40px] text-[32px] font-heading md:leading-[70px]">
        Explore Our Latest Insights
      </h1>
      <p className="text-[#A3A3A3] text-lg mt-6 max-w-2xl mx-auto">
        Dive into our articles on web development, AI, design, and more. Stay
        updated with the latest trends and best practices.
      </p>
    </motion.div>
  );
}

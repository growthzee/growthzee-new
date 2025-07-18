"use client";

import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog-card";
import { motion } from "framer-motion";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";

export default function BlogsPage() {
  return (
    <section id="blogs" className="w-full">
      <Navbar />
      <div className="relative w-full pt-20 min-h-screen">
        <div
          className="absolute inset-0 z-0 bg-[url('/images/satisfaction.png')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundPosition: "center center",
          }}
        ></div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        <div className="container mx-auto flex flex-col justify-between relative py-20 px-5 z-20 min-h-screen">
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
              Dive into our articles on web development, AI, design, and more.
              Stay updated with the latest trends and best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                image={post.image}
                date={post.date}
                author={post.author}
                index={index} // Pass index for staggered animation
              />
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

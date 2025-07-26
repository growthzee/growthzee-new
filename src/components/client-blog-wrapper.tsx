"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./blog-card";
import type { BlogPost } from "@/lib/blog";

interface ClientBlogWrapperProps {
  posts: BlogPost[];
}

export function ClientBlogWrapper({ posts }: ClientBlogWrapperProps) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center py-20"
      >
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          No Blog Posts Yet
        </h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          We&apos;re working on creating amazing content for you. Check back
          soon for our latest insights and articles!
        </p>
        <a
          href="/admin"
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          Create First Post
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {posts.map((post, index) => (
        <BlogCard
          key={post.id}
          slug={post.slug}
          title={post.title}
          description={post.excerpt}
          image={post.coverImage || "/placeholder.svg?height=300&width=500"}
          date={post.publishedAt || post.createdAt || ""}
          author={post.author}
          index={index}
        />
      ))}
    </motion.div>
  );
}

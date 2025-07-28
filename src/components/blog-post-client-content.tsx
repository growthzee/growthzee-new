"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

interface BlogPostClientContentProps {
  post: BlogPost;
}

export function BlogPostClientContent({ post }: BlogPostClientContentProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Get fallback image URL
  const getFallbackImage = () => {
    return `/api/placeholder?width=800&height=400&text=${encodeURIComponent(
      post.title
    )}`;
  };

  // Get image source with fallback
  const getImageSrc = () => {
    if (
      imageError ||
      !post.coverImage ||
      post.coverImage.includes("/placeholder.svg")
    ) {
      return getFallbackImage();
    }
    return post.coverImage;
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[20px] shadow-xl"
    >
      <Link
        href="/blogs"
        className="inline-flex items-center text-[#666666] hover:text-[#7A41F2] transition-colors mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back to Blogs
      </Link>
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-heading text-[#171717] mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-[#666666]">
          By {post.author} on{" "}
          {new Date(
            post.publishedAt || post.createdAt || ""
          ).toLocaleDateString()}
        </p>
      </div>
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading image...</div>
          </div>
        )}
        <img
          src={getImageSrc() || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: imageLoading ? "none" : "block" }}
        />
      </div>
      <div
        className="prose prose-lg dark:prose-invert max-w-none text-[#666666]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </motion.article>
  );
}

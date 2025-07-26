"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog"; // Import BlogPost type

interface BlogPostClientContentProps {
  post: BlogPost; // Receive the fetched post as a prop
}

export function BlogPostClientContent({ post }: BlogPostClientContentProps) {
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
        <Image
          src={post.coverImage || "/placeholder.svg"} // Use coverImage from your BlogPost type
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div
        className="prose prose-lg dark:prose-invert max-w-none text-[#666666]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </motion.article>
  );
}

"use client";

import { getBlogPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/common/Navbar";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog-post" className="w-full">
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
                By {post.author} on {post.date}
              </p>
            </div>
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
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
        </div>
      </div>
      <Footer />
    </section>
  );
}

"use client";

import { PostForm } from "./post-form";
import type { BlogPost } from "@/lib/blog";

interface PostFormWrapperProps {
  post?: BlogPost;
  onSubmit: (formData: FormData) => Promise<void>;
}

export function PostFormWrapper({ post, onSubmit }: PostFormWrapperProps) {
  return <PostForm post={post} onSubmit={onSubmit} />;
}

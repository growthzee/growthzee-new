"use server";

import { redirect } from "next/navigation";
import { createPost, updatePost, deletePost } from "@/lib/blog";
import { logoutServer } from "@/lib/auth-server";

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const status = formData.get("status") as "draft" | "published";
  const coverImage = formData.get("coverImage") as string;
  const tags = (formData.get("tags") as string)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  await createPost({
    title,
    slug,
    content,
    excerpt,
    author,
    status,
    tags,
    coverImage,
    publishedAt: new Date().toISOString().split("T")[0],
  });

  redirect("/admin");
}

export async function updatePostAction(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const author = formData.get("author") as string;
  const status = formData.get("status") as "draft" | "published";
  const coverImage = formData.get("coverImage") as string;
  const tags = (formData.get("tags") as string)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  await updatePost(id, {
    title,
    slug,
    content,
    excerpt,
    author,
    status,
    tags,
    coverImage,
  });

  redirect("/admin");
}

export async function deletePostAction(postId: string) {
  await deletePost(postId);
  redirect("/admin");
}

export async function logoutAction() {
  await logoutServer();
  redirect("/admin/login");
}

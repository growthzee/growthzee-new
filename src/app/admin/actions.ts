"use server";

import { redirect } from "next/navigation";
import { createPost, updatePost, deletePost } from "@/lib/blog";
import { logoutServer } from "@/lib/auth-server";
import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
  try {
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
      publishedAt:
        status === "published" ? new Date().toISOString().split("T")[0] : null,
    });

    // Refresh the pages
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }

  redirect("/admin");
}

export async function updatePostAction(id: string, formData: FormData) {
  try {
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

    // Refresh the pages
    revalidatePath("/admin");
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }

  redirect("/admin");
}

export async function deletePostAction(postId: string) {
  try {
    await deletePost(postId);

    // Refresh the pages
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }

  redirect("/admin");
}

export async function logoutAction() {
  await logoutServer();
  redirect("/admin/login");
}

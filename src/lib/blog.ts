import { prisma } from "./prisma";
import type { BlogPost as PrismaBlogPost, PostStatus } from "@prisma/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string | null;
  status: "draft" | "published";
  tags: string[];
  featuredImage?: string;
  coverImage?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Convert Prisma BlogPost to our BlogPost interface
function convertPrismaPost(post: PrismaBlogPost): BlogPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: post.publishedAt?.toISOString().split("T")[0] || null,
    status: post.status.toLowerCase() as "draft" | "published",
    tags: post.tags,
    featuredImage: post.featuredImage || undefined,
    coverImage: post.coverImage || undefined,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts.map(convertPrismaPost);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });
    return post ? convertPrismaPost(post) : null;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`[getPostBySlug] Attempting to fetch post with slug: ${slug}`);
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });
    if (post) {
      console.log(
        `[getPostBySlug] Found post: ${post.title} (Status: ${post.status})`
      );
      return convertPrismaPost(post);
    } else {
      console.log(`[getPostBySlug] No post found for slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error(
      `[getPostBySlug] Error fetching post by slug ${slug}:`,
      error
    );
    return null;
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    console.log("[getPublishedPosts] Fetching all published posts...");
    const posts = await prisma.blogPost.findMany({
      where: {
        status: "PUBLISHED",
      },
      orderBy: {
        publishedAt: "desc",
      },
    });
    console.log(`[getPublishedPosts] Found ${posts.length} published posts.`);
    return posts.map(convertPrismaPost);
  } catch (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }
}

export async function createPost(
  postData: Omit<BlogPost, "id" | "createdAt" | "updatedAt">
): Promise<BlogPost> {
  try {
    const post = await prisma.blogPost.create({
      data: {
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        author: postData.author,
        status: postData.status.toUpperCase() as PostStatus,
        tags: postData.tags,
        coverImage: postData.coverImage,
        featuredImage: postData.featuredImage,
        publishedAt: postData.status === "published" ? new Date() : null,
      },
    });
    return convertPrismaPost(post);
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}

export async function updatePost(
  id: string,
  updates: Partial<BlogPost>
): Promise<BlogPost | null> {
  try {
    const updateData: Partial<PrismaBlogPost> = {};

    if (updates.title) updateData.title = updates.title;
    if (updates.slug) updateData.slug = updates.slug;
    if (updates.content) updateData.content = updates.content;
    if (updates.excerpt) updateData.excerpt = updates.excerpt;
    if (updates.author) updateData.author = updates.author;
    if (updates.tags) updateData.tags = updates.tags;
    if (updates.coverImage !== undefined)
      updateData.coverImage = updates.coverImage;
    if (updates.featuredImage !== undefined)
      updateData.featuredImage = updates.featuredImage;

    if (updates.status) {
      updateData.status = updates.status.toUpperCase() as PostStatus;
      // Set publishedAt when publishing
      if (updates.status === "published") {
        updateData.publishedAt = new Date();
      } else if (updates.status === "draft") {
        updateData.publishedAt = null;
      }
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: updateData,
    });

    return convertPrismaPost(post);
  } catch (error) {
    console.error("Error updating post:", error);
    return null;
  }
}

export async function deletePost(id: string): Promise<boolean> {
  try {
    await prisma.blogPost.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.error("Error deleting post:", error);
    return false;
  }
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            excerpt: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return posts.map(convertPrismaPost);
  } catch (error) {
    console.error("Error searching posts:", error);
    return [];
  }
}

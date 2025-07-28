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
    console.log("[getAllPosts] Environment:", process.env.NODE_ENV);
    console.log(
      "[getAllPosts] Database URL exists:",
      !!process.env.DATABASE_URL
    );

    const posts = await prisma.blogPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(`[getAllPosts] Successfully fetched ${posts.length} posts`);
    return posts.map(convertPrismaPost);
  } catch (error) {
    console.error("[getAllPosts] Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    console.log(`[getPostById] Fetching post with ID: ${id}`);
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });
    if (post) {
      console.log(`[getPostById] Found post: ${post.title}`);
      return convertPrismaPost(post);
    } else {
      console.log(`[getPostById] No post found for ID: ${id}`);
      return null;
    }
  } catch (error) {
    console.error(`[getPostById] Error fetching post by ID ${id}:`, error);
    return null;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`[getPostBySlug] Environment: ${process.env.NODE_ENV}`);
    console.log(`[getPostBySlug] Attempting to fetch post with slug: ${slug}`);
    console.log(
      `[getPostBySlug] Database URL exists: ${!!process.env.DATABASE_URL}`
    );

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
    console.log("[getPublishedPosts] Environment:", process.env.NODE_ENV);
    console.log(
      "[getPublishedPosts] Database URL exists:",
      !!process.env.DATABASE_URL
    );
    console.log("[getPublishedPosts] Fetching all published posts...");

    // First, let's check ALL posts to see their statuses
    const allPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        status: true,
        publishedAt: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(
      `[getPublishedPosts] Total posts in database: ${allPosts.length}`
    );
    console.log(
      "[getPublishedPosts] All posts with status:",
      allPosts.map((p) => ({
        title: p.title.substring(0, 30) + "...",
        status: p.status,
        publishedAt: p.publishedAt,
        id: p.id,
      }))
    );

    // Now get only published posts
    const publishedPosts = await prisma.blogPost.findMany({
      where: {
        status: "PUBLISHED",
      },
      orderBy: {
        publishedAt: "desc",
      },
      // Remove any potential limit - let's fetch ALL published posts
    });

    console.log(
      `[getPublishedPosts] Found ${publishedPosts.length} published posts.`
    );
    console.log(
      `[getPublishedPosts] Published post titles:`,
      publishedPosts.map((p) => p.title.substring(0, 30) + "...")
    );

    const convertedPosts = publishedPosts.map(convertPrismaPost);
    console.log(
      `[getPublishedPosts] Returning ${convertedPosts.length} converted posts`
    );

    return convertedPosts;
  } catch (error) {
    console.error("[getPublishedPosts] Error fetching published posts:", error);
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
    const updateData: any = {};

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

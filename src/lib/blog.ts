export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: "draft" | "published";
  tags: string[];
  featuredImage?: string;
  coverImage?: string;
}

// In a real app, this would be a database
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-nextjs",
    content: "Next.js is a powerful React framework...",
    excerpt: "Learn the basics of Next.js and how to get started.",
    author: "Admin",
    publishedAt: "2024-01-15",
    status: "published",
    tags: ["nextjs", "react", "tutorial"],
    coverImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "Advanced TypeScript Tips",
    slug: "advanced-typescript-tips",
    content: "TypeScript offers many advanced features...",
    excerpt: "Discover advanced TypeScript techniques for better code.",
    author: "Admin",
    publishedAt: "2024-01-10",
    status: "draft",
    tags: ["typescript", "programming"],
    coverImage: "/placeholder.svg?height=400&width=800",
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.id === id) || null;
}

export async function createPost(
  post: Omit<BlogPost, "id">
): Promise<BlogPost> {
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
  };
  blogPosts.unshift(newPost);
  return newPost;
}

export async function updatePost(
  id: string,
  updates: Partial<BlogPost>
): Promise<BlogPost | null> {
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index === -1) return null;

  blogPosts[index] = { ...blogPosts[index], ...updates };
  return blogPosts[index];
}

export async function deletePost(id: string): Promise<boolean> {
  const index = blogPosts.findIndex((post) => post.id === id);
  if (index === -1) return false;

  blogPosts.splice(index, 1);
  return true;
}

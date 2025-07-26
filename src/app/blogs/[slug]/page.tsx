import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { ClientNavbar } from "@/components/client-navbar";
import { ClientFooter } from "@/components/client-footer";
import { BlogPostClientContent } from "@/components/blog-post-client-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>; // Keep this as Promise<{ slug: string }>
}

// generateStaticParams for pre-rendering paths at build time
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// generateMetadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params; // Await params here
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // Await params here
  const post = await getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  return (
    <section id="blog-post" className="w-full">
      <ClientNavbar />
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
          <BlogPostClientContent post={post} />
        </div>
      </div>
      <ClientFooter />
    </section>
  );
}

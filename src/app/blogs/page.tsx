import { getPublishedPosts } from "@/lib/blog";
import { ClientNavbar } from "@/components/client-navbar";
import { ClientFooter } from "@/components/client-footer";
import { ClientBlogWrapper } from "@/components/client-blog-wrapper";
import { BlogsHero } from "@/components/blogs-hero";

export default async function BlogsPage() {
  // Fetch published posts from database
  const posts = await getPublishedPosts();

  return (
    <section id="blogs" className="w-full">
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
          <BlogsHero />
          <ClientBlogWrapper posts={posts} />
        </div>
      </div>
      <ClientFooter />
    </section>
  );
}

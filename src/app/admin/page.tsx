import { AdminHeader } from "@/components/admin-header";
import { PostsTable } from "@/components/posts-table";
import { StatsCards } from "@/components/stats-cards";
import { requireAuthServer } from "@/lib/auth-server";
import { getAllPosts } from "@/lib/blog";

export default async function AdminDashboard() {
  await requireAuthServer();
  const posts = await getAllPosts();

  const publishedPosts = posts.filter((post) => post.status === "published");
  const draftPosts = posts.filter((post) => post.status === "draft");

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your blog posts and content</p>
        </div>

        <StatsCards
          totalPosts={posts.length}
          publishedPosts={publishedPosts.length}
          draftPosts={draftPosts.length}
        />

        <div className="mt-8">
          <PostsTable posts={posts} />
        </div>
      </main>
    </div>
  );
}

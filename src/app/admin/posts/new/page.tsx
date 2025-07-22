import { requireAuth } from "@/lib/auth";

import { createPostAction } from "../../actions";
import { AdminHeader } from "@/components/admin-header";
import { PostForm } from "@/components/post-form";

export default async function NewPostPage() {
  await requireAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Post
          </h1>
          <p className="text-gray-600">Write and publish a new blog post</p>
        </div>

        <PostForm onSubmit={createPostAction} />
      </main>
    </div>
  );
}

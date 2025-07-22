import { requireAuth } from "@/lib/auth";
import { getPostById } from "@/lib/blog";
import { notFound } from "next/navigation";

import { updatePostAction } from "../../../actions";
import { AdminHeader } from "@/components/admin-header";
import { PostForm } from "@/components/post-form";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  await requireAuth();
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  const handleUpdatePost = updatePostAction.bind(null, id);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Post</h1>
          <p className="text-gray-600">Update your blog post</p>
        </div>

        <PostForm post={post} onSubmit={handleUpdatePost} />
      </main>
    </div>
  );
}

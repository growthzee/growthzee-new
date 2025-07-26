"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog";
import { Save, Eye, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

import { CloudinaryUpload } from "./cloudinary-upload";
import { AdvancedTiptapEditor } from "@/app/admin/posts/components/advanced-tiptap-editor";

interface PostFormProps {
  post?: BlogPost;
  onSubmit: (formData: FormData) => Promise<void>;
}

export function PostForm({ post, onSubmit }: PostFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">(
    post?.status || "draft"
  );
  const [coverImage, setCoverImage] = useState(post?.coverImage || "");
  const [content, setContent] = useState(post?.content || "");
  const [tags, setTags] = useState(post?.tags?.join(", ") || "");

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    formData.set("status", status);
    formData.set("coverImage", coverImage);
    formData.set("content", content);
    formData.set("tags", tags);
    try {
      await onSubmit(formData);
    } finally {
      setIsLoading(false);
    }
  }

  const handleStatusChange = (value: string) => {
    if (value === "draft" || value === "published") {
      setStatus(value);
    }
  };

  const tagList = tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Header with title and status */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {post ? "Edit Post" : "Create New Post"}
          </h1>
          <p className="text-gray-600 mt-1">
            {post
              ? "Update your blog post"
              : "Write and publish a new blog post"}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge
            variant={status === "published" ? "default" : "secondary"}
            className="px-3 py-1"
          >
            {status === "published" ? "Published" : "Draft"}
          </Badge>
        </div>
      </div>

      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title */}
            <Card>
              <CardContent className="p-6">
                <Label htmlFor="title" className="text-lg font-semibold">
                  Post Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={post?.title}
                  required
                  className="mt-2 text-lg bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter an engaging title for your post"
                />
              </CardContent>
            </Card>

            {/* Cover Image with Cloudinary Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Cover Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CloudinaryUpload
                  value={coverImage}
                  onChange={setCoverImage}
                  onRemove={() => setCoverImage("")}
                  placeholder="Upload a cover image for your post"
                />
              </CardContent>
            </Card>

            {/* Excerpt */}
            <Card>
              <CardHeader>
                <CardTitle>Excerpt</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="excerpt"
                  defaultValue={post?.excerpt}
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  rows={3}
                  placeholder="Write a brief description that will appear in post previews..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  This will be displayed in post previews and search results.
                </p>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent>
                <AdvancedTiptapEditor
                  name="content"
                  value={content}
                  onChange={setContent}
                  placeholder="Start writing your blog post content here..."
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Save className="w-5 h-5 mr-2" />
                  Publish
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Status</Label>
                  <Select value={status} onValueChange={handleStatusChange}>
                    <SelectTrigger className="mt-1 bg-white border-gray-300 text-gray-900 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem
                        value="draft"
                        className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                      >
                        Save as Draft
                      </SelectItem>
                      <SelectItem
                        value="published"
                        className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                      >
                        Publish Now
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <Save className="w-4 w-4 mr-2" />
                  {isLoading
                    ? "Saving..."
                    : status === "published"
                    ? "Publish Post"
                    : "Save Draft"}
                </Button>

                {post && post.status === "published" && (
                  <Button variant="outline" className="w-full bg-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Post
                  </Button>
                )}

                <Link href="/admin" className="block">
                  <Button variant="outline" className="w-full bg-white">
                    Cancel
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Author */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Author
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  name="author"
                  defaultValue={post?.author || "Admin"}
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="react, nextjs, tutorial"
                />
                <p className="text-sm text-gray-500">
                  Separate tags with commas
                </p>

                {tagList.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tagList.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO Preview */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="text-blue-600 hover:underline cursor-pointer">
                      {post?.title || "Your Post Title"}
                    </div>
                    <div className="text-green-700 text-xs">
                      yoursite.com/blog/{post?.slug || "post-slug"}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {post?.excerpt || "Your post excerpt will appear here..."}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

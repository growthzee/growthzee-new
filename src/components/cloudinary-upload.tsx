"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Upload, ImageIcon, Loader2 } from "lucide-react";

interface CloudinaryUploadProps {
  value?: string;
  onChange?: (url: string) => void;
  onRemove?: () => void;
  placeholder?: string;
}

export function CloudinaryUpload({
  value,
  onChange,
  onRemove,
  placeholder = "Upload cover image",
}: CloudinaryUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();

      if (data.success) {
        onChange?.(data.url);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  // If there's already an image
  if (value) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="relative group">
            <img
              src={value || "/placeholder.svg"}
              alt="Cover image"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={onRemove}
                className="bg-red-500 hover:bg-red-600"
              >
                <X className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">
            ✅ Uploaded to Cloudinary
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="cloudinary-upload"
            disabled={isUploading}
          />

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              {isUploading ? (
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
              ) : (
                <ImageIcon className="w-8 h-8 text-gray-400" />
              )}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {placeholder}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {isUploading
                  ? "Uploading to Cloudinary..."
                  : "Drag and drop an image here, or click to select"}
              </p>

              <label htmlFor="cloudinary-upload">
                <Button
                  type="button"
                  disabled={isUploading}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                  asChild
                >
                  <span>
                    {isUploading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </>
                    )}
                  </span>
                </Button>
              </label>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <p>📁 Images stored securely in Cloudinary</p>
              <p>🚀 Automatic optimization & fast delivery</p>
              <p>📏 Supports: JPG, PNG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

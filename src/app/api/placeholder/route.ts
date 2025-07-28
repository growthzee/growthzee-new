import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = searchParams.get("width") || "400";
  const height = searchParams.get("height") || "300";
  const text = searchParams.get("text") || "Image";

  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" fill="none" stroke="#d1d5db" stroke-width="2" stroke-dasharray="8,4"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        ${decodeURIComponent(text)}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000", // Cache for 1 year
    },
  });
}

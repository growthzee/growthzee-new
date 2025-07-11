// app/layout.tsx
import { Roboto_Mono, Inter, Jost, Poppins } from "next/font/google";
import "./globals.css";
import ZoomInfoTracking from "@/components/ZoomInfoTracking";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

// Add Jost font for titles
const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
});

// Add a modern sans-serif for clean descriptions
const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

// Alternative: Popular modern font
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${jost.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body>
        <ZoomInfoTracking />
        {children}
      </body>
    </html>
  );
}

export default function Map() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Left neon-green glow (behind everything) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 z-0 h-[700px] w-[700px] rounded-full blur-[140px] opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, #80e01a 0%, rgba(128,224,26,0.28) 55%, rgba(128,224,26,0.0) 70%)",
        }}
      />
      {/* Subtle white hotspot inside the green to match hero lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-24 top-24 z-0 h-64 w-64 rounded-full blur-[100px] opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.0) 70%)",
        }}
      />
      {/* Black base so the glow reads well */}
      <div className="absolute inset-0 z-0 bg-black/95" />

      {/* Map background image layered above black/glow, below content */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/bgmap.webp')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundPosition: "center center" }}
      />

      {/* Content layer placeholder (kept for structure); consumers render children inside Satisfaction */}
      <div className="relative z-10" />
    </div>
  );
}

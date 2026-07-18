"use client";

import { useEffect, useRef, useState } from "react";

// ─── Confetti particle type ────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  size: number;
  shape: "rect" | "circle" | "star";
  alpha: number;
  gravity: number;
}

// ─── Confetti colours (matching brand palette) ─────────────────────────────
const CONFETTI_COLORS = [
  "#80e01a", // brand green
  "#a8f040", // lighter green
  "#ffffff", // white
  "#c8f880", // pale green
  "#60b012", // darker green
  "#e0ff80", // yellow-green
  "#9bfe3d", // neon green
];

function createParticle(canvasWidth: number): Particle {
  return {
    x: Math.random() * canvasWidth,
    y: -10,
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * 4 + 2,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 8,
    size: Math.random() * 8 + 4,
    shape: (["rect", "circle", "star"] as const)[Math.floor(Math.random() * 3)],
    alpha: 1,
    gravity: Math.random() * 0.15 + 0.05,
  };
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
) {
  const spikes = 5;
  const outerRadius = size;
  const innerRadius = size / 2;
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(x, y - outerRadius);
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(
      x + Math.cos(rot) * outerRadius,
      y + Math.sin(rot) * outerRadius
    );
    rot += step;
    ctx.lineTo(
      x + Math.cos(rot) * innerRadius,
      y + Math.sin(rot) * innerRadius
    );
    rot += step;
  }
  ctx.lineTo(x, y - outerRadius);
  ctx.closePath();
  ctx.fill();
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const burstIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-open after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Start confetti when popup becomes visible
  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Size canvas to window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initial burst
    for (let i = 0; i < 120; i++) {
      particlesRef.current.push(createParticle(canvas.width));
    }

    // Ongoing drizzle for 4 s
    burstIntervalRef.current = setInterval(() => {
      for (let i = 0; i < 12; i++) {
        particlesRef.current.push(createParticle(canvas.width));
      }
    }, 200);
    setTimeout(() => {
      if (burstIntervalRef.current) clearInterval(burstIntervalRef.current);
    }, 4000);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas.height * 0.7) p.alpha -= 0.02;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawStar(ctx, 0, 0, p.size / 2);
        }
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (burstIntervalRef.current) clearInterval(burstIntervalRef.current);
    };
  }, [visible]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      particlesRef.current = [];
    }, 400);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Confetti canvas (full-screen, pointer-events none) ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />

      {/* ── Backdrop ── */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          animation: closing
            ? "fadeOut 0.4s ease forwards"
            : "fadeIn 0.4s ease forwards",
        }}
      >
        {/* ── Card ── */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            maxWidth: "520px",
            width: "100%",
            background: "linear-gradient(135deg, #0a0a0a 0%, #111811 50%, #0a140a 100%)",
            border: "1px solid rgba(128,224,26,0.3)",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(128,224,26,0.08), 0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(128,224,26,0.12)",
            animation: closing
              ? "scaleOut 0.4s cubic-bezier(0.4,0,0.2,1) forwards"
              : "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* ── Top glow strip ── */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #80e01a, transparent)",
              borderRadius: "9999px",
            }}
          />

          {/* ── Animated radial glow background ── */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "360px",
              height: "360px",
              background:
                "radial-gradient(closest-side, rgba(128,224,26,0.12) 0%, transparent 70%)",
              animation: "pulse 3s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          {/* ── Close button ── */}
          <button
            onClick={handleClose}
            aria-label="Close announcement"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 10,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#aaa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s",
              fontSize: "14px",
              lineHeight: "1",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(128,224,26,0.15)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(128,224,26,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "#80e01a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "#aaa";
            }}
          >
            ✕
          </button>

          {/* ── Content ── */}
          <div style={{ padding: "40px 36px 36px", position: "relative" }}>
            {/* Party icon SVG */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 40% 35%, rgba(128,224,26,0.25), rgba(128,224,26,0.05))",
                  border: "1.5px solid rgba(128,224,26,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "wiggle 1.5s ease-in-out infinite",
                  boxShadow: "0 0 30px rgba(128,224,26,0.2)",
                }}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 36L20 24"
                    stroke="#80e01a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 36L18 26L22 30L12 40Z"
                    fill="#80e01a"
                    opacity="0.9"
                  />
                  <path
                    d="M22 30L36 16L28 8L14 22Z"
                    fill="#80e01a"
                    opacity="0.6"
                  />
                  <path
                    d="M22 30L36 16L28 8L14 22Z"
                    stroke="#a8f040"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                  <circle cx="34" cy="10" r="2.5" fill="#ffffff" opacity="0.9" />
                  <circle cx="38" cy="20" r="1.5" fill="#80e01a" opacity="0.8" />
                  <circle cx="28" cy="6" r="1.5" fill="#c8f880" opacity="0.9" />
                  <path
                    d="M36 6 L37 4 L38 6 L40 7 L38 8 L37 10 L36 8 L34 7Z"
                    fill="#ffffff"
                    opacity="0.85"
                  />
                  <path
                    d="M32 14 Q36 10 38 14 Q40 18 36 20"
                    stroke="#c8f880"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                  <path
                    d="M28 10 Q30 6 34 8"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Woohoo badge */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(90deg, rgba(128,224,26,0.15), rgba(128,224,26,0.25), rgba(128,224,26,0.15))",
                  border: "1px solid rgba(128,224,26,0.4)",
                  borderRadius: "9999px",
                  padding: "4px 18px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#a8f040",
                  textTransform: "uppercase",
                  animation: "shimmer 2.5s linear infinite",
                  backgroundSize: "200% 100%",
                }}
              >
                🎉 Woohoo! Big News
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                textAlign: "center",
                color: "#ffffff",
                fontSize: "1.65rem",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "12px",
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              We&apos;re Moving to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #80e01a, #a8f040)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                New Hours!
              </span>
            </h2>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(128,224,26,0.3), transparent)",
                margin: "20px 0",
              }}
            />

            {/* Info cards row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              {/* Card 1 — Date */}
              <div
                style={{
                  background: "rgba(128,224,26,0.06)",
                  border: "1px solid rgba(128,224,26,0.2)",
                  borderRadius: "14px",
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "8px" }}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "0 auto", display: "block" }}
                  >
                    <rect
                      x="3"
                      y="5"
                      width="22"
                      height="20"
                      rx="4"
                      stroke="#80e01a"
                      strokeWidth="1.5"
                      fill="rgba(128,224,26,0.1)"
                    />
                    <path
                      d="M3 11H25"
                      stroke="#80e01a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="9" cy="3" r="1.5" fill="#80e01a" />
                    <circle cx="19" cy="3" r="1.5" fill="#80e01a" />
                    <path
                      d="M9 2V6M19 2V6"
                      stroke="#80e01a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <text
                      x="14"
                      y="22"
                      textAnchor="middle"
                      fill="#80e01a"
                      fontSize="8"
                      fontWeight="700"
                      fontFamily="Inter,sans-serif"
                    >
                      AUG 1
                    </text>
                  </svg>
                </div>
                <p
                  style={{
                    color: "#80e01a",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Effective From
                </p>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 700,
                    margin: "4px 0 0",
                  }}
                >
                  August 1, 2026
                </p>
              </div>

              {/* Card 2 — Hours */}
              <div
                style={{
                  background: "rgba(128,224,26,0.06)",
                  border: "1px solid rgba(128,224,26,0.2)",
                  borderRadius: "14px",
                  padding: "16px 14px",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "8px" }}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "0 auto", display: "block" }}
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="11"
                      stroke="#80e01a"
                      strokeWidth="1.5"
                      fill="rgba(128,224,26,0.1)"
                    />
                    <path
                      d="M14 8V14L18 17"
                      stroke="#80e01a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="14" cy="14" r="1.5" fill="#80e01a" />
                  </svg>
                </div>
                <p
                  style={{
                    color: "#80e01a",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  New Timings
                </p>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 700,
                    margin: "4px 0 0",
                  }}
                >
                  10 AM – 7 PM
                </p>
              </div>
            </div>

            {/* Days row */}
            <div
              style={{
                background: "rgba(128,224,26,0.04)",
                border: "1px solid rgba(128,224,26,0.15)",
                borderRadius: "12px",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexShrink: 0 }}
              >
                <rect
                  x="2"
                  y="4"
                  width="18"
                  height="16"
                  rx="3"
                  stroke="#80e01a"
                  strokeWidth="1.5"
                  fill="rgba(128,224,26,0.08)"
                />
                <path
                  d="M2 9H20"
                  stroke="#80e01a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 2V6M15 2V6"
                  stroke="#80e01a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p
                  style={{
                    color: "#80e01a",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Working Days
                </p>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    margin: "2px 0 0",
                  }}
                >
                  Monday – Friday
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginLeft: "auto",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                {["M", "T", "W", "T", "F"].map((d, i) => (
                  <span
                    key={i}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(128,224,26,0.15)",
                      border: "1px solid rgba(128,224,26,0.4)",
                      color: "#80e01a",
                      fontSize: "10px",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing note */}
            <p
              style={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "13px",
                lineHeight: 1.6,
                margin: "0 0 24px",
              }}
            >
              Starting{" "}
              <span style={{ color: "#a0aec0" }}>August 1, 2026</span>, our
              office will remain{" "}
              <span style={{ color: "#80e01a", fontWeight: 600 }}>
                closed on weekends
              </span>
              . We&apos;re excited for this new chapter — thank you for your
              continued support! 🚀
            </p>

            {/* CTA Button */}
            <button
              onClick={handleClose}
              style={{
                display: "block",
                width: "100%",
                padding: "14px 24px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #80e01a, #60b012)",
                border: "none",
                color: "#000000",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: "0 4px 24px rgba(128,224,26,0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "translateY(-2px)";
                b.style.boxShadow = "0 8px 32px rgba(128,224,26,0.45)";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.transform = "translateY(0)";
                b.style.boxShadow = "0 4px 24px rgba(128,224,26,0.3)";
              }}
            >
              Got it! 🎉
            </button>
          </div>

          {/* ── Bottom decorative SVG wave ── */}
          <svg
            viewBox="0 0 520 40"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "40px",
              opacity: 0.15,
              pointerEvents: "none",
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20 Q130 0 260 20 Q390 40 520 20 L520 40 L0 40Z"
              fill="#80e01a"
            />
          </svg>
        </div>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.82) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes scaleOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to   { opacity: 0; transform: scale(0.88) translateY(10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1);   opacity: 0.7; }
          50%       { transform: translateX(-50%) scale(1.2); opacity: 1;   }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg) scale(1);   }
          25%       { transform: rotate(6deg)  scale(1.05); }
          75%       { transform: rotate(-4deg) scale(0.97); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>
    </>
  );
}

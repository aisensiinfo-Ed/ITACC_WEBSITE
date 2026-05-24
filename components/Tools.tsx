"use client"
import { useState } from "react"

const tabs = [
  {
    id: "images",
    label: "Images",
    tagline: "Image Generation",
    title: "Photorealistic visuals in seconds",
    desc: "ITACC's image engine understands context, style, and composition at a level that rivals professional photographers and illustrators.",
    chips: ["Text-to-Image", "Image-to-Image", "Inpainting", "Upscaling"],
    artBg: "linear-gradient(135deg, #0f0a2a, #0a0f2a)",
    glowColor: "rgba(124,92,252,.45)",
    svg: (
      <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
        <rect x="10" y="10" width="120" height="80" rx="8" stroke="rgba(124,92,252,.4)" strokeWidth="1" fill="rgba(124,92,252,.05)"/>
        <circle cx="40" cy="38" r="12" fill="rgba(251,191,36,.25)" stroke="rgba(251,191,36,.5)" strokeWidth="1"/>
        <path d="M10 70 L40 50 L65 65 L90 40 L130 70" stroke="rgba(124,92,252,.6)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "video",
    label: "Video",
    tagline: "Video Generation",
    title: "Motion that tells your story",
    desc: "Generate fluid, temporally-consistent video clips from images or text descriptions with cinematic quality and natural motion.",
    chips: ["Image-to-Video", "Text-to-Video", "Video Upscale", "Style Motion"],
    artBg: "linear-gradient(135deg, #0a1520, #051520)",
    glowColor: "rgba(56,189,248,.35)",
    svg: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="rgba(56,189,248,.4)" strokeWidth="1" fill="rgba(56,189,248,.07)"/>
        <path d="M32 28 L56 40 L32 52 Z" fill="#38bdf8"/>
      </svg>
    ),
  },
  {
    id: "voice",
    label: "Voice",
    tagline: "Voice Synthesis",
    title: "Voices that feel human",
    desc: "Clone voices, generate expressive narration, and produce multilingual audio that captures nuance, emotion, and tone with stunning realism.",
    chips: ["Voice Clone", "Multilingual", "Emotion Control", "Real-time TTS"],
    artBg: "linear-gradient(135deg, #1a0520, #0a0520)",
    glowColor: "rgba(244,114,182,.3)",
    svg: (
      <svg width="110" height="65" viewBox="0 0 100 60" fill="none">
        <path d="M5 30 Q15 8 25 30 Q35 52 45 30 Q55 8 65 30 Q75 52 85 30 Q92 18 95 30" stroke="rgba(244,114,182,.7)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M5 30 Q15 18 25 30 Q35 42 45 30 Q55 18 65 30 Q75 42 85 30" stroke="rgba(244,114,182,.25)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "remix",
    label: "Remix",
    tagline: "AI Remix",
    title: "Reinvent any asset instantly",
    desc: "Transform existing images, videos, or audio with intelligent remix tools that preserve what matters while evolving the style and feel.",
    chips: ["Style Swap", "Face Swap", "Background Replace", "Variation Engine"],
    artBg: "linear-gradient(135deg, #0a1a10, #051510)",
    glowColor: "rgba(52,211,153,.28)",
    svg: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none">
        <path d="M20 40 C20 28 30 18 40 18 C50 18 62 28 62 40" stroke="rgba(52,211,153,.6)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M62 40 C62 52 52 62 40 62 C30 62 20 52 20 40" stroke="rgba(52,211,153,.28)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3"/>
        <circle cx="40" cy="40" r="9" fill="rgba(52,211,153,.2)" stroke="rgba(52,211,153,.6)" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function Tools() {
  const [active, setActive] = useState("images")
  const tab = tabs.find((t) => t.id === active)!

  return (
    <section id="tools" className="py-24 px-6 md:px-14" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: "var(--accent2)" }}>
          Core Tools
        </p>
        <h2
          className="font-extrabold leading-tight tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-1px", maxWidth: 520 }}
        >
          One suite. Every creative need.
        </h2>

        {/* Tab bar */}
        <div
          className="flex gap-1 mt-10 mb-10 p-1.5 rounded-full w-fit"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: active === t.id ? "var(--accent)" : "transparent",
                color: active === t.id ? "#fff" : "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                border: "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Art */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background: tab.artBg,
              border: "1px solid var(--border)",
              aspectRatio: "4/3",
            }}
          >
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                top: "15%", left: "15%", width: 220, height: 220,
                background: `radial-gradient(ellipse, ${tab.glowColor}, transparent 70%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">{tab.svg}</div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--accent2)" }}>
              {tab.tagline}
            </p>
            <h3
              className="font-extrabold leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px, 3vw, 38px)", letterSpacing: "-1px" }}
            >
              {tab.title}
            </h3>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              {tab.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {tab.chips.map((c) => (
                <span
                  key={c}
                  className="text-sm px-4 py-1.5 rounded-full font-light"
                  style={{
                    background: "rgba(124,92,252,.12)",
                    border: "1px solid rgba(124,92,252,.28)",
                    color: "var(--accent2)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

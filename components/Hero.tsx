"use client"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const stats = [
  { num: "12M+", label: "Creators worldwide" },
  { num: "500M+", label: "Assets generated" },
  { num: "4.9★", label: "Average rating" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 520, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,92,252,.2) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute pointer-events-none animate-float"
        style={{
          top: "55%", left: "12%",
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(56,189,248,.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none animate-float-delayed"
        style={{
          top: "30%", right: "8%",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(192,132,252,.1) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div
        className="animate-fade-up inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-sm font-medium"
        style={{
          background: "rgba(124,92,252,.14)",
          border: "1px solid rgba(124,92,252,.35)",
          color: "var(--accent2)",
        }}
      >
        <span
          className="animate-pulse-dot w-2 h-2 rounded-full"
          style={{ background: "var(--accent2)", display: "inline-block" }}
        />
        <Sparkles size={13} style={{ display: "inline" }} />
        Powered by next-gen AI models
      </div>

      {/* Headline */}
      <h1
        className="animate-fade-up-1 font-extrabold leading-[1.02] tracking-tight"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(48px, 8vw, 90px)",
          letterSpacing: "-2.5px",
        }}
      >
        Create anything with
        <br />
        <span className="gradient-text-accent">ITACC AI Suite</span>
      </h1>

      {/* Subheadline */}
      <p
        className="animate-fade-up-2 mt-6 max-w-xl text-lg font-light leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        Generate stunning images, cinematic videos, and lifelike voices — all from one powerful platform built for creators and teams.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 mt-11">
        <Button size="lg">Start Creating — It&apos;s Free</Button>
        <Button size="lg" variant="outline">View Gallery →</Button>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-4 flex gap-12 mt-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className="font-extrabold text-3xl gradient-text"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.num}
            </div>
            <div className="text-xs mt-1 font-light" style={{ color: "var(--muted)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

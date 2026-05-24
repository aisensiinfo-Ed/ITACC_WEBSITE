"use client"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 620, height: 440, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(124,92,252,.18), transparent 68%)",
        }}
      />
      <h2
        className="relative font-extrabold leading-[1.06] tracking-tight"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5.5vw, 68px)", letterSpacing: "-2px" }}
      >
        Ready to create
        <br />
        <span className="gradient-text-accent">the extraordinary?</span>
      </h2>
      <p className="relative mt-5 text-lg font-light max-w-md mx-auto mb-11" style={{ color: "var(--muted)" }}>
        Join millions of creators using ITACC to bring their boldest ideas to life.
      </p>
      <Button size="lg" className="relative text-base px-12">
        Start for Free Today
      </Button>
    </section>
  )
}

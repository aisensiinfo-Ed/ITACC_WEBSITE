"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const links = ["Products", "Tools", "Pricing", "Community", "Blog"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 right-0 z-50 transition-all duration-300"
      style={{
        left: 68,
        background: scrolled ? "rgba(5,5,10,0.85)" : "rgba(5,5,10,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "transparent"}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <span
          className="font-display text-2xl font-extrabold tracking-tight gradient-text"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          ITACC
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-light transition-colors"
                style={{ color: "var(--muted)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm">Get Started Free</Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-1 px-6 pb-6"
          style={{ background: "rgba(5,5,10,0.95)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="py-3 text-sm border-b"
              style={{
                color: "var(--muted)",
                borderColor: "var(--border)",
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button className="mt-4 w-full">Get Started Free</Button>
        </div>
      )}
    </nav>
  )
}

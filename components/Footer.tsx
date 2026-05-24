"use client"

const links = ["Privacy", "Terms", "API Docs", "Support", "Careers"]

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span
        className="font-extrabold text-xl tracking-tight"
        style={{ fontFamily: "'Syne', sans-serif", color: "var(--muted2)" }}
      >
        ITACC
      </span>

      <div className="flex flex-wrap gap-7 justify-center">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="text-sm font-light transition-colors"
            style={{ color: "var(--muted)", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {l}
          </a>
        ))}
      </div>

      <p className="text-sm font-light" style={{ color: "var(--muted2)" }}>
        © 2026 ITACC. All rights reserved.
      </p>
    </footer>
  )
}

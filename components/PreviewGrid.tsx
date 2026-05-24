"use client"

const cards = [
  {
    id: "wide",
    title: "AI Image Generation",
    sub: "From text to stunning visuals",
    gradient: "linear-gradient(135deg, #1a0a3a 0%, #0d1a3a 50%, #0a2a2a 100%)",
    glow1: { top: "20%", left: "28%", color: "rgba(124,92,252,.45)" },
    glow2: { bottom: "18%", right: "18%", color: "rgba(56,189,248,.3)" },
    svg: (
      <svg width="130" height="130" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="57" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <circle cx="60" cy="60" r="40" stroke="rgba(124,92,252,.45)" strokeWidth="1" strokeDasharray="5 4"/>
        <circle cx="60" cy="60" r="22" fill="rgba(124,92,252,.22)"/>
        <circle cx="60" cy="60" r="9" fill="#7c5cfc"/>
      </svg>
    ),
  },
  {
    id: "video",
    title: "AI Video",
    sub: "Cinematic motion",
    gradient: "linear-gradient(135deg, #0a1520 0%, #051520 100%)",
    glow1: { top: "15%", left: "15%", color: "rgba(56,189,248,.35)" },
    svg: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none">
        <rect x="8" y="18" width="64" height="44" rx="7" stroke="rgba(56,189,248,.5)" strokeWidth="1" fill="rgba(56,189,248,.07)"/>
        <circle cx="32" cy="40" r="11" fill="rgba(56,189,248,.18)" stroke="rgba(56,189,248,.5)" strokeWidth="1"/>
        <path d="M29 40 L37 36 L37 44 Z" fill="#38bdf8"/>
      </svg>
    ),
  },
  {
    id: "voice",
    title: "AI Voice",
    sub: "Lifelike synthesis",
    gradient: "linear-gradient(135deg, #1a0520 0%, #0a0520 100%)",
    glow1: { top: "15%", left: "15%", color: "rgba(244,114,182,.3)" },
    svg: (
      <svg width="110" height="70" viewBox="0 0 100 60" fill="none">
        <path d="M5 30 Q15 8 25 30 Q35 52 45 30 Q55 8 65 30 Q75 52 85 30 Q92 18 95 30" stroke="rgba(244,114,182,.7)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M5 30 Q15 18 25 30 Q35 42 45 30 Q55 18 65 30 Q75 42 85 30" stroke="rgba(244,114,182,.25)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "remix",
    title: "AI Remix",
    sub: "Transform any asset",
    gradient: "linear-gradient(135deg, #0a1a10 0%, #051510 100%)",
    glow1: { top: "15%", left: "15%", color: "rgba(52,211,153,.25)" },
    svg: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="12" width="22" height="22" rx="5" fill="rgba(52,211,153,.14)" stroke="rgba(52,211,153,.45)" strokeWidth="1"/>
        <rect x="46" y="12" width="22" height="22" rx="5" fill="rgba(52,211,153,.14)" stroke="rgba(52,211,153,.45)" strokeWidth="1"/>
        <rect x="12" y="46" width="22" height="22" rx="5" fill="rgba(52,211,153,.14)" stroke="rgba(52,211,153,.45)" strokeWidth="1"/>
        <rect x="46" y="46" width="22" height="22" rx="5" fill="rgba(52,211,153,.24)" stroke="rgba(52,211,153,.6)" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function PreviewGrid() {
  return (
    <section className="px-6 md:px-14 pb-24">
      <div
        className="max-w-6xl mx-auto grid gap-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]"
            style={{
              background: card.gradient,
              border: "1px solid rgba(255,255,255,0.07)",
              aspectRatio: i === 0 ? "16/7" : "4/3",
              gridColumn: i === 0 ? "span 2" : undefined,
            }}
          >
            {/* Glows */}
            {card.glow1 && (
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  ...card.glow1,
                  width: 200, height: 200,
                  background: `radial-gradient(ellipse, ${card.glow1.color}, transparent 70%)`,
                }}
              />
            )}
            {card.glow2 && (
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  ...card.glow2,
                  width: 140, height: 140,
                  background: `radial-gradient(ellipse, ${card.glow2.color}, transparent 70%)`,
                }}
              />
            )}
            {/* Art */}
            <div className="absolute inset-0 flex items-center justify-center">
              {card.svg}
            </div>
            {/* Label */}
            <div
              className="absolute bottom-3 left-3 px-4 py-2 rounded-lg text-xs"
              style={{
                background: "rgba(5,5,10,0.8)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="block font-medium text-[13px]" style={{ color: "var(--text)" }}>
                {card.title}
              </span>
              <span style={{ color: "var(--muted)" }}>{card.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

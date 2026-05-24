"use client"

const features = [
  {
    icon: "✦",
    iconBg: "rgba(124,92,252,.15)",
    iconColor: "var(--accent2)",
    title: "Text to Image",
    desc: "Describe your vision and watch it come to life in seconds. Photorealistic, artistic, or abstract — any style imaginable.",
  },
  {
    icon: "▶",
    iconBg: "rgba(56,189,248,.12)",
    iconColor: "var(--accent3)",
    title: "AI Video Generation",
    desc: "Transform still images or prompts into fluid, cinematic video clips with motion that feels genuinely alive.",
  },
  {
    icon: "♪",
    iconBg: "rgba(244,114,182,.12)",
    iconColor: "#f472b6",
    title: "Voice Synthesis",
    desc: "Create natural, expressive voice-overs and audio from text in dozens of languages and emotional tones.",
  },
  {
    icon: "⬡",
    iconBg: "rgba(52,211,153,.12)",
    iconColor: "#34d399",
    title: "Style Transfer",
    desc: "Apply the aesthetic of any artwork or visual style to your own content with a single click.",
  },
  {
    icon: "⊛",
    iconBg: "rgba(251,191,36,.12)",
    iconColor: "#fbbf24",
    title: "Batch Processing",
    desc: "Scale your creative output with parallel generation — produce hundreds of assets simultaneously.",
  },
  {
    icon: "⬘",
    iconBg: "rgba(248,113,113,.12)",
    iconColor: "#f87171",
    title: "API & Integrations",
    desc: "Connect ITACC to your workflow with our developer API, Zapier, Make, and native platform plugins.",
  },
]

export default function Features() {
  return (
    <section
      id="products"
      className="py-24 px-6 md:px-14"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-4 font-medium" style={{ color: "var(--accent2)" }}>
          Why ITACC
        </p>
        <h2
          className="font-extrabold leading-tight tracking-tight max-w-lg"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-1px" }}
        >
          Everything you need to create at the speed of thought
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl p-8 transition-all duration-300 group cursor-default overflow-hidden"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "rgba(124,92,252,.38)"
                el.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "var(--border)"
                el.style.transform = ""
              }}
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, rgba(124,92,252,.04), transparent)" }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 relative"
                style={{ background: f.iconBg, color: f.iconColor }}
              >
                {f.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3 relative"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm font-light leading-relaxed relative" style={{ color: "var(--muted)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

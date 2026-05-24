"use client"
import { useState } from "react"
import {
  Sparkles, ChevronDown, Zap, Clock, Film,
  Wand2, Settings2, Play, Plus, X,
  Maximize2, Ratio, Timer, Palette
} from "lucide-react"

const resolutions = ["720p", "1080p", "4K"]
const durations = ["3s", "5s", "8s", "15s"]
const styles = ["Cinematic", "Anime", "Realistic", "Abstract", "Documentary", "Fantasy"]
const aspectRatios = ["16:9", "9:16", "1:1", "4:3"]

const recentPrompts = [
  "A neon-lit city street at night with rain reflecting the lights",
  "An astronaut floating in space with Earth in the background",
  "A mystical forest with glowing fireflies at dusk",
]

export default function VideoGen() {
  const [prompt, setPrompt] = useState("")
  const [resolution, setResolution] = useState("1080p")
  const [duration, setDuration] = useState("5s")
  const [style, setStyle] = useState("Cinematic")
  const [aspectRatio, setAspectRatio] = useState("16:9")
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [negPrompt, setNegPrompt] = useState("")

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setGenerating(true)
    setGenerated(false)
    setTimeout(() => {
      setGenerating(false)
      setGenerated(true)
    }, 3000)
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", borderBottom: "1px solid var(--border)",
        background: "rgba(5,5,10,0.8)", backdropFilter: "blur(16px)",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(56,189,248,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Film size={16} style={{ color: "#38bdf8" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "-0.5px" }}>Video Generator</div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 300 }}>Powered by ITACC AI</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 12, color: "var(--muted)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 50, padding: "5px 14px", display: "flex", alignItems: "center", gap: 6 }}>
            <Zap size={11} style={{ color: "#fbbf24" }} /> 48 credits remaining
          </div>
          <button style={{ background: "var(--accent)", color: "#fff", border: "none", borderRadius: 50, padding: "7px 16px", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
            Buy Credits
          </button>
        </div>
      </div>

      {/* Main layout */}
      <div style={{ flex: 1, display: "flex", gap: 0 }}>

        {/* Left panel — prompt area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "32px", maxWidth: 680 }}>

          {/* Heading */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <Sparkles size={14} style={{ color: "var(--accent2)" }} />
              <span style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--accent2)", fontWeight: 500 }}>
                Text to Video
              </span>
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, letterSpacing: "-1px", margin: 0, lineHeight: 1.1 }}>
              Describe your video
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 13, fontWeight: 300, margin: "8px 0 0" }}>
              Be as detailed as possible for best results
            </p>
          </div>

          {/* Prompt box */}
          <div style={{
            background: "var(--surface)", border: `1px solid ${prompt ? "rgba(124,92,252,.4)" : "var(--border)"}`,
            borderRadius: 16, padding: "18px 20px", marginBottom: 14,
            transition: "border-color .2s",
          }}>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="A cinematic shot of a futuristic city at golden hour, flying cars weaving between glass towers, lens flare, ultra detailed..."
              style={{
                width: "100%", background: "transparent", border: "none", outline: "none",
                color: "var(--text)", fontSize: 15, fontFamily: "'DM Sans',sans-serif",
                fontWeight: 300, lineHeight: 1.65, resize: "none", minHeight: 140,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: 11, color: "var(--muted2)" }}>{prompt.length} / 500</span>
              <div style={{ display: "flex", gap: 8 }}>
                {prompt && (
                  <button onClick={() => setPrompt("")} style={{ background: "transparent", border: "none", color: "var(--muted)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
                    <X size={12} /> Clear
                  </button>
                )}
                <button style={{
                  background: "rgba(124,92,252,.15)", border: "1px solid rgba(124,92,252,.3)",
                  color: "var(--accent2)", borderRadius: 50, padding: "5px 14px",
                  fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                  display: "flex", alignItems: "center", gap: 5,
                }}>
                  <Wand2 size={12} /> Enhance Prompt
                </button>
              </div>
            </div>
          </div>

          {/* Quick options row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
            {/* Resolution */}
            <div>
              <label style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                <Maximize2 size={11} /> Resolution
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {resolutions.map(r => (
                  <button key={r} onClick={() => setResolution(r)} style={{
                    padding: "7px 10px", borderRadius: 8, border: "none", fontSize: 12,
                    fontWeight: 400, cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                    background: resolution === r ? "var(--accent)" : "var(--surface)",
                    color: resolution === r ? "#fff" : "var(--muted)",
                    transition: "all .15s", textAlign: "left",
                  }}>{r}</button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                <Timer size={11} /> Duration
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {durations.map(d => (
                  <button key={d} onClick={() => setDuration(d)} style={{
                    padding: "7px 10px", borderRadius: 8, border: "none", fontSize: 12,
                    fontWeight: 400, cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                    background: duration === d ? "var(--accent)" : "var(--surface)",
                    color: duration === d ? "#fff" : "var(--muted)",
                    transition: "all .15s", textAlign: "left",
                  }}>{d}</button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                <Ratio size={11} /> Aspect Ratio
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {aspectRatios.map(a => (
                  <button key={a} onClick={() => setAspectRatio(a)} style={{
                    padding: "7px 10px", borderRadius: 8, border: "none", fontSize: 12,
                    fontWeight: 400, cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                    background: aspectRatio === a ? "var(--accent)" : "var(--surface)",
                    color: aspectRatio === a ? "#fff" : "var(--muted)",
                    transition: "all .15s", textAlign: "left",
                  }}>{a}</button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <label style={{ fontSize: 11, color: "var(--muted)", display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
                <Palette size={11} /> Style
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {styles.slice(0, 4).map(s => (
                  <button key={s} onClick={() => setStyle(s)} style={{
                    padding: "7px 10px", borderRadius: 8, border: "none", fontSize: 12,
                    fontWeight: 400, cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                    background: style === s ? "var(--accent)" : "var(--surface)",
                    color: style === s ? "#fff" : "var(--muted)",
                    transition: "all .15s", textAlign: "left",
                  }}>{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            style={{
              background: "transparent", border: "1px solid var(--border)", borderRadius: 10,
              padding: "10px 16px", color: "var(--muted)", fontSize: 13, fontWeight: 400,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex",
              alignItems: "center", gap: 6, marginBottom: 14, width: "fit-content",
            }}
          >
            <Settings2 size={14} /> Advanced Settings
            <ChevronDown size={13} style={{ transform: showAdvanced ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
          </button>

          {showAdvanced && (
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 20px", marginBottom: 14 }}>
              <label style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 8 }}>Negative Prompt</label>
              <textarea
                value={negPrompt}
                onChange={e => setNegPrompt(e.target.value)}
                placeholder="What to avoid: blurry, distorted faces, low quality..."
                style={{
                  width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "12px 14px", color: "var(--text)", fontSize: 13,
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 300, lineHeight: 1.6,
                  resize: "none", minHeight: 80, outline: "none",
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                <div>
                  <label style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 6 }}>Seed (optional)</label>
                  <input placeholder="Random" style={{
                    width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                    borderRadius: 8, padding: "8px 12px", color: "var(--text)", fontSize: 13,
                    fontFamily: "'DM Sans',sans-serif", outline: "none",
                  }} />
                </div>
                <div>
                  <label style={{ fontSize: 12, color: "var(--muted)", display: "block", marginBottom: 6 }}>Motion Intensity</label>
                  <input type="range" min="1" max="10" defaultValue="5" style={{ width: "100%", marginTop: 6, accentColor: "#7c5cfc" }} />
                </div>
              </div>
            </div>
          )}

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || generating}
            style={{
              background: prompt.trim()
                ? "linear-gradient(135deg, rgba(124,92,252,0.15), rgba(192,132,252,0.1))"
                : "rgba(124,92,252,.05)",
              color: prompt.trim() ? "#fff" : "rgba(255,255,255,0.3)",
              border: prompt.trim()
                ? "1.5px solid transparent"
                : "1.5px solid rgba(124,92,252,.2)",
              borderRadius: 14,
              padding: "16px 24px", fontSize: 15, fontWeight: 500,
              cursor: prompt.trim() ? "pointer" : "not-allowed",
              fontFamily: "'DM Sans',sans-serif",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "all .25s", width: "100%",
              position: "relative",
              backgroundClip: "padding-box",
              boxShadow: prompt.trim()
                ? "0 0 0 1.5px transparent, inset 0 0 0 1.5px transparent, 0 0 20px rgba(124,92,252,0.3), 0 0 40px rgba(124,92,252,0.1)"
                : "none",
              outline: prompt.trim() ? "1.5px solid rgba(192,132,252,0.7)" : "none",
              outlineOffset: -1,
            }}
          >
            {/* neon glow layer */}
            {prompt.trim() && !generating && (
              <span style={{
                position: "absolute", inset: 0, borderRadius: 14,
                background: "linear-gradient(135deg, rgba(124,92,252,0.25), rgba(56,189,248,0.15))",
                zIndex: 0,
              }} />
            )}
            {generating ? (
              <>
                <div style={{
                  width: 16, height: 16, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,.3)", borderTopColor: "#c084fc",
                  animation: "spin 0.8s linear infinite",
                  position: "relative", zIndex: 1,
                }} />
                <span style={{ position: "relative", zIndex: 1, color: "#c084fc" }}>Generating your video...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} style={{ position: "relative", zIndex: 1, color: prompt.trim() ? "#c084fc" : "inherit" }} />
                <span style={{ position: "relative", zIndex: 1 }}>
                  Generate Video · {resolution} · {duration} · {aspectRatio}
                </span>
              </>
            )}
          </button>

          {/* Credits note */}
          <p style={{ fontSize: 11, color: "var(--muted2)", textAlign: "center", marginTop: 10, fontWeight: 300 }}>
            This will use ~4 credits · 48 remaining
          </p>

          {/* Recent prompts */}
          <div style={{ marginTop: 28 }}>
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10, fontWeight: 400, display: "flex", alignItems: "center", gap: 6 }}>
              <Clock size={12} /> Recent prompts
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {recentPrompts.map((p, i) => (
                <button key={i} onClick={() => setPrompt(p)} style={{
                  background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10,
                  padding: "10px 14px", color: "var(--muted)", fontSize: 12, fontWeight: 300,
                  cursor: "pointer", fontFamily: "'DM Sans',sans-serif", textAlign: "left",
                  transition: "border-color .15s, color .15s",
                  display: "flex", alignItems: "center", gap: 8,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,92,252,.35)"; e.currentTarget.style.color = "var(--text)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)" }}
                >
                  <Plus size={12} style={{ flexShrink: 0 }} />
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — preview */}
        <div style={{
          width: 380, borderLeft: "1px solid var(--border)",
          padding: "32px 28px", display: "flex", flexDirection: "column", gap: 20,
          background: "var(--surface)",
        }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "-0.5px" }}>Preview</div>

          {/* Video preview area */}
          <div style={{
            aspectRatio: aspectRatio === "9:16" ? "9/16" : aspectRatio === "1:1" ? "1/1" : aspectRatio === "4:3" ? "4/3" : "16/9",
            maxHeight: 280,
            background: "linear-gradient(135deg,#0f0a2a,#0a0f2a)",
            borderRadius: 14, border: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "20%", left: "20%", width: 160, height: 160,
              borderRadius: "50%", background: "radial-gradient(ellipse,rgba(124,92,252,.35),transparent 70%)",
              pointerEvents: "none",
            }} />
            {generating ? (
              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  border: "2px solid rgba(124,92,252,.3)", borderTopColor: "#7c5cfc",
                  animation: "spin 0.8s linear infinite", margin: "0 auto 12px",
                }} />
                <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 300 }}>Generating...</div>
                <div style={{ fontSize: 11, color: "var(--muted2)", marginTop: 4 }}>{resolution} · {duration} · {style}</div>
              </div>
            ) : generated ? (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(255,255,255,.15)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}>
                  <Play size={22} fill="white" style={{ color: "white", marginLeft: 3 }} />
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", position: "relative" }}>
                <Film size={32} style={{ color: "rgba(124,92,252,.4)", marginBottom: 10 }} />
                <div style={{ fontSize: 13, color: "var(--muted2)", fontWeight: 300 }}>Your video will appear here</div>
              </div>
            )}
          </div>

          {/* Settings summary */}
          <div style={{ background: "var(--bg)", borderRadius: 12, padding: "14px 16px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 500 }}>Settings</div>
            {[
              { label: "Resolution", value: resolution, icon: <Maximize2 size={11} /> },
              { label: "Duration", value: duration, icon: <Timer size={11} /> },
              { label: "Aspect Ratio", value: aspectRatio, icon: <Ratio size={11} /> },
              { label: "Style", value: style, icon: <Palette size={11} /> },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5, fontWeight: 300 }}>
                  {item.icon} {item.label}
                </span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--accent2)" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Download (shown after generation) */}
          {generated && (
            <button style={{
              background: "rgba(52,211,153,.12)", border: "1px solid rgba(52,211,153,.3)",
              color: "#34d399", borderRadius: 12, padding: "12px 16px",
              fontSize: 13, fontWeight: 500, cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center",
              justifyContent: "center", gap: 8,
            }}>
              ↓ Download Video
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        textarea::placeholder { color: rgba(240,238,255,0.25); }
        input::placeholder { color: rgba(240,238,255,0.25); }
        textarea, input { caret-color: #7c5cfc; }
      `}</style>
    </div>
  )
}

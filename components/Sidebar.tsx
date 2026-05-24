"use client"
import { useState } from "react"
import { ImageIcon, Video, Mic, Shuffle, LayoutGrid, Sparkles, Settings, HelpCircle, ChevronRight, Zap, Star, Clock, Bookmark } from "lucide-react"

const topNav = [
  { icon: LayoutGrid, label: "Dashboard", id: "dashboard" },
  { icon: Sparkles,   label: "Explore",   id: "explore" },
  { icon: Clock,      label: "History",   id: "history" },
  { icon: Bookmark,   label: "Collections", id: "collections" },
  { icon: Star,       label: "Favorites", id: "favorites" },
]
const tools = [
  { icon: ImageIcon, label: "Image Gen", id: "image", color: "#7c5cfc", bg: "rgba(124,92,252,.15)" },
  { icon: Video,     label: "Video Gen", id: "video", color: "#38bdf8", bg: "rgba(56,189,248,.13)" },
  { icon: Mic,       label: "Voice",     id: "voice", color: "#f472b6", bg: "rgba(244,114,182,.13)" },
  { icon: Shuffle,   label: "Remix",     id: "remix", color: "#34d399", bg: "rgba(52,211,153,.13)" },
  { icon: Zap,       label: "Batch",     id: "batch", color: "#fbbf24", bg: "rgba(251,191,36,.13)" },
]
const bottomNav = [
  { icon: Settings,   label: "Settings", id: "settings" },
  { icon: HelpCircle, label: "Help",     id: "help" },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const [activeId, setActiveId] = useState("dashboard")

  const W = expanded ? 224 : 72

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 40,
        width: W, background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        display: "flex", flexDirection: "column",
        transition: "width .28s ease", overflow: "hidden",
      }}
    >
      {/* Logo */}
      <div style={{
        height: 68, flexShrink: 0,
        borderBottom: "1px solid var(--border)",
        display: "flex", alignItems: "center",
        paddingLeft: expanded ? 18 : 0,
        justifyContent: expanded ? "flex-start" : "center",
        transition: "padding .28s, justify-content .28s",
        gap: 10,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: "linear-gradient(135deg,#7c5cfc,#c084fc)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 12, color: "#fff",
        }}>IT</div>
        {expanded && <span style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17,
          whiteSpace: "nowrap", background: "linear-gradient(135deg,#fff,#c084fc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>ITACC</span>}
      </div>

      {/* Top nav */}
      <div style={{ paddingTop: 10, paddingBottom: 6, flexShrink: 0 }}>
        {topNav.map(item => (
          <Item key={item.id} item={item} expanded={expanded}
            active={activeId === item.id} onClick={() => setActiveId(item.id)} sidebarW={W} />
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "4px 0", flexShrink: 0 }}>
        {expanded && <p style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted2)", fontWeight: 500, margin: "10px 0 6px 18px" }}>AI Tools</p>}
        {!expanded && <div style={{ height: 10 }} />}
      </div>

      {/* Tools */}
      <div style={{ flexShrink: 0 }}>
        {tools.map(item => (
          <Item key={item.id} item={item} expanded={expanded}
            active={activeId === item.id} onClick={() => setActiveId(item.id)}
            accentColor={item.color} accentBg={item.bg} sidebarW={W} />
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* Upgrade */}
      {expanded && (
        <div style={{ margin: "0 10px 10px", borderRadius: 12, padding: 12, background: "rgba(124,92,252,.12)", border: "1px solid rgba(124,92,252,.25)" }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: "#c084fc", margin: "0 0 4px" }}>Upgrade to Pro</p>
          <p style={{ fontSize: 10, fontWeight: 300, color: "var(--muted)", margin: "0 0 8px" }}>Unlock unlimited generations</p>
          <button style={{ width: "100%", borderRadius: 8, padding: "6px 0", fontSize: 11, fontWeight: 500, background: "#7c5cfc", color: "#fff", border: "none", cursor: "pointer" }}>Upgrade Now</button>
        </div>
      )}

      {/* Bottom */}
      <div style={{ borderTop: "1px solid var(--border)", flexShrink: 0 }}>
        <div style={{ paddingTop: 6, paddingBottom: 4 }}>
          {bottomNav.map(item => (
            <Item key={item.id} item={item} expanded={expanded}
              active={activeId === item.id} onClick={() => setActiveId(item.id)} sidebarW={W} />
          ))}
        </div>
        {/* User */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          margin: "0 8px 8px", borderRadius: 10, padding: expanded ? "8px 12px" : "8px 0",
          background: "rgba(255,255,255,0.03)", cursor: "pointer",
          justifyContent: expanded ? "flex-start" : "center",
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg,#7c5cfc,#c084fc)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#fff",
          }}>JD</div>
          {expanded && <>
            <div>
              <p style={{ fontSize: 12, fontWeight: 500, color: "var(--text)", margin: 0, whiteSpace: "nowrap" }}>John Doe</p>
              <p style={{ fontSize: 10, fontWeight: 300, color: "var(--muted)", margin: 0 }}>Pro Plan</p>
            </div>
            <ChevronRight size={13} style={{ color: "var(--muted2)", marginLeft: "auto", flexShrink: 0 }} />
          </>}
        </div>
      </div>
    </aside>
  )
}

function Item({ item, expanded, active, onClick, accentColor, accentBg, sidebarW }: {
  item: { icon: React.ElementType; label: string; id: string }
  expanded: boolean; active: boolean; onClick: () => void
  accentColor?: string; accentBg?: string; sidebarW: number
}) {
  const Icon = item.icon
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center",
      width: sidebarW, height: 40,
      paddingLeft: expanded ? 18 : 0,
      justifyContent: expanded ? "flex-start" : "center",
      gap: expanded ? 12 : 0,
      background: active ? (accentBg ?? "rgba(124,92,252,.15)") : "transparent",
      color: active ? (accentColor ?? "#c084fc") : "var(--muted)",
      border: "none", cursor: "pointer", borderRadius: 10,
      fontFamily: "'DM Sans',sans-serif", transition: "all .15s",
    }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text)" } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)" } }}
    >
      <Icon size={18} style={{ flexShrink: 0 }} />
      {expanded && <span style={{ fontSize: 13, fontWeight: 300, whiteSpace: "nowrap" }}>{item.label}</span>}
      {active && expanded && <span style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor ?? "#c084fc", marginLeft: "auto", marginRight: 14, flexShrink: 0 }} />}
    </button>
  )
}

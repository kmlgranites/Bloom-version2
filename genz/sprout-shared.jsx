// =====================================================================
// Bloom Gen Z V3 — Shared tokens, mascot, primitives
// =====================================================================

// ── Tokens ──────────────────────────────────────────────────────────
const sprT = {
  // surfaces
  cream:      "#F6F1E7",   // warm page bg
  creamSoft:  "#FBF7EE",   // card bg on cream
  paper:      "#FFFFFF",
  ink:        "#022F36",   // primary text — deep teal
  inkSoft:    "#3C5356",
  muted:      "#7B8B8E",
  hairline:   "#E8DFCD",   // warm border on cream
  hairlineCool:"#E1E5E7",

  // accents
  cyan:       "#5AEBEB",   // hit color
  cyanInk:    "#0BB3B3",   // darker cyan for text/icons
  mint:       "#C8F0D8",
  mintInk:    "#0F7A4A",
  butter:     "#FFE08A",
  butterInk:  "#7A5300",
  blush:      "#FFD2C4",
  blushInk:   "#A23A1B",
  flame:      "#F76638",   // orange — celebration
  lilac:      "#D9D2FF",
  lilacInk:   "#3F2F8F",

  // dark surface
  inkBg:      "#022F36",
  inkBgSoft:  "#0C3C44",
};

const fontDisplay = `"Filson Soft","Nunito","Proxima Soft",system-ui,sans-serif`;
const fontBody    = `"Proxima Soft",system-ui,sans-serif`;
const fontData    = `"Inter",system-ui,sans-serif`;

// ── Mushroom mascot — inline SVG so it's color-tunable ───────────────
function SproutMascot({ size = 64, cap = sprT.cyan, stem = "#FFFFFF", stroke = sprT.ink, mood = "happy", style }) {
  // mood: happy (sparkle eyes) | thinking (..) | sleeping (—__—) | working (^_^)
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} aria-hidden="true">
      {/* stem — soft rounded body, drawn first so cap overlaps cleanly */}
      <path d="M33 58 C32 76 37 90 50 90 C63 90 68 76 67 58 Z"
            fill={stem} stroke={stroke} strokeWidth="4" strokeLinejoin="round"/>
      {/* cap — clean rounded dome with a gently flat brim */}
      <path d="M50 12 C27 12 11 30 11 49 C11 55 15 59 23 59 L77 59 C85 59 89 55 89 49 C89 30 73 12 50 12 Z"
            fill={cap} stroke={stroke} strokeWidth="4" strokeLinejoin="round"/>
      {/* subtle two-tone shading on the brim */}
      <path d="M14 51 C18 57 24 59 32 59 L68 59 C76 59 82 57 86 51 C84 56 80 59 73 59 L27 59 C20 59 16 56 14 51 Z"
            fill={stroke} opacity="0.07"/>
      {/* face — sits near the brim, two soft dot eyes + smile (matches reference) */}
      {mood === "happy" && (
        <g>
          <circle cx="41" cy="49" r="3.4" fill={stroke}/>
          <circle cx="59" cy="49" r="3.4" fill={stroke}/>
          <path d="M44 54.5 q6 5 12 0" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round"/>
        </g>
      )}
      {mood === "thinking" && (
        <g fill={stroke}>
          <circle cx="40" cy="50" r="2.2"/><circle cx="46" cy="50" r="2.2"/><circle cx="52" cy="50" r="2.2"/>
        </g>
      )}
      {mood === "working" && (
        <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round">
          <path d="M37 50 q4 -5 8 0"/>
          <path d="M55 50 q4 -5 8 0"/>
          <path d="M44 55 q6 5 12 0"/>
        </g>
      )}
      {mood === "sleeping" && (
        <g fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round">
          <path d="M37 50 h8"/><path d="M55 50 h8"/>
        </g>
      )}
    </svg>
  );
}

// ── Wordmark ────────────────────────────────────────────────────────
function SproutWordmark({ size = 22, color = sprT.ink, mascot = true }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap: size*0.35, color, fontFamily: fontDisplay}}>
      {mascot && <SproutMascot size={size*1.55}/>}
      <span style={{fontWeight: 700, fontSize: size, letterSpacing:"-0.02em"}}>bloom</span>
    </div>
  );
}

// ── Pill / Chip ─────────────────────────────────────────────────────
function SprChip({ children, fill = sprT.cyan, ink = sprT.ink, style, size = "md", onClick }) {
  const padding = size === "sm" ? "5px 10px" : size === "lg" ? "12px 18px" : "8px 14px";
  const fs = size === "sm" ? 12 : size === "lg" ? 15 : 13;
  return (
    <button onClick={onClick} style={{
      padding, borderRadius: 999, background: fill, color: ink,
      border: "none", fontWeight: 700, fontSize: fs, fontFamily: fontBody,
      letterSpacing:"-0.01em", lineHeight: 1, cursor: "pointer",
      display:"inline-flex", alignItems:"center", gap: 6,
      ...style,
    }}>{children}</button>
  );
}

// ── Buttons ─────────────────────────────────────────────────────────
function SprBtn({ children, variant = "primary", size = "lg", style, icon, onClick, full }) {
  const sizes = {
    sm: {pad:"10px 16px", fs:14, h:38},
    md: {pad:"12px 20px", fs:15, h:46},
    lg: {pad:"16px 26px", fs:17, h:56},
  };
  const s = sizes[size];
  const variants = {
    primary:{ bg: sprT.ink, fg: "#fff", bd: "transparent"},
    secondary:{ bg: sprT.cyan, fg: sprT.ink, bd: "transparent"},
    ghost:{ bg: "transparent", fg: sprT.ink, bd: sprT.ink},
    flame:{ bg: sprT.flame, fg:"#fff", bd:"transparent"},
    paper:{ bg:"#fff", fg: sprT.ink, bd: sprT.hairline},
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      padding: s.pad, height: s.h, width: full ? "100%" : "auto",
      borderRadius: 999, background: v.bg, color: v.fg, border: `1.5px solid ${v.bd}`,
      fontWeight: 700, fontSize: s.fs, fontFamily: fontBody, letterSpacing:"-0.01em",
      cursor: "pointer", display:"inline-flex", alignItems:"center", justifyContent:"center", gap:10,
      ...style,
    }}>
      {icon}
      {children}
    </button>
  );
}

// ── Chat bubble (Sprout messages) ───────────────────────────────────
function SprBubble({ children, from = "sprout", style }) {
  const isSprout = from === "sprout";
  return (
    <div style={{
      display:"flex", justifyContent: isSprout ? "flex-start" : "flex-end",
      ...style,
    }}>
      <div style={{
        maxWidth: "82%",
        background: isSprout ? "#fff" : sprT.ink,
        color: isSprout ? sprT.ink : "#fff",
        padding: "12px 16px",
        borderRadius: isSprout ? "22px 22px 22px 6px" : "22px 22px 6px 22px",
        fontSize: 15.5, lineHeight: 1.4, fontWeight: 500,
        fontFamily: fontBody, letterSpacing:"-0.005em",
        boxShadow: isSprout ? "0 1px 0 rgba(0,0,0,0.04)" : "none",
        border: isSprout ? `1px solid ${sprT.hairline}` : "none",
      }}>{children}</div>
    </div>
  );
}

// ── Avatar with mascot ──────────────────────────────────────────────
function SprAvatar({ size = 36, cap = sprT.cyan, mood, ring }) {
  return (
    <div style={{
      width: size, height: size, borderRadius:"50%",
      background: cap, display:"grid", placeItems:"center",
      border: ring ? `2px solid ${sprT.ink}` : "none",
      flexShrink: 0,
    }}>
      <SproutMascot size={size*0.78} cap={cap} mood={mood}/>
    </div>
  );
}

// ── Stat tile (used in ROI moments) ─────────────────────────────────
function StatTile({ value, label, tint = sprT.cyan, style }) {
  return (
    <div style={{
      background: tint, borderRadius: 22, padding: "16px 18px",
      display:"flex", flexDirection:"column", gap: 4, ...style,
    }}>
      <div style={{fontFamily: fontDisplay, fontWeight: 700, fontSize: 36, lineHeight: 1, letterSpacing:"-0.03em", color: sprT.ink}}>
        {value}
      </div>
      <div style={{fontSize: 13, fontWeight: 600, color: sprT.ink, opacity: 0.7, letterSpacing:"-0.01em"}}>
        {label}
      </div>
    </div>
  );
}

// ── Sparkle icon ────────────────────────────────────────────────────
function Sparkle({ size = 14, color = sprT.ink }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
      <path d="M12 2 l1.8 6.6 L20 10 l-6.2 1.4 L12 18 l-1.8 -6.6 L4 10 l6.2 -1.4 z"/>
      <circle cx="19" cy="5" r="1.4"/>
      <circle cx="5" cy="18" r="1"/>
    </svg>
  );
}

// ── Status pill (e.g. "Sprout is applying") ─────────────────────────
function LivePill({ children, color = sprT.mint, ink = sprT.mintInk }) {
  return (
    <div style={{
      display:"inline-flex", alignItems:"center", gap: 8,
      background: color, color: ink, padding: "6px 12px",
      borderRadius: 999, fontSize: 13, fontWeight: 700, fontFamily: fontBody,
    }}>
      <span style={{width: 7, height: 7, borderRadius: "50%", background: ink, animation: "sprPulse 1.6s ease-in-out infinite"}}/>
      {children}
    </div>
  );
}

// ── Phone safe area helper — gives content area inside IOSDevice ───
function PhoneScroll({ children, bg = sprT.cream, header }) {
  return (
    <div style={{
      paddingTop: 56, paddingBottom: 40, // status + home indicator
      minHeight: "100%", background: bg, fontFamily: fontBody, color: sprT.ink,
      display:"flex", flexDirection:"column",
    }}>
      {header}
      <div style={{flex: 1, display:"flex", flexDirection:"column"}}>{children}</div>
    </div>
  );
}

// ── Export ──────────────────────────────────────────────────────────
Object.assign(window, {
  sprT, fontDisplay, fontBody, fontData,
  SproutMascot, SproutWordmark, SprChip, SprBtn, SprBubble,
  SprAvatar, StatTile, Sparkle, LivePill, PhoneScroll,
});

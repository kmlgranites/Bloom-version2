// =====================================================================
// Backdoor V1 · shared UI primitives
// Tap-first conventions: dark-filled pill + ✓ = selected, light outline = not.
// =====================================================================
const T = window.sprT, FD = window.fontDisplay, FB = window.fontBody;
const { SprBubble: Bubble, SproutMascot: Mascot } = window;

function Question({ label, hint, answered, error, children }) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:8}}>
      <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", gap:10}}>
        <div style={{fontSize:13.5, fontWeight:700, color:T.ink, letterSpacing:"-0.01em"}}>
          {label}{hint && <span style={{fontWeight:500, color:T.muted, fontSize:12.5}}> · {hint}</span>}
        </div>
        {answered && <div style={{fontSize:11.5, fontWeight:700, color:T.cyanInk, opacity:.8}}>✓ {answered}</div>}
      </div>
      {children}
      {error && <InlineErr>{error}</InlineErr>}
    </div>
  );
}

function InlineErr({ children }) {
  return (
    <div style={{display:"flex", gap:7, alignItems:"center", background:"#FFF6F3", border:`1px solid ${T.blush}`,
      color:T.blushInk, fontSize:12, fontWeight:700, borderRadius:9, padding:"6px 10px", lineHeight:1.3}}>
      <span>⚠</span><span>{children}</span>
    </div>
  );
}

function Pill({ label, selected, locked, soon, onClick, soft }) {
  const dead = soon || locked;
  return (
    <button onClick={()=>!dead && onClick && onClick()} style={{
      padding:"8px 14px", borderRadius:999, fontFamily:FB, fontSize:13, fontWeight:700, lineHeight:1,
      letterSpacing:"-0.01em", display:"inline-flex", alignItems:"center", gap:6,
      background: selected ? (soft ? T.cyan : T.ink) : (soon ? "transparent" : "#fff"),
      color: selected && !soft ? "#fff" : (soon ? T.muted : T.ink),
      border: selected ? "1.5px solid transparent" : `1.5px solid ${T.hairline}`,
      opacity: soon ? .55 : (locked ? .65 : 1),
      cursor: dead ? "default" : "pointer", transition:"all .15s",
    }}>
      {selected && "✓ "}{label}
      {soon && <span style={{fontSize:9.5, fontWeight:800, letterSpacing:".05em", padding:"2px 6px",
        borderRadius:999, background:T.cream, color:T.muted, border:`1px solid ${T.hairline}`}}>SOON</span>}
    </button>
  );
}

// items: "String" | {id,label,soon}
function PillRow({ items, value, setValue, multi, soft, locked }) {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
      {items.map(it => {
        const id = typeof it === "string" ? it : it.id;
        const label = typeof it === "string" ? it : it.label;
        const soon = typeof it === "object" && it.soon;
        const selected = multi ? (value||[]).includes(id) : value === id;
        return <Pill key={id} label={label} selected={selected} soon={soon} locked={locked} soft={soft}
          onClick={()=>setValue(id)}/>;
      })}
    </div>
  );
}

function toggleArr(arr, v){ return arr.includes(v) ? arr.filter(x=>x!==v) : [...arr, v]; }

// A light nested card — used for per-country eligibility and parsed résumé blocks
function SubCard({ title, tint, children }) {
  return (
    <div style={{background:"#fff", border:`1px solid ${T.hairline}`, borderRadius:16, padding:"14px 15px",
      display:"flex", flexDirection:"column", gap:12}}>
      {title && <div style={{fontSize:12.5, fontWeight:800, color:T.ink, letterSpacing:"-0.01em",
        display:"flex", alignItems:"center", gap:7}}>
        {tint && <span style={{width:8, height:8, borderRadius:"50%", background:tint}}/>}{title}</div>}
      {children}
    </div>
  );
}

function Toggle({ on, onClick, label, desc, locked }) {
  return (
    <div onClick={()=>!locked && onClick && onClick()} style={{display:"flex", alignItems:"center", gap:12,
      cursor: locked ? "default" : "pointer", padding:"2px 0"}}>
      <div style={{width:40, height:23, borderRadius:999, flexShrink:0, position:"relative",
        background: on ? T.ink : "#CDD6D7", opacity: locked ? .6 : 1, transition:"background .2s"}}>
        <div style={{position:"absolute", top:3, left: on ? 20 : 3, width:17, height:17, borderRadius:"50%",
          background:"#fff", boxShadow:"0 1px 3px rgba(0,0,0,.2)", transition:"left .2s"}}/>
      </div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{fontSize:13.5, fontWeight:700, color:T.ink, display:"flex", alignItems:"center", gap:7}}>
          {label}
          {locked && <span style={{fontSize:9.5, fontWeight:800, letterSpacing:".05em", padding:"2px 6px",
            borderRadius:999, background:T.cream, color:T.muted}}>ALWAYS ON</span>}
        </div>
        {desc && <div style={{fontSize:12, color:T.muted, fontWeight:600, marginTop:2, lineHeight:1.35}}>{desc}</div>}
      </div>
    </div>
  );
}

// Text input — only where tapping genuinely can't work
function Field({ value, onChange, placeholder, prefix, error, width, locked, mono }) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:6, width: width||"auto"}}>
      <div style={{display:"flex", alignItems:"center", gap:8, background:"#fff", borderRadius:12,
        border:`1.5px solid ${error ? T.blush : T.hairline}`, padding:"10px 13px"}}>
        {prefix && <span style={{fontSize:14, fontWeight:800, color:T.ink, flexShrink:0}}>{prefix}</span>}
        <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} disabled={locked}
          style={{flex:1, minWidth:0, border:"none", outline:"none", background:"transparent", fontFamily: mono?window.fontData:FB,
            fontSize:14.5, fontWeight:600, color:T.ink}}/>
      </div>
      {error && <InlineErr>{error}</InlineErr>}
    </div>
  );
}

function CTA({ label, onClick }) {
  return (
    <div style={{display:"flex", justifyContent:"flex-end", marginTop:8}}>
      <button onClick={onClick} style={{padding:"13px 24px", borderRadius:999, background:T.ink, color:"#fff",
        fontFamily:FB, fontSize:14.5, fontWeight:700, border:"none", cursor:"pointer"}}>{label} →</button>
    </div>
  );
}

function KV({ k, v }) {
  return (
    <div style={{display:"flex", gap:14, alignItems:"baseline", padding:"9px 12px", background:T.cream, borderRadius:10}}>
      <div style={{fontSize:11.5, fontWeight:700, color:T.muted, width:118, flexShrink:0, letterSpacing:".01em"}}>{k}</div>
      <div style={{fontSize:13, fontWeight:700, color:T.ink, lineHeight:1.35}}>{v}</div>
    </div>
  );
}

function ChapterMark({ n, icon, label, active }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:12, padding:"16px 0 6px"}}>
      <div style={{width:26, height:26, borderRadius:8, background: active?T.ink:T.cyan, color: active?"#fff":T.ink,
        display:"grid", placeItems:"center", fontWeight:800, fontSize:12, fontFamily:FD}}>{n}</div>
      <div style={{fontFamily:FD, fontWeight:700, fontSize:14, color:T.ink, letterSpacing:"-0.01em", flexShrink:0, whiteSpace:"nowrap"}}>{icon} {label}</div>
      <div style={{flex:1, height:1, background:T.hairline}}/>
      {!active && <div style={{fontSize:11, fontWeight:800, color:T.cyanInk, letterSpacing:".04em"}}>✓ DONE</div>}
    </div>
  );
}

function Note({ tint, ink, icon, children }) {
  return (
    <div style={{display:"flex", gap:10, alignItems:"flex-start", padding:"11px 14px", background:tint||T.lilac,
      borderRadius:14}}>
      <span style={{fontSize:16, lineHeight:1.2}}>{icon}</span>
      <div style={{flex:1, fontSize:12.5, color: ink||T.ink, fontWeight:600, lineHeight:1.45}}>{children}</div>
    </div>
  );
}

Object.assign(window, { T, FD, FB, Bubble, Mascot, Question, InlineErr, Pill, PillRow,
  toggleArr, SubCard, Toggle, Field, CTA, KV, ChapterMark, Note });

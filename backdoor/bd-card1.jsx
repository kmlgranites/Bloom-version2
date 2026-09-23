// =====================================================================
// Backdoor V1 · Card 1 (Step 2) — Job role form + résumé parsing rail
// =====================================================================
const { T:qT, FD:qFD, FB:qFB, InlineErr:QErr } = window;

const Q_ROLES = ["Software Engineer", {label:"Product Designer", soon:true}, {label:"Product Manager", soon:true},
  {label:"Data / ML", soon:true}, {label:"Marketing", soon:true}, {label:"Sales", soon:true}];
const Q_KINDS = ["Frontend","Backend","Full-Stack","Mobile (iOS/Android)","DevOps / Infra",
  "Data Engineer","ML / AI Engineer","QA / Test","Security","Embedded","Engineering Manager"];
const Q_LEVELS = ["Entry","Mid","Senior","Staff","Lead"];
const Q_TYPES = ["Fulltime","Part-time","Contractor","Internship"];
const Q_SETTING = ["Remote","Hybrid","Onsite OK"];

function QLabel({ children, hint }) {
  return (
    <div style={{fontSize:11, fontWeight:800, color:qT.muted, letterSpacing:".07em", marginBottom:8}}>
      {children}{hint && <span style={{fontWeight:600, textTransform:"none", letterSpacing:0}}> · {hint}</span>}
    </div>
  );
}

function QSelect({ value, onChange, options, placeholder }) {
  return (
    <div style={{position:"relative"}}>
      <select value={value||""} onChange={e=>onChange(e.target.value)}
        style={{width:"100%", appearance:"none", background:"transparent", border:"none",
          borderBottom:`1.5px solid ${qT.hairline}`, padding:"10px 26px 10px 0", fontFamily:qFB,
          fontSize:16, fontWeight:600, color: value ? qT.ink : qT.muted, outline:"none", cursor:"pointer",
          borderRadius:0}}>
        <option value="" disabled>{placeholder}</option>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
      <span style={{position:"absolute", right:4, top:12, pointerEvents:"none", color:qT.muted, fontSize:12}}>▾</span>
    </div>
  );
}

function QChecks({ values, onToggle, options, cols }) {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
      {options.map(o=>{
        const on = values.indexOf(o) > -1;
        return (
          <button key={o} type="button" onClick={()=>onToggle(o)}
            style={{display:"inline-flex", alignItems:"center", gap:9, padding:"10px 14px", borderRadius:8,
              border:`1px solid ${on ? "#9FB3B8" : qT.hairline}`, background: on ? "#F4F7F7" : "#fff",
              fontFamily:qFB, fontSize:13.5, fontWeight: on ? 700 : 600, color:qT.ink, cursor:"pointer",
              textAlign:"left", whiteSpace:"nowrap"}}>
            <span style={{width:16, height:16, borderRadius:4, flexShrink:0, display:"grid", placeItems:"center",
              border:`1.5px solid ${on ? qT.ink : qT.hairline}`, background: on ? qT.ink : "#fff",
              color:"#fff", fontSize:10, fontWeight:800}}>{on ? "✓" : ""}</span>
            <span>{o}</span>
          </button>
        );
      })}
    </div>
  );
}

function QDropdown({ value, onChange, options, placeholder }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    function away(e){ if (box.current && !box.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", away);
    return ()=>document.removeEventListener("mousedown", away);
  }, []);
  return (
    <div ref={box} style={{position:"relative"}}>
      <button type="button" onClick={()=>setOpen(o=>!o)}
        style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
          background:"#fff", border:`1.5px solid ${open ? qT.ink : qT.hairline}`, borderRadius:8,
          padding:"12px 14px", fontFamily:qFB, fontSize:14.5, fontWeight:500,
          color: value ? qT.ink : qT.muted, cursor:"pointer", textAlign:"left"}}>
        <span style={{minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{value || placeholder}</span>
        <span style={{display:"flex", transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      {open && (
        <div style={{position:"absolute", zIndex:20, top:"calc(100% + 6px)", left:0, right:0, background:"#fff",
          border:`1px solid ${qT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)",
          padding:6, maxHeight:260, overflow:"auto"}}>
          {options.map(o=>{
            const label = typeof o === "string" ? o : o.label;
            const soon = typeof o !== "string" && o.soon;
            return (
              <button key={label} type="button" disabled={soon}
                onClick={()=>{ if(!soon){ onChange(label); setOpen(false); } }}
                style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
                  padding:"10px 12px", borderRadius:6, fontFamily:qFB, fontSize:14, fontWeight:500,
                  color: soon ? qT.muted : qT.ink, background: value===label ? "#F7F1E6" : "transparent",
                  cursor: soon ? "default" : "pointer", textAlign:"left", opacity: soon ? .6 : 1}}>
                <span>{label}</span>
                {soon && <span style={{fontSize:10.5, fontWeight:800, letterSpacing:".05em", color:qT.muted,
                  border:`1px solid ${qT.hairline}`, borderRadius:999, padding:"2px 7px"}}>SOON</span>}
                {!soon && value===label && <span style={{color:"#1F8A5B", fontWeight:800}}>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function QMultiSelect({ values, onChange, options, placeholder }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    function away(e){ if (box.current && !box.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", away);
    return ()=>document.removeEventListener("mousedown", away);
  }, []);
  function toggle(o){ onChange(values.indexOf(o) > -1 ? values.filter(x=>x!==o) : values.concat([o])); }
  return (
    <div ref={box} style={{position:"relative"}}>
      <div onClick={()=>setOpen(o=>!o)}
        style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", minHeight:48,
          background:"#fff", border:`1.5px solid ${open ? qT.ink : qT.hairline}`, borderRadius:8,
          padding:"9px 40px 9px 12px", cursor:"pointer", position:"relative"}}>
        {values.length === 0 && (
          <span style={{fontSize:14.5, fontWeight:500, color:qT.muted}}>{placeholder}</span>
        )}
        {values.map(v=>(
          <span key={v} style={{display:"inline-flex", alignItems:"center", gap:6, background:"#D7F5E3",
            color:"#14663F", borderRadius:8, padding:"5px 9px", fontSize:13, fontWeight:700}}>
            {v}
            <span onClick={e=>{ e.stopPropagation(); toggle(v); }}
              style={{cursor:"pointer", fontSize:13, opacity:.75}}>×</span>
          </span>
        ))}
        <span style={{position:"absolute", right:12, display:"flex",
          transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></span>
      </div>
      {open && (
        <div style={{position:"absolute", zIndex:20, top:"calc(100% + 6px)", left:0, right:0, background:"#fff",
          border:`1px solid ${qT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)",
          padding:6, maxHeight:260, overflow:"auto"}}>
          {options.map(o=>{
            const on = values.indexOf(o) > -1;
            return (
              <button key={o} type="button" onClick={()=>toggle(o)}
                style={{width:"100%", display:"flex", alignItems:"center", gap:10, padding:"9px 12px",
                  borderRadius:6, fontFamily:qFB, fontSize:14, fontWeight:500, color:qT.ink,
                  background: on ? "#F4FBF7" : "transparent", cursor:"pointer", textAlign:"left"}}>
                <span style={{width:17, height:17, borderRadius:5, flexShrink:0, display:"grid", placeItems:"center",
                  border:`1.5px solid ${on ? "#1F8A5B" : qT.hairline}`, background: on ? "#1F8A5B" : "#fff",
                  color:"#fff", fontSize:11, fontWeight:800}}>{on ? "✓" : ""}</span>
                <span>{o}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function QSegment({ value, onChange, options }) {
  return (
    <div style={{display:"flex", gap:4, background:"#F4F5F6", border:`1px solid ${qT.hairline}`,
      borderRadius:10, padding:4}}>
      {options.map(o=>{
        const on = value===o;
        return (
          <button key={o} type="button" onClick={()=>onChange(o)}
            style={{flex:1, minWidth:0, padding:"9px 6px", fontFamily:qFB, fontSize:13, cursor:"pointer",
              whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", borderRadius:7, border:"none",
              fontWeight: on ? 700 : 600, transition:"background .15s",
              background: on ? "#fff" : "transparent", color: on ? qT.ink : "#5C6B70",
              boxShadow: on ? "0 1px 2px rgba(2,47,54,.12)" : "none"}}>{o}</button>
        );
      })}
    </div>
  );
}

function ParseRail({ pct }) {
  const done = pct >= 100;
  return (
    <div style={{background:"#F9FAFB", padding:"44px 32px 48px", display:"flex", flexDirection:"column", gap:26}}>
      <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
          <span style={{fontSize:11, fontWeight:800, color:qT.muted, letterSpacing:".07em"}}>RESUME</span>
          <span style={{fontSize:12, fontWeight:700, color: done ? "#1F8A5B" : qT.ink,
            display:"flex", alignItems:"center", gap:6}}>
            <span style={{width:7, height:7, borderRadius:"50%", background: done ? "#1F8A5B" : "#F0A202"}}/>
            {done ? "done" : "in progress"}
          </span>
        </div>
        <div style={{height:5, borderRadius:99, background:"#E6E8EA", overflow:"hidden"}}>
          <div style={{width:`${pct}%`, height:"100%", background:qT.ink, transition:"width .4s linear"}}/>
        </div>
        <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55, marginTop:12}}>
          {done ? "Parsed. While you finish setup, we're matching jobs for you."
                : "Takes 30–60 seconds. I'm pulling your work history and skills while you finish these."}
        </div>
      </div>
      <div>
        <div style={{fontSize:13.5, fontWeight:800, color:qT.ink, marginBottom:8}}>Why I ask</div>
        <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
          Every application asks these. Answer once here and I'll fill the forms for you.
        </div>
      </div>
    </div>
  );
}

function Card1({ st, set, locked, onNext }) {
  const [err, setErr] = React.useState(null);
  const [pct, setPct] = React.useState(locked ? 100 : 12);

  React.useEffect(()=>{
    if (locked) return;
    const t = setInterval(()=>setPct(p => p >= 100 ? 100 : p + 4), 900);
    return ()=>clearInterval(t);
  }, [locked]);

  function tog(list, v){ return list.indexOf(v) > -1 ? list.filter(x=>x!==v) : list.concat([v]); }
  function next() {
    if (!st.role) return setErr("Pick a role so I know what to search for.");
    if (!st.engKinds.length) return setErr("Pick at least one — it's how I match you to the right reqs.");
    if (!st.level.length) return setErr("Pick at least one level.");
    if (!st.setting.length) return setErr("Pick at least one work setting.");
    setErr(null); onNext();
  }

  if (locked) return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8, padding:"14px 16px", background:"#F9FAFB", borderRadius:16}}>
      {[st.role, st.level.join(" · "), st.engKinds.join(" · "), st.types.join(" · "), st.setting.join(" · ")].filter(Boolean).map(x=>(
        <span key={x} style={{fontSize:12.5, fontWeight:700, color:qT.ink, background:"#fff",
          border:`1px solid ${qT.hairline}`, borderRadius:999, padding:"5px 11px"}}>{x}</span>
      ))}
    </div>
  );

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff",
      border:`1px solid ${qT.hairline}`, borderRadius:24, overflow:"hidden"}}>
      <ParseRail pct={pct}/>
      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:24}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:qT.cyanInk, letterSpacing:".07em"}}>ROLE</div>
          <div style={{fontFamily:qFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
            What job role are you looking for?
          </div>
          <div style={{fontSize:13.5, color:qT.muted, fontWeight:600, lineHeight:1.45}}>
            This sets what I search for. You can change it any time in Settings.
          </div>
        </div>

        <div>
          <QLabel>ROLE</QLabel>
          <QDropdown value={st.role} onChange={v=>{set({role:v}); setErr(null);}} options={Q_ROLES}
            placeholder="Select a role…"/>
          <div style={{fontSize:11.5, color:qT.muted, fontWeight:600, marginTop:8}}>
            Engineering is all I cover well today. The rest unlock soon — I'll ping you.
          </div>
        </div>

        <div>
          <QLabel hint="pick all that count">SPECIALISATION</QLabel>
          <QMultiSelect values={st.engKinds} options={Q_KINDS} placeholder="Select your specialisations…"
            onChange={v=>{ set({engKinds:v}); setErr(null); }}/>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"minmax(0,1fr)", gap:20}}>
          <div>
            <QLabel hint="pick all that count">LEVEL</QLabel>
            <QChecks values={st.level} options={Q_LEVELS} cols={5} onToggle={v=>set({level: tog(st.level, v)})}/>
          </div>
          <div>
            <QLabel hint="pick all that count">WORK SETTING</QLabel>
            <QChecks values={st.setting} options={Q_SETTING} cols={3} onToggle={v=>set({setting: tog(st.setting, v)})}/>
          </div>
        </div>

        <div>
          <QLabel hint="pick all that count">EMPLOYMENT TYPE</QLabel>
          <QChecks values={st.types} options={Q_TYPES} cols={4} onToggle={v=>set({types: tog(st.types, v)})}/>
        </div>

        {err && <QErr>{err}</QErr>}

        <div style={{display:"flex", alignItems:"center", gap:14, paddingTop:4}}>
          <button onClick={next} className="bd-primary" style={{padding:"13px 24px", borderRadius:999,
            background:qT.ink, color:"#fff", fontFamily:qFB, fontSize:14.5, fontWeight:700, border:"none",
            cursor:"pointer"}}>Continue<span className="bd-arrow">→</span></button>
          <span style={{fontSize:11.5, fontWeight:600, color:qT.muted}}>or press ↵ Enter</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Card1 });

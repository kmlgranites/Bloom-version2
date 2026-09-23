// =====================================================================
// Backdoor V1 · Step 4 — A few last questions (framed checklist)
// =====================================================================
const { T:kT, FD:kFD, FB:kFB } = window;

const KChev = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);

function KGroup({ children }) {
  return <div style={{fontSize:11, fontWeight:700, color:kT.muted, letterSpacing:".08em",
    padding:"13px 18px", background:"#F9FAFB", borderBottom:`1px solid ${kT.hairline}`}}>{children}</div>;
}

function KToggle({ value, onChange, options }) {
  return (
    <div style={{display:"inline-flex", background:"#F1F3F4", borderRadius:8, padding:3, gap:2, flexShrink:0}}>
      {options.map(o=>{
        const on = value === o;
        return (
          <button key={o} type="button" onClick={()=>onChange(o)}
            style={{padding:"7px 14px", borderRadius:6, fontFamily:kFB, fontSize:13, fontWeight:600,
              cursor:"pointer", border:"none", background: on ? kT.ink : "transparent",
              color: on ? "#fff" : "#4B5A5E", transition:"all .12s"}}>{o}</button>
        );
      })}
    </div>
  );
}

function KSelect({ value, onChange, options }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    function away(e){ if (box.current && !box.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", away);
    return ()=>document.removeEventListener("mousedown", away);
  }, []);
  return (
    <div ref={box} style={{position:"relative", minWidth:210}}>
      <button type="button" onClick={()=>setOpen(o=>!o)}
        style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
          background:"transparent", border:"none", borderBottom:`1.5px solid ${open ? kT.ink : kT.hairline}`,
          padding:"7px 2px", fontFamily:kFB, fontSize:14.5, fontWeight:500,
          color: value ? kT.ink : kT.muted, cursor:"pointer", textAlign:"left"}}>
        <span>{value || "Select…"}</span>
        <span style={{display:"flex", transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><KChev/></span>
      </button>
      {open && (
        <div style={{position:"absolute", zIndex:30, top:"calc(100% + 6px)", right:0, minWidth:"100%", background:"#fff",
          border:`1px solid ${kT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)",
          padding:6, maxHeight:240, overflow:"auto"}}>
          {options.map(o=>(
            <button key={o} type="button" onClick={()=>{ onChange(o); setOpen(false); }}
              style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12,
                padding:"9px 12px", borderRadius:6, fontFamily:kFB, fontSize:14, fontWeight:500, color:kT.ink,
                background: value===o ? "#F7F1E6" : "transparent", cursor:"pointer", textAlign:"left",
                whiteSpace:"nowrap"}}>
              <span>{o}</span>{value===o && <span style={{color:"#1F8A5B", fontWeight:800}}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function KRow({ label, hint, children, last }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:20,
      padding:"15px 18px", borderBottom: last ? "none" : `1px solid ${kT.hairline}`}}>
      <div style={{minWidth:0}}>
        <div style={{fontSize:14, fontWeight:600, color:kT.ink, lineHeight:1.35}}>{label}</div>
        {hint && <div style={{fontSize:12, fontWeight:600, color:kT.muted, marginTop:3, lineHeight:1.4}}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

const K_GENDER = ["Male","Female","Non-binary","Prefer not to say"];
const K_RACE = ["Asian","Black or African American","Hispanic or Latino","Native American or Alaska Native",
  "Native Hawaiian or Pacific Islander","White","Two or more races","Prefer not to say"];

function ChecklistCard({ st, set, locked, onNext, toast }) {
  const q = st.checklist || {};
  const upd = patch => set({ checklist: Object.assign({}, q, patch) });

  React.useEffect(()=>{
    if (locked) return;
    function onKey(e){
      if (e.key !== "Enter") return;
      const t = e.target && e.target.tagName;
      if (t === "TEXTAREA" || (t === "INPUT" && e.target.type !== "checkbox")) return;
      onNext();
    }
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  });


  if (locked) return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8, padding:"14px 16px", background:"#F9FAFB", borderRadius:16}}>
      {["Checklist complete"].map(x=>(
        <span key={x} style={{fontSize:12.5, fontWeight:700, color:kT.ink, background:"#fff",
          border:`1px solid ${kT.hairline}`, borderRadius:999, padding:"5px 11px"}}>{x}</span>
      ))}
    </div>
  );

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff",
      border:`1px solid ${kT.hairline}`, borderRadius:24}}>

      <div style={{background:"#F9FAFB", borderRadius:"0 0 0 24px", padding:"44px 32px 48px",
        display:"flex", flexDirection:"column", gap:26}}>
        <div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
            <span style={{fontSize:11, fontWeight:800, color:kT.muted, letterSpacing:".07em"}}>RESUME</span>
            <span style={{fontSize:12, fontWeight:700, color:"#1F8A5B", display:"flex", alignItems:"center", gap:6}}>
              <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>done
            </span>
          </div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Parsed. While you finish setup, we're matching jobs for you.
          </div>
        </div>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:kT.ink, marginBottom:8}}>Why we ask</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Every application asks these. Answer once here, we fill the forms.
          </div>
        </div>
      </div>

      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:22}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:kT.muted, letterSpacing:".07em"}}>QUICK CHECKLIST</div>
          <div style={{fontFamily:kFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
            A few last questions.
          </div>
          <div style={{fontSize:13.5, color:kT.muted, fontWeight:600, lineHeight:1.5}}>
            Tap through. Defaults work for most people. Only change what applies.
          </div>
        </div>

        <div style={{border:`1px solid ${kT.hairline}`, borderRadius:12, overflow:"visible"}}>
          <KGroup>PREFERENCES</KGroup>
          <KRow label="Willing to relocate?">
            <KToggle value={q.relocate || "No"} options={["Yes","No"]} onChange={v=>upd({relocate:v})}/>
          </KRow>
          <KRow label="Can start immediately?">
            <KToggle value={q.startNow || "Yes"} options={["Yes","No"]} onChange={v=>upd({startNow:v})}/>
          </KRow>
          <KRow label="Need workplace accommodations?" hint="Disability, religious, or other." last>
            <KToggle value={q.accommodations || "Prefer not"} options={["Yes","No","Prefer not"]}
              onChange={v=>upd({accommodations:v})}/>
          </KRow>

          <KGroup>BACKGROUND</KGroup>
          <KRow label="GPA" hint="Some applications ask. Leave blank to skip.">
            <div style={{display:"flex", alignItems:"center", gap:10, flexShrink:0}}>
              <input value={q.gpa || ""} onChange={e=>upd({gpa:e.target.value.replace(/[^0-9.]/g,"").slice(0,4)})}
                placeholder="3.6" inputMode="decimal" aria-label="GPA"
                style={{width:64, background:"transparent", border:"none", borderBottom:`1.5px solid ${kT.hairline}`, outline:"none",
                  fontFamily:kFB, fontSize:14.5, fontWeight:500, color:kT.ink, padding:"7px 2px", textAlign:"right"}}/>
              <KToggle value={q.gpaScale || "/ 4.0"} options={["/ 4.0","/ 10"]} onChange={v=>upd({gpaScale:v})}/>
            </div>
          </KRow>
          <KRow label="Active government clearance?">
            <KToggle value={q.clearance || "No"} options={["Yes","No"]} onChange={v=>upd({clearance:v})}/>
          </KRow>
          <KRow label="Family ties to foreign governments?" hint="Employers are required to ask." last>
            <KToggle value={q.foreignTies || "No"} options={["Yes","No"]} onChange={v=>upd({foreignTies:v})}/>
          </KRow>

          <KGroup>DIVERSITY &amp; INCLUSION (OPTIONAL)</KGroup>
          <KRow label="Gender">
            <KSelect value={q.gender} options={K_GENDER} onChange={v=>upd({gender:v})}/>
          </KRow>
          <KRow label="Race / Ethnicity">
            <KSelect value={q.race} options={K_RACE} onChange={v=>upd({race:v})}/>
          </KRow>
          <KRow label="Veteran status">
            <KToggle value={q.veteran || "Prefer not"} options={["Yes","No","Prefer not"]} onChange={v=>upd({veteran:v})}/>
          </KRow>
          <KRow label="Disability status" hint="Employers must report this in aggregate." last>
            <KToggle value={q.disability || "Prefer not"} options={["Yes","No","Prefer not"]} onChange={v=>upd({disability:v})}/>
          </KRow>

          <KGroup>ADDITIONAL INFO (OPTIONAL)</KGroup>
          <div style={{padding:"15px 18px"}}>
            <div style={{fontSize:14, fontWeight:600, color:kT.ink}}>Anything else we should know when filling applications?</div>
            <div style={{fontSize:12, fontWeight:600, color:kT.muted, marginTop:3}}>
              e.g. "Notice period 15 days", "Willing to travel up to 50%"
            </div>
            <textarea value={q.notes || ""} onChange={e=>upd({notes:e.target.value})}
              placeholder="Optional notes…" rows={3}
              style={{width:"100%", marginTop:10, resize:"vertical", background:"transparent", border:"none",
                borderBottom:`1.5px solid ${kT.hairline}`, outline:"none", fontFamily:kFB, fontSize:14.5,
                fontWeight:500, color:kT.ink, padding:"6px 2px"}}/>
          </div>
        </div>

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, paddingTop:2}}>
          <span style={{fontSize:12.5, fontWeight:600, color:kT.muted, display:"flex", alignItems:"center", gap:7}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>Autosaved
          </span>
          <div style={{display:"flex", alignItems:"center", gap:14}}>
            <span style={{fontSize:11.5, fontWeight:600, color:kT.muted}}>or press ↵ Enter</span>
            <button onClick={onNext} className="bd-primary" style={{padding:"13px 26px", borderRadius:999,
              background:kT.ink, color:"#fff", fontFamily:kFB, fontSize:14.5, fontWeight:700, border:"none",
              cursor:"pointer"}}>Finish<span className="bd-arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ChecklistCard });

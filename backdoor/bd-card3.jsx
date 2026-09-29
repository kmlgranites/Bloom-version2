// =====================================================================
// Backdoor V1 · Step 3 — Where can you work? (framed)
// =====================================================================
const { T:wT, FD:wFD, FB:wFB, InlineErr:WErr } = window;

const W_MARKETS = [
  { code:"US", name:"United States" },
  { code:"CA", name:"Canada" },
];
const W_CITIZENSHIP = ["United States","Canada","India","United Kingdom","Australia","Germany","Nigeria","Brazil","Philippines","Other"];
const W_BASIS = {
  US: ["Citizen","Permanent resident (Green Card)","Visa holder","Other"],
  CA: ["Citizen","Permanent resident","Work permit holder","Other"],
};
const W_VISA = {
  US: ["H-1B","L-1","O-1","TN","F-1 OPT","F-1 STEM OPT","J-1","E-3","Other"],
  CA: ["Open work permit","Closed (employer-specific) permit","PGWP","IEC / Working Holiday","Other"],
};
const W_STATUS = ["Currently valid","Pending renewal","Applied, awaiting decision","Expired"];

const WChev = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);

function WFieldLabel({ children, req }) {
  return (
    <div style={{fontSize:13.5, fontWeight:700, color:wT.ink, marginBottom:7}}>
      {children}{req && <span style={{color:wT.muted, fontWeight:600}}> *</span>}
    </div>
  );
}

function WSelect({ value, onChange, options, placeholder, disabled }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    function away(e){ if (box.current && !box.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", away);
    return ()=>document.removeEventListener("mousedown", away);
  }, []);
  return (
    <div ref={box} style={{position:"relative"}}>
      <button type="button" disabled={disabled} onClick={()=>setOpen(o=>!o)}
        style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
          background: disabled ? "#F4F5F6" : "#fff", border:`1.5px solid ${open ? wT.ink : wT.hairline}`,
          borderRadius:8, padding:"11px 13px", fontFamily:wFB, fontSize:14.5, fontWeight:500,
          color: disabled ? "#A9B2B4" : (value ? wT.ink : wT.muted), cursor: disabled ? "default" : "pointer", textAlign:"left"}}>
        <span style={{minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{value || placeholder}</span>
        <span style={{display:"flex", transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><WChev/></span>
      </button>
      {open && !disabled && (
        <div style={{position:"absolute", zIndex:30, top:"calc(100% + 6px)", left:0, right:0, background:"#fff",
          border:`1px solid ${wT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)",
          padding:6, maxHeight:250, overflow:"auto"}}>
          {options.map(o=>(
            <button key={o} type="button" onClick={()=>{ onChange(o); setOpen(false); }}
              style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
                padding:"10px 12px", borderRadius:6, fontFamily:wFB, fontSize:14, fontWeight:500, color:wT.ink,
                background: value===o ? "#F7F1E6" : "transparent", cursor:"pointer", textAlign:"left"}}>
              <span>{o}</span>{value===o && <span style={{color:"#1F8A5B", fontWeight:800}}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function WMulti({ values, onChange, options, placeholder }) {
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
        style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", minHeight:46, background:"#fff",
          border:`1.5px solid ${open ? wT.ink : wT.hairline}`, borderRadius:8, padding:"8px 38px 8px 11px",
          cursor:"pointer", position:"relative"}}>
        {values.length === 0 && <span style={{fontSize:14.5, fontWeight:500, color:wT.muted}}>{placeholder}</span>}
        {values.map(v=>(
          <span key={v} style={{display:"inline-flex", alignItems:"center", gap:6, background:"#D7F5E3",
            color:"#14663F", borderRadius:6, padding:"4px 9px", fontSize:13, fontWeight:600}}>
            {v}<span onClick={e=>{ e.stopPropagation(); toggle(v); }} style={{cursor:"pointer", opacity:.7}}>×</span>
          </span>
        ))}
        <span style={{position:"absolute", right:11, display:"flex",
          transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><WChev/></span>
      </div>
      {open && (
        <div style={{position:"absolute", zIndex:30, top:"calc(100% + 6px)", left:0, right:0, background:"#fff",
          border:`1px solid ${wT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)",
          padding:6, maxHeight:250, overflow:"auto"}}>
          {options.map(o=>{
            const on = values.indexOf(o) > -1;
            return (
              <button key={o} type="button" onClick={()=>toggle(o)}
                style={{width:"100%", display:"flex", alignItems:"center", gap:10, padding:"9px 12px",
                  borderRadius:6, fontFamily:wFB, fontSize:14, fontWeight:500, color:wT.ink,
                  background: on ? "#F4FBF7" : "transparent", cursor:"pointer", textAlign:"left"}}>
                <span style={{width:17, height:17, borderRadius:5, flexShrink:0, display:"grid", placeItems:"center",
                  border:`1.5px solid ${on ? "#1F8A5B" : wT.hairline}`, background: on ? "#1F8A5B" : "#fff",
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

function WYesNo({ value, onChange }) {
  return (
    <div style={{display:"flex", gap:9}}>
      {[["Yes",true],["No",false]].map(([label, v])=>{
        const on = value === v;
        return (
          <button key={label} type="button" onClick={()=>onChange(v)}
            style={{minWidth:72, padding:"10px 18px", borderRadius:8, fontFamily:wFB, fontSize:14, fontWeight:600,
              cursor:"pointer", border:`1.5px solid ${on ? wT.ink : wT.hairline}`,
              background: on ? wT.ink : "#fff", color: on ? "#fff" : wT.ink}}>{label}</button>
        );
      })}
    </div>
  );
}

function WorkCard({ st, set, locked, onNext }) {
  const [err, setErr] = React.useState(null);
  const markets = st.markets || [];
  const detail = st.workDetail || {};

  function upd(code, patch) {
    set({ workDetail: Object.assign({}, detail, { [code]: Object.assign({}, detail[code] || {}, patch) }) });
    setErr(null);
  }
  function toggleMarket(code) {
    const on = markets.indexOf(code) > -1;
    set({ markets: on ? markets.filter(c=>c!==code) : markets.concat([code]) });
    setErr(null);
  }

  React.useEffect(()=>{
    if (locked) return;
    function onKey(e){
      if (e.key !== "Enter") return;
      const t = e.target && e.target.tagName;
      if (t === "TEXTAREA" || (t === "INPUT" && e.target.type !== "checkbox")) return;
      next();
    }
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  });

  function next() {
    if (!markets.length) return setErr("Pick at least one country you want to work in.");
    for (const code of markets) {
      const d = detail[code] || {};
      const name = W_MARKETS.filter(m=>m.code===code)[0].name;
      if (typeof d.authorized !== "boolean" || typeof d.sponsor !== "boolean")
        return setErr(`Answer both questions for ${name}.`);
      if (!d.basis) return setErr(`Pick an authorization basis for ${name}.`);
    }
    setErr(null); onNext();
  }

  if (locked) return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8, padding:"14px 16px", background:"#F9FAFB", borderRadius:16}}>
      {markets.map(code=>(
        <span key={code} style={{fontSize:12.5, fontWeight:700, color:wT.ink, background:"#fff",
          border:`1px solid ${wT.hairline}`, borderRadius:999, padding:"5px 11px"}}>
          {W_MARKETS.filter(m=>m.code===code)[0].name}
        </span>
      ))}
    </div>
  );

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff",
      border:`1px solid ${wT.hairline}`, borderRadius:24}}>

      <div style={{background:"#F9FAFB", borderRadius:"0 0 0 24px", padding:"44px 32px 48px", display:"flex", flexDirection:"column", gap:26}}>
        <div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
            <span style={{fontSize:11, fontWeight:800, color:wT.muted, letterSpacing:".07em"}}>RESUME</span>
            <span style={{fontSize:12, fontWeight:700, color:"#1F8A5B", display:"flex", alignItems:"center", gap:6}}>
              <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>done
            </span>
          </div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Parsed. While you finish setup, we're matching jobs for you.
          </div>
        </div>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:wT.ink, marginBottom:8}}>Why we ask</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Every application asks these. Answer once here, we fill the forms.
          </div>
        </div>
      </div>

      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:22}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:wT.muted, letterSpacing:".07em"}}>WORK ELIGIBILITY</div>
          <div style={{fontFamily:wFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
            Where can you work?
          </div>
          <div style={{fontSize:13.5, color:wT.muted, fontWeight:600, lineHeight:1.5}}>
            Bloom applies in the US and Canada. Pick where you'd take a job, then answer two quick questions for each.
          </div>
        </div>

        <div>
          <WFieldLabel>Countries of citizenship</WFieldLabel>
          <WMulti values={st.citizenship || []} options={W_CITIZENSHIP} placeholder="Select your citizenship…"
            onChange={v=>{ set({citizenship:v}); setErr(null); }}/>
        </div>

        <div>
          <WFieldLabel req>Countries where you want to work</WFieldLabel>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:9}}>
            {W_MARKETS.map(m=>{
              const on = markets.indexOf(m.code) > -1;
              return (
                <button key={m.code} type="button" onClick={()=>toggleMarket(m.code)}
                  style={{display:"flex", alignItems:"center", gap:10, padding:"13px 14px", borderRadius:8,
                    border:`1.5px solid ${on ? wT.ink : wT.hairline}`, background: on ? "#FFFCF6" : "#fff",
                    fontFamily:wFB, fontSize:14.5, fontWeight:600, color:wT.ink, cursor:"pointer", textAlign:"left"}}>
                  <span style={{width:17, height:17, borderRadius:5, flexShrink:0, display:"grid", placeItems:"center",
                    border:`1.5px solid ${on ? "#1F8A5B" : wT.hairline}`, background: on ? "#1F8A5B" : "#fff",
                    color:"#fff", fontSize:11, fontWeight:800}}>{on ? "✓" : ""}</span>
                  {m.name}
                </button>
              );
            })}
          </div>
        </div>

        {markets.length > 0 && (
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            <div style={{fontSize:11, fontWeight:800, color:wT.muted, letterSpacing:".07em"}}>
              {markets.length > 1 ? "ADDED COUNTRIES" : "ADDED COUNTRY"}
            </div>
            {W_MARKETS.filter(m=>markets.indexOf(m.code) > -1).map(m=>{
              const d = detail[m.code] || {};
              const needsVisa = d.basis === "Visa holder" || d.basis === "Work permit holder" || d.basis === "Other";
              return (
                <div key={m.code} style={{border:`1.5px solid ${wT.hairline}`, borderRadius:12, padding:"18px 18px 20px",
                  display:"flex", flexDirection:"column", gap:16}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
                    <div style={{fontSize:15.5, fontWeight:800, color:wT.ink, letterSpacing:"-0.01em"}}>{m.name}</div>
                    <button onClick={()=>toggleMarket(m.code)} className="bd-textlink"
                      style={{fontSize:12.5, fontWeight:600, color:wT.muted, cursor:"pointer"}}>× Remove</button>
                  </div>

                  <div>
                    <div style={{fontSize:13.5, fontWeight:600, color:wT.ink, marginBottom:8}}>
                      Are you legally authorized to work in {m.name}?
                    </div>
                    <WYesNo value={d.authorized} onChange={v=>upd(m.code, {authorized:v})}/>
                  </div>

                  <div>
                    <div style={{fontSize:13.5, fontWeight:600, color:wT.ink, marginBottom:8}}>
                      Will you now or in the future require employer sponsorship in {m.name}?
                    </div>
                    <WYesNo value={d.sponsor} onChange={v=>upd(m.code, {sponsor:v})}/>
                  </div>

                  <div>
                    <WFieldLabel>Authorization basis</WFieldLabel>
                    <WSelect value={d.basis} options={W_BASIS[m.code]} placeholder="Select a basis…"
                      onChange={v=>upd(m.code, {basis:v, visa:null, status:null})}/>
                  </div>

                  {needsVisa && (
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
                      <div>
                        <WFieldLabel>Visa or work permit type</WFieldLabel>
                        <WSelect value={d.visa} options={W_VISA[m.code]} placeholder="Select a type…"
                          onChange={v=>upd(m.code, {visa:v})}/>
                      </div>
                      <div>
                        <WFieldLabel>Authorization status</WFieldLabel>
                        <WSelect value={d.status} options={W_STATUS} placeholder="Select a status…"
                          onChange={v=>upd(m.code, {status:v})}/>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {err && <WErr>{err}</WErr>}

        <div style={{display:"flex", alignItems:"center", gap:14, paddingTop:4}}>
          <button onClick={next} className="bd-primary" style={{padding:"13px 24px", borderRadius:999,
            background:wT.ink, color:"#fff", fontFamily:wFB, fontSize:14.5, fontWeight:700, border:"none",
            cursor:"pointer"}}>Continue<span className="bd-arrow">→</span></button>
          <span style={{fontSize:11.5, fontWeight:600, color:wT.muted}}>or press ↵ Enter</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WorkCard });

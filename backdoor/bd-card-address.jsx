// =====================================================================
// Backdoor V1 · Step 1 — Where do you live? (address, prefilled from résumé)
// =====================================================================
const { T:adT, FD:adFD, FB:adFB } = window;

const AD_COUNTRIES = ["India","United States","Canada","United Kingdom","Singapore","Germany"];
const AD_STATES = {
  "India":["Tamil Nadu","Karnataka","Maharashtra","Telangana","Kerala","Delhi"],
  "United States":["California","New York","Texas","Washington","Massachusetts","Illinois"],
  "Canada":["Ontario","British Columbia","Quebec","Alberta"],
};

function AdLabel({ children }) {
  return <div style={{fontSize:11, fontWeight:800, color:adT.muted, letterSpacing:".08em", marginBottom:6}}>{children}</div>;
}
const adInput = big => ({width:"100%", boxSizing:"border-box", background:"transparent", border:"none",
  borderBottom:`1.5px solid ${adT.hairline}`, outline:"none", fontFamily: big ? adFD : adFB, fontSize: big ? 22 : 16,
  fontWeight: big ? 700 : 500, color:adT.ink, padding:"8px 2px 10px", letterSpacing: big ? "-0.01em" : 0});

function AdSelect({ value, options, onChange }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    const h = e=>{ if(box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h); return ()=>document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={box} style={{position:"relative"}}>
      <button type="button" onClick={()=>setOpen(o=>!o)} style={{...adInput(false), display:"flex", alignItems:"center",
        justifyContent:"space-between", cursor:"pointer", textAlign:"left", borderBottomColor: open ? adT.ink : adT.hairline}}>
        <span style={{color: value ? adT.ink : adT.muted}}>{value || "Select…"}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round"
          strokeLinejoin="round" style={{transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{position:"absolute", zIndex:30, top:"calc(100% + 6px)", left:0, right:0, background:"#fff",
          border:`1px solid ${adT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)", padding:6, maxHeight:240, overflow:"auto"}}>
          {options.map(o=>(
            <button key={o} type="button" onClick={()=>{ onChange(o); setOpen(false); }} style={{width:"100%", display:"flex",
              justifyContent:"space-between", padding:"9px 12px", borderRadius:6, border:"none", fontFamily:adFB, fontSize:14,
              fontWeight:500, color:adT.ink, background: value===o ? "#F7F1E6" : "transparent", cursor:"pointer", textAlign:"left"}}>
              <span>{o}</span>{value===o && <span style={{color:"#1F8A5B", fontWeight:800}}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AddressCard({ st, set, onNext }) {
  const a = st.address || { street:"", city:"Chennai", zip:"600119",
    county:"", country:"India", state:"Tamil Nadu" };
  const upd = patch => set({ address: Object.assign({}, a, patch) });
  const [err, setErr] = React.useState(null);
  React.useEffect(()=>{ if(!st.address) set({ address:a }); }, []);

  function next() {
    if (!a.street.trim() || !a.city.trim() || !a.zip.trim()) return setErr("Add your street, city and ZIP. Most job sites won't submit without them.");
    setErr(null); onNext();
  }
  React.useEffect(()=>{
    function onKey(e){ if(e.key!=="Enter") return; if(e.target && e.target.tagName==="TEXTAREA") return; e.preventDefault(); next(); }
    window.addEventListener("keydown", onKey); return ()=>window.removeEventListener("keydown", onKey);
  });

  const chips = [a.city, a.state, a.zip, a.country].filter(Boolean);
  const states = AD_STATES[a.country] || [];

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff", borderRadius:24}}>
      <div style={{background:"#F9FAFB", borderRadius:"0 0 0 24px", padding:"44px 32px 48px", display:"flex", flexDirection:"column", gap:26}}>
        <div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
            <span style={{fontSize:11, fontWeight:800, color:adT.muted, letterSpacing:".07em"}}>RESUME</span>
            <span style={{fontSize:12, fontWeight:700, color:"#1F8A5B", display:"flex", alignItems:"center", gap:6}}>
              <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>done
            </span>
          </div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>Parsed. While you finish setup, we're matching jobs for you.</div>
        </div>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:adT.ink, marginBottom:8}}>Why we ask</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>Most application forms require a full address. Enter it once here and we'll fill it in every time.</div>
        </div>
      </div>

      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:26}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:adT.muted, letterSpacing:".07em"}}>LOCATION</div>
          <div style={{fontFamily:adFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>Where do you live?</div>
          <div style={{fontSize:13.5, color:adT.muted, fontWeight:600, lineHeight:1.5}}>Pulled from your résumé. Check it's right.</div>
        </div>

        <div>
          <AdLabel>STREET ADDRESS</AdLabel>
          <input value={a.street} onChange={e=>upd({street:e.target.value})} placeholder="House / flat, street, area" style={adInput(true)}/>
          {chips.length>0 && (
            <div style={{display:"flex", flexWrap:"wrap", gap:8, marginTop:12}}>
              {chips.map(c=><span key={c} style={{fontSize:12.5, fontWeight:600, color:adT.ink, background:"#F1F3F4", borderRadius:8, padding:"6px 11px"}}>{c}</span>)}
            </div>
          )}
        </div>

        <div style={{display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", gap:"22px 28px"}}>
          <div><AdLabel>CITY</AdLabel><input value={a.city} onChange={e=>upd({city:e.target.value})} style={adInput(false)}/></div>
          <div><AdLabel>ZIP / POSTAL CODE</AdLabel><input value={a.zip} onChange={e=>upd({zip:e.target.value})} inputMode="numeric" style={adInput(false)}/></div>
          <div style={{gridColumn:"1 / -1"}}><AdLabel>COUNTY / DISTRICT <span style={{fontWeight:600, letterSpacing:0}}>(optional)</span></AdLabel>
            <input value={a.county} onChange={e=>upd({county:e.target.value})} placeholder="Only if a form asks" style={adInput(false)}/></div>
          <div><AdLabel>COUNTRY</AdLabel><AdSelect value={a.country} options={AD_COUNTRIES} onChange={v=>upd({country:v, state:(AD_STATES[v]||[])[0]||""})}/></div>
          <div><AdLabel>STATE / PROVINCE</AdLabel>
            {states.length ? <AdSelect value={a.state} options={states} onChange={v=>upd({state:v})}/>
              : <input value={a.state} onChange={e=>upd({state:e.target.value})} style={adInput(false)}/>}
          </div>
        </div>

        {err && <div role="alert" style={{fontSize:13, fontWeight:600, color:"#C1443B"}}>{err}</div>}

        <div style={{display:"flex", alignItems:"center", justifyContent:"flex-end", gap:14}}>
          <span style={{fontSize:11.5, fontWeight:600, color:adT.muted}}>or press ↵ Enter</span>
          <button onClick={next} className="bd-primary" style={{padding:"13px 26px", borderRadius:999, background:adT.ink, color:"#fff",
            fontFamily:adFB, fontSize:14.5, fontWeight:700, border:"none", cursor:"pointer"}}>Continue<span className="bd-arrow">→</span></button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AddressCard });

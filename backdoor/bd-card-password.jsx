// Backdoor V1 · Step 7 — Application password
const { T:pT, FD:pFD, FB:pFB } = window;

const P_RULES = [
  ["At least 12 characters", v=>v.length>=12],
  ["At least one lowercase letter", v=>/[a-z]/.test(v)],
  ["At least one uppercase letter", v=>/[A-Z]/.test(v)],
  ["At least one number", v=>/[0-9]/.test(v)],
  ["At least one special character", v=>/[^A-Za-z0-9]/.test(v)],
];
function pGen(){
  const sets = ["abcdefghijkmnopqrstuvwxyz","ABCDEFGHJKLMNPQRSTUVWXYZ","23456789","!@#$%&*?"];
  const all = sets.join(""); const r = n => Math.floor(Math.random()*n);
  let out = sets.map(s=>s[r(s.length)]);
  while (out.length < 16) out.push(all[r(all.length)]);
  for (let i=out.length-1;i>0;i--){ const j=r(i+1); [out[i],out[j]]=[out[j],out[i]]; }
  return out.join("");
}

function PasswordCard({ st, set, onNext, toast }) {
  const v = st.appPassword || "";
  const [show, setShow] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const ok = P_RULES.every(([,t])=>t(v));
  const gen = ()=>{ set({appPassword:pGen()}); setShow(true); setCopied(false); };
  const copy = ()=>{ try{ navigator.clipboard.writeText(v); }catch(e){} setCopied(true); setTimeout(()=>setCopied(false), 1600); };
  const go = ()=>{ if(ok) onNext(); };
  React.useEffect(()=>{ const k=e=>{ if(e.key==="Enter" && ok && e.target.tagName!=="BUTTON") go(); }; window.addEventListener("keydown",k); return ()=>window.removeEventListener("keydown",k); }, [ok]);

  return (
    <div style={{display:"grid", gridTemplateColumns:"32% 68%", background:"#fff", border:`1px solid ${pT.hairline}`, borderRadius:24}}>
      <div style={{background:"#F9FAFB", borderRadius:"0 0 0 24px", padding:"44px 32px 48px", display:"flex", flexDirection:"column", gap:26}}>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:pT.ink, marginBottom:8}}>Why we ask</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Some career sites make you create an account before you can apply. Bloom uses this password to sign you up there, so no application gets stuck.
          </div>
        </div>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:pT.ink, marginBottom:8}}>Use a new password</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            Don't reuse your email or bank password. The easiest option is to generate one.
          </div>
        </div>
        <div style={{marginTop:"auto", fontSize:12.5, fontWeight:600, color:pT.muted, lineHeight:1.5}}>
          You can change it any time in Settings → Site password.
        </div>
      </div>

      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:22}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:pT.muted, letterSpacing:".07em"}}>APPLICATION PASSWORD</div>
          <div style={{fontFamily:pFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>Set a password for sites that ask</div>
          <div style={{fontSize:13.5, color:pT.muted, fontWeight:600, lineHeight:1.5}}>
            Some applications (Workday, iCIMS, Oracle) require you to create an account mid-flow. We use this to sign you up automatically.
          </div>
          <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", gap:8, marginTop:4}}>
            {["Workday","iCIMS","Oracle"].map(t=><span key={t} style={{fontSize:12.5, fontWeight:700, color:pT.ink, background:"#F1F3F4", borderRadius:8, padding:"5px 11px"}}>{t}</span>)}
            <span style={{fontSize:12.5, fontWeight:600, color:pT.muted}}>+ more</span>
          </div>
        </div>

        <div style={{border:`1.5px solid ${pT.hairline}`, borderRadius:14, overflow:"hidden"}}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, padding:"12px 16px", background:"#F9FAFB", borderBottom:`1px solid ${pT.hairline}`}}>
            <label htmlFor="bd-apppw" style={{fontSize:11, fontWeight:800, color:pT.muted, letterSpacing:".07em"}}>PASSWORD</label>
            <div style={{display:"flex", alignItems:"center", gap:14}}>
              {v && <button type="button" onClick={copy} style={{border:"none", background:"none", padding:0, cursor:"pointer", fontFamily:pFB, fontSize:12.5, fontWeight:700, color:pT.muted}}>{copied ? "Copied ✓" : "Copy"}</button>}
              <button type="button" onClick={gen} style={{display:"inline-flex", alignItems:"center", gap:6, border:"none", background:"none", padding:0, cursor:"pointer", fontFamily:pFB, fontSize:12.5, fontWeight:700, color:"#0A6E6E"}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
                Generate strong password
              </button>
            </div>
          </div>
          <div style={{padding:"16px 16px 18px"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, borderBottom:`1.5px solid ${pT.hairline}`, paddingBottom:4}}>
              <input id="bd-apppw" type={show ? "text" : "password"} value={v} autoComplete="new-password" spellCheck={false}
                onChange={e=>set({appPassword:e.target.value})} placeholder="Enter your application password"
                style={{flex:1, minWidth:0, border:"none", outline:"none", background:"transparent", fontFamily: show && v ? "ui-monospace, SFMono-Regular, Menlo, monospace" : pFB,
                  fontSize:15, fontWeight:500, color:pT.ink, padding:"9px 0"}}/>
              <button type="button" onClick={()=>setShow(s=>!s)} aria-label={show ? "Hide password" : "Show password"} style={{border:"none", background:"none", padding:6, cursor:"pointer", color:pT.muted, display:"grid", placeItems:"center"}}>
                {show
                  ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.73 5.08A10.4 10.4 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61"/><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="m2 2 20 20"/></svg>
                  : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>}
              </button>
            </div>
            <ul style={{listStyle:"none", margin:"14px 0 0", padding:0, display:"flex", flexDirection:"column", gap:9}}>
              {P_RULES.map(([label,test])=>{
                const pass = test(v);
                return (
                  <li key={label} style={{display:"flex", alignItems:"center", gap:10, fontSize:13, fontWeight:600, color: pass ? pT.ink : pT.muted}}>
                    <span aria-hidden="true" style={{width:18, height:18, borderRadius:"50%", flexShrink:0, display:"grid", placeItems:"center",
                      border: pass ? "none" : `1.5px solid ${pT.hairline}`, background: pass ? "#1F8A5B" : "#fff", transition:"background .15s"}}>
                      {pass && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                    </span>
                    {label}<span style={{position:"absolute", width:1, height:1, overflow:"hidden", clip:"rect(0 0 0 0)"}}>{pass ? " — done" : " — not yet"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, paddingTop:2, flexWrap:"wrap"}}>
          <span style={{fontSize:12.5, fontWeight:600, color:pT.muted, display:"flex", alignItems:"center", gap:7}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>Encrypted before save
          </span>
          <div style={{display:"flex", alignItems:"center", gap:14}}>
            {ok && <span style={{fontSize:11.5, fontWeight:600, color:pT.muted}}>or press ↵ Enter</span>}
            <button onClick={go} disabled={!ok} className={ok ? "bd-primary" : ""} style={{padding:"13px 26px", borderRadius:999, border:"none",
              background: ok ? pT.ink : "#E4E7E8", color: ok ? "#fff" : pT.muted, fontFamily:pFB, fontSize:14.5, fontWeight:700,
              cursor: ok ? "pointer" : "not-allowed"}}>Finish setup<span className="bd-arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PasswordCard, P_RULES, pGen });

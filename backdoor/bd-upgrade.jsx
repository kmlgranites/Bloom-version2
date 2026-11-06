// =====================================================================
// Backdoor V2 · Upgrade page — full-screen plan picker (opened from any "Upgrade")
// =====================================================================
const { T:uT, FD:uFD, FB:uFB } = window;

const U_PLANS = [
  { k:"monthly", name:"MONTHLY", tag:"MOST POPULAR", big:"$19", per:"per month", line:<React.Fragment>Up to <b>300</b> tailored applications a month</React.Fragment>,
    bill:<React.Fragment><b>$19</b> billed monthly, cancel anytime</React.Fragment> },
  { k:"quarterly", name:"QUARTERLY", tag:"BEST VALUE", big:"$16", per:"per month", strike:"$19", save:"SAVE $8", line:<React.Fragment>Up to <b>900</b> tailored applications over 3 months</React.Fragment>,
    bill:<React.Fragment><s style={{color:"#9AA3AE"}}>$57</s> <b>$49</b> billed every 3 months</React.Fragment> },
];
const U_PREVIEW = [
  { co:"Stripe", role:"Backend Engineer", where:"Stripe · Remote", st:"Applying" },
  { co:"Notion", role:"Software Engineer, Search", where:"Notion · Remote", st:"Applied" },
  { co:"Ramp", role:"Full-Stack Engineer", where:"Ramp · New York", st:"Applied" },
];

const PD_DUR = 5200;
const PD_STEPS = ["Finds the roles","Fills and sends","Updates you on WhatsApp"];
const PD_JOBS = [
  { co:"Stripe", role:"Backend Engineer", where:"Stripe · Remote", m:94 },
  { co:"Notion", role:"Software Engineer, Search", where:"Notion · Remote", m:91 },
  { co:"Ramp", role:"Full-Stack Engineer", where:"Ramp · New York", m:88 },
];
const PD_WHY = "I've spent 6 years building payment systems, and Stripe's infra work is exactly what I want to do next.";

function PreviewDemo({ card }) {
  const reduce = React.useMemo(()=>!!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  const [step, setStep] = React.useState(0);
  const [t, setT] = React.useState(reduce ? PD_DUR : 0);
  const [hover, setHover] = React.useState(false);
  React.useEffect(()=>{
    if (reduce || hover) return;
    const id = setInterval(()=>setT(x=>{
      if (x + 60 >= PD_DUR) { setStep(s=>(s+1)%3); return 0; }
      return x + 60;
    }), 60);
    return ()=>clearInterval(id);
  }, [reduce, hover]);
  const go = i => { setStep(i); setT(reduce ? PD_DUR : 0); };
  const p = t / PD_DUR;
  const ink = uT.ink;
  const scanned = Math.round(2400 * Math.min(1, p*3));
  const shownJobs = step===0 ? Math.min(3, Math.floor(Math.max(0, p-0.04)/0.12)+1) : 3;
  const typed = PD_WHY.slice(0, Math.round(PD_WHY.length * Math.min(1, Math.max(0, (p-0.25)/0.5))));
  const fillDone = p > 0.8;
  const statusFor = i => step===0 ? "match" : step===1 ? (i===0 ? (fillDone ? "Applied" : "Applying") : "Applied") : "Applied";

  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:"flex", flexDirection:"column", gap:22, maxWidth:560}}>
      <style>{`@keyframes pdIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @keyframes pdPulse{0%,100%{opacity:1}50%{opacity:.35}}
        @keyframes pdCaret{0%,100%{opacity:1}50%{opacity:0}}
        .pd-in{animation:pdIn .35s cubic-bezier(.2,.8,.2,1) both}
        @keyframes pdShimmer{0%{opacity:1}50%{opacity:.55}100%{opacity:1}}
        .pd-skel{animation:pdShimmer 1.3s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.pd-in,.pd-skel{animation:none}}`}</style>
      <div style={{...card, padding:22, display:"flex", flexDirection:"column", gap:10, minHeight:388, boxSizing:"border-box"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span aria-live="polite" style={{display:"inline-flex", alignItems:"center", gap:8, fontSize:15, fontWeight:600, color:"#374151"}}>
            <span style={{width:8, height:8, borderRadius:"50%", background:"#0BB3B3", animation: reduce ? "none" : "pdPulse 1.4s ease-in-out infinite"}}/>
            {step===0 ? "Finding roles for you" : step===1 ? "Applying for you" : "Keeping you posted"}</span>
          <span style={{fontSize:11.5, fontWeight:700, letterSpacing:".08em", color:"#6B7280", background:"#F3F4F6", borderRadius:999, padding:"4px 10px"}}>PREVIEW</span>
        </div>
        {step===0 && (
          <div key="s0" className="pd-in" style={{display:"flex", alignItems:"baseline", gap:8, padding:"14px 16px", borderRadius:14, background:"#F7F8FA"}}>
            <span style={{fontFamily:uFD, fontSize:30, fontWeight:700, lineHeight:1, fontVariantNumeric:"tabular-nums"}}>{scanned.toLocaleString()}</span>
            <span style={{fontSize:15, fontWeight:600, color:"#4B5563"}}>new roles scanned today</span>
          </div>
        )}
        {step===1 && (
          <div key="s1" className="pd-in" style={{padding:"12px 14px", borderRadius:14, background:"#F7F8FA", display:"flex", flexDirection:"column", gap:8}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:13, fontWeight:600, color:"#6B7280"}}>
              <span>Stripe application</span><span>{fillDone ? "Submitted" : `${Math.min(100, Math.round(p*125))}%`}</span>
            </div>
            <div style={{height:5, borderRadius:999, background:"#E5E7EB", overflow:"hidden"}}>
              <div style={{height:"100%", width:`${Math.min(100, p*125)}%`, background: fillDone ? "#1F8A5B" : ink, borderRadius:999}}/>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", gap:6}}>
              {[["Name","Vinodh Kumar"],["Work authorization","Yes, US"]].map(([k,v],i)=>(
                <div key={k} style={{background:"#fff", borderRadius:9, padding:"6px 9px", border:"1px solid #ECEDEF"}}>
                  <div style={{fontSize:10.5, fontWeight:700, color:"#9AA3AE", letterSpacing:".04em"}}>{k.toUpperCase()}</div>
                  <div style={{fontSize:13, fontWeight:600, color:"#111827", opacity: p > 0.08 + i*0.08 ? 1 : 0, transition:"opacity .25s"}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#fff", borderRadius:9, padding:"6px 9px", border:"1px solid #ECEDEF", minHeight:52}}>
              <div style={{fontSize:10.5, fontWeight:700, color:"#9AA3AE", letterSpacing:".04em"}}>WHY STRIPE?</div>
              <div style={{fontSize:13, fontWeight:500, color:"#111827", lineHeight:1.4}}>{typed}{!fillDone && <span style={{display:"inline-block", width:1.5, height:13, background:ink, marginLeft:1, verticalAlign:"-2px", animation:"pdCaret .8s steps(1) infinite"}}/>}</div>
            </div>
          </div>
        )}
        {step===2 && (
          <div key="s2" className="pd-in" style={{padding:12, borderRadius:14, background:"#EFE7DE", display:"flex", flexDirection:"column", gap:6}}>
            {[
              { at:0.05, txt:<React.Fragment>Applied to <b>Backend Engineer</b> at Stripe ✓</React.Fragment>, time:"9:41" },
              { at:0.35, txt:"Notion and Ramp are in too. 3 sent today.", time:"9:42" },
            ].map((m,i)=> p >= m.at && (
              <div key={i} className="pd-in" style={{alignSelf:"flex-start", maxWidth:"88%", background:"#fff", borderRadius:"4px 12px 12px 12px", padding:"7px 10px",
                fontSize:13.5, lineHeight:1.4, color:"#111827", boxShadow:"0 1px 1px rgba(0,0,0,.06)"}}>
                {m.txt}<span style={{display:"block", textAlign:"right", fontSize:10, color:"#8A9399", marginTop:2}}>{m.time}</span>
              </div>
            ))}
            {p >= 0.62 && <div className="pd-in" style={{alignSelf:"flex-end", background:"#D9FDD3", borderRadius:"12px 4px 12px 12px", padding:"7px 10px", fontSize:13.5, color:"#111827"}}>show me the details<span style={{display:"block", textAlign:"right", fontSize:10, color:"#5F8A62", marginTop:2}}>9:43 ✓✓</span></div>}
          </div>
        )}
        {step===0 && PD_JOBS.slice(Math.max(0,shownJobs)).map(r=>(
          <div key={"sk-"+r.co} aria-hidden="true" className="pd-skel" style={{display:"flex", alignItems:"center", gap:12, padding:"10px 12px", borderRadius:14, background:"#fff", border:"1px solid #F1F2F4"}}>
            <span style={{width:38, height:38, borderRadius:10, background:"#EEF0F3", flexShrink:0}}/>
            <span style={{flex:1, display:"flex", flexDirection:"column", gap:7}}>
              <span style={{height:11, width:"58%", borderRadius:6, background:"#EEF0F3"}}/>
              <span style={{height:9, width:"36%", borderRadius:6, background:"#F3F4F6"}}/>
            </span>
            <span style={{width:74, height:24, borderRadius:999, background:"#F3F4F6", flexShrink:0}}/>
          </div>
        ))}
        {PD_JOBS.slice(0, step===2 ? 1 : Math.max(0,shownJobs)).map((r,i)=>{
          const s = statusFor(i);
          return (
            <div key={r.co} className="pd-in" style={{display:"flex", alignItems:"center", gap:12, padding:"10px 12px", borderRadius:14, background:"#FBFBFC"}}>
              {window.CLogo ? <window.CLogo co={r.co} size={38}/> : null}
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:15, fontWeight:700, color:"#111827"}}>{r.role}</div>
                <div style={{fontSize:13.5, fontWeight:500, color:"#6B7280"}}>{r.where}</div>
              </div>
              <span style={{display:"inline-flex", alignItems:"center", gap:5, fontSize:13, fontWeight:600, borderRadius:999, padding:"4px 10px", whiteSpace:"nowrap",
                color: s==="Applied" ? "#1F7A4D" : s==="Applying" ? "#0A6E6E" : "#374151",
                background: s==="Applied" ? "#E7F6EE" : s==="Applying" ? "#E0F5F5" : "#F3F4F6"}}>
                {s==="Applied" ? "✓ Applied" : s==="Applying" ? "Applying…" : `${r.m}% match`}</span>
            </div>
          );
        })}
      </div>
      <div role="tablist" aria-label="How Bloom works" style={{display:"flex", gap:18, flexWrap:"wrap"}}>
        {PD_STEPS.map((label,i)=>{
          const on = i===step;
          return (
            <button key={label} role="tab" aria-selected={on} onClick={()=>go(i)} style={{display:"inline-flex", flexDirection:"column", gap:6, border:"none", background:"none",
              padding:0, cursor:"pointer", fontFamily:uFB, textAlign:"left"}}>
              <span style={{display:"inline-flex", alignItems:"center", gap:8, fontSize:15, fontWeight:600, color: on ? "#111827" : "#6B7280"}}>
                <span style={{width:24, height:24, borderRadius:8, background: on ? ink : "#E5E7EB", color: on ? "#fff" : "#4B5563", display:"grid", placeItems:"center",
                  fontSize:12, fontWeight:700}}>{i+1}</span>{label}</span>
              <span aria-hidden="true" style={{height:3, borderRadius:999, background:"#E5E7EB", overflow:"hidden"}}>
                <span style={{display:"block", height:"100%", background:ink, borderRadius:999, width: on ? `${p*100}%` : i<step ? "100%" : "0%"}}/>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function UpgradePage({ plan = "free", onClose, onChoose }) {
  const [pick, setPick] = React.useState(plan==="quarterly" ? "quarterly" : "monthly");
  React.useEffect(()=>{ const k = e => { if (e.key==="Escape") onClose(); }; document.addEventListener("keydown", k); return ()=>document.removeEventListener("keydown", k); }, []);
  const CARD = { background:"#fff", borderRadius:24, boxShadow:"0 24px 32px rgba(0,0,0,.03), 0 6px 13px rgba(0,0,0,.05), 0 1px 3px rgba(143,143,143,.2), 0 0 0 1px #EAEAEA" };
  return (
    <div role="dialog" aria-modal="true" aria-label="Choose your plan" className="u-page" style={{position:"fixed", inset:0, zIndex:150, overflow:"auto",
      background:"linear-gradient(180deg,#EAF6F6 0%,#F6F7F9 46%,#F6F7F9 100%)", fontFamily:uFB, color:uT.ink}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"16px 32px", background:"#fff", borderBottom:"1px solid #E7E7E7"}}>
        <img src="assets/bloom-logo.svg" alt="bloom" style={{height:24}}/>
        <button onClick={onClose} className="u-close" style={{display:"inline-flex", alignItems:"center", gap:6, border:"1px solid #E5E7EB", background:"#fff",
          color:uT.ink, borderRadius:999, padding:"7px 14px", fontFamily:uFB, fontSize:14, fontWeight:600, cursor:"pointer"}}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>Close</button>
      </div>

      <div className="u-grid" style={{maxWidth:1180, margin:"0 auto", padding:"48px 32px 64px", display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,520px)", gap:48, alignItems:"start"}}>
        <div style={{display:"flex", flexDirection:"column", gap:28, minWidth:0}}>
          <div>
            <h1 style={{fontFamily:uFD, fontSize:"clamp(34px, 3.6vw, 52px)", fontWeight:700, letterSpacing:"-0.035em", lineHeight:1.05, margin:0, textWrap:"balance"}}>Let Bloom apply.<br/>You do the interviews.</h1>
            <p style={{fontSize:18, fontWeight:500, color:"#4B5563", lineHeight:1.5, margin:"16px 0 0", maxWidth:480, textWrap:"pretty"}}>Bloom finds roles that fit you and sends tailored applications every day, while you get on with your week.</p>
          </div>
          <PreviewDemo card={CARD}/>
        </div>

        <div style={{...CARD, padding:"28px 26px 22px"}}>
          <div style={{fontFamily:uFD, fontSize:24, fontWeight:700, letterSpacing:"-0.02em", marginBottom:18}}>Choose your plan</div>
          <div role="radiogroup" aria-label="Plans" style={{display:"flex", flexDirection:"column", gap:12}}>
            {U_PLANS.map(p=>{
              const on = pick===p.k;
              return (
                <button key={p.k} role="radio" aria-checked={on} onClick={()=>setPick(p.k)} style={{display:"flex", alignItems:"center", gap:14, textAlign:"left", width:"100%",
                  padding:"18px 18px", borderRadius:16, cursor:"pointer", fontFamily:uFB, background: on ? "#F2FAFA" : "#fff",
                  border: on ? `2px solid ${uT.ink}` : "1px solid #E5E7EB", boxShadow: on ? "0 4px 14px rgba(2,47,54,.10)" : "none", margin: on ? 0 : 1}}>
                  <span aria-hidden="true" style={{width:22, height:22, borderRadius:"50%", flexShrink:0, display:"grid", placeItems:"center",
                    background: on ? uT.ink : "#fff", border: on ? "none" : "1.5px solid #D1D5DB"}}>
                    {on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                  </span>
                  <span style={{flex:1, minWidth:0}}>
                    <span style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
                      <span style={{fontSize:15, fontWeight:800, letterSpacing:".04em", color:"#111827"}}>{p.name}</span>
                      <span style={{fontSize:10.5, fontWeight:800, letterSpacing:".06em", color:"#fff", background: p.k==="quarterly" ? "#0A6E6E" : "#4B5563", borderRadius:999, padding:"3px 8px"}}>{p.tag}</span>
                    </span>
                    <span style={{display:"block", fontSize:14, fontWeight:500, color:"#374151", marginTop:5}}>{p.line}</span>
                    <span style={{display:"block", fontSize:13, fontWeight:500, color:"#6B7280", marginTop:3}}>{p.bill}</span>
                  </span>
                  <span style={{display:"flex", flexDirection:"column", alignItems:"flex-end", gap:5, flexShrink:0}}>
                    <span style={{display:"flex", alignItems:"baseline", gap:5}}>
                      {p.strike && <s style={{fontSize:14, color:"#9AA3AE", fontWeight:500}}>{p.strike}</s>}
                      <span style={{fontFamily:uFD, fontSize:28, fontWeight:700, lineHeight:1, color:"#111827"}}>{p.big}</span>
                    </span>
                    <span style={{fontSize:12.5, fontWeight:500, color:"#6B7280"}}>{p.per}</span>
                    {p.save && <span style={{fontSize:11.5, fontWeight:800, color:"#1F7A4D", background:"#E7F6EE", borderRadius:999, padding:"3px 9px"}}>{p.save}</span>}
                  </span>
                </button>
              );
            })}
          </div>
          <button onClick={()=>onChoose(pick)} className="bd-cta" style={{width:"100%", marginTop:18, padding:"16px 0", borderRadius:999, border:"none", cursor:"pointer",
            background:"linear-gradient(180deg, #0B4A52 0%, #022F36 100%)", boxShadow:"inset 0 1px 0 rgba(255,255,255,.14), 0 2px 6px rgba(2,47,54,.22)", color:"#fff", fontFamily:uFD, fontSize:18, fontWeight:700}}>Get {pick==="quarterly" ? "Quarterly" : "Monthly"}</button>
          <div style={{textAlign:"center", fontSize:13.5, fontWeight:500, color:"#4B5563", marginTop:12}}>Cancel anytime. Only submitted applications count.</div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:7, fontSize:13, fontWeight:500, color:"#6B7280", marginTop:8}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Secure checkout · Powered by Dodo Payments</div>
          {plan!=="free" && <div style={{textAlign:"center", fontSize:12.5, fontWeight:600, color:"#0A6E6E", marginTop:10}}>You're on {plan==="quarterly" ? "Quarterly" : "Monthly"} now.</div>}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { UpgradePage });

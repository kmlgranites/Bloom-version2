// =====================================================================
// Backdoor V1 · Step 5 — How should Bloom apply? (framed, final)
// =====================================================================
const { T:mT, FD:mFD, FB:mFB } = window;

function MPipe({ steps, youAt }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:4, flexWrap:"wrap", rowGap:6}}>
      {steps.map((s,i)=>(
        <React.Fragment key={s}>
          {i > 0 && (
            <span style={{position:"relative", width:15, flexShrink:0, display:"inline-flex", justifyContent:"center", color:"#A9B2B4", fontSize:11, lineHeight:1}}>
              →
              <span className="bd-flowdot" style={{animationDelay:`${i*0.25}s`}}/>
            </span>
          )}
          <span style={{padding:"4px 8px", borderRadius:6, fontSize:11, fontWeight:700, whiteSpace:"nowrap", flexShrink:0, minWidth:0,
            background: s===youAt ? "#fff" : "#F1F3F4", color: s===youAt ? mT.ink : "#4B5A5E",
            border: s===youAt ? `1.5px solid ${mT.ink}` : "1.5px solid transparent"}}>
            {s}{s===youAt ? " ✓" : ""}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

function MOption({ on, onClick, badge, title, desc, steps, youAt, foot }) {
  return (
    <button type="button" onClick={onClick}
      style={{position:"relative", textAlign:"left", display:"flex", flexDirection:"column", gap:10,
        padding:"18px 18px 20px", borderRadius:14, cursor:"pointer",
        border:`1.5px solid ${on ? mT.ink : mT.hairline}`, background: on ? "#FFFCF6" : "#fff",
        boxShadow: on ? "0 1px 0 rgba(2,47,54,.06)" : "none", transition:"all .15s"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
        <span style={{fontSize:10.5, fontWeight:800, letterSpacing:".07em", color: badge==="RECOMMENDED" ? "#14663F" : "#7A5D00",
          background: badge==="RECOMMENDED" ? "#DFF6E8" : "#FBEFCB", borderRadius:999, padding:"4px 10px"}}>{badge}</span>
        <span style={{width:20, height:20, borderRadius:"50%", flexShrink:0, display:"grid", placeItems:"center",
          border:`1.5px solid ${on ? mT.ink : mT.hairline}`, background: on ? mT.ink : "#fff",
          color:"#fff", fontSize:11, fontWeight:800}}>{on ? "✓" : ""}</span>
      </div>
      <div style={{fontFamily:mFD, fontWeight:700, fontSize:20, letterSpacing:"-0.025em", color:mT.ink}}>{title}</div>
      <MPipe steps={steps} youAt={youAt}/>
      <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.5}}>{desc}</div>
      {foot && <div style={{fontSize:12, fontWeight:600, color:mT.muted, lineHeight:1.45}}>{foot}</div>}
    </button>
  );
}

function ModeCard({ st, set, locked, onNext, toast }) {
  const mode = st.mode || "review";

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
    <div style={{display:"flex", gap:8, padding:"14px 16px", background:"#F9FAFB", borderRadius:16}}>
      <span style={{fontSize:12.5, fontWeight:700, color:mT.ink, background:"#fff",
        border:`1px solid ${mT.hairline}`, borderRadius:999, padding:"5px 11px"}}>
        {mode === "auto" ? "Full Auto Apply" : "Review before send"}
      </span>
    </div>
  );

  const summary = [
    ["Role", st.role || "Software Engineer"],
    ["Contact", st.verified ? "verified" : "email only"],
    ["Work in", (st.markets || ["US"]).join(" · ")],
    ["Résumé", st.resume || "uploaded"],
  ];

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff",
      border:`1px solid ${mT.hairline}`, borderRadius:24}}>

      <div style={{background:"#F9FAFB", borderRadius:"0 0 0 24px", padding:"44px 32px 48px",
        display:"flex", flexDirection:"column", gap:26}}>
        <div>
          <div style={{fontSize:11, fontWeight:800, color:mT.muted, letterSpacing:".07em", marginBottom:12}}>SETUP SUMMARY</div>
          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {summary.map(([k,v])=>(
              <div key={k} style={{display:"flex", justifyContent:"space-between", gap:12, fontSize:13}}>
                <span style={{fontWeight:600, color:mT.muted}}>{k}</span>
                <span style={{fontWeight:700, color:mT.ink, textAlign:"right", minWidth:0, overflow:"hidden",
                  textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{fontSize:13.5, fontWeight:800, color:mT.ink, marginBottom:8}}>Your first 5 are free</div>
          <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
            We'll start matching the moment you finish. No card needed until you want more.
          </div>
        </div>
        <div style={{marginTop:"auto", fontSize:12.5, fontWeight:600, color:mT.muted, lineHeight:1.5}}>
          You can switch modes any time — even per individual job.
        </div>
      </div>

      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:22}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:mT.muted, letterSpacing:".07em"}}>APPLY MODE</div>
          <div style={{fontFamily:mFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
            How should we apply for you?
          </div>
          <div style={{fontSize:13.5, color:mT.muted, fontWeight:600, lineHeight:1.5}}>
            Pick how much you want to be in the loop. This is the only setting that changes what happens without you.
          </div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", gap:12}}>
          <MOption on={mode==="review"} onClick={()=>set({mode:"review"})}
            badge="RECOMMENDED" title="Review before send"
            steps={["Find","Fill","You","Sent"]} youAt="You"
            desc="We draft the application, you tap approve. About 90 seconds each."
            foot="Best while you're learning what we send."/>
          <MOption on={mode==="auto"} onClick={()=>set({mode:"auto"})}
            badge="HANDS-OFF" title="Full Auto Apply"
            steps={["Find","Fill","Sent"]} youAt="Sent"
            desc="We submit as soon as an application is ready. You get a recap each morning."
            foot="Fastest, but you see applications after they're sent."/>
        </div>

        <div style={{display:"flex", alignItems:"flex-start", gap:10, padding:"14px 16px", borderRadius:10,
          background:"#F9FAFB", border:`1px solid ${mT.hairline}`}}>
          <span style={{fontSize:13.5, fontWeight:700, color:mT.ink, flexShrink:0}}>
            {mode === "auto" ? "Heads up" : "What you'll see"}
          </span>
          <span style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.5}}>
            {mode === "auto"
              ? "We'll still pause and message you when a form asks something only you can answer."
              : "Each draft lands in your queue with a WhatsApp nudge. Nothing goes out until you approve it."}
          </span>
        </div>

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, paddingTop:2}}>
          <span style={{fontSize:12.5, fontWeight:600, color:mT.muted, display:"flex", alignItems:"center", gap:7}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>Autosaved
          </span>
          <div style={{display:"flex", alignItems:"center", gap:14}}>
            <span style={{fontSize:11.5, fontWeight:600, color:mT.muted}}>or press ↵ Enter</span>
            <button onClick={onNext} className="bd-primary" style={{padding:"13px 26px", borderRadius:999,
              background:mT.ink, color:"#fff", fontFamily:mFB, fontSize:14.5, fontWeight:700, border:"none",
              cursor:"pointer"}}>Finish setup<span className="bd-arrow">→</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ModeCard });

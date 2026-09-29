// =====================================================================
// Backdoor V1 · Application page — Form / Resume / Cover / Job
// =====================================================================
const { T:rT, FD:rFD, FB:rFB } = window;

const R_ICONS = {
  Form: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>,
  Resume: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
  Cover: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Job: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>,
};

function RLabel({ children }) {
  return <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".07em", marginBottom:8}}>{children}</div>;
}

function RPill({ tone, children }) {
  const t = { green:["#14663F","#DFF6E8"], amber:["#8A6D00","#FBEFCB"], blue:["#0B5FB3","#E1EFFB"], grey:["#5A6366","#F1F3F4"], red:["#A33A2F","#FBE3E0"] }[tone];
  return <span style={{fontSize:11.5, fontWeight:800, color:t[0], background:t[1], borderRadius:999, padding:"5px 12px", whiteSpace:"nowrap"}}>{children}</span>;
}

function ReviewPanel({ job, mode, onBack, onApprove }) {
  const [tab, setTab] = React.useState("Form");
  const [draft, setDraft] = React.useState({});
  React.useEffect(()=>{ setTab("Form"); setDraft({}); }, [job && job.co]);
  if (!job) return null;
  const answers = job.answers || [];
  const needsYou = job.status==="Needs you";
  const openQs = answers.map((a,i)=>({...a, i})).filter(a=>a.status==="needs");
  const filled = openQs.every(a=>(draft[a.i]||"").trim().length>0);
  const isAuto = mode==="auto";

  const statusPill = needsYou ? <RPill tone="amber">Needs you</RPill>
    : job.status==="Submitted" ? <RPill tone="green">✓ {isAuto ? "Submitted by Bloom" : "Submitted"}</RPill>
    : job.status==="Failed" ? <RPill tone="red">Couldn't submit</RPill>
    : job.status==="Skipped" ? <RPill tone="grey">Skipped</RPill>
    : <RPill tone="blue">{job.status==="Preparing" ? "Preparing" : "Submitting…"}</RPill>;

  return (
    <div style={{flex:1, minWidth:0, display:"flex", flexDirection:"column", overflow:"hidden", background:"#fff"}}>
      <div style={{padding:"14px 32px", display:"flex", alignItems:"center", gap:14, borderBottom:`1px solid ${rT.hairline}`, flexShrink:0}}>
        <button onClick={onBack} className="bd-textlink" style={{fontSize:13, fontWeight:700, color:rT.muted, cursor:"pointer", flexShrink:0}}>← Auto Apply</button>
        <span style={{width:1, height:22, background:rT.hairline}}/>
        <window.CLogo co={job.co} size={30}/>
        <div style={{minWidth:0}}>
          <div style={{fontSize:14.5, fontWeight:800, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{job.role}</div>
          <div style={{fontSize:12, color:rT.muted, fontWeight:600}}>{job.co} · {job.location}{job.comp ? ` · ${job.comp}` : ""}</div>
        </div>
        <div style={{marginLeft:"auto", flexShrink:0}}>{statusPill}</div>
      </div>

      <div role="tablist" style={{display:"flex", gap:28, padding:"0 32px", borderBottom:`1px solid ${rT.hairline}`, flexShrink:0}}>
        {["Form","Resume","Cover","Job"].map(t=>{
          const on = tab===t;
          return (
            <button key={t} role="tab" aria-selected={on} onClick={()=>setTab(t)} style={{display:"flex", alignItems:"center", gap:8,
              padding:"14px 2px 12px", border:"none", background:"none", cursor:"pointer", fontFamily:rFB, fontSize:14, fontWeight:700,
              color: on ? rT.ink : "#9AA5A8", borderBottom:`2.5px solid ${on ? rT.ink : "transparent"}`, marginBottom:-1}}>
              {R_ICONS[t]}{t}
              {t==="Form" && needsYou && openQs.length>0 && <span style={{width:7, height:7, borderRadius:"50%", background:"#E0A21B"}}/>}
            </button>
          );
        })}
      </div>

      <div style={{flex:1, overflow:"auto", padding:"28px 32px 64px"}}>
        <div style={{maxWidth:680, margin:"0 auto"}}>

        {tab==="Form" && (
          <React.Fragment>
            {needsYou && openQs.length>0 ? (
              <div style={{border:"1px solid #F0DDA0", background:"#FFF8E6", borderRadius:14, padding:"16px 18px", marginBottom:22}}>
                <div style={{fontSize:14.5, fontWeight:800, marginBottom:4}}>
                  {job.co} asked {openQs.length===1 ? "a question" : `${openQs.length} questions`} only you can answer
                </div>
                <div style={{fontSize:13, color:"#5C5030", fontWeight:500, lineHeight:1.55}}>
                  Everything else is filled. Answer below, or reply to our WhatsApp message and we'll fill it in and submit for you.
                </div>
                <div style={{display:"inline-flex", alignItems:"center", gap:7, marginTop:10, fontSize:12, fontWeight:700, color:"#14663F"}}>
                  <span style={{width:6, height:6, borderRadius:"50%", background:"#22A565"}}/>Also sent to your WhatsApp
                </div>
              </div>
            ) : (
              <div style={{fontSize:13, color:rT.muted, fontWeight:600, marginBottom:18}}>
                {job.status==="Submitted" ? `This is exactly what Bloom sent to ${job.co}.` : `Bloom is filling this form from your profile.`}
              </div>
            )}

            <div style={{display:"flex", flexDirection:"column"}}>
              {answers.map((a,i)=>{
                const open = needsYou && a.status==="needs";
                return (
                  <div key={i} style={{padding:"16px 0", borderBottom:`1px solid ${rT.hairline}`}}>
                    <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12, marginBottom:8}}>
                      <div style={{fontSize:14, fontWeight:700, lineHeight:1.45}}>{a.q}</div>
                      {open ? <RPill tone="amber">Your answer</RPill> : <span style={{fontSize:11.5, fontWeight:700, color:"#14663F", whiteSpace:"nowrap"}}>✓ Filled by Bloom</span>}
                    </div>
                    {open ? (
                      <React.Fragment>
                        <textarea value={draft[i]||""} onChange={e=>setDraft(d=>({...d, [i]:e.target.value}))} rows={3}
                          placeholder="Type your answer…" style={{width:"100%", boxSizing:"border-box", padding:"11px 13px", borderRadius:10,
                          border:`1.5px solid ${(draft[i]||"").trim() ? rT.ink : rT.hairline}`, fontFamily:rFB, fontSize:13.5, fontWeight:500,
                          color:rT.ink, lineHeight:1.55, outline:"none", resize:"vertical"}}/>
                        {a.suggestion && !(draft[i]||"").trim() && (
                          <button onClick={()=>setDraft(d=>({...d, [i]:a.suggestion}))} className="bd-textlink"
                            style={{marginTop:6, fontSize:12.5, fontWeight:700, color:"#0B7A7A", cursor:"pointer"}}>Use Bloom's draft</button>
                        )}
                      </React.Fragment>
                    ) : (
                      <div style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.55}}>{a.a || a.suggestion}</div>
                    )}
                  </div>
                );
              })}
              {answers.length===0 && <div style={{fontSize:13, color:rT.muted, fontWeight:600}}>Standard fields only: name, contact, work authorization. All filled from your profile.</div>}
            </div>

            {needsYou && (
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, marginTop:22}}>
                <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:rT.muted, cursor:"pointer"}}>Skip this job</button>
                <button disabled={!filled} onClick={()=>onApprove(job.co)} style={{padding:"12px 22px", borderRadius:999, border:"none",
                  background: filled ? rT.ink : "#C9D1D3", color:"#fff", fontFamily:rFB, fontSize:14, fontWeight:700,
                  cursor: filled ? "pointer" : "default"}}>Submit application</button>
              </div>
            )}
          </React.Fragment>
        )}

        {tab==="Resume" && (
          <React.Fragment>
            <div style={{display:"flex", alignItems:"center", gap:12, padding:"14px 16px", border:`1px solid ${rT.hairline}`, borderRadius:12, marginBottom:22}}>
              <span style={{color:rT.ink}}>{R_ICONS.Resume}</span>
              <div style={{minWidth:0}}>
                <div style={{fontSize:13.5, fontWeight:700}}>{job.resume || "Vinodh_Resume_2026.pdf"}</div>
                <div style={{fontSize:12, color:rT.muted, fontWeight:600}}>Tailored for {job.co}</div>
              </div>
              <button style={{marginLeft:"auto", padding:"7px 14px", borderRadius:999, border:`1px solid ${rT.hairline}`, background:"#fff",
                fontFamily:rFB, fontSize:12.5, fontWeight:700, cursor:"pointer"}}>Download</button>
            </div>
            <RLabel>WHAT BLOOM CHANGED</RLabel>
            {[`Moved your most relevant role to the top of Experience`, `Put skills from the ${job.co} posting first`, `Rewrote your summary around ${job.role.split(" —")[0]}`].map(x=>(
              <div key={x} style={{display:"flex", gap:9, fontSize:13.5, fontWeight:500, color:"#4B5A5E", lineHeight:1.5, padding:"6px 0"}}>
                <span style={{color:"#14663F", fontWeight:800}}>✓</span>{x}
              </div>
            ))}
            <div style={{fontSize:12.5, color:rT.muted, fontWeight:600, marginTop:12}}>Bloom never adds experience you don't have.</div>
          </React.Fragment>
        )}

        {tab==="Cover" && (
          <React.Fragment>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14}}>
              <RLabel>COVER LETTER</RLabel>
              {needsYou && <RPill tone="grey">Draft</RPill>}
            </div>
            <div style={{fontSize:14, color:rT.ink, fontWeight:500, lineHeight:1.7, display:"flex", flexDirection:"column", gap:14}}>
              <p style={{margin:0}}>Hi {job.co} team,</p>
              <p style={{margin:0}}>I'm applying for the {job.role.split(" —")[0]} role. For the last few years I've owned backend services end to end, from schema design to on-call, most recently a payouts service handling 40k+ daily transactions.</p>
              <p style={{margin:0}}>What draws me to {job.co} is the chance to work on infrastructure that other teams depend on. I'd bring the same focus on reliability and clear ownership.</p>
              <p style={{margin:0}}>Thanks for your time,<br/>Vinodh</p>
            </div>
          </React.Fragment>
        )}

        {tab==="Job" && (
          <React.Fragment>
            <div style={{display:"flex", flexWrap:"wrap", gap:8, marginBottom:18}}>
              {job.matchPct && <RPill tone="green">{job.matchPct}% match</RPill>}
              {job.comp && <RPill tone="grey">{job.comp}</RPill>}
              {job.posted && <RPill tone="grey">Posted {job.posted}</RPill>}
            </div>
            <RLabel>ABOUT THE ROLE</RLabel>
            <div style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.6, marginBottom:22}}>{job.about || "Full description available on the employer's site."}</div>
            <RLabel>AT A GLANCE</RLabel>
            {[["Company",job.co],["Location",job.location],["Compensation",job.comp],["Applied",job.applied]].filter(r=>r[1] && r[1]!=="—").map(([k,v])=>(
              <div key={k} style={{display:"grid", gridTemplateColumns:"120px minmax(0,1fr)", gap:12, fontSize:13.5, padding:"8px 0", borderBottom:`1px solid ${rT.hairline}`}}>
                <span style={{color:rT.muted, fontWeight:600}}>{k}</span><span style={{fontWeight:700}}>{v}</span>
              </div>
            ))}
            <button className="bd-textlink" style={{marginTop:16, fontSize:13, fontWeight:700, color:"#0B7A7A", cursor:"pointer"}}>View original posting ↗</button>
          </React.Fragment>
        )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ReviewPanel });

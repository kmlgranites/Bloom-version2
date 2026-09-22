// =====================================================================
// Backdoor V1 · Review — job review & answer approval panel
// =====================================================================
const { T:rT, FD:rFD, FB:rFB } = window;

function RTab({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{padding:"0 0 10px", border:"none", background:"none", fontFamily:rFB,
      fontSize:13.5, fontWeight:700, cursor:"pointer", color: active ? rT.ink : rT.muted,
      borderBottom: active ? `2px solid ${rT.ink}` : "2px solid transparent"}}>{label}</button>
  );
}

function RAnswerCard({ item, interactive }) {
  const pill = item.status==="needs"
    ? { text:"Needs your eyes", fg:"#8A6D00", bg:"#FBEFCB" }
    : item.status==="sent"
    ? { text:"✓ Sent", fg:"#14663F", bg:"#DFF6E8" }
    : { text:"✓ Drafted", fg:"#14663F", bg:"#DFF6E8" };
  return (
    <div style={{background:"#fff", border:`1px solid ${rT.hairline}`, borderRadius:14, padding:"18px 20px", marginBottom:14}}>
      <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12, marginBottom:12}}>
        <div style={{fontFamily:rFD, fontWeight:700, fontSize:14.5, lineHeight:1.4}}>{item.q}</div>
        <span style={{fontSize:11, fontWeight:800, color:pill.fg, background:pill.bg, borderRadius:999,
          padding:"4px 11px", flexShrink:0, whiteSpace:"nowrap"}}>{pill.text}</span>
      </div>
      {item.status==="needs" ? (
        <>
          <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".06em", marginBottom:6}}>BLOOM'S SUGGESTION</div>
          <div style={{fontSize:13.5, color:rT.ink, fontWeight:500, lineHeight:1.55, background:"#F9FAFB", borderRadius:9, padding:"11px 13px"}}>{item.suggestion}</div>
        </>
      ) : (
        <>
          <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".06em", marginBottom:6}}>ANSWER</div>
          <div style={{fontSize:13.5, color:rT.ink, fontWeight:500, lineHeight:1.55, background:"#F9FAFB", borderRadius:9, padding:"11px 13px"}}>{item.a}</div>
        </>
      )}
      {interactive && <button className="bd-textlink" style={{marginTop:10, fontSize:12.5, fontWeight:700, color:"#0B7A7A", cursor:"pointer"}}>✎ Edit answer</button>}
    </div>
  );
}

function ReviewPanel({ job, mode, onBack, onApprove }) {
  const [tab, setTab] = React.useState("Overview");
  if (!job) return null;
  const interactive = mode==="review" && job.status==="Needs you";
  const needsEyes = job.answers.filter(a=>a.status==="needs").length;

  let subtitle, ctaNode;
  if (interactive) {
    subtitle = "Review application · edit any answer before it sends";
    ctaNode = <button onClick={()=>onApprove(job.co)} style={{padding:"11px 20px", borderRadius:999, background:rT.ink,
      color:"#fff", border:"none", fontFamily:rFB, fontSize:13.5, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Approve & send</button>;
  } else if (mode==="auto" && job.status!=="Failed" && job.status!=="Skipped") {
    subtitle = "Bloom submitted this automatically — no review needed";
    ctaNode = <span style={{fontSize:12.5, fontWeight:800, color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"7px 16px"}}>✓ Auto-submitted</span>;
  } else if (job.status==="Submitted") {
    subtitle = "You approved and sent this application";
    ctaNode = <span style={{fontSize:12.5, fontWeight:800, color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"7px 16px"}}>✓ Sent</span>;
  } else if (job.status==="In flight") {
    subtitle = "Bloom is submitting this now";
    ctaNode = <span style={{fontSize:12.5, fontWeight:800, color:"#0B5FB3", background:"#E1EFFB", borderRadius:999, padding:"7px 16px"}}>Submitting…</span>;
  } else if (job.status==="Failed") {
    subtitle = "Bloom couldn't finish submitting this";
    ctaNode = <button style={{padding:"11px 20px", borderRadius:999, background:"#fff", color:rT.ink,
      border:`1.5px solid ${rT.hairline}`, fontFamily:rFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>↻ Retry</button>;
  } else {
    subtitle = "You skipped this one";
    ctaNode = <span style={{fontSize:12.5, fontWeight:800, color:rT.muted, background:"#F1F3F4", borderRadius:999, padding:"7px 16px"}}>Skipped</span>;
  }

  return (
    <div style={{flex:1, minWidth:0, display:"flex", flexDirection:"column", overflow:"hidden"}}>
      <div style={{padding:"16px 32px", display:"flex", alignItems:"center", gap:16, borderBottom:`1px solid ${rT.hairline}`, background:"#fff", flexShrink:0}}>
        <button onClick={onBack} className="bd-textlink" style={{fontSize:13.5, fontWeight:700, color:rT.ink, cursor:"pointer", display:"flex", alignItems:"center", gap:6, flexShrink:0}}>← Back to tracker</button>
        <span style={{width:30, height:30, borderRadius:8, flexShrink:0, overflow:"hidden"}}>
          <window.CLogo co={job.co} size={30}/>
        </span>
        <div style={{minWidth:0}}>
          <div style={{fontSize:14.5, fontWeight:800}}>{job.co} · {job.role}</div>
          <div style={{fontSize:12, color:rT.muted, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{subtitle}</div>
        </div>
        <div style={{marginLeft:"auto", flexShrink:0}}>{ctaNode}</div>
      </div>

      <div style={{flex:1, display:"flex", minHeight:0}}>
        <div style={{width:340, flexShrink:0, background:"#fff", borderRight:`1px solid ${rT.hairline}`, overflow:"auto", padding:"28px 28px 40px"}}>
          <div style={{fontSize:11.5, color:rT.muted, fontWeight:600, marginBottom:8}}>Drafted by Bloom · matched to your <span style={{color:"#0B7A7A", fontWeight:700}}>{job.role}</span> search</div>
          <div style={{fontFamily:rFD, fontWeight:700, fontSize:24, letterSpacing:"-0.02em", marginBottom:4}}>{job.role}</div>
          <div style={{fontSize:13.5, color:rT.muted, fontWeight:600, marginBottom:12}}>{job.co} · {job.location}</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:8, marginBottom:20}}>
            <span style={{fontSize:12, fontWeight:800, color:"#0B7A7A", background:"#DDF5F5", borderRadius:999, padding:"5px 12px"}}>{job.matchPct}% match</span>
            <span style={{fontSize:12, fontWeight:700, color:rT.ink, background:"#F1F3F4", borderRadius:999, padding:"5px 12px"}}>{job.comp}</span>
            <span style={{fontSize:12, fontWeight:700, color:rT.ink, background:"#F1F3F4", borderRadius:999, padding:"5px 12px"}}>Posted {job.posted}</span>
          </div>
          <div style={{display:"flex", gap:18, borderBottom:`1px solid ${rT.hairline}`, marginBottom:18}}>
            {["Overview","Description","Match","Timeline"].map(t=><RTab key={t} label={t} active={tab===t} onClick={()=>setTab(t)}/>)}
          </div>
          {tab==="Overview" && (
            <>
              <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".06em", marginBottom:8}}>ABOUT THE ROLE</div>
              <div style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.6, marginBottom:20}}>{job.about}</div>
              <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".06em", marginBottom:10}}>AT A GLANCE</div>
              <div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:16}}>
                {[["Company",job.co],["Location",job.location],["Comp band",job.comp],["Match",job.matchPct+"% fit"]].map(([k,v])=>(
                  <div key={k} style={{display:"flex", justifyContent:"space-between", fontSize:13}}>
                    <span style={{color:rT.muted, fontWeight:600}}>{k}</span><span style={{fontWeight:700}}>{v}</span>
                  </div>
                ))}
              </div>
              <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:"#0B7A7A", cursor:"pointer"}}>Read full description →</button>
            </>
          )}
          {tab!=="Overview" && tab!=="Timeline" && <div style={{fontSize:13, color:rT.muted, fontWeight:600}}>Nothing here yet.</div>}
          {tab==="Timeline" && (
            <>
              <div style={{fontSize:10.5, fontWeight:800, color:rT.muted, letterSpacing:".06em", marginBottom:16}}>APPLICATION TIMELINE</div>
              <div style={{display:"flex", flexDirection:"column"}}>
                {[
                  { icon:"✏️", dark:true, title:`Bloom drafted your answer${job.answers.length===1?"":"s"}`, sub:`${job.answers.length} question${job.answers.length===1?"":"s"} auto-filled from your profile`, tone:rT.ink },
                  { icon:"🎯", title:`Matched ${job.matchPct}% to your profile`, sub:"Found in your search feed", tone:"#0B7A7A" },
                  { icon:"🌱", title:"Saved to your queue", sub:`Posted ${job.posted} by ${job.co}`, tone:rT.ink },
                ].map((ev,i,arr)=>(
                  <div key={i} style={{display:"flex", gap:14}}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0}}>
                      <span style={{width:36, height:36, borderRadius:"50%", display:"grid", placeItems:"center", fontSize:15,
                        background: ev.dark ? rT.ink : "#F1EFE9"}}>{ev.icon}</span>
                      {i<arr.length-1 && <span style={{width:2, flex:1, background:rT.hairline, minHeight:28}}/>}
                    </div>
                    <div style={{paddingBottom:22}}>
                      <div style={{fontFamily:rFD, fontWeight:700, fontSize:14.5, color:ev.tone, marginBottom:3}}>{ev.title}</div>
                      <div style={{fontSize:12.5, color:rT.muted, fontWeight:600}}>{ev.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{background:"#F1EFE9", borderRadius:12, padding:"16px 18px", fontSize:13, color:"#5A6366", fontWeight:600, lineHeight:1.55}}>
                After you approve, Bloom sends the application and tracks every recruiter reply, interview, and offer right here.
              </div>
            </>
          )}

          <div style={{height:1, background:rT.hairline, margin:"22px 0"}}/>
          <div style={{fontSize:13, fontWeight:700, marginBottom:10}}>Is this a good match for you?</div>
          <div style={{display:"flex", gap:10}}>
            <button style={{flex:1, padding:"9px 12px", borderRadius:9, border:`1.5px solid ${rT.hairline}`, background:"#fff",
              fontFamily:rFB, fontSize:12.5, fontWeight:700, cursor:"pointer"}}>👍 Good match</button>
            <button style={{flex:1, padding:"9px 12px", borderRadius:9, border:`1.5px solid ${rT.hairline}`, background:"#fff",
              fontFamily:rFB, fontSize:12.5, fontWeight:700, cursor:"pointer"}}>👎 Not relevant</button>
          </div>
        </div>

        <div style={{flex:1, minWidth:0, overflow:"auto", padding:"28px 32px 56px"}}>
          <div style={{maxWidth:640, display:"flex", gap:14, alignItems:"flex-start", background:"#EDE9FE", borderRadius:14, padding:"16px 20px", marginBottom:16}}>
            <img src="assets/bloom-mascot-logo.webp" alt="Bloom" style={{width:34, height:34, objectFit:"contain", flexShrink:0}}/>
            <div>
              <div style={{fontFamily:rFD, fontWeight:700, fontSize:14.5, marginBottom:3}}>
                {interactive ? `Bloom drafted every answer for ${job.co}.` : "Bloom answered every question below."}
              </div>
              <div style={{fontSize:12.5, color:"#4B3F80", fontWeight:600, lineHeight:1.5}}>
                {interactive ? "Edit anything before it sends — your changes train Bloom for next time." : "Sent in your voice, using what it knows about you."}
              </div>
            </div>
          </div>
          {interactive && needsEyes>0 && (
            <div style={{fontSize:13, fontWeight:700, color:"#8A6D00", marginBottom:14}}>
              ● {needsEyes} answer{needsEyes>1?"s":""} need{needsEyes===1?"s":""} your eyes — the rest are ready to send.
            </div>
          )}

          <div style={{maxWidth:640}}>
            {job.answers.map((a,i)=><RAnswerCard key={i} item={a} interactive={interactive}/>)}

            <div style={{display:"flex", alignItems:"center", gap:10, padding:"12px 14px", background:"#fff",
              border:`1px solid ${rT.hairline}`, borderRadius:10, marginBottom:16, fontSize:13, fontWeight:600}}>
              📎 {job.resume} <span style={{color:rT.muted, fontWeight:600, marginLeft:"auto"}}>attached · sent in your voice</span>
            </div>

            {interactive && (
              <>
                <button onClick={()=>onApprove(job.co)} style={{width:"100%", padding:"14px 0", borderRadius:999, background:rT.ink,
                  color:"#fff", border:"none", fontFamily:rFB, fontSize:14.5, fontWeight:700, cursor:"pointer", marginBottom:10}}>
                  Approve & send to {job.co} →
                </button>
                <div style={{textAlign:"center"}}>
                  <button className="bd-textlink" style={{fontSize:12.5, fontWeight:700, color:rT.muted, cursor:"pointer"}}>Not a fit? Skip this job</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ReviewPanel });

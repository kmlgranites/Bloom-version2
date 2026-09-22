// =====================================================================
// Backdoor V1 · Cards 4–5 — Résumé · Apply settings + final review
// =====================================================================
const { T:rT, FD:rFD, FB:rFB, Bubble:RB, Question:RQ, PillRow:RPR, toggleArr:rTog,
  SubCard:RSub, Field:RF, CTA:RCta, InlineErr:RErr, Note:RNote, KV:RKV } = window;

const TAILORING = [
  { id:"Off", desc:"Send my résumé exactly as written." },
  { id:"Honest", desc:"Reorder and reword what's already true for each job." },
  { id:"Aggressive", desc:"Stretch adjacent experience to fit. You review before it goes." },
];

// ───────────────────────── CARD 4 · Résumé ───────────────────────────
function Card4({ st, set, locked, onNext, toast }) {
  const [err, setErr] = React.useState(null);
  const [parsing, setParsing] = React.useState(false);

  // Résumé arrives in step 1 — start reading it as soon as this card opens.
  React.useEffect(()=>{ if (st.resume && !st.parsed && !locked) drop(false); }, []);

  function drop(bad) {
    if (bad) return setErr("That's a .pages file at 18 MB. Use a PDF or DOCX under 10 MB.");
    setErr(null); setParsing(true);
    setTimeout(()=>{ setParsing(false); set({resume: st.resume || "Vinodh_Resume_2026.pdf", parsed:true}); }, 1200);
  }

  return (
    <>
      <RB>Here's what I read off the résumé you uploaded — <b>that's 12 fewer form fields per application.</b></RB>

      {!st.parsed ? (
        <div style={{display:"flex", flexDirection:"column", gap:8}}>
          <div onClick={()=>!locked && !parsing && drop(false)} style={{
            background: err ? "#FFF6F3" : "#fff", borderRadius:18, padding:18,
            border:`2px dashed ${err ? rT.blush : (parsing ? rT.cyanInk : rT.hairline)}`,
            display:"flex", alignItems:"center", gap:14, cursor: locked||parsing ? "default" : "pointer"}}>
            <div style={{width:48, height:48, borderRadius:12, background: err ? rT.blush : rT.cream,
              color: err ? rT.blushInk : rT.ink, display:"grid", placeItems:"center", fontSize:21, fontWeight:800}}>
              {parsing ? <span className="rotate">⟳</span> : err ? "!" : "↑"}
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:15, fontWeight:700, color: err ? rT.blushInk : rT.ink}}>
                {parsing ? "Reading your résumé…" : err ? "That file won't upload" : "Drop your résumé, or tap to browse"}
              </div>
              <div style={{fontSize:12.5, color: err ? rT.blushInk : rT.muted, fontWeight:600, marginTop:2}}>
                {parsing ? "Pulling out your history…" : err ? "Use a PDF or DOCX under 10 MB." : "PDF · DOCX · under 10 MB"}
              </div>
            </div>
          </div>
          {!parsing && !locked && (
            <div style={{display:"flex", gap:14, fontSize:12, fontWeight:700}}>
              {err
                ? <button onClick={()=>{setErr(null); drop(false);}} style={{color:rT.cyanInk, cursor:"pointer"}}>Try another file</button>
                : <button onClick={()=>drop(true)} style={{color:rT.muted, cursor:"pointer"}}>▸ preview: bad file</button>}
              <button onClick={()=>{ set({parsed:true, resume:"entered by hand"}); }}
                style={{color:rT.muted, cursor:"pointer"}}>I'll type it instead</button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div style={{display:"flex", alignItems:"center", gap:13, background:rT.mint, borderRadius:16, padding:"13px 15px"}}>
            <div style={{width:38, height:38, borderRadius:10, background:rT.mintInk, color:"#fff",
              display:"grid", placeItems:"center", fontSize:17, fontWeight:800}}>✓</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontSize:14.5, fontWeight:700, color:rT.mintInk}}>{st.resume}</div>
              <div style={{fontSize:12, fontWeight:600, color:rT.mintInk, opacity:.8}}>Read cover to cover. Fix anything I got wrong.</div>
            </div>
            {!locked && <button onClick={()=>set({parsed:false, resume:null})}
              style={{fontSize:12.5, fontWeight:700, color:rT.mintInk, cursor:"pointer"}}>Replace</button>}
          </div>

          <RSub title="What I pulled out" tint={rT.mintInk}>
            <ParsedRow k="Name" v={st.p.name} onEdit={v=>set({p:{...st.p, name:v}})} locked={locked}/>
            <ParsedRow k="Headline" v={st.p.headline} onEdit={v=>set({p:{...st.p, headline:v}})} locked={locked}/>
            <ParsedRow k="Years of experience" v={st.p.years} onEdit={v=>set({p:{...st.p, years:v}})} locked={locked}/>
            <ParsedRow k="Location" v={st.p.location} onEdit={v=>set({p:{...st.p, location:v}})} locked={locked}/>
          </RSub>

          <RQ label="Skills" hint="tap × to drop one">
            <div style={{display:"flex", flexWrap:"wrap", gap:6}}>
              {st.p.skills.map(s=>(
                <span key={s} style={{display:"inline-flex", alignItems:"center", gap:7, padding:"7px 10px 7px 13px",
                  borderRadius:999, background:"#fff", border:`1.5px solid ${rT.hairline}`, fontSize:13, fontWeight:700,
                  color:rT.ink}}>
                  {s}
                  {!locked && <button onClick={()=>set({p:{...st.p, skills: st.p.skills.filter(x=>x!==s)}})}
                    style={{fontSize:14, color:rT.muted, cursor:"pointer", lineHeight:1}}>×</button>}
                </span>
              ))}
              {!st.p.skills.length && <div style={{fontSize:12.5, color:rT.muted, fontWeight:600}}>All cleared — I'll read skills off each job instead.</div>}
            </div>
          </RQ>

          <RSub title="Work history" tint={rT.cyanInk}>
            {st.p.jobs.map((j,i)=>(
              <div key={i} style={{display:"flex", gap:12, alignItems:"baseline", padding:"9px 11px",
                background:rT.cream, borderRadius:10}}>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:13.5, fontWeight:700, color:rT.ink}}>{j.role}</div>
                  <div style={{fontSize:12, fontWeight:600, color:rT.muted, marginTop:1}}>{j.co}</div>
                </div>
                <div style={{fontSize:12, fontWeight:700, color:rT.muted, flexShrink:0}}>{j.when}</div>
              </div>
            ))}
          </RSub>

          <RSub title="Education" tint={rT.lilacInk}>
            <div style={{display:"flex", gap:12, alignItems:"baseline", padding:"9px 11px", background:rT.cream, borderRadius:10}}>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:13.5, fontWeight:700, color:rT.ink}}>{st.p.edu.degree}</div>
                <div style={{fontSize:12, fontWeight:600, color:rT.muted, marginTop:1}}>{st.p.edu.school}</div>
              </div>
              <div style={{fontSize:12, fontWeight:700, color:rT.muted, flexShrink:0}}>{st.p.edu.when}</div>
            </div>
          </RSub>

          {!locked && <RCta label="Looks right — last step" onClick={onNext}/>}
        </>
      )}
    </>
  );
}

function ParsedRow({ k, v, onEdit, locked }) {
  const [editing, setEditing] = React.useState(false);
  return (
    <div style={{display:"flex", gap:12, alignItems:"center", padding:"9px 11px", background:rT.cream, borderRadius:10}}>
      <div style={{fontSize:11.5, fontWeight:700, color:rT.muted, width:130, flexShrink:0}}>{k}</div>
      {editing
        ? <input autoFocus value={v} onChange={e=>onEdit(e.target.value)} onBlur={()=>setEditing(false)}
            style={{flex:1, minWidth:0, border:`1.5px solid ${rT.ink}`, borderRadius:8, padding:"6px 9px",
              outline:"none", fontFamily:rFB, fontSize:13, fontWeight:700, color:rT.ink}}/>
        : <div style={{flex:1, fontSize:13.5, fontWeight:700, color:rT.ink}}>{v}</div>}
      {!locked && !editing && <button onClick={()=>setEditing(true)}
        style={{fontSize:11.5, fontWeight:700, color:rT.muted, cursor:"pointer", flexShrink:0}}>edit</button>}
    </div>
  );
}

// ──────────────── CARD 5 · Apply settings + final review ─────────────
function Card5({ st, set, onActivate }) {
  const elig = st.targets.length
    ? st.targets.map(c=>{
        const e = st.elig[c]||{};
        return `${c} — ${e.authorized==="Yes" ? "authorized" : e.visa ? e.visa : "not authorized"}${e.sponsorship==="Yes" ? ", needs sponsorship" : ""}`;
      }).join(" · ")
    : "—";

  return (
    <>
      <RB>Last one: <b>how much do you want me to just handle it?</b></RB>

      <RQ label="Should I tailor your résumé per job?">
        <div style={{display:"flex", flexDirection:"column", gap:7}}>
          {TAILORING.map(o=>{
            const sel = st.tailoring === o.id;
            return (
              <div key={o.id} onClick={()=>set({tailoring:o.id})} style={{display:"flex", gap:12, alignItems:"center",
                padding:"12px 14px", borderRadius:14, cursor:"pointer", background: sel ? rT.ink : "#fff",
                border:`1.5px solid ${sel ? rT.ink : rT.hairline}`, transition:"all .15s"}}>
                <div style={{width:20, height:20, borderRadius:"50%", flexShrink:0, display:"grid", placeItems:"center",
                  background: sel ? "#fff" : "transparent", border: sel ? "none" : `1.5px solid ${rT.hairline}`,
                  color:rT.ink, fontSize:11, fontWeight:800}}>{sel && "✓"}</div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:14, fontWeight:700, color: sel ? "#fff" : rT.ink}}>{o.id}</div>
                  <div style={{fontSize:12.5, fontWeight:600, marginTop:2, lineHeight:1.35,
                    color: sel ? "rgba(255,255,255,.75)" : rT.muted}}>{o.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </RQ>

      <RQ label="Who presses send?">
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
          <RModeOpt sel={st.mode==="review"} onClick={()=>set({mode:"review"})} tint={rT.butter} icon="✋"
            badge="RECOMMENDED" title="Review before send" desc="I draft, you tap approve. ~90s per application."/>
          <RModeOpt sel={st.mode==="auto"} onClick={()=>set({mode:"auto"})} tint={rT.cyan} icon="🚀"
            badge="HANDS-OFF" title="Auto-Apply" desc="I submit while you sleep. Recap every morning."/>
        </div>
      </RQ>

      <RNote tint={rT.lilac} icon="🌿">
        Your first <b>5 applications are free</b>. After that I'll message you on WhatsApp to continue — I never charge
        you without asking first.
      </RNote>

      <RSub title="Before I start" tint={rT.ink}>
        <RKV k="Role" v={`${st.role}${st.engKinds.length ? " · " + st.engKinds.join(", ") : ""}`}/>
        <RKV k="Level & work" v={`${st.level} · ${st.types.join(", ")} · ${st.setting}`}/>
        <RKV k="Citizenship" v={st.citizenship.join(", ") || "—"}/>
        <RKV k="Work eligibility" v={elig}/>
        <RKV k="Contact" v={`${st.dial} ${st.phone || "—"}${st.whatsapp ? (st.verified ? " · WhatsApp verified" : " · WhatsApp pending") : " · email & text"}`}/>
        <RKV k="Résumé" v={st.resume || "—"}/>
        <RKV k="Apply settings" v={`Tailoring ${st.tailoring} · ${st.mode==="auto" ? "Auto-Apply" : "Review before send"}`}/>
      </RSub>

      <div style={{display:"flex", justifyContent:"flex-end", marginTop:8}}>
        <button onClick={onActivate} style={{padding:"15px 28px", borderRadius:999, background:rT.ink, color:"#fff",
          fontFamily:rFB, fontSize:15, fontWeight:700, border:"none", display:"inline-flex", alignItems:"center",
          gap:10, cursor:"pointer"}}>
          <window.Mascot size={22} cap={rT.cyan} mood="happy"/>
          <span>Looks good — activate Bloom →</span>
        </button>
      </div>
    </>
  );
}

function RModeOpt({ sel, onClick, tint, icon, badge, title, desc }) {
  return (
    <div onClick={onClick} style={{background: sel ? tint : "#fff", borderRadius:18, padding:"15px 15px",
      border: sel ? `2px solid ${rT.ink}` : `1.5px solid ${rT.hairline}`, cursor:"pointer",
      display:"flex", flexDirection:"column", gap:9, transition:"all .15s"}}>
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <div style={{fontSize:20}}>{icon}</div>
        <div style={{padding:"2px 8px", borderRadius:999, background: sel ? "rgba(255,255,255,.55)" : rT.cream,
          fontSize:9.5, fontWeight:800, color:rT.ink, letterSpacing:".04em"}}>{badge}</div>
        {sel && <div style={{marginLeft:"auto", width:21, height:21, borderRadius:"50%", background:rT.ink,
          color:"#fff", display:"grid", placeItems:"center", fontSize:11, fontWeight:800}}>✓</div>}
      </div>
      <div style={{fontFamily:rFD, fontWeight:700, fontSize:17, color:rT.ink, letterSpacing:"-0.025em"}}>{title}</div>
      <div style={{fontSize:12.5, color:rT.ink, opacity:.7, fontWeight:600, lineHeight:1.4}}>{desc}</div>
    </div>
  );
}

Object.assign(window, { Card4, Card5 });

// =====================================================================
// Backdoor V1 · Apply settings — one editable page
// =====================================================================
const { T:aT, FD:aFD, FB:aFB } = window;

function ASection({ n, title, sub, children, right }) {
  return (
    <section style={{padding:"26px 0", borderTop:`1px solid ${aT.hairline}`}}>
      <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:18}}>
        <div>
          <div style={{fontSize:10.5, fontWeight:800, color:aT.muted, letterSpacing:".09em", marginBottom:5}}>{n}</div>
          <div style={{fontFamily:aFD, fontWeight:700, fontSize:18, color:aT.ink}}>{title}</div>
          {sub && <div style={{fontSize:13, color:aT.muted, fontWeight:500, marginTop:3, lineHeight:1.5}}>{sub}</div>}
        </div>
        {right}
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:22}}>{children}</div>
    </section>
  );
}
function AField({ label, hint, children, tip }) {
  return (
    <div>
      <div style={{fontSize:14, fontWeight:700, color:aT.ink, marginBottom: hint ? 2 : 10}}>{label}</div>
      {hint && <div style={{fontSize:12.5, color:aT.muted, fontWeight:500, marginBottom:10, lineHeight:1.5}}>{hint}</div>}
      {children}
      {tip && <div style={{fontSize:12.5, color:"#0B7A7A", fontWeight:600, marginTop:8}}>{tip}</div>}
    </div>
  );
}
function APills({ options, values, onToggle, single }) {
  return (
    <div role={single ? "radiogroup" : "group"} style={{display:"flex", flexWrap:"wrap", gap:8}}>
      {options.map(o=>{
        const on = single ? values===o : values.includes(o);
        return (
          <button key={o} type="button" role={single ? "radio" : "checkbox"} aria-checked={on} onClick={()=>onToggle(o)}
            style={{display:"flex", alignItems:"center", gap:7, padding:"8px 14px 8px 11px", borderRadius:999, cursor:"pointer",
              fontFamily:aFB, fontSize:13, fontWeight:600, whiteSpace:"nowrap", background: on ? aT.ink : "#fff", color: on ? "#fff" : aT.ink,
              border:`1.5px solid ${on ? aT.ink : aT.hairline}`}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{opacity: on ? 1 : .5}}><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg>
            {o}
          </button>
        );
      })}
    </div>
  );
}
function ATags({ values, onChange, placeholder, max, suggestions, blocked, blockedLabel }) {
  const [v, setV] = React.useState("");
  const [warn, setWarn] = React.useState(null);
  const full = max && values.length>=max;
  const clash = s => (blocked||[]).find(b=>b.toLowerCase()===s.toLowerCase());
  const add = s => { s = s.trim(); if(!s) return;
    const hit = clash(s);
    if (hit) { setWarn(hit); return; }
    if(!values.some(x=>x.toLowerCase()===s.toLowerCase()) && !full) onChange([...values, s]); setV(""); setWarn(null); };
  const sugg = (suggestions||[]).filter(s=>!values.includes(s) && (!v || s.toLowerCase().includes(v.toLowerCase()))).slice(0,6);
  return (
    <div>
      <div style={{display:"flex", flexWrap:"wrap", gap:6, alignItems:"center", padding:"7px 9px", minHeight:44, boxSizing:"border-box",
        border:`1.5px solid ${aT.hairline}`, borderRadius:10, background:"#fff"}}>
        {values.map(x=>(
          <span key={x} style={{display:"inline-flex", alignItems:"center", gap:6, padding:"5px 6px 5px 11px", borderRadius:999, background:"#E6F0F1",
            fontSize:12.5, fontWeight:700, color:aT.ink}}>{x}
            <button type="button" aria-label={`Remove ${x}`} onClick={()=>onChange(values.filter(y=>y!==x))} style={{border:"none", background:"none",
              cursor:"pointer", color:aT.muted, fontSize:14, lineHeight:1, padding:"0 3px"}}>×</button>
          </span>
        ))}
        {!full && <input value={v} onChange={e=>{ setV(e.target.value); if(warn) setWarn(null); }} placeholder={values.length ? "" : placeholder}
          onKeyDown={e=>{ if(e.key==="Enter"||e.key===","){ e.preventDefault(); add(v); } if(e.key==="Backspace" && !v && values.length) onChange(values.slice(0,-1)); }}
          onBlur={()=>v && add(v)} aria-invalid={!!warn} style={{flex:1, minWidth:140, border:"none", outline:"none", fontFamily:aFB, fontSize:13.5, fontWeight:500, color:aT.ink, padding:"4px 2px"}}/>}
      </div>
      {warn && (
        <div role="alert" style={{display:"flex", alignItems:"flex-start", gap:7, marginTop:8, fontSize:12.5, fontWeight:600, color:"#8A5A00", lineHeight:1.45}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0, marginTop:2}}><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <span><b>{warn}</b> is already in {blockedLabel}. Remove it there first.</span>
        </div>
      )}
      {sugg.length>0 && !full && (
        <div style={{display:"flex", flexWrap:"wrap", gap:6, marginTop:8}}>
          {sugg.map(s=><button key={s} type="button" onClick={()=>add(s)} style={{padding:"4px 10px", borderRadius:999, border:`1px dashed ${aT.hairline}`,
            background:"#fff", fontFamily:aFB, fontSize:12, fontWeight:600, color:aT.muted, cursor:"pointer"}}>+ {s}</button>)}
        </div>
      )}
    </div>
  );
}
function ASwitchRow({ label, hint, on, onToggle, children }) {
  return (
    <div style={{border:`1px solid ${aT.hairline}`, borderRadius:12, padding:"14px 16px"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
        <div>
          <div style={{fontSize:14, fontWeight:700, color:aT.ink}}>{label}</div>
          {hint && <div style={{fontSize:12.5, color:aT.muted, fontWeight:500, marginTop:2}}>{hint}</div>}
        </div>
        <window.TSwitch on={on} onToggle={onToggle} label={label}/>
      </div>
      {on && children && <div style={{marginTop:14, display:"flex", flexDirection:"column", gap:12}}>{children}</div>}
    </div>
  );
}

const A_QUALITY = [
  { k:"Good", min:70, week:26, desc:"Includes solid but slightly weaker matches. A wider net, more applications." },
  { k:"Strong", min:80, week:12, desc:"Confidently on-target matches. A balanced mix of volume and fit." },
  { k:"Excellent", min:90, week:4, desc:"Only your very best matches. Fewest applications, highest fit." },
];

function ApplySettingsPanel({ st, set, goProfile }) {
  const isAuto = st.mode === "auto";
  const [s, setS] = React.useState({
    titles:["Software Engineer","Backend Engineer"], seniority:["Mid","Senior"], types:["Full-time"],
    remote:true, remoteIn:"United States", zones:["Eastern","Central"], flexZone:true,
    onsite:false, cities:["New York, NY"],
    salary:140, period:"year", noPay:true, sponsor:false,
    quality:"Strong", cap:10, askEssay:true, askLong:false, coverText:"Hi [Company] team,\n\nI'm applying for the [Role] position. I'm a backend-leaning full-stack engineer with 6 years building payments and platform infrastructure, most recently at Groww, where I own the payouts service handling 40k+ daily transactions.\n\nI work mostly in Node.js, TypeScript and PostgreSQL, and I'm comfortable owning a service end to end, from schema design to on-call. I'd bring that same ownership to [Company].\n\nThanks for your time. I'd love to talk.\n\nVinodh Kumar", coverEdited:false,
    industries:[], include:[], exclude:[], companies:["Staffing firms"], notes:"", advOpen:false,
  });
  const [saving, setSaving] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const tRef = React.useRef(null);
  const ping = () => { setTouched(true); setSaving(true); clearTimeout(tRef.current); tRef.current = setTimeout(()=>setSaving(false), 700); };
  const u = p => { setS(x=>({...x, ...p})); if(!("advOpen" in p)) ping(); };
  const setMode = m => { set({mode:m}); ping(); };
  const tog = (k, v) => u({[k]: s[k].includes(v) ? s[k].filter(x=>x!==v) : [...s[k], v]});
  const q = A_QUALITY.find(x=>x.k===s.quality);
  const engKinds = st.engKinds || [];
  const levels = Array.isArray(st.level) ? st.level : (st.level ? [st.level] : []);
  const types = st.types || [];
  const est = Math.max(1, Math.round(q.week * (s.remote && s.onsite ? 1.4 : 1) * (s.noPay ? 1 : .55) * (levels.length>1 ? 1 : .6)));
  const advCount = s.industries.length + s.include.length + s.exclude.length + s.companies.length + (s.notes.trim() ? 1 : 0);
  const sel = {padding:"9px 32px 9px 12px", borderRadius:10, border:`1.5px solid ${aT.hairline}`, fontFamily:aFB, fontSize:13.5, fontWeight:600, color:aT.ink, background:"#fff", outline:"none", cursor:"pointer"};

  return (
    <div style={{maxWidth:760, margin:"0 auto", background:"#fff", border:`1px solid ${aT.hairline}`, borderRadius:16, padding:"8px 32px 12px"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"18px 0", flexWrap:"wrap"}}>
        <div style={{fontSize:13.5, fontWeight:600, color:aT.ink}}>
          About <b>{est} new matches a week</b> with these settings
        </div>
        <span role="status" aria-live="polite" style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:600, color: saving ? aT.muted : "#1F6B45"}}>
          {saving
            ? <React.Fragment><span className="bd-live-dot" style={{width:6, height:6, borderRadius:"50%", background:"#C9871F"}}/>Saving…</React.Fragment>
            : <React.Fragment><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{touched ? "Saved just now" : "Changes save automatically"}</React.Fragment>}
        </span>
      </div>

      <ASection n="01" title="How Bloom applies">
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:10}}>
          {[["auto","Full Auto Apply","Applies as soon as each application is ready.","assets/icon-fullauto.svg",true],
            ["review","Manual apply","Fills it in, you approve before it's sent.","assets/icon-manualapply.svg",false]].map(([k,t,d,ic,rec])=>{
            const on = st.mode===k || (k==="review" && !isAuto && st.mode!=="auto");
            return (
              <button key={k} type="button" role="radio" aria-checked={on} onClick={()=>setMode(k)} style={{textAlign:"left", display:"flex", gap:12, alignItems:"flex-start",
                padding:"14px 16px", borderRadius:12, cursor:"pointer", border:`1.5px solid ${on ? aT.ink : aT.hairline}`, background: on ? "#F4F8F8" : "#fff"}}>
                <img src={ic} alt="" style={{width:34, height:33, flexShrink:0}}/>
                <span style={{minWidth:0}}>
                  <span style={{display:"flex", alignItems:"center", gap:8, fontSize:14.5, fontWeight:700, color:aT.ink}}>{t}
                    {rec && <span style={{fontSize:10, fontWeight:800, letterSpacing:".06em", color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"2px 8px"}}>RECOMMENDED</span>}</span>
                  <span style={{display:"block", fontSize:12.5, color:aT.muted, fontWeight:500, marginTop:3, lineHeight:1.45}}>{d}</span>
                </span>
              </button>
            );
          })}
        </div>
        {isAuto && (
          <React.Fragment>
            <AField label="Daily limit" hint="Bloom spends it on your strongest matches first.">
              <div style={{display:"inline-flex", alignItems:"center", border:`1.5px solid ${aT.hairline}`, borderRadius:10, overflow:"hidden"}}>
                <button type="button" aria-label="Fewer" onClick={()=>u({cap:Math.max(1,s.cap-1)})} style={{width:38, height:38, border:"none", background:"#fff", cursor:"pointer", fontSize:18, color:aT.ink}}>−</button>
                <span style={{minWidth:90, textAlign:"center", fontSize:14, fontWeight:700}}>{s.cap} a day</span>
                <button type="button" aria-label="More" onClick={()=>u({cap:Math.min(50,s.cap+1)})} style={{width:38, height:38, border:"none", background:"#fff", cursor:"pointer", fontSize:18, color:aT.ink}}>+</button>
              </div>
            </AField>
          </React.Fragment>
        )}
        <AField label="Cover letter" hint="Bloom drafted this from your résumé and tailors it to each job before sending. Edit it anytime.">
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, marginBottom:8}}>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:12, fontWeight:700, color:"#0A6E6E", background:"#E0FAFA", borderRadius:999, padding:"4px 10px"}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>
              {s.coverEdited ? "Edited by you · still tailored per job" : "Drafted from your résumé"}
            </span>
            {s.coverEdited && (
              <button type="button" onClick={()=>u({coverText:"Hi [Company] team,\n\nI'm applying for the [Role] position. I'm a backend-leaning full-stack engineer with 6 years building payments and platform infrastructure, most recently at Groww, where I own the payouts service handling 40k+ daily transactions.\n\nI work mostly in Node.js, TypeScript and PostgreSQL, and I'm comfortable owning a service end to end, from schema design to on-call. I'd bring that same ownership to [Company].\n\nThanks for your time. I'd love to talk.\n\nVinodh Kumar", coverEdited:false})}
                style={{border:"none", background:"none", padding:0, fontFamily:"inherit", fontSize:12, fontWeight:700, color:aT.ink, textDecoration:"underline", cursor:"pointer"}}>Reset to Bloom's draft</button>
            )}
          </div>
          <textarea value={s.coverText} onChange={e=>u({coverText:e.target.value, coverEdited:true})} rows={11}
            placeholder={"Hi [Company] team,\n\nI'm excited to apply for the [Role] position..."}
            style={{width:"100%", boxSizing:"border-box", padding:"12px 14px", borderRadius:10, border:`1.5px solid ${aT.hairline}`,
              fontFamily:"inherit", fontSize:13.5, fontWeight:500, color:aT.ink, lineHeight:1.55, resize:"vertical", outline:"none"}}/>
          <div style={{display:"flex", justifyContent:"space-between", gap:12, marginTop:8, fontSize:12, color:aT.muted, fontWeight:600, lineHeight:1.5}}>
            <span>Tip: write <b style={{color:aT.ink}}>[Company]</b> and <b style={{color:aT.ink}}>[Role]</b> and Bloom fills them in for each job.</span>
            <span style={{flexShrink:0}}>{(s.coverText||"").trim() ? (s.coverText.trim().split(/\s+/).length + " words") : ""}</span>
          </div>
        </AField>
      </ASection>

      <ASection n="02" title="Jobs to look for">
        <AField label="Job titles" hint="From your onboarding. Bloom also matches close variations.">
          <window.QMultiSelect values={engKinds} options={window.Q_KINDS} placeholder="Select job titles…"
            onChange={v=>{ set({engKinds:v}); ping(); }}/>
        </AField>
        <AField label="Seniority" tip={levels.length<2 ? "Tip: pick 2 levels. Employers are often flexible on years of experience." : null}>
          <APills options={window.Q_LEVELS} values={levels} onToggle={v=>{ set({level: levels.includes(v) ? levels.filter(x=>x!==v) : [...levels, v]}); ping(); }}/>
        </AField>
        <AField label="Employment type">
          <APills options={window.Q_TYPES} values={types} onToggle={v=>{ set({types: types.includes(v) ? types.filter(x=>x!==v) : [...types, v]}); ping(); }}/>
        </AField>
        <AField label="Work setting">
          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            <ASwitchRow label="Remote jobs" on={s.remote} onToggle={()=>u({remote:!s.remote})}>
              <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
                <span style={{fontSize:13, fontWeight:600, color:aT.muted}}>Hiring in</span>
                <div style={{minWidth:240, flex:"1 1 240px", maxWidth:320}}>
                  <window.QDropdown value={s.remoteIn} onChange={v=>u({remoteIn:v})} options={["United States","Canada","United States & Canada"]}/>
                </div>
              </div>
              <div>
                <div style={{fontSize:13, fontWeight:600, color:aT.muted, marginBottom:8}}>Time zones</div>
                {(()=>{ const ALL=["Pacific","Mountain","Central","Eastern"]; const all = ALL.every(z=>s.zones.includes(z));
                  return <APills options={["All",...ALL]} values={all ? ["All",...ALL] : s.zones}
                    onToggle={v=> v==="All" ? u({zones: all ? [] : ALL}) : tog("zones", v)}/>; })()}
              </div>
            </ASwitchRow>
            <ASwitchRow label="On-site / hybrid jobs" on={s.onsite} onToggle={()=>u({onsite:!s.onsite})}>
              <ATags values={s.cities} onChange={v=>u({cities:v})} placeholder="Add a city" suggestions={["San Francisco, CA","Seattle, WA","Austin, TX","Toronto, ON"]}/>
            </ASwitchRow>
          </div>
        </AField>
        <AField label="Minimum salary" hint="Bloom skips jobs that list pay below this.">
          <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
            <div style={{display:"flex", alignItems:"center", border:`1.5px solid ${aT.hairline}`, borderRadius:10, background:"#fff"}}>
              <span style={{padding:"0 2px 0 12px", fontSize:14, fontWeight:700, color:aT.muted}}>$</span>
              <input type="number" min={0} aria-label="Minimum salary" value={s.period==="year" ? s.salary : Math.round(s.salary*1000/2080)}
                onChange={e=>{ const v=Number(e.target.value)||0; u({salary: s.period==="year" ? v : Math.round(v*2080/1000)}); }}
                style={{width:80, padding:"9px 4px", border:"none", outline:"none", fontFamily:aFB, fontSize:14, fontWeight:700, color:aT.ink}}/>
              <span style={{padding:"0 12px 0 0", fontSize:13, fontWeight:700, color:aT.muted}}>{s.period==="year" ? "k" : "/hr"}</span>
            </div>
            <APills single options={["Per year","Per hour"]} values={s.period==="year" ? "Per year" : "Per hour"} onToggle={o=>u({period: o==="Per year" ? "year" : "hour"})}/>
          </div>
        </AField>
      </ASection>

      <ASection n="03" title="Match quality" sub="Bloom only applies when a job clears this bar for your résumé.">
        <div role="radiogroup" aria-label="Match quality" style={{display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", gap:8}}>
          {A_QUALITY.map(x=>{
            const on = s.quality===x.k;
            return (
              <button key={x.k} type="button" role="radio" aria-checked={on} onClick={()=>u({quality:x.k})} style={{padding:"12px 10px", borderRadius:12, cursor:"pointer",
                border:`1.5px solid ${on ? aT.ink : aT.hairline}`, background: on ? "#F4F8F8" : "#fff", textAlign:"center"}}>
                <div style={{fontSize:14, fontWeight:700, color:aT.ink}}>{x.k}</div>
                <div style={{fontSize:12, fontWeight:600, color:aT.muted, marginTop:2}}>{x.min}%+ fit</div>
              </button>
            );
          })}
        </div>
        <div aria-live="polite" style={{fontSize:13, color:aT.muted, fontWeight:600, lineHeight:1.5}}>{q && q.desc}</div>
        {s.quality==="Excellent" && levels.includes("Entry") &&
          <div style={{fontSize:12.5, color:"#8A5A00", fontWeight:600}}>For entry-level roles, Strong usually finds far more jobs.</div>}
      </ASection>

      <section style={{padding:"22px 0 14px", borderTop:`1px solid ${aT.hairline}`}}>
        <button type="button" onClick={()=>u({advOpen:!s.advOpen})} aria-expanded={s.advOpen} style={{width:"100%", display:"flex", alignItems:"center",
          justifyContent:"space-between", background:"none", border:"none", padding:0, cursor:"pointer", fontFamily:aFB}}>
          <span style={{display:"flex", alignItems:"baseline", gap:10}}>
            <span style={{fontFamily:aFD, fontWeight:700, fontSize:18, color:aT.ink}}>Advanced filters</span>
            <span style={{fontSize:12.5, fontWeight:600, color:aT.muted}}>{advCount ? `${advCount} set` : "Optional"}</span>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={aT.muted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{transform: s.advOpen ? "rotate(180deg)" : "none", transition:"transform .15s"}}><path d="m6 9 6 6 6-6"/></svg>
        </button>
        {s.advOpen && (
          <div style={{display:"flex", flexDirection:"column", gap:22, marginTop:20}}>
            <AField label="Industries" hint="Leave empty for any industry.">
              <ATags values={s.industries} onChange={v=>u({industries:v})} placeholder="Add an industry" suggestions={["Fintech","SaaS","Healthcare","E-commerce","Developer tools"]}/>
            </AField>
            <AField label="Must mention" hint="Only apply if the job description includes any of these.">
              <ATags values={s.include} onChange={v=>u({include:v})} placeholder="e.g. Kafka, Go" blocked={s.exclude} blockedLabel="Skip if it mentions"/>
            </AField>
            <AField label="Skip if it mentions" hint="Skip any job whose description includes one of these.">
              <ATags values={s.exclude} onChange={v=>u({exclude:v})} placeholder="e.g. on-call, clearance" blocked={s.include} blockedLabel="Must mention"/>
            </AField>
            <AField label="Skip these companies">
              <ATags values={s.companies} onChange={v=>u({companies:v})} placeholder="Add a company"/>
            </AField>
          </div>
        )}
      </section>

      <div style={{borderTop:`1px solid ${aT.hairline}`, padding:"16px 0 10px", fontSize:12.5, color:aT.muted, fontWeight:500, lineHeight:1.55}}>
        Answers to common application questions (work authorization, notice period, salary expectations, LinkedIn) live in your{" "}
        <button type="button" onClick={goProfile} className="bd-textlink" style={{border:"none", background:"none", padding:0, fontFamily:aFB, fontSize:12.5, fontWeight:700, color:aT.ink, cursor:"pointer"}}>Profile</button>.
      </div>
    </div>
  );
}

Object.assign(window, { ApplySettingsPanel });

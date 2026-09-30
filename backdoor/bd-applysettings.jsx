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
  { k:"Good", min:70, week:26, desc:"Only apply to jobs where you meet most of the key requirements. A wider net, more applications." },
  { k:"Strong", min:80, week:12, desc:"Only apply to jobs where you meet nearly all the key requirements. A balanced mix of volume and fit." },
  { k:"Excellent", min:90, week:4, desc:"Only apply to jobs you're an outstanding fit for. Fewest applications, highest fit." },
];

function ApplySettingsPanel({ st, set, goProfile }) {
  const isAuto = st.mode === "auto";
  const [s, setS] = React.useState({
    titles:["Software Engineer","Backend Engineer"], seniority:["Mid","Senior"], types:["Full-time"],
    remote:true, remoteIn:"United States", zones:["Eastern","Central"], flexZone:true,
    onsite:false, cities:["New York, NY"],
    salary:140, period:"year", noPay:true, sponsor:false,
    quality:"Strong", cap:10, askEssay:true, askLong:false, coverText:"Hi [Company] team,\n\nI'm applying for the [Role] position. I'm a backend-leaning full-stack engineer with 6 years building payments and platform infrastructure, most recently at Groww, where I own the payouts service handling 40k+ daily transactions.\n\nI work mostly in Node.js, TypeScript and PostgreSQL, and I'm comfortable owning a service end to end, from schema design to on-call. I'd bring that same ownership to [Company].\n\nThanks for your time. I'd love to talk.\n\nVinodh Kumar", coverEdited:false,
    industries:[], include:[], exclude:[], companies:[], skipTypes:["Staffing firms","Recruiting agencies"], notes:"", advOpen:false,
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
  const advCount = s.industries.length + s.include.length + s.exclude.length + s.companies.length + (s.skipTypes||[]).length + (s.notes.trim() ? 1 : 0);
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
        {(() => {
          const qi = Math.max(0, A_QUALITY.findIndex(x=>x.k===s.quality));
          const pct = qi / (A_QUALITY.length-1) * 100;
          return (
            <div style={{background:"#E0FAFA", borderRadius:14, padding:"18px 20px 16px"}}>
              <div style={{display:"flex", alignItems:"flex-start", gap:8, fontSize:13.5, fontWeight:600, color:aT.ink, lineHeight:1.5}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A6E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0, marginTop:2}}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                <span aria-live="polite">{q && q.desc}</span>
              </div>
              <div style={{position:"relative", height:28, marginTop:16}}>
                <div style={{position:"absolute", left:0, right:0, top:12, height:4, borderRadius:999, background:"#fff"}}/>
                <div style={{position:"absolute", left:0, top:12, height:4, borderRadius:999, background:aT.ink, width:pct+"%", transition:"width .2s"}}/>
                <span style={{position:"absolute", top:5, left:`calc(${pct}% - 9px)`, width:18, height:18, borderRadius:"50%", background:aT.ink,
                  border:"3px solid #fff", boxSizing:"border-box", boxShadow:"0 1px 3px rgba(2,47,54,.25)", transition:"left .2s", pointerEvents:"none"}}/>
                <input type="range" min={0} max={A_QUALITY.length-1} step={1} value={qi} aria-label="Match quality"
                  aria-valuetext={`${A_QUALITY[qi].k}, ${A_QUALITY[qi].min}% match or higher`}
                  onChange={e=>u({quality:A_QUALITY[Number(e.target.value)].k})}
                  style={{position:"absolute", inset:0, width:"100%", height:"100%", margin:0, opacity:0, cursor:"pointer"}}/>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", marginTop:6}}>
                {A_QUALITY.map((x,i)=>{
                  const on = i===qi;
                  return (
                    <button key={x.k} type="button" onClick={()=>u({quality:x.k})} style={{border:"none", background:"none", padding:"2px 0", cursor:"pointer",
                      fontFamily:"inherit", fontSize:13, color:aT.ink, fontWeight: on ? 800 : 500,
                      textAlign: i===0 ? "left" : i===A_QUALITY.length-1 ? "right" : "center"}}>
                      {x.k}<span style={{fontWeight:500, color: on ? aT.ink : aT.muted}}> · {x.min}%+{i===0 ? " match" : ""}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })()}
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
            <AField label="Skip these companies" hint="Skip by company type, or add specific companies by name.">
              <div style={{display:"flex", flexDirection:"column", gap:14}}>
                <div>
                  <div style={{fontSize:12, fontWeight:700, color:aT.muted, marginBottom:8}}>Company type</div>
                  <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                    {["Staffing firms","Recruiting agencies","Consultancies","Government","Defense","Crypto","Gambling"].map(t=>{
                      const on = (s.skipTypes||[]).includes(t);
                      return (
                        <button key={t} type="button" aria-pressed={on} onClick={()=>u({skipTypes: on ? s.skipTypes.filter(x=>x!==t) : [...(s.skipTypes||[]), t]})}
                          style={{display:"inline-flex", alignItems:"center", gap:6, padding:"7px 13px", borderRadius:999, cursor:"pointer",
                            fontFamily:"inherit", fontSize:12.5, fontWeight:700, whiteSpace:"nowrap",
                            background: on ? aT.ink : "#fff", color: on ? "#fff" : aT.ink, border:`1.5px solid ${on ? aT.ink : aT.hairline}`}}>
                          {on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div style={{fontSize:12, fontWeight:700, color:aT.muted, marginBottom:8}}>Company name</div>
                  <ATags values={s.companies} onChange={v=>u({companies:v})} placeholder="Type a company, e.g. your current employer"
                    suggestions={["Google","Meta","Amazon","Infosys","TCS","Accenture"]}/>
                </div>
              </div>
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

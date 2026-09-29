// =====================================================================
// Backdoor V1 · Tracker — Kanban application tracker
// =====================================================================
const { T:tT, FD:tFD, FB:tFB } = window;

const T_COLS = [
  { key:"running", label:"Running", color:"#7A5FD9" },
  { key:"failed", label:"Failed", color:"#C1443B" },
  { key:"applied", label:"Applied", color:"#0B5FB3" },
  { key:"interviewing", label:"Interviewing", color:"#0BB3B3" },
  { key:"ghosted", label:"Ghosted", color:"#9AA3A5" },
  { key:"rejected", label:"Rejected", color:"#B3261E" },
];

const T_JOBS = [
  { id:"stripe", co:"Stripe", role:"Backend Engineer — Payments Infra", col:"running", date:"Just now", emails:0,
    location:"United States · Remote", workType:"Remote", level:"Senior", tags:["Remote","Full-time"],
    responsibilities:"Bloom is filling out this application now — matching your résumé to Stripe's requirements and answering screening questions on your behalf.",
    requirements:["Node.js","Postgres","Distributed systems"],
    timeline:[{ label:"Bloom started this application", tone:"blue", date:"Just now" }] },
  { id:"inspectorio", co:"Inspectorio", role:"Software Engineer", col:"failed", date:"Jul 7", emails:0,
    location:"United States · Remote", workType:"Remote", level:"Mid", tags:["Remote","Full-time"],
    responsibilities:"Bloom couldn't finish submitting this one — the employer's form needed a manual step Bloom doesn't handle yet. Retry to have Bloom try again, or finish it yourself.",
    requirements:["React","TypeScript"],
    timeline:[
      { label:"Bloom started this application", tone:"blue", date:"Jul 7, 2026 · 8:40 AM" },
      { label:"Submission failed — form step not supported", tone:"red", date:"Jul 7, 2026 · 8:41 AM" },
    ] },
  { id:"ramp", co:"Ramp", role:"Full-Stack Engineer (Growth)", col:"applied", date:"Jul 7", emails:0,
    location:"United States · Remote", workType:"Remote", level:"Mid", tags:["Remote","Full-time"],
    responsibilities:"Ramp is building the finance stack for growing companies. As a Full-Stack Engineer on Growth, you'll own features end to end across our onboarding and card-issuing flows, working closely with design and data to move core activation metrics. You'll ship to production multiple times a week and pair with a small, senior team.",
    requirements:["TypeScript","React","Node.js","SQL"],
    timeline:[{ label:"Bloom submitted your application", tone:"green", date:"Jul 7, 2026 · 9:12 AM" }] },
  { id:"deel", co:"Deel", role:"Software Engineer, Payroll", col:"applied", date:"Jul 7", emails:1,
    location:"United States · Remote", workType:"Remote", level:"Mid", tags:["Remote","Full-time"],
    responsibilities:"Deel's Payroll team keeps compliant pay running across 150+ countries. You'll build the services that calculate, validate, and reconcile payroll runs at scale, and work directly with compliance teams to encode country-specific rules into the platform.",
    requirements:["Go","PostgreSQL","Kafka"],
    timeline:[
      { label:"Bloom submitted your application", tone:"green", date:"Jul 7, 2026 · 9:14 AM" },
      { label:"Confirmation email received", tone:"blue", date:"Jul 8, 2026 · 2:03 PM" },
    ] },
  { id:"rippling", co:"Rippling", role:"Backend Engineer, Platform", col:"interviewing", date:"Jul 3", emails:2,
    location:"United States · Remote", workType:"Remote", level:"Senior", tags:["Remote","Full-time"],
    responsibilities:"Rippling's Platform team owns the primitives every product team builds on — auth, permissions, and the employee data graph. You'll design APIs used by 50+ internal teams and own reliability for systems that can't go down.",
    requirements:["Node.js","PostgreSQL","AWS"],
    timeline:[
      { label:"Bloom submitted your application", tone:"green", date:"Jul 3, 2026 · 11:40 AM" },
      { label:"Reply detected — recruiter screen requested", tone:"blue", date:"Jul 4, 2026 · 4:20 PM" },
      { label:"Interview scheduled — recruiter screen", tone:"teal", date:"Jul 9, 2026 · 10:00 AM" },
    ] },
  { id:"vercel", co:"Vercel", role:"Software Engineer, Frontend Platform", col:"ghosted", date:"Jun 20", emails:0,
    location:"United States · Remote", workType:"Remote", level:"Mid", tags:["Remote","Full-time"],
    responsibilities:"Vercel builds the platform behind Next.js. This role sits on Frontend Platform, shipping the primitives that power every deploy preview and edge render across the product.",
    requirements:["React","TypeScript","Edge runtimes"],
    timeline:[{ label:"Bloom submitted your application", tone:"green", date:"Jun 20, 2026 · 10:05 AM" }] },
  { id:"brex", co:"Brex", role:"Senior Backend Engineer", col:"rejected", date:"Jun 29", emails:2,
    location:"United States · Remote", workType:"Remote", level:"Senior", tags:["Remote","Full-time"],
    responsibilities:"Brex is building the finance platform for ambitious companies. As a Senior Backend Engineer, you'd own core ledger and reconciliation services processing billions in transaction volume, with heavy emphasis on correctness and auditability.",
    requirements:["Java","Kafka","PostgreSQL"],
    timeline:[
      { label:"Bloom submitted your application", tone:"green", date:"Jun 29, 2026 · 8:02 AM" },
      { label:"Confirmation email received", tone:"blue", date:"Jun 30, 2026 · 1:15 PM" },
      { label:"Rejection email received", tone:"red", date:"Jul 5, 2026 · 3:47 PM" },
    ] },
  { id:"notion", co:"Notion", role:"Software Engineer, Search", col:"rejected", date:"Jun 25", emails:2,
    location:"United States · Remote", workType:"Remote", level:"Mid", tags:["Remote","Full-time"],
    responsibilities:"Notion's Search team makes every workspace instantly findable. You'll work on ranking, indexing, and query understanding for a corpus that spans billions of blocks, balancing relevance with strict latency budgets.",
    requirements:["TypeScript","Elasticsearch","Rust"],
    timeline:[
      { label:"Bloom submitted your application", tone:"green", date:"Jun 25, 2026 · 9:30 AM" },
      { label:"Confirmation email received", tone:"blue", date:"Jun 26, 2026 · 11:02 AM" },
      { label:"Rejection email received", tone:"red", date:"Jul 1, 2026 · 5:18 PM" },
    ] },
];

const T_TONE = {
  green:{fg:"#14663F", bg:"#DFF6E8"}, blue:{fg:"#0B5FB3", bg:"#E1EFFB"}, teal:{fg:"#0B7A7A", bg:"#DDF5F5"}, red:{fg:"#B3261E", bg:"#FBE3E1"},
};

function TCard({ job, onClick }) {
  return (
    <button onClick={onClick} style={{textAlign:"left", width:"100%", background:"#fff", border:`1px solid ${tT.hairline}`,
      borderRadius:12, padding:"14px 16px", cursor:"pointer", display:"flex", gap:12, alignItems:"flex-start"}}>
      <span style={{width:38, height:38, borderRadius:9, flexShrink:0, overflow:"hidden"}}>
        <window.CLogo co={job.co} size={38}/>
      </span>
      <div style={{minWidth:0}}>
        <div style={{fontFamily:tFD, fontWeight:700, fontSize:15, color:tT.ink, marginBottom:2}}>{job.co}</div>
        <div style={{fontSize:12.5, color:tT.muted, fontWeight:600, marginBottom:8, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{job.role}</div>
        {job.col==="failed"
          ? <div style={{display:"flex", alignItems:"center", gap:8}}>
              <span onClick={e=>e.stopPropagation()} style={{fontSize:11.5, fontWeight:700, color:tT.ink, background:"#F1F3F4",
                borderRadius:7, padding:"5px 10px", display:"inline-flex", alignItems:"center", gap:5}}>↻ Retry</span>
              <span style={{fontSize:11.5, color:tT.muted, fontWeight:600}}>{job.date}</span>
            </div>
          : <div style={{fontSize:11.5, color:tT.muted, fontWeight:600, display:"flex", alignItems:"center", gap:6}}>
              {job.date}{job.emails>0 && <>· ✉ {job.emails} email{job.emails>1?"s":""}</>}
            </div>}
      </div>
    </button>
  );
}

function TDetailPanel({ job, onClose }) {
  const [tab, setTab] = React.useState("overview");
  return (
    <div style={{position:"fixed", inset:0, zIndex:60, display:"flex", justifyContent:"flex-end"}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:640, maxWidth:"92vw", background:"#FFFCF6", height:"100%",
        display:"flex", flexDirection:"column", boxShadow:"-8px 0 30px rgba(0,0,0,.12)"}}>
        <div style={{padding:"26px 30px 0", flexShrink:0}}>
          <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:18}}>
            <div style={{fontFamily:tFD, fontWeight:700, fontSize:22, color:tT.ink, letterSpacing:"-0.02em", maxWidth:520}}>{job.role}</div>
            <button onClick={onClose} style={{border:"none", background:"none", fontSize:22, color:tT.muted, cursor:"pointer", flexShrink:0}}>×</button>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:16}}>
            <span style={{width:44, height:44, borderRadius:10, flexShrink:0, overflow:"hidden"}}>
              <window.CLogo co={job.co} size={44}/>
            </span>
            <div>
              <div style={{fontFamily:tFD, fontWeight:700, fontSize:15, color:tT.ink}}>{job.co}</div>
              <div style={{display:"flex", alignItems:"center", gap:14, fontSize:12.5, color:tT.muted, fontWeight:600, marginTop:2}}>
                <span>📍 {job.location}</span><span>🏠 {job.workType}</span><span>👑 {job.level}</span>
              </div>
            </div>
          </div>
          <div style={{display:"flex", gap:8, marginBottom:20}}>
            {job.tags.map(t=>(
              <span key={t} style={{fontSize:12, fontWeight:700, color:tT.ink, border:`1.5px solid ${tT.hairline}`,
                borderRadius:999, padding:"6px 14px", background:"#fff"}}>{t}</span>
            ))}
          </div>
          <div style={{display:"flex", gap:6, borderBottom:`1px solid ${tT.hairline}`}}>
            <button onClick={()=>setTab("overview")} style={{display:"flex", alignItems:"center", gap:7, padding:"10px 16px",
              border:"none", background: tab==="overview" ? "#F1EFE9" : "transparent", borderRadius:"10px 10px 0 0",
              fontFamily:tFB, fontSize:13.5, fontWeight:700, color:tT.ink, cursor:"pointer"}}>📋 Overview</button>
            <button onClick={()=>setTab("resume")} style={{display:"flex", alignItems:"center", gap:7, padding:"10px 16px",
              border:"none", background: tab==="resume" ? "#F1EFE9" : "transparent", borderRadius:"10px 10px 0 0",
              fontFamily:tFB, fontSize:13.5, fontWeight:700, color:tT.ink, cursor:"pointer"}}>📄 Résumé</button>
          </div>
        </div>

        <div style={{flex:1, overflow:"auto", padding:"24px 30px 40px"}}>
          {tab==="overview" ? (
            <div style={{display:"grid", gridTemplateColumns:"1fr 240px", gap:24, alignItems:"start"}}>
              <div>
                <div style={{fontFamily:tFD, fontWeight:700, fontSize:15, marginBottom:6}}>Role</div>
                <div style={{fontSize:13.5, color:tT.ink, fontWeight:500, marginBottom:22}}>{job.role}</div>
                <div style={{fontFamily:tFD, fontWeight:700, fontSize:15, marginBottom:6}}>Key Responsibilities</div>
                <div style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.65, marginBottom:22}}>{job.responsibilities}</div>
                <div style={{fontFamily:tFD, fontWeight:700, fontSize:15, marginBottom:10}}>Requirements</div>
                <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:6}}>
                  {job.requirements.map(r=>(
                    <li key={r} style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500}}>{r}</li>
                  ))}
                </ul>
              </div>
              <div style={{background:"#EEF1FB", borderRadius:14, padding:"18px 18px"}}>
                <div style={{fontFamily:tFD, fontWeight:700, fontSize:14.5, marginBottom:14}}>Application Timeline</div>
                <div style={{display:"flex", flexDirection:"column", gap:14}}>
                  {job.timeline.map((ev,i)=>{
                    const tone = T_TONE[ev.tone];
                    return (
                      <div key={i} style={{display:"flex", gap:10, alignItems:"flex-start"}}>
                        <span style={{width:22, height:22, borderRadius:"50%", background:tone.fg, color:"#fff",
                          display:"grid", placeItems:"center", fontSize:12, flexShrink:0, marginTop:1}}>✓</span>
                        <div>
                          <div style={{fontSize:13, fontWeight:700, color:tT.ink}}>{ev.label}</div>
                          <div style={{fontSize:11.5, color:tT.muted, fontWeight:600}}>{ev.date}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div style={{background:"#fff", border:`1px solid ${tT.hairline}`, borderRadius:14, padding:"40px 30px",
              display:"flex", flexDirection:"column", alignItems:"center", gap:10, textAlign:"center"}}>
              <span style={{fontSize:28}}>📄</span>
              <div style={{fontFamily:tFD, fontWeight:700, fontSize:15}}>Vinodh_Resume_2026.pdf</div>
              <div style={{fontSize:12.5, color:tT.muted, fontWeight:600, maxWidth:320}}>The résumé submitted with this application. Tailored automatically to match {job.co}'s job description.</div>
              <button style={{marginTop:6, padding:"9px 18px", borderRadius:999, border:`1.5px solid ${tT.hairline}`,
                background:"#fff", fontFamily:tFB, fontSize:13, fontWeight:700, color:tT.ink, cursor:"pointer"}}>View résumé</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Q_JOBS = [
  { id:"linear", co:"Linear", role:"Sr. Product Designer", fit:96, comp:"$185\u2013230k", drafted:"8m ago", sendIn:"~1m", badge:"L", badgeBg:"#6C63D1", qs:10 },
  { id:"figma", co:"Figma", role:"Staff Product Designer", fit:91, comp:"$210\u2013260k", drafted:"22m ago", sendIn:"~8m", badge:"F", badgeBg:"#1ABC7B", qs:8 },
  { id:"cashapp", co:"Cash App \u00b7 Money", role:"Senior Designer", fit:88, comp:"$180\u2013220k", drafted:"31m ago", sendIn:"~15m", badge:"$", badgeBg:"#1ABC7B", qs:6 },
  { id:"vercel", co:"Vercel \u00b7 DX", role:"Sr. Designer", fit:89, comp:"$190\u2013230k", drafted:"1h ago", sendIn:"~22m", badge:"V", badgeBg:"#111", qs:9 },
];

function QBadge({ job, size }) {
  const s = size || 38;
  return (
    <span style={{width:s, height:s, borderRadius:s>32?10:8, background:job.badgeBg, color:"#fff", flexShrink:0,
      display:"grid", placeItems:"center", fontSize:s*0.42, fontWeight:800}}>{job.badge}</span>
  );
}

function QueueCard({ job, mode, onReview }) {
  const auto = mode==="auto";
  return (
    <div style={{background:"#fff", border:`1px solid ${tT.hairline}`, borderRadius:14, padding:"16px 16px"}}>
      <div style={{display:"flex", alignItems:"flex-start", gap:12, marginBottom:12}}>
        {!auto && <span style={{width:18, height:18, borderRadius:5, border:`1.5px solid ${tT.hairline}`, flexShrink:0, marginTop:2}}/>}
        <QBadge job={job}/>
        <div style={{minWidth:0, flex:1}}>
          <div style={{fontFamily:tFD, fontWeight:700, fontSize:14.5, color:tT.ink, lineHeight:1.3}}>{job.role}</div>
          <div style={{display:"flex", alignItems:"center", gap:8, marginTop:3}}>
            <span style={{fontSize:12, color:tT.muted, fontWeight:600}}>{job.co}</span>
            <span style={{fontSize:11, fontWeight:800, color:"#0B7A7A", background:"#DDF5F5", borderRadius:999, padding:"2px 8px"}}>{job.fit}%</span>
          </div>
        </div>
      </div>
      {auto ? (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:8, border:"1.5px dashed #E08A3C",
          background:"#FDF1E4", borderRadius:999, padding:"9px 0", marginBottom:10}}>
          <span style={{width:6, height:6, borderRadius:"50%", background:"#E08A3C"}}/>
          <span style={{fontFamily:tFD, fontWeight:700, fontSize:13, color:tT.ink}}>Sending in {job.sendIn}</span>
        </div>
      ) : (
        <button onClick={onReview} style={{width:"100%", padding:"11px 0", borderRadius:999, background:tT.ink, color:"#fff",
          border:"none", fontFamily:tFB, fontSize:13.5, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center",
          justifyContent:"center", gap:6, marginBottom:10}}>Review & approve</button>
      )}
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <span style={{fontSize:11.5, color:tT.muted, fontWeight:600}}>Bloom drafted {job.drafted}</span>
        {auto ? <span style={{fontSize:11.5, color:tT.muted, fontWeight:700}}>Auto</span>
          : <span style={{fontSize:11.5, color:"#B3611E", fontWeight:700}}>{job.qs} Qs</span>}
      </div>
      <div style={{display:"flex", alignItems:"center", gap:14, marginTop:10, fontSize:15, color:tT.muted}}>
        <span style={{cursor:"pointer"}}>👍</span><span style={{cursor:"pointer"}}>👎</span>
      </div>
    </div>
  );
}

function QueueColumn({ mode, jobs, onApplyAll, onReviewNext }) {
  const auto = mode==="auto";
  const n = jobs.length;
  const color = "#C9871F";
  return (
    <div style={{minWidth:0}}>
      <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", paddingBottom:10,
        borderBottom:`2px solid ${color}`, marginBottom:14}}>
        <span style={{fontSize:11.5, fontWeight:800, letterSpacing:".07em", color:tT.ink}}>{(auto?"READY TO SEND":"UP NEXT")}</span>
        <span style={{fontSize:13, fontWeight:700, color:tT.muted}}>{n}</span>
      </div>
      {n===0 ? (
        <div style={{fontSize:13, color:tT.muted, fontWeight:600}}>No applications</div>
      ) : (
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {auto ? (
            <button onClick={onApplyAll} style={{width:"100%", padding:"11px 0", borderRadius:999, background:tT.ink, color:"#fff",
              border:"none", fontFamily:tFD, fontSize:13, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center",
              justifyContent:"center", gap:6}}>\u2726 Apply to all {n}</button>
          ) : (
            <button onClick={onReviewNext} style={{width:"100%", padding:"11px 0", borderRadius:999, background:"#fff", color:tT.ink,
              border:`1.5px solid ${tT.ink}`, fontFamily:tFD, fontSize:13, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center",
              justifyContent:"center", gap:6}}>🖐️ Review next</button>
          )}
          {jobs.map(j=><QueueCard key={j.id} job={j} mode={mode}/>)}
        </div>
      )}
    </div>
  );
}

function ApplyAllModal({ jobs, onDone }) {
  const [i, setI] = React.useState(0);
  React.useEffect(()=>{
    if (i >= jobs.length) { const t=setTimeout(onDone, 900); return ()=>clearTimeout(t); }
    const t = setTimeout(()=>setI(v=>v+1), 1400);
    return ()=>clearTimeout(t);
  }, [i]);
  const pct = Math.min(100, Math.round((i/jobs.length)*100));
  return (
    <div style={{position:"fixed", inset:0, zIndex:80, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(2,30,36,.5)"}}>
      <div style={{width:480, maxWidth:"92vw", maxHeight:"85vh", borderRadius:20, overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 20px 60px rgba(0,0,0,.3)"}}>
        <div style={{background:tT.ink, color:"#fff", padding:"22px 26px"}}>
          <div style={{display:"flex", alignItems:"center", gap:7, marginBottom:8}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#0BB3B3"}}/>
            <span style={{fontSize:11, fontWeight:800, letterSpacing:".08em", color:"#7FE0E0"}}>APPLYING...</span>
          </div>
          <div style={{fontFamily:tFD, fontWeight:700, fontSize:19, marginBottom:4}}>Bloom is applying to {jobs.length} roles</div>
          <div style={{fontSize:13, opacity:.75, fontWeight:500, marginBottom:16}}>Filling each form in your voice \u2014 no tabs, no typing.</div>
          <div style={{height:6, borderRadius:999, background:"rgba(255,255,255,.18)", overflow:"hidden"}}>
            <div style={{height:"100%", width:`${pct}%`, background:"#0BB3B3", borderRadius:999, transition:"width .4s ease"}}/>
          </div>
        </div>
        <div style={{background:"#fff", padding:"18px 20px", overflow:"auto", flex:1, display:"flex", flexDirection:"column", gap:10}}>
          {jobs.map((j,idx)=>{
            const state = idx < i ? "done" : idx===i ? "active" : "queued";
            return (
              <div key={j.id} style={{display:"flex", alignItems:"center", gap:12, padding:"12px 14px", borderRadius:12,
                background: state==="done" ? "#DFF6E8" : state==="active" ? "#FDF1E4" : "#fff",
                border: state==="queued" ? `1px solid ${tT.hairline}` : "none"}}>
                <QBadge job={j} size={30}/>
                <div style={{minWidth:0, flex:1}}>
                  <div style={{fontSize:13.5, fontWeight:700, color:tT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.co} \u00b7 {j.role}</div>
                  <div style={{fontSize:11.5, color:tT.muted, fontWeight:600}}>{j.fit}% fit \u00b7 {j.comp}</div>
                </div>
                {state==="done" && <span style={{width:22, height:22, borderRadius:"50%", background:"#1F8A5B", color:"#fff",
                  display:"grid", placeItems:"center", fontSize:12, flexShrink:0}}>\u2713</span>}
                {state==="active" && <span style={{display:"flex", gap:3, flexShrink:0}}>
                  {[0,1,2].map(d=><span key={d} style={{width:5, height:5, borderRadius:"50%", background:"#E08A3C"}}/>)}
                </span>}
                {state==="queued" && <span style={{fontSize:11.5, color:tT.muted, fontWeight:700, flexShrink:0}}>queued</span>}
              </div>
            );
          })}
        </div>
        <div style={{textAlign:"center", fontSize:12.5, color:tT.muted, fontWeight:600, padding:"14px 0", background:"#fff", borderTop:`1px solid ${tT.hairline}`}}>
          {i>=jobs.length ? "All done\u2014moving these to your tracker." : `Sit tight \u2014 sending ${Math.min(i+1,jobs.length)} of ${jobs.length}...`}
        </div>
      </div>
    </div>
  );
}

function Tracker({ mode }) {
  const [selected, setSelected] = React.useState(null);
  const [queue, setQueue] = React.useState(Q_JOBS);
  const [applying, setApplying] = React.useState(false);
  const [extraApplied, setExtraApplied] = React.useState([]);
  const byCol = React.useMemo(()=>{
    const m = {}; T_COLS.forEach(c=>m[c.key]=[]);
    T_JOBS.forEach(j=>m[j.col].push(j));
    extraApplied.forEach(j=>m.applied.unshift(j));
    return m;
  }, [extraApplied]);

  function finishApplying() {
    setExtraApplied(queue.map(j=>({ id:j.id, co:j.co, role:j.role, col:"applied", date:"Just now", emails:0,
      location:"United States \u00b7 Remote", workType:"Remote", level:"Senior", tags:["Remote","Full-time"],
      responsibilities:"Bloom submitted this application as part of a one-click batch send.", requirements:[],
      timeline:[{ label:"Bloom submitted your application", tone:"green", date:"Just now" }] })));
    setQueue([]);
    setApplying(false);
  }

  return (
    <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px"}}>
      <div style={{marginBottom:24}}>
        <div style={{fontFamily:tFD, fontWeight:700, fontSize:28, letterSpacing:"-0.025em", marginBottom:4}}>Tracker</div>
        <div style={{fontSize:13.5, color:tT.muted, fontWeight:600}}>Every application Bloom has sent, organized by where it stands.</div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:`repeat(${T_COLS.length+1}, minmax(220px, 1fr))`, gap:20, alignItems:"start"}}>
        <QueueColumn mode={mode} jobs={queue} onApplyAll={()=>setApplying(true)} onReviewNext={()=>{}}/>
        {T_COLS.map(col=>{
          const jobs = byCol[col.key];
          return (
            <div key={col.key} style={{minWidth:0}}>
              <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", paddingBottom:10,
                borderBottom:`2px solid ${col.color}`, marginBottom:14}}>
                <span style={{fontSize:11.5, fontWeight:800, letterSpacing:".07em", color:tT.ink}}>{col.label.toUpperCase()}</span>
                <span style={{fontSize:13, fontWeight:700, color:tT.muted}}>{jobs.length}</span>
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {jobs.length===0
                  ? <div style={{fontSize:13, color:tT.muted, fontWeight:600}}>No applications</div>
                  : jobs.map(j=><TCard key={j.id} job={j} onClick={()=>setSelected(j)}/>)}
              </div>
            </div>
          );
        })}
      </div>

      {selected && <TDetailPanel job={selected} onClose={()=>setSelected(null)}/>}
      {applying && <ApplyAllModal jobs={queue} onDone={finishApplying}/>}
    </div>
  );
}

Object.assign(window, { Tracker });

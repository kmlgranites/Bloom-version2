// =====================================================================
// Backdoor V1 · Post-onboarding dashboard — Pipeline
// =====================================================================
const { T:dT, FD:dFD, FB:dFB } = window;

const D_LOGO = { Stripe:"stripe.com", Vercel:"vercel.com", Ramp:"ramp.com", Notion:"notion.so", Rippling:"rippling.com", Brex:"brex.com", Deel:"deel.com", Amgen:"amgen.com", Wonder:"wonder.com", "Fidelity Investments":"fidelity.com", "OPS Consulting":"opsconsulting.com", Figma:"figma.com", Plaid:"plaid.com", Linear:"linear.app", Mercury:"mercury.com", Retool:"retool.com", Datadog:"datadoghq.com", Gusto:"gusto.com", Airtable:"airtable.com" };
function CLogo({ co, size }) {
  const [broke, setBroke] = React.useState(false);
  const domain = D_LOGO[co];
  const s = size || 26;
  if (co === "Stripe" && !broke) return (
    <img src="assets/stripe-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Ramp" && !broke) return (
    <img src="assets/ramp-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Amgen" && !broke) return (
    <img src="assets/amgen-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Wonder" && !broke) return (
    <img src="assets/wonder-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Fidelity Investments" && !broke) return (
    <img src="assets/fidelity-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Vercel" && !broke) return (
    <img src="assets/vercel-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Notion" && !broke) return (
    <img src="assets/notion-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Rippling" && !broke) return (
    <img src="assets/rippling-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Deel" && !broke) return (
    <img src="assets/deel-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (co === "Brex" && !broke) return (
    <img src="assets/brex-logo.png" onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"cover"}}/>
  );
  if (!domain || broke) return (
    <span style={{width:s, height:s, borderRadius:s>32?9:7, background:"#F1F3F4", flexShrink:0, display:"grid",
      placeItems:"center", fontSize:s*0.42, fontWeight:800, color:dT.muted}}>{co[0]}</span>
  );
  return (
    <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"contain", background:"#fff", border:`1px solid ${dT.hairline}`, boxSizing:"border-box", padding:Math.round(s*0.12)}}/>
  );
}
Object.assign(window, { CLogo, D_LOGO, TSwitch });

const D_MATCHES = [
  { id:"m1", role:"Senior Software Engineer, Platform", co:"Figma", match:92, posted:"2h ago", location:"San Francisco, CA", setting:"Hybrid", comp:"$185–230k", why:"Matches your target role and Node.js + Postgres stack" },
  { id:"m2", role:"Backend Engineer, Payments", co:"Plaid", match:90, posted:"5h ago", location:"Remote, US", setting:"Remote", comp:"$170–210k", why:"Payments experience at Groww and Cred" },
  { id:"m3", role:"Software Engineer, Infrastructure", co:"Linear", match:87, posted:"1 day ago", location:"Remote, US", setting:"Remote", comp:"$160–200k", why:"Remote, and salary meets your floor" },
  { id:"m4", role:"Senior Backend Engineer", co:"Mercury", match:85, posted:"1 day ago", location:"New York, NY", setting:"Hybrid", comp:"$180–220k", why:"Fintech backend, Kafka and event pipelines" },
  { id:"m5", role:"Software Engineer, API Platform", co:"Retool", match:82, posted:"2 days ago", location:"Remote, US", setting:"Remote", comp:"$165–205k", why:"API design and service ownership" },
  { id:"m6", role:"Backend Engineer, Data", co:"Datadog", match:79, posted:"2 days ago", location:"Boston, MA", setting:"Hybrid", comp:"$160–195k", why:"Distributed systems, Go" },
  { id:"m7", role:"Software Engineer II", co:"Gusto", match:76, posted:"3 days ago", location:"Remote, US", setting:"Remote", comp:"$150–185k", why:"Payroll/finance domain overlap" },
  { id:"m8", role:"Senior Engineer, Integrations", co:"Airtable", match:74, posted:"4 days ago", location:"San Francisco, CA", setting:"Onsite", comp:"$175–215k", why:"Integrations and API work" },
];
const D_FREE_LEFT = 5;
const D_SKIP_REASONS = ["Not my level","Wrong location","Salary too low","Not interested in company","Role isn't a fit"];

const D_BROWSE_BG = ["#FBE7E6","#E3F1FB","#FBF3D9"];
const D_BROWSE = [
  { id:"b1", role:"Specialist IS Engineer", co:"Amgen", match:75, posted:"5 days ago", location:"US - California - Thousand Oaks", tags:[] },
  { id:"b2", role:"Staff Engineer", co:"Wonder", match:75, posted:"6 days ago", location:"New York, NY", tags:[] },
  { id:"b3", role:"Summer 2027 Undergraduate Internship - Software", co:"Fidelity Investments", match:75, posted:"a day ago", location:"Texas", tags:["Java","Python","Javascript","Html"] },
  { id:"b4", role:"Backend Engineer", co:"Stripe", match:77, posted:"6 days ago", location:"Chaska, MN", tags:["Go","Postgres"] },
  { id:"b5", role:"Senior Software Engineer", co:"Vercel", match:75, posted:"6 days ago", location:"San Francisco, CA", tags:["React","Node"] },
  { id:"b6", role:"Software Engineer", co:"Ramp", match:75, posted:"5 days ago", location:"New York, NY", tags:["TypeScript"] },
];

const D_JOBS = [
  { co:"Stripe", role:"Backend Engineer — Payments Infra", status:"Needs you", statusTone:"amber",
    resume:"Vinodh_Resume_2026.pdf", applied:"—", location:"SF / Remote", comp:"$190–230k", matchPct:88, posted:"3h",
    about:"Stripe is hiring a Backend Engineer for Payments Infra to own core money-movement services. You'll work on the systems that process transaction volume for millions of businesses, partnering closely with risk and compliance on correctness-critical code.",
    answers:[
      { q:"Cover letter lead", a:"Hey Stripe team — I've spent the last 4 years building payments infra at Groww and Cred, including an idempotent retry system that cut duplicate-charge tickets to near zero. I'd love to bring that rigor to Stripe's core ledger...", status:"drafted" },
      { q:"Walk us through a system you've owned end to end", suggestion:"Groww payouts service — 40k+ daily transactions, event-driven migration", status:"needs" },
      { q:"Years of backend experience", a:"6 years", status:"drafted" },
      { q:"Expected salary", a:"$190,000–230,000", status:"drafted" },
      { q:"Are you legally authorized to work in the United States?", a:"Yes — visa sponsorship required", status:"drafted" },
      { q:"Stripe's custom question — Tell us about a time you shipped under a tight deadline (200 words)", suggestion:"Payments reconciliation script at Razorpay — cut manual finance review time by 30% in 3 weeks", status:"needs" },
    ] },
  { co:"Vercel", role:"Software Engineer, Frontend Platform", status:"Submitted", statusTone:"green",
    resume:"Vinodh_Resume_2026.pdf", applied:"5h ago", location:"Remote, US", comp:"$170–210k", matchPct:82, posted:"1d",
    about:"Vercel builds the platform behind Next.js. This role sits on Frontend Platform, shipping the primitives that power every deploy preview and edge render across the product.",
    answers:[
      { q:"Cover letter lead", a:"Hey Vercel team — I've been building on Next.js since v9 and shipped an internal billing dashboard at Cred entirely on the App Router. I'd love to work on the platform itself...", status:"sent" },
      { q:"Years of frontend experience", a:"5 years", status:"sent" },
      { q:"Expected salary", a:"$170,000–210,000", status:"sent" },
      { q:"Are you legally authorized to work in the United States?", a:"Yes — visa sponsorship required", status:"sent" },
    ] },
  { co:"Ramp", role:"Full-Stack Engineer (Growth)", status:"Needs you", statusTone:"amber",
    resume:"Vinodh_Resume_2026.pdf", applied:"—", location:"NYC / Remote", comp:"$165–200k", matchPct:79, posted:"6h",
    about:"Ramp is building the finance stack for growing companies. As a Full-Stack Engineer on Growth, you'll own features end to end across onboarding and card-issuing flows, working closely with design and data to move activation metrics.",
    answers:[
      { q:"Cover letter lead", a:"Hey Ramp team — I've owned billing APIs end to end at Cred, from schema to on-call, and I like working close to the metrics a growth team cares about...", status:"drafted" },
      { q:"Walk us through a recent project you led", suggestion:"Groww payouts migration — cut settlement latency 60%", status:"needs" },
      { q:"Years of full-stack experience", a:"6 years", status:"drafted" },
      { q:"Expected salary", a:"$165,000–200,000", status:"drafted" },
      { q:"Notice period at current role", a:"4 weeks", status:"drafted" },
      { q:"Are you legally authorized to work in the United States?", a:"Yes — visa sponsorship required", status:"drafted" },
    ] },
  { co:"Notion", role:"Software Engineer, Search", status:"Submitted", statusTone:"green",
    resume:"Vinodh_Resume_2026.pdf", applied:"1d ago", location:"Remote, US", comp:"$175–215k", matchPct:75, posted:"2d",
    about:"Notion's Search team makes every workspace instantly findable. You'll work on ranking, indexing, and query understanding for a corpus that spans billions of blocks, balancing relevance with strict latency budgets.",
    answers:[
      { q:"Cover letter lead", a:"Hey Notion team — search and ranking problems are exactly what I geek out on. At Groww I optimized query latency for a reconciliation engine handling millions of rows daily...", status:"sent" },
      { q:"Years of backend experience", a:"6 years", status:"sent" },
      { q:"Expected salary", a:"$175,000–215,000", status:"sent" },
    ] },
  { co:"Rippling", role:"Backend Engineer, Platform", status:"Submitting", statusTone:"blue",
    resume:"Vinodh_Resume_2026.pdf", applied:"—", location:"Remote, US", comp:"$180–220k", matchPct:81, posted:"4h",
    about:"Rippling's Platform team owns the primitives every product team builds on — auth, permissions, and the employee data graph. You'll design APIs used by 50+ internal teams.",
    answers:[
      { q:"Cover letter lead", a:"Hey Rippling team — I've spent my career owning platform-level services other teams depend on...", status:"sent" },
      { q:"Years of backend experience", a:"6 years", status:"sent" },
    ] },
  { co:"Brex", role:"Senior Backend Engineer", status:"Failed", statusTone:"red",
    resume:"Vinodh_Resume_2026.pdf", applied:"—", location:"Remote, US", comp:"$200–240k", matchPct:77, posted:"8h",
    about:"Brex is building the finance platform for ambitious companies. As a Senior Backend Engineer, you'd own core ledger and reconciliation services processing billions in transaction volume.",
    answers:[
      { q:"Cover letter lead", a:"Hey Brex team — ledger correctness at scale is what I've spent 6 years on...", status:"drafted" },
    ] },
  { co:"Deel", role:"Software Engineer, Payroll", status:"Skipped", statusTone:"grey",
    resume:"Vinodh_Resume_2026.pdf", applied:"—", location:"Remote, Global", comp:"$150–185k", matchPct:64, posted:"1d",
    about:"Deel's Payroll team keeps compliant pay running across 150+ countries. You'll build the services that calculate, validate, and reconcile payroll runs at scale.",
    answers:[
      { q:"Cover letter lead", a:"Hey Deel team — global payroll compliance is a hard, interesting problem...", status:"drafted" },
    ] },
];

const D_TONE = {
  green:{fg:"#14663F", bg:"#DFF6E8"}, amber:{fg:"#8A6D00", bg:"#FBEFCB"},
  red:{fg:"#B3261E", bg:"#FBE3E1"}, teal:{fg:"#0B6E6E", bg:"#DDF5F5"}, blue:{fg:"#0B5FB3", bg:"#E1EFFB"}, grey:{fg:"#7B8B8E", bg:"#F1F3F4"},
};

const D_TABS = ["All","Needs you","Submitting","Submitted","Failed"];

function LiveTicker({ steps }) {
  const [i, setI] = React.useState(0);
  React.useEffect(()=>{
    const t = setInterval(()=>setI(p=>(p+1)%steps.length), 2400);
    return ()=>clearInterval(t);
  }, [steps.length]);
  return (
    <span style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:11.5, fontWeight:600, fontStyle:"italic", color:"#0BB3B3", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:"100%"}}>
      <span style={{width:6, height:6, borderRadius:"50%", background:"#0BB3B3", flexShrink:0, animation:"bdpulse 1.2s ease-in-out infinite"}}/>
      <span style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{steps[i]}</span>
    </span>
  );
}
const D_INFLIGHT_STEPS = ['Drafting answer to “Why Atlassian?”', 'Uploading résumé and cover letter', 'Reviewing your application', 'Submitting and confirming'];

function DSpark({ data, color }) {
  const w=180, h=40, max=Math.max(...data,1), min=Math.min(...data);
  const pts = data.map((v,i)=>`${(i/(data.length-1))*w},${h - ((v-min)/((max-min)||1))*h*0.8 - 4}`);
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{display:"block"}}>
      <polyline points={pts.join(" ")} fill="none" stroke={color} strokeWidth="1.75"/>
      <circle cx={pts[pts.length-1].split(",")[0]} cy={pts[pts.length-1].split(",")[1]} r="3" fill={color}/>
    </svg>
  );
}

function DStat({ label, value, delta, data, foot, color }) {
  return (
    <div style={{flex:1, minWidth:170, border:`1px solid ${dT.hairline}`, borderRadius:14, background:"#fff", padding:"16px 18px"}}>
      <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".08em", marginBottom:9}}>{label}</div>
      <div style={{display:"flex", alignItems:"baseline", gap:8, marginBottom:9}}>
        <span style={{fontFamily:dFD, fontWeight:700, fontSize:26, letterSpacing:"-0.02em", color:dT.ink}}>{value}</span>
        <span style={{fontSize:11.5, fontWeight:600, color:dT.muted}}>{delta}</span>
      </div>
      <DSpark data={data} color={color}/>
      <div style={{fontSize:11.5, fontWeight:600, color:dT.muted, marginTop:6}}>{foot}</div>
    </div>
  );
}

function DNav({ icon, label, badge, active, onClick }) {
  return (
    <button onClick={onClick} style={{display:"flex", alignItems:"center", gap:11, padding:"9px 10px", borderRadius:8,
      background: active ? "#F1EFE9" : "transparent", border:"none", fontFamily:dFB, fontSize:14.5, fontWeight:500,
      color: active ? dT.ink : "#9AA3A5", cursor:"pointer", width:"100%", textAlign:"left"}}>
      <span className={active ? "bd-nav-on" : ""} style={{display:"flex", flexShrink:0, color: active ? dT.ink : "#9AA3A5"}}>{icon}</span>
      {active && <style>{`.bd-nav-on svg>*{fill:currentColor}.bd-nav-on svg>path:nth-child(3),.bd-nav-on svg>circle:last-child:not(:first-child){fill:#F1EFE9}`}</style>}
      <span style={{flex:1}}>{label}</span>
      {badge && <span style={{fontSize:11.5, fontWeight:800, color:"#6B5200", background:"#FBEFCB", borderRadius:999,
        minWidth:22, textAlign:"center", padding:"2px 7px"}}>{badge}</span>}
    </button>
  );
}

const DIconPipeline = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8 12 3l8 5"/><path d="M4 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M9 19v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"/></svg>
);
const DIconAuto = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>
);
const DIconTracker = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
);
const DIconProfile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-3.6 4-5.6 7-5.6s6 2 7 5.6"/></svg>
);
const DIconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
);

function DSubNav({ label, icon, active, tone, onClick }) {
  return (
    <button onClick={onClick} style={{display:"flex", alignItems:"center", gap:10, padding:"10px 14px", borderRadius:9,
      border:"none", background: active ? dT.ink : "transparent", fontFamily:dFB, fontSize:14, fontWeight:600,
      color: active ? "#fff" : (tone || dT.ink), cursor:"pointer", width:"100%", textAlign:"left"}}>
      <span style={{display:"inline-flex", flexShrink:0}}>{icon}</span>{label}
    </button>
  );
}
const DIconAccount = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const DIconSparkle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
);
const DIconGift = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>
);
const DIconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);
const DIconPower = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
);

const DIconBrowse = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
);

function CheckDropdown({ label, options }) {
  const [open, setOpen] = React.useState(false);
  const [sel, setSel] = React.useState([]);
  const ref = React.useRef(null);
  React.useEffect(()=>{
    function onDoc(e){ if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", onDoc);
    return ()=>document.removeEventListener("mousedown", onDoc);
  }, []);
  function tog(v){ setSel(s=> s.includes(v) ? s.filter(x=>x!==v) : s.concat([v])); }
  return (
    <div ref={ref} style={{position:"relative"}}>
      <button onClick={()=>setOpen(o=>!o)} style={{padding:"7px 13px", borderRadius:999, background:"#fff", color:dT.ink,
        border:`1px solid ${dT.hairline}`, fontFamily:dFB, fontSize:12, fontWeight:600, cursor:"pointer", display:"flex",
        alignItems:"center", gap:5, whiteSpace:"nowrap"}}>{label}{sel.length ? ` (${sel.length})` : ""}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{transform: open ? "rotate(180deg)" : "none", transition:"transform .12s"}}><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{position:"absolute", top:"calc(100% + 6px)", left:0, background:"#fff", border:`1px solid ${dT.hairline}`,
          borderRadius:14, boxShadow:"0 12px 28px rgba(2,47,54,.14)", padding:10, minWidth:170, zIndex:20}}>
          {options.map(v=>(
            <label key={v} onClick={()=>tog(v)} style={{display:"flex", alignItems:"center", gap:10, padding:"8px 6px",
              borderRadius:8, cursor:"pointer", fontFamily:dFB, fontSize:13.5, color:dT.ink}}>
              <span style={{width:18, height:18, borderRadius:5, border:`1.5px solid ${sel.includes(v) ? dT.ink : dT.hairline}`,
                background: sel.includes(v) ? dT.ink : "#fff", flexShrink:0, display:"grid", placeItems:"center"}}>
                {sel.includes(v) && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
              </span>
              {v}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function JobDetailPanel({ job, onClose }) {
  return (
    <React.Fragment>
      <div onClick={onClose} style={{position:"fixed", inset:0, background:"rgba(2,47,54,.35)", zIndex:40}}/>
      <div style={{position:"fixed", top:0, right:0, bottom:0, width:520, maxWidth:"92vw", background:"#fff", zIndex:41,
        display:"flex", flexDirection:"column", boxShadow:"-16px 0 40px rgba(2,47,54,.18)"}}>
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 24px"}}>
          <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:8}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:24, letterSpacing:"-0.02em", color:dT.ink, lineHeight:1.2}}>{job.role}</div>
            <button onClick={onClose} style={{background:"transparent", border:"none", cursor:"pointer", color:dT.muted, flexShrink:0, padding:4}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:20}}>
            <CLogo co={job.co} size={20}/>
            <span style={{fontSize:14, color:dT.muted, fontWeight:600}}>{job.co}</span>
          </div>
          <div style={{borderTop:`1px solid ${dT.hairline}`, marginBottom:22}}/>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:26}}>
            <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>} label={job.location}/>
            <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>} label={job.salary || "Not disclosed"}/>
            <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>} label={job.type || "Full time"}/>
            <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-6 9 6v13"/><path d="M9 21v-8h6v8"/></svg>} label={job.workplace || "Onsite"}/>
          </div>
          {job.tags && job.tags.length > 0 && (
            <div style={{marginBottom:26}}>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:15, color:dT.ink, marginBottom:10}}>Skills</div>
              <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                {job.tags.map(t=><span key={t} style={{fontSize:13, fontWeight:600, color:dT.ink, background:"rgba(2,47,54,.06)",
                  borderRadius:999, padding:"6px 13px"}}>{t}</span>)}
              </div>
            </div>
          )}
          <div>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:15, color:dT.ink, marginBottom:10}}>Description</div>
            <div style={{fontSize:14, color:"#4B5A5E", lineHeight:1.65, fontWeight:500}}>
              {job.role} at {job.co}. Location: {job.location}. Bloom found this role a {job.match}% match to your profile based on your résumé, experience, and preferences — apply to have it tailored and submitted for you.
            </div>
          </div>
        </div>
        <div style={{flexShrink:0, borderTop:`1px solid ${dT.hairline}`, padding:"16px 24px", display:"flex", alignItems:"center",
          justifyContent:"space-between", gap:14, background:"#fff"}}>
          <div style={{display:"flex", alignItems:"center", gap:16}}>
            <button style={{background:"transparent", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:6,
              fontSize:13, fontWeight:600, color:dT.muted}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
              View original
            </button>
            <button style={{background:"transparent", border:"none", cursor:"pointer", fontSize:13, fontWeight:600, color:dT.muted}}>Not interested</button>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:10}}>
            <button style={{width:38, height:38, borderRadius:10, background:"#fff", border:`1px solid ${dT.hairline}`, cursor:"pointer",
              display:"flex", alignItems:"center", justifyContent:"center", color:dT.ink}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
            </button>
            <div style={{display:"flex", alignItems:"center", borderRadius:999, background:dT.ink, overflow:"hidden"}}>
              <button style={{padding:"11px 20px", background:"transparent", color:"#fff", border:"none",
                fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Apply</button>
              <button style={{padding:"11px 12px", background:"transparent", color:"#fff", border:"none", borderLeft:"1px solid rgba(255,255,255,.25)",
                cursor:"pointer", display:"flex", alignItems:"center"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
function MetaRow({ icon, label }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:10, color:dT.muted}}>
      <span style={{flexShrink:0, display:"flex"}}>{icon}</span>
      <span style={{fontSize:13.5, fontWeight:600, color:dT.ink}}>{label}</span>
    </div>
  );
}

function DField({ label, value, action, last }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16,
      padding:"14px 0", borderBottom: last ? "none" : `1px solid ${dT.hairline}`}}>
      <div>
        <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:5}}>{label}</div>
        <div style={{fontSize:14, fontWeight:700, color:dT.ink}}>{value}</div>
      </div>
      <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:dT.cyanInk, cursor:"pointer", flexShrink:0}}>{action}</button>
    </div>
  );
}

function DChip({ children, onRemove }) {
  return <span style={{fontSize:12.5, fontWeight:700, color:dT.cyanInk, background:"#E3F7F7", borderRadius:999, padding:"6px 8px 6px 13px", display:"inline-flex", alignItems:"center", gap:6}}>{children}
    {onRemove && <button onClick={onRemove} style={{border:"none", background:"none", cursor:"pointer", color:dT.cyanInk, fontSize:14, lineHeight:1, padding:0, display:"flex"}}>×</button>}
  </span>;
}

function DFieldLabel({ children, hint }) {
  return (
    <div style={{marginBottom:8}}>
      <div style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>{children}</div>
      {hint && <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:3}}>{hint}</div>}
    </div>
  );
}

function DTagInput({ values, onChange, suggestions, placeholder }) {
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const add = (v) => { v = v.trim(); if (v && !values.includes(v)) onChange([...values, v]); setInput(""); setOpen(false); };
  const remove = (v) => onChange(values.filter(x=>x!==v));
  const filtered = (suggestions||[]).filter(s=>!values.includes(s) && s.toLowerCase().includes(input.toLowerCase()));
  return (
    <div style={{position:"relative"}}>
      <div style={{display:"flex", flexWrap:"wrap", gap:7, padding:"9px 10px", borderRadius:9, border:`1.5px solid ${dT.hairline}`}}>
        {values.map(v=><DChip key={v} onRemove={()=>remove(v)}>{v}</DChip>)}
        <input value={input} onChange={e=>{setInput(e.target.value); setOpen(true);}} onFocus={()=>setOpen(true)}
          onBlur={()=>setTimeout(()=>setOpen(false),120)}
          onKeyDown={e=>{ if(e.key==="Enter"){e.preventDefault(); add(input);} }}
          placeholder={values.length?"":placeholder} style={{flex:1, minWidth:80, border:"none", outline:"none", fontFamily:dFB,
          fontSize:13.5, color:dT.ink, background:"transparent"}}/>
      </div>
      {open && filtered.length>0 && (
        <div style={{position:"absolute", top:"100%", left:0, right:0, marginTop:4, background:"#fff", border:`1px solid ${dT.hairline}`,
          borderRadius:9, boxShadow:"0 8px 20px rgba(2,47,54,.12)", zIndex:5, maxHeight:160, overflow:"auto"}}>
          {filtered.map(s=>(
            <div key={s} onMouseDown={()=>add(s)} style={{padding:"9px 12px", fontSize:13.5, fontWeight:600, color:dT.ink, cursor:"pointer"}}>{s}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function DPillOptions({ values, onToggle, options, multi }) {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
      {options.map(o=>{
        const on = values.includes(o);
        return (
          <button key={o} type="button" onClick={()=>onToggle(o)} style={{padding:"8px 15px", borderRadius:999, cursor:"pointer",
            border:`1.5px solid ${on ? dT.ink : dT.hairline}`, background: on ? dT.ink : "#fff", color: on ? "#fff" : dT.ink,
            fontFamily:dFB, fontSize:13, fontWeight:700}}>{o}</button>
        );
      })}
    </div>
  );
}

function DSalarySlider({ value, onChange, min, max, step }) {
  min = min||60; max = max||250; step = step||10;
  return (
    <div>
      <div style={{fontFamily:dFD, fontWeight:700, fontSize:20, color:dT.ink, marginBottom:10}}>${value}k{value>=max?"+":""} minimum</div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}
        style={{width:"100%", accentColor:dT.ink}}/>
      <div style={{display:"flex", justifyContent:"space-between", fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:4}}>
        <span>${min}k</span><span>${max}k+</span>
      </div>
    </div>
  );
}

function DToggleRow({ label, on, onToggle }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0",
      borderBottom:`1px solid ${dT.hairline}`}}>
      <span style={{fontSize:13.5, fontWeight:600, color:dT.ink}}>{label}</span>
      <button onClick={onToggle} style={{width:34, height:19, borderRadius:999, cursor:"pointer", border:"none",
        background: on ? dT.ink : dT.hairline, position:"relative", flexShrink:0}}>
        <span style={{position:"absolute", top:2, left: on ? 17 : 2, width:15, height:15, borderRadius:"50%", background:"#fff", transition:"left .15s"}}/>
      </button>
    </div>
  );
}

function JobTitleChips({ value, onChange }) {
  const [input, setInput] = React.useState("");
  function add(){ const v=input.trim(); if(v && !value.includes(v)){ onChange([...value, v]); } setInput(""); }
  return (
    <div style={{border:`1.5px solid ${dT.hairline}`, borderRadius:12, padding:"10px 12px", display:"flex", flexWrap:"wrap", gap:8, alignItems:"center"}}>
      {value.map(t=>(
        <span key={t} style={{display:"flex", alignItems:"center", gap:6, background:"#F1EFE9", color:dT.ink, borderRadius:999,
          padding:"6px 6px 6px 12px", fontSize:13, fontWeight:600}}>{t}
          <button onClick={()=>onChange(value.filter(x=>x!==t))} style={{border:"none", background:"transparent", cursor:"pointer",
            color:dT.muted, fontSize:14, lineHeight:1, padding:2}}>✕</button>
        </span>
      ))}
      <input value={input} onChange={e=>setInput(e.target.value)}
        onKeyDown={e=>{ if(e.key==="Enter"){ e.preventDefault(); add(); } }}
        placeholder="Add job title" style={{flex:1, minWidth:120, border:"none", outline:"none", fontFamily:dFB, fontSize:13.5, padding:"6px 2px"}}/>
    </div>
  );
}

function QuickSettings({ st, set }) {
  const isAuto = st.mode === "auto";
  const [cc, setCc] = React.useState(false);
  const [titles, setTitles] = React.useState(st.jobTitles || ["Software Engineer", "Frontend Engineer"]);
  return (
    <div style={{display:"flex", flexDirection:"column", gap:28, maxWidth:760}}>
      <div>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:18, marginBottom:14}}>Auto Apply Settings</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12}}>
          {[
            {k:"review", icon:"✋", title:"Review all matches", desc:"Applications are submitted only after you manually approve them."},
            {k:"hybrid", icon:"🎯", title:"Hybrid Apply", desc:"Auto-applies to your best matches; others wait for your review."},
            {k:"auto", icon:"🚀", title:"Auto-Apply", desc:"Applications are submitted instantly without your input."},
          ].map(o=>(
            <button key={o.k} onClick={()=>set({mode:o.k})} style={{textAlign:"left", padding:"16px", borderRadius:12, cursor:"pointer",
              border:`1.5px solid ${st.mode===o.k ? dT.ink : dT.hairline}`, background: st.mode===o.k ? "#FFFCF6" : "#fff"}}>
              <div style={{fontSize:18, marginBottom:8}}>{o.icon}</div>
              <div style={{fontWeight:700, fontSize:14, marginBottom:4}}>{o.title}</div>
              <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, lineHeight:1.4}}>{o.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:18, marginBottom:14}}>Quick Edit</div>
        <div style={{display:"flex", flexDirection:"column", gap:20}}>
          <div>
            <div style={{fontSize:12.5, fontWeight:700, color:dT.ink, marginBottom:8}}>Job title(s)</div>
            <JobTitleChips value={titles} onChange={setTitles}/>
          </div>
          <div>
            <div style={{fontSize:12.5, fontWeight:700, color:dT.ink, marginBottom:8}}>Your résumé</div>
            <div style={{display:"flex", alignItems:"center", gap:10, border:`1px solid ${dT.hairline}`, borderRadius:12, padding:"11px 14px"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="1.8"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/></svg>
              <span style={{fontSize:13.5, fontWeight:600, flex:1}}>Your original résumé</span>
              <span style={{fontSize:11.5, fontWeight:700, color:"#1F8A5B", background:"#E5F4EC", borderRadius:999, padding:"3px 10px"}}>Used in applications</span>
            </div>
          </div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <DToggleRow label="CC me on all emails" on={cc} onToggle={()=>setCc(v=>!v)}/>
            <button style={{padding:"10px 22px", borderRadius:999, background:dT.ink, color:"#fff", border:"none",
              fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Save settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JPField({ label, children }) {
  return (
    <div style={{padding:"18px 0", borderBottom:`1px solid ${dT.hairline}`, display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, alignItems:"start"}}>
      <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, paddingTop:10}}>{label}</div>
      <div>{children}</div>
    </div>
  );
}
function JPSelect({ value }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", border:`1.5px solid ${dT.hairline}`, borderRadius:10,
      padding:"11px 14px", fontSize:13.5, fontWeight:600, cursor:"pointer"}}>
      {value}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  );
}
function JobPreferencesTab({ st, set }) {
  const [titles] = React.useState(st.jobTitles || ["Software Engineer", "Frontend Engineer"]);
  return (
    <div style={{maxWidth:760}}>
      <div style={{background:"#F1EFE9", borderRadius:12, padding:"14px 16px", fontSize:12.5, color:dT.muted, fontWeight:600,
        lineHeight:1.5, marginBottom:8}}>
        These settings help Bloom find the right jobs for you and complete applications on your behalf.
      </div>
      <JPField label="Current employment status"><JPSelect value="Employed but open to new roles"/></JPField>
      <JPField label="Desired job title(s)"><JobTitleChips value={titles} onChange={()=>{}}/></JPField>
      <JPField label="Target experience level"><JPSelect value={st.level ? st.level.join(", ") : "Senior"}/></JPField>
      <JPField label="Minimum preferred salary">
        <div style={{border:`1.5px solid ${dT.hairline}`, borderRadius:10, padding:"11px 14px", display:"flex", alignItems:"center", gap:6}}>
          <span style={{color:dT.muted, fontWeight:700}}>$</span>
          <span style={{fontSize:13.5, fontWeight:600}}>140,000</span>
        </div>
      </JPField>
      <JPField label="Work type"><JPSelect value={st.types ? st.types.join(", ") : "Fulltime"}/></JPField>
      <JPField label="Where you'd like to work">
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          <JPSelect value={(st.markets && st.markets.length) ? st.markets.join(", ") : "United States"}/>
          <div style={{display:"flex", gap:8}}>
            <span style={{padding:"7px 14px", borderRadius:999, background:"#F1EFE9", color:dT.ink, fontSize:12.5, fontWeight:700}}>Full remote</span>
            <span style={{padding:"7px 14px", borderRadius:999, fontSize:12.5, fontWeight:700, color:dT.muted}}>On-site / Hybrid</span>
          </div>
        </div>
      </JPField>
      <JPField label="Work authorization status">
        <div style={{border:`1.5px solid ${dT.hairline}`, borderRadius:10, padding:"11px 14px", fontSize:13.5, fontWeight:600}}>
          {st.citizenship ? st.citizenship.join(", ") : "US Citizen"}
        </div>
      </JPField>
    </div>
  );
}

function PrefRow({ label, value, sub }) {
  return (
    <div style={{padding:"14px 0", borderBottom:`1px solid ${dT.hairline}`, display:"flex", alignItems:"baseline",
      justifyContent:"space-between", gap:16}}>
      <span style={{fontSize:12, fontWeight:700, color:dT.muted, letterSpacing:".03em", flexShrink:0, width:150}}>{label}</span>
      <span style={{fontSize:14.5, fontWeight:700, color:dT.ink, textAlign:"right"}}>{value}{sub && <span style={{display:"block", fontSize:12.5, fontWeight:600, color:dT.muted, marginTop:2}}>{sub}</span>}</span>
    </div>
  );
}

const T_QUALITY = [
  { k:"Excellent", min:90, week:4, desc:"Only near-perfect fits. Very few, very sharp applications." },
  { k:"Strong", min:80, week:12, desc:"Confidently on-target matches. A solid, balanced net." },
  { k:"Good", min:70, week:26, desc:"Broader reach. Some roles will be a partial fit." },
  { k:"Stretch", min:60, week:45, desc:"Maximum volume, including reach roles." },
];
function TLabel({ children, right }) {
  return (
    <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", gap:12, marginBottom:6}}>
      <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".09em"}}>{children}</div>{right}
    </div>
  );
}
function TSwitch({ on, onToggle, label }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} onClick={onToggle} style={{width:40, height:22, borderRadius:999, cursor:"pointer", border:"none",
      background: on ? dT.ink : "#D5DBDC", position:"relative", flexShrink:0}}>
      <span style={{position:"absolute", top:3, left: on ? 21 : 3, width:16, height:16, borderRadius:"50%", background:"#fff", transition:"left .15s"}}/>
    </button>
  );
}
function TInfoTip({ text, title, body }) {
  const [show, setShow] = React.useState(false);
  const id = React.useId ? React.useId() : "tinfo";
  return (
    <span style={{position:"relative", display:"inline-flex", alignItems:"center", gap:6}}
      onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      <span style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>{text}</span>
      <button aria-label={title} aria-describedby={show ? id : undefined} onFocus={()=>setShow(true)} onBlur={()=>setShow(false)}
        onClick={()=>setShow(s=>!s)} style={{width:16, height:16, borderRadius:"50%", border:`1.5px solid ${dT.muted}`, background:"none", color:dT.muted,
        fontFamily:dFB, fontSize:10, fontWeight:800, lineHeight:1, cursor:"help", display:"grid", placeItems:"center", padding:0}}>i</button>
      {show && (
        <span role="tooltip" id={id} style={{position:"absolute", bottom:"calc(100% + 10px)", right:-8, width:290, zIndex:40, background:dT.ink, color:"#fff",
          borderRadius:12, padding:"12px 14px", boxShadow:"0 12px 30px rgba(2,47,54,.22)", textAlign:"left"}}>
          <span style={{display:"block", fontSize:13, fontWeight:700, marginBottom:5}}>{title}</span>
          <span style={{display:"block", fontSize:12, fontWeight:500, lineHeight:1.5, color:"rgba(255,255,255,.8)"}}>{body}</span>
          <span style={{position:"absolute", bottom:-5, right:16, width:10, height:10, background:dT.ink, transform:"rotate(45deg)"}}/>
        </span>
      )}
    </span>
  );
}

function TFilterChip({ def, value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    const h = e=>{ if(box.current && !box.current.contains(e.target)) setOpen(false); };
    const k = e=>{ if(e.key==="Escape") setOpen(false); };
    document.addEventListener("mousedown", h); document.addEventListener("keydown", k);
    return ()=>{ document.removeEventListener("mousedown", h); document.removeEventListener("keydown", k); };
  }, []);
  const n = def.single ? (value ? 1 : 0) : value.length;
  const on = n>0;
  const toggle = o => def.single ? onChange(value===o ? null : o) : onChange(value.includes(o) ? value.filter(x=>x!==o) : [...value, o]);
  const label = def.single && value ? value : def.label;
  return (
    <div ref={box} style={{position:"relative"}}>
      <div style={{display:"inline-flex", alignItems:"center", borderRadius:999, border:`1.5px solid ${on ? dT.ink : dT.hairline}`,
        background: on ? dT.ink : "#fff", color: on ? "#fff" : dT.ink}}>
        <button onClick={()=>setOpen(o=>!o)} aria-expanded={open} aria-haspopup="listbox" style={{display:"flex", alignItems:"center", gap:7,
          padding: on ? "7px 4px 7px 14px" : "7px 12px 7px 14px", border:"none", background:"none", color:"inherit", cursor:"pointer", fontFamily:dFB, fontSize:13, fontWeight:600, whiteSpace:"nowrap"}}>
          {def.icon==="pin" && <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>}
          {label}
          {on && !def.single && <span style={{fontSize:11, fontWeight:800, background:"rgba(255,255,255,.18)", borderRadius:5, padding:"1px 6px"}}>{n}</span>}
          {!on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
            style={{transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><path d="m6 9 6 6 6-6"/></svg>}
        </button>
        {on && <button onClick={()=>onChange(def.single ? null : [])} aria-label={`Clear ${def.label}`} style={{border:"none", background:"none", color:"rgba(255,255,255,.8)",
          cursor:"pointer", fontSize:15, lineHeight:1, padding:"0 10px 0 6px"}}>×</button>}
      </div>
      {open && (
        <div role="listbox" aria-multiselectable={!def.single} style={{position:"absolute", top:"calc(100% + 6px)", left:0, zIndex:30, minWidth:220, maxHeight:280, overflow:"auto",
          background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:12, boxShadow:"0 12px 30px rgba(2,47,54,.14)", padding:6}}>
          {def.options.map(o=>{
            const sel = def.single ? value===o : value.includes(o);
            return (
              <button key={o} role="option" aria-selected={sel} onClick={()=>{ toggle(o); if(def.single) setOpen(false); }}
                style={{width:"100%", display:"flex", alignItems:"center", gap:11, padding:"10px 10px", borderRadius:8, border:"none", cursor:"pointer",
                background: sel ? "#F1F5F4" : "transparent", fontFamily:dFB, fontSize:13.5, fontWeight:500, color:dT.ink, textAlign:"left"}}
                onMouseEnter={e=>{ if(!sel) e.currentTarget.style.background="#F7F8F8"; }} onMouseLeave={e=>{ e.currentTarget.style.background = sel ? "#F1F5F4" : "transparent"; }}>
                <span style={{width:18, height:18, borderRadius: def.single ? "50%" : 5, flexShrink:0, border:`1.5px solid ${sel ? dT.ink : "#C9CED1"}`,
                  background: sel && !def.single ? dT.ink : "#fff", display:"grid", placeItems:"center"}}>
                  {sel && (def.single
                    ? <span style={{width:8, height:8, borderRadius:"50%", background:dT.ink}}/>
                    : <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>)}
                </span>
                {o}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TargetingCard({ st, set, prefs, setPrefs, onEditFilters }) {
  const [t, setT] = React.useState({ profile:"Default", laneOn:true, open:true, sponsors:false, remoteToo:true, remoteCountry:"United States",
    include:"", exclude:"", matchIn:"Title + description", quality:"Strong", cap:10, notes:"",
    currency:"USD", period:"year", includeNoPay:true, askQuestions:false, askEssay:true,
    f:{ location:[], jobType:[], workplace:[], role:[], employment:[], degree:[], maxExp:null } });
  const uf = (k,v) => setT(x=>({...x, f:{...x.f, [k]:v}}));
  const u = p => setT(x=>({...x, ...p}));
  const q = T_QUALITY.find(x=>x.k===t.quality);
  const FILTERS = [
    { k:"location", label:"Location", icon:"pin", options:["United States","Canada"] },
    { k:"jobType", label:"Job type", options:["Internship","Entry Level","Mid Level","Experienced"] },
    { k:"workplace", label:"Workplace", options:["Remote","Hybrid","Onsite"] },
    { k:"role", label:"Role", options:["Software Engineer","Frontend Engineer","Backend Engineer","Full-Stack Engineer","Mobile Engineer","DevOps / SRE","Data Engineer","ML Engineer"] },
    { k:"employment", label:"Employment", options:["Full-time","Part-time","Contract"] },
    { k:"degree", label:"Degree", options:["Bachelor's Degree","Master's Degree","Doctorate (PhD)"] },
    { k:"maxExp", label:"Max experience", single:true, options:["No experience required","Up to 1 year","Up to 2 years","Up to 3 years","Up to 5 years","Up to 7 years","Up to 10 years"] },
  ];
  const isSet = fl => fl.single ? !!t.f[fl.k] : t.f[fl.k].length>0;
  const active = FILTERS.filter(isSet).length + (t.sponsors ? 1 : 0) + (prefs.salaryMin>0 ? 1 : 0);
  const underline = {width:"100%", padding:"8px 0", border:"none", borderBottom:`1.5px solid ${dT.hairline}`, outline:"none", fontFamily:dFB,
    fontSize:14, fontWeight:600, color:dT.ink, background:"transparent", boxSizing:"border-box"};
  const sel = {padding:"8px 32px 8px 12px", borderRadius:10, border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13.5, fontWeight:600,
    color:dT.ink, background:"#fff", outline:"none", cursor:"pointer"};
  const sect = {padding:"20px 0", borderTop:`1px solid ${dT.hairline}`};
  const help = {fontSize:12.5, color:dT.muted, fontWeight:500, lineHeight:1.55};
  const review = st.mode !== "auto";
  return (
    <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"24px 28px 8px"}}>
      <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:4}}>Auto-apply targeting</div>
      <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:18}}>Fine-tune which jobs Bloom applies to, and how many.</div>

      <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", gap:16, flexWrap:"wrap", paddingBottom:18}}>
        <div>
          <TLabel>RÉSUMÉ PROFILE</TLabel>
          <select value={t.profile} onChange={e=>u({profile:e.target.value})} style={sel}>
            <option value="Default">Default (default)</option>
          </select>
        </div>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <TInfoTip text={t.laneOn ? `~${q.week} matches this week` : "Off for this profile"}
            title="Jobs matched in the last 7 days"
            body="This is how many new jobs fit this lane's filters over the past week. It's a preview to help you tune your filters, not a limit. Auto-apply is only limited by your daily cap."/>
          <TSwitch on={t.laneOn} onToggle={()=>u({laneOn:!t.laneOn})} label="Auto-apply with this profile"/>
        </div>
      </div>

      <div style={sect}>
        <button onClick={()=>u({open:!t.open})} aria-expanded={t.open} style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
          background:"none", border:"none", padding:0, cursor:"pointer", fontFamily:dFB}}>
          <span style={{display:"flex", alignItems:"baseline", gap:10}}>
            <span style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".09em"}}>JOB FILTERS</span>
            <span style={{fontSize:13, color:dT.muted, fontWeight:600}}>{active} active</span>
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            style={{transform: t.open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><path d="m6 9 6 6 6-6"/></svg>
        </button>
        {t.open && (
          <div style={{display:"flex", flexDirection:"column", gap:16, marginTop:14}}>
            <div style={{display:"flex", flexWrap:"wrap", gap:8, alignItems:"center"}}>
              {FILTERS.map(fl=>(
                <TFilterChip key={fl.k} def={fl} value={t.f[fl.k]} onChange={v=>uf(fl.k, v)}/>
              ))}
              <button onClick={()=>u({sponsors:!t.sponsors})} aria-pressed={t.sponsors} style={{padding:"7px 14px", borderRadius:999, cursor:"pointer", fontFamily:dFB,
                fontSize:13, fontWeight:600, border:`1.5px solid ${t.sponsors ? dT.ink : dT.hairline}`, background: t.sponsors ? dT.ink : "#fff", color: t.sponsors ? "#fff" : dT.ink}}>
                {t.sponsors ? "✓ " : ""}Sponsors visa</button>
              {active>0 && <button onClick={()=>setT(x=>({...x, sponsors:false, f:{ location:[], jobType:[], workplace:[], role:[], employment:[], degree:[], maxExp:null }}))}
                className="bd-textlink" style={{border:"none", background:"none", fontFamily:dFB, fontSize:12.5, fontWeight:700, color:dT.muted, cursor:"pointer", padding:"7px 4px"}}>Clear all</button>}
            </div>
            <div style={{border:`1px solid ${dT.hairline}`, borderRadius:12, padding:"14px 16px", display:"flex", flexDirection:"column", gap:12}}>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
                <div style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>Minimum salary</div>
                <div style={{fontSize:12, fontWeight:600, color:dT.muted}}>~{q.week} matched · {Math.round(q.week*0.58)} show pay</div>
              </div>
              <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
                <div style={{display:"flex", alignItems:"center", border:`1.5px solid ${dT.hairline}`, borderRadius:10, overflow:"hidden", background:"#fff"}}>
                  <span style={{padding:"0 4px 0 12px", fontSize:14, fontWeight:700, color:dT.muted}}>{t.currency==="CAD" ? "C$" : "$"}</span>
                  <input type="number" min={0} step={t.period==="year" ? 5 : 1} aria-label="Minimum salary amount"
                    value={t.period==="year" ? prefs.salaryMin : Math.round(prefs.salaryMin*1000/2080)}
                    onChange={e=>{ const v = Number(e.target.value)||0; setPrefs(p=>({...p, salaryMin: t.period==="year" ? v : Math.round(v*2080/1000)})); }}
                    style={{width:90, padding:"9px 4px", border:"none", outline:"none", fontFamily:dFB, fontSize:14, fontWeight:700, color:dT.ink}}/>
                  <span style={{padding:"0 12px 0 0", fontSize:13, fontWeight:700, color:dT.muted}}>{t.period==="year" ? "k" : ""}</span>
                </div>
                <select value={t.currency} onChange={e=>u({currency:e.target.value})} aria-label="Currency" style={sel}>
                  <option value="USD">USD</option><option value="CAD">CAD</option>
                </select>
                <div role="radiogroup" aria-label="Pay period" style={{display:"flex", border:`1.5px solid ${dT.hairline}`, borderRadius:10, overflow:"hidden"}}>
                  {[["year","Per year"],["hour","Per hour"]].map(([k,l])=>(
                    <button key={k} role="radio" aria-checked={t.period===k} onClick={()=>u({period:k})} style={{padding:"8px 14px", border:"none", cursor:"pointer",
                      fontFamily:dFB, fontSize:13, fontWeight:700, background: t.period===k ? dT.ink : "#fff", color: t.period===k ? "#fff" : dT.ink}}>{l}</button>
                  ))}
                </div>
              </div>
              <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
                <div>
                  <div style={{fontSize:13, fontWeight:600, color:dT.ink}}>Include jobs that don't list salary</div>
                  <div style={{fontSize:12, color:dT.muted, fontWeight:500, marginTop:2}}>Many posts leave pay out. Turning this off can cut your matches sharply.</div>
                </div>
                <TSwitch on={t.includeNoPay} onToggle={()=>u({includeNoPay:!t.includeNoPay})} label="Include jobs that don't list salary"/>
              </div>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
              <label style={{display:"flex", alignItems:"center", gap:9, cursor:"pointer", fontSize:13.5, fontWeight:600, color:dT.ink}}>
                <input type="checkbox" checked={t.remoteToo} onChange={e=>u({remoteToo:e.target.checked})} style={{width:17, height:17, accentColor:dT.ink, margin:0}}/>
                Also apply to remote jobs in
              </label>
              <select value={t.remoteCountry} onChange={e=>u({remoteCountry:e.target.value})} disabled={!t.remoteToo} style={{...sel, opacity: t.remoteToo ? 1 : .5}}>
                <option>United States</option><option>Canada</option><option>United States & Canada</option>
              </select>
            </div>
            <div style={help}>Bloom applies to matching jobs posted in the last 24 hours and checks several times a day.</div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:20}}>
              <div>
                <div style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>Include keywords</div>
                <input value={t.include} onChange={e=>u({include:e.target.value})} placeholder="e.g. backend | platform" style={underline}/>
              </div>
              <div>
                <div style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>Exclude keywords</div>
                <input value={t.exclude} onChange={e=>u({exclude:e.target.value})} placeholder="e.g. principal | staff" style={underline}/>
              </div>
            </div>
            <div style={help}>Separate terms with <b style={{color:dT.ink}}>|</b>. A job matches if any include term appears, and is skipped if any exclude term appears.</div>
            <div style={{display:"flex", alignItems:"center", gap:12, flexWrap:"wrap"}}>
              <span style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>Match keywords in</span>
              <select value={t.matchIn} onChange={e=>u({matchIn:e.target.value})} style={sel}>
                <option>Title only</option><option>Title + description</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div style={sect}>
        <TLabel>MINIMUM MATCH QUALITY</TLabel>
        <div style={{...help, marginBottom:12}}>Bloom only applies to jobs at least this strong a match for this résumé. A higher bar means fewer, sharper applications; a lower bar means more volume.</div>
        <div role="radiogroup" aria-label="Minimum match quality" style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:10}}>
          {T_QUALITY.map(x=>(
            <button key={x.k} role="radio" aria-checked={t.quality===x.k} onClick={()=>u({quality:x.k})} style={{padding:"9px 18px", borderRadius:999, cursor:"pointer",
              fontFamily:dFB, fontSize:13.5, fontWeight:700, border:`1.5px solid ${t.quality===x.k ? dT.ink : dT.hairline}`,
              background: t.quality===x.k ? dT.ink : "#fff", color: t.quality===x.k ? "#fff" : dT.ink}}>
              {x.k}<span style={{fontSize:11.5, fontWeight:600, opacity:.65, marginLeft:6}}>{x.min}%+</span>
            </button>
          ))}
        </div>
        <div style={help}>{q.desc} About <b style={{color:dT.ink}}>{q.week} matches a week</b> at your current filters.</div>
      </div>

      <div style={sect}>
        <TLabel>DAILY APPLICATION CAP</TLabel>
        <div style={{...help, marginBottom:10}}>At most this many applications per day (1–150), shared across your résumé profiles and spent on the strongest matches first.</div>
        <div style={{display:"flex", alignItems:"center", gap:10}}>
          <input type="number" min={1} max={150} value={t.cap} onChange={e=>u({cap:e.target.value})}
            onBlur={()=>u({cap: Math.min(150, Math.max(1, parseInt(t.cap)||1))})}
            aria-label="Daily application cap" style={{...underline, width:90, fontSize:18, fontWeight:700}}/>
          <span style={{fontSize:13, color:dT.muted, fontWeight:600}}>per day</span>
        </div>
      </div>

      <div style={sect}>
        <TLabel>STANDING INSTRUCTIONS</TLabel>
        <div style={{...help, marginBottom:10}}>Anything the filters can't say, in your own words. Bloom checks each job against this before applying and skips it if it doesn't fit. This can only rule jobs out, never add new ones. Leave it empty to skip the check.</div>
        <textarea value={t.notes} maxLength={2000} onChange={e=>u({notes:e.target.value})} rows={3}
          placeholder="e.g. Skip crypto companies. Avoid roles that require on-call every week."
          style={{width:"100%", boxSizing:"border-box", padding:"12px 14px", borderRadius:12, border:`1.5px solid ${dT.hairline}`, fontFamily:dFB,
          fontSize:14, color:dT.ink, outline:"none", resize:"vertical", lineHeight:1.5}}/>
        <div style={{textAlign:"right", fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:4}}>{t.notes.length}/2000</div>
      </div>

      <div style={{...sect, display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:20}}>
        <div>
          <TLabel>REVIEW BEFORE SUBMIT</TLabel>
          <div style={help}>Bloom fills each application, then holds it for you to check and send. Nothing goes out until you do, so they'll pile up if you don't come back. Same as choosing <b style={{color:dT.ink}}>Manual apply</b> above.</div>
        </div>
        <TSwitch on={review} onToggle={()=>set({mode: review ? "auto" : "review"})} label="Review before submit"/>
      </div>
      {!review && (
        <div style={{...sect, paddingTop:16}}>
          <TLabel>ASK ME FIRST WHEN AN APPLICATION…</TLabel>
          <div style={{...help, marginBottom:6}}>Bloom holds these for you even in Auto Apply, because the form itself needs your judgment.</div>
          {[["askQuestions","Has more than 10 questions"],["askEssay","Requires a custom essay"]].map(([k,l])=>(
            <div key={k} style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"10px 0"}}>
              <span style={{fontSize:13.5, fontWeight:600, color:dT.ink}}>{l}</span>
              <TSwitch on={t[k]} onToggle={()=>u({[k]:!t[k]})} label={l}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CopilotPanel({ st, set }) {
  const isAuto = st.mode === "auto";
  const [editingPrefs, setEditingPrefs] = React.useState(false);
  const [prefs, setPrefs] = React.useState({
    roles: [st.role || "Software Engineer"], keywordList:["React","TypeScript"],
    locations: (st.markets && st.markets.length) ? st.markets : ["United States"], settings:["Remote"],
    salaryMin:140, level:"Senior", employmentTypes:["Full-time"], industries:[],
    companySize:"51–200", companyTypes:["Product"], exclusionList:["Staffing firms"],
  });
  return (
    <div style={{display:"flex", flexDirection:"column", gap:20}}>
      <div style={{display:"flex", flexDirection:"column", gap:20, minWidth:0}}>
        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
          <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:8}}>APPLICATION MODE</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:6}}>How much do you want me to handle?</div>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:16}}>Mode changes save immediately — it's a switch, not a setting.</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
            <button onClick={()=>set({mode:"review"})} style={{textAlign:"left", padding:"16px 16px", borderRadius:12, cursor:"pointer",
              border:`1.5px solid ${!isAuto ? dT.ink : dT.hairline}`, background: !isAuto ? "#FFFCF6" : "#fff"}}>
              <div style={{fontSize:19, marginBottom:8}}>✋</div>
              <div style={{fontWeight:700, fontSize:14.5, marginBottom:4}}>Manual apply</div>
              <div style={{fontSize:12, color:dT.muted, fontWeight:600}}>I draft, you approve. ~90s per app.</div>
            </button>
            <button onClick={()=>set({mode:"auto"})} style={{textAlign:"left", padding:"16px 16px", borderRadius:12, cursor:"pointer", position:"relative",
              border:`1.5px solid ${isAuto ? dT.ink : dT.hairline}`, background: isAuto ? "#E3F7F7" : "#fff"}}>
              {isAuto && <span style={{position:"absolute", top:12, right:12, width:20, height:20, borderRadius:"50%",
                background:dT.ink, color:"#fff", fontSize:11, fontWeight:800, display:"grid", placeItems:"center"}}>✓</span>}
              <div style={{fontSize:19, marginBottom:8}}>🚀</div>
              <div style={{fontWeight:700, fontSize:14.5, marginBottom:4}}>Full Auto Apply</div>
              <div style={{fontSize:12, color:dT.muted, fontWeight:600}}>I find, fill, and submit. You get a recap.</div>
            </button>
          </div>
        </div>

        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
          <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:16}}>
            <div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:4}}>Job preferences</div>
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>What Bloom should look for on your behalf.</div>
            </div>
            <button onClick={()=>setEditingPrefs(true)} className="bd-textlink" style={{fontSize:13.5, fontWeight:700, color:dT.ink, cursor:"pointer",
              background:"none", border:"none", whiteSpace:"nowrap", flexShrink:0, marginTop:3}}>Edit preferences →</button>
          </div>

          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, background:"#FAF9F5",
            borderRadius:10, padding:"11px 14px", marginBottom:18}}>
            <span style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Based on your profile · 4 yrs experience · Authorized in US · Available immediately</span>
            <a href="#" className="bd-textlink" style={{fontSize:12.5, fontWeight:700, color:dT.ink, whiteSpace:"nowrap"}}>Edit profile →</a>
          </div>

          <PrefRow label="TARGET ROLES" value={prefs.roles.join(", ")} sub={prefs.keywordList.join(" · ")}/>
          <PrefRow label="LOCATION" value={prefs.locations.join(", ")} sub={prefs.settings.join(", ")}/>
          <PrefRow label="COMPENSATION" value={`$${prefs.salaryMin}k+ salary floor`}/>
          <PrefRow label="EXPERIENCE" value={prefs.level}/>
          <PrefRow label="EMPLOYMENT" value={prefs.employmentTypes.join(", ")}/>
          <PrefRow label="INDUSTRY" value={prefs.industries.length ? prefs.industries.join(", ") : "Any"}/>
          <PrefRow label="COMPANY PREFERENCES" value={`${prefs.companySize} people · ${prefs.companyTypes.join(", ")}`}/>
          <PrefRow label="EXCLUSIONS" value={prefs.exclusionList.join(", ") || "None"}/>

        </div>

        {editingPrefs && <EditPreferencesDrawer data={prefs} onClose={()=>setEditingPrefs(false)}
          onSave={(f)=>{ setPrefs(f); setEditingPrefs(false); }}/>}

        <TargetingCard st={st} set={set} prefs={prefs} setPrefs={setPrefs} onEditFilters={()=>setEditingPrefs(true)}/>

      </div>

    </div>
  );
}

function PlanCard({ tag, name, price, per, blurb, features, cta, dark, current }) {
  return (
    <div style={{flex:1, minWidth:220, borderRadius:16, padding:"22px 22px 24px", position:"relative",
      background: dark ? dT.ink : "#fff", color: dark ? "#fff" : dT.ink,
      border: dark ? "none" : `1px solid ${dT.hairline}`}}>
      {tag && <div style={{position:"absolute", top:-11, left:22, background:"#5AEBEB", color:dT.ink,
        fontSize:10.5, fontWeight:800, letterSpacing:".06em", borderRadius:999, padding:"4px 12px"}}>{tag}</div>}
      <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:8}}>{name}</div>
      <div style={{display:"flex", alignItems:"baseline", gap:6, marginBottom:10}}>
        <span style={{fontFamily:dFD, fontWeight:700, fontSize:34, letterSpacing:"-0.02em"}}>{price}</span>
        <span style={{fontSize:13, fontWeight:600, opacity:.65}}>{per}</span>
      </div>
      <div style={{fontSize:13, fontWeight:600, opacity:.75, marginBottom:16, lineHeight:1.4}}>{blurb}</div>
      <div style={{height:1, background: dark ? "rgba(255,255,255,.15)" : dT.hairline, marginBottom:16}}/>
      <div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:22}}>
        {features.map(f=>(
          <div key={f} style={{display:"flex", gap:9, fontSize:13, fontWeight:600}}>
            <span style={{color: dark ? "#5AEBEB" : "#1F8A5B", fontWeight:800}}>✓</span>{f}
          </div>
        ))}
      </div>
      <button style={{width:"100%", padding:"12px 0", borderRadius:999, border:"none", cursor: current ? "default" : "pointer",
        background: current ? (dark ? "rgba(255,255,255,.15)" : "#F1F3F4") : (dark ? "#fff" : dT.ink),
        color: current ? (dark ? "#fff" : dT.ink) : (dark ? dT.ink : "#fff"),
        fontFamily:dFB, fontSize:13.5, fontWeight:700}}>{current ? "✓ Current plan" : cta}</button>
    </div>
  );
}

function ReferralsPanel() {
  const [code, setCode] = React.useState("VINODH-BLOOM");
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(code);
  const [copied, setCopied] = React.useState(false);
  const link = `https://bloom.app/?ref=${code}`;
  const copy = ()=>{ try { navigator.clipboard && navigator.clipboard.writeText(link); } catch(e){} setCopied(true); setTimeout(()=>setCopied(false), 1800); };
  const saveCode = ()=>{ const v = draft.trim().toUpperCase().replace(/[^A-Z0-9-]/g,""); if(v.length>=4){ setCode(v); setEditing(false); } };
  const draftOk = draft.trim().replace(/[^A-Za-z0-9-]/g,"").length>=4;
  const msg = encodeURIComponent("I use Bloom to auto-apply to jobs. Get free applications with my link: " + link);
  const share = ()=>{ if(navigator.share){ navigator.share({title:"Bloom", url:link}).catch(()=>{}); } else copy(); };
  const btn = {display:"inline-flex", alignItems:"center", gap:8, padding:"9px 16px", borderRadius:10, border:`1.5px solid ${dT.hairline}`,
    background:"#fff", fontFamily:dFB, fontSize:13.5, fontWeight:600, color:dT.ink, cursor:"pointer", textDecoration:"none"};
  return (
    <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px", minWidth:0}}>
      <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:6}}>Referrals</div>
      <div style={{fontSize:13, color:dT.muted, fontWeight:500, lineHeight:1.55, marginBottom:24}}>
        Refer a friend and you both get 50 free applications when they upgrade to a paid plan.
      </div>

      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, marginBottom:8}}>
        <div style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>Your referral link</div>
        {!editing && <button onClick={()=>{ setDraft(code); setEditing(true); }} style={{display:"flex", alignItems:"center", gap:6, border:"none", background:"none",
          cursor:"pointer", fontFamily:dFB, fontSize:13, fontWeight:600, color:dT.muted}}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          Customize code</button>}
      </div>
      {editing ? (
        <div style={{display:"flex", gap:10, flexWrap:"wrap", alignItems:"center"}}>
          <div style={{flex:"1 1 280px", display:"flex", alignItems:"center", border:`1.5px solid ${dT.ink}`, borderRadius:10, overflow:"hidden", background:"#fff"}}>
            <span style={{padding:"11px 0 11px 14px", fontFamily:"ui-monospace, Menlo, monospace", fontSize:13.5, color:dT.muted}}>bloom.app/?ref=</span>
            <input autoFocus value={draft} maxLength={20} onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{ if(e.key==="Enter") saveCode(); if(e.key==="Escape") setEditing(false); }}
              aria-label="Referral code" style={{flex:1, minWidth:0, padding:"11px 14px 11px 0", border:"none", outline:"none", fontFamily:"ui-monospace, Menlo, monospace",
              fontSize:13.5, color:dT.ink, textTransform:"uppercase"}}/>
          </div>
          <button onClick={()=>setEditing(false)} style={btn}>Cancel</button>
          <button onClick={saveCode} disabled={!draftOk} style={{...btn, border:"none", background: draftOk ? dT.ink : "#EEF0F1", color: draftOk ? "#fff" : "#A7AEB1",
            cursor: draftOk ? "pointer" : "not-allowed"}}>Save</button>
          <div style={{flexBasis:"100%", fontSize:12, color:dT.muted, fontWeight:500}}>4–20 letters, numbers or dashes. Old links stop working when you change it.</div>
        </div>
      ) : (
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <div style={{flex:"1 1 280px", minWidth:0, padding:"11px 14px", borderRadius:10, background:"#F7F8F8", border:`1.5px solid ${dT.hairline}`,
            fontFamily:"ui-monospace, Menlo, monospace", fontSize:13.5, color:dT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{link}</div>
          <button onClick={copy} style={{display:"inline-flex", alignItems:"center", gap:8, padding:"11px 20px", borderRadius:10, border:"none",
            background:dT.ink, color:"#fff", fontFamily:dFB, fontSize:14, fontWeight:700, cursor:"pointer", minWidth:104, justifyContent:"center"}}>
            {copied
              ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M4 16V5a2 2 0 0 1 2-2h11"/></svg>}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:14}}>
        <a href={`https://twitter.com/intent/tweet?text=${msg}`} target="_blank" rel="noopener noreferrer" style={btn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6 22H2.9l7.3-8.3L1 2h6.4l4.4 5.9zm-1.1 18h1.7L6.3 3.9H4.5z"/></svg>X</a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`} target="_blank" rel="noopener noreferrer" style={btn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>LinkedIn</a>
        <a href={`https://wa.me/?text=${msg}`} target="_blank" rel="noopener noreferrer" style={btn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>WhatsApp</a>
        <button onClick={share} style={btn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>Share</button>
      </div>

      <div style={{display:"flex", gap:44, flexWrap:"wrap", margin:"30px 0 28px"}}>
        {[["INVITED","0"],["JOINED AND PAID","0"],["APPS EARNED","0"]].map(([l,v])=>(
          <div key={l}>
            <div style={{fontSize:11, fontWeight:700, color:dT.muted, letterSpacing:".06em", marginBottom:4}}>{l}</div>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:32, color:dT.ink, lineHeight:1}}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{borderTop:`1px solid ${dT.hairline}`, paddingTop:20}}>
        <div style={{fontSize:14.5, fontWeight:700, color:dT.ink, marginBottom:12}}>How it works</div>
        <ol style={{margin:0, paddingLeft:20, display:"flex", flexDirection:"column", gap:9, fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.5}}>
          <li>Share your link with a friend.</li>
          <li>They sign up and get 10 free applications.</li>
          <li>When they upgrade to a paid plan, you both get 50 applications.</li>
        </ol>
      </div>
    </div>
  );
}

function WorkdayPasswordPanel() {
  const [pw, setPw] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [saved, setSaved] = React.useState(null); // { value, date }
  const [editing, setEditing] = React.useState(true);
  const [reveal, setReveal] = React.useState(false);
  const [confirmRemove, setConfirmRemove] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const rules = [
    ["At least 12 characters long", pw.length>=12],
    ["At least one lowercase letter", /[a-z]/.test(pw)],
    ["At least one uppercase letter", /[A-Z]/.test(pw)],
    ["At least one number", /\d/.test(pw)],
    ["At least one special character", /[^A-Za-z0-9]/.test(pw)],
  ];
  const ok = rules.every(r=>r[1]);
  const fmt = d => `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`;
  const save = ()=>{ if(!ok) return; setSaved({ value:pw, date:new Date() }); setPw(""); setShow(false); setEditing(false); setReveal(false); };
  const remove = ()=>{ setSaved(null); setEditing(true); setConfirmRemove(false); setReveal(false); };
  const note = (
    <div style={{fontSize:12.5, color:dT.muted, fontWeight:500, lineHeight:1.55, marginTop:12, maxWidth:520}}>
      Encrypted before storage, only used to submit applications, and never shared. You can remove it anytime.
    </div>
  );
  const btn = {display:"inline-flex", alignItems:"center", gap:9, padding:"11px 20px", borderRadius:10, fontFamily:dFB, fontSize:14, fontWeight:700, cursor:"pointer"};
  return (
    <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px", minWidth:0}}>
      <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:6}}>Workday password</div>
      <div style={{fontSize:13, color:dT.muted, fontWeight:500, lineHeight:1.55, marginBottom:22}}>
        Store a password for job sites that create an account when you apply, like Workday, iCIMS, and Oracle.
      </div>

      {saved && !editing ? (
        <div>
          <div role="status" style={{display:"flex", alignItems:"center", gap:9, fontSize:14, fontWeight:500, color:dT.ink}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#22A565"}}/>
            Password saved · Updated {fmt(saved.date)}
          </div>
          <div style={{display:"flex", alignItems:"center", gap:12, marginTop:12, flexWrap:"wrap"}}>
            <button onClick={()=>setReveal(r=>!r)} aria-pressed={reveal} style={{display:"inline-flex", alignItems:"center", gap:7, border:"none", background:"none",
              padding:0, cursor:"pointer", fontFamily:dFB, fontSize:13, fontWeight:600, color:dT.muted}}>
              {reveal
                ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10 10 0 0 1 12 20C5 20 1 12 1 12a18 18 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.16 3.19M1 1l22 22"/></svg>
                : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
              {reveal ? "Hide password" : "View password"}
            </button>
            {reveal && <code style={{fontFamily:"ui-monospace, Menlo, monospace", fontSize:13, padding:"4px 10px", borderRadius:8, background:"#F4F6F6", color:dT.ink}}>{saved.value}</code>}
          </div>
          {confirmRemove ? (
            <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginTop:20, padding:"12px 14px", borderRadius:12, background:"#FDEDEC"}}>
              <span style={{fontSize:13, fontWeight:600, color:"#8A2A22", flex:"1 1 220px"}}>Remove this password? Bloom will pause applications on sites that need it.</span>
              <button onClick={()=>setConfirmRemove(false)} style={{...btn, padding:"8px 14px", fontSize:13, background:"#fff", border:`1.5px solid ${dT.hairline}`, color:dT.ink}}>Cancel</button>
              <button onClick={remove} style={{...btn, padding:"8px 14px", fontSize:13, background:"#D93A2F", border:"none", color:"#fff"}}>Remove</button>
            </div>
          ) : (
            <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:20}}>
              <button onClick={()=>{ setEditing(true); setReveal(false); }} style={{...btn, background:dT.ink, color:"#fff", border:"none"}}>
                Update password
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </button>
              <button onClick={()=>setConfirmRemove(true)} style={{...btn, background:"#fff", color:"#D93A2F", border:`1.5px solid ${dT.hairline}`}}>
                Remove
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z"/></svg>
              </button>
            </div>
          )}
          {note}
        </div>
      ) : (
        <div>
          <label htmlFor="wd-pw" style={{display:"block", fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:8}}>{saved ? "New password" : "Application password"}</label>
          <div style={{position:"relative", maxWidth:520}}>
            <input id="wd-pw" type={show ? "text" : "password"} value={pw} onChange={e=>setPw(e.target.value)} autoComplete="new-password" autoFocus={!!saved}
              onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onKeyDown={e=>{ if(e.key==="Enter") save(); if(e.key==="Escape" && saved){ setEditing(false); setPw(""); } }}
              placeholder="Enter your application password" style={{width:"100%", boxSizing:"border-box", padding:"12px 46px 12px 14px", borderRadius:10,
              border:`1.5px solid ${focus ? dT.ink : dT.hairline}`, fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none"}}/>
            <button onClick={()=>setShow(s=>!s)} aria-label={show ? "Hide password" : "Show password"} style={{position:"absolute", right:8, top:"50%", transform:"translateY(-50%)",
              width:32, height:32, border:"none", background:"none", cursor:"pointer", color:dT.muted, display:"grid", placeItems:"center"}}>
              {show
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10 10 0 0 1 12 20C5 20 1 12 1 12a18 18 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.16 3.19M1 1l22 22"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>}
            </button>
          </div>
          <div style={{fontSize:13, fontWeight:700, color:dT.ink, margin:"18px 0 10px"}}>Password requirements:</div>
          <div style={{display:"flex", flexDirection:"column", gap:9}}>
            {rules.map(([l,met])=>(
              <div key={l} style={{display:"flex", alignItems:"center", gap:10, fontSize:13.5, fontWeight:500, color: met ? "#1F6B45" : dT.muted}}>
                <span style={{width:18, height:18, borderRadius:"50%", background: met ? "#22A565" : "#E3E6E8", display:"grid", placeItems:"center", flexShrink:0, transition:"background .15s"}}>
                  {met && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                </span>
                {l}
              </div>
            ))}
          </div>
          <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:22}}>
            <button onClick={save} disabled={!ok} style={{...btn, border:"none", cursor: ok ? "pointer" : "not-allowed", background: ok ? dT.ink : "#EEF0F1", color: ok ? "#fff" : "#A7AEB1"}}>
              Save password
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4zm-5 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3-10H5V5h10v4z"/></svg>
            </button>
            {saved && <button onClick={()=>{ setEditing(false); setPw(""); }} style={{...btn, background:"#fff", color:dT.ink, border:`1.5px solid ${dT.hairline}`}}>Cancel</button>}
          </div>
          {note}
        </div>
      )}
    </div>
  );
}

function AboutHelpPanel() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:20}}>
      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:8}}>Help & support</div>
        <DField label="HELP CENTER" value="Guides, FAQs, troubleshooting" action="Open"/>
        <DField label="CONTACT US" value="hello@bloom.app · replies in ~4h" action="Email"/>
        <DField label="FEATURE REQUESTS" value="Tell us what to build next" action="Share" last/>
      </div>
      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:8}}>Legal</div>
        <DField label="TERMS OF SERVICE" value="Last updated Apr 2026" action="View"/>
        <DField label="PRIVACY POLICY" value="How we handle your data" action="View"/>
        <DField label="DATA EXPORT" value="Download everything Bloom knows" action="Export" last/>
      </div>
    </div>
  );
}

function BillingPanel() {
  const PLANS = [
    { k:"free", name:"FREE", price:"$0", per:"forever", blurb:"Try Bloom on a few roles.", upTo:"5", unit:"applications, lifetime",
      boxTitle:"Both apply modes", boxText:"Manual apply or Full Auto Apply. Only submitted applications count.", cta:"Current plan", current:true },
    { k:"monthly", name:"MONTHLY", price:"$19", per:"/month", blurb:"For an active job search.", upTo:"300", unit:"applications / month",
      boxTitle:"Full Auto Apply", boxText:"Applies to new matches in the background. No opening the app, no clicking apply.", cta:"Choose Monthly" },
    { k:"quarterly", name:"QUARTERLY", price:"$49", per:"/3 months", note:"just $0.54/day · save 14%", blurb:"Best value for a full search cycle.", upTo:"300", unit:"applications / month",
      boxTitle:"Full Auto Apply", boxText:"Applies to new matches in the background. No opening the app, no clicking apply.", cta:"Choose Quarterly", popular:true },
  ];
  const Bolt = ({c}) => <svg width="15" height="15" viewBox="0 0 24 24" style={{flexShrink:0}} fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
  return (
    <div style={{display:"flex", flexDirection:"column", gap:24}}>
      <div>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:20, letterSpacing:"-0.02em"}}>Choose your plan</div>
        <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:3}}>You're on Free. Only submitted applications count toward your limit.</div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", gap:12, paddingTop:12}}>
        {PLANS.map(p=>{
          const d = p.popular;
          const fg = d ? "#fff" : dT.ink, mute = d ? "rgba(255,255,255,.72)" : dT.muted, line = d ? "rgba(255,255,255,.16)" : dT.hairline;
          return (
            <div key={p.k} style={{position:"relative", borderRadius:20, padding:"24px 18px 18px", display:"flex", flexDirection:"column",
              background: d ? dT.ink : "#fff", border: d ? "none" : `1px solid ${dT.hairline}`, color:fg, minWidth:0}}>
              {d && <span style={{position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", display:"inline-flex", alignItems:"center", gap:6,
                background:dT.ink, color:"#fff", border:"1px solid rgba(255,255,255,.22)", borderRadius:999, padding:"5px 12px",
                fontSize:10.5, fontWeight:800, letterSpacing:".08em", whiteSpace:"nowrap"}}>
                <span style={{width:6, height:6, borderRadius:"50%", background:"#5AEBEB"}}/>MOST POPULAR</span>}
              <div style={{fontSize:11, fontWeight:800, letterSpacing:".14em", color:mute}}>{p.name}</div>
              <div style={{display:"flex", alignItems:"baseline", gap:"2px 6px", marginTop:10, flexWrap:"wrap"}}>
                <span style={{fontFamily:dFD, fontWeight:700, fontSize:32, letterSpacing:"-0.03em", lineHeight:1}}>{p.price}</span>
                <span style={{fontSize:12.5, fontWeight:600, color:mute}}>{p.per}</span>
              </div>
              {p.note && <div style={{fontSize:11.5, fontWeight:700, color:"#5AEBEB", marginTop:6, lineHeight:1.35}}>{p.note}</div>}
              <div style={{fontSize:12.5, fontWeight:500, color:mute, lineHeight:1.4, marginTop: p.note ? 8 : 10}}>{p.blurb}</div>
              <div style={{height:1, background:line, margin:"16px 0"}}/>
              <div style={{fontSize:10.5, fontWeight:800, letterSpacing:".14em", color:mute}}>UP TO</div>
              <div style={{display:"flex", alignItems:"baseline", gap:7, marginTop:4, flexWrap:"wrap"}}>
                <span style={{fontFamily:dFD, fontWeight:700, fontSize:26, letterSpacing:"-0.03em", lineHeight:1}}>{p.upTo}</span>
                <span style={{fontSize:12, fontWeight:600, color:mute, lineHeight:1.3}}>{p.unit}</span>
              </div>
              <div style={{marginTop:14, borderRadius:12, padding:"11px 11px",
                background: d ? "rgba(255,255,255,.06)" : "#F4F8F8", border:`1px solid ${d ? "rgba(255,255,255,.14)" : dT.hairline}`}}>
                <div style={{display:"flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:700}}>
                  <Bolt c={d ? "#5AEBEB" : dT.ink}/>{p.boxTitle}
                </div>
                <div style={{fontSize:11.5, fontWeight:500, color:mute, lineHeight:1.45, marginTop:4}}>{p.boxText}</div>
              </div>
              <div style={{flex:1, minHeight:16}}/>
              <button disabled={p.current} className={p.current ? "" : "bd-cta"} style={{width:"100%", padding:"11px 8px", borderRadius:999, lineHeight:1.25,
                border: p.current ? `1.5px solid ${dT.hairline}` : "none",
                background: p.current ? "#fff" : d ? "#fff" : dT.ink, color: p.current ? dT.muted : d ? dT.ink : "#fff",
                fontFamily:dFB, fontSize:13, fontWeight:700, cursor: p.current ? "default" : "pointer"}}>{p.cta}</button>
            </div>
          );
        })}
      </div>

      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"22px 28px"}}>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:6}}>Billing</div>
        <DField label="PAYMENT METHOD" value="No card on file" action="Add card"/>
        <DField label="BILLING EMAIL" value="vinodh@gmail.com" action="Edit" last/>
      </div>
    </div>
  );
}
function DPill({ children, tone }) {
  const map = { warn:{fg:"#8A6D00", bg:"#FBEFCB"}, ok:{fg:"#7B8B8E", bg:"#F1F3F4"} };
  const t = map[tone] || map.ok;
  return <span style={{fontSize:11.5, fontWeight:700, color:t.fg, background:t.bg, borderRadius:999, padding:"4px 11px", display:"inline-flex", alignItems:"center", gap:5}}>{tone==="warn" && "⚠"} {children}</span>;
}

function PRow({ label, value, missing, last }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"12px 0", borderBottom: last ? "none" : `1px solid ${dT.hairline}`}}>
      <span style={{fontSize:13, fontWeight:600, color:dT.muted}}>{label}</span>
      {missing
        ? <button style={{fontSize:12, fontWeight:700, color:dT.muted, border:`1.5px dashed ${dT.hairline}`, background:"#fff", borderRadius:999, padding:"5px 12px", cursor:"pointer"}}>Add · optional</button>
        : <span style={{fontSize:13.5, fontWeight:700, color:dT.ink}}>{value}</span>}
    </div>
  );
}

function PSection({ title, icon, count, children, action, last, onEdit }) {
  return (
    <div style={{padding:"20px 0", borderBottom: last ? "none" : `1px solid ${dT.hairline}`}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: children ? 14 : 0}}>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          {icon && <span style={{width:34, height:34, borderRadius:10, background:"#F1F3F4", display:"grid", placeItems:"center", fontSize:15, flexShrink:0}}>{icon}</span>}
          <div>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:16}}>{title}</div>
            {count && <div style={{fontSize:12, color:dT.muted, fontWeight:500}}>{count}</div>}
          </div>
        </div>
        {action !== false && <PencilBtn onClick={onEdit}/>}
      </div>
      {children}
    </div>
  );
}

function PencilBtn({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Edit" title="Edit" style={{width:30, height:30, borderRadius:8, border:"none", background:"transparent",
      display:"grid", placeItems:"center", cursor:"pointer", color:"#6B7280", flexShrink:0}}
      onMouseEnter={e=>e.currentTarget.style.background="#F1F3F4"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
    </button>
  );
}

function EditPersonalDrawer({ data, onSave, onClose }) {
  const [f, setF] = React.useState(data);
  const upd = (k,v) => setF(p=>({...p, [k]:v}));
  return (
    <div style={{position:"fixed", inset:0, zIndex:60, display:"flex", justifyContent:"flex-end"}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:440, maxWidth:"90vw", background:"#fff", height:"100%",
        display:"flex", flexDirection:"column", boxShadow:"-8px 0 30px rgba(0,0,0,.12)"}}>
        <div style={{padding:"22px 26px", display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:20}}>Edit Personal Information</div>
          <button onClick={onClose} style={{border:"none", background:"none", fontSize:20, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{flex:1, overflow:"auto", padding:"22px 26px", display:"flex", flexDirection:"column", gap:18}}>
          <div>
            <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:7}}>Summary</div>
            <textarea value={f.summary} onChange={e=>upd("summary", e.target.value)} rows={4}
              placeholder="e.g. Senior frontend engineer with 8 years building SaaS interfaces."
              style={{width:"100%", padding:"11px 13px", borderRadius:9, border:`1.5px solid ${dT.hairline}`,
                fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box", resize:"vertical"}}/>
            <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:6}}>1-2 lines that introduce you. Shown at the top of your profile.</div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <DField2 label="First Name" required value={f.first} onChange={v=>upd("first",v)}/>
            <DField2 label="Last Name" required value={f.last} onChange={v=>upd("last",v)}/>
          </div>
          <DField2 label="Email" required value={f.email} onChange={v=>upd("email",v)} type="email"/>
          <DField2 label="Phone" value={f.phone} onChange={v=>upd("phone",v)} hint="Example: +1 for US/Canada, +91 for India, etc."/>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <DField2 label="Date of Birth" value={f.dob} onChange={v=>upd("dob",v)} type="date"/>
            <DField2 label="Country" required value={f.country} onChange={v=>upd("country",v)}/>
          </div>
          <div style={{height:1, background:dT.hairline}}/>
          <DField2 label="Street Address" value={f.street} onChange={v=>upd("street",v)}/>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <DField2 label="City" required value={f.city} onChange={v=>upd("city",v)}/>
            <DField2 label="State" required value={f.state} onChange={v=>upd("state",v)}/>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <DField2 label="Zip Code" required value={f.zip} onChange={v=>upd("zip",v)}/>
            <DField2 label="County / District" value={f.county} onChange={v=>upd("county",v)} hint="Auto-filled from your address; optional."/>
          </div>
          <div style={{height:1, background:dT.hairline}}/>
          <DField2 label="LinkedIn URL" value={f.linkedin} onChange={v=>upd("linkedin",v)} placeholder="https://linkedin.com/in/..."/>
          <DField2 label="GitHub URL" value={f.github} onChange={v=>upd("github",v)} placeholder="https://github.com/..."/>
          <DField2 label="Website" value={f.website} onChange={v=>upd("website",v)} placeholder="https://..."/>
        </div>
        <div style={{padding:"18px 26px", display:"flex", justifyContent:"flex-end", gap:10, borderTop:`1px solid ${dT.hairline}`}}>
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:999, background:"#fff", color:dT.ink,
            border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button onClick={()=>onSave(f)} style={{padding:"10px 20px", borderRadius:999, background:dT.ink, color:"#fff",
            border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function EditPreferencesDrawer({ data, onSave, onClose }) {
  const [f, setF] = React.useState(data);
  const upd = (k,v) => setF(p=>({...p, [k]:v}));
  const toggleIn = (k,v) => setF(p=>({...p, [k]: p[k].includes(v) ? p[k].filter(x=>x!==v) : [...p[k], v]}));
  return (
    <div style={{position:"fixed", inset:0, zIndex:60, display:"flex", justifyContent:"flex-end"}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:440, maxWidth:"90vw", background:"#fff", height:"100%",
        display:"flex", flexDirection:"column", boxShadow:"-8px 0 30px rgba(0,0,0,.12)"}}>
        <div style={{padding:"22px 26px", display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:20}}>Job preferences</div>
          <button onClick={onClose} style={{border:"none", background:"none", fontSize:20, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{flex:1, overflow:"auto", padding:"22px 26px", display:"flex", flexDirection:"column", gap:22}}>
          <div>
            <DFieldLabel>Target roles</DFieldLabel>
            <DTagInput values={f.roles} onChange={v=>upd("roles",v)} placeholder="Search or add a role…"
              suggestions={["Software Engineer","Senior Software Engineer","Product Designer","Product Manager","Data Scientist","Backend Engineer","Frontend Engineer"]}/>
          </div>
          <div>
            <DFieldLabel hint="Add skills, technologies or keywords Bloom should look for.">Keywords</DFieldLabel>
            <DTagInput values={f.keywordList} onChange={v=>upd("keywordList",v)} placeholder="Type to add…"
              suggestions={["React","TypeScript","AI","Python","Node.js","GraphQL"]}/>
          </div>
          <div>
            <DFieldLabel>Location</DFieldLabel>
            <DTagInput values={f.locations} onChange={v=>upd("locations",v)} placeholder="Search country or city…"
              suggestions={["United States","Canada","Chennai","Bangalore","Remote","New York, NY","San Francisco, CA"]}/>
          </div>
          <div>
            <DFieldLabel>Work setting</DFieldLabel>
            <DPillOptions values={f.settings} options={["Remote","Hybrid","On-site"]} onToggle={v=>toggleIn("settings",v)}/>
          </div>
          <div>
            <DFieldLabel>Salary floor</DFieldLabel>
            <DSalarySlider value={f.salaryMin} onChange={v=>upd("salaryMin",v)}/>
          </div>
          <div>
            <DFieldLabel>Experience level</DFieldLabel>
            <DPillOptions values={[f.level]} options={["Entry","Mid","Senior","Lead"]} onToggle={v=>upd("level",v)}/>
          </div>
          <div>
            <DFieldLabel>Employment type</DFieldLabel>
            <DPillOptions values={f.employmentTypes} options={["Full-time","Part-time","Contract","Freelance","Internship"]} onToggle={v=>toggleIn("employmentTypes",v)}/>
          </div>
          <div>
            <DFieldLabel>Industry</DFieldLabel>
            <DTagInput values={f.industries} onChange={v=>upd("industries",v)} placeholder="Search industry…"
              suggestions={["SaaS","Fintech","Healthcare","E-commerce","Gaming","Education"]}/>
          </div>
          <div>
            <DFieldLabel>Company size</DFieldLabel>
            <DPillOptions values={[f.companySize]} options={["Startup","1–50","51–200","201–500","500+"]} onToggle={v=>upd("companySize",v)}/>
          </div>
          <div>
            <DFieldLabel>Company type</DFieldLabel>
            <DPillOptions values={f.companyTypes} options={["Product","Agency","Consultancy"]} onToggle={v=>toggleIn("companyTypes",v)}/>
          </div>
          <div>
            <DFieldLabel hint="Companies or industries Bloom should never show.">Exclusions</DFieldLabel>
            <DTagInput values={f.exclusionList} onChange={v=>upd("exclusionList",v)} placeholder="Type to add…"
              suggestions={["Staffing firms","Gambling","Crypto","Ad tech"]}/>
          </div>
        </div>
        <div style={{padding:"18px 26px", display:"flex", justifyContent:"flex-end", gap:10, borderTop:`1px solid ${dT.hairline}`}}>
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:999, background:"#fff", color:dT.ink,
            border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button onClick={()=>onSave(f)} style={{padding:"10px 20px", borderRadius:999, background:dT.ink, color:"#fff",
            border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function DField2({ label, value, onChange, placeholder, required, type, hint }) {
  return (
    <div>
      <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:7}}>{label}{required && <span style={{color:dT.muted}}> *</span>}</div>
      <input value={value} onChange={e=>onChange(e.target.value)} type={type||"text"} placeholder={placeholder}
        style={{width:"100%", padding:"11px 13px", borderRadius:9, border:`1.5px solid ${dT.hairline}`,
          fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box"}}/>
      {hint && <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:6}}>{hint}</div>}
    </div>
  );
}

function DSelect({ label, value, onChange, options, hint }) {
  return (
    <div>
      <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:7}}>{label}</div>
      <select value={value} onChange={e=>onChange(e.target.value)} style={{width:"100%", padding:"11px 13px", borderRadius:9,
        border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box", background:"#fff"}}>
        {options.map(o=><option key={o} value={o}>{o}</option>)}
      </select>
      {hint && <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:6}}>{hint}</div>}
    </div>
  );
}

function DrawerShell({ title, onClose, onSave, children }) {
  return (
    <div style={{position:"fixed", inset:0, zIndex:60, display:"flex", justifyContent:"flex-end"}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:460, maxWidth:"90vw", background:"#fff", height:"100%",
        display:"flex", flexDirection:"column", boxShadow:"-8px 0 30px rgba(0,0,0,.12)"}}>
        <div style={{padding:"22px 26px", display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:20}}>{title}</div>
          <button onClick={onClose} style={{border:"none", background:"none", fontSize:20, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{flex:1, overflow:"auto", padding:"22px 26px", display:"flex", flexDirection:"column", gap:18}}>
          {children}
        </div>
        <div style={{padding:"18px 26px", display:"flex", justifyContent:"flex-end", gap:10, borderTop:`1px solid ${dT.hairline}`}}>
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:999, background:"#fff", color:dT.ink,
            border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button onClick={onSave} style={{padding:"10px 20px", borderRadius:999, background:dT.ink, color:"#fff",
            border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function EditListDrawer({ title, items, onSave, onClose, fields, blank, renderExtra }) {
  const [list, setList] = React.useState(items.length ? items : [blank]);
  const updAt = (i,k,v) => setList(l=>l.map((it,idx)=>idx===i?{...it,[k]:v}:it));
  const removeAt = i => setList(l=>l.filter((_,idx)=>idx!==i));
  return (
    <DrawerShell title={title} onClose={onClose} onSave={()=>onSave(list.filter(it=>Object.values(it).some(v=>v)))}>
      {list.map((it,i)=>(
        <div key={i} style={{border:`1px solid ${dT.hairline}`, borderRadius:12, padding:16, display:"flex", flexDirection:"column", gap:12, position:"relative"}}>
          {list.length>1 && <button onClick={()=>removeAt(i)} style={{position:"absolute", top:10, right:10, border:"none", background:"none",
            color:dT.muted, fontSize:16, cursor:"pointer"}}>×</button>}
          {fields.map(f=>(
            <DField2 key={f.key} label={f.label} value={it[f.key]||""} onChange={v=>updAt(i,f.key,v)} placeholder={f.placeholder}/>
          ))}
          {renderExtra && renderExtra(it, v=>updAt(i,"bullets",v))}
        </div>
      ))}
      <button onClick={()=>setList(l=>[...l, blank])} className="bd-textlink" style={{alignSelf:"flex-start", fontSize:13.5, fontWeight:700,
        color:dT.ink, cursor:"pointer", background:"none", border:"none"}}>+ Add {title.toLowerCase().replace("edit ","")}</button>
    </DrawerShell>
  );
}

function ALabel({ children }) {
  return <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".08em", marginBottom:8}}>{children}</div>;
}
function AChip({ ok, children }) {
  const neutral = ok===undefined;
  return (
    <span style={{display:"inline-flex", alignItems:"center", gap:5, fontSize:12, fontWeight:600, borderRadius:999, padding:"5px 11px",
      color: neutral ? dT.ink : ok ? "#1F6B45" : "#5C6668", background: neutral ? "#F1F3F4" : ok ? "#E8F4EC" : "#F1F3F4"}}>
      {!neutral && <span style={{fontSize:11}}>{ok ? "\u2713" : "\u00d7"}</span>}{children}
    </span>
  );
}

function SkillTagField({ values, onChange }) {
  const [input, setInput] = React.useState("");
  const addMany = raw => {
    const parts = raw.split(",").map(s=>s.trim()).filter(Boolean);
    const next = [...values]; parts.forEach(p=>{ if(!next.includes(p)) next.push(p); });
    onChange(next); setInput("");
  };
  return (
    <div>
      <div style={{display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:10, border:`1.5px solid ${dT.hairline}`, background:"#fff"}}>
        <div style={{display:"flex", flexWrap:"wrap", gap:7, flex:1, minWidth:0}}>
          {values.map(v=>(
            <span key={v} style={{display:"inline-flex", alignItems:"center", gap:5, fontSize:13, fontWeight:600, color:"#11684D",
              background:"#DDF7EC", borderRadius:8, padding:"5px 10px"}}>{v}
              <button onClick={()=>onChange(values.filter(x=>x!==v))} aria-label={`Remove ${v}`} style={{border:"none", background:"none",
                color:"#11684D", cursor:"pointer", fontSize:14, lineHeight:1, padding:0}}>×</button>
            </span>
          ))}
          <input value={input} onChange={e=>{ const v=e.target.value; if(v.includes(",")) addMany(v); else setInput(v); }}
            onKeyDown={e=>{ if(e.key==="Enter"){ e.preventDefault(); addMany(input); } if(e.key==="Backspace" && !input && values.length) onChange(values.slice(0,-1)); }}
            onPaste={e=>{ e.preventDefault(); addMany(input + e.clipboardData.getData("text")); }}
            onBlur={()=>input.trim() && addMany(input)}
            placeholder={values.length ? "" : "Type a skill and press Enter"} style={{flex:1, minWidth:120, border:"none", outline:"none",
            fontFamily:dFB, fontSize:14, color:dT.ink, background:"transparent", padding:"5px 0"}}/>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div style={{fontSize:12, color:dT.muted, fontWeight:500, marginTop:7}}>💡 Tip: You can paste or type multiple items separated by commas</div>
    </div>
  );
}

function EditCertsModal({ certs, onSave, onClose }) {
  const blank = { name:"", org:"", issue:"", expiry:"", credId:"", url:"" };
  const [list, setList] = React.useState(certs.length ? certs.map((x,i)=>({...x, _k:i})) : [{...blank, _k:0}]);
  const [dragIdx, setDragIdx] = React.useState(null);
  const [touched, setTouched] = React.useState({});
  const bodyRef = React.useRef(null); const refs = React.useRef({});
  React.useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, []);
  const strip = l => l.map(({_k,...r})=>r);
  const dirty = JSON.stringify(strip(list)) !== JSON.stringify(certs);
  const valid = list.every(x=>x.name.trim() && x.org.trim());
  const canSave = dirty && valid;
  const upd = (i,k,v)=> setList(l=>l.map((x,j)=>j===i?{...x,[k]:v}:x));
  const scrollTo = k => { const el=refs.current[k], box=bodyRef.current; if(el&&box) box.scrollTo({top:el.offsetTop-20, behavior:"smooth"}); };
  const add = ()=>{ const k=Date.now(); setList(l=>[...l, {...blank, _k:k}]); setTimeout(()=>scrollTo(k),30); };
  const drop = to => { if(dragIdx===null||dragIdx===to) return; setList(l=>{ const n=[...l]; const [m]=n.splice(dragIdx,1); n.splice(to,0,m); return n; }); setDragIdx(null); };
  const inp = err => ({width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${err ? "#E0474C" : dT.hairline}`,
    fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box", background:"#fff"});
  const lab = {fontSize:13.5, fontWeight:600, color:dT.ink, marginBottom:8};
  const req = (i,k,label,ph) => { const err = touched[list[i]._k+k] && !list[i][k].trim(); return (
    <div><div style={lab}>{label} *</div>
      <input value={list[i][k]} onChange={e=>upd(i,k,e.target.value)} onBlur={()=>setTouched(t=>({...t,[list[i]._k+k]:true}))} placeholder={ph} style={inp(err)}/>
      {err && <div style={{fontSize:12, color:"#E0474C", fontWeight:600, marginTop:6}}>Required</div>}</div>); };
  const dateF = (i,k,label) => (
    <div><div style={lab}>{label}</div>
      <div style={{position:"relative"}}>
        <input value={list[i][k]} onChange={e=>upd(i,k,e.target.value)} placeholder="Mon YYYY" style={{...inp(false), paddingRight:36}}/>
        {list[i][k] && <button onClick={()=>upd(i,k,"")} aria-label={`Clear ${label}`} style={{position:"absolute", right:10, top:"50%", transform:"translateY(-50%)",
          width:18, height:18, borderRadius:"50%", border:"none", background:"#9CA3AF", color:"#fff", fontSize:11, lineHeight:1, cursor:"pointer", display:"grid", placeItems:"center"}}>×</button>}
      </div></div>);
  return (
    <div style={{position:"fixed", inset:0, zIndex:70, display:"grid", placeItems:"center", padding:24}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:"min(900px, 100%)", height:"min(640px, 88vh)", background:"#fff", borderRadius:18,
        display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.18)"}}>
        <div style={{padding:"20px 26px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19}}>Edit Certifications</div>
          <button onClick={onClose} aria-label="Close" style={{border:"none", background:"none", fontSize:22, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{display:"flex", flex:1, minHeight:0}}>
          <div style={{width:220, flexShrink:0, background:"#F8F9FA", borderRight:`1px solid ${dT.hairline}`, display:"flex", flexDirection:"column"}}>
            <div style={{flex:1, overflow:"auto", padding:"12px 10px", display:"flex", flexDirection:"column", gap:2}}>
              {list.map((x,i)=>(
                <div key={x._k} draggable onDragStart={()=>setDragIdx(i)} onDragOver={e=>e.preventDefault()} onDrop={()=>drop(i)} onDragEnd={()=>setDragIdx(null)}
                  onClick={()=>scrollTo(x._k)} style={{display:"flex", alignItems:"center", gap:9, padding:"10px", borderRadius:8, cursor:"pointer", opacity: dragIdx===i ? .45 : 1}}
                  onMouseEnter={e=>e.currentTarget.style.background="#EEF0F2"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <svg width="12" height="16" viewBox="0 0 12 16" fill={dT.muted} style={{flexShrink:0, cursor:"grab"}}><circle cx="3" cy="3" r="1.4"/><circle cx="9" cy="3" r="1.4"/><circle cx="3" cy="8" r="1.4"/><circle cx="9" cy="8" r="1.4"/><circle cx="3" cy="13" r="1.4"/><circle cx="9" cy="13" r="1.4"/></svg>
                  <span style={{fontSize:13.5, fontWeight:500, color: x.name ? dT.ink : dT.muted, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{x.name || `Certification ${i+1}`}</span>
                </div>
              ))}
            </div>
            <button onClick={add} style={{display:"flex", alignItems:"center", gap:8, padding:"16px 18px", border:"none", borderTop:`1px solid ${dT.hairline}`,
              background:"none", cursor:"pointer", fontFamily:dFB, fontSize:14, fontWeight:600, color:dT.ink}}>+ Add Certification</button>
          </div>
          <div ref={bodyRef} style={{flex:1, minWidth:0, overflow:"auto", padding:"20px 24px", display:"flex", flexDirection:"column", gap:18, position:"relative"}}>
            {list.map((x,i)=>(
              <div key={x._k} ref={el=>refs.current[x._k]=el} style={{border:`1px solid ${dT.hairline}`, borderRadius:14, padding:"18px 20px", display:"flex", flexDirection:"column", gap:16}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <div style={{fontSize:14.5, fontWeight:600, color:dT.ink}}>Certification {i+1}</div>
                  <button onClick={()=>setList(l=>l.filter((_,j)=>j!==i))} aria-label="Delete certification" title="Delete certification"
                    style={{border:"none", background:"none", cursor:"pointer", color:"#E0474C", display:"grid", placeItems:"center", padding:4}}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z"/></svg>
                  </button>
                </div>
                {req(i,"name","Certification Name","e.g. AWS Solutions Architect")}
                {req(i,"org","Issuing Organization","e.g. Amazon Web Services")}
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>{dateF(i,"issue","Issue Date")}{dateF(i,"expiry","Expiration Date")}</div>
                <div><div style={lab}>Credential ID</div><input value={x.credId} onChange={e=>upd(i,"credId",e.target.value)} placeholder="Optional" style={inp(false)}/></div>
                <div><div style={lab}>Credential URL</div><input value={x.url} onChange={e=>upd(i,"url",e.target.value)} placeholder="Optional" style={inp(false)}/></div>
              </div>
            ))}
            {list.length===0 && <div style={{fontSize:13.5, color:dT.muted, fontWeight:500, textAlign:"center", padding:"40px 0"}}>No certifications. Add one from the left.</div>}
          </div>
        </div>
        <div style={{padding:"14px 26px", display:"flex", alignItems:"center", justifyContent:"flex-end", gap:12, background:"#F8F9FA", borderTop:`1px solid ${dT.hairline}`}}>
          {!valid && <span style={{fontSize:12.5, color:"#E0474C", fontWeight:600}}>Fill required fields</span>}
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:10, background:"#fff", color:dT.ink, border:`1.5px solid ${dT.hairline}`,
            fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button disabled={!canSave} onClick={()=>onSave(strip(list).map(r=>({...r, name:r.name.trim(), org:r.org.trim()})))}
            style={{padding:"10px 20px", borderRadius:10, border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700,
            cursor: canSave ? "pointer" : "not-allowed", background: canSave ? dT.ink : "#E5E7EB", color: canSave ? "#fff" : "#9CA3AF"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function EditSkillsModal({ cats, onSave, onClose }) {
  const [list, setList] = React.useState(cats.map((g,i)=>({...g, items:[...g.items], _k:i})));
  const [dragIdx, setDragIdx] = React.useState(null);
  const [touched, setTouched] = React.useState({});
  const bodyRef = React.useRef(null);
  const refs = React.useRef({});
  React.useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, []);
  const dirty = JSON.stringify(list.map(({_k,...r})=>r)) !== JSON.stringify(cats);
  const valid = list.every(g=>g.cat.trim());
  const canSave = dirty && valid;
  const upd = (i,patch)=> setList(l=>l.map((g,x)=>x===i?{...g,...patch}:g));
  const scrollTo = k => { const el = refs.current[k], box = bodyRef.current; if(el && box) box.scrollTo({top: el.offsetTop - 20, behavior:"smooth"}); };
  const add = ()=>{ const k = Date.now(); setList(l=>[...l, {cat:"", items:[], _k:k}]); setTimeout(()=>scrollTo(k), 30); };
  const drop = to => { if(dragIdx===null || dragIdx===to) return; setList(l=>{ const n=[...l]; const [m]=n.splice(dragIdx,1); n.splice(to,0,m); return n; }); setDragIdx(null); };
  const inp = err => ({width:"100%", padding:"12px 14px", borderRadius:10, border:`1.5px solid ${err ? "#E0474C" : dT.hairline}`,
    fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box"});
  const lab = {fontSize:13.5, fontWeight:600, color:dT.ink, marginBottom:8};
  return (
    <div style={{position:"fixed", inset:0, zIndex:70, display:"grid", placeItems:"center", padding:24}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:"min(900px, 100%)", height:"min(640px, 88vh)", background:"#fff", borderRadius:18,
        display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.18)"}}>
        <div style={{padding:"20px 26px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19}}>Edit Skills</div>
          <button onClick={onClose} aria-label="Close" style={{border:"none", background:"none", fontSize:22, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{display:"flex", flex:1, minHeight:0}}>
          <div style={{width:220, flexShrink:0, background:"#F8F9FA", borderRight:`1px solid ${dT.hairline}`, display:"flex", flexDirection:"column"}}>
            <div style={{flex:1, overflow:"auto", padding:"12px 10px", display:"flex", flexDirection:"column", gap:2}}>
              {list.map((g,i)=>(
                <div key={g._k} draggable onDragStart={()=>setDragIdx(i)} onDragOver={e=>e.preventDefault()} onDrop={()=>drop(i)} onDragEnd={()=>setDragIdx(null)}
                  onClick={()=>scrollTo(g._k)}
                  style={{display:"flex", alignItems:"center", gap:9, padding:"10px 10px", borderRadius:8, cursor:"pointer",
                    opacity: dragIdx===i ? .45 : 1, background: dragIdx!==null && dragIdx!==i ? "transparent" : undefined}}
                  onMouseEnter={e=>e.currentTarget.style.background="#EEF0F2"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                  <svg width="12" height="16" viewBox="0 0 12 16" fill={dT.muted} style={{flexShrink:0, cursor:"grab"}}><circle cx="3" cy="3" r="1.4"/><circle cx="9" cy="3" r="1.4"/><circle cx="3" cy="8" r="1.4"/><circle cx="9" cy="8" r="1.4"/><circle cx="3" cy="13" r="1.4"/><circle cx="9" cy="13" r="1.4"/></svg>
                  <span style={{fontSize:13.5, fontWeight:500, color: g.cat ? dT.ink : dT.muted, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{g.cat || `Category ${i+1}`}</span>
                </div>
              ))}
            </div>
            <button onClick={add} style={{display:"flex", alignItems:"center", gap:8, padding:"16px 18px", border:"none", borderTop:`1px solid ${dT.hairline}`,
              background:"none", cursor:"pointer", fontFamily:dFB, fontSize:14, fontWeight:600, color:dT.ink}}>+ Add Category</button>
          </div>
          <div ref={bodyRef} style={{flex:1, minWidth:0, overflow:"auto", padding:"20px 24px", display:"flex", flexDirection:"column", gap:18, position:"relative"}}>
            {list.map((g,i)=>{
              const err = touched[g._k] && !g.cat.trim();
              return (
                <div key={g._k} ref={el=>refs.current[g._k]=el} style={{border:`1px solid ${dT.hairline}`, borderRadius:14, padding:"18px 20px", display:"flex", flexDirection:"column", gap:16}}>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{fontSize:14.5, fontWeight:600, color:dT.ink}}>Category {i+1}</div>
                    <button onClick={()=>setList(l=>l.filter((_,x)=>x!==i))} aria-label="Delete category" title="Delete category"
                      style={{border:"none", background:"none", cursor:"pointer", color:"#E0474C", display:"grid", placeItems:"center", padding:4}}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z"/></svg>
                    </button>
                  </div>
                  <div>
                    <div style={lab}>Category Name *</div>
                    <input value={g.cat} onChange={e=>upd(i,{cat:e.target.value})} onBlur={()=>setTouched(t=>({...t,[g._k]:true}))}
                      placeholder="e.g., Programming Languages" style={inp(err)}/>
                    {err && <div style={{fontSize:12, color:"#E0474C", fontWeight:600, marginTop:6}}>Required</div>}
                  </div>
                  <div>
                    <div style={lab}>Skills</div>
                    <SkillTagField values={g.items} onChange={v=>upd(i,{items:v})}/>
                  </div>
                </div>
              );
            })}
            {list.length===0 && (
              <div style={{fontSize:13.5, color:dT.muted, fontWeight:500, textAlign:"center", padding:"40px 0"}}>No categories yet. Add one to group your skills.</div>
            )}
          </div>
        </div>
        <div style={{padding:"14px 26px", display:"flex", alignItems:"center", justifyContent:"flex-end", gap:12, background:"#F8F9FA", borderTop:`1px solid ${dT.hairline}`}}>
          {!valid && <span style={{fontSize:12.5, color:"#E0474C", fontWeight:600}}>Fill required fields</span>}
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:10, background:"#fff", color:dT.ink, border:`1.5px solid ${dT.hairline}`,
            fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button disabled={!canSave} onClick={()=>onSave(list.map(({_k,...r})=>({...r, cat:r.cat.trim()})))}
            style={{padding:"10px 20px", borderRadius:10, border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700,
            cursor: canSave ? "pointer" : "not-allowed", background: canSave ? dT.ink : "#E5E7EB", color: canSave ? "#fff" : "#9CA3AF"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function CustomSectionModal({ initial, onSave, onClose }) {
  const [title, setTitle] = React.useState(initial ? initial.title : "");
  const [format, setFormat] = React.useState(initial ? initial.format : "structured");
  const [items, setItems] = React.useState(initial ? initial.items : []);
  const [sel, setSel] = React.useState(initial && initial.items.length ? 0 : -1);
  const [touched, setTouched] = React.useState(false);
  React.useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, []);
  const addItem = ()=>{ setItems(l=>[...l, {title:"", subtitle:"", dates:"", bullets:""}]); setSel(items.length); };
  const upd = (k,v)=> setItems(l=>l.map((it,i)=>i===sel?{...it,[k]:v}:it));
  const removeItem = i => { setItems(l=>l.filter((_,x)=>x!==i)); setSel(-1); };
  const valid = title.trim().length>0;
  const inp = err => ({width:"100%", padding:"11px 14px", borderRadius:10, border:`1.5px solid ${err ? "#E0474C" : dT.hairline}`,
    fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", boxSizing:"border-box"});
  const lab = {fontSize:13.5, fontWeight:600, color:dT.ink, marginBottom:8};
  const it = sel>=0 ? items[sel] : null;
  return (
    <div style={{position:"fixed", inset:0, zIndex:70, display:"grid", placeItems:"center", padding:24}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:"min(860px, 100%)", maxHeight:"88vh", background:"#fff", borderRadius:18,
        display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,.18)"}}>
        <div style={{padding:"20px 26px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:`1px solid ${dT.hairline}`}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19}}>{initial ? "Edit Custom Section" : "New Custom Section"}</div>
          <button onClick={onClose} aria-label="Close" style={{border:"none", background:"none", fontSize:22, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div style={{display:"flex", flex:1, minHeight:0}}>
          <div style={{width:210, flexShrink:0, background:"#F8F9FA", borderRight:`1px solid ${dT.hairline}`, display:"flex", flexDirection:"column"}}>
            <div style={{flex:1, overflow:"auto", padding:10, display:"flex", flexDirection:"column", gap:4}}>
              {items.map((x,i)=>(
                <button key={i} onClick={()=>setSel(i)} style={{textAlign:"left", padding:"9px 11px", borderRadius:8, border:"none", cursor:"pointer",
                  background: sel===i ? "#fff" : "transparent", fontFamily:dFB, fontSize:13, fontWeight:600, color: x.title ? dT.ink : dT.muted,
                  boxShadow: sel===i ? "0 1px 2px rgba(0,0,0,.06)" : "none", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
                  {x.title || `Item ${i+1}`}
                </button>
              ))}
            </div>
            <button onClick={addItem} style={{display:"flex", alignItems:"center", gap:8, padding:"14px 16px", border:"none", borderTop:`1px solid ${dT.hairline}`,
              background:"none", cursor:"pointer", fontFamily:dFB, fontSize:13.5, fontWeight:600, color:dT.ink}}>+ Add Item</button>
          </div>
          <div style={{flex:1, minWidth:0, overflow:"auto", padding:"22px 26px", display:"flex", flexDirection:"column", gap:18}}>
            <div>
              <div style={lab}>Section Title *</div>
              <input value={title} onChange={e=>setTitle(e.target.value)} onBlur={()=>setTouched(true)} placeholder="e.g., Volunteer Experience, Languages" style={inp(touched && !valid)}/>
              {touched && !valid && <div style={{fontSize:12, color:"#E0474C", fontWeight:600, marginTop:6}}>Required</div>}
            </div>
            <div>
              <div style={lab}>Format</div>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
                {[["structured","Structured","Title, subtitle, dates, bullets"],["bullets","Bullet List","Simple list of items"]].map(([k,t,d])=>(
                  <button key={k} onClick={()=>setFormat(k)} style={{textAlign:"left", padding:"12px 14px", borderRadius:10, cursor:"pointer", fontFamily:dFB,
                    border:`1.5px solid ${format===k ? "#1FA37A" : dT.hairline}`, background: format===k ? "#ECFBF4" : "#fff"}}>
                    <div style={{fontSize:13.5, fontWeight:700, color: format===k ? "#11684D" : dT.ink}}>{t}</div>
                    <div style={{fontSize:12, color:dT.muted, fontWeight:500, marginTop:2}}>{d}</div>
                  </button>
                ))}
              </div>
            </div>
            <div style={{borderTop:`1px solid ${dT.hairline}`, paddingTop:16}}>
              <div style={{...lab, marginBottom:12}}>Items</div>
              {it ? (
                <div style={{display:"flex", flexDirection:"column", gap:12, border:`1px solid ${dT.hairline}`, borderRadius:12, padding:16, marginBottom:12}}>
                  <input value={it.title} onChange={e=>upd("title", e.target.value)} placeholder={format==="bullets" ? "List item" : "Title"} style={inp(false)}/>
                  {format==="structured" && (
                    <React.Fragment>
                      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
                        <input value={it.subtitle} onChange={e=>upd("subtitle", e.target.value)} placeholder="Subtitle" style={inp(false)}/>
                        <input value={it.dates} onChange={e=>upd("dates", e.target.value)} placeholder="Dates" style={inp(false)}/>
                      </div>
                      <textarea value={it.bullets} onChange={e=>upd("bullets", e.target.value)} rows={3} placeholder="Bullets, one per line" style={{...inp(false), resize:"vertical"}}/>
                    </React.Fragment>
                  )}
                  <button onClick={()=>removeItem(sel)} className="bd-textlink" style={{alignSelf:"flex-start", fontSize:12.5, fontWeight:700, color:"#C1443B", background:"none", border:"none", cursor:"pointer"}}>Remove item</button>
                </div>
              ) : null}
              <button onClick={addItem} style={{width:"100%", padding:"14px 0", borderRadius:12, border:`1.5px dashed ${dT.hairline}`, background:"transparent",
                cursor:"pointer", fontFamily:dFB, fontSize:14, fontWeight:600, color:dT.muted}}>+ Add Item</button>
            </div>
          </div>
        </div>
        <div style={{padding:"14px 26px", display:"flex", alignItems:"center", justifyContent:"flex-end", gap:12, background:"#F8F9FA", borderTop:`1px solid ${dT.hairline}`}}>
          {!valid && <span style={{fontSize:12.5, color:"#E0474C", fontWeight:600}}>Fill required fields</span>}
          <button onClick={onClose} style={{padding:"10px 18px", borderRadius:10, background:"#fff", color:dT.ink, border:`1.5px solid ${dT.hairline}`,
            fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
          <button disabled={!valid} onClick={()=>onSave({title:title.trim(), format, items: items.filter(x=>x.title.trim())})}
            style={{padding:"10px 20px", borderRadius:10, border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700,
            cursor: valid ? "pointer" : "not-allowed", background: valid ? dT.ink : "#E5E7EB", color: valid ? "#fff" : "#9CA3AF"}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function ProfileToolbar({ profiles, setProfiles, activeId, setActiveId, defaultId, setDefaultId, tab, setTab }) {
  const [open, setOpen] = React.useState(false);
  const [renaming, setRenaming] = React.useState(false);
  const [creating, setCreating] = React.useState(false);
  const active = profiles.find(p=>p.id===activeId) || profiles[0];
  const [draft, setDraft] = React.useState(active.name);
  const box = React.useRef(null);
  React.useEffect(()=>{ setDraft(active.name); }, [activeId]);
  React.useEffect(()=>{
    const h = e=>{ if(box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h); return ()=>document.removeEventListener("mousedown", h);
  }, []);
  const commit = ()=>{ const n = draft.trim() || active.name; setProfiles(l=>l.map(p=>p.id===activeId?{...p,name:n}:p)); setDraft(n); setRenaming(false); };
  const addProfile = ()=> setCreating(true);
  const createProfile = ({name, source, copyFrom, file})=>{ const id = Date.now();
    setProfiles(l=>[...l, {id, name, source, copyFrom, file}]); setActiveId(id); setCreating(false); };
  const canDelete = profiles.length>1;
  const del = ()=>{ if(!canDelete) return; const rest = profiles.filter(p=>p.id!==activeId); setProfiles(rest);
    if(defaultId===activeId) setDefaultId(rest[0].id); setActiveId(rest[0].id); };
  const isDefault = defaultId===activeId;
  const iconBtn = (enabled) => ({width:34, height:34, borderRadius:9, border:"none", background:"transparent", display:"grid", placeItems:"center",
    cursor: enabled ? "pointer" : "not-allowed", flexShrink:0});
  const tabBtn = k => ({padding:"8px 14px", borderRadius:9, border:"none", cursor:"pointer", fontFamily:dFB, fontSize:13.5, fontWeight:600,
    background: tab===k ? "#E6F2EA" : "transparent", color: tab===k ? "#17362C" : dT.muted});
  return (
    <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", paddingBottom:16, marginBottom:22, borderBottom:`1px solid ${dT.hairline}`}}>
      <div ref={box} style={{position:"relative", width:260, maxWidth:"100%"}}>
        <div style={{display:"flex", alignItems:"center", gap:6, padding:"0 8px 0 14px", height:40, borderRadius:10, border:`1.5px solid ${dT.hairline}`, background:"#fff"}}>
          {renaming ? (
            <input autoFocus value={draft} onChange={e=>setDraft(e.target.value)} onBlur={commit}
              onKeyDown={e=>{ if(e.key==="Enter") commit(); if(e.key==="Escape"){ setDraft(active.name); setRenaming(false); } }}
              style={{flex:1, minWidth:0, border:"none", outline:"none", fontFamily:dFB, fontSize:14, fontWeight:500, color:dT.ink, background:"transparent"}}/>
          ) : (
            <button onClick={()=>setOpen(o=>!o)} style={{flex:1, minWidth:0, textAlign:"left", border:"none", background:"none", cursor:"pointer",
              fontFamily:dFB, fontSize:14, fontWeight:500, color:dT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", padding:0, height:"100%"}}>{active.name}</button>
          )}
          <button onClick={()=>setRenaming(true)} aria-label="Rename profile" title="Rename profile" style={{...iconBtn(true), width:28, height:28}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={dT.ink}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          </button>
          <button onClick={()=>setOpen(o=>!o)} aria-label="Switch profile" style={{...iconBtn(true), width:24, height:28}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
        {open && (
          <div style={{position:"absolute", top:"calc(100% + 6px)", left:0, right:0, background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:10,
            boxShadow:"0 10px 28px rgba(2,47,54,.12)", zIndex:20, padding:5}}>
            {profiles.map(p=>(
              <button key={p.id} onClick={()=>{ setActiveId(p.id); setOpen(false); }} style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                gap:8, padding:"9px 10px", borderRadius:7, border:"none", cursor:"pointer", fontFamily:dFB, fontSize:13.5, fontWeight:p.id===activeId?700:500,
                color:dT.ink, background: p.id===activeId ? "#F1F3F4" : "transparent", textAlign:"left"}}>
                <span style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{p.name}</span>
                {p.id===defaultId && <span style={{fontSize:11, fontWeight:700, color:"#8A6D00"}}>★ Default</span>}
              </button>
            ))}
          </div>
        )}
      </div>
      <button onClick={()=>setDefaultId(activeId)} aria-label={isDefault ? "Default profile" : "Set as default"} title={isDefault ? "Default profile" : "Set as default"} style={iconBtn(true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill={isDefault ? "#E6B422" : "#C9CED1"}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>
      </button>
      <button onClick={del} disabled={!canDelete} aria-label="Delete profile" title={canDelete ? "Delete profile" : "You need at least one profile"} style={iconBtn(canDelete)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill={canDelete ? "#E0474C" : "#C9CED1"}><path d="M9 3h6l1 2h4v2H4V5h4l1-2zm-3 6h12l-1 12H7L6 9z"/></svg>
      </button>
      <button onClick={addProfile} style={{display:"flex", alignItems:"center", gap:7, padding:"8px 10px", border:"none", background:"none", cursor:"pointer",
        fontFamily:dFB, fontSize:14, fontWeight:600, color:"#17362C", whiteSpace:"nowrap"}}>
        <span style={{fontSize:17, lineHeight:1}}>+</span> Add Profile
      </button>
      <div style={{display:"flex", gap:4, marginLeft:6}}>
        <button onClick={()=>setTab("resume")} style={tabBtn("resume")}>Resume</button>
        <button onClick={()=>setTab("details")} style={tabBtn("details")}>Profile Details</button>
      </div>
      {creating && <CreateProfileModal profiles={profiles} defaultId={defaultId} onClose={()=>setCreating(false)} onCreate={createProfile}/>}
    </div>
  );
}

function CreateProfileModal({ profiles, defaultId, onClose, onCreate }) {
  const [name, setName] = React.useState("");
  const [source, setSource] = React.useState("duplicate");
  const [copyFrom, setCopyFrom] = React.useState(defaultId);
  const [file, setFile] = React.useState(null);
  const [focus, setFocus] = React.useState(false);
  const fileRef = React.useRef(null);
  React.useEffect(()=>{ const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, []);
  const taken = profiles.some(p=>p.name.toLowerCase()===name.trim().toLowerCase());
  const valid = name.trim() && !taken && (source==="duplicate" || file);
  const lab = {fontSize:13.5, fontWeight:600, color:dT.ink, marginBottom:8};
  const opt = (k, icon, t, d) => (
    <button onClick={()=>setSource(k)} style={{display:"flex", alignItems:"flex-start", gap:12, textAlign:"left", padding:"13px 15px", borderRadius:12, cursor:"pointer",
      fontFamily:dFB, border:`1.5px solid ${source===k ? dT.ink : dT.hairline}`, background: source===k ? "#EEF7F6" : "#fff", width:"100%"}}>
      <span style={{color: source===k ? dT.ink : dT.muted, flexShrink:0, marginTop:1}}>{icon}</span>
      <span>
        <span style={{display:"block", fontSize:14, fontWeight:700, color:dT.ink}}>{t}</span>
        <span style={{display:"block", fontSize:12.5, color:dT.muted, fontWeight:500, marginTop:2}}>{d}</span>
      </span>
    </button>
  );
  return (
    <div style={{position:"fixed", inset:0, zIndex:80, display:"grid", placeItems:"center", padding:24}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
      <div style={{position:"relative", width:"min(440px, 100%)", background:"#fff", borderRadius:18, padding:"22px 24px 20px",
        boxShadow:"0 20px 60px rgba(0,0,0,.18)", display:"flex", flexDirection:"column", gap:18}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19}}>Create New Profile</div>
          <button onClick={onClose} aria-label="Close" style={{border:"none", background:"none", fontSize:22, color:dT.muted, cursor:"pointer"}}>×</button>
        </div>
        <div>
          <div style={lab}>Profile Name</div>
          <input autoFocus value={name} onChange={e=>setName(e.target.value)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
            onKeyDown={e=>{ if(e.key==="Enter" && valid) onCreate({name:name.trim(), source, copyFrom, file}); }}
            placeholder="e.g. Software Engineer, Data Scientist"
            style={{width:"100%", padding:"11px 14px", borderRadius:10, boxSizing:"border-box", fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none",
            border:`1.5px solid ${taken ? "#E0474C" : focus ? dT.ink : dT.hairline}`, boxShadow: focus && !taken ? "0 0 0 3px rgba(2,47,54,.08)" : "none"}}/>
          {taken && <div style={{fontSize:12, color:"#E0474C", fontWeight:600, marginTop:6}}>A profile with this name already exists</div>}
        </div>
        <div>
          <div style={lab}>Start from</div>
          <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {opt("duplicate",
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M4 16V5a2 2 0 0 1 2-2h11"/></svg>,
              "Duplicate", "Copy all data from an existing profile")}
            {opt("import",
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M12 18v-6"/><path d="m9 15 3-3 3 3"/></svg>,
              "Import from file", "Extract resume data from a PDF or .docx file")}
          </div>
        </div>
        {source==="duplicate" ? (
          <div>
            <div style={lab}>Copy from</div>
            <div style={{position:"relative"}}>
              <select value={copyFrom} onChange={e=>setCopyFrom(Number(e.target.value))} style={{width:"100%", padding:"11px 36px 11px 14px", borderRadius:10,
                border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:14, color:dT.ink, outline:"none", background:"#fff", appearance:"none", cursor:"pointer"}}>
                {profiles.map(p=><option key={p.id} value={p.id}>{p.name}{p.id===defaultId ? " (Default)" : ""}</option>)}
              </select>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={dT.muted} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                style={{position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", pointerEvents:"none"}}><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        ) : (
          <div>
            <div style={lab}>Resume file</div>
            <input ref={fileRef} type="file" accept=".pdf,.docx" style={{display:"none"}} onChange={e=>setFile(e.target.files[0] || null)}/>
            <button onClick={()=>fileRef.current && fileRef.current.click()} style={{width:"100%", padding:"14px", borderRadius:10, cursor:"pointer",
              border:`1.5px dashed ${file ? dT.ink : dT.hairline}`, background: file ? "#EEF7F6" : "#FAFAF9", fontFamily:dFB, fontSize:13.5, fontWeight:600,
              color: file ? dT.ink : dT.muted, textAlign:"center", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
              {file ? file.name : "Choose a PDF or .docx"}
            </button>
          </div>
        )}
        <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center", gap:10, marginTop:2}}>
          <button onClick={onClose} style={{padding:"10px 16px", borderRadius:10, border:"none", background:"none", fontFamily:dFB, fontSize:14,
            fontWeight:600, color:dT.muted, cursor:"pointer"}}>Cancel</button>
          <button disabled={!valid} onClick={()=>onCreate({name:name.trim(), source, copyFrom, file})} style={{padding:"11px 20px", borderRadius:10,
            border:"none", fontFamily:dFB, fontSize:14, fontWeight:700, cursor: valid ? "pointer" : "not-allowed",
            background: valid ? dT.ink : "#C9D6D5", color:"#fff"}}>Create Profile</button>
        </div>
      </div>
    </div>
  );
}

function ResumeTab() {
  return (
    <div style={{border:`1px solid ${dT.hairline}`, borderRadius:18, padding:"22px 24px", background:"#fff", display:"flex", alignItems:"center", gap:16, flexWrap:"wrap"}}>
      <span style={{width:44, height:52, borderRadius:8, background:"#FDECEC", color:"#C1443B", display:"grid", placeItems:"center", fontSize:11, fontWeight:800, flexShrink:0}}>PDF</span>
      <div style={{flex:1, minWidth:180}}>
        <div style={{fontSize:14.5, fontWeight:700}}>Vinodh_Resume_2026.pdf</div>
        <div style={{fontSize:12.5, color:dT.muted, fontWeight:500, marginTop:2}}>Uploaded Sep 12, 2026 · 184 KB · Used for every application in this profile</div>
      </div>
      <button style={{padding:"9px 16px", borderRadius:999, background:"#fff", color:dT.ink, border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer"}}>Preview</button>
      <button style={{padding:"9px 16px", borderRadius:999, background:dT.ink, color:"#fff", border:"none", fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer"}}>Replace résumé</button>
    </div>
  );
}

function ProfileView({ st }) {
  const [editing, setEditing] = React.useState(false);
  const [editSection, setEditSection] = React.useState(null); // education | experience | skills | projects | appinfo | comp | workauth | eeo
  const pct = 85;
  const [personal, setPersonal] = React.useState({
    summary:"Backend-leaning full-stack engineer with 6 years shipping payments and platform infrastructure at seed-to-Series-C startups. Comfortable owning a service end to end, from schema to on-call.",
    first:"Vinodh Kumar", last:"Neelakandan", email:"vkpixelsart@gmail.com", phone: st.phone || "+91 72999 11652",
    dob:"", country:"India", street:"F422, BBCL Midland, Puducherry salai, Semmencherry", city:"Chennai",
    state:"Tamil Nadu", zip:"600119", county:"", linkedin:"https://www.linkedin.com/in/vinodhuiux/", github:"", website:"https://vkpixelsart.in",
  });
  const [education, setEducation] = React.useState([
    { school:"VIT Chennai", degree:"B.Tech · Computer Science", dates:"Jun 2016 – May 2020" },
  ]);
  const [experience, setExperience] = React.useState([
    { role:"Backend Engineer", co:"Groww", dates:"Aug 2022 – Present · 2 yrs 1 mo", bullets:"Owned the payouts service handling 40k+ daily transactions.\nMigrated batch settlement jobs to an event-driven pipeline, cutting latency 60%." },
    { role:"Software Engineer", co:"Cred", dates:"Jul 2020 – Jul 2022 · 2 yrs", bullets:"Built and maintained internal billing APIs used by 4 product teams.\nShipped idempotent retry logic that cut duplicate-charge tickets to near zero." },
    { role:"Backend Intern", co:"Razorpay", dates:"Jan 2020 – Jun 2020 · 6 mos", bullets:"Built a reconciliation script that cut manual finance review time by 30%." },
  ]);
  const [skillCats, setSkillCats] = React.useState([
    { cat:"Programming languages", items:["TypeScript","Go","Python"] },
    { cat:"Frameworks & libraries", items:["Node.js","Express","RESTful APIs"] },
    { cat:"Databases", items:["PostgreSQL","Redis"] },
    { cat:"Tools & platforms", items:["Kafka","AWS","Docker"] },
    { cat:"Soft skills", items:["Ownership","Cross-team communication","Mentoring"] },
    { cat:"Spoken languages", items:["English: Fluent","Tamil: Native"] },
  ]);
  const skillTotal = skillCats.reduce((n,g)=>n+g.items.length,0);
  const skillGroups = skillCats.filter(g=>g.items.length).length;
  const [projects, setProjects] = React.useState([]);
  const [customs, setCustoms] = React.useState([]);
  const [certs, setCerts] = React.useState([{ name:"Star performer", org:"Contus", issue:"Jan 2026", expiry:"Nov 2027", credId:"", url:"vkpixelsart.com" }]);
  const [certOpen, setCertOpen] = React.useState(false);
  const [profiles, setProfiles] = React.useState([{ id:1, name:"Default" }]);
  const [activeId, setActiveId] = React.useState(1);
  const [defaultId, setDefaultId] = React.useState(1);
  const [pTab, setPTab] = React.useState("details");
  const [customOpen, setCustomOpen] = React.useState(null); // null | "new" | index
  const [appInfo, setAppInfo] = React.useState({
    phone: st.phone || "+91 72999 11652", location:"Chennai, Tamil Nadu, India",
    linkedin:"linkedin.com/in/vinodhuiux", portfolio:"vkpixelsart.in",
  });
  const [comp, setComp] = React.useState({ min:"140,000", max:"165,000" });
  const [workAuth, setWorkAuth] = React.useState({
    authorized:"Yes", country:"United States", sponsor:"No", availability:"Immediately", notice:"2 weeks",
  });
  const [eeo, setEeo] = React.useState({ disability:"No", gender:"Male", veteran:"No", lgbtq:"Prefer not to say" });

  return (
    <div>
      <ProfileToolbar profiles={profiles} setProfiles={setProfiles} activeId={activeId} setActiveId={setActiveId}
        defaultId={defaultId} setDefaultId={setDefaultId} tab={pTab} setTab={setPTab}/>
      {pTab==="resume" ? <ResumeTab/> : (<React.Fragment>
      <div style={{display:"flex", alignItems:"center", gap:16, marginBottom:26, border:`1px solid ${dT.hairline}`, borderRadius:18,
        padding:"18px 22px", background:"#fff"}}>
        <div style={{width:52, height:52, borderRadius:13, background:"linear-gradient(145deg, #2A5C4B, #173D31)", color:"#fff", display:"grid",
          placeItems:"center", fontSize:17, fontWeight:700, flexShrink:0, fontFamily:dFD}}>VK</div>
        <div style={{minWidth:0, flex:1}}>
          <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
            <span style={{fontFamily:dFD, fontWeight:700, fontSize:18, color:"#17362C"}}>{personal.first}</span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:11.5, fontWeight:700, color:"#2D7A4F",
              background:"#E6F2EA", borderRadius:999, padding:"4px 11px", whiteSpace:"nowrap"}}>
              <span style={{width:6, height:6, borderRadius:"50%", background:"#2D7A4F"}}/>Open to work</span>
            <button style={{fontSize:11.5, fontWeight:600, color:"#C25A00", background:"#FFF8DD", borderRadius:999,
              padding:"3px 11px", border:"1px solid #F5DC7A", cursor:"pointer", fontFamily:dFB, whiteSpace:"nowrap"}}>{pct}% complete →</button>
          </div>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:500, marginTop:5}}>
            {appInfo.location} · {personal.email} · {appInfo.phone}
          </div>
        </div>
        <button onClick={()=>setEditing(true)} className="bd-textlink" style={{color:"#2D7A4F", cursor:"pointer", fontSize:13.5, fontWeight:600,
          flexShrink:0, background:"none", border:"none", fontFamily:dFB}}>Edit →</button>
      </div>

      <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:4}}>
        <span style={{fontSize:13.5, fontWeight:600, color:dT.ink, whiteSpace:"nowrap"}}>Profile details</span>
        <div style={{flex:1, height:1, background:dT.hairline}}/>
      </div>

      <div style={{display:"flex", flexWrap:"wrap", gap:20, alignItems:"flex-start", marginTop:14}}>
        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:18, padding:"4px 26px", flex:"1.7 1 460px", minWidth:0}}>
          <PSection title="Professional summary" action onEdit={()=>setEditing(true)}>
            <div style={{fontSize:13.5, color:dT.ink, fontWeight:400, lineHeight:1.6}}>{personal.summary}</div>
          </PSection>

          <PSection title="Education" count={`${education.length} entr${education.length===1?"y":"ies"}`} action onEdit={()=>setEditSection("education")}>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {education.map((e,i)=>(
                <div key={i}>
                  <div style={{fontSize:14, fontWeight:700}}>{e.school}</div>
                  <div style={{fontSize:12.5, color:dT.muted, fontWeight:500}}>{e.degree}</div>
                  <div style={{fontSize:11.5, color:dT.muted, fontWeight:500, marginTop:2}}>{e.dates}</div>
                </div>
              ))}
            </div>
          </PSection>

          <PSection title="Experience" count={`${experience.length} role${experience.length===1?"":"s"}`} action onEdit={()=>setEditSection("experience")}>
            <div style={{display:"flex", flexDirection:"column", gap:18}}>
              {experience.map((e,i)=>(
                <div key={i} style={{display:"flex", gap:13, position:"relative"}}>
                  <div style={{display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0}}>
                    <span style={{width:8, height:8, borderRadius:"50%", background: i===0 ? dT.ink : "#C9D3D1", marginTop:5}}/>
                    {i<experience.length-1 && <span style={{width:1.5, flex:1, background:dT.hairline, marginTop:4}}/>}
                  </div>
                  <div style={{minWidth:0, paddingBottom: i<experience.length-1 ? 4 : 0, fontWeight:400}}>
                    <div style={{fontSize:14, fontWeight:700}}>{e.role}</div>
                    <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>{e.co} · {e.dates}</div>
                    <ExperienceBullets text={e.bullets}/>
                  </div>
                </div>
              ))}
            </div>
          </PSection>

          <PSection title="Projects" action onEdit={()=>setEditSection("projects")}>
            {projects.length===0 ? (
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, lineHeight:1.5}}>
                Add side projects, school work, open-source contributions or notable work.
              </div>
            ) : (
              <div style={{display:"flex", flexDirection:"column", gap:12}}>
                {projects.map((p,i)=>(
                  <div key={i}>
                    <div style={{fontSize:14, fontWeight:700}}>{p.name}</div>
                    <div style={{fontSize:12.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.5}}>{p.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </PSection>
          <PSection title="Certifications" count={`${certs.length} cert${certs.length===1?"":"s"}`} action onEdit={()=>setCertOpen(true)} last={customs.length===0}>
            {certs.length===0 ? (
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, lineHeight:1.5}}>Add licenses or certifications employers may ask about.</div>
            ) : (
              <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {certs.map((ct,i)=>(
                  <div key={i} style={{display:"flex", gap:14, alignItems:"flex-start", padding:"14px 16px", borderRadius:14, background:"#FAFAF9", border:`1px solid ${dT.hairline}`}}>
                    <span style={{width:42, height:42, borderRadius:10, background:"#fff", border:`1px solid ${dT.hairline}`, display:"grid", placeItems:"center",
                      fontSize:15, fontWeight:800, color:dT.muted, flexShrink:0}}>{(ct.org||ct.name||"?")[0]}</span>
                    <div style={{minWidth:0}}>
                      <div style={{fontSize:14, fontWeight:700}}>{ct.name}</div>
                      <div style={{fontSize:12.5, color:dT.muted, fontWeight:500}}>{ct.org}</div>
                      <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginTop:3}}>
                        {(ct.issue||ct.expiry) && <span style={{fontSize:11.5, color:dT.muted, fontWeight:500}}>{[ct.issue, ct.expiry].filter(Boolean).join(" – ")}</span>}
                        {ct.url && <a href={/^https?:/.test(ct.url) ? ct.url : "https://"+ct.url} target="_blank" rel="noopener noreferrer"
                          style={{display:"inline-flex", alignItems:"center", gap:4, fontSize:12, fontWeight:600, color:"#1F7A55", textDecoration:"none"}}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>Verify</a>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </PSection>
          {customs.map((cs,ci)=>(
            <PSection key={ci} title={cs.title} count={`${cs.items.length} item${cs.items.length===1?"":"s"}`} action onEdit={()=>setCustomOpen(ci)} last={ci===customs.length-1}>
              <div style={{display:"flex", flexDirection:"column", gap:12}}>
                {cs.items.map((it,ii)=> cs.format==="bullets" ? (
                  <div key={ii} style={{fontSize:12.5, color:"#4B5A5E", fontWeight:400, lineHeight:1.5, display:"flex", gap:6}}><span>•</span>{it.title}</div>
                ) : (
                  <div key={ii}>
                    <div style={{fontSize:14, fontWeight:700}}>{it.title}</div>
                    {(it.subtitle||it.dates) && <div style={{fontSize:12.5, color:dT.muted, fontWeight:500}}>{[it.subtitle,it.dates].filter(Boolean).join(" · ")}</div>}
                    <ExperienceBullets text={it.bullets}/>
                  </div>
                ))}
              </div>
            </PSection>
          ))}
          <div style={{display:"flex", justifyContent:"center", padding:"14px 0 22px", borderTop:`1px solid ${dT.hairline}`}}>
            <button onClick={()=>setCustomOpen("new")} style={{display:"flex", alignItems:"center", gap:12, background:"none", border:"none", cursor:"pointer",
              fontFamily:dFB, fontSize:14, fontWeight:500, color:"#6B7280"}}
              onMouseEnter={e=>e.currentTarget.style.color=dT.ink} onMouseLeave={e=>e.currentTarget.style.color="#6B7280"}>
              <span style={{width:32, height:32, borderRadius:"50%", background:"#F1F3F4", display:"grid", placeItems:"center", fontSize:17}}>+</span>
              Add custom section
            </button>
          </div>
        </div>

        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:18, padding:"4px 26px", flex:"1 1 320px", minWidth:0}}>
          <PSection title="Application defaults" count="What Bloom auto-fills on every application" action onEdit={()=>setEditSection("workauth")}>
            <ALabel>WORK AUTHORIZATION</ALabel>
            <div style={{border:`1px solid ${dT.hairline}`, borderRadius:12, padding:"12px 14px", marginBottom:18}}>
              <div style={{fontSize:14, fontWeight:700, marginBottom:9}}>{workAuth.country}</div>
              <div style={{display:"flex", flexWrap:"wrap", gap:7}}>
                <AChip ok={workAuth.authorized==="Yes"}>Authorized to work</AChip>
                <AChip ok={workAuth.sponsor==="Yes"}>Needs sponsorship</AChip>
              </div>
            </div>
            <ALabel>AVAILABILITY</ALabel>
            <div style={{display:"flex", flexWrap:"wrap", gap:7, marginBottom:18}}>
              <AChip ok>Start {workAuth.availability.toLowerCase()}</AChip>
              <AChip ok>Notice: {workAuth.notice}</AChip>
            </div>
            <ALabel>EXPECTED COMPENSATION</ALabel>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:10, marginBottom:4}}>
              <span style={{fontSize:14, fontWeight:700}}>${comp.min} – ${comp.max} / yr</span>
              <button onClick={()=>setEditSection("comp")} className="bd-textlink" style={{fontSize:12, fontWeight:700, color:dT.muted, background:"none", border:"none", cursor:"pointer"}}>Change</button>
            </div>
            <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginBottom:18}}>Used when an application asks about salary.</div>
            <ALabel>LINKS</ALabel>
            <div style={{display:"flex", flexDirection:"column", gap:6}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:10}}>
                <span style={{fontSize:13, fontWeight:600, color:dT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{appInfo.linkedin}</span>
                <button onClick={()=>setEditSection("appinfo")} className="bd-textlink" style={{fontSize:12, fontWeight:700, color:dT.muted, background:"none", border:"none", cursor:"pointer", flexShrink:0}}>Change</button>
              </div>
              <span style={{fontSize:13, fontWeight:600, color:dT.ink}}>{appInfo.portfolio}</span>
            </div>
          </PSection>

          <PSection title="Skills" count={`${skillTotal} skills across ${skillGroups} categories`} action onEdit={()=>setEditSection("skills")}>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {skillCats.filter(g=>g.items.length).map(g=>(
                <div key={g.cat} style={{display:"grid", gridTemplateColumns:"120px minmax(0,1fr)", gap:12, alignItems:"start"}}>
                  <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".08em", textTransform:"uppercase", lineHeight:1.45, paddingTop:5}}>{g.cat}</div>
                  <div style={{display:"flex", flexWrap:"wrap", gap:7}}>
                    {g.items.map(s=>(
                      <span key={s} style={{fontSize:12.5, fontWeight:600, color:"#1F6B45", background:"#E8F4EC", borderRadius:999, padding:"5px 12px"}}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PSection>

          <PSection title="Equal Employment" count="Optional · never used for matching" action onEdit={()=>setEditSection("eeo")} last>
            <div style={{display:"flex", flexWrap:"wrap", gap:7}}>
              <AChip>Disability: {eeo.disability}</AChip>
              <AChip>Gender: {eeo.gender}</AChip>
              <AChip>Veteran: {eeo.veteran}</AChip>
              <AChip>LGBTQ+: {eeo.lgbtq}</AChip>
            </div>
          </PSection>
        </div>
      </div>

      </React.Fragment>)}
      {certOpen && <EditCertsModal certs={certs} onClose={()=>setCertOpen(false)} onSave={l=>{ setCerts(l); setCertOpen(false); }}/>}
      {customOpen!==null && <CustomSectionModal initial={customOpen==="new" ? null : customs[customOpen]} onClose={()=>setCustomOpen(null)}
        onSave={(sec)=>{ setCustoms(l=> customOpen==="new" ? [...l, sec] : l.map((x,i)=>i===customOpen?sec:x)); setCustomOpen(null); }}/>}
      {editing && <EditPersonalDrawer data={personal} onClose={()=>setEditing(false)}
        onSave={(f)=>{ setPersonal(f); setEditing(false); }}/>}

      {editSection==="education" && <EditListDrawer title="Edit education" items={education}
        blank={{school:"", degree:"", dates:""}}
        fields={[{key:"school",label:"School"},{key:"degree",label:"Degree & field"},{key:"dates",label:"Dates"}]}
        onClose={()=>setEditSection(null)} onSave={(l)=>{ setEducation(l); setEditSection(null); }}/>}

      {editSection==="experience" && <EditListDrawer title="Edit experience" items={experience}
        blank={{role:"", co:"", dates:"", bullets:""}}
        fields={[{key:"role",label:"Role"},{key:"co",label:"Company"},{key:"dates",label:"Dates"}]}
        renderExtra={(it,onChange)=>(
          <div>
            <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:7}}>Highlights</div>
            <textarea value={it.bullets||""} onChange={e=>onChange(e.target.value)} rows={3} placeholder="One per line"
              style={{width:"100%", padding:"11px 13px", borderRadius:9, border:`1.5px solid ${dT.hairline}`,
                fontFamily:dFB, fontSize:13.5, color:dT.ink, outline:"none", boxSizing:"border-box", resize:"vertical"}}/>
          </div>
        )}
        onClose={()=>setEditSection(null)} onSave={(l)=>{ setExperience(l); setEditSection(null); }}/>}

      {editSection==="skills" && <EditSkillsModal cats={skillCats} onClose={()=>setEditSection(null)}
        onSave={(l)=>{ setSkillCats(l); setEditSection(null); }}/>}

      {editSection==="projects" && <EditListDrawer title="Edit projects" items={projects}
        blank={{name:"", desc:""}}
        fields={[{key:"name",label:"Project name"},{key:"desc",label:"Description",placeholder:"What you built and the impact."}]}
        onClose={()=>setEditSection(null)} onSave={(l)=>{ setProjects(l); setEditSection(null); }}/>}

      {editSection==="appinfo" && (
        <DrawerShell title="Edit application information" onClose={()=>setEditSection(null)} onSave={()=>setEditSection(null)}>
          <DField2 label="Phone" value={appInfo.phone} onChange={v=>setAppInfo(p=>({...p, phone:v}))}/>
          <DField2 label="Location" value={appInfo.location} onChange={v=>setAppInfo(p=>({...p, location:v}))}/>
          <DField2 label="LinkedIn" value={appInfo.linkedin} onChange={v=>setAppInfo(p=>({...p, linkedin:v}))}/>
          <DField2 label="Portfolio / website" value={appInfo.portfolio} onChange={v=>setAppInfo(p=>({...p, portfolio:v}))}/>
        </DrawerShell>
      )}

      {editSection==="comp" && (
        <DrawerShell title="Edit compensation" onClose={()=>setEditSection(null)} onSave={()=>setEditSection(null)}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
            <DField2 label="Minimum ($/yr)" value={comp.min} onChange={v=>setComp(p=>({...p, min:v}))}/>
            <DField2 label="Maximum ($/yr)" value={comp.max} onChange={v=>setComp(p=>({...p, max:v}))}/>
          </div>
        </DrawerShell>
      )}

      {editSection==="workauth" && (
        <DrawerShell title="Edit work authorization" onClose={()=>setEditSection(null)} onSave={()=>setEditSection(null)}>
          <DField2 label="Authorized country" value={workAuth.country} onChange={v=>setWorkAuth(p=>({...p, country:v}))}/>
          <DSelect label={`Authorized to work in ${workAuth.country}`} value={workAuth.authorized} options={["Yes","No"]} onChange={v=>setWorkAuth(p=>({...p, authorized:v}))}/>
          <DSelect label="Require sponsorship" value={workAuth.sponsor} options={["Yes","No"]} onChange={v=>setWorkAuth(p=>({...p, sponsor:v}))}/>
          <DSelect label="Available to start" value={workAuth.availability} options={["Immediately","2 weeks","1 month","Flexible"]} onChange={v=>setWorkAuth(p=>({...p, availability:v}))}/>
          <DSelect label="Notice period" value={workAuth.notice} options={["None","2 weeks","1 month","2 months"]} onChange={v=>setWorkAuth(p=>({...p, notice:v}))}/>
        </DrawerShell>
      )}

      {editSection==="eeo" && (
        <DrawerShell title="Edit equal employment info" onClose={()=>setEditSection(null)} onSave={()=>setEditSection(null)}>
          <DSelect label="Do you have a disability?" value={eeo.disability} options={["Yes","No","Prefer not to say"]} onChange={v=>setEeo(p=>({...p, disability:v}))}/>
          <DSelect label="What is your gender?" value={eeo.gender} options={["Male","Female","Non-binary","Prefer not to say"]} onChange={v=>setEeo(p=>({...p, gender:v}))}/>
          <DSelect label="Veteran status" value={eeo.veteran} options={["Yes","No","Prefer not to say"]} onChange={v=>setEeo(p=>({...p, veteran:v}))}/>
          <DSelect label="Do you identify as LGBTQ+?" value={eeo.lgbtq} options={["Yes","No","Prefer not to say"]} onChange={v=>setEeo(p=>({...p, lgbtq:v}))}/>
        </DrawerShell>
      )}
    </div>
  );
}

function ExperienceBullets({ text }) {
  const lines = (text||"").split("\n").filter(Boolean);
  const [expanded, setExpanded] = React.useState(false);
  const shown = expanded ? lines : lines.slice(0,2);
  return (
    <div style={{marginTop:6}}>
      {shown.map((b,i)=>(
        <div key={i} style={{fontSize:12.5, color:"#4B5A5E", fontWeight:400, lineHeight:1.5, display:"flex", gap:6}}>
          <span style={{flexShrink:0}}>•</span>{b}
        </div>
      ))}
      {!expanded && lines.length>2 && (
        <button onClick={()=>setExpanded(true)} className="bd-textlink" style={{fontSize:12, fontWeight:700, color:dT.ink,
          cursor:"pointer", background:"none", border:"none", marginTop:2}}>+{lines.length-2} more</button>
      )}
    </div>
  );
}
function SettingsView({ st, set, onBack, title, initialSub, onSignOut, onGoProfile }) {
  const [sub, setSub] = React.useState(initialSub || "account");
  React.useEffect(()=>{ setSub(initialSub || "account"); }, [initialSub]);
  const [linked, setLinked] = React.useState({ google:true, linkedin:false });
  return (
    <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px", background: title==="Profile" ? "#fff" : undefined}}>

      <div style={{display:"grid", gridTemplateColumns: title==="Profile" ? "1fr" : "200px 1fr", gap:28, alignItems:"start"}}>
        {title!=="Profile" && (
        <div style={{display:"flex", flexDirection:"column", gap:2}}>
          <DSubNav icon={<DIconAccount/>} label="Account" active={sub==="account"} onClick={()=>setSub("account")}/>
          <DSubNav icon={<DIconSparkle/>} label="Plan & billing" active={sub==="billing"} onClick={()=>setSub("billing")}/>
          <DSubNav icon={<DIconGift/>} label="Referrals" active={sub==="refer"} onClick={()=>setSub("refer")}/>
          <DSubNav icon={<DIconInfo/>} label="About & help" active={sub==="about"} onClick={()=>setSub("about")}/>
        </div>
        )}

        {sub==="billing" && title!=="Profile" ? <BillingPanel/> : sub==="about" && title!=="Profile" ? <AboutHelpPanel/> : sub==="refer" && title!=="Profile" ? <ReferralsPanel/> : title==="Profile" ? <ProfileView st={st}/> : (
        <div style={{display:"flex", flexDirection:"column", gap:20, minWidth:0}}>
          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"24px 28px"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:17}}>Sign-in</div>
            <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:3, marginBottom:8}}>How you log in to Bloom.</div>
            <DField label="SIGN-IN EMAIL" value="vinodh@gmail.com"/>
            <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", padding:"14px 0 4px"}}>SIGN-IN METHODS</div>
            {[["google","Google","google.com","vinodh@gmail.com"],["linkedin","LinkedIn","linkedin.com","Also imports your work history"]].map(([k,n,dom,sub],i)=>{
              const on = !!linked[k];
              return (
                <div key={k} style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"12px 0",
                  borderBottom: i===0 ? `1px solid ${dT.hairline}` : "none"}}>
                  <div style={{display:"flex", alignItems:"center", gap:11, minWidth:0}}>
                    <img src={`https://www.google.com/s2/favicons?domain=${dom}&sz=64`} alt="" style={{width:20, height:20, flexShrink:0}}/>
                    <div style={{minWidth:0}}>
                      <div style={{fontSize:14, fontWeight:700, color:dT.ink}}>{n}</div>
                      <div style={{fontSize:12, fontWeight:600, color:dT.muted}}>{on && k==="linkedin" ? "linkedin.com/in/vinodh" : sub}</div>
                    </div>
                  </div>
                  {on ? (
                    <div style={{display:"flex", alignItems:"center", gap:10, flexShrink:0}}>
                      <span style={{fontSize:12, fontWeight:700, color:"#1F6B45", background:"#DFF3E7", borderRadius:999, padding:"4px 10px"}}>Connected</span>
                      {k!=="google" && <button onClick={()=>setLinked(x=>({...x, [k]:false}))} className="bd-textlink" style={{fontSize:12.5, fontWeight:700,
                        color:dT.muted, cursor:"pointer", background:"none", border:"none", padding:0}}>Disconnect</button>}
                    </div>
                  ) : (
                    <button onClick={()=>setLinked(x=>({...x, [k]:true}))} style={{padding:"7px 14px", borderRadius:999, border:`1.5px solid ${dT.hairline}`,
                      background:"#fff", color:dT.ink, fontFamily:dFB, fontSize:12.5, fontWeight:700, cursor:"pointer", flexShrink:0}}>Connect</button>
                  )}
                </div>
              );
            })}
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"12px 14px",
              background:"#F4F8F8", borderRadius:10, marginTop:4}}>
              <span style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Name, phone and address used on applications live in Profile.</span>
              <button onClick={onGoProfile} className="bd-textlink" style={{fontSize:13, fontWeight:700, color:dT.cyanInk, cursor:"pointer", flexShrink:0,
                background:"none", border:"none", padding:0}}>Edit in Profile →</button>
            </div>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"24px 28px"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:17}}>Notifications</div>
            <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:3, marginBottom:14}}>Where Bloom messages you when an application is sent or needs you.</div>
            <div role="radiogroup" aria-label="Message channel" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:9}}>
              {[["whatsapp","WhatsApp","Threaded updates you can reply to."],["imessage","iMessage / SMS","Arrives as a normal text."]].map(([k,t,d])=>{
                const on = (st.channel || "whatsapp") === k;
                return (
                  <button key={k} role="radio" aria-checked={on} onClick={()=>set({channel:k})} style={{display:"flex", alignItems:"flex-start", gap:10,
                    padding:"12px 14px", borderRadius:10, textAlign:"left", cursor:"pointer", fontFamily:dFB,
                    border:`1.5px solid ${on ? dT.ink : dT.hairline}`, background: on ? "#E0FAFA" : "#fff"}}>
                    <span style={{width:16, height:16, borderRadius:"50%", marginTop:2, flexShrink:0, display:"grid", placeItems:"center",
                      border:`1.5px solid ${on ? dT.ink : "#C9CFD1"}`, background: on ? dT.ink : "#fff"}}>
                      {on && <span style={{width:6, height:6, borderRadius:"50%", background:"#fff"}}/>}</span>
                    <span><span style={{display:"block", fontSize:13.5, fontWeight:700, color:dT.ink}}>{t}</span>
                      <span style={{display:"block", fontSize:12, fontWeight:500, color:dT.muted, marginTop:2}}>{d}</span></span>
                  </button>
                );
              })}
            </div>
            <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:12}}>
              Sent to {st.phone ? `${st.dial||"+1"} ${st.phone}` : "the phone number in your Profile"}. Email gets a copy either way.
            </div>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"20px 28px",
            display:"flex", alignItems:"center", justifyContent:"space-between", gap:20}}>
            <div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:17}}>Sign out</div>
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:3}}>Bloom keeps working on your applications while you're signed out.</div>
            </div>
            <button onClick={onSignOut} className="bd-signout" style={{padding:"10px 18px", borderRadius:10, border:"1.5px solid #F0D2CE",
              background:"#fff", color:"#C1443B", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer", display:"flex",
              alignItems:"center", gap:8, flexShrink:0}}>Sign out
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>
            </button>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px",
            display:"flex", alignItems:"center", justifyContent:"space-between", gap:20}}>
            <div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:4}}>Delete account</div>
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Removes your profile and all application history. This can't be undone.</div>
            </div>
            <button style={{padding:"10px 18px", borderRadius:999, background:"#FBE3E1", color:"#B3261E",
              border:"1.5px solid #F3C6C1", fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer", flexShrink:0, whiteSpace:"nowrap"}}>Delete account</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

function MatchDetailPanel({ m, isAuto, paused, onClose, onApply, onSkip }) {
  const [saved, setSaved] = React.useState(false);
  const [more, setMore] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  React.useEffect(()=>{ setMore(false); setSaved(false); }, [m.id]);
  React.useEffect(()=>{ requestAnimationFrame(()=>setShown(true)); const h=e=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",h); return ()=>window.removeEventListener("keydown",h); }, []);
  const level = m.match>=88 ? "Experienced" : m.match>=78 ? "Mid Level" : "Entry Level";
  const years = m.match>=88 ? "5+ years experience" : m.match>=78 ? "3+ years experience" : "2+ years experience";
  const meta = [
    ["pin", m.location], ["cash", m.comp.replace("$","USD ").replace("k","k").concat(" /yr")],
    ["bag", level], ["building", m.setting],
    ["clock", "Full Time"], ["clock", years],
    ["bag", "Software Engineering"],
  ];
  const icon = k => ({
    pin:<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>,
    cash:<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15.9V19h-2v-1.1c-1.5-.3-2.7-1.2-2.8-2.8h1.9c.1.8.7 1.3 1.9 1.3 1.3 0 1.6-.6 1.6-1 0-.6-.3-1-1.9-1.4-1.8-.4-3-1.2-3-2.7 0-1.3 1-2.2 2.3-2.5V7.7h2v1.1c1.4.3 2.2 1.4 2.3 2.6h-1.9c-.1-.8-.5-1.3-1.6-1.3-1 0-1.6.4-1.6 1.1 0 .6.5.9 1.9 1.3 1.4.4 3 1 3 2.8 0 1.3-1 2.3-2.1 2.6z"/>,
    bag:<path d="M9 3h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm0 4h6V5H9v2z"/>,
    building:<path d="M5 3h10v4h4v14H5V3zm2 2v2h2V5H7zm4 0v2h2V5h-2zM7 9v2h2V9H7zm4 0v2h2V9h-2zm4 0v2h2V9h-2zM7 13v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-6 4v4h4v-4H9z"/>,
    clock:<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.2 1.9-.8 1.3L11 13V7h2v5.4z"/>,
  })[k];
  const edu = [["PhD","or"],["Master's","+ 2 yrs"],["Bachelor's","+ 4 yrs"],["Associate's","+ 8 yrs"]];
  const reqs = ["5+ years building backend services in Node.js, Go or Java","Experience with PostgreSQL and event-driven systems (Kafka)","Owned services in production, including on-call","Clear written communication across teams"];
  return (
    <div style={{position:"fixed", inset:0, zIndex:85, display:"flex", justifyContent:"flex-end"}}>
      <div onClick={onClose} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.35)", opacity: shown ? 1 : 0, transition:"opacity .2s"}}/>
      <aside role="dialog" aria-modal="true" aria-label={`${m.role} at ${m.co}`} style={{position:"relative", width:"min(560px, 100%)", height:"100%", background:"#fff",
        display:"flex", flexDirection:"column", boxShadow:"-12px 0 40px rgba(0,0,0,.14)", transform: shown ? "none" : "translateX(24px)", opacity: shown ? 1 : 0,
        transition:"transform .22s ease, opacity .22s ease"}}>
        <div style={{padding:"22px 26px 18px", borderBottom:`1px solid ${dT.hairline}`, display:"flex", alignItems:"flex-start", gap:14}}>
          <CLogo co={m.co} size={40}/>
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:21, lineHeight:1.2, color:dT.ink}}>{m.role}</div>
            <div style={{display:"flex", alignItems:"center", gap:8, marginTop:5, fontSize:14, color:dT.muted, fontWeight:600}}>
              {m.co}
              <a href={`https://www.google.com/search?q=${encodeURIComponent(m.co)}`} target="_blank" rel="noopener noreferrer" aria-label={`${m.co} website`} style={{color:dT.muted, display:"grid"}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
              </a>
              <span>· {m.posted}</span>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" style={{border:"none", background:"none", fontSize:24, color:dT.muted, cursor:"pointer", lineHeight:1, padding:4}}>×</button>
        </div>

        <div style={{flex:1, overflow:"auto", padding:"22px 26px 28px", display:"flex", flexDirection:"column", gap:24}}>
          <div style={{display:"flex", alignItems:"center", gap:14, padding:"14px 16px", borderRadius:14, background:"#EEF7F3"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:24, color:"#1F6B45", lineHeight:1}}>{m.match}%</div>
            <div style={{minWidth:0}}>
              <div style={{fontSize:13, fontWeight:700, color:"#1F6B45"}}>{m.match>=85 ? "Strong fit" : m.match>=75 ? "Good fit" : "Fair fit"}</div>
              <div style={{fontSize:12.5, color:"#2F5A45", fontWeight:500}}>{m.why}</div>
            </div>
          </div>

          <div style={{display:"grid", gridTemplateColumns:"repeat(2, minmax(0,1fr))", gap:"14px 20px"}}>
            {meta.map(([k,v],i)=>(
              <div key={i} style={{display:"flex", alignItems:"center", gap:10, minWidth:0}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#9AA3A6" style={{flexShrink:0}}>{icon(k)}</svg>
                <span style={{fontSize:14, color:dT.ink, fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}} title={v}>{v}</span>
              </div>
            ))}
          </div>

          <div>
            <div style={{fontSize:15, fontWeight:700, color:dT.ink, marginBottom:10}}>Education</div>
            <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
              {edu.map(([d,r])=>(
                <span key={d} style={{fontSize:13, fontWeight:600, color:dT.ink, background:"#F1F3F4", borderRadius:999, padding:"6px 13px"}}>{d} <span style={{color:dT.muted, fontWeight:500}}>({r})</span></span>
              ))}
            </div>
          </div>

          <div>
            <div style={{fontSize:15, fontWeight:700, color:dT.ink, marginBottom:10}}>Key requirements</div>
            <div style={{display:"flex", flexDirection:"column", gap:7}}>
              {reqs.map(r=><div key={r} style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.5, display:"flex", gap:8}}><span style={{color:"#1F6B45"}}>✓</span>{r}</div>)}
            </div>
          </div>

          <div>
            <div style={{fontSize:15, fontWeight:700, color:dT.ink, marginBottom:10}}>Description</div>
            <div style={{fontSize:13.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.65, display:"flex", flexDirection:"column", gap:10,
              maxHeight: more ? "none" : 260, overflow:"hidden", position:"relative"}}>
              <div style={{display:"flex", flexWrap:"wrap", gap:"4px 16px", fontSize:12.5, color:dT.muted, fontWeight:600}}>
                <span>Career category: <b style={{color:dT.ink}}>Information Systems</b></span>
                <span>Location: <b style={{color:dT.ink}}>US - California - Thousand Oaks · Remote</b></span>
              </div>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>About Amgen</div>
              <p style={{margin:0}}>Since 1980, Amgen has pioneered biotech in the fight against serious illness, focusing on Oncology, Inflammation, General Medicine and Rare Disease, and reaching millions of patients each year. The culture is collaborative, innovative and science-based.</p>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>What you will do</div>
              <p style={{margin:0}}>Support, design, develop and maintain software applications and systems (Salesforce, Power BI, AI). Work with the team to implement system functionality, troubleshoot technical issues, and keep applications performant and scalable.</p>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>Basic qualifications</div>
              <p style={{margin:0}}>Any one of:</p>
              <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:5}}>
                <li>Doctorate degree</li>
                <li>Master's degree and 2 years of software engineering experience</li>
                <li>Bachelor's degree and 4 years of software engineering experience</li>
                <li>Associate's degree and 8 years of software engineering experience</li>
                <li>High school diploma / GED and 10 years of software engineering experience</li>
              </ul>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>Preferred qualifications</div>
              <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:5}}>
                <li>Developing, maintaining or improving software and reporting configurations, processes or lifecycle programs</li>
                <li>Supporting technology transfers, new product introductions, site start-ups, platform standardization or process improvements</li>
                <li>Owning technical deliverables, flagging risks early and escalating with recommended solutions</li>
                <li>Collaborating with cross-functional partners and communicating progress clearly</li>
                <li>Spotting incremental improvements in processes, designs, tools and documentation</li>
                <li>Strong project management, technical writing and problem-solving skills</li>
              </ul>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>What you can expect</div>
              <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:5}}>
                <li>Retirement and savings plan with generous company contributions</li>
                <li>Medical, dental and vision coverage, life and disability insurance, flexible spending accounts</li>
                <li>Discretionary annual bonus and stock-based long-term incentives</li>
                <li>Award-winning time off and flexible work models where possible</li>
              </ul>
              <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:4}}>Salary range</div>
              <p style={{margin:0}}><b style={{color:dT.ink}}>USD 112,483 – 152,183</b> per year. Actual salary varies with skills, experience and qualifications.</p>
              <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:12, marginTop:4}}>
                <div style={{padding:"11px 13px", borderRadius:10, background:"#F7F8F8"}}>
                  <div style={{fontSize:11, fontWeight:800, color:dT.muted, letterSpacing:".06em"}}>APPLICATION DEADLINE</div>
                  <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:3}}>Sep 24 · may extend</div>
                </div>
                <div style={{padding:"11px 13px", borderRadius:10, background:"#FDF3DF"}}>
                  <div style={{fontSize:11, fontWeight:800, color:"#8A5A00", letterSpacing:".06em"}}>SPONSORSHIP</div>
                  <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginTop:3}}>Not guaranteed</div>
                </div>
              </div>
              <p style={{margin:0}}><span style={{fontSize:12.5, color:dT.muted}}>Amgen is an Equal Opportunity employer. You may redact age-identifying information (such as dates of birth or graduation) from your materials, and reasonable accommodation is available on request.</span></p>
              {!more && <div style={{position:"absolute", left:0, right:0, bottom:0, height:56, background:"linear-gradient(rgba(255,255,255,0), #fff)"}}/>}
            </div>
            <button onClick={()=>setMore(v=>!v)} className="bd-textlink" style={{marginTop:8, border:"none", background:"none", padding:0, cursor:"pointer",
              fontFamily:dFB, fontSize:13, fontWeight:700, color:dT.ink}}>{more ? "Show less" : "Read full description"}</button>
          </div>
        </div>

        <div style={{padding:"14px 26px", borderTop:`1px solid ${dT.hairline}`, display:"flex", alignItems:"center", gap:12}}>
          <a href={`https://www.google.com/search?q=${encodeURIComponent(m.co+" "+m.role+" job")}`} target="_blank" rel="noopener noreferrer"
            style={{display:"flex", alignItems:"center", gap:7, fontSize:13.5, fontWeight:600, color:dT.ink, textDecoration:"none", flex:1, minWidth:0}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
            View original posting
          </a>
          <button onClick={()=>setSaved(s=>!s)} aria-pressed={saved} aria-label={saved ? "Unsave job" : "Save job"} style={{width:40, height:40, borderRadius:10, border:`1.5px solid ${dT.hairline}`,
            background:"#fff", cursor:"pointer", display:"grid", placeItems:"center", color:dT.ink}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? dT.ink : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.5.87l-4.5-2.58a2 2 0 0 0-2 0l-4.5 2.58A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
          </button>
          <button onClick={onSkip} style={{padding:"10px 16px", borderRadius:999, border:`1.5px solid ${dT.hairline}`, background:"#fff", fontFamily:dFB, fontSize:13.5, fontWeight:700, color:dT.ink, cursor:"pointer"}}>Skip</button>
          {isAuto ? (
            <span style={{fontSize:12.5, fontWeight:700, color:dT.ink, display:"flex", alignItems:"center", gap:6, whiteSpace:"nowrap"}}>
              <span style={{width:6, height:6, borderRadius:"50%", background: paused ? "#F2B84B" : "#22A565"}}/>{paused ? "Queued · paused" : "Queued"}
            </span>
          ) : (
            <button onClick={onApply} style={{padding:"10px 22px", borderRadius:999, border:"none", background:dT.ink, color:"#fff", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Apply</button>
          )}
        </div>
      </aside>
    </div>
  );
}

function ModePill({ mode, onChange, dark, paused }) {
  const [open, setOpen] = React.useState(false);
  const isAuto = mode === "auto";
  const box = React.useRef(null);
  React.useEffect(()=>{
    const h = e=>{ if(box.current && !box.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h); return ()=>document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div ref={box} style={{position:"relative", flexShrink:0}}>
      <button onClick={()=>setOpen(o=>!o)} style={{display:"flex", alignItems:"center", gap:9, padding:"7px 8px 7px 12px", borderRadius:999,
        background: dark ? "rgba(255,255,255,.1)" : "#fff", border: dark ? "1.5px solid rgba(255,255,255,.16)" : `1.5px solid ${dT.hairline}`, cursor:"pointer", fontFamily:dFB}}>
        <span style={{display:"flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:700, color: dark ? "#fff" : dT.ink}}>
          <span style={{width:7, height:7, borderRadius:"50%", background: paused ? "#F2B84B" : "#5AEBEB", flexShrink:0,
            boxShadow: paused ? "0 0 0 3px rgba(242,184,75,.22)" : dark ? "0 0 0 3px rgba(90,235,235,.22)" : "0 0 0 3px rgba(44,182,125,.18)"}}/>
          {paused ? "Agent paused" : "Agent running"}
        </span>
        <span style={{width:1, height:14, background: dark ? "rgba(255,255,255,.2)" : dT.hairline}}/>
        <span style={{fontSize:12.5, fontWeight:700, color: dark ? "#fff" : dT.ink}}>{isAuto ? "Auto Apply" : "Manual apply"}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={dark ? "rgba(255,255,255,.7)" : dT.muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      {open && (
        <div style={{position:"absolute", top:"calc(100% + 8px)", right:0, width:280, background:"#fff", borderRadius:14,
          border:`1px solid ${dT.hairline}`, boxShadow:"0 12px 32px rgba(2,47,54,.14)", zIndex:20, overflow:"hidden"}}>
          {[["review","Manual apply","Bloom prepares applications and waits for you to apply."],
            ["auto","Auto Apply","Bloom automatically applies to jobs that meet your preferences."]].map(([k,label,desc])=>(
            <button key={k} onClick={()=>{onChange(k); setOpen(false);}} style={{width:"100%", textAlign:"left", padding:"13px 16px",
              background: mode===k ? "#FAF9F5" : "#fff", border:"none", borderBottom:`1px solid ${dT.hairline}`, cursor:"pointer",
              display:"flex", alignItems:"flex-start", gap:10}}>
              <span style={{width:16, height:16, borderRadius:"50%", border:`1.5px solid ${mode===k ? dT.ink : dT.hairline}`,
                background: mode===k ? dT.ink : "#fff", flexShrink:0, marginTop:2, display:"grid", placeItems:"center"}}>
                {mode===k && <span style={{width:6, height:6, borderRadius:"50%", background:"#fff"}}/>}
              </span>
              <span>
                <div style={{fontSize:13.5, fontWeight:700, color:dT.ink, marginBottom:2}}>{label}</div>
                <div style={{fontSize:12, color:dT.muted, fontWeight:600, lineHeight:1.4}}>{desc}</div>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FitBar({ label, value }) {
  const pct = value=="Strong"||value=="Match" ? 100 : value=="Good" ? 66 : 33;
  const color = pct===100 ? "#2CB67D" : pct===66 ? "#C9871F" : "#B3261E";
  return (
    <div style={{display:"flex", alignItems:"center", gap:10}}>
      <span style={{fontSize:12.5, fontWeight:600, color:dT.muted, width:92, flexShrink:0}}>{label}</span>
      <div style={{flex:1, height:5, borderRadius:999, background:"#F1F3F4", overflow:"hidden"}}>
        <div style={{height:"100%", width:pct+"%", background:color, borderRadius:999}}/>
      </div>
      <span style={{fontSize:12, fontWeight:700, color:dT.ink, width:52, flexShrink:0, textAlign:"right"}}>{value}</span>
    </div>
  );
}

function JobSidePanel({ job, mode, onClose, onApprove }) {
  const [tab, setTab] = React.useState(job.status==="Needs you" ? "Application" : "Overview");
  React.useEffect(()=>{ setTab(job.status==="Needs you" ? "Application" : "Overview"); }, [job]);
  const needsEyes = job.answers ? job.answers.filter(a=>a.status==="needs") : [];
  const tone = D_TONE[job.statusTone] || D_TONE.grey;
  const fitSignals = [
    ["Role match", job.matchPct>=85 ? "Strong" : job.matchPct>=70 ? "Good" : "Fair"],
    ["Skills match", job.matchPct>=80 ? "Strong" : "Good"],
    ["Experience", "Strong"],
    ["Salary", "Good"],
    ["Location", "Match"],
    ["Work setting", "Match"],
  ];
  return (
    <React.Fragment>
      <div onClick={onClose} style={{position:"fixed", inset:0, background:"rgba(2,47,54,.35)", zIndex:40}}/>
      <div style={{position:"fixed", top:0, right:0, bottom:0, width:520, maxWidth:"92vw", background:"#fff", zIndex:41,
        display:"flex", flexDirection:"column", boxShadow:"-16px 0 40px rgba(2,47,54,.18)"}}>
        <div style={{flexShrink:0, padding:"20px 24px 0"}}>
          <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:10}}>
            <div style={{display:"flex", alignItems:"center", gap:10, minWidth:0}}>
              <CLogo co={job.co} size={30}/>
              <div style={{minWidth:0}}>
                <div style={{fontFamily:dFD, fontWeight:700, fontSize:16, color:dT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{job.role}</div>
                <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>{job.co} · {job.location||""}{job.comp ? " · "+job.comp : ""}</div>
              </div>
            </div>
            <button onClick={onClose} style={{background:"transparent", border:"none", cursor:"pointer", color:dT.muted, flexShrink:0, padding:4}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div style={{display:"flex", gap:18, borderBottom:`1px solid ${dT.hairline}`}}>
            {["Overview","Application","Job Fit"].map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{padding:"0 0 11px", background:"transparent", border:"none",
                borderBottom: tab===t ? `2px solid ${dT.ink}` : "2px solid transparent", fontFamily:dFB, fontSize:13.5,
                fontWeight:700, color: tab===t ? dT.ink : dT.muted, cursor:"pointer"}}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{flex:1, overflow:"auto", padding:"22px 24px 28px"}}>
          {tab==="Overview" && (
            <div style={{display:"flex", flexDirection:"column", gap:20}}>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:14}}>
                <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>} label={job.location||"—"}/>
                <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>} label={job.comp || "Not disclosed"}/>
                <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>} label="Full time"/>
                <MetaRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>} label={job.posted ? "Posted "+job.posted+" ago" : "—"}/>
              </div>
              {job.about && (
                <div>
                  <div style={{fontFamily:dFD, fontWeight:700, fontSize:14.5, color:dT.ink, marginBottom:8}}>Summary</div>
                  <div style={{fontSize:13.5, color:"#4B5A5E", lineHeight:1.6, fontWeight:500}}>{job.about}</div>
                </div>
              )}
              <div style={{background:"#FAF9F5", borderRadius:12, padding:"14px 16px"}}>
                <div style={{fontSize:11, fontWeight:800, color:dT.muted, letterSpacing:".05em", marginBottom:6}}>SIGNAL</div>
                <div style={{fontSize:13, fontWeight:600, color:dT.ink}}>{job.matchPct}% match to your job preferences · {job.status}</div>
              </div>
              {mode==="auto" ? (
                <button onClick={()=>onApprove(job.co)} style={{padding:"12px 0", borderRadius:999, background:dT.ink, color:"#fff",
                  border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Apply now</button>
              ) : (
                <button onClick={()=>setTab("Application")} style={{padding:"12px 0", borderRadius:999, background:dT.ink, color:"#fff",
                  border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Review application</button>
              )}
            </div>
          )}
          {tab==="Application" && (
            <div style={{display:"flex", flexDirection:"column", gap:16}}>
              {job.status==="Needs you" ? (
                <div style={{background:"#FBEFCB", borderRadius:12, padding:"14px 16px"}}>
                  <div style={{fontSize:13.5, fontWeight:700, color:"#8A6D00", marginBottom:4}}>Bloom needs you</div>
                  <div style={{fontSize:12.5, color:"#7A6000", fontWeight:600, lineHeight:1.5}}>
                    {needsEyes.length ? `${needsEyes[0].q} — Bloom doesn't have a confident answer.` : "One or more fields need your input before this can send."}
                  </div>
                </div>
              ) : job.status==="Submitted" ? (
                <div style={{fontSize:12.5, fontWeight:700, color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"8px 14px", display:"inline-block"}}>✓ Submitted — {job.applied}</div>
              ) : job.status==="Failed" ? (
                <div style={{fontSize:12.5, fontWeight:700, color:"#B3261E", background:"#FBE3E1", borderRadius:999, padding:"8px 14px", display:"inline-block"}}>Bloom couldn't finish submitting this</div>
              ) : (
                <div style={{fontSize:12.5, fontWeight:700, color:tone.fg, background:tone.bg, borderRadius:999, padding:"8px 14px", display:"inline-block"}}>{job.status}</div>
              )}
              {job.answers && job.answers.map((a,i)=>(
                <div key={i} style={{paddingBottom:14, borderBottom:`1px solid ${dT.hairline}`}}>
                  <div style={{fontSize:12.5, fontWeight:700, color:dT.ink, marginBottom:5}}>{a.q}</div>
                  <div style={{fontSize:13, color: a.status==="needs" ? "#8A6D00" : "#4B5A5E", fontWeight:500, lineHeight:1.55}}>
                    {a.status==="needs" ? `Suggested: ${a.suggestion}` : a.a}
                  </div>
                </div>
              ))}
              {job.status==="Needs you" && (
                <button onClick={()=>onApprove(job.co)} style={{padding:"13px 0", borderRadius:999, background:dT.ink, color:"#fff",
                  border:"none", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Approve & send</button>
              )}
            </div>
          )}
          {tab==="Job Fit" && (
            <div style={{display:"flex", flexDirection:"column", gap:22}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontFamily:dFD, fontWeight:700, fontSize:40, color:dT.ink, lineHeight:1}}>{job.matchPct}%</div>
                <div style={{fontSize:13, fontWeight:700, color:dT.muted, marginTop:4}}>{job.matchPct>=85?"Strong match":job.matchPct>=70?"Good match":"Fair match"}</div>
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {fitSignals.map(([l,v])=><FitBar key={l} label={l} value={v}/>)}
              </div>
              <div>
                <div style={{fontSize:11, fontWeight:800, color:dT.muted, letterSpacing:".05em", marginBottom:10}}>WHY BLOOM THINKS THIS IS A MATCH</div>
                <div style={{display:"flex", flexDirection:"column", gap:8}}>
                  {["Matches your target role","Matches your preferred remote setup","Salary meets your minimum","Your experience matches key requirements"].map(r=>(
                    <div key={r} style={{display:"flex", gap:8, fontSize:13, color:dT.ink, fontWeight:600}}><span style={{color:"#2CB67D", flexShrink:0}}>✓</span>{r}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

if (typeof document!=="undefined" && !document.getElementById("bd-live-dot-css")) {
  const s = document.createElement("style"); s.id = "bd-live-dot-css";
  s.textContent = "@keyframes bdLivePulse{0%{box-shadow:0 0 0 0 rgba(34,165,101,.45)}70%{box-shadow:0 0 0 6px rgba(34,165,101,0)}100%{box-shadow:0 0 0 0 rgba(34,165,101,0)}}.bd-live-dot{animation:bdLivePulse 1.8s ease-out infinite}@media (prefers-reduced-motion:reduce){.bd-live-dot{animation:none}}";
  document.head.appendChild(s);
}
if(!document.getElementById("bd-ping-css")){ const s=document.createElement("style"); s.id="bd-ping-css";
  s.textContent="@keyframes bdPing{0%{transform:scale(.8);opacity:.45}100%{transform:scale(1.5);opacity:0}}.bd-ping{animation:bdPing 1.8s ease-out infinite}@media (prefers-reduced-motion:reduce){.bd-ping{animation:none}}";
  document.head.appendChild(s); }
function Dashboard({ st, set, onSignOut }) {
  const [agentOn, setAgentOn] = React.useState(true);
  const [view, setView] = React.useState("pipeline"); // pipeline | profile | settings | review
  const [prefTab, setPrefTab] = React.useState("Quick Settings");
  const [browseJob, setBrowseJob] = React.useState(null);
  const [pendingSub, setPendingSub] = React.useState("account");
  const goPlans = () => { setPendingSub("billing"); setView("settings"); };
  const [tab, setTab] = React.useState("All");
  const [jobs, setJobs] = React.useState(D_JOBS);
  const [hasData, setHasData] = React.useState(false);
  const [matches, setMatches] = React.useState(D_MATCHES);
  const [mainTab, setMainTab] = React.useState(D_JOBS.some(j=>j.status==="Needs you") ? "applications" : "matches");
  const [paused, setPaused] = React.useState(false);
  const [recapOpen, setRecapOpen] = React.useState(true);
  const [skipFor, setSkipFor] = React.useState(null);
  const [matchPanel, setMatchPanel] = React.useState(null);
  const [used, setUsed] = React.useState(0);
  const [upgradeOpen, setUpgradeOpen] = React.useState(false);
  const left = Math.max(0, D_FREE_LEFT - used);
  const MF0 = { fit:null, workplace:[], salary:null, posted:null };
  const [mf, setMf] = React.useState(MF0);
  const [mSort, setMSort] = React.useState("Best fit");
  const ageH = p => { const n = parseInt(p)||1; return /h/.test(p) && !/day/.test(p) ? n : n*24; };
  const payMin = s => parseInt((s||"").replace(/[^0-9–-]/g,"").split(/[–-]/)[0])||0;
  const shownMatches = matches.filter(m=>{
    if (mf.fit==="Strong (85%+)" && m.match<85) return false;
    if (mf.fit==="Good (75%+)" && m.match<75) return false;
    if (mf.workplace.length && !mf.workplace.includes(m.setting)) return false;
    if (mf.salary && payMin(m.comp) < parseInt(mf.salary.replace(/[^0-9]/g,""))) return false;
    if (mf.posted==="Last 24 hours" && ageH(m.posted)>24) return false;
    if (mf.posted==="Last 3 days" && ageH(m.posted)>72) return false;
    return true;
  }).sort((a,b)=> mSort==="Newest" ? ageH(a.posted)-ageH(b.posted) : mSort==="Highest salary" ? payMin(b.comp)-payMin(a.comp) : b.match-a.match);
  const mfActive = (mf.fit?1:0) + mf.workplace.length + (mf.salary?1:0) + (mf.posted?1:0);
  const [toast, setToast] = React.useState(null);
  React.useEffect(()=>{ if(!toast) return; const t=setTimeout(()=>setToast(null), 4000); return ()=>clearTimeout(t); }, [toast]);
  function applyMatch(m) {
    if (left<=0) { setUpgradeOpen(true); return; }
    const nowUsed = used + 1;
    setUsed(nowUsed);
    if (nowUsed >= D_FREE_LEFT) setTimeout(()=>setUpgradeOpen(true), 900);
    setMatches(l=>l.filter(x=>x.id!==m.id));
    setJobs(js=>[{ co:m.co, role:m.role, status:"Preparing", statusTone:"blue", resume:"Vinodh_Resume_2026.pdf", applied:"—",
      location:m.location, comp:m.comp, matchPct:m.match, posted:m.posted, about:"", answers:[] }, ...js]);
    setToast({ msg:`Bloom is preparing your ${m.co} application`, undo:()=>{ setUsed(u=>Math.max(0,u-1)); setUpgradeOpen(false); setJobs(js=>js.filter(j=>j.co!==m.co)); setMatches(l=>[m, ...l].sort((a,b)=>b.match-a.match)); } });
  }
  function skipMatch(m, reason) {
    setSkipFor(null);
    setMatches(l=>l.filter(x=>x.id!==m.id));
    setToast({ msg:`Skipped ${m.co} · "${reason}" noted, Bloom will tune future matches`, undo:()=>setMatches(l=>[m, ...l].sort((a,b)=>b.match-a.match)) });
  }
  const [reviewJob, setReviewJob] = React.useState(null);
  const [panelJob, setPanelJob] = React.useState(null);
  const isAuto = st.mode === "auto";
  const needCount = hasData ? jobs.filter(j=>j.status==="Needs you").length : 0;
  const sentToday = hasData ? jobs.filter(j=>j.status==="Submitted").length : 0;

  const counts = {};
  const matchRows = matches.map((m,i)=>({ co:m.co, role:m.role, status:"Matched", statusTone:"teal", matchPct:m.match, applied:m.posted, _match:m, _rank:i }));
  const allRows = [...matchRows, ...jobs];
  D_TABS.forEach(t => counts[t] = t==="All" ? allRows.length : allRows.filter(j=>j.status===t).length);
  const rows0 = tab==="All" ? allRows : allRows.filter(j=>j.status===tab);
  const pri = s => s==="Needs you" ? 0 : s==="Matched" ? 1 : 2;
  const rows = tab==="All" ? [...rows0].sort((a,b)=>(a._match?0:1)-(b._match?0:1) || pri(a.status)-pri(b.status)) : rows0;

  function openReview(job) { setReviewJob(job); setView("review"); }
  function approve(co) {
    setJobs(js=>js.map(j=>j.co===co ? {...j, status:"Submitted", statusTone:"green", applied:"Just now",
      answers: j.answers.map(a=>({...a, status: a.status==="needs" ? "drafted" : a.status}))} : j));
    setReviewJob(j=>j ? {...j, status:"Submitted", statusTone:"green"} : j);
  }

  return (
    <div style={{height:"100vh", display:"flex", background:"#FFFCF6", fontFamily:dFB, color:dT.ink, overflow:"hidden"}}>
      {/* Sidebar */}
      <div style={{width:188, flexShrink:0, borderRight:`1px solid ${dT.hairline}`, background:"#fff",
        display:"flex", flexDirection:"column"}}>
        <div style={{height:68, flexShrink:0, display:"flex", alignItems:"center", borderBottom:`1px solid ${dT.hairline}`, padding:"0 16px"}}>
          <img src="assets/bloom-logo.svg" alt="bloom" style={{height:20, width:"auto", display:"block"}}/>
        </div>
        <div style={{paddingTop:16, paddingLeft:16, paddingRight:16, display:"flex", flexDirection:"column", flex:1}}>
        <div style={{display:"flex", flexDirection:"column", gap:2}}>
          <DNav icon={<DIconPipeline/>} label="Auto Apply" badge={needCount || null} active={view==="pipeline"} onClick={()=>setView("pipeline")}/>
          <DNav icon={<DIconAuto/>} label="Apply settings" active={view==="autoapply"} onClick={()=>setView("autoapply")}/>
          <DNav icon={<DIconProfile/>} label="Profile" active={view==="profile"} onClick={()=>setView("profile")}/>
          <DNav icon={<DIconSettings/>} label="Settings" active={view==="settings"} onClick={()=>{ setPendingSub("account"); setView("settings"); }}/>
        </div>
        <div style={{marginTop:"auto", display:"flex", flexDirection:"column", gap:10, paddingTop:16, paddingBottom:20, borderTop:`1px solid ${dT.hairline}`}}>
          <button style={{width:"100%", padding:"10px 0", borderRadius:999, background:"#fff", color:dT.ink, border:`1px solid ${dT.hairline}`,
            fontFamily:dFB, fontSize:12.5, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center",
            justifyContent:"center", gap:7}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.03 2 11c0 2.4 1.05 4.57 2.77 6.17-.14 1.06-.6 2.16-1.19 3.03a.5.5 0 0 0 .55.77c1.7-.5 3.13-1.28 4-1.86.9.24 1.86.36 2.87.36 5.52 0 10-4.03 10-9S17.52 2 12 2Z"/></svg>
            Talk to us
          </button>
          <div style={{background:"#F4F8F8", border:`1px solid ${dT.hairline}`, borderRadius:14, padding:"14px 14px 12px", display:"flex", flexDirection:"column", gap:10}}>
            <div style={{display:"flex", alignItems:"center", gap:8}}>
              <div style={{width:26, height:26, borderRadius:"50%", background:"#D9D2FF", color:"#3A2E80", display:"grid",
                placeItems:"center", fontSize:11.5, fontWeight:800, flexShrink:0}}>V</div>
              <span style={{fontSize:12.5, fontWeight:700, color:dT.ink, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>Vinodh</span>
            </div>
            <div>
              <div style={{fontSize:11, color:dT.muted, fontWeight:600, marginBottom:5, display:"flex", gap:6,
                justifyContent:"space-between"}}>
                <span>Free applications used</span><span>{used}/{D_FREE_LEFT}</span>
              </div>
              <div style={{height:5, borderRadius:999, background:"#DCE6E7", overflow:"hidden"}}>
                <div style={{height:"100%", width:`${used/D_FREE_LEFT*100}%`, background: used>=D_FREE_LEFT ? "#E0A21B" : "#0BB3B3", borderRadius:999}}/>
              </div>
            </div>
            <button onClick={goPlans} style={{width:"100%", padding:"9px 0", borderRadius:999, background:dT.ink, color:"#fff",
              border:"none", fontFamily:dFB, fontSize:12.5, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center",
              justifyContent:"center", gap:5}}>Upgrade to Pro
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          <div style={{textAlign:"center", fontSize:11, color:dT.muted, fontWeight:600}}>v1.0.0</div>
        </div>
        </div>
      </div>

      {/* Main */}
      <div style={{flex:1, minWidth:0, minHeight:0, display:"flex", flexDirection:"column"}}>
        <div style={{padding:"0 32px", height:68, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:`1px solid ${dT.hairline}`, background:"#fff"}}>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div style={{fontSize:16, fontWeight:800, letterSpacing:"-0.01em"}}>{{pipeline:"Auto Apply", tracker:"Tracker", autoapply:"Apply settings", profile:"Profile", settings:"Settings", review:"Auto Apply"}[view] || "Auto Apply"}</div>
            {(view==="pipeline" || view==="review") && (
              <span style={{display:"inline-flex", alignItems:"center", gap:6, padding:"4px 10px", borderRadius:999, background: paused ? "#FDF3DF" : "#EAF7EF",
                fontSize:11.5, fontWeight:700, color: paused ? "#8A5A00" : "#1F6B45", whiteSpace:"nowrap"}}>
                <span className={paused ? "" : "bd-live-dot"} style={{width:6, height:6, borderRadius:"50%", background: paused ? "#F2B84B" : "#22A565"}}/>
                {paused ? "Paused" : "Applying now"}
              </span>
            )}
          </div>
          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <button onClick={onSignOut} className="bd-textlink" style={{fontSize:13.5, fontWeight:700, color:dT.ink, cursor:"pointer"}}>Sign out</button>
          </div>
        </div>

        {panelJob && <JobSidePanel job={panelJob} mode={st.mode} onClose={()=>setPanelJob(null)} onApprove={approve}/>}
        {view==="review" ? <window.ReviewPanel job={reviewJob} mode={st.mode} onBack={()=>setView("pipeline")} onApprove={approve}/> : view==="browse" ? (
        <React.Fragment>
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px"}}>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:18}}>
            {D_BROWSE.map((m,i)=>(
              <div key={m.id} onClick={()=>setBrowseJob(m)} style={{borderRadius:16, overflow:"hidden", border:`1px solid ${dT.hairline}`, background:"#fff",
                display:"flex", flexDirection:"column", height:"100%", cursor:"pointer"}}>
                <div style={{background: D_BROWSE_BG[i%3], padding:"16px 16px 0", display:"flex", flexDirection:"column", flex:1}}>
                  <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:10}}>
                    <div>
                      <div style={{fontFamily:dFB, fontWeight:500, fontSize:14, color:dT.ink}}>{m.location}</div>
                      <div style={{fontSize:12, color:"#5C7580", fontWeight:500, marginTop:2}}>{m.posted}</div>
                    </div>
                    <div style={{width:52, height:52, borderRadius:"50%", flexShrink:0, position:"relative", display:"flex",
                      alignItems:"center", justifyContent:"center"}}>
                      <svg width="52" height="52" style={{position:"absolute", inset:0, transform:"rotate(-90deg)"}}>
                        <circle cx="26" cy="26" r="22" fill="none" stroke="#fff" strokeWidth="4"/>
                        <circle cx="26" cy="26" r="22" fill="none" stroke={dT.ink} strokeWidth="4" strokeLinecap="round"
                          strokeDasharray={2*Math.PI*22} strokeDashoffset={2*Math.PI*22*(1-m.match/100)}/>
                      </svg>
                      <div style={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center", fontSize:14,
                        fontWeight:800, color:dT.ink, lineHeight:1.1}}><span style={{whiteSpace:"nowrap"}}>{m.match}%</span><span style={{fontSize:9, fontWeight:700, color:"#697284"}}>match</span></div>
                    </div>
                  </div>
                  <div style={{fontFamily:dFB, fontWeight:600, fontSize:17, lineHeight:1.25, color:dT.ink, margin:"12px 0 12px"}}>{m.role}</div>
                  <div style={{display:"flex", gap:6, flexWrap:"wrap", marginBottom:12, flex:1, alignContent:"flex-start"}}>
                    {m.tags.map(t=><span key={t} style={{fontSize:11.5, fontWeight:600, color:dT.ink, background:"rgba(2,47,54,.08)",
                      borderRadius:999, padding:"4px 10px"}}>{t}</span>)}
                  </div>
                  <div style={{display:"flex", borderTop:"1px solid rgba(2,47,54,.1)", margin:"0 -16px"}}>
                    <button style={{flex:1, padding:"9px 0", background:"transparent", border:"none", borderRight:"1px solid rgba(2,47,54,.1)",
                      fontFamily:dFB, fontSize:12.5, fontWeight:700, color:dT.ink, cursor:"pointer", display:"flex", alignItems:"center",
                      justifyContent:"center", gap:6}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
                      Save</button>
                    <button style={{flex:1, padding:"9px 0", background:"transparent", border:"none",
                      fontFamily:dFB, fontSize:12.5, fontWeight:700, color:dT.ink, cursor:"pointer", display:"flex", alignItems:"center",
                      justifyContent:"center", gap:6}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#022F36"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm3 14h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2"/><path d="M19 7h-4l-.001 -4.001z"/></svg>
                      Details</button>
                  </div>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:10, padding:"11px 16px", background:"#fff"}}>
                  <CLogo co={m.co} size={28}/>
                  <span style={{fontSize:14, color:dT.ink, fontWeight:700, flex:1, minWidth:0}}>{m.co}</span>
                  <button style={{padding:"9px 16px", borderRadius:999, background:"#fff", color:dT.ink, border:`1px solid ${dT.hairline}`,
                    fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Pass</button>
                  <button style={{padding:"9px 18px", borderRadius:999, background:dT.ink, color:"#fff", border:"none",
                    fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {browseJob && <JobDetailPanel job={browseJob} onClose={()=>setBrowseJob(null)}/>}
        </React.Fragment>
        ) : view==="autoapply" ? (
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px"}}>
          <window.ApplySettingsPanel st={st} set={set} goProfile={()=>setView("profile")}/>
        </div>
        ) : (view==="settings" || view==="profile") ? <SettingsView onSignOut={onSignOut} onGoProfile={()=>setView("profile")} st={st} set={set} title={view==="profile" ? "Profile" : "Settings"} initialSub={pendingSub} onBack={()=>setView("pipeline")}/> : (
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px", display:"flex", flexDirection:"column", gap:28}}>

          {/* Command header */}
          <div style={{border:`1px solid ${dT.ink}`, borderRadius:16, background:dT.ink, padding:"20px 26px",
            display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexShrink:0, flexWrap:"wrap"}}>
            <div style={{display:"flex", flexDirection:"column", gap:6}}>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:12, letterSpacing:".09em", color:"rgba(255,255,255,.55)"}}>AUTO APPLY</div>
              <div style={{display:"flex", alignItems:"baseline", gap:18, flexWrap:"wrap"}}>
                {!hasData ? (
                  <span style={{fontSize:14.5, fontWeight:700, color:"#fff"}}>Searching for matches…</span>
                ) : <span style={{fontSize:14.5, fontWeight:700, color:"#fff"}}>{jobs.length} in progress</span>}
                {needCount>0 && (
                  <span style={{fontSize:14.5, fontWeight:800, color:"#5AEBEB"}}>{needCount} need your attention</span>
                )}
                {hasData && <span style={{fontSize:13, fontWeight:600, color:"rgba(255,255,255,.55)"}}>{sentToday} submitted</span>}
              </div>
              <div style={{fontSize:12, fontWeight:600, color:"rgba(255,255,255,.55)", display:"flex", alignItems:"center", gap:7}}>
                <span style={{width:6, height:6, borderRadius:"50%", background: paused ? "#F2B84B" : "#5AEBEB"}}/>
                {paused ? "Paused · Bloom won't search or send until you resume" : "Last scan 12 min ago · next in 18 min"}
              </div>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:10}}>
              {needCount>0 && (
                <button onClick={()=>{ setMainTab("applications"); setTab("Needs you"); }} style={{padding:"10px 18px", borderRadius:999, background:"#5AEBEB", color:dT.ink,
                  border:"none", fontFamily:dFB, fontSize:13, fontWeight:800, cursor:"pointer", whiteSpace:"nowrap"}}>Review {needCount} →</button>
              )}
              <button onClick={()=>setPaused(p=>!p)} style={{padding:"10px 16px", borderRadius:999, background:"transparent", color:"#fff",
                border:"1.5px solid rgba(255,255,255,.25)", fontFamily:dFB, fontSize:13, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap",
                display:"flex", alignItems:"center", gap:7}}>
                {paused
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>
                  : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>}
                {paused ? "Resume" : "Pause"}
              </button>
              <ModePill mode={st.mode} onChange={m=>set({mode:m})} dark paused={paused}/>
            </div>
          </div>


          {recapOpen && hasData && (
            <div style={{display:"flex", alignItems:"center", gap:12, padding:"11px 16px", borderRadius:12, background:"#fff",
              border:`1px solid ${dT.hairline}`, flexShrink:0}}>
              <span style={{fontSize:15}}>☀️</span>
              <span style={{fontSize:13, color:dT.ink, fontWeight:600, flex:1, minWidth:0}}>
                Since your last visit: <b>{sentToday} submitted</b>, <b>{matches.length} new matches</b>{needCount>0 ? <span>, <b>{needCount} need your input</b></span> : null}.
              </span>
              <button onClick={()=>setRecapOpen(false)} aria-label="Dismiss" style={{border:"none", background:"none", color:dT.muted, fontSize:18, cursor:"pointer", lineHeight:1}}>×</button>
            </div>
          )}

          {left<=0 && (
            <div style={{display:"flex", alignItems:"center", gap:12, padding:"12px 16px", borderRadius:12, background:"#FDF3DF", flexShrink:0, flexWrap:"wrap"}}>
              <span style={{fontSize:13, fontWeight:600, color:"#6B4A00", flex:"1 1 260px"}}>
                You've used your {D_FREE_LEFT} free applications. {isAuto ? "Bloom has paused applying until you upgrade." : "Upgrade to keep applying."}
              </span>
              <button onClick={goPlans} style={{padding:"8px 16px", borderRadius:999, background:dT.ink, color:"#fff", border:"none", fontFamily:dFB, fontSize:12.5, fontWeight:700, cursor:"pointer"}}>See plans</button>
            </div>
          )}
          {!hasData ? (
            <div style={{flexShrink:0, border:`1px solid ${dT.hairline}`, borderRadius:14, background:"#fff", padding:"56px 28px",
              display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:12}}>
              <div style={{position:"relative", width:52, height:52, display:"grid", placeItems:"center"}}>
                <span className="bd-ping" style={{position:"absolute", inset:0, borderRadius:"50%", background:"#5AEBEB", opacity:.35}}/>
                <span style={{position:"relative", width:40, height:40, borderRadius:"50%", background:dT.ink, display:"grid", placeItems:"center"}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5AEBEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
                </span>
              </div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, color:dT.ink, marginTop:4}}>Hang tight. Bloom is finding jobs for you.</div>
              <div style={{fontSize:13.5, color:dT.muted, fontWeight:600, lineHeight:1.55, maxWidth:440}}>
                We're matching roles to your résumé and preferences now. As applications start going out, they'll show up here and we'll message you on {(st.channel==="imessage" ? "iMessage" : "WhatsApp")}.
              </div>
              <div style={{display:"flex", alignItems:"center", gap:8, fontSize:12.5, fontWeight:700, color:dT.ink, background:"#F1F3F4",
                borderRadius:999, padding:"6px 13px", marginTop:4}}>
                <span style={{width:6, height:6, borderRadius:"50%", background:"#22A565"}}/>Usually takes under an hour
              </div>
              <button onClick={()=>setHasData(true)} style={{marginTop:14, padding:"8px 14px", borderRadius:8, background:"transparent",
                border:`1px dashed ${dT.hairline}`, fontFamily:dFB, fontSize:12, fontWeight:700, color:dT.muted, cursor:"pointer"}}>
                Prototype: view as existing user →
              </button>
            </div>
          ) : (<React.Fragment>
          {/* All applications */}
          <div style={{flexShrink:0, border:`1px solid ${dT.hairline}`, borderRadius:14, background:"#fff", overflow:"hidden"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"18px 20px 14px", flexWrap:"wrap"}}>
              <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
                {D_TABS.map(t=>{
                  const on = tab===t;
                  return (
                    <button key={t} onClick={()=>setTab(t)} style={{display:"flex", alignItems:"center", gap:7,
                      padding:"8px 14px", borderRadius:999, fontFamily:dFB, fontSize:13, fontWeight:700,
                      border:`1.5px solid ${on ? "#B9D3D6" : dT.hairline}`, background: on ? "#E6F0F1" : "#fff",
                      color: dT.ink, cursor:"pointer"}}>
                      {t}
                      <span style={{fontSize:11, fontWeight:800, opacity:.7}}>{counts[t]}</span>
                    </button>
                  );
                })}
              </div>
              <input placeholder="Search company…" style={{width:200, padding:"8px 12px", borderRadius:8,
                border:`1px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13, outline:"none"}}/>
            </div>

            <div>
              <div style={{display:"grid", gridTemplateColumns:"1.3fr 1.4fr 1fr minmax(140px,1fr)", gap:12,
                padding:"11px 20px", background:"#FAFAF8", borderBottom:`1px solid ${dT.hairline}`,
                fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".06em"}}>
                <div>COMPANY</div><div>JOB FIT</div><div>STATUS</div><div>ACTIVITY</div>
              </div>
              {rows.length === 0 ? (
                <div style={{padding:"40px 20px", textAlign:"center", fontSize:13.5, color:dT.muted, fontWeight:600}}>
                  {tab==="Needs you" ? "Nothing needs you right now. Bloom will ping you if an employer asks something new." : "No applications match this filter."}
                </div>
              ) : rows.map((j,idx)=>{
                const tone = D_TONE[j.statusTone];
                const grp = j._match ? "m" : "a";
                const prevGrp = idx>0 ? (rows[idx-1]._match ? "m" : "a") : null;
                const showHead = tab==="All" && grp!==prevGrp;
                const nMatch = rows.filter(r=>r._match).length, nApp = rows.length - nMatch;
                const head = grp==="m"
                  ? [isAuto ? "Up next" : "Best matches for you", nMatch, isAuto ? "Bloom will apply to these automatically. Skip any you don't want." : "Apply to the ones you want. Nothing is sent without you."]
                  : ["Your applications", nApp, isAuto ? "Sent by Bloom. Anything marked Needs you is waiting on one answer." : "What you've sent and where each one stands."];
                const openQ = (j.answers||[]).filter(a=>a.status==="needs").length;
                return (
                  <React.Fragment key={j.co}>
                  {showHead && (
                    <div style={{display:"flex", alignItems:"baseline", gap:10, padding:"16px 20px 10px", borderBottom:`1px solid ${dT.hairline}`, background:"#fff", flexWrap:"wrap"}}>
                      <span style={{fontSize:13.5, fontWeight:800, color:dT.ink}}>{head[0]}</span>
                      <span style={{fontSize:12, fontWeight:700, color:dT.muted}}>{head[1]}</span>
                      <span style={{fontSize:12.5, fontWeight:500, color:dT.muted}}>{head[2]}</span>
                    </div>
                  )}
                  <div onClick={e=>{ if(e.target.closest("button")) return; j._match ? setMatchPanel(j._match) : openReview(j); }} style={{display:"grid", gridTemplateColumns:"1.3fr 1.4fr 1fr minmax(140px,1fr)", gap:12,
                    padding:"14px 20px", borderBottom:`1px solid ${dT.hairline}`, alignItems:"center", fontSize:13, cursor:"pointer"}}>
                    <div style={{display:"flex", alignItems:"center", gap:10, minWidth:0}}>
                      <CLogo co={j.co}/>
                      <div style={{minWidth:0}}>
                        <div style={{fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.co}</div>
                        <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.role}</div>
                      </div>
                    </div>
                    <div style={{fontWeight:700, color: j.matchPct>=85 ? "#1F6B45" : dT.ink}}>{j.matchPct ? j.matchPct+"%" : "—"}<span style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginLeft:6}}>{j.matchPct>=85 ? "Strong" : j.matchPct>=75 ? "Good" : "Fair"}</span></div>
                    <div>
                      <span style={{fontSize:11.5, fontWeight:700, color:tone.fg, background:tone.bg,
                        borderRadius:999, padding:"4px 10px", whiteSpace:"nowrap"}}>{j.status}</span>
                    </div>
                    <div style={{color:dT.muted, fontWeight:600, whiteSpace:"nowrap", overflow:"hidden"}}>{j._match ? (
                      isAuto ? (
                        <span style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:12.5, fontWeight:600, color:dT.ink}}>
                          <span style={{width:6, height:6, borderRadius:"50%", background: paused ? "#F2B84B" : "#22A565"}}/>{paused ? "Queued · paused" : left<=0 ? "Waiting · free limit reached" : j._rank===0 ? "Applying next" : "In queue"}
                          <button title="Bloom won't apply to this job" onClick={()=>skipMatch(j._match, "Removed from queue")} style={{marginLeft:8, padding:"4px 11px", borderRadius:999,
                            border:`1px solid ${dT.hairline}`, background:"#fff", color:dT.ink, cursor:"pointer", fontFamily:dFB, fontSize:11.5, fontWeight:700, whiteSpace:"nowrap"}}>Skip</button></span>
                      ) : (
                        <span style={{display:"inline-flex", gap:6}}>
                          <button onClick={()=>skipMatch(j._match, "Not interested")} style={{padding:"6px 14px", borderRadius:999, background:"#fff", color:dT.ink,
                            border:`1px solid ${dT.hairline}`, fontFamily:dFB, fontSize:12, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Decline</button>
                          <button onClick={()=>applyMatch(j._match)} style={{padding:"6px 16px", borderRadius:999, background:dT.ink, color:"#fff", border:"none",
                            fontFamily:dFB, fontSize:12, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Apply</button>
                        </span>
                      )
                    ) : j.status==="Submitting" ? <LiveTicker steps={D_INFLIGHT_STEPS}/> : j.status==="Preparing" ? "Tailoring résumé…" : j.status==="Needs you" ? (
                      <button onClick={()=>openReview(j)} style={{padding:"6px 14px", borderRadius:999, background:"#fff", color:dT.ink, border:`1px solid ${dT.hairline}`,
                        fontFamily:dFB, fontSize:12, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap"}}>Answer {openQ||1} question{openQ>1?"s":""} →</button>
                    ) : j.applied}</div>
                  </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div style={{display:"flex", alignItems:"center", gap:8, padding:"12px 20px", background:"#FAFAF8"}}>
              <span style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Rows per page</span>
              <select style={{padding:"6px 10px", borderRadius:8, border:`1px solid ${dT.hairline}`, fontFamily:dFB, fontSize:12.5,
                fontWeight:700, color:dT.ink, background:"#fff", outline:"none"}} defaultValue="50">
                <option>25</option><option>50</option><option>100</option>
              </select>
              <span style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Showing 1–{rows.length} of {rows.length}</span>
            </div>
          </div>

          </React.Fragment>)}
          {upgradeOpen && (
            <div style={{position:"fixed", inset:0, zIndex:95, display:"grid", placeItems:"center", padding:24}}>
              <div onClick={()=>setUpgradeOpen(false)} style={{position:"absolute", inset:0, background:"rgba(2,30,36,.45)"}}/>
              <div role="dialog" aria-modal="true" aria-label="Upgrade" style={{position:"relative", width:"min(420px, 100%)", background:"#fff", borderRadius:18,
                padding:"28px 26px 22px", boxShadow:"0 20px 60px rgba(0,0,0,.2)", textAlign:"center"}}>
                <div style={{width:52, height:52, borderRadius:14, background:"#EEF7F3", display:"grid", placeItems:"center", margin:"0 auto 14px", fontSize:24}}>🎉</div>
                <div style={{fontFamily:dFD, fontWeight:700, fontSize:20, marginBottom:8}}>You've used your {D_FREE_LEFT} free applications</div>
                <div style={{fontSize:13.5, color:dT.muted, fontWeight:500, lineHeight:1.55, marginBottom:20}}>
                  {isAuto
                    ? `Bloom has paused applying for now. Upgrade and it picks up right where it left off, with ${matches.length} matches already queued.`
                    : `Upgrade to keep applying. You still have ${matches.length} matches waiting.`}
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:8}}>
                  <button onClick={()=>{ setUpgradeOpen(false); goPlans(); }} style={{padding:"12px 0", borderRadius:999, background:dT.ink, color:"#fff", border:"none",
                    fontFamily:dFB, fontSize:14, fontWeight:700, cursor:"pointer"}}>See plans</button>
                  <button onClick={()=>setUpgradeOpen(false)} style={{padding:"10px 0", borderRadius:999, background:"none", border:"none",
                    fontFamily:dFB, fontSize:13.5, fontWeight:600, color:dT.muted, cursor:"pointer"}}>Not now</button>
                </div>
              </div>
            </div>
          )}
          {matchPanel && <MatchDetailPanel m={matchPanel} isAuto={isAuto} paused={paused}
            onClose={()=>setMatchPanel(null)}
            onApply={()=>{ applyMatch(matchPanel); setMatchPanel(null); }}
            onSkip={()=>{ skipMatch(matchPanel, "Skipped from details"); setMatchPanel(null); }}/>}
          {toast && (
            <div role="status" style={{position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)", zIndex:90, display:"flex", alignItems:"center", gap:14,
              padding:"12px 16px 12px 18px", borderRadius:12, background:dT.ink, color:"#fff", boxShadow:"0 10px 30px rgba(0,0,0,.2)", fontSize:13, fontWeight:600, maxWidth:"90vw"}}>
              <span>{toast.msg}</span>
              {toast.undo && <button onClick={()=>{ toast.undo(); setToast(null); }} style={{border:"none", background:"none", color:"#5AEBEB", fontFamily:dFB, fontSize:13, fontWeight:800, cursor:"pointer"}}>Undo</button>}
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });


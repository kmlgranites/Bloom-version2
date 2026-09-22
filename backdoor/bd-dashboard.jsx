// =====================================================================
// Backdoor V1 · Post-onboarding dashboard — Pipeline
// =====================================================================
const { T:dT, FD:dFD, FB:dFB } = window;

const D_LOGO = { Stripe:"stripe.com", Vercel:"vercel.com", Ramp:"ramp.com", Notion:"notion.so", Rippling:"rippling.com", Brex:"brex.com", Deel:"deel.com" };
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
    <img src={`https://cdn.brandfetch.io/${domain}/w/${s*2}/h/${s*2}`} onError={()=>setBroke(true)} alt={co}
      style={{width:s, height:s, borderRadius:s>32?9:7, flexShrink:0, objectFit:"contain", background:"#F1F3F4"}}/>
  );
}
Object.assign(window, { CLogo, D_LOGO });

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
  red:{fg:"#B3261E", bg:"#FBE3E1"}, blue:{fg:"#0B5FB3", bg:"#E1EFFB"}, grey:{fg:"#7B8B8E", bg:"#F1F3F4"},
};

const D_TABS = ["All","Submitted","Submitting","Needs you","Failed","Skipped"];

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
      <span style={{display:"flex", flexShrink:0, color: active ? dT.ink : "#9AA3A5"}}>{icon}</span>
      <span style={{flex:1}}>{label}</span>
      {badge && <span style={{fontSize:11.5, fontWeight:700, color:"#fff", background:dT.ink, borderRadius:999,
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

function DChip({ children }) {
  return <span style={{fontSize:12.5, fontWeight:700, color:dT.cyanInk, background:"#E3F7F7", borderRadius:999, padding:"6px 13px"}}>{children}</span>;
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

function CopilotPanel({ st, set }) {
  const isAuto = st.mode === "auto";
  const [guard, setGuard] = React.useState({ match:true, salary:true, onsite:true, questions:false, essay:true });
  const basics = [
    ["Role", st.role || "Software Engineer"],
    ["Salary floor", "$140k+"],
    ["Location", (st.markets && st.markets.length) ? st.markets.join(", ") : "Remote, US"],
    ["Years experience", "4"],
    ["Notice", "2 weeks"],
    ["Authorized in US", "Yes"],
    ["Available start", "Immediately"],
    ["Portfolio", "vinodh.dev"],
  ];
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 320px", gap:20, alignItems:"start"}}>
      <div style={{display:"flex", flexDirection:"column", gap:20, minWidth:0}}>
        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
          <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:8}}>APPLICATION MODE</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:6}}>How much do you want me to handle?</div>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:16}}>Mode changes save immediately — it's a switch, not a setting.</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
            <button onClick={()=>set({mode:"review"})} style={{textAlign:"left", padding:"16px 16px", borderRadius:12, cursor:"pointer",
              border:`1.5px solid ${!isAuto ? dT.ink : dT.hairline}`, background: !isAuto ? "#FFFCF6" : "#fff"}}>
              <div style={{fontSize:19, marginBottom:8}}>✋</div>
              <div style={{fontWeight:700, fontSize:14.5, marginBottom:4}}>Review before send</div>
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
          <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:8}}>WHAT I KNOW ABOUT YOU</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:6}}>The basics</div>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:12}}>Click any value to edit · changes are queued until you save</div>
          {basics.map(([k,v])=>(
            <div key={k} style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0",
              borderBottom:`1px solid ${dT.hairline}`}}>
              <span style={{fontSize:13.5, fontWeight:600, color:dT.muted}}>{k}</span>
              <button className="bd-textlink" style={{fontSize:13.5, fontWeight:700, color:dT.ink, cursor:"pointer", display:"flex", alignItems:"center", gap:6}}>{v} ✎</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:"flex", flexDirection:"column", gap:20, minWidth:0}}>
        <div style={{position:"relative", background:dT.ink, color:"#fff", borderRadius:16, padding:"24px 22px",
          display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", gap:6, overflow:"hidden"}}>
          <div style={{position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", background:"#0BB3B3", opacity:.18, filter:"blur(40px)"}}/>
          <img src="assets/bloom-mascot-logo.webp" alt="Bloom" style={{width:72, height:72, objectFit:"contain", position:"relative"}}/>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:18, position:"relative"}}>Bloom</div>
          <div style={{fontSize:11.5, opacity:.65, fontWeight:600, marginBottom:12, position:"relative"}}>Trained on your story · active since day 1</div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, width:"100%", position:"relative"}}>
            {[["5","apps sent"],["1","replies"],["12h","saved"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,.08)", borderRadius:10, padding:"10px 4px"}}>
                <div style={{fontFamily:dFD, fontWeight:700, fontSize:16}}>{v}</div>
                <div style={{fontSize:10, opacity:.65, fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"20px 22px"}}>
          <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:6}}>WHAT TO LOOK FOR</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:16, marginBottom:2}}>Targets</div>
          <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginBottom:12}}>Tap to toggle</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
            {["Series A–C","Remote-first","≤500 people","US-based","No agencies"].map(t=><DChip key={t}>{t}</DChip>)}
          </div>
        </div>

        <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"20px 22px"}}>
          <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:6}}>GUARDRAILS</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:16, marginBottom:10}}>When to ping you</div>
          <DToggleRow label="Match below 75%" on={guard.match} onToggle={()=>setGuard(g=>({...g, match:!g.match}))}/>
          <DToggleRow label="Salary below floor" on={guard.salary} onToggle={()=>setGuard(g=>({...g, salary:!g.salary}))}/>
          <DToggleRow label="Onsite required" on={guard.onsite} onToggle={()=>setGuard(g=>({...g, onsite:!g.onsite}))}/>
          <DToggleRow label="More than 10 questions" on={guard.questions} onToggle={()=>setGuard(g=>({...g, questions:!g.questions}))}/>
          <DToggleRow label="Custom essay required" on={guard.essay} onToggle={()=>setGuard(g=>({...g, essay:!g.essay}))}/>
        </div>
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
        background: current ? "rgba(255,255,255,.15)" : (dark ? "#fff" : dT.ink),
        color: current ? "#fff" : (dark ? dT.ink : "#fff"),
        fontFamily:dFB, fontSize:13.5, fontWeight:700}}>{current ? "✓ Current plan" : cta}</button>
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
  return (
    <div style={{display:"flex", flexDirection:"column", gap:20}}>
      <div style={{position:"relative", background:dT.ink, color:"#fff", borderRadius:16, padding:"22px 26px",
        display:"flex", alignItems:"center", gap:16, overflow:"hidden"}}>
        <div style={{position:"absolute", top:-40, right:80, width:180, height:180, borderRadius:"50%", background:"#0BB3B3", opacity:.16, filter:"blur(45px)"}}/>
        <img src="assets/bloom-mascot-logo.webp" alt="Bloom" style={{width:44, height:44, objectFit:"contain", position:"relative", flexShrink:0}}/>
        <div style={{position:"relative"}}>
          <div style={{fontSize:10.5, fontWeight:800, color:"#5AEBEB", letterSpacing:".07em", marginBottom:4}}>YOUR PLAN</div>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, marginBottom:2}}>Pro · $19/mo</div>
          <div style={{fontSize:12.5, opacity:.7, fontWeight:600}}>Unlimited applications · renews Jun 29</div>
        </div>
      </div>

      <div style={{display:"flex", gap:16, flexWrap:"wrap"}}>
        <PlanCard name="Free" price="$0" per="forever" blurb="Try Bloom on a handful of roles."
          features={["5 applications / month","Review-before-send","Résumé auto-fill","Email support"]} cta="Downgrade"/>
        <PlanCard tag="POPULAR" name="Pro" price="$19" per="/ month" blurb="For an active search. Most people pick this."
          features={["Unlimited applications","Auto Apply (hands-free)","Smart matching & guardrails","Priority drafts · 1-tap send","Reply tracking"]}
          dark current/>
        <PlanCard name="Launch" price="$49" per="one-time" blurb="2-month sprint to land the job, then cancel."
          features={["Everything in Pro · 60 days","Recruiter-reply coaching","Salary negotiation scripts","Priority human support"]} cta="Get Launch"/>
      </div>

      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:4}}>Billing</div>
        <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:14}}>Visa ending 4242 · next charge Jun 29, 2026</div>
        <DField label="PAYMENT METHOD" value="Visa •••• 4242" action="Update"/>
        <DField label="BILLING EMAIL" value="vinodh@gmail.com" action="Edit"/>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"14px 0 0"}}>
          <div>
            <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:5}}>INVOICES</div>
            <div style={{fontSize:14, fontWeight:700, color:dT.ink}}>3 receipts available</div>
          </div>
          <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:dT.cyanInk, cursor:"pointer", flexShrink:0}}>Download</button>
        </div>
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
            {count && <div style={{fontSize:12, color:dT.muted, fontWeight:600}}>{count}</div>}
          </div>
        </div>
        {action !== false && <button onClick={onEdit} className="bd-textlink" style={{color:dT.muted, cursor:"pointer", fontSize:15}}>✎</button>}
      </div>
      {children}
    </div>
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

function ProfileView({ st }) {
  const elig = (st.workDetail && st.workDetail.US) || { authorized:true, sponsor:false };
  const pct = 85;
  const [editing, setEditing] = React.useState(false);
  const [personal, setPersonal] = React.useState({
    summary:"Backend-leaning full-stack engineer with 6 years shipping payments and platform infrastructure at seed-to-Series-C startups. Comfortable owning a service end to end, from schema to on-call.",
    first:"Vinodh Kumar", last:"Neelakandan", email:"vkpixelsart@gmail.com", phone: st.phone || "+91 72999 11652",
    dob:"", country:"India", street:"F422, BBCL Midland, Puducherry salai, Semmencherry", city:"Chennai",
    state:"Tamil Nadu", zip:"600119", county:"", linkedin:"https://www.linkedin.com/in/vinodhuiux/", github:"", website:"https://vkpixelsart.in",
  });

  return (
    <div>
      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"20px 26px", marginBottom:22,
        display:"flex", alignItems:"center", gap:16}}>
        <div style={{width:52, height:52, borderRadius:14, background:dT.ink, color:"#fff", display:"grid",
          placeItems:"center", fontSize:17, fontWeight:800, flexShrink:0}}>VK</div>
        <div style={{minWidth:0}}>
          <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
            <span style={{fontFamily:dFD, fontWeight:700, fontSize:18}}>{personal.first}</span>
            <span style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:11.5, fontWeight:700, color:"#14663F",
              background:"#DFF6E8", borderRadius:999, padding:"4px 11px"}}>
              <span style={{width:6, height:6, borderRadius:"50%", background:"#1F8A5B"}}/>Open to work</span>
            <span style={{fontSize:11.5, fontWeight:700, color:"#8A6D00", background:"#FBEFCB", borderRadius:999, padding:"4px 11px"}}>{pct}% complete →</span>
          </div>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginTop:4, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
            {personal.email}
          </div>
        </div>
        <button onClick={()=>setEditing(true)} style={{marginLeft:"auto", border:"none", background:"none", color:"#C1443B",
          fontFamily:dFB, fontSize:14, fontWeight:600, cursor:"pointer", flexShrink:0}}>edit</button>
      </div>

      <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:14}}>
        <span style={{fontSize:12.5, fontWeight:700, color:dT.ink, whiteSpace:"nowrap"}}>Profile details</span>
        <div style={{flex:1, height:1, background:dT.hairline}}/>
      </div>

      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"8px 26px"}}>
        <PSection title="Professional summary" action onEdit={()=>setEditing(true)}>
          <div style={{fontSize:13, color:dT.ink, fontWeight:600, lineHeight:1.55}}>
            {personal.summary}
          </div>
        </PSection>

        <PSection title="Education" icon="🎓" count="1 entry" action>
          <div style={{display:"flex", gap:14, alignItems:"flex-start"}}>
            <span style={{width:34, height:34, borderRadius:10, background:"#EDE9FE", color:"#5B3FBF", display:"grid", placeItems:"center", fontSize:14, fontWeight:800, flexShrink:0}}>🎓</span>
            <div>
              <div style={{fontSize:14, fontWeight:700}}>VIT Chennai</div>
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>B.Tech · Computer Science</div>
              <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:2}}>Jun 2016 – May 2020</div>
            </div>
          </div>
        </PSection>

        <PSection title="Experience" icon="💼" count="3 roles" action>
          <div style={{display:"flex", flexDirection:"column", gap:16}}>
            {[
              ["Backend Engineer","Groww","Aug 2022 – Present · 2 yrs 1 mo",["Owned the payouts service handling 40k+ daily transactions.","Migrated batch settlement jobs to an event-driven pipeline, cutting latency 60%."]],
              ["Software Engineer","Cred","Jul 2020 – Jul 2022 · 2 yrs",["Built and maintained internal billing APIs used by 4 product teams.","Shipped idempotent retry logic that cut duplicate-charge tickets to near zero."]],
              ["Backend Intern","Razorpay","Jan 2020 – Jun 2020 · 6 mos",["Built a reconciliation script that cut manual finance review time by 30%."]],
            ].map(([role, co, dates, bullets])=>(
              <div key={role} style={{display:"flex", gap:14, alignItems:"flex-start"}}>
                <span style={{width:34, height:34, borderRadius:10, background:"#F1F3F4", color:dT.muted, display:"grid", placeItems:"center", fontSize:12, fontWeight:800, flexShrink:0}}>{co[0]}</span>
                <div style={{minWidth:0}}>
                  <div style={{fontSize:14, fontWeight:700}}>{role}</div>
                  <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>{co}</div>
                  <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, marginTop:2, marginBottom:6}}>{dates}</div>
                  {bullets.map(b=>(
                    <div key={b} style={{fontSize:12.5, color:"#4B5A5E", fontWeight:500, lineHeight:1.5, display:"flex", gap:6}}>
                      <span style={{flexShrink:0}}>•</span>{b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PSection>

        <PSection title="Skills" action>
          <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
            {["Node.js","TypeScript","PostgreSQL","Kafka","AWS","Redis","Go"].map(s=>(
              <span key={s} style={{fontSize:12.5, fontWeight:700, color:dT.ink, background:"#F1F3F4", borderRadius:999, padding:"6px 13px"}}>{s}</span>
            ))}
          </div>
        </PSection>

        <PSection title="Compensation" action={false} last>
          <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:14, lineHeight:1.5}}>
            Used to answer “expected salary” questions during auto-apply — one of the most common reasons an application needs your input.
          </div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"14px 16px",
            background:"#DFF6E8", border:"1px solid #BCE7CE", borderRadius:12}}>
            <div style={{display:"flex", alignItems:"center", gap:12}}>
              <span style={{fontSize:18}}>💼</span>
              <div>
                <div style={{fontSize:13.5, fontWeight:700, color:"#14663F"}}>Expected salary</div>
                <div style={{fontSize:12, color:"#14663F", fontWeight:600}}>$140,000 – $165,000 / year</div>
              </div>
            </div>
            <button className="bd-textlink" style={{fontSize:12.5, fontWeight:700, color:"#14663F", cursor:"pointer"}}>Edit</button>
          </div>
        </PSection>
      </div>

      <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"22px 26px", marginTop:16}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:17}}>Equal Employment</div>
          <DPill tone="ok">All set</DPill>
        </div>
        <PRow label="Are you authorized to work in the US?" value={elig.authorized===false ? "No" : "Yes"}/>
        <PRow label="Do you have a disability?" value="No"/>
        <PRow label="What is your gender?" value="Male"/>
        <PRow label="Will you now or in the future require sponsorship?" value={elig.sponsor ? "Yes" : "No"}/>
        <PRow label="Do you identify as LGBTQ+?" value="Prefer not to say" last/>
      </div>

      {editing && <EditPersonalDrawer data={personal} onClose={()=>setEditing(false)}
        onSave={(f)=>{ setPersonal(f); setEditing(false); }}/>}
    </div>
  );
}
function SettingsView({ st, set, onBack, title }) {
  const [sub, setSub] = React.useState("account");
  return (
    <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px"}}>
      <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:4}}>
        <button onClick={onBack} style={{border:"none", background:"none", fontSize:20, color:dT.ink, cursor:"pointer"}}>←</button>
        <div style={{fontFamily:dFD, fontWeight:700, fontSize:28, letterSpacing:"-0.025em"}}>{title}</div>
      </div>
      <div style={{fontSize:13.5, color:dT.muted, fontWeight:600, marginBottom:26, marginLeft:34}}>
        {title==="Profile" ? "Everything I use to fill out forms on your behalf." : "Your account, your plan, and how Bloom works for you."}
      </div>

      <div style={{display:"grid", gridTemplateColumns: title==="Profile" ? "1fr" : "200px 1fr", gap:28, alignItems:"start"}}>
        {title!=="Profile" && (
        <div style={{display:"flex", flexDirection:"column", gap:2}}>
          <DSubNav icon={<DIconAccount/>} label="Account" active={sub==="account"} onClick={()=>setSub("account")}/>
          <DSubNav icon={<DIconSparkle/>} label="Plan & billing" active={sub==="billing"} onClick={()=>setSub("billing")}/>
          <DSubNav icon={<DIconGift/>} label="Refer friends" active={sub==="refer"} onClick={()=>setSub("refer")}/>
          <DSubNav icon={<DIconInfo/>} label="About & help" active={sub==="about"} onClick={()=>setSub("about")}/>
          <div style={{height:1, background:dT.hairline, margin:"10px 6px"}}/>
          <DSubNav icon={<DIconPower/>} label="Log out" tone="#C1443B"/>
        </div>
        )}

        {sub==="billing" && title!=="Profile" ? <BillingPanel/> : sub==="about" && title!=="Profile" ? <AboutHelpPanel/> : title==="Profile" ? <ProfileView st={st}/> : (
        <div style={{display:"flex", flexDirection:"column", gap:20, minWidth:0}}>
          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:18}}>Profile</div>
            <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:20}}>
              <div style={{width:52, height:52, borderRadius:"50%", background:"#D9D2FF", color:"#3A2E80",
                display:"grid", placeItems:"center", fontSize:17, fontWeight:800, flexShrink:0}}>VK</div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontWeight:700, fontSize:15}}>Vinodh Kumar</div>
                <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>vinodh@gmail.com · joined May 2026</div>
              </div>
              <button style={{padding:"9px 16px", borderRadius:999, border:`1.5px solid ${dT.hairline}`,
                background:"#fff", fontFamily:dFB, fontSize:13, fontWeight:700, color:dT.ink, cursor:"pointer"}}>Change photo</button>
            </div>
            <DField label="FULL NAME" value="Vinodh Kumar" action="Edit"/>
            <DField label="EMAIL" value="vinodh@gmail.com" action="Edit"/>
            <DField label="PHONE" value={st.phone ? `${st.dial||"+1"} ${st.phone}` : "Not added"} action="Edit"/>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"14px 0 0"}}>
              <div>
                <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:5}}>PASSWORD</div>
                <div style={{fontSize:14, fontWeight:700, color:dT.ink}}>Last changed 2 weeks ago</div>
              </div>
              <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:dT.cyanInk, cursor:"pointer", flexShrink:0}}>Change</button>
            </div>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:4}}>Connected accounts</div>
            <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:14}}>Bloom applies on your behalf through these.</div>
            <DField label="LINKEDIN" value="✓ Connected · linkedin.com/in/vinodh" action="Disconnect"/>
            <DField label="RÉSUMÉ" value={`${st.resume || "Vinodh_Resume_2026.pdf"} · synced`} action="Replace"/>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, padding:"14px 0 0"}}>
              <div>
                <div style={{fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".07em", marginBottom:5}}>GOOGLE</div>
                <div style={{fontSize:14, fontWeight:700, color:dT.ink}}>Not connected</div>
              </div>
              <button className="bd-textlink" style={{fontSize:13, fontWeight:700, color:dT.cyanInk, cursor:"pointer", flexShrink:0}}>Connect</button>
            </div>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px"}}>
            <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:4}}>Bloom setup</div>
            <div style={{fontSize:12.5, color:dT.muted, fontWeight:600, marginBottom:16}}>Re-run the guided setup any time to retrain Bloom from scratch.</div>
            <div style={{display:"flex", gap:10}}>
              <button style={{padding:"11px 18px", borderRadius:999, background:dT.ink, color:"#fff", border:"none",
                fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Open Copilot config</button>
              <button style={{padding:"11px 18px", borderRadius:999, background:"#fff", color:dT.ink,
                border:`1.5px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>↻ Replay guided setup</button>
            </div>
          </div>

          <div style={{background:"#fff", border:`1px solid ${dT.hairline}`, borderRadius:16, padding:"26px 28px",
            display:"flex", alignItems:"center", justifyContent:"space-between", gap:20}}>
            <div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:17, marginBottom:4}}>Danger zone</div>
              <div style={{fontSize:12.5, color:dT.muted, fontWeight:600}}>Delete your account and all application history. This can't be undone.</div>
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

function Dashboard({ st, set, onSignOut }) {
  const [agentOn, setAgentOn] = React.useState(true);
  const [view, setView] = React.useState("pipeline"); // pipeline | profile | settings | review
  const [tab, setTab] = React.useState("All");
  const [jobs, setJobs] = React.useState(D_JOBS);
  const [reviewJob, setReviewJob] = React.useState(null);
  const isAuto = st.mode === "auto";
  const needCount = jobs.filter(j=>j.status==="Needs you").length;
  const sentToday = jobs.filter(j=>j.status==="Submitted").length;

  const counts = {};
  D_TABS.forEach(t => counts[t] = t==="All" ? jobs.length : jobs.filter(j=>j.status===t).length);
  const rows = tab==="All" ? jobs : jobs.filter(j=>j.status===tab);

  function openReview(job) { setReviewJob(job); setView("review"); }
  function approve(co) {
    setJobs(js=>js.map(j=>j.co===co ? {...j, status:"Submitted", statusTone:"green", applied:"Just now",
      answers: j.answers.map(a=>({...a, status: a.status==="needs" ? "drafted" : a.status}))} : j));
    setReviewJob(j=>j ? {...j, status:"Submitted", statusTone:"green"} : j);
  }

  return (
    <div style={{height:"100vh", display:"flex", background:"#FFFCF6", fontFamily:dFB, color:dT.ink, overflow:"hidden"}}>
      {/* Sidebar */}
      <div style={{width:220, flexShrink:0, borderRight:`1px solid ${dT.hairline}`, background:"#fff",
        display:"flex", flexDirection:"column"}}>
        <div style={{height:68, flexShrink:0, display:"flex", alignItems:"center", borderBottom:`1px solid ${dT.hairline}`, padding:"0 16px"}}>
          <img src="assets/bloom-logo.svg" alt="bloom" style={{height:20, width:"auto", display:"block"}}/>
        </div>
        <div style={{paddingTop:16, paddingLeft:16, paddingRight:16, display:"flex", flexDirection:"column", flex:1}}>
        <div style={{display:"flex", flexDirection:"column", gap:2}}>
          <DNav icon={<DIconPipeline/>} label="Pipeline" badge={needCount || null} active={view==="pipeline"} onClick={()=>setView("pipeline")}/>
          <DNav icon={<DIconTracker/>} label="Tracker" active={view==="tracker"} onClick={()=>setView("tracker")}/>
          <DNav icon={<DIconAuto/>} label="Auto Apply" active={view==="autoapply"} onClick={()=>setView("autoapply")}/>
          <DNav icon={<DIconProfile/>} label="Profile" active={view==="profile"} onClick={()=>setView("profile")}/>
          <DNav icon={<DIconSettings/>} label="Settings" active={view==="settings"} onClick={()=>setView("settings")}/>
        </div>
        <div style={{marginTop:"auto", display:"flex", alignItems:"center", gap:10, paddingTop:16, paddingBottom:20, borderTop:`1px solid ${dT.hairline}`}}>
          <div style={{width:32, height:32, borderRadius:"50%", background:"#D9D2FF", color:"#3A2E80", display:"grid",
            placeItems:"center", fontSize:13, fontWeight:800, flexShrink:0}}>V</div>
          <div style={{minWidth:0}}>
            <div style={{fontSize:13, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>Vinodh</div>
            <div style={{fontSize:11.5, color:dT.muted, fontWeight:600}}>Week 1</div>
          </div>
        </div>
        </div>
      </div>

      {/* Main */}
      <div style={{flex:1, minWidth:0, minHeight:0, display:"flex", flexDirection:"column"}}>
        <div style={{padding:"0 32px", height:68, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between",
          borderBottom:`1px solid ${dT.hairline}`, background:"#fff"}}>
          <div style={{fontSize:16, fontWeight:800, letterSpacing:"-0.01em"}}>{{pipeline:"Pipeline", tracker:"Tracker", autoapply:"Auto Apply", profile:"Profile", settings:"Settings", review:"Pipeline"}[view] || "Pipeline"}</div>
          <div style={{display:"flex", alignItems:"center", gap:16}}>
            <button onClick={onSignOut} className="bd-textlink" style={{fontSize:13.5, fontWeight:700, color:dT.ink, cursor:"pointer"}}>Sign out</button>
            <div style={{display:"flex", alignItems:"center", gap:9, padding:"7px 12px", borderRadius:999,
              border:`1px solid ${dT.hairline}`}}>
              <span style={{width:7, height:7, borderRadius:"50%", background: agentOn ? "#1F8A5B" : dT.muted}}/>
              <span style={{fontSize:12.5, fontWeight:700}}>Agent {agentOn ? "running" : "paused"}</span>
              <button onClick={()=>setAgentOn(a=>!a)} style={{width:34, height:19, borderRadius:999, cursor:"pointer", border:"none",
                background: agentOn ? dT.ink : dT.hairline, position:"relative", transition:"background .15s"}}>
                <span style={{position:"absolute", top:2, left: agentOn ? 17 : 2, width:15, height:15, borderRadius:"50%",
                  background:"#fff", transition:"left .15s"}}/>
              </button>
            </div>
          </div>
        </div>

        {view==="review" ? <window.ReviewPanel job={reviewJob} mode={st.mode} onBack={()=>setView("pipeline")} onApprove={approve}/> : view==="tracker" ? <window.Tracker mode={st.mode}/> : view==="autoapply" ? (
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px"}}>
          <div style={{fontFamily:dFD, fontWeight:700, fontSize:28, letterSpacing:"-0.025em", marginBottom:4}}>Auto Apply</div>
          <div style={{fontSize:13.5, color:dT.muted, fontWeight:600, marginBottom:26}}>How Bloom finds, tailors, and sends applications for you.</div>
          <CopilotPanel st={st} set={set}/>
        </div>
        ) : (view==="settings" || view==="profile") ? <SettingsView st={st} set={set} title={view==="profile" ? "Profile" : "Settings"} onBack={()=>setView("pipeline")}/> : (
        <div style={{flex:1, overflow:"auto", padding:"32px 32px 56px", display:"flex", flexDirection:"column", gap:28}}>

          {/* Hero */}
          <div style={{position:"relative", background:dT.ink, color:"#fff", borderRadius:22, padding:"34px 38px", flexShrink:0,
            overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"space-between", gap:24}}>
            <div style={{position:"absolute", bottom:-80, right:120, width:260, height:260, borderRadius:"50%",
              background:"#0BB3B3", opacity:.14, filter:"blur(50px)"}}/>
            <div style={{position:"relative", maxWidth:640}}>
              <div style={{display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,.1)",
                borderRadius:999, padding:"5px 13px", fontSize:12, fontWeight:700, marginBottom:18}}>
                <span style={{width:6, height:6, borderRadius:"50%", background:"#5AEBEB"}}/>
                {needCount} waiting for review
              </div>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:32, letterSpacing:"-0.025em", lineHeight:1.14, marginBottom:12}}>
                Bloom is working on <span style={{color:"#5AEBEB"}}>{D_JOBS.length} applications</span> for you.
              </div>
              <div style={{fontSize:14, fontWeight:500, opacity:.75, lineHeight:1.55, marginBottom:22}}>
                {isAuto
                  ? `${sentToday} went out on their own. I'll recap every morning.`
                  : `${needCount} are ready and waiting on your approval — about 90 seconds each.`}
              </div>
              <div style={{display:"flex", gap:10}}>
                <button onClick={()=>setTab(isAuto ? "Submitted" : "Needs you")} style={{padding:"11px 20px", borderRadius:999,
                  background:"#5AEBEB", color:dT.ink, fontFamily:dFB, fontSize:13.5, fontWeight:700, border:"none", cursor:"pointer"}}>
                  {isAuto ? "See what I sent →" : "Review now →"}
                </button>
                <button style={{padding:"11px 20px", borderRadius:999, background:"transparent", color:"#fff",
                  border:"1.5px solid rgba(255,255,255,.3)", fontFamily:dFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>
                  {isAuto ? "Switch to review mode" : "Switch to Auto Apply"}
                </button>
              </div>
            </div>
            <img src="assets/bloom-mascot-logo.webp" alt="Bloom" style={{width:110, height:110, objectFit:"contain", opacity:.9, flexShrink:0}}/>
          </div>

          {/* All applications */}
          <div style={{flexShrink:0}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14}}>
              <div style={{fontFamily:dFD, fontWeight:700, fontSize:19, letterSpacing:"-0.02em"}}>All applications</div>
              <input placeholder="Search company…" style={{width:200, padding:"8px 12px", borderRadius:8,
                border:`1px solid ${dT.hairline}`, fontFamily:dFB, fontSize:13, outline:"none"}}/>
            </div>

            <div style={{display:"flex", gap:8, marginBottom:16, flexWrap:"wrap"}}>
              {D_TABS.map(t=>{
                const on = tab===t;
                return (
                  <button key={t} onClick={()=>setTab(t)} style={{display:"flex", alignItems:"center", gap:7,
                    padding:"8px 14px", borderRadius:999, fontFamily:dFB, fontSize:13, fontWeight:700,
                    border:`1.5px solid ${on ? dT.ink : dT.hairline}`, background: on ? dT.ink : "#fff",
                    color: on ? "#fff" : dT.ink, cursor:"pointer"}}>
                    {t}
                    <span style={{fontSize:11, fontWeight:800, opacity:.7}}>{counts[t]}</span>
                  </button>
                );
              })}
            </div>

            <div style={{border:`1px solid ${dT.hairline}`, borderRadius:14, background:"#fff", overflow:"hidden"}}>
              <div style={{display:"grid", gridTemplateColumns:"1.3fr 1.7fr 1fr 0.9fr", gap:12,
                padding:"11px 20px", background:"#FAFAF8", borderBottom:`1px solid ${dT.hairline}`,
                fontSize:10.5, fontWeight:800, color:dT.muted, letterSpacing:".06em"}}>
                <div>COMPANY</div><div>RÉSUMÉ</div><div>STATUS</div><div>APPLIED</div>
              </div>
              {rows.length === 0 ? (
                <div style={{padding:"40px 20px", textAlign:"center", fontSize:13.5, color:dT.muted, fontWeight:600}}>
                  No applications match this filter.
                </div>
              ) : rows.map(j=>{
                const tone = D_TONE[j.statusTone];
                return (
                  <div key={j.co} onClick={()=>openReview(j)} style={{display:"grid", gridTemplateColumns:"1.3fr 1.7fr 1fr 0.9fr", gap:12,
                    padding:"14px 20px", borderBottom:`1px solid ${dT.hairline}`, alignItems:"center", fontSize:13, cursor:"pointer"}}>
                    <div style={{display:"flex", alignItems:"center", gap:10, minWidth:0}}>
                      <CLogo co={j.co}/>
                      <div style={{minWidth:0}}>
                        <div style={{fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.co}</div>
                        <div style={{fontSize:11.5, color:dT.muted, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.role}</div>
                      </div>
                    </div>
                    <div style={{color:"#4B5A5E", fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{j.resume}</div>
                    <div>
                      <span style={{fontSize:11.5, fontWeight:700, color:tone.fg, background:tone.bg,
                        borderRadius:999, padding:"4px 10px", whiteSpace:"nowrap"}}>{j.status}</span>
                    </div>
                    <div style={{color:dT.muted, fontWeight:600, whiteSpace:"nowrap", overflow:"hidden"}}>{j.status==="Submitting" ? <LiveTicker steps={D_INFLIGHT_STEPS}/> : j.applied}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats — bottom */}
          <div style={{display:"flex", flexWrap:"wrap", gap:14, flexShrink:0}}>
            <DStat label="MATCHED" value="19" delta="+3 today" foot="this week" color="#0BB3B3" data={[4,6,5,9,8,12,19]}/>
            <DStat label="APPLIED" value="5" delta="+1 today" foot="applications sent" color="#1F8A5B" data={[0,1,1,2,3,4,5]}/>
            <DStat label="REPLIED" value="1" delta="+0 today" foot="companies responding" color="#B3261E" data={[0,0,0,0,1,1,1]}/>
            <DStat label="INTERVIEWS" value="1" delta="+1 today" foot="booked on calendar" color="#0B5FB3" data={[0,0,0,0,0,0,1]}/>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });

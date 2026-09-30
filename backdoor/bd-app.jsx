// =====================================================================
// Backdoor V1 · shell — header badge, left rail, card stack, toast
// =====================================================================
const { T:aT, FD:aFD, FB:aFB, ChapterMark:AMark } = window;

const CARDS = [
  { id:"upload", label:"Upload", icon:"📤", bare:true,
    head:"Upload your resume.", sub:"",
    secs:"~30 SECONDS", note:"One file. Everything after this fills itself in." },
  { id:"address", label:"Address", icon:"📍", bare:true,
    head:"Where do you live?", sub:"",
    secs:"~20 SECONDS", note:"Most application forms need a full address." },
  { id:"you", label:"You", icon:"👋", bare:true,
    head:"Tell me about you.", sub:"A few taps. No typing.",
    secs:"~30 SECONDS", note:"Every answer you tap teaches me what to look for." },
  { id:"contact", label:"Contact", icon:"💬", bare:true,
    head:"How should we reach out?", sub:"",
    secs:"~30 SECONDS", note:"One number, verified once." },
  { id:"eligibility", label:"Eligibility", icon:"🌐", bare:true,
    head:"Where can you work?", sub:"This decides which jobs I'm allowed to send.",
    secs:"~30 SECONDS", note:"Get this right and you'll never see a role you can't take." },
  { id:"checklist", label:"Checklist", icon:"✅", bare:true,
    head:"A few last questions.", sub:"",
    secs:"~40 SECONDS", note:"Defaults work for most people." },
    { id:"apply", label:"Apply mode", icon:"🚀", bare:true,
    head:"How should we apply for you?", sub:"",
    secs:"~20 SECONDS", note:"Switch any time in Settings." },
];

const INITIAL = {
  role:"Software Engineer", engKinds:["Frontend Engineer"], level:["Senior"], types:["Fulltime"], setting:["Remote"],
  citizenship:["India"], targets:["United States"],
  elig:{ "United States": { authorized:"No", sponsorship:"Yes", visa:"H-1B", visaStatus:"Filed — pending" } },
  markets:["US"], workDetail:{}, citizenship:[], country:"US", dial:"+1", phone:"", channel:"whatsapp", whatsapp:true, otpSent:false, otp:["","","","","",""], verified:false,
  notif:{ status:true, matches:true, weekly:false },
  resume:null, parsed:false,
  p:{ name:"Vinodh Kumar", headline:"Senior Frontend Engineer", years:"6", location:"Chennai, India",
      skills:["React","TypeScript","Node.js","GraphQL","Design systems","Accessibility"],
      jobs:[ {role:"Senior Frontend Engineer", co:"Headspace", when:"2022 — now"},
             {role:"Frontend Engineer", co:"Freshworks", when:"2019 — 2022"} ],
      edu:{ degree:"B.E. Computer Science", school:"Anna University", when:"2015 — 2019" } },
  tailoring:"Honest", mode:"auto", 
};

function BackdoorOnboarding() {
  // preview override: #step=3 jumps straight in (default 0)
  const hashStep = parseInt((location.hash.match(/step=(\d+)/) || [])[1], 10);
  const [step, setStep] = React.useState(isNaN(hashStep) ? 6 : hashStep);
  const [authed, setAuthed] = React.useState(true);
  const [st, setSt] = React.useState(INITIAL);
  const [toastMsg, setToastMsg] = React.useState(null);
  const [done, setDone] = React.useState(true);
  const [atDashboard, setAtDashboard] = React.useState(true);
  const scrollRef = React.useRef(null);

  const set = p => setSt(s => ({...s, ...p}));
  function toast(m){ setToastMsg(m); clearTimeout(window.__bdT); window.__bdT = setTimeout(()=>setToastMsg(null), 2600); }
  function advance(){
    setStep(s => Math.min(s+1, CARDS.length-1));
    setTimeout(()=>{ if(scrollRef.current) scrollRef.current.scrollTop = 0; }, 30);
  }

  function back(){ setStep(s => Math.max(s-1, 0)); }

  const c = CARDS[step];

  if (!authed) return <window.SignIn onDone={()=>{ setStep(0); setDone(false); setAtDashboard(false); setAuthed(true); window.scrollTo(0,0); }}/>;

  if (atDashboard) return <window.Dashboard st={st} set={set} onSignOut={()=>{ setAtDashboard(false); setAuthed(false); }}/>;

  return (
    <div style={{position:"fixed", inset:0, display:"flex", flexDirection:"column", overflow:"hidden",
      background:aT.cream, fontFamily:aFB, color:aT.ink}}>

      {/* Header — logo · n/Y badge + dots · Skip */}
      <div className="m-obhead" style={{padding:"16px 28px", position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between",
        borderBottom:`1px solid ${aT.hairline}`, background:"#fff", flexShrink:0}}>
        <img src="assets/bloom-logo.svg" alt="bloom" style={{height:23, width:"auto", display:"block"}}/>
        <div style={{display:"flex", alignItems:"center", gap:18}}>
          <span className="m-hide" style={{fontSize:13, fontWeight:600, color:aT.muted, maxWidth:260, overflow:"hidden",
            textOverflow:"ellipsis", whiteSpace:"nowrap"}}>vinodhkumar.neelakandan@nurture.ai</span>
          <button onClick={()=>toast("Signed out")} className="bd-textlink"
            style={{fontSize:13.5, fontWeight:700, color:aT.ink, cursor:"pointer", display:"flex", alignItems:"center", gap:7}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0}}>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>
            </svg>Log out
          </button>
        </div>
      </div>

      <div style={{flex:1, display:"flex", overflow:"hidden", minHeight:0}}>
        {/* Left rail — hidden on the static upload screen */}
        {!c.bare && (
        <div className="m-hide" style={{width:280, flexShrink:0, background:aT.ink, color:"#fff", padding:"28px 26px",
          display:"flex", flexDirection:"column", justifyContent:"space-between", position:"relative", overflow:"hidden"}}>
          <div style={{position:"absolute", bottom:-50, right:-50, width:220, height:220, borderRadius:"50%",
            background:aT.cyan, opacity:.16, filter:"blur(40px)"}}/>
          <div style={{position:"relative", minHeight:0, overflow:"auto"}}>
            <div style={{fontSize:11, fontWeight:800, color:aT.cyan, letterSpacing:".06em", marginBottom:8}}>● SETTING UP BLOOM</div>
            <div style={{fontFamily:aFD, fontWeight:700, fontSize:26, letterSpacing:"-0.025em", lineHeight:1.1}}>{c.head}</div>
            <div style={{fontSize:13.5, opacity:.7, fontWeight:500, marginTop:10, lineHeight:1.45}}>{c.sub}</div>
          </div>
          <div style={{position:"relative", display:"flex", justifyContent:"center", flex:"0 1 auto", minHeight:0, padding:"16px 0"}}>
            <video src="assets/sprout-anim.mp4" autoPlay loop muted playsInline
              ref={el=>{ if(el){ el.muted=true; el.defaultMuted=true; el.volume=0; const p=el.play(); if(p&&p.catch)p.catch(()=>{}); } }}
              style={{width:196, maxWidth:"100%", maxHeight:"100%", height:"auto", objectFit:"contain", display:"block", borderRadius:16}}/>
          </div>
          <div style={{position:"relative", flexShrink:0}}>
            <div style={{fontSize:11, fontWeight:800, color:aT.cyan, letterSpacing:".06em", marginBottom:6}}>● {c.secs}</div>
            <div style={{fontSize:12, opacity:.7, fontWeight:500, lineHeight:1.45, fontStyle:"italic"}}>{c.note}</div>
          </div>
        </div>
        )}

        {/* Card stack */}
        <div ref={scrollRef} style={{flex:1, overflow:"auto", padding: c.bare ? "24px 0 64px" : "20px 0 64px"}}>
          <div style={{maxWidth: c.bare ? 1034 : 640, margin:"0 auto", padding:"0 36px", display:"flex", flexDirection:"column", gap:14}}>
            {c.bare ? (
              <div className="bd-framed" style={{background:"#fff", border:`1px solid ${aT.hairline}`, borderRadius:24}}>
                {step>0 && (
                  <div style={{padding:"20px 30px 18px", borderBottom:`1px solid ${aT.hairline}`}}>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12}}>
                      <span style={{fontSize:13.5, fontWeight:500, color:aT.muted}}>Step {step} of {CARDS.length-1}</span>
                      <button onClick={back} className="bd-textlink" style={{fontSize:13.5, fontWeight:600, color:aT.muted, cursor:"pointer", textDecoration:"underline"}}>← Back</button>
                    </div>
                    <div style={{height:4, borderRadius:99, background:aT.hairline, overflow:"hidden"}}>
                      <div style={{width:`${(step/(CARDS.length-1))*100}%`, height:"100%", background:aT.ink, transition:"width .35s"}}/>
                    </div>
                  </div>
                )}
                {step===0 && <window.Card0 st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===1 && <window.AddressCard st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===2 && <window.Card1 st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===3 && <window.ContactCard st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===4 && <window.WorkCard st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===5 && <window.ChecklistCard st={st} set={set} locked={false} onNext={advance} toast={toast}/>}
                {step===6 && <window.ModeCard st={st} set={set} locked={false} onNext={()=>setDone(true)} toast={toast}/>}
              </div>
            ) : CARDS.slice(1, step+1).map((cd, i)=>{
              const idx = i + 1;
              const locked = idx < step;
              const props = { st, set, locked, onNext: advance, toast };
              return (
                <React.Fragment key={cd.id}>
                  <AMark n={idx} icon={cd.icon} label={cd.label} active={idx===step}/>
                  {idx===1 && <window.AddressCard {...props}/>}
                  {idx===2 && <window.Card1 {...props}/>}
                  {idx===3 && <window.ContactCard {...props}/>}
                  {idx===4 && <window.WorkCard {...props}/>}
                  {idx===5 && <window.ChecklistCard {...props}/>}
                  {idx===6 && <window.ModeCard st={st} set={set} locked={locked} onNext={()=>setDone(true)} toast={toast}/>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Corner toast — transient notices */}
      {toastMsg && (
        <div style={{position:"fixed", right:22, bottom:22, background:aT.ink, color:"#fff", borderRadius:14,
          padding:"12px 18px", fontSize:13.5, fontWeight:700, boxShadow:"0 12px 30px rgba(2,47,54,.3)", zIndex:40}}>
          {toastMsg}
        </div>
      )}

      {/* Activated */}
      {done && <BloomBoot mode={st.mode} channel={st.channel} onDone={()=>{ setDone(false); setAtDashboard(true); }}/>}

      <style>{`.rotate{animation:spin 1.1s linear infinite;display:inline-block}@keyframes spin{to{transform:rotate(360deg)}}
        a{color:${aT.cyanInk}}a:hover{color:${aT.ink}}
        input::placeholder{color:${aT.muted};opacity:.7}
        button{background:none;border:none;font-family:inherit}`}</style>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BackdoorOnboarding/>);

function BloomBoot({ mode, channel, onDone }) {
  const auto = mode === "auto";
  const via = channel === "email" ? "an email" : channel === "imessage" ? "an iMessage" : "a WhatsApp message";
  const lines = auto ? [
    "Bloom searches for jobs that match your Apply settings, all day.",
    "Strong matches are filled in and sent for you, best matches first.",
    `If an employer asks something new, you'll get ${via}. Answer there or in the app.`,
    "Every sent application shows as Submitted on your dashboard.",
    "Your first 5 applications are free.",
  ] : [
    "Bloom searches for jobs that match your Apply settings, all day.",
    "Your best matches appear on the dashboard with everything filled in.",
    "Tap Apply on the ones you like. Nothing is sent without you.",
    `If an employer asks something new, you'll get ${via}.`,
    "Your first 5 applications are free.",
  ];
  const [li, setLi] = React.useState(0);
  const [ch, setCh] = React.useState(0);
  const total = lines.join("").length;
  const typed = lines.slice(0, li).join("").length + ch;
  const finished = li >= lines.length;
  React.useEffect(()=>{
    if (finished) return;
    const line = lines[li];
    const t = setTimeout(()=>{
      if (ch < line.length) setCh(ch + 2);
      else { setLi(li + 1); setCh(0); }
    }, ch < line.length ? 22 : 380);
    return ()=>clearTimeout(t);
  }, [li, ch, finished]);
  React.useEffect(()=>{ if (!finished) return; const t = setTimeout(onDone, 1400); return ()=>clearTimeout(t); }, [finished]);
  const pct = finished ? 100 : Math.min(99, Math.round(typed/total*100));
  const secs = finished ? 0 : Math.max(1, Math.ceil((total - typed) * 0.012 + (lines.length - li) * 0.38));
  return (
    <div style={{position:"fixed", inset:0, background:"rgba(2,30,36,.5)", display:"grid", placeItems:"center", zIndex:50, padding:16}}>
      <div role="dialog" aria-modal="true" aria-label="Setting up Bloom" style={{background:"#fff", borderRadius:24, padding:"32px 36px 30px", width:"100%", maxWidth:520,
        maxHeight:"92vh", overflow:"auto", boxSizing:"border-box", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img src="assets/bloom-mascot-logo.webp" alt="" style={{width:64, height:64, objectFit:"contain"}}/>
        <div style={{fontFamily:aFD, fontWeight:700, fontSize:23, letterSpacing:"-0.025em", color:aT.ink, marginTop:12, textAlign:"center"}}>
          {finished ? "Bloom is on." : "Bloom is getting ready…"}
        </div>
        <div style={{fontSize:13.5, color:aT.muted, fontWeight:600, marginTop:6, textAlign:"center"}}>
          {finished ? (auto ? "Auto Apply is running." : "Manual apply is ready.") : "Setting up your search. Here's how it works."}
        </div>
        <div style={{width:"100%", marginTop:20}}>
          <div style={{height:6, borderRadius:999, background:"#EEF0F1", overflow:"hidden"}}>
            <div style={{height:"100%", width:pct+"%", background:"#5AEBEB", borderRadius:999, transition:"width .2s linear"}}/>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", marginTop:7, fontSize:12, fontWeight:700}}>
            <span style={{color:aT.ink}}>{pct}%</span>
            <span style={{color:aT.muted}}>{finished ? "Done" : `~${secs}s remaining`}</span>
          </div>
        </div>
        <ul aria-live="polite" style={{listStyle:"none", margin:"20px 0 0", padding:0, width:"100%", display:"flex", flexDirection:"column", gap:13}}>
          {lines.map((l,i)=>{
            if (i > li) return null;
            const done = i < li;
            const text = done ? l : l.slice(0, ch);
            return (
              <li key={i} style={{display:"flex", gap:11, alignItems:"flex-start", fontSize:13.5, color:aT.ink, fontWeight:500, lineHeight:1.5}}>
                <span style={{width:20, height:20, borderRadius:"50%", flexShrink:0, marginTop:1, display:"grid", placeItems:"center",
                  background: done ? aT.ink : "#EEF0F1", transition:"background .2s"}}>
                  {done && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
                </span>
                <span>{text}{!done && <span style={{display:"inline-block", width:2, height:"1em", background:aT.ink, marginLeft:1, verticalAlign:"-2px", animation:"bbBlink .8s steps(1) infinite"}}/>}</span>
              </li>
            );
          })}
        </ul>
        {finished ? (
          <div style={{marginTop:22, fontSize:12.5, fontWeight:600, color:aT.muted}}>Taking you to your dashboard…</div>
        ) : (
          <button onClick={()=>{ setLi(lines.length); setCh(0); }} style={{marginTop:22, border:"none", background:"none", padding:0,
            fontFamily:aFB, fontSize:12.5, fontWeight:600, color:aT.muted, cursor:"pointer", textDecoration:"underline"}}>Skip</button>
        )}
        <style>{`@keyframes bbBlink{50%{opacity:0}} @media (prefers-reduced-motion: reduce){[style*="bbBlink"]{animation:none!important}}`}</style>
      </div>
    </div>
  );
}

// =====================================================================
// Backdoor V1 · Sign in / Sign up — full-bleed two-panel screen
// =====================================================================
const { T:sT, FD:sFD, FB:sFB, InlineErr:SErr } = window;

const S_BULLETS = [
  "Bloom reads your résumé once and reuses it everywhere",
  "Every application tailored before it goes out",
  "You only step in when something actually needs you",
];

const GoogleMark = () => (
  <svg width="17" height="17" viewBox="0 0 48 48" aria-hidden="true" style={{flexShrink:0}}>
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
    <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
  </svg>
);
const LinkedInMark = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" style={{flexShrink:0}}>
    <rect width="24" height="24" rx="3" fill="#0A66C2"/>
    <path fill="#fff" d="M7.2 9.6H4.7V19h2.5V9.6zM5.95 8.5a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9zM19.3 19h-2.5v-4.9c0-1.25-.45-2.1-1.55-2.1-.85 0-1.35.57-1.57 1.12-.08.2-.1.47-.1.75V19h-2.5s.03-8.1 0-9.4h2.5v1.33c.33-.52.93-1.26 2.26-1.26 1.65 0 2.96 1.08 2.96 3.41V19z"/>
  </svg>
);

function SField({ label, value, onChange, type, placeholder, err }) {
  return (
    <label style={{display:"flex", flexDirection:"column", gap:6}}>
      <span style={{fontSize:12.5, fontWeight:700, color:sT.ink, letterSpacing:"-0.01em"}}>{label}</span>
      <input value={value} onChange={e=>onChange(e.target.value)} type={type||"text"} placeholder={placeholder}
        style={{background:"#fff", border:`1.5px solid ${err ? sT.blush : sT.hairline}`, borderRadius:12,
          padding:"12px 14px", fontFamily:sFB, fontSize:14.5, fontWeight:600, color:sT.ink, outline:"none"}}/>
    </label>
  );
}

const AS_JOBS = [
  { co:"Notion", role:"Full Stack Engineer", loc:"Toronto, CA", level:"Mid", fit:88 },
  { co:"Stripe", role:"Backend Engineer", loc:"Remote, US", level:"Senior", fit:91 },
  { co:"Ramp", role:"Software Engineer, Growth", loc:"New York, NY", level:"Mid", fit:84 },
  { co:"Vercel", role:"Frontend Platform Engineer", loc:"Remote, US", level:"Senior", fit:86 },
  { co:"Rippling", role:"Platform Engineer", loc:"San Francisco, CA", level:"Mid", fit:82 },
];
const AS_STEPS = ["Preparing your application","Tailoring your résumé","Answering questions","Submitting"];

function ApplyStack() {
  const reduce = typeof window!=="undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [idx, setIdx] = React.useState(0);
  const [prog, setProg] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const [stage, setStage] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [count, setCount] = React.useState(1284);
  React.useEffect(()=>{
    if (reduce) { setProg(.6); setStage(1); return; }
    const t = [];
    setAnimate(false); setProg(0); setStage(0); setDone(false);
    t.push(setTimeout(()=>{ setAnimate(true); setProg(1); }, 60));
    t.push(setTimeout(()=>setStage(1), 800));
    t.push(setTimeout(()=>setStage(2), 1600));
    t.push(setTimeout(()=>setStage(3), 2300));
    t.push(setTimeout(()=>{ setDone(true); setCount(n=>n+1); }, 2950));
    t.push(setTimeout(()=>setIdx(i=>i+1), 3900));
    return ()=>t.forEach(clearTimeout);
  }, [idx]);
  React.useEffect(()=>{
    if (reduce) return;
    const iv = setInterval(()=>setCount(n=>n + (Math.random()<.5 ? 1 : 0)), 1400);
    return ()=>clearInterval(iv);
  }, []);
  const pos = off => off<0 ? {transform:"translateY(-70px) scale(1)", opacity:0, zIndex:4}
    : off===0 ? {transform:"translateY(0) scale(1)", opacity:1, zIndex:3}
    : off===1 ? {transform:"translateY(30px) scale(.93)", opacity:.5, zIndex:2}
    : {transform:"translateY(56px) scale(.86)", opacity:0, zIndex:1};
  const Logo = window.CLogo;
  const cards = [idx-1, idx, idx+1, idx+2].filter(i=>i>=0);
  return (
    <div style={{width:"100%", maxWidth:440, marginTop:22, display:"flex", flexDirection:"column", alignItems:"center", gap:26}}>
      <div style={{position:"relative", width:"100%", height:196}}>
        {cards.map(i=>{
          const j = AS_JOBS[i % AS_JOBS.length];
          const off = i-idx;
          const front = off===0;
          const r = 20, C = 2*Math.PI*r;
          return (
            <div key={i} aria-hidden={!front} style={{position:"absolute", left:0, right:0, top:0, background:"#fff", color:"#022F36", borderRadius:20,
              padding:"18px 18px 16px", boxShadow:"0 18px 40px rgba(0,0,0,.28)", textAlign:"left", transformOrigin:"50% 0",
              transition: reduce ? "none" : "transform .6s cubic-bezier(.2,.7,.2,1), opacity .6s ease", ...pos(off)}}>
              <div style={{display:"flex", alignItems:"flex-start", gap:12}}>
                {Logo ? <Logo co={j.co} size={42}/> : <span style={{width:42, height:42, borderRadius:10, background:"#F1F3F4"}}/>}
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontFamily:sFD, fontWeight:700, fontSize:17, lineHeight:1.2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{j.role}</div>
                  <div style={{display:"flex", gap:6, marginTop:7, flexWrap:"wrap"}}>
                    <span style={{fontSize:11.5, fontWeight:700, color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"3px 9px"}}>Posted today</span>
                    <span style={{fontSize:11.5, fontWeight:700, color:"#14663F", background:"#DFF6E8", borderRadius:999, padding:"3px 9px"}}>Strong fit</span>
                  </div>
                </div>
                <div style={{position:"relative", width:48, height:48, flexShrink:0}}>
                  <svg width="48" height="48" style={{transform:"rotate(-90deg)"}}>
                    <circle cx="24" cy="24" r={r} fill="none" stroke="#E6F4EC" strokeWidth="4"/>
                    <circle cx="24" cy="24" r={r} fill="none" stroke="#22A565" strokeWidth="4" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C*(1-j.fit/100)}/>
                  </svg>
                  <span style={{position:"absolute", inset:0, display:"grid", placeItems:"center", fontSize:13, fontWeight:800, color:"#14663F"}}>{j.fit}</span>
                </div>
              </div>
              <div style={{display:"flex", gap:16, marginTop:12, fontSize:12.5, fontWeight:600, color:"#4B5A5E", flexWrap:"wrap"}}>
                <span>{j.co}</span><span>· {j.loc}</span><span>· {j.level}</span>
              </div>
              <div style={{position:"relative", marginTop:14, height:44, borderRadius:999, overflow:"hidden", background: front && done ? "#22A565" : "#BFF3F3"}}>
                {!(front && done) && <div style={{position:"absolute", inset:0, width: front ? `${prog*100}%` : "0%", background:"#1ED3D6",
                  transition: front && animate && !reduce ? "width 2.8s cubic-bezier(.4,.1,.3,1)" : "none"}}/>}
                <div style={{position:"relative", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                  fontSize:13.5, fontWeight:800, color: front && done ? "#fff" : "#022F36"}}>
                  {front && done
                    ? <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Applied</>
                    : <>{front ? AS_STEPS[stage] : AS_STEPS[0]}<span className="as-spark" style={{fontSize:13}}>✦</span></>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <span role="status" style={{position:"absolute", width:1, height:1, overflow:"hidden", clip:"rect(0 0 0 0)", whiteSpace:"nowrap"}}>
        {done ? `Applied to ${AS_JOBS[idx % AS_JOBS.length].role} at ${AS_JOBS[idx % AS_JOBS.length].co}` : ""}
      </span>
      <div style={{display:"inline-flex", alignItems:"center", gap:9, padding:"9px 16px", borderRadius:999, border:"1px solid rgba(255,255,255,.14)",
        background:"rgba(255,255,255,.05)", fontSize:13, fontWeight:600, color:"rgba(255,255,255,.85)"}}>
        <span className="as-dot" style={{width:7, height:7, borderRadius:"50%", background:"#5AEBEB"}}/>
        <span>{count.toLocaleString()} applications sent in the last hour</span>
      </div>
    </div>
  );
}
if (typeof document!=="undefined" && !document.getElementById("as-css")) {
  const st = document.createElement("style"); st.id = "as-css";
  st.textContent = "@keyframes asPulse{0%{box-shadow:0 0 0 0 rgba(90,235,235,.5)}70%{box-shadow:0 0 0 7px rgba(90,235,235,0)}100%{box-shadow:0 0 0 0 rgba(90,235,235,0)}}.as-dot{animation:asPulse 1.8s ease-out infinite}@keyframes asTw{0%,100%{opacity:.4;transform:scale(.85)}50%{opacity:1;transform:scale(1.1)}}.as-spark{display:inline-block;animation:asTw 1s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.as-dot,.as-spark{animation:none}}";
  document.head.appendChild(st);
}

function SignIn({ onDone }) {
  const [mode, setMode] = React.useState("signup");
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [err, setErr] = React.useState(null);
  const up = mode === "signup";

  function submit(e) {
    if (e) e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setErr("Enter a valid email address.");
    if (pw.length < 8) return setErr("Password needs at least 8 characters.");
    setErr(null); onDone();
  }

  const sso = (label, Mark) => (
    <button type="button" onClick={onDone} className="bd-sso" style={{display:"flex", alignItems:"center", justifyContent:"center",
      gap:9, padding:"12px 16px", borderRadius:999, background:"#fff", border:`1.5px solid ${sT.hairline}`,
      fontFamily:sFB, fontSize:14, fontWeight:700, color:sT.ink, cursor:"pointer"}}>
      <Mark/>{label}
    </button>
  );

  return (
    <div style={{position:"fixed", inset:0, fontFamily:sFB, color:sT.ink, display:"grid",
      gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)", overflow:"auto"}}>

      {/* LEFT — live apply animation */}
      <div style={{position:"relative", background:"linear-gradient(165deg, #022F36 0%, #03363E 60%, #022A30 100%)",
        padding:"38px 48px 48px", display:"flex", flexDirection:"column", minHeight:"100vh", color:"#fff"}}>
        <div aria-hidden="true" style={{position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize:"22px 22px", pointerEvents:"none"}}/>
        <div style={{position:"relative", flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", gap:12, padding:"20px 0 8px"}}>
          <img src="assets/bloom-logo-main.png" alt="bloom" style={{height:56, width:"auto", display:"block", marginBottom:14}}/>
          <div style={{fontFamily:sFD, fontWeight:700, fontSize:40, letterSpacing:"-0.03em", lineHeight:1.1, maxWidth:460, textWrap:"balance"}}>
            Be <span style={{color:"#5AEBEB"}}>first</span> to every job that fits you
          </div>
          <div style={{fontSize:15, fontWeight:600, color:"rgba(255,255,255,.7)", maxWidth:400, lineHeight:1.5}}>
            Bloom finds, tailors and applies in the background. You step in only when it matters.
          </div>
          <ApplyStack/>
        </div>
      </div>

      {/* RIGHT — form */}
      <div style={{background:"#fff", borderLeft:`1px solid ${sT.hairline}`, padding:"56px 56px",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
        <form onSubmit={submit} style={{width:"100%", maxWidth:380, display:"flex", flexDirection:"column", gap:18}}>
          <div style={{display:"flex", flexDirection:"column", gap:7}}>
            <div style={{fontFamily:sFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
              {up ? "Welcome to Bloom" : "Welcome back"}
            </div>
            <div style={{fontSize:13.5, color:sT.muted, fontWeight:600, lineHeight:1.45}}>
              {up ? "Start with your résumé. No card required." : "Pick up right where Bloom left off."}
            </div>
          </div>

          <div style={{display:"grid", gap:9}}>
            {sso("Continue with Google", GoogleMark)}
            {sso("Continue with LinkedIn", LinkedInMark)}
          </div>

          <div style={{display:"flex", alignItems:"center", gap:12}}>
            <div style={{flex:1, height:1, background:sT.hairline}}/>
            <span style={{fontSize:11.5, fontWeight:700, color:sT.muted, whiteSpace:"nowrap"}}>or continue with email</span>
            <div style={{flex:1, height:1, background:sT.hairline}}/>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            <SField label="Email" value={email} onChange={v=>{setEmail(v); setErr(null);}}
              type="email" placeholder="you@email.com" err={err}/>
            <SField label="Password" value={pw} onChange={v=>{setPw(v); setErr(null);}}
              type="password" placeholder="At least 8 characters" err={err}/>
          </div>

          {err && <SErr>{err}</SErr>}

          <button type="submit" className="bd-primary" style={{padding:"13px 24px", borderRadius:999, background:sT.ink, color:"#fff",
            fontFamily:sFB, fontSize:14.5, fontWeight:700, border:"none", cursor:"pointer"}}>
            {up ? "Create account" : "Sign in"}<span className="bd-arrow">→</span>
          </button>

          <div style={{fontSize:13, fontWeight:600, color:sT.muted, textAlign:"center"}}>
            {up ? "Already have an account? " : "New to Bloom? "}
            <button type="button" className="bd-textlink"
              onClick={()=>{ setMode(up ? "signin" : "signup"); setErr(null); }}
              style={{color:sT.cyanInk, fontWeight:700, cursor:"pointer", background:"none", border:"none",
                padding:0, margin:0, font:"inherit", fontWeight:700, boxShadow:"none", borderRadius:0}}>
              {up ? "Sign in" : "Create an account"}
            </button>
          </div>

          <div style={{fontSize:11.5, fontWeight:600, color:sT.muted, opacity:.8, textAlign:"center", lineHeight:1.5}}>
            By continuing you agree to Bloom's <a className="bd-legal" href="#terms">Terms</a> and <a className="bd-legal" href="#privacy">Privacy Policy</a>.
          </div>
        </form>
      </div>
    </div>
  );
}

Object.assign(window, { SignIn });

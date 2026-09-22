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

      {/* LEFT — marketing */}
      <div style={{background:`linear-gradient(160deg, #FFFDFA 0%, #FDFAF4 55%, ${sT.cream} 100%)`,
        padding:"38px 56px 56px", display:"flex", flexDirection:"column", minHeight:"100vh"}}>
        <div style={{flex:1, display:"flex", flexDirection:"column", justifyContent:"flex-start", gap:100, maxWidth:460}}>
          <img src="assets/bloom-logo.svg" alt="bloom" style={{height:23, width:"auto", display:"block", flexShrink:0, alignSelf:"flex-start"}}/>
          <div style={{display:"flex", flexDirection:"column", gap:26}}>
          <div style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{fontSize:11, fontWeight:800, color:"#4B5A5E", letterSpacing:".07em"}}>YOUR JOB-SEARCH COPILOT</div>
            <div style={{fontFamily:sFD, fontWeight:700, fontSize:40, letterSpacing:"-0.035em", lineHeight:1.06}}>
              Be <span style={{color:sT.mintInk || "#1F8A5B"}}>first</span> to every job that fits you. Hands off.
            </div>
            <div style={{fontSize:14.5, fontWeight:600, color:"#4B5A5E", lineHeight:1.6}}>
              Set up once and Bloom keeps applying in the background — matched roles, tailored applications,
              and a nudge only when something needs you.
            </div>
          </div>
          <div style={{height:1, background:sT.hairline}}/>
          <div style={{display:"flex", flexDirection:"column", gap:16}}>
            {S_BULLETS.map(b=>(
              <div key={b} style={{display:"flex", gap:11, alignItems:"flex-start"}}>
                <span style={{color:sT.ink, fontSize:13, fontWeight:800, lineHeight:1.45, flexShrink:0}}>✓</span>
                <span style={{fontSize:13.5, fontWeight:600, color:"#4B5A5E", lineHeight:1.5}}>{b}</span>
              </div>
            ))}
          </div>
        </div>
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

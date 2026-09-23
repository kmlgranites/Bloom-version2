// =====================================================================
// Backdoor V1 · Card 0 — Upload your résumé (static two-column page)
// =====================================================================
const { T:zT, FD:zFD, FB:zFB, InlineErr:ZErr } = window;

const MAX_MB = 10;
const Z_BULLETS = [
  "Skills, roles, and dates pulled straight from your PDF",
  "A first-pass cover letter drafted from your experience",
  "Personalized matches ready by the time you finish setup.",
];

function UploadCloud({ color }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 17.5a4.5 4.5 0 0 0-1.2-8.84A6 6 0 0 0 4.6 10.2 3.9 3.9 0 0 0 6 17.5"/>
      <path d="M12 12v8"/><path d="m8.8 15.2 3.2-3.2 3.2 3.2"/>
    </svg>
  );
}

function Card0({ st, set, locked, onNext }) {
  const [err, setErr] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const input = React.useRef(null);

  function take(file) {
    if (!file) return;
    if (!/\.pdf$/i.test(file.name) || (file.type && file.type !== "application/pdf"))
      return setErr("That's not a PDF. Export your résumé as a PDF and drop it in.");
    if (file.size > MAX_MB * 1024 * 1024)
      return setErr(`That file is over ${MAX_MB}MB. Trim the images or re-export it smaller.`);
    setErr(null);
    set({ resume: file.name, resumeSize: (file.size/1024/1024).toFixed(1) + "MB" });
  }
  function next() {
    if (uploading) return;
    if (!st.resume) return setErr("I need your résumé first — everything after this fills itself in.");
    setErr(null); setUploading(true);
    setTimeout(()=>{ setUploading(false); onNext(); }, 1400);
  }

  React.useEffect(()=>{
    if (locked) return;
    function onKey(e){ if (e.key === "Enter" && st.resume) next(); }
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  }, [locked, st.resume]);

  const fileChip = (
    <div style={{display:"flex", alignItems:"center", gap:12, padding:"14px 16px", background:zT.mint, borderRadius:16}}>
      <div style={{width:30, height:30, borderRadius:"50%", background:zT.mintInk, color:"#fff",
        display:"grid", placeItems:"center", fontSize:14, fontWeight:800, flexShrink:0}}>✓</div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{fontSize:13.5, fontWeight:700, color:zT.mintInk, overflow:"hidden",
          textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{st.resume}</div>
        <div style={{fontSize:11.5, fontWeight:600, color:zT.mintInk, opacity:.75}}>PDF · {st.resumeSize}</div>
      </div>
      {!locked && (
        <button onClick={()=>{ set({resume:null, resumeSize:null, parsed:false}); setErr(null); }}
          style={{fontSize:12.5, fontWeight:700, color:zT.mintInk, cursor:"pointer"}}>Replace</button>
      )}
    </div>
  );

  if (locked) return fileChip;

  return (
    <div style={{display:"grid", gridTemplateColumns:"40% 60%", background:"#fff",
      border:`1px solid ${zT.hairline}`, borderRadius:24, overflow:"hidden"}}>

      {/* LEFT — getting started */}
      <div style={{background:"#F9FAFB", color:zT.ink, padding:"52px 38px", display:"flex", flexDirection:"column",
        gap:36, position:"relative", overflow:"hidden"}}>
        <div style={{position:"absolute", bottom:-70, right:-70, width:240, height:240, borderRadius:"50%",
          background:"#fff", opacity:.6, filter:"blur(40px)"}}/>
        <div style={{position:"relative", display:"flex", flexDirection:"column", gap:14}}>
          <div style={{fontSize:11, fontWeight:800, color:zT.muted, letterSpacing:".07em"}}>GETTING STARTED</div>
          <div style={{fontSize:14, fontWeight:600, color:zT.ink, opacity:.85, lineHeight:1.6}}>
            Upload your resume and I'll pull your profile, draft a first cover letter, and have matches ready — usually in under a minute.
          </div>
        </div>
        <div style={{position:"relative", display:"flex", flexDirection:"column", gap:18}}>
          {Z_BULLETS.map(b=>(
            <div key={b} style={{display:"flex", gap:11, alignItems:"flex-start"}}>
              <span style={{color:"#1F8A5B", fontSize:13, fontWeight:800, lineHeight:1.45, flexShrink:0}}>✓</span>
              <span style={{fontSize:13, fontWeight:600, color:zT.ink, opacity:.8, lineHeight:1.5}}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — upload */}
      <div style={{padding:"52px 42px", display:"flex", flexDirection:"column", gap:26}}>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          <div style={{fontSize:11, fontWeight:800, color:zT.cyanInk, letterSpacing:".07em"}}>RESUME</div>
          <div style={{fontFamily:zFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", color:zT.ink, lineHeight:1.12}}>
            Upload your resume.
          </div>
          <div style={{fontSize:13.5, color:zT.muted, fontWeight:600, lineHeight:1.45}}>
            PDF only, under 10MB. We parse it, and have matches waiting by the time you finish setup.
          </div>
        </div>

        <input ref={input} type="file" accept="application/pdf" style={{display:"none"}}
          onChange={e=>take(e.target.files && e.target.files[0])}/>

        {!st.resume ? (
          <div
            className="bd-dropzone"
            onClick={()=>input.current && input.current.click()}
            onDragOver={e=>{ e.preventDefault(); setOver(true); }}
            onDragLeave={()=>setOver(false)}
            onDrop={e=>{ e.preventDefault(); setOver(false); take(e.dataTransfer.files && e.dataTransfer.files[0]); }}
            style={{border:`1.5px dashed ${err ? zT.blush : (over ? zT.cyanInk : zT.hairline)}`, borderRadius:18,
              background: err ? "#FFF6F3" : (over ? "#F7F1E6" : "#FFFCF6"), padding:"52px 24px", display:"flex", flexDirection:"column",
              alignItems:"center", gap:12, cursor:"pointer", transition:"all .15s"}}>
            <UploadCloud color={err ? zT.blushInk : (over ? zT.ink : zT.cyanInk)}/>
            <div style={{fontSize:14.5, fontWeight:700, color:zT.ink, letterSpacing:"-0.01em", textAlign:"center"}}>
              Drop your PDF here, or <span style={{color:zT.cyanInk, textDecoration:"underline"}}>browse</span>
            </div>
            <div style={{fontSize:11.5, fontWeight:600, color:zT.muted}}>Resume · PDF only · up to {MAX_MB}MB</div>
          </div>
        ) : fileChip}

        {err && <ZErr>{err}</ZErr>}

        {!st.resume && (
          <div style={{display:"flex", gap:14, fontSize:12, fontWeight:700}}>
            <button onClick={()=>{ setErr(null); set({resume:"Vinodh_Resume_2026.pdf", resumeSize:"0.4MB"}); }}
              style={{color:zT.muted, cursor:"pointer"}}>▸ preview: sample résumé</button>
            <button onClick={()=>setErr(`That file is over ${MAX_MB}MB. Trim the images or re-export it smaller.`)}
              style={{color:zT.muted, cursor:"pointer"}}>▸ preview: bad file</button>
          </div>
        )}

        <div style={{display:"flex", alignItems:"center", justifyContent:"flex-start", gap:14, marginTop:"auto", paddingTop:8}}>
          <button onClick={next} disabled={uploading} className="bd-primary" style={{padding:"13px 24px", borderRadius:999, background:zT.ink, color:"#fff",
            fontFamily:zFB, fontSize:14.5, fontWeight:700, border:"none", cursor: uploading ? "default" : "pointer",
            opacity: uploading ? .85 : 1, display:"flex", alignItems:"center", gap:9}}>
            {uploading && <span className="bd-spin" style={{width:14, height:14, borderRadius:"50%",
              border:"2px solid rgba(255,255,255,.35)", borderTopColor:"#fff", display:"inline-block"}}/>}
            {uploading ? "Uploading…" : <>Continue<span className="bd-arrow">→</span></>}
          </button>
          <span style={{fontSize:11.5, fontWeight:600, color:zT.muted}}>or press ↵ Enter</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Card0 });

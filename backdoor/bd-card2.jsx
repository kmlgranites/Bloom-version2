// =====================================================================
// Backdoor V1 · Card 2 (Step 2) — How should we reach out? (framed)
// =====================================================================
const { T:nT, FD:nFD, FB:nFB, InlineErr:NErr } = window;

const N_COUNTRIES = [
  { code:"US", name:"United States", dial:"+1", flag:"🇺🇸" },
  { code:"CA", name:"Canada",        dial:"+1", flag:"🇨🇦" },
];

function NLabel({ children, hint }) {
  return (
    <div style={{fontSize:11, fontWeight:800, color:nT.muted, letterSpacing:".07em", marginBottom:8}}>
      {children}{hint && <span style={{fontWeight:600, letterSpacing:0}}> · {hint}</span>}
    </div>
  );
}

const NChevron = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);

function fmtUS(v) {
  const d = v.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0,3)}) ${d.slice(3)}`;
  return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
}

function NPhone({ country, setCountry, value, onChange, invalid, disabled }) {
  const [open, setOpen] = React.useState(false);
  const box = React.useRef(null);
  React.useEffect(()=>{
    function away(e){ if (box.current && !box.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", away);
    return ()=>document.removeEventListener("mousedown", away);
  }, []);
  return (
    <div ref={box} style={{position:"relative"}}>
      <div style={{display:"flex", border:`1.5px solid ${invalid ? nT.blush : nT.hairline}`, borderRadius:8,
        background: disabled ? "#F9FAFB" : "#fff", overflow:"hidden"}}>
        <button type="button" disabled={disabled} onClick={()=>setOpen(o=>!o)}
          style={{display:"flex", alignItems:"center", gap:7, padding:"12px 12px", borderRight:`1.5px solid ${nT.hairline}`,
            background:"transparent", cursor: disabled ? "default" : "pointer", flexShrink:0}}>
          <span style={{fontSize:18, lineHeight:1}}>{country.flag}</span>
          <NChevron/>
        </button>
        <div style={{display:"flex", alignItems:"center", gap:8, flex:1, minWidth:0, padding:"0 14px"}}>
          <span style={{fontSize:15, fontWeight:600, color:nT.ink}}>{country.dial}</span>
          <input value={value} onChange={e=>onChange(fmtUS(e.target.value))} disabled={disabled}
            inputMode="tel" placeholder="(555) 019-2837"
            style={{flex:1, minWidth:0, border:"none", outline:"none", background:"transparent",
              fontFamily:nFB, fontSize:15, fontWeight:600, color:nT.ink, padding:"12px 0"}}/>
        </div>
      </div>
      {open && (
        <div style={{position:"absolute", zIndex:30, top:"calc(100% + 6px)", left:0, width:280, background:"#fff",
          border:`1px solid ${nT.hairline}`, borderRadius:10, boxShadow:"0 14px 34px rgba(2,47,54,.14)", padding:6}}>
          {N_COUNTRIES.map(c=>(
            <button key={c.code} type="button" onClick={()=>{ setCountry(c); setOpen(false); }}
              style={{width:"100%", display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:6,
                fontFamily:nFB, fontSize:14, fontWeight:500, color:nT.ink, cursor:"pointer", textAlign:"left",
                background: c.code===country.code ? "#F7F1E6" : "transparent"}}>
              <span style={{fontSize:17, lineHeight:1}}>{c.flag}</span>
              <span style={{flex:1}}>{c.name}</span>
              <span style={{color:nT.muted, fontWeight:600}}>{c.dial}</span>
            </button>
          ))}
          <div style={{fontSize:11.5, fontWeight:600, color:nT.muted, padding:"8px 12px 4px", lineHeight:1.45}}>
            US and Canada only for now — that's where Bloom applies on your behalf.
          </div>
        </div>
      )}
    </div>
  );
}

function NChannel({ id, title, desc, descWeight, on, onClick, disabled }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled}
      style={{display:"flex", alignItems:"flex-start", gap:11, padding:"14px 15px", borderRadius:10, textAlign:"left",
        border:`1.5px solid ${on ? nT.ink : nT.hairline}`, background: on ? "#E0FAFA" : "#fff",
        cursor: disabled ? "default" : "pointer", width:"100%"}}>
      <span style={{width:17, height:17, borderRadius:"50%", marginTop:2, flexShrink:0, display:"grid",
        placeItems:"center", border:`1.5px solid ${on ? nT.ink : nT.hairline}`, background: on ? nT.ink : "#fff"}}>
        {on && <span style={{width:6, height:6, borderRadius:"50%", background:"#fff"}}/>}
      </span>
      <span style={{minWidth:0}}>
        <span style={{display:"block", fontSize:14, fontWeight:700, color:nT.ink}}>{title}</span>
        <span style={{display:"block", fontSize:12, fontWeight:descWeight || 500, color:nT.muted, lineHeight:1.45, marginTop:3}}>{desc}</span>
      </span>
    </button>
  );
}

function ContactRail({ st }) {
  return (
    <div style={{background:"#F9FAFB", padding:"44px 32px 48px", display:"flex", flexDirection:"column", gap:26, width:358, height:689}}>
      <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
          <span style={{fontSize:11, fontWeight:800, color:nT.muted, letterSpacing:".07em"}}>RESUME</span>
          <span style={{fontSize:12, fontWeight:700, color:"#1F8A5B", display:"flex", alignItems:"center", gap:6}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#1F8A5B"}}/>done
          </span>
        </div>
        <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
          Parsed. While you finish setup, we're matching jobs for you.
        </div>
      </div>
      <div>
        <div style={{fontSize:13.5, fontWeight:800, color:nT.ink, marginBottom:8}}>Why I ask</div>
        <div style={{fontSize:13, fontWeight:600, color:"#4B5A5E", lineHeight:1.55}}>
          This is the one place I'll interrupt you: an interview request, a question a form asks that only you can
          answer, or a submission that needs your OK. Never marketing.
        </div>
      </div>
      <div style={{marginTop:"auto", fontSize:12.5, fontWeight:600, color:nT.muted, lineHeight:1.5}}>
        One number, verified once. Change it any time in Settings.
      </div>
    </div>
  );
}

function ContactCard({ st, set, locked, onNext, toast }) {
  const [err, setErr] = React.useState(null);
  const [otpErr, setOtpErr] = React.useState(null);
  const [secs, setSecs] = React.useState(0);
  const boxes = React.useRef([]);
  const country = N_COUNTRIES.filter(c=>c.code === (st.country || "US"))[0];
  const digits = (st.phone || "").replace(/\D/g, "");
  const valid = digits.length === 10;

  React.useEffect(()=>{
    if (secs <= 0) return;
    const t = setTimeout(()=>setSecs(s=>s-1), 1000);
    return ()=>clearTimeout(t);
  }, [secs]);

  function sendCode(resend) {
    if (!valid) return setErr("Enter a 10-digit US or Canadian number.");
    setErr(null); setOtpErr(null);
    set({ otpSent:true, otp:["","","","","",""] });
    setSecs(30);
    toast(resend ? "New code sent" : `Code sent to ${country.dial} ${st.phone}`);
    setTimeout(()=>boxes.current[0] && boxes.current[0].focus(), 80);
  }
  function setDigit(i, v) {
    const d = v.replace(/\D/g,"").slice(-1);
    const otp = (st.otp || ["","","","","",""]).slice(); otp[i] = d; set({otp}); setOtpErr(null);
    if (d && i < 5 && boxes.current[i+1]) boxes.current[i+1].focus();
    if (otp.every(x=>x)) {
      if (otp.join("") === "000000") setOtpErr("That code didn't match. Check your messages or resend.");
      else { set({verified:true}); toast("Number verified"); }
    }
  }
  function onPaste(e) {
    const d = (e.clipboardData.getData("text") || "").replace(/\D/g,"").slice(0,6);
    if (d.length < 6) return;
    e.preventDefault();
    const otp = d.split(""); set({otp});
    if (d === "000000") setOtpErr("That code didn't match. Check your messages or resend.");
    else { set({verified:true}); toast("Number verified"); }
  }

  React.useEffect(()=>{
    if (locked) return;
    function onKey(e){
      if (e.key !== "Enter") return;
      const t = e.target && e.target.tagName;
      if (t === "TEXTAREA" || (t === "INPUT" && e.target.type !== "checkbox")) return;
      next();
    }
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  });

  function next() {
    if (!valid) return setErr("Enter a 10-digit US or Canadian number.");
    if (!st.verified) return setErr("Verify the number first — or choose email-only updates below.");
    if (!st.linkedin) return setErr("Add your LinkedIn URL so I can reference it in applications.");
    setErr(null); onNext();
  }

  if (locked) return (
    <div style={{display:"flex", flexWrap:"wrap", gap:8, padding:"14px 16px", background:"#F9FAFB", borderRadius:16}}>
      {[`${country.dial} ${st.phone}`, st.verified ? "verified" : "unverified",
        st.channel === "imessage" ? "iMessage / SMS" : "WhatsApp"].filter(Boolean).map(x=>(
        <span key={x} style={{fontSize:12.5, fontWeight:700, color:nT.ink, background:"#fff",
          border:`1px solid ${nT.hairline}`, borderRadius:999, padding:"5px 11px"}}>{x}</span>
      ))}
    </div>
  );

  return (
    <div style={{display:"flex", alignItems:"stretch", justifyContent:"center", background:"#fff",
      border:`1px solid ${nT.hairline}`, borderRadius:24, overflow:"hidden"}}>
      <ContactRail st={st}/>
      <div style={{padding:"44px 40px 48px", display:"flex", flexDirection:"column", gap:24, width:608, height:685}}>
        <div style={{display:"flex", flexDirection:"column", gap:9}}>
          <div style={{fontSize:11, fontWeight:800, color:nT.cyanInk, letterSpacing:".07em"}}>CONTACT</div>
          <div style={{fontFamily:nFD, fontWeight:700, fontSize:28, letterSpacing:"-0.03em", lineHeight:1.12}}>
            How should we reach out?
          </div>
          <div style={{fontSize:13.5, color:nT.muted, fontWeight:600, lineHeight:1.45}}>
            I'll message you when an application is submitted or something needs your answer.
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <NLabel>LINKEDIN URL</NLabel>
          <input value={st.linkedin || ""} onChange={e=>{ set({linkedin:e.target.value}); setErr(null); }}
            placeholder="linkedin.com/in/yourname"
            style={{width:"100%", boxSizing:"border-box", padding:"13px 14px", borderRadius:10,
              border:`1.5px solid ${err && !st.linkedin ? "#C1443B" : nT.hairline}`, outline:"none", fontFamily:nFB, fontSize:14.5, fontWeight:600, color:nT.ink}}/>
        </div>

        <div>
          <NLabel>PHONE NUMBER</NLabel>
          <NPhone country={country} setCountry={c=>set({country:c.code, verified:false, otpSent:false})}
            value={st.phone} invalid={!!err && !valid} disabled={st.verified}
            onChange={v=>{ set({phone:v, verified:false, otpSent:false}); setErr(null); }}/>
          {!st.verified && (
            <div style={{fontSize:11.5, color:nT.muted, fontWeight:600, marginTop:8}}>
              US and Canada for now. We'll send one code to confirm it's you.
            </div>
          )}
        </div>

        {/* Channel */}
        <div>
          <NLabel>WHERE UPDATES GO</NLabel>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:9}}>
            <NChannel on={(st.channel || "whatsapp") === "whatsapp"} disabled={st.verified}
              onClick={()=>set({channel:"whatsapp", verified:false, otpSent:false})}
              title="WhatsApp"
              desc="Threaded updates you can reply to."/>
            <NChannel on={st.channel === "imessage"} disabled={st.verified}
              onClick={()=>set({channel:"imessage", verified:false, otpSent:false})}
              title="iMessage / SMS" descWeight={400}
              desc="Arrives as a normal text."/>
          </div>
          <div style={{fontSize:11.5, color:nT.muted, fontWeight:600, marginTop:8}}>
            Email gets a copy either way.
          </div>
        </div>

        {/* Verification */}
        {st.verified ? (
          <div style={{display:"flex", alignItems:"center", gap:11, padding:"13px 15px", background:"#EAF8F0",
            borderRadius:10}}>
            <span style={{width:22, height:22, borderRadius:"50%", background:"#1F8A5B", color:"#fff",
              display:"grid", placeItems:"center", fontSize:12, fontWeight:800, flexShrink:0}}>✓</span>
            <span style={{flex:1, fontSize:13.5, fontWeight:700, color:"#14663F"}}>
              {country.dial} {st.phone} verified
            </span>
            <button onClick={()=>set({verified:false, otpSent:false, otp:["","","","","",""]})}
              className="bd-textlink" style={{fontSize:12.5, fontWeight:700, color:"#14663F", cursor:"pointer"}}>
              Change
            </button>
          </div>
        ) : !st.otpSent ? (
          <button onClick={()=>sendCode(false)} disabled={!valid}
            style={{alignSelf:"flex-start", padding:"11px 18px", borderRadius:999, border:`1.5px solid ${nT.ink}`,
              background:"#fff", color:nT.ink, fontFamily:nFB, fontSize:13.5, fontWeight:700,
              cursor: valid ? "pointer" : "default", opacity: valid ? 1 : .45}}>
            Send verification code
          </button>
        ) : (
          <div style={{display:"flex", flexDirection:"column", gap:10, padding:"16px 17px", borderRadius:12,
            border:`1.5px solid ${nT.hairline}`, background:"#FFFCF6"}}>
            <div style={{fontSize:13, fontWeight:700, color:nT.ink}}>
              Enter the 6-digit code sent to {country.dial} {st.phone}
            </div>
            <div style={{display:"flex", gap:8}} onPaste={onPaste}>
              {(st.otp || ["","","","","",""]).map((d,i)=>(
                <input key={i} ref={el=>boxes.current[i]=el} value={d} inputMode="numeric" maxLength={2}
                  onChange={e=>setDigit(i, e.target.value)}
                  onKeyDown={e=>{ if(e.key==="Backspace" && !d && i>0 && boxes.current[i-1]) boxes.current[i-1].focus(); }}
                  style={{width:44, height:52, textAlign:"center", borderRadius:8, fontFamily:nFB,
                    fontSize:19, fontWeight:700, color:nT.ink, background:"#fff", outline:"none",
                    border:`1.5px solid ${otpErr ? nT.blush : (d ? nT.ink : nT.hairline)}`}}/>
              ))}
            </div>
            {otpErr && <NErr>{otpErr}</NErr>}
            <div style={{display:"flex", alignItems:"center", gap:14}}>
              <button onClick={()=>secs===0 && sendCode(true)} disabled={secs>0} className="bd-textlink"
                style={{fontSize:12.5, fontWeight:700, color: secs>0 ? nT.muted : nT.cyanInk,
                  cursor: secs>0 ? "default" : "pointer"}}>
                {secs>0 ? `Resend in ${secs}s` : "Resend code"}
              </button>
              <button onClick={()=>{ set({verified:false, otpSent:false, channel:"email"}); onNext(); }}
                className="bd-textlink" style={{fontSize:12.5, fontWeight:600, color:nT.muted, cursor:"pointer"}}>
                Skip — email updates only
              </button>
            </div>
          </div>
        )}

        {err && <NErr>{err}</NErr>}

        <div style={{display:"flex", alignItems:"center", gap:14, paddingTop:4}}>
          <button onClick={next} className="bd-primary" style={{padding:"13px 24px", borderRadius:999,
            background:nT.ink, color:"#fff", fontFamily:nFB, fontSize:14.5, fontWeight:700, border:"none",
            cursor:"pointer"}}>Continue<span className="bd-arrow">→</span></button>
          <span style={{fontSize:11.5, fontWeight:600, color:nT.muted}}>or press ↵ Enter</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContactCard });

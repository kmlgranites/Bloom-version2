// =====================================================================
// Backdoor V1 · Cards 1–3 — Role & level · Work eligibility · Contact
// =====================================================================
const { T:cT, FD:cFD, FB:cFB, Bubble:CB, Question:CQ, PillRow:CPR, Pill:CP, toggleArr:cTog,
  SubCard:CSub, Toggle:CTog, Field:CF, CTA:CCta, InlineErr:CErr, Note:CNote } = window;

const ROLES = [
  { id:"Software Engineer", label:"Software Engineer" },
  { id:"Product Designer", label:"Product Designer", soon:true },
  { id:"Product Manager", label:"Product Manager", soon:true },
  { id:"Data / ML", label:"Data / ML", soon:true },
  { id:"Marketing", label:"Marketing", soon:true },
  { id:"Sales", label:"Sales", soon:true },
];
const ENG_KINDS = ["Frontend","Backend","Full-Stack","Mobile (iOS/Android)","DevOps / Infra",
  "Data Engineer","ML / AI Engineer","QA / Test","Security","Embedded","Engineering Manager"];

const CITIZENSHIPS = ["India","United States","Canada","United Kingdom","Germany","Australia","Singapore","Other →"];
const TARGETS = [
  { id:"United States", label:"🇺🇸 United States" },
  { id:"Canada", label:"🇨🇦 Canada" },
  { id:"United Kingdom", label:"🇬🇧 United Kingdom", soon:true },
  { id:"Germany", label:"🇩🇪 Germany", soon:true },
  { id:"Australia", label:"🇦🇺 Australia", soon:true },
  { id:"Remote / Anywhere", label:"🌎 Remote / Anywhere", soon:true },
];
const VISA_TYPES = ["H-1B","OPT / STEM OPT","L-1","O-1","TN","Other →"];
const VISA_STATUS = ["Approved / active","Filed — pending","Not started"];
const DIAL_CODES = ["+91","+1","+44","+65","+61"];

// ───────────────────────── CARD 1 · Role & level ─────────────────────
function Card1({ st, set, locked, onNext }) {
  const [err, setErr] = React.useState(null);
  function next() {
    if (!st.engKinds.length) return setErr("Pick at least one — it's how I match you to the right reqs.");
    setErr(null); onNext();
  }
  return (
    <>
      <CB>Got it. Now a few basics so I know what to look for. <b>Tap, don't type.</b></CB>

      <CQ label="What role?" answered={locked && st.role}>
        <CPR items={ROLES} value={st.role} setValue={v=>set({role:v})} locked={locked}/>
        <div style={{fontSize:11.5, color:cT.muted, fontWeight:600, marginTop:2}}>
          Engineering is all I cover well today. The rest are close — I'll ping you when they open.
        </div>
      </CQ>

      <CQ label="What kind of engineer?" hint="pick all that count"
        answered={locked && st.engKinds.join(" + ")} error={err}>
        <CPR items={ENG_KINDS} value={st.engKinds} multi locked={locked}
          setValue={v=>{ set({engKinds: cTog(st.engKinds, v)}); setErr(null); }}/>
      </CQ>

      <CQ label="What level?" answered={locked && st.level}>
        <CPR items={["Entry","Mid","Senior","Staff","Lead"]} value={st.level} setValue={v=>set({level:v})} locked={locked}/>
      </CQ>

      <CQ label="What kind of work?" hint="pick all that count" answered={locked && st.types.join(" + ")}>
        <CPR items={["Fulltime","Part-time","Contractor","Internship"]} value={st.types} multi locked={locked}
          setValue={v=>set({types: cTog(st.types, v)})}/>
      </CQ>

      <CQ label="Where?" answered={locked && st.setting}>
        <CPR items={["Remote","Hybrid","Onsite OK"]} value={st.setting} setValue={v=>set({setting:v})} locked={locked}/>
      </CQ>

      {!locked && <CCta label="Got it — where you can work" onClick={next}/>}
    </>
  );
}

// ──────────────────── CARD 2 · Work eligibility ──────────────────────
function Card2({ st, set, locked, onNext }) {
  const [err, setErr] = React.useState(null);
  function setElig(country, patch) {
    set({ elig: { ...st.elig, [country]: { ...(st.elig[country]||{}), ...patch } } });
  }
  function next() {
    if (!st.targets.length) return setErr("Pick at least one — I can only search where you can work.");
    setErr(null); onNext();
  }
  return (
    <>
      <CB>Now the part that decides which jobs I can actually send. <b>Two taps per country.</b></CB>

      <CQ label="Where do you hold citizenship?" hint="pick all that count"
        answered={locked && st.citizenship.join(" + ")}>
        <CPR items={CITIZENSHIPS} value={st.citizenship} multi locked={locked}
          setValue={v=>set({citizenship: cTog(st.citizenship, v)})}/>
      </CQ>

      <CQ label="Where do you want to work?" answered={locked && st.targets.join(" + ")} error={err}>
        <CPR items={TARGETS} value={st.targets} multi locked={locked}
          setValue={v=>{ set({targets: cTog(st.targets, v)}); setErr(null); }}/>
        <div style={{fontSize:11.5, color:cT.muted, fontWeight:600, marginTop:2}}>
          US and Canada are live. More markets are coming.
        </div>
      </CQ>

      {st.targets.map(c => {
        const e = st.elig[c] || {};
        return (
          <CSub key={c} title={`Authorized to work in ${c}?`} tint={cT.cyan}>
            <CPR items={["Yes","No"]} value={e.authorized} locked={locked}
              setValue={v=>setElig(c, {authorized:v})}/>

            <div style={{height:1, background:cT.hairline}}/>
            <div style={{fontSize:12.5, fontWeight:700, color:cT.ink}}>Need visa sponsorship, now or later?</div>
            <CPR items={["Yes","No"]} value={e.sponsorship} locked={locked}
              setValue={v=>setElig(c, {sponsorship:v})}/>

            {e.authorized === "No" && (
              <>
                <div style={{height:1, background:cT.hairline}}/>
                <div style={{fontSize:12.5, fontWeight:700, color:cT.ink}}>Which visa or permit?</div>
                <CPR items={VISA_TYPES} value={e.visa} locked={locked} setValue={v=>setElig(c, {visa:v})}/>
                <div style={{fontSize:12.5, fontWeight:700, color:cT.ink, marginTop:2}}>Where's it at?</div>
                <CPR items={VISA_STATUS} value={e.visaStatus} locked={locked} setValue={v=>setElig(c, {visaStatus:v})}/>
              </>
            )}
          </CSub>
        );
      })}

      {!locked && <CCta label="Next — how I reach you" onClick={next}/>}
    </>
  );
}

// ──────────────────── CARD 3 · Contact & notifications ───────────────
function Card3({ st, set, locked, onNext, toast }) {
  const [err, setErr] = React.useState(null);
  const [otpErr, setOtpErr] = React.useState(null);
  const boxes = React.useRef([]);

  function sendCode() {
    if (!/^\d{7,12}$/.test(st.phone.replace(/\s/g,""))) return setErr("That doesn't look like a full number.");
    setErr(null); set({ otpSent:true, otp:["","","","","",""] });
    toast("📲 Code sent on WhatsApp");
    setTimeout(()=>boxes.current[0] && boxes.current[0].focus(), 80);
  }
  function setDigit(i, v) {
    const d = v.replace(/\D/g,"").slice(-1);
    const otp = [...st.otp]; otp[i] = d; set({otp}); setOtpErr(null);
    if (d && i < 5 && boxes.current[i+1]) boxes.current[i+1].focus();
    if (otp.every(x=>x)) {
      // demo: 000000 fails, anything else verifies
      if (otp.join("") === "000000") setOtpErr("That code didn't match. Check WhatsApp or resend.");
      else { set({verified:true}); toast("✓ Number verified"); }
    }
  }
  function next() {
    if (st.whatsapp && !st.verified) return setErr("Verify the number so I can message you — or turn WhatsApp off.");
    if (!st.whatsapp && !/^\d{7,12}$/.test(st.phone.replace(/\s/g,""))) return setErr("I still need a number for text updates.");
    setErr(null); onNext();
  }

  return (
    <>
      <CB>Where should I reach you? I message when something needs you — <b>and nowhere else.</b></CB>

      <CQ label="Your phone number">
        <div style={{display:"flex", flexWrap:"wrap", gap:6, marginBottom:8}}>
          <CPR items={DIAL_CODES} value={st.dial} setValue={v=>set({dial:v})} locked={locked}/>
        </div>
        <CF value={st.phone} onChange={v=>{set({phone:v, verified:false, otpSent:false}); setErr(null);}}
          prefix={st.dial} placeholder="98765 43210" width="min(320px,100%)" error={err} locked={locked}/>
      </CQ>

      <CSub tint={st.whatsapp ? cT.mintInk : cT.muted}>
        <CTog on={st.whatsapp} locked={locked}
          onClick={()=>set({whatsapp:!st.whatsapp, otpSent:false, verified:false})}
          label="This number has WhatsApp"
          desc="Status, match and payment updates go out over WhatsApp."/>

        {!st.whatsapp && (
          <CNote tint={cT.cream} icon="💬">
            No problem — I'll use email and text instead. Add WhatsApp anytime from Settings.
          </CNote>
        )}

        {st.whatsapp && !st.verified && !st.otpSent && (
          <button onClick={sendCode} disabled={locked} style={{alignSelf:"flex-start", padding:"11px 18px",
            borderRadius:999, background:cT.ink, color:"#fff", border:"none", fontFamily:cFB, fontSize:13.5,
            fontWeight:700, cursor: locked?"default":"pointer"}}>Send code on WhatsApp</button>
        )}

        {st.whatsapp && !st.verified && st.otpSent && (
          <div style={{display:"flex", flexDirection:"column", gap:9}}>
            <div style={{fontSize:12.5, fontWeight:700, color:cT.ink}}>
              Enter the 6-digit code I sent to {st.dial} {st.phone}
            </div>
            <div style={{display:"flex", gap:7}}>
              {st.otp.map((d,i)=>(
                <input key={i} ref={el=>boxes.current[i]=el} value={d} inputMode="numeric" maxLength={2}
                  onChange={e=>setDigit(i, e.target.value)}
                  onKeyDown={e=>{ if(e.key==="Backspace" && !d && i>0) boxes.current[i-1].focus(); }}
                  style={{width:42, height:50, textAlign:"center", borderRadius:11, fontFamily:window.fontData,
                    fontSize:19, fontWeight:700, color:cT.ink, background:"#fff", outline:"none",
                    border:`1.5px solid ${otpErr ? cT.blush : (d ? cT.ink : cT.hairline)}`}}/>
              ))}
            </div>
            {otpErr && <CErr>{otpErr}</CErr>}
            <button onClick={()=>{ set({otp:["","","","","",""]}); setOtpErr(null); toast("📲 New code sent"); }}
              style={{alignSelf:"flex-start", fontSize:12.5, fontWeight:700, color:cT.cyanInk, cursor:"pointer"}}>
              Resend code
            </button>
          </div>
        )}

        {st.whatsapp && st.verified && (
          <div style={{display:"flex", alignItems:"center", gap:10, padding:"11px 14px", background:cT.mint,
            borderRadius:12}}>
            <div style={{width:26, height:26, borderRadius:"50%", background:cT.mintInk, color:"#fff",
              display:"grid", placeItems:"center", fontSize:13, fontWeight:800}}>✓</div>
            <div style={{fontSize:13.5, fontWeight:700, color:cT.mintInk}}>
              {st.dial} {st.phone} verified on WhatsApp
            </div>
          </div>
        )}
      </CSub>

      <CQ label="What should I message you about?">
        <CSub>
          <CTog on={st.notif.status} locked={locked} label="Application status updates"
            desc="Sent, viewed, replied, rejected."
            onClick={()=>set({notif:{...st.notif, status:!st.notif.status}})}/>
          <div style={{height:1, background:cT.hairline}}/>
          <CTog on={st.notif.matches} locked={locked} label="New job matches"
            desc="Only roles above your bar."
            onClick={()=>set({notif:{...st.notif, matches:!st.notif.matches}})}/>
          <div style={{height:1, background:cT.hairline}}/>
          <CTog on={true} locked label="Payment & billing" desc="Receipts and failed charges. Can't be turned off."/>
          <div style={{height:1, background:cT.hairline}}/>
          <CTog on={st.notif.weekly} locked={locked} label="Weekly summary"
            desc="One recap every Sunday."
            onClick={()=>set({notif:{...st.notif, weekly:!st.notif.weekly}})}/>
        </CSub>
      </CQ>

      {!locked && <CCta label="Next — your résumé" onClick={next}/>}
    </>
  );
}

Object.assign(window, { Card1, Card2, Card3 });

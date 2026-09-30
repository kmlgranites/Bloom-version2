// =====================================================================
// Backdoor V1 · Settings → About & help: Help center, Legal pages, Feature request
// =====================================================================
const { T:hT, FD:hFD, FB:hFB } = window;

function HBack({ onBack, label }) {
  return (
    <button onClick={onBack} style={{display:"inline-flex", alignItems:"center", gap:6, border:"none", background:"none", padding:0, cursor:"pointer",
      fontFamily:hFB, fontSize:13, fontWeight:700, color:hT.muted, marginBottom:14}}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      {label || "About & help"}
    </button>
  );
}

const H_TOPICS = [
  { k:"start", t:"Getting started", d:"Onboarding, résumé upload, first matches" },
  { k:"modes", t:"Auto Apply & Manual apply", d:"How each mode works and switching" },
  { k:"match", t:"Matching & Apply settings", d:"Job titles, match quality, filters" },
  { k:"needs", t:"Needs you & messages", d:"Answering employer questions" },
  { k:"billing", t:"Plans & billing", d:"Free applications, upgrades, invoices" },
  { k:"refer", t:"Referrals", d:"Invite friends, earn bonus applications" },
  { k:"account", t:"Account & privacy", d:"Profile, notifications, your data" },
];

const H_FAQ = [
  { c:"modes", q:"What's the difference between Auto Apply and Manual apply?", a:"In Auto Apply, Bloom fills in each application and sends it for you. In Manual apply, Bloom fills it in and waits. You tap Apply on the ones you want. You can switch at the top of the dashboard any time." },
  { c:"modes", q:"How do I pause Auto Apply?", a:"Use Pause at the top of the dashboard. Bloom stops searching and sending until you resume. Nothing already submitted is affected. Pause only appears in Auto Apply, because Manual apply never sends without you." },
  { c:"match", q:"How does Bloom decide which jobs to apply to?", a:"Bloom checks each job against your Apply settings: job titles, seniority, employment type, work setting, location and minimum salary. It then scores the fit. Only jobs at or above your Match quality (Good, Strong or Excellent) are applied to." },
  { c:"match", q:"Why am I not seeing many matches?", a:"Your filters may be narrow. Try lowering Match quality from Excellent to Strong, adding more job titles, or allowing remote and hybrid roles. The weekly match count in Apply settings shows the effect before you save." },
  { c:"needs", q:"What does \"Needs you\" mean?", a:"The employer asked something Bloom doesn't know yet, like a custom question. We message you on the channel you picked. Answer there or in the app, and Bloom finishes and sends the application. Your answer is saved for next time." },
  { c:"needs", q:"Can I get updates by email only?", a:"Yes. Email updates are always on. If you don't want texts, choose Neither in Settings → Account → Notifications instead of WhatsApp or iMessage." },
  { c:"billing", q:"How many free applications do I get?", a:"5 in total, in either mode. Only applications that are actually submitted count. After that, choose Monthly or Quarterly to keep going, with up to 300 applications a month." },
  { c:"billing", q:"How do I cancel or change my plan?", a:"Go to Settings → Plan & billing → Manage billing. You can switch plans, update your card, see invoices or cancel. If you cancel, you keep your plan until the end of the billing period." },
  { c:"refer", q:"How do referrals work?", a:"Share your link from Settings → Referrals. When a friend signs up with it and subscribes to a paid plan, you both get 50 bonus applications." },
  { c:"refer", q:"Do I get anything if my friend only signs up?", a:"Not yet. The bonus is added when your friend subscribes to a paid plan. Signing up on the Free plan doesn't earn a bonus." },
  { c:"refer", q:"Can I refer if I'm on the Free plan?", a:"Yes. Anyone can share their link. When your friend subscribes, you both get 50 bonus applications, even if you're still on Free." },
  { c:"refer", q:"Is there a limit to how many friends I can refer?", a:"No. Each friend who subscribes with your link earns you another 50 bonus applications." },
  { c:"refer", q:"When do bonus applications expire?", a:"They stay on your account until you use them. Bonus applications are used before your plan's monthly applications." },
  { c:"refer", q:"My friend subscribed but I didn't get the bonus.", a:"Make sure they signed up with your link, not a separate one. Bonuses usually appear within a few minutes. If it's still missing after a day, email hello@bloom.app with your friend's email address." },
  { c:"start", q:"Can I update my résumé later?", a:"Yes. Open Profile → Resume and upload a new file. Bloom re-reads it and updates your Profile details. Check the changes before your next applications go out." },
  { c:"account", q:"Is my information shared with employers?", a:"Only the information an application asks for, and only for jobs Bloom applies to on your behalf. Equal employment answers are optional and are never used to choose jobs." },
];

function HelpCenterPage({ onBack, onContact }) {
  const [q, setQ] = React.useState("");
  const [topic, setTopic] = React.useState(null);
  const [openI, setOpenI] = React.useState(0);
  const needle = q.trim().toLowerCase();
  const list = H_FAQ.filter(f => (!topic || f.c===topic) && (!needle || (f.q+" "+f.a).toLowerCase().includes(needle)));
  return (
    <div style={{minWidth:0}}>
      <HBack onBack={onBack}/>
      <div style={{fontFamily:hFD, fontWeight:700, fontSize:24, letterSpacing:"-0.02em", color:hT.ink}}>Help center</div>
      <div style={{fontSize:13.5, fontWeight:500, color:hT.muted, marginTop:4}}>Answers to common questions about Bloom.</div>

      <div style={{position:"relative", marginTop:18, maxWidth:560}}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={hT.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{position:"absolute", left:14, top:"50%", transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input value={q} onChange={e=>{ setQ(e.target.value); setOpenI(0); }} placeholder="Search help, e.g. pause, needs you, cancel" aria-label="Search help"
          style={{width:"100%", boxSizing:"border-box", padding:"12px 14px 12px 40px", borderRadius:12, border:`1.5px solid ${hT.hairline}`, outline:"none",
            fontFamily:hFB, fontSize:14, fontWeight:500, color:hT.ink, background:"#fff"}}/>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10, marginTop:20}}>
        {H_TOPICS.map(t=>{
          const on = topic===t.k;
          return (
            <button key={t.k} onClick={()=>{ setTopic(on ? null : t.k); setOpenI(0); }} aria-pressed={on}
              style={{textAlign:"left", padding:"14px 16px", borderRadius:14, cursor:"pointer", fontFamily:hFB,
                background: on ? "#E0FAFA" : "#fff", border:`1.5px solid ${on ? "#0A6E6E" : hT.hairline}`}}>
              <div style={{fontSize:14, fontWeight:700, color:hT.ink}}>{t.t}</div>
              <div style={{fontSize:12.5, fontWeight:500, color:hT.muted, marginTop:3}}>{t.d}</div>
            </button>
          );
        })}
      </div>

      <div style={{background:"#fff", border:`1px solid ${hT.hairline}`, borderRadius:16, padding:"8px 24px", marginTop:20}}>
        {list.length===0 ? (
          <div style={{padding:"22px 0", fontSize:13.5, fontWeight:500, color:hT.muted}}>No answers match "{q}". Try another word, or contact us below.</div>
        ) : list.map((f,i)=>{
          const open = openI===i;
          return (
            <div key={f.q} style={{borderBottom: i===list.length-1 ? "none" : `1px solid ${hT.hairline}`}}>
              <button onClick={()=>setOpenI(open ? -1 : i)} aria-expanded={open} style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between",
                gap:14, padding:"16px 0", border:"none", background:"none", cursor:"pointer", textAlign:"left", fontFamily:hFB, fontSize:14.5, fontWeight:700, color:hT.ink}}>
                {f.q}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{flexShrink:0, color:hT.muted, transform: open ? "rotate(180deg)" : "none", transition:"transform .15s"}}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              {open && <div style={{fontSize:13.5, fontWeight:500, color:"#4B5A5E", lineHeight:1.6, padding:"0 0 18px", maxWidth:680}}>{f.a}</div>}
            </div>
          );
        })}
      </div>

      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, flexWrap:"wrap", marginTop:20, padding:"16px 20px",
        borderRadius:14, background:"#F9FAFB"}}>
        <div>
          <div style={{fontSize:14, fontWeight:700, color:hT.ink}}>Still need help?</div>
          <div style={{fontSize:12.5, fontWeight:500, color:hT.muted, marginTop:2}}>We usually reply within 4 hours.</div>
        </div>
        <button onClick={onContact} style={{padding:"10px 18px", borderRadius:999, border:"none", background:hT.ink, color:"#fff", fontFamily:hFB, fontSize:13, fontWeight:700, cursor:"pointer"}}>Email support</button>
      </div>
    </div>
  );
}

const H_LEGAL = {
  terms: { title:"Terms of Service", updated:"April 2026", sections:[
    ["1. What Bloom does", "Bloom searches for jobs that match your settings and prepares applications for you. In Auto Apply, Bloom submits applications on your behalf. In Manual apply, Bloom only submits after you tap Apply."],
    ["2. Your account", "You're responsible for keeping your login secure and for the information in your profile. Make sure your résumé, work authorization and contact details are accurate, because Bloom uses them in real applications."],
    ["3. Applying on your behalf", "By turning on Auto Apply, you allow Bloom to submit applications to employers using your profile. You can pause or switch to Manual apply at any time. Bloom does not guarantee interviews or offers."],
    ["4. Plans and payments", "The Free plan includes 5 submitted applications. Paid plans renew automatically until cancelled. If you cancel, your plan stays active until the end of the current billing period. Applications that fail to submit are not counted."],
    ["5. Acceptable use", "Don't use Bloom to submit false information, apply on behalf of someone else, or overwhelm employers with unrelated applications."],
    ["6. Changes", "We may update these terms. If the changes are significant, we'll tell you by email before they take effect."],
  ]},
  privacy: { title:"Privacy Policy", updated:"April 2026", sections:[
    ["1. What we collect", "Your résumé, profile details, Apply settings, contact details, and the answers you give to employer questions. We also keep a record of the applications Bloom prepares and sends."],
    ["2. How we use it", "To find jobs that match you, fill in applications, and keep you updated. We use your answers to avoid asking the same question twice."],
    ["3. What employers see", "Only what an application asks for, and only for jobs Bloom applies to on your behalf. We never sell your data."],
    ["4. Equal employment information", "Gender, disability and veteran answers are optional. They are only shared when an employer's form asks, and they are never used to choose which jobs Bloom applies to."],
    ["5. Messages", "If you choose WhatsApp or iMessage, we use your number only for Bloom updates. You can choose Neither in Settings to get email only."],
    ["6. Your choices", "You can edit your profile, download a copy of your data, or delete your account in Settings at any time."],
  ]},
};

function LegalPage({ doc, onBack }) {
  const L = H_LEGAL[doc];
  return (
    <div style={{minWidth:0}}>
      <HBack onBack={onBack}/>
      <div style={{background:"#fff", border:`1px solid ${hT.hairline}`, borderRadius:16, padding:"28px 32px 30px", maxWidth:760}}>
        <div style={{fontFamily:hFD, fontWeight:700, fontSize:24, letterSpacing:"-0.02em", color:hT.ink}}>{L.title}</div>
        <div style={{fontSize:12.5, fontWeight:600, color:hT.muted, marginTop:4}}>Last updated {L.updated}</div>
        <div style={{display:"flex", flexDirection:"column", gap:20, marginTop:24}}>
          {L.sections.map(([h,p])=>(
            <div key={h}>
              <div style={{fontSize:15, fontWeight:700, color:hT.ink}}>{h}</div>
              <div style={{fontSize:13.5, fontWeight:500, color:"#4B5A5E", lineHeight:1.65, marginTop:6, textWrap:"pretty"}}>{p}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:12.5, fontWeight:500, color:hT.muted, marginTop:26, paddingTop:16, borderTop:`1px solid ${hT.hairline}`}}>
          Questions about this page? Email <a href="mailto:hello@bloom.app" style={{color:"#0A6E6E", fontWeight:700}}>hello@bloom.app</a>.
        </div>
      </div>
    </div>
  );
}

const H_AREAS = ["Matching","Auto Apply","Manual apply","Profile","Notifications","Billing","Something else"];
const H_IMPACT = ["Nice to have","Important","Blocking my search"];

function FeatureRequestModal({ onClose }) {
  const [area, setArea] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [impact, setImpact] = React.useState("Important");
  const [tried, setTried] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const first = React.useRef(null);
  React.useEffect(()=>{ first.current && first.current.focus(); const k = e=>{ if(e.key==="Escape") onClose(); };
    window.addEventListener("keydown", k); return ()=>window.removeEventListener("keydown", k); }, []);
  const ok = area && title.trim().length>=3 && body.trim().length>=10;
  const submit = ()=>{ setTried(true); if(ok) setSent(true); };
  const lbl = {fontSize:11, fontWeight:800, color:hT.muted, letterSpacing:".07em", marginBottom:8, display:"block"};
  const input = bad => ({width:"100%", boxSizing:"border-box", padding:"11px 13px", borderRadius:10, border:`1.5px solid ${bad ? "#C1443B" : hT.hairline}`,
    outline:"none", fontFamily:hFB, fontSize:14, fontWeight:500, color:hT.ink, background:"#fff"});
  const err = t => <div style={{fontSize:12, fontWeight:600, color:"#B03A2E", marginTop:6}}>{t}</div>;
  return (
    <div onMouseDown={e=>{ if(e.target===e.currentTarget) onClose(); }} style={{position:"fixed", inset:0, zIndex:80, background:"rgba(2,30,36,.5)", display:"grid", placeItems:"center", padding:16}}>
      <div role="dialog" aria-modal="true" aria-labelledby="fr-title" style={{position:"relative", width:"100%", maxWidth:520, maxHeight:"92vh", overflow:"auto", background:"#fff",
        borderRadius:20, padding:"24px 26px 22px", boxSizing:"border-box"}}>
        <button onClick={onClose} aria-label="Close" style={{position:"absolute", top:14, right:14, width:32, height:32, borderRadius:"50%", border:"none", background:"#F4F6F6",
          cursor:"pointer", display:"grid", placeItems:"center", color:hT.ink}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        {sent ? (
          <div role="status" style={{textAlign:"center", padding:"18px 6px 6px"}}>
            <span style={{width:52, height:52, borderRadius:"50%", background:"#E8F6EE", display:"inline-grid", placeItems:"center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F8A5B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <div style={{fontFamily:hFD, fontWeight:700, fontSize:21, color:hT.ink, marginTop:14}}>Thanks, we got it</div>
            <div style={{fontSize:13.5, fontWeight:500, color:hT.muted, lineHeight:1.55, marginTop:6, maxWidth:360, marginInline:"auto"}}>
              We read every request. If we build it, we'll let you know by email.
            </div>
            <button onClick={onClose} style={{marginTop:20, padding:"11px 26px", borderRadius:999, border:"none", background:hT.ink, color:"#fff", fontFamily:hFB, fontSize:14, fontWeight:700, cursor:"pointer"}}>Done</button>
          </div>
        ) : (
          <React.Fragment>
            <div id="fr-title" style={{fontFamily:hFD, fontWeight:700, fontSize:20, letterSpacing:"-0.02em", color:hT.ink}}>Request a feature</div>
            <div style={{fontSize:13, fontWeight:500, color:hT.muted, marginTop:4}}>Tell us what would make Bloom better for your job search.</div>

            <div style={{marginTop:20}}>
              <span style={lbl}>WHICH PART OF BLOOM?</span>
              <div role="radiogroup" aria-label="Area" style={{display:"flex", flexWrap:"wrap", gap:7}}>
                {H_AREAS.map((a,i)=>{ const on = area===a; return (
                  <button key={a} ref={i===0 ? first : null} role="radio" aria-checked={on} onClick={()=>setArea(a)}
                    style={{padding:"7px 13px", borderRadius:999, cursor:"pointer", fontFamily:hFB, fontSize:12.5, fontWeight:700,
                      background: on ? hT.ink : "#fff", color: on ? "#fff" : hT.ink, border:`1.5px solid ${on ? hT.ink : (tried && !area ? "#C1443B" : hT.hairline)}`}}>{a}</button>
                ); })}
              </div>
              {tried && !area && err("Pick the closest area.")}
            </div>

            <div style={{marginTop:18}}>
              <label htmlFor="fr-t" style={lbl}>YOUR IDEA IN A FEW WORDS</label>
              <input id="fr-t" value={title} onChange={e=>setTitle(e.target.value)} maxLength={80} placeholder="e.g. Skip jobs that need a cover letter" style={input(tried && title.trim().length<3)}/>
              {tried && title.trim().length<3 && err("Add a short title.")}
            </div>

            <div style={{marginTop:18}}>
              <label htmlFor="fr-b" style={lbl}>DETAILS</label>
              <textarea id="fr-b" value={body} onChange={e=>setBody(e.target.value)} rows={4} maxLength={1000}
                placeholder="What are you trying to do, and what gets in the way today?" style={{...input(tried && body.trim().length<10), resize:"vertical", lineHeight:1.5}}/>
              <div style={{display:"flex", justifyContent:"space-between", gap:10}}>
                <span>{tried && body.trim().length<10 && err("A sentence or two helps us understand it.")}</span>
                <span style={{fontSize:11.5, fontWeight:600, color:hT.muted, marginTop:6}}>{body.length}/1000</span>
              </div>
            </div>

            <div style={{marginTop:14}}>
              <span style={lbl}>HOW MUCH DOES IT MATTER?</span>
              <div role="radiogroup" aria-label="Importance" style={{display:"grid", gridTemplateColumns:"repeat(3, minmax(0,1fr))", gap:4, background:"#F4F5F5", borderRadius:10, padding:4}}>
                {H_IMPACT.map(x=>{ const on = impact===x; return (
                  <button key={x} role="radio" aria-checked={on} onClick={()=>setImpact(x)} style={{padding:"9px 6px", borderRadius:7, border:"none", cursor:"pointer",
                    fontFamily:hFB, fontSize:12.5, fontWeight: on ? 700 : 600, background: on ? "#fff" : "transparent", color: on ? hT.ink : hT.muted,
                    boxShadow: on ? "0 1px 3px rgba(2,47,54,.12)" : "none"}}>{x}</button>
                ); })}
              </div>
            </div>

            <div style={{display:"flex", justifyContent:"flex-end", gap:10, marginTop:22}}>
              <button onClick={onClose} style={{padding:"11px 20px", borderRadius:999, border:`1.5px solid ${hT.hairline}`, background:"#fff", color:hT.ink, fontFamily:hFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Cancel</button>
              <button onClick={submit} style={{padding:"11px 22px", borderRadius:999, border:"none", background:hT.ink, color:"#fff", fontFamily:hFB, fontSize:13.5, fontWeight:700, cursor:"pointer"}}>Send request</button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { HelpCenterPage, LegalPage, FeatureRequestModal });

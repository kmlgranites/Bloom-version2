// Bloom · Apply credits page — credit ledger (used / on hold / returned history)
const { T:cT, FD:cFD, FB:cFB } = window;

const C_RETURNED = [
  { co:"Workday", role:"Software Engineer", why:"Site blocked automated applications", date:"Oct 24" },
  { co:"Exness", role:"Backend Engineer", why:"The job closed before we could submit", date:"Oct 21" },
];
const C_USED = [
  { co:"Stripe", role:"Backend Engineer", date:"Oct 26" },
  { co:"Ramp", role:"Software Engineer", date:"Oct 25" },
  { co:"Vercel", role:"Senior Software Engineer", date:"Oct 25" },
  { co:"Notion", role:"Platform Engineer", date:"Oct 23" },
  { co:"Rippling", role:"Software Engineer II", date:"Oct 22" },
];

function CreditsPage({ st, onBack, goPlans }) {
  const plan = st.plan || "free";
  const paid = plan !== "free";
  const total = paid ? 300 : 5;
  const usedRaw = paid ? 42 + (st.freeUsed||0) : (st.freeUsed||0);
  const used = Math.min(total, usedRaw);
  const hold = (used > 0 && used < total) ? 1 : 0;
  const left = Math.max(0, total - used - hold);
  const R = 46, C = 2*Math.PI*R;
  const usedFrac = used/total, holdFrac = hold/total;
  const usedList = C_USED.slice(0, Math.min(used, C_USED.length));
  const Logo = window.CLogo;
  const row = (l, r, extra) => (
    <div style={{display:"flex", alignItems:"center", gap:12, padding:"12px 0", borderTop:`1px solid ${cT.hairline}`}}>
      {Logo ? <Logo co={l.co} size={34}/> : null}
      <div style={{flex:1, minWidth:0}}>
        <div style={{fontSize:14, fontWeight:700, color:cT.ink}}>{l.co} · {l.role}</div>
        {extra && <div style={{fontSize:13.5, fontWeight:500, color:cT.muted, marginTop:2}}>{extra}</div>}
      </div>
      <div style={{fontSize:13.5, fontWeight:700, color:r.c, whiteSpace:"nowrap"}}>{r.t}</div>
    </div>
  );
  return (
    <div style={{flex:1, overflow:"auto", padding:"28px 32px 56px", boxSizing:"border-box"}} className="m-pad">
      <div style={{maxWidth:880, margin:"0 auto", display:"flex", flexDirection:"column", gap:18}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap"}}>
          <button onClick={onBack} className="bd-textlink" style={{border:"none", background:"none", padding:0, cursor:"pointer", fontFamily:cFB, fontSize:14.5, fontWeight:700, color:cT.ink, display:"flex", alignItems:"center", gap:6}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7M19 12H5"/></svg>Back to dashboard
          </button>
          {!paid && <button onClick={goPlans} className="bd-cta" style={{padding:"10px 20px", borderRadius:999, background:cT.ink, color:"#fff", border:"none", fontFamily:cFB, fontSize:14.5, fontWeight:700, cursor:"pointer"}}>Upgrade</button>}
        </div>
        <div style={{fontFamily:cFD, fontWeight:700, fontSize:26, letterSpacing:"-0.02em", color:cT.ink}}>Apply credits</div>

        <div style={{background:"#fff", border:`1px solid ${cT.hairline}`, borderRadius:16, padding:"24px 26px", display:"flex", alignItems:"center", gap:28, flexWrap:"wrap"}}>
          <div style={{position:"relative", width:112, height:112, flexShrink:0}}>
            <svg width="112" height="112" viewBox="0 0 112 112" style={{transform:"rotate(-90deg)"}} aria-hidden="true">
              <circle cx="56" cy="56" r={R} fill="none" stroke="#E3F4F4" strokeWidth="11"/>
              <circle cx="56" cy="56" r={R} fill="none" stroke={cT.ink} strokeWidth="11" strokeDasharray={`${C*usedFrac} ${C}`}/>
              {hold>0 && <circle cx="56" cy="56" r={R} fill="none" stroke="#E0A21B" strokeWidth="11" strokeDasharray={`${C*holdFrac} ${C}`} strokeDashoffset={-C*usedFrac}/>}
            </svg>
            <div style={{position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
              <span style={{fontFamily:cFD, fontWeight:700, fontSize:30, lineHeight:1, color:cT.ink}}>{left}</span>
              <span style={{fontSize:13, fontWeight:600, color:cT.muted, marginTop:2}}>left</span>
            </div>
          </div>
          <div style={{flex:"1 1 280px", minWidth:0, display:"flex", flexDirection:"column", gap:8}}>
            <div style={{display:"flex", alignItems:"center", gap:10, flexWrap:"wrap"}}>
              <span style={{fontFamily:cFD, fontWeight:700, fontSize:19, color:cT.ink}}>{used} of {total} used{paid ? " this month" : ""}</span>
              <span style={{fontSize:13, fontWeight:700, background:"#E3F4F4", color:"#0A6E6E", borderRadius:999, padding:"3px 10px"}}>{paid ? (plan==="quarterly" ? "Quarterly" : "Monthly") : "Free"}</span>
            </div>
            {hold>0 && <div style={{display:"flex", alignItems:"center", gap:7, fontSize:14.5, fontWeight:700, color:"#8A5A00"}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              {hold} on hold for an application in progress</div>}
            <div style={{fontSize:14.5, fontWeight:500, color:"#374151"}}>{paid ? "Resets on Dec 1" : "Free applications don't reset"}</div>
            <div style={{fontSize:13.5, fontWeight:500, color:cT.muted, lineHeight:1.5}}>You're only charged when an application is submitted. If it can't be submitted, the credit comes back.</div>
          </div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:12}}>
          {[["#1F8A5B","Used",used,"Applications submitted"],["#E0A21B","On hold",hold,"Charged once submitted"]].map(([c,l,n,s])=>(
            <div key={l} style={{background:"#fff", border:`1px solid ${cT.hairline}`, borderRadius:14, padding:"16px 18px"}}>
              <div style={{display:"flex", alignItems:"center", gap:7, fontSize:14, fontWeight:700, color:cT.ink}}><span style={{width:8, height:8, borderRadius:"50%", background:c}}/>{l}</div>
              <div style={{fontFamily:cFD, fontWeight:700, fontSize:28, color:cT.ink, margin:"6px 0 2px"}}>{n}</div>
              <div style={{fontSize:13.5, fontWeight:500, color:cT.muted}}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{background:"#fff", border:`1px solid ${cT.hairline}`, borderRadius:16, padding:"20px 24px 10px"}}>
          <div style={{fontFamily:cFD, fontWeight:700, fontSize:17, color:cT.ink}}>Credits returned</div>
          <div style={{fontSize:14, fontWeight:500, color:cT.muted, margin:"3px 0 10px"}}>If an application can't be submitted, the credit comes back and shows here.</div>
          {used>0 ? C_RETURNED.map(r=><React.Fragment key={r.co}>{row(r, {t:`+1 · ${r.date}`, c:"#1F8A5B"}, r.why)}</React.Fragment>)
            : <div style={{fontSize:14, fontWeight:500, color:cT.muted, padding:"12px 0 14px", borderTop:`1px solid ${cT.hairline}`}}>No returned credits yet.</div>}
        </div>

        {usedList.length>0 && <div style={{background:"#fff", border:`1px solid ${cT.hairline}`, borderRadius:16, padding:"20px 24px 10px"}}>
          <div style={{fontFamily:cFD, fontWeight:700, fontSize:17, color:cT.ink, marginBottom:10}}>Recently used</div>
          {usedList.map(r=><React.Fragment key={r.co}>{row(r, {t:`−1 · ${r.date}`, c:cT.muted}, "Submitted")}</React.Fragment>)}
        </div>}
      </div>
    </div>
  );
}
Object.assign(window, { CreditsPage });

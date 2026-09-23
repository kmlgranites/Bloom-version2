// =====================================================================
// Bloom — Profile page design feedback mocks (Before / After)
// Faithful recreations of the live product for stakeholder review.
// =====================================================================

const pfT = {
  ink:       "#0E1726",   // near-black headings
  body:      "#3D4654",   // body text
  muted:     "#8A93A2",   // labels / placeholder
  faint:     "#B6BDC7",   // dashes / disabled
  brandDark: "#06302E",   // dark teal primary buttons
  teal:      "#119C92",   // accent (checks, +20%, progress)
  tealInk:   "#0E7E76",
  cyan:      "#5AEBEB",    // bright cyan checkboxes
  pageBg:    "#EAF1FB",    // profile page light-blue bg
  card:      "#FFFFFF",
  hairline:  "#EBEDF1",
  hair2:     "#E2E5EA",
  lavender:  "#ECEBF7",    // profile-strength card bg
  amberBg:   "#FEF4D9",
  amberBd:   "#F1D58C",
  amberInk:  "#8A6209",
  amberDot:  "#E8A21E",
};

// ── small icons ──────────────────────────────────────────────────────
function Pencil({ c = pfT.muted, s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
  );
}
function CheckDot({ done }) {
  return done ? (
    <span style={{ width: 20, height: 20, borderRadius: "50%", background: pfT.teal, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
    </span>
  ) : (
    <span style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${pfT.faint}`, flexShrink: 0, display: "inline-block" }}/>
  );
}
function AlertTri({ c = pfT.amberInk, s = 13 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}
function Plus({ c = pfT.amberInk, s = 13 }) {
  return (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.6" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>);
}

// Shared: section header row with title + edit pencil
function SecHead({ title, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 21, fontWeight: 700, color: pfT.ink, letterSpacing: "-0.01em" }}>{title}</div>
      {children}
      <div style={{ flex: 1 }}/>
      <Pencil/>
    </div>
  );
}

// Field cell: label on top, value below
function Field({ label, value, missing, prompt }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: 13, color: pfT.muted, fontWeight: 500, marginBottom: 7 }}>{label}</div>
      {missing ? (
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px 5px 9px",
          borderRadius: 8, background: pfT.amberBg, border: `1px dashed ${pfT.amberBd}`,
          color: pfT.amberInk, fontSize: 13.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
        }}><Plus/> {prompt}</button>
      ) : (
        <div style={{ fontSize: 15.5, color: value ? pfT.ink : pfT.faint, fontWeight: 500 }}>{value || "—"}</div>
      )}
    </div>
  );
}

// =====================================================================
// CONCERN 1 — Missing-data indicators
// =====================================================================
function AddressBlock({ after }) {
  return (
    <div style={{ width: "100%", height: "100%", background: pfT.pageBg, padding: 26, fontFamily: '"Proxima Soft",sans-serif' }}>
      <div style={{ background: pfT.card, borderRadius: 18, padding: "26px 28px", boxShadow: "0 1px 2px rgba(16,23,38,0.04)" }}>

        {/* Personal name + contact (context) */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 24, fontWeight: 700, color: pfT.ink, letterSpacing: "-0.02em" }}>Vinodh Kumar Neelakanda</div>
          <div style={{ flex: 1 }}/>
          <Pencil/>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 22, border: `1px solid ${pfT.hair2}`, fontSize: 13.5, color: pfT.body, fontWeight: 500 }}>✉&nbsp; devishalini64@gmail.com</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 22, border: `1px solid ${pfT.hair2}`, fontSize: 13.5, color: pfT.body, fontWeight: 500 }}>☎&nbsp; +91729991165</div>
        </div>

        <div style={{ height: 1, background: pfT.hairline, margin: "0 0 22px" }}/>

        <SecHead title="Address">
          {after && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 20, background: pfT.amberBg, border: `1px solid ${pfT.amberBd}`, color: pfT.amberInk, fontSize: 12, fontWeight: 700 }}>
              <AlertTri/> 2 fields to add
            </span>
          )}
        </SecHead>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22, marginBottom: 22 }}>
          <Field label="City" value="Chennai"/>
          <Field label="Country" value="India"/>
          <Field label="Postal Code" missing={after} prompt="Add postal code"/>
        </div>
        <Field label="Address Line" missing={after} prompt="Add address line"/>

        {after && (
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 10, background: "#F7FAFF", border: `1px solid ${pfT.hairline}` }}>
            <span style={{ color: pfT.tealInk, display: "inline-flex" }}><AlertTri c={pfT.tealInk} s={14}/></span>
            <span style={{ fontSize: 12.5, color: pfT.body, fontWeight: 500 }}>Completing your address helps Bloom auto-fill applications accurately — recruiters often require it.</span>
          </div>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// CONCERN 2 — Profile completion percentage
// =====================================================================
function StrengthCard({ variant }) {
  // variant: "before" | "grouped" | "weighted"
  const before = [
    { l: "Add your contact info", done: true, p: "+20%" },
    { l: "Add your Education Journey info", done: true, p: "+20%" },
    { l: "Add your work experience", done: true, p: "+20%" },
    { l: "Add your skills", done: true, p: "+20%" },
    { l: "Fill out your job preferences", done: true, p: "+20%" },
    { l: "Add your address", done: false, p: "+20%" },
  ];
  const grouped = [
    { l: "Personal info (contact + address)", done: false, p: "+20%" },
    { l: "Education journey", done: true, p: "+20%" },
    { l: "Work experience", done: true, p: "+20%" },
    { l: "Skills", done: true, p: "+20%" },
    { l: "Job preferences", done: true, p: "+20%" },
  ];
  const weighted = [
    { l: "Contact info", done: true, p: "15%" },
    { l: "Address", done: false, p: "10%" },
    { l: "Education", done: true, p: "20%" },
    { l: "Work experience", done: true, p: "25%" },
    { l: "Skills", done: true, p: "15%" },
    { l: "Job preferences", done: true, p: "15%" },
  ];
  const data = variant === "before" ? before : variant === "weighted" ? weighted : grouped;
  const pct = variant === "before" ? 83 : variant === "weighted" ? 90 : 80;
  const buggy = variant === "before";

  return (
    <div style={{ width: "100%", height: "100%", background: pfT.pageBg, padding: 22, fontFamily: '"Proxima Soft",sans-serif' }}>
      <div style={{ background: pfT.lavender, borderRadius: 18, padding: "20px 20px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 18, fontWeight: 700, color: pfT.ink }}>My Profile Strength</div>
          <span style={{ color: pfT.muted, fontSize: 14 }}>⌃</span>
        </div>
        <div style={{ fontSize: 13, color: pfT.body, lineHeight: 1.45, marginBottom: 18, maxWidth: 300 }}>Complete your profile to autofill job applications effortlessly!</div>

        <div style={{ fontSize: 13, color: pfT.body, fontWeight: 500, marginBottom: 8 }}>Profile completion</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ flex: 1, height: 8, borderRadius: 99, background: "#D7D3EA", overflow: "hidden" }}>
            <div style={{ width: `${pct}%`, height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${pfT.brandDark}, ${pfT.teal})` }}/>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: pfT.ink }}>{pct}%</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 18 }}>
          {data.map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <CheckDot done={it.done}/>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: it.done ? pfT.muted : pfT.ink, textDecoration: it.done ? "line-through" : "none" }}>{it.l}</div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: pfT.teal }}>{it.p}</div>
            </div>
          ))}
        </div>

        {buggy && (
          <div style={{ display: "flex", gap: 7, padding: "9px 11px", borderRadius: 9, background: pfT.amberBg, border: `1px solid ${pfT.amberBd}`, marginBottom: 14 }}>
            <span style={{ flexShrink: 0, marginTop: 1 }}><AlertTri/></span>
            <div style={{ fontSize: 11.5, color: pfT.amberInk, fontWeight: 600, lineHeight: 1.4 }}>6 items × 20% = 120%. Math doesn't resolve to 100% — and 5 of 6 done shows 83%, not a clean step.</div>
          </div>
        )}
        {variant === "grouped" && (
          <div style={{ fontSize: 11.5, color: pfT.tealInk, fontWeight: 600, marginBottom: 14, textAlign: "center" }}>5 steps × 20% = clean 100%</div>
        )}
        {variant === "weighted" && (
          <div style={{ fontSize: 11.5, color: pfT.tealInk, fontWeight: 600, marginBottom: 14, textAlign: "center" }}>Weighted by impact · always a whole number</div>
        )}

        <button style={{ width: "100%", padding: "13px", borderRadius: 12, background: pfT.brandDark, color: "#fff", fontSize: 14.5, fontWeight: 700, fontFamily: "inherit", border: "none", cursor: "pointer" }}>Complete Profile</button>
      </div>
    </div>
  );
}

// =====================================================================
// CONCERN 3 — Work Authorization control
// =====================================================================
function CheckCard({ label, checked }) {
  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 14, background: "#F4F6F8" }}>
      <span style={{ width: 24, height: 24, borderRadius: 7, background: checked ? pfT.cyan : "#fff", border: checked ? "none" : `1.5px solid ${pfT.hair2}`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {checked && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#062b2b" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>}
      </span>
      <span style={{ fontSize: 16, fontWeight: 500, color: pfT.ink }}>{label}</span>
    </div>
  );
}
function RadioRow({ label, sub, checked }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 13, padding: "15px 18px", borderRadius: 14, background: checked ? "#ECFAFA" : "#F4F6F8", border: checked ? `1.5px solid ${pfT.cyan}` : "1.5px solid transparent" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${checked ? pfT.teal : pfT.faint}`, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
        {checked && <span style={{ width: 11, height: 11, borderRadius: "50%", background: pfT.teal }}/>}
      </span>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, color: pfT.ink, lineHeight: 1.2 }}>{label}</div>
        {sub && <div style={{ fontSize: 13, color: pfT.muted, fontWeight: 500, marginTop: 3 }}>{sub}</div>}
      </div>
    </div>
  );
}
function WorkAuth({ after }) {
  return (
    <div style={{ width: "100%", height: "100%", background: pfT.card, padding: 30, fontFamily: '"Proxima Soft",sans-serif' }}>
      <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 22, fontWeight: 700, color: pfT.ink, marginBottom: 6 }}>Job Preferences</div>
      <div style={{ fontSize: 13.5, color: pfT.muted, marginBottom: 26 }}>Work Authorization section</div>

      {after ? (
        <>
          <div style={{ fontSize: 15, fontWeight: 700, color: pfT.ink, marginBottom: 14 }}>Work Authorization <span style={{ color: pfT.muted, fontWeight: 500, fontSize: 13.5 }}>(select one)</span></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <RadioRow label="U.S. Citizen / Permanent Resident" sub="No sponsorship needed" checked={false}/>
            <RadioRow label="Authorized to work — no sponsorship needed" sub="Visa, EAD, or other current authorization" checked={true}/>
            <RadioRow label="Will require sponsorship (H-1B, etc.)" sub="Now or in the future" checked={false}/>
          </div>
          <div style={{ marginTop: 16, fontSize: 12.5, color: pfT.tealInk, fontWeight: 600 }}>One question, mutually exclusive → radios. Covers citizen status, no separate toggle needed.</div>
        </>
      ) : (
        <>
          <div style={{ fontSize: 15, fontWeight: 700, color: pfT.ink, marginBottom: 14 }}>Work Authorization</div>
          <div style={{ display: "flex", gap: 14 }}>
            <CheckCard label="H1B Sponsorship" checked={false}/>
            <CheckCard label="Need Assistance sponsorship" checked={false}/>
          </div>
          <div style={{ marginTop: 16, fontSize: 12.5, color: pfT.amberInk, fontWeight: 600, display: "flex", gap: 7, alignItems: "flex-start" }}>
            <span style={{ marginTop: 1 }}><AlertTri/></span>
            <span>Checkboxes imply multi-select for a single either/or answer. Two overlapping labels are ambiguous. No way to say "citizen / no sponsorship".</span>
          </div>
        </>
      )}
    </div>
  );
}

// =====================================================================
// CONCERN 4 — Complete Profile modal copy
// =====================================================================
function Mushroom({ s = 56 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="74" rx="20" ry="20" fill="#fff" stroke="#0E7E76" strokeWidth="2.5"/>
      <path d="M16 52c0-19 15-33 34-33s34 14 34 33c0 4-3 6-7 6H23c-4 0-7-2-7-6Z" fill="#5AEBEB" stroke="#0E7E76" strokeWidth="2.5"/>
      <circle cx="35" cy="40" r="6" fill="#0E7E76"/>
      <circle cx="64" cy="36" r="5" fill="#0E7E76"/>
      <circle cx="43" cy="70" r="3.2" fill="#0E1726"/>
      <circle cx="57" cy="70" r="3.2" fill="#0E1726"/>
      <path d="M44 79c3 3 9 3 12 0" stroke="#0E1726" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
    </svg>
  );
}
function CompleteModal({ after }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#1B2A2A", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: '"Proxima Soft",sans-serif' }}>
      <div style={{ width: 420, background: "#fff", borderRadius: 22, padding: "30px 26px 26px", boxShadow: "0 30px 80px rgba(0,0,0,0.4)", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}><Mushroom/></div>

        <div style={{ borderRadius: 16, padding: "26px 22px 30px", background: "linear-gradient(135deg, #F4F0C8 0%, #BFF3E6 55%, #5AEBEB 100%)" }}>
          <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 27, fontWeight: 700, color: pfT.brandDark, marginBottom: 8 }}>You're Almost Done!</div>

          {after ? (
            <>
              <div style={{ fontSize: 14.5, color: "#0C3A37", fontWeight: 600, lineHeight: 1.5, maxWidth: 300, margin: "0 auto" }}>
                The more complete your profile, the more accurately Bloom auto-fills and matches you to roles — fewer questions, better applications.
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 14, padding: "7px 14px", borderRadius: 99, background: "rgba(6,48,46,0.9)", color: "#fff", fontSize: 12.5, fontWeight: 700 }}>
                ✦ Complete profiles get matched faster
              </div>
            </>
          ) : (
            <div style={{ fontSize: 14.5, color: "#0C3A37", fontWeight: 600, lineHeight: 1.5, maxWidth: 290, margin: "0 auto" }}>
              Fill in missing details and Bloom's AI will remember them next time.
            </div>
          )}

          <div style={{ marginTop: 20, height: 84, borderRadius: 12, border: "1.5px solid rgba(6,48,46,0.18)", background: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", padding: "0 16px", gap: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(6,48,46,0.15)" }}/>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ height: 7, borderRadius: 99, background: "rgba(6,48,46,0.22)", width: "80%" }}/>
              <div style={{ height: 7, borderRadius: 99, background: "rgba(6,48,46,0.16)", width: "55%" }}/>
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, color: pfT.brandDark }}>90%</div>
          </div>
        </div>

        <button style={{ marginTop: 22, padding: "13px 40px", borderRadius: 99, background: pfT.brandDark, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "inherit", border: "none", cursor: "pointer" }}>Complete Profile</button>
      </div>
    </div>
  );
}

// =====================================================================
// Rationale card — clean designer note (product styling, not sticky)
// =====================================================================
function Rationale({ title, points, w = 320 }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "26px 24px", fontFamily: '"Proxima Soft",sans-serif', display: "flex", flexDirection: "column" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: pfT.brandDark, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800 }}>✦</span>
        <div style={{ fontFamily: '"Filson Soft","Proxima Soft",sans-serif', fontSize: 17, fontWeight: 700, color: pfT.ink }}>{title}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
        {points.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: pfT.teal, marginTop: 8, flexShrink: 0 }}/>
            <div style={{ fontSize: 14, color: pfT.body, fontWeight: 500, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p }}/>
          </div>
        ))}
      </div>
    </div>
  );
}

// =====================================================================
// CONCERN 5 — Equal Employment: voluntary self-ID (NOT a warning)
// =====================================================================
function EqualEmp({ after }) {
  const rows = [
    { q: "Are you authorized to work in the US?", a: "No", kind: "eligibility" },
    { q: "Will you now or in the future require sponsorship for employment visa status?", a: "No", kind: "eligibility" },
    { q: "Do you have a disability?", a: null, kind: "eeo" },
    { q: "What is your gender?", a: null, kind: "eeo" },
    { q: "Do you identify as LGBTQ+?", a: null, kind: "eeo" },
    { q: "Are you a veteran?", a: null, kind: "eeo" },
    { q: "How do you identify your race?", a: null, kind: "eeo" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: pfT.pageBg, padding: 26, fontFamily: '"Proxima Soft",sans-serif' }}>
      <div style={{ background: pfT.card, borderRadius: 18, padding: "24px 28px", boxShadow: "0 1px 2px rgba(16,23,38,0.04)" }}>

        <SecHead title="Equal Employment">
          {after && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 11px", borderRadius: 20, background: "#EEF1F5", border: `1px solid ${pfT.hair2}`, color: pfT.body, fontSize: 12, fontWeight: 700 }}>
              Voluntary
            </span>
          )}
        </SecHead>

        {after && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 13px", borderRadius: 10, background: "#F7FAFF", border: `1px solid ${pfT.hairline}`, marginBottom: 18 }}>
            <span style={{ flexShrink: 0, marginTop: 1 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={pfT.tealInk} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </span>
            <span style={{ fontSize: 12.5, color: pfT.body, fontWeight: 500, lineHeight: 1.45 }}>These are optional and used only for diversity reporting — they never affect your applications or matches.</span>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column" }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "13px 0", borderBottom: i < rows.length - 1 ? `1px solid ${pfT.hairline}` : "none" }}>
              <div style={{ flex: 1, fontSize: 14.5, color: pfT.ink, fontWeight: 500, lineHeight: 1.35 }}>
                {r.q}
                {after && r.kind === "eligibility" && (
                  <span style={{ marginLeft: 8, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.04em", color: pfT.tealInk, background: "#E5F6F4", padding: "2px 7px", borderRadius: 5, verticalAlign: "middle" }}>ELIGIBILITY</span>
                )}
              </div>
              <div style={{ flexShrink: 0 }}>
                {r.a ? (
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 8, background: "#F1F3F6", color: pfT.ink, fontSize: 14, fontWeight: 600 }}>{r.a}</span>
                ) : after ? (
                  <button style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 8, background: "#fff", border: `1px solid ${pfT.hair2}`, color: pfT.muted, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
                    Add <span style={{ color: pfT.faint, fontWeight: 500 }}>· optional</span>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {after && (
          <button style={{ marginTop: 16, padding: "9px 16px", borderRadius: 9, background: "transparent", border: `1px solid ${pfT.hair2}`, color: pfT.body, fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>Prefer not to answer all</button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  AddressBlock, StrengthCard, WorkAuth, CompleteModal, EqualEmp, Rationale,
});

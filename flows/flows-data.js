// =====================================================================
// Bloom — Edge Cases IN CONTEXT · data
// Each flow = the existing happy path + the edge states that branch off it.
// Every edge is anchored to a REAL screen so you can see where & how it fires:
//   screen : login | home | review | apps | onboard | plan | copilot
//   on     : anchor name of the trigger element on that screen (pin lands here)
//   place  : where the resulting UI appears  → center | top | bottom | at | mid
//            center = genuine blocking confirmation (dimmed, true modal)
//            at     = attaches to its own field/card, in place
//            top    = banner docked to the top of the screen
//            bottom = corner toast, transient & non-blocking
//   act    : the user action / event that triggers it
//   mock   : the actual edge UI (modal | banner | toast | state | acard | skel | inline)
//   sev    : high | med | low
// Trimmed to the 28 cases a real user actually hits in normal use — no
// network drops, race conditions, or other rare/technical failure modes.
// =====================================================================
window.FLOWS = {
  meta: {
    title: "Edge cases, pinned to the screen they happen on",
    sub: "Every edge below is composited onto the real Bloom screen where it fires — ① the pin marks the element the user touched, ② the state appears exactly where it would in the real product: inline under a field, docked as a banner, or a corner toast. Only genuine blocking confirmations use a dialog. Read it as: on THIS screen, the user does THIS, so build THAT.",
    date: "June 2026",
  },

  legend: [
    { sw:"var(--flame)", fg:"#fff", ic:"①", t:"The trigger pin", d:"Numbered dot on the exact element the user tapped or the event that fired." },
    { sw:"var(--ink)", fg:"#fff", ic:"②", t:"The result, in place", d:"Attached under its field, docked as a top banner, or a corner toast — a dialog only for a true blocking confirmation." },
    { sw:"var(--blush)", fg:"var(--blushInk)", ic:"●", t:"High", d:"Trust, money or data-loss. Build before launch." },
    { sw:"var(--butter)", fg:"var(--butterInk)", ic:"●", t:"Med / Low", d:"Expected polish — missing failure, empty & loading states." },
  ],

  flows: [
    // ───────────────────────── AUTH ─────────────────────────
    {
      id:"auth", name:"Sign in & Sign up", icon:"🔑", tint:"lilac", screen:"login",
      intro:"Today the login form always proceeds — no validation, no wrong-password feedback, no reset. These screens close those gaps. <b>The form must never clear what the user typed.</b>",
      happy:[
        {n:"STEP 1", t:"Enter email + password", d:"or LinkedIn / Google SSO"},
        {n:"STEP 2", t:"Validate & submit", d:"button shows pending state"},
        {n:"STEP 3", t:"Land on Home", d:"new users → setup"},
      ],
      edges:[
        { sev:"high", screen:"login", on:"email", place:"at", pos:{x:70.5,y:64.8,w:39}, act:"Taps Sign in with a malformed email",
          trig:"Submit tapped with bad input", name:"Inline field validation",
          mock:{t:"inline", text:"Enter a valid email address"},
          fx:"Validate on blur + submit, error attaches under the field. <b>Disable the button until the form is valid</b> — never proceed silently." },
        { sev:"high", screen:"login", on:"submit", place:"at", pos:{x:70.5,y:74.2,w:39}, act:"Submits a wrong password",
          trig:"Wrong email / password", name:"Error under the password field",
          mock:{t:"inline", text:"Login details don’t match · <u>Reset</u>"},
          fx:"Generic message under the password field — don't reveal which was wrong. <b>Fields stay filled.</b> Surface 'Reset password' inline after a miss." },
        { sev:"high", screen:"login", on:"forgot", place:"bottom", act:"Taps “Forgot password?” and submits an email",
          trig:"Tap “Forgot password?”", name:"Reset-link sent",
          mock:{t:"toast", ic:"📨", text:"Reset link sent to v•••@gmail.com", action:"Resend"},
          fx:"A whole flow that doesn't exist yet: request → email → set-new-password, with <b>expired-link handling.</b> Confirmation is a transient toast, not a blocking dialog." },
        { sev:"high", screen:"login", on:"email", place:"at", pos:{x:70.5,y:64.8,w:39}, act:"Signs up with an email already in use",
          trig:"Email already registered (sign-up)", name:"Account-exists nudge",
          mock:{t:"inline", text:"Account exists — <u>sign in instead →</u>"},
          fx:"Inline under the email field, with a one-tap switch to sign-in. If they used Google before: <b>“You usually sign in with Google.”</b>" },
      ],
    },

    // ───────────────────────── ONBOARDING ─────────────────────────
    {
      id:"onboarding", name:"Onboarding & résumé", icon:"🌱", tint:"mint", screen:"onboard",
      intro:"Setup trains Sprout. Right now a bad upload or a misread résumé dead-ends, and leaving loses everything. These make setup <b>resumable and correctable.</b>",
      happy:[
        {n:"STEP 1", t:"Create account", d:"step 1 of 2"},
        {n:"STEP 2", t:"Upload résumé", d:"PDF / DOCX"},
        {n:"STEP 3", t:"Sprout parses it", d:"mushroom loader"},
        {n:"STEP 4", t:"Confirm details", d:"role · salary · location"},
        {n:"STEP 5", t:"Sprout is ready", d:"→ Home"},
      ],
      edges:[
        { sev:"high", screen:"onboard", on:"dropzone", place:"mid", act:"Drops a .pages / 20MB / corrupt file",
          trig:"Wrong format / too large / corrupt", name:"Upload failed, in the dropzone",
          mock:{t:"modal", icon:"📄", iconBg:"var(--blush)", iconFg:"var(--blushInk)", title:"That file won’t upload", body:"Use a PDF or DOCX under 10 MB. This was a .pages file.", btns:[{label:"Try again", kind:"pri"},{label:"Enter manually", kind:"ghost"}]},
          fx:"Specific reason, not a generic fail — the dropzone itself shows the error, no screen dimming. <b>Always offer manual entry</b> so setup never dead-ends." },
        { sev:"high", screen:"onboard", on:"field", place:"mid", act:"Sprout parses shaky dates / titles",
          trig:"Sprout misreads dates / titles", name:"Confirm low-confidence fields",
          mock:{t:"acard", q:"I read this — does it look right?", answer:"Senior Designer at <span class='hl'>Headspace · 2019–2024</span>", flag:{tone:"warn", ic:"⚠", text:"Low confidence — double-check the dates"}},
          fx:"Show parsed fields for confirmation, <b>flag the shaky ones</b>, let the user fix before continuing." },
        { sev:"high", screen:"onboard", on:"close", place:"center", act:"Taps back / close mid-setup",
          trig:"Close / back during setup", name:"Save & finish later",
          mock:{t:"modal", icon:"🌱", iconBg:"var(--mint)", iconFg:"var(--mintInk)", title:"Save your progress?", body:"You’re 60% done. We’ll pick up where you left off.", btns:[{label:"Save & exit", kind:"pri"},{label:"Keep going", kind:"ghost"}]},
          fx:"Persist partial progress; <b>resume from the last step</b> on return. A genuine blocking confirmation — leaving without saving loses real work." },
        { sev:"med", screen:"onboard", on:"dropzone", place:"mid", act:"Has no résumé to upload",
          trig:"User has no résumé", name:"No-résumé fork",
          mock:{t:"state", icon:"📭", iconBg:"var(--lilac)", iconFg:"var(--lilacInk)", title:"No résumé handy?", body:"Import from LinkedIn or fill in the basics — ~3 minutes."},
          fx:"Two fallbacks (LinkedIn import / manual). Setup must have <b>no required-file dead-end.</b>" },
      ],
    },

    // ───────────────────────── REVIEW & SEND ─────────────────────────
    {
      id:"review", name:"Review & send", icon:"✋", tint:"butter", screen:"review",
      intro:"The highest-stakes surface — Sprout sends real applications under the user’s name. Today every answer looks equally trustworthy and <b>“Approve & send” has no failure path.</b>",
      happy:[
        {n:"STEP 1", t:"Open queued job", d:"JD + 10 drafts"},
        {n:"STEP 2", t:"Review answers", d:"edit inline / AI assist"},
        {n:"STEP 3", t:"Confirm JIT fields", d:"asks once, saves"},
        {n:"STEP 4", t:"Approve & send", d:"→ celebrate"},
      ],
      edges:[
        { sev:"high", screen:"review", on:"answer", place:"mid", act:"Reaches an answer with an invented stat",
          trig:"Sprout invented a claim", name:"Fabrication guardrail",
          mock:{t:"acard", q:"Walk us through a project you led", answer:"…drove a <span class='hl'>23% lift in retention</span>.", flag:{tone:"err", ic:"✦", text:"Sprout inferred this — confirm before sending"}},
          fx:"Tag AI-inferred claims distinctly, right on the answer card. <b>Never auto-send an unverifiable fact</b> — require confirmation." },
        { sev:"high", screen:"review", on:"answer", place:"mid", act:"Reaches a low-confidence draft",
          trig:"Answer is shaky", name:"Confidence flag",
          mock:{t:"acard", q:"Why do you want to work here?", answer:"I’ve admired your approach to design systems…", flag:{tone:"warn", ic:"👀", text:"Double-check — Sprout wasn’t sure"}},
          fx:"Per-answer confidence, <b>distinct from the ‘needs your eyes’ chip.</b> Low confidence forces review even in Auto." },
        { sev:"high", screen:"review", on:"approve", place:"top", act:"Taps “Approve & send”, ATS rejects",
          trig:"“Approve & send” fails", name:"Send-failed banner",
          mock:{t:"banner", tone:"err", ic:"📨", title:"Couldn’t send to Linear", body:"Saved as a draft so nothing’s lost.", cta:"Retry send"},
          fx:"send → pending → success OR this banner, docked to the top of the screen. Plus <b>idempotency</b> so a retry never double-applies." },
        { sev:"high", screen:"review", on:"approve", place:"top", act:"Posting closes while reviewing",
          trig:"Posting closes mid-review", name:"Role-closed block",
          mock:{t:"banner", tone:"err", ic:"🔒", title:"This role just closed", body:"Linear pulled the posting. Sending is disabled.", cta:"See similar roles"},
          fx:"Live check; <b>block send</b>, explain why, offer similar roles so the work isn’t wasted." },
        { sev:"high", screen:"review", on:"back", place:"center", act:"Hits back with unsaved edits",
          trig:"Leave with edited answers", name:"Unsaved-changes guard",
          mock:{t:"modal", icon:"✏️", iconBg:"var(--butter)", iconFg:"var(--butterInk)", title:"Save your edits?", body:"You changed 3 answers for Linear. Leaving discards them.", btns:[{label:"Save draft", kind:"pri"},{label:"Discard", kind:"danger"}]},
          fx:"Guard back/nav. <b>Auto-save draft answers per job</b> — edits are local-only today and vanish on exit. Genuinely destructive if ignored, so it stays a dialog." },
        { sev:"med", screen:"review", on:"approve", place:"center", act:"Approves a role already applied to",
          trig:"Already applied to this role", name:"Duplicate warning",
          mock:{t:"modal", icon:"↩", iconBg:"var(--lilac)", iconFg:"var(--lilacInk)", title:"You applied 3 days ago", body:"You already sent an application to Linear for this role.", btns:[{label:"Apply anyway", kind:"pri"},{label:"Cancel", kind:"ghost"}]},
          fx:"Warn before re-sending a duplicate to the same company/role — an irreversible external send, so it blocks first." },
      ],
    },

    // ───────────────────────── APPLICATIONS ─────────────────────────
    {
      id:"applications", name:"Applications tracker", icon:"✓", tint:"cyan", screen:"apps",
      intro:"The pipeline is rich, but <b>delete is instant with no undo</b>, search has no empty state, and batch-apply can report success when sends actually failed.",
      happy:[
        {n:"STEP 1", t:"Pipeline board", d:"Review → … → Offer"},
        {n:"STEP 2", t:"Move / favorite", d:"+ status history"},
        {n:"STEP 3", t:"Batch apply", d:"progress overlay"},
        {n:"STEP 4", t:"All sent", d:"summary"},
      ],
      edges:[
        { sev:"high", screen:"apps", on:"card", place:"bottom", act:"Deletes a job card",
          trig:"Card deleted", name:"Undo toast (soft-delete)",
          mock:{t:"toast", ic:"🗑", text:"Removed Linear from your pipeline", action:"Undo"},
          fx:"DELETE is immediate today. <b>Soft-delete to Archive with an Undo toast</b>; confirm on bulk delete." },
        { sev:"high", screen:"apps", on:"batch", place:"top", act:"Batch apply finishes — 2 failed",
          trig:"Batch-apply partially fails", name:"Honest run summary",
          mock:{t:"banner", tone:"warn", ic:"📊", title:"8 sent · 2 need you", body:"Vercel & Figma need an essay before they can go out.", cta:"Resolve 2 flagged"},
          fx:"<b>Never report ‘all sent’ when some failed.</b> Docked banner summarizes and routes to what's blocked." },
        { sev:"high", screen:"apps", on:"batch", place:"top", act:"A job mid-batch needs an essay",
          trig:"Queued job needs an answer mid-batch", name:"Pause & ask",
          mock:{t:"banner", tone:"info", ic:"⏸", title:"Paused on Figma", body:"Needs a custom essay before Sprout can send it.", cta:"Answer & resume"},
          fx:"<b>Pause the batch, ask, resume</b> — don't skip the job or send it blank." },
        { sev:"med", screen:"apps", on:"search", place:"mid", act:"Searches for something not there",
          trig:"Search returns nothing", name:"No-results state",
          mock:{t:"state", icon:"🔍", iconBg:"#D7F7F7", iconFg:"var(--cyanInk)", title:"No matches for “netflix”", body:"Nothing in your pipeline matches that search."},
          fx:"Dedicated empty state with a clear-search action — header counts shouldn't silently read zero." },
      ],
    },

    // ───────────────────────── BILLING ─────────────────────────
    {
      id:"billing", name:"Upgrade & billing", icon:"✦", tint:"lilac", screen:"plan",
      intro:"Plans change <b>instantly with no checkout and no card capture</b> — no decline path, no renewal failure, no way to cancel. These turn billing into something you can charge against.",
      happy:[
        {n:"STEP 1", t:"Compare plans", d:"Free · Pro · Launch"},
        {n:"STEP 2", t:"Checkout", d:"card entry"},
        {n:"STEP 3", t:"Confirm payment", d:"pending → paid"},
        {n:"STEP 4", t:"Receipt", d:"emailed invoice"},
      ],
      edges:[
        { sev:"high", screen:"plan", on:"upgrade", place:"center", act:"Taps “Upgrade to Pro”",
          trig:"Tap Upgrade to Pro", name:"Real checkout",
          mock:{t:"modal", icon:"💳", iconBg:"var(--lilac)", iconFg:"var(--lilacInk)", title:"Upgrade to Pro · $19/mo", body:"Card  ····  ····  ····  4242", btns:[{label:"Pay $19", kind:"pri"},{label:"Cancel", kind:"ghost"}], col:true},
          fx:"Card capture → confirm → success. <b>No plan ever upgrades without payment.</b> A genuine transactional sheet, so it's the one true dialog here." },
        { sev:"high", screen:"plan", on:"upgrade", place:"top", act:"Card is declined at checkout",
          trig:"Card declined", name:"Decline, keep current plan",
          mock:{t:"banner", tone:"err", ic:"💳", title:"Card was declined", body:"You’re still on Free — nothing was charged.", cta:"Try another card"},
          fx:"Inline reason; <b>keep the current plan</b>; let them retry or swap card. Idempotent on resume." },
        { sev:"high", screen:"home", on:"top", place:"top", act:"Renewal fails on an expired card",
          trig:"Renewal fails (expired card)", name:"Dunning + grace",
          mock:{t:"banner", tone:"warn", ic:"⏳", title:"Payment failed — update your card", body:"Pro stays active 7 more days while we retry.", cta:"Update card"},
          fx:"<b>Degrade, don't hard-cut.</b> Grace period + retries + clear update path." },
        { sev:"high", screen:"review", on:"approve", place:"at", pos:{x:70,y:14,w:46}, act:"Free user taps Approve past the cap",
          trig:"Free user hits the send cap", name:"Paywall at the action",
          mock:{t:"banner", tone:"lilac", ic:"🌿", title:"You’ve used all 5 free sends", body:"Upgrade to Pro for unlimited applications.", cta:"Upgrade"},
          fx:"<b>Enforce the cap at the point of action everywhere</b> — attached right under the Approve button, not a dead end after the tap." },
        { sev:"high", screen:"plan", on:"cancel", place:"center", act:"Taps “Cancel subscription”",
          trig:"Tap Cancel subscription", name:"Cancel flow",
          mock:{t:"modal", icon:"✦", iconBg:"var(--blush)", iconFg:"var(--blushInk)", title:"Cancel Pro?", body:"Auto Apply turns off. You keep Pro until Jul 18.", btns:[{label:"Keep Pro", kind:"pri"},{label:"Cancel", kind:"danger"}]},
          fx:"Cancel doesn't exist yet. Add reason + <b>‘active until period end’</b> + optional retention offer. Destructive to a paid feature, so it blocks first." },
        { sev:"high", screen:"plan", on:"free", place:"center", act:"Picks Free while on Pro w/ Auto on",
          trig:"Downgrade while using a paid feature", name:"What-you-lose confirm",
          mock:{t:"modal", icon:"⬇", iconBg:"var(--butter)", iconFg:"var(--butterInk)", title:"Downgrade to Free?", body:"Auto Apply stops; capped at 5 sends/mo from Jul 18.", btns:[{label:"Downgrade", kind:"pri"},{label:"Keep Pro", kind:"ghost"}]},
          fx:"Spell out what's lost and <b>when it takes effect</b> (period end, not immediately). Removes a paid feature, so it blocks first." },
      ],
    },

    // ───────────────────────── AUTO APPLY / SYSTEM ─────────────────────────
    {
      id:"system", name:"Auto Apply & system states", icon:"🚀", tint:"cyan", screen:"home",
      intro:"Cross-cutting states the whole app is missing: a consent gate before Sprout sends unsupervised, a way to show it’s <b>paused</b>, plus the loading states that don’t exist anywhere today.",
      happy:[
        {n:"STEP 1", t:"Switch to Auto", d:"Sprout sends for you"},
        {n:"STEP 2", t:"Sprout applies", d:"guardrails enforced"},
        {n:"STEP 3", t:"Daily digest", d:"what it did"},
      ],
      edges:[
        { sev:"high", screen:"copilot", on:"auto", place:"center", act:"Flips to full Auto the first time",
          trig:"First switch to full Auto", name:"One-time consent",
          mock:{t:"modal", icon:"🚀", iconBg:"var(--cyan)", iconFg:"var(--ink)", title:"Let Sprout apply for you?", body:"It submits without review. Essays & low-confidence answers still come to you.", btns:[{label:"Turn on Auto", kind:"pri"},{label:"Keep reviewing", kind:"ghost"}]},
          fx:"A real consent step before the first unsupervised send, naming <b>what guardrails still protect.</b> Irreversible-in-effect (real applications go out), so it blocks first." },
        { sev:"high", screen:"home", on:"status", place:"top", act:"Auto stops (payment / guardrail)",
          trig:"Auto paused", name:"Paused banner",
          mock:{t:"banner", tone:"warn", ic:"⏸", title:"Auto Apply is paused", body:"Your payment failed, so Sprout stopped sending.", cta:"Fix & resume"},
          fx:"Persistent banner with <b>reason + resume</b>. Today the hero still says ‘running’ while it's silently stopped." },
        { sev:"high", screen:"home", on:"status", place:"bottom", act:"A low-confidence draft appears in Auto",
          trig:"Low-confidence answer in Auto", name:"Forced to review",
          mock:{t:"toast", ic:"👀", text:"1 application needs your eyes before Sprout can send", action:"Review"},
          fx:"Hard guardrail: low-confidence / essay / custom-question drafts <b>route back to review</b> even in Auto." },
        { sev:"high", screen:"home", on:"content", place:"mid", act:"Any data is still loading",
          trig:"Any data is loading", name:"Skeleton states",
          mock:{t:"skel"},
          fx:"Skeletons for hero, lists, cards & billing; spinners for actions. <b>Today latency shows blank or janky.</b>" },
      ],
    },
  ],
};

// =====================================================================
// Bloom — Edge-Case & UX Production Audit · structured content
// Severity: high | med | low
// =====================================================================
window.AUDIT = {
  meta: {
    product: "Bloom",
    subtitle: "Sprout — the AI job-application copilot",
    title: "Edge-Case & UX Production Audit",
    date: "June 2026",
    authors: "Sr. Product Design · UX Architecture · QA · Product",
    scope: "Login → Onboarding → Home → Review → Applications → Copilot → Settings, plus AI, payment, notifications, permissions, mobile & recovery.",
  },

  summary: {
    lede: "The happy path is strong and unusually well-considered — calm empty states, a celebrate moment, a batch-apply progress overlay, relevance feedback, and an unsaved-changes save bar already exist. What's missing is everything that happens when reality intrudes: a card declines, the model is unsure, a posting closes mid-review, the network drops, or a free user hits their cap. Those gaps are concentrated in four areas that carry real production and trust risk.",
    pillars: [
      { k: "Sprout sends to real employers", v: "The single highest-stakes surface. There is no low-confidence flag, no fabrication guardrail, no failed-generation recovery, and no send-failure path. An auto-applied, hallucinated claim reaches a hiring manager with the user's name on it.", tint: "flame" },
      { k: "Money moves are instant & frictionless", v: "Plan changes apply with no checkout, no card capture, and no decline / renewal-failure / cancel flow. Free-tier limits are displayed but never enforced at the point of action.", tint: "lilac" },
      { k: "Destructive & exit actions lack guards", v: "Delete is immediate with no confirm or undo; leaving a half-edited review silently discards work; navigating away from unsaved Copilot edits doesn't warn.", tint: "butter" },
      { k: "No failure, offline, or loading vocabulary", v: "Data is assumed present and synchronous. There are no skeletons, no network-error states, no offline detection, and the product is desktop-fixed with no responsive story.", tint: "cyan" },
    ],
    counts: [], // filled at render time from screens
  },

  // ── State-coverage matrix ──────────────────────────────────────────
  // status: have | partial | gap | na
  matrix: {
    cols: ["Empty", "Loading", "Success", "Error", "Confirm", "Offline"],
    rows: [
      { screen: "Login / Sign-up",     cells: ["na","gap","partial","gap","na","gap"] },
      { screen: "Onboarding / Setup",  cells: ["partial","partial","partial","gap","gap","gap"] },
      { screen: "Home",                cells: ["have","gap","have","gap","na","gap"] },
      { screen: "Review flow",         cells: ["na","gap","have","gap","partial","gap"] },
      { screen: "Applications tracker",cells: ["have","gap","partial","gap","gap","gap"] },
      { screen: "Copilot config",      cells: ["na","gap","have","gap","partial","gap"] },
      { screen: "Plan & billing",      cells: ["na","gap","partial","gap","gap","gap"] },
    ],
  },

  // ── Per-screen audits ──────────────────────────────────────────────
  screens: [
    // 1 ─ AUTH
    {
      id: "auth", name: "Login & Sign-up", icon: "🔑", tint: "lilac",
      happy: "User signs in with LinkedIn / Google SSO or email + password; new users go through a 2-step account → Sprout-setup flow.",
      have: [
        "Sign-in / sign-up toggle with contextual copy",
        "SSO (LinkedIn, Google) + email/password",
        "“Step 1 of 2 · Account” progress signal on sign-up",
      ],
      edges: [
        { c: "No field validation — email format, password length, or empty fields are never checked; the button always proceeds.", s: "high", ux: "Inline field validation; disable submit until valid; show requirements on the password field." },
        { c: "No “Forgot password” path exists anywhere.", s: "high", ux: "Add “Forgot password?” → email reset → new-password screen, with expired-link handling." },
        { c: "Wrong credentials / unknown email produce no feedback.", s: "high", ux: "Generic “Email or password is incorrect” (don't reveal which); offer reset after 2 misses." },
        { c: "Account exists with a different method (signed up with Google, now trying email).", s: "med", ux: "“You usually sign in with Google” → deep-link the right method instead of erroring." },
        { c: "Email already registered on sign-up.", s: "high", ux: "Inline “Account exists — sign in instead” with a one-tap switch." },
        { c: "SSO popup blocked / cancelled / provider error.", s: "med", ux: "Detect closed popup; fall back to email; surface provider outage." },
        { c: "Network failure on submit loses typed input and gives no error.", s: "high", ux: "Preserve form; inline retry banner; never clear fields on failure." },
        { c: "No rate-limiting / brute-force feedback.", s: "med", ux: "After N attempts, soft-lock with cooldown copy + reset nudge." },
        { c: "Email verification & breached-password checks absent.", s: "low", ux: "Verify email post-signup; warn on known-breached passwords." },
      ],
      states: {
        empty: "n/a — form is the default.",
        loading: "Missing — submit button needs a pending/spinner state; SSO needs a “redirecting…” state.",
        success: "Redirect to Home / Onboarding (present).",
        error: "Missing — needs both inline field errors and a top-of-form auth-error banner.",
      },
      modals: [
        { n: "Reset-password sent", t: "Tap “Forgot password”", a: "Resend · Open email · Back to sign-in" },
        { n: "New-device sign-in alert", t: "Login from unrecognized device", a: "This was me · Secure account" },
      ],
      notifs: ["Email: verify your address", "Email: password reset link", "Email: new-device sign-in", "In-app: welcome / setup-incomplete nudge"],
    },

    // 2 ─ ONBOARDING
    {
      id: "onboarding", name: "Onboarding & Sprout Setup", icon: "🌱", tint: "mint",
      happy: "After account creation, a guided setup trains Sprout: role, salary, location, résumé upload / parse, preferences → lands on Home.",
      have: [
        "Guided setup is replayable from Settings (“Replay guided setup”)",
        "Résumé-parsing loader screen exists (mushroom loader)",
        "Step indicator framing (“set up Sprout next”)",
      ],
      edges: [
        { c: "Exiting setup midway has no save / warning — progress is lost.", s: "high", ux: "“Save & finish later?” modal; persist partial progress; resume from last step on return." },
        { c: "Résumé upload failure — wrong format, >size limit, corrupt file.", s: "high", ux: "Specific error (“PDF or DOCX, under 10MB”); retry; manual-entry fallback." },
        { c: "Résumé parse failure or low-confidence extraction (Sprout misreads dates/titles).", s: "high", ux: "Show parsed fields for confirmation; flag low-confidence rows; let user correct before continuing." },
        { c: "User has no résumé to upload.", s: "med", ux: "Offer “Import from LinkedIn” or “Fill manually” so setup never dead-ends." },
        { c: "LinkedIn import fails / profile is private / mismatched.", s: "med", ux: "Graceful fallback to manual; explain what couldn't be pulled." },
        { c: "Required fields skipped — Sprout starts with gaps.", s: "med", ux: "Mark fields Sprout still needs; defer to just-in-time asks rather than hard-blocking." },
        { c: "Browser closed mid-parse / mid-setup.", s: "med", ux: "Re-enter at the last completed step; show ‘setup 60% done’." },
        { c: "Parse is slow (large résumé / model latency).", s: "low", ux: "Progress + reassurance (“~30s — reading your experience”); allow background continue." },
      ],
      states: {
        empty: "First-run is the empty state — needs a clear ‘why’ and time estimate.",
        loading: "Partial — résumé parse loader exists; needs determinate progress + slow-path copy.",
        success: "Partial — lands on Home; add a ‘Sprout is ready’ confirmation moment.",
        error: "Missing — upload + parse + import failures all need treatments.",
      },
      modals: [
        { n: "Exit setup?", t: "Close / back during onboarding", a: "Save & exit · Keep setting up" },
        { n: "Upload failed", t: "Résumé upload error", a: "Try again · Enter manually" },
        { n: "Confirm parsed info", t: "Low-confidence résumé fields", a: "Looks right · Fix fields" },
      ],
      notifs: ["In-app: “Finish setup to start applying”", "Email: setup-incomplete reminder (24h)", "Toast: “Sprout is trained and ready 🌱”"],
    },

    // 3 ─ HOME
    {
      id: "home", name: "Home", icon: "◐", tint: "cyan",
      happy: "Mode-aware dashboard: review-queue or auto-recap hero, review queue / just-sent list, Sprout activity feed, weekly stats.",
      have: [
        "“All caught up” empty queue state",
        "Celebrate banner on approve",
        "Live activity feed + weekly ROI stats",
        "Mode-adaptive hero (Review vs Auto)",
      ],
      edges: [
        { c: "First-time user (zero data) sees stats scaffolding implying history that doesn't exist.", s: "high", ux: "Distinct first-run hero: “Sprout is finding your first matches” — no fabricated metrics." },
        { c: "“Searching, no matches yet” is conflated with “all caught up” — opposite meanings, same screen.", s: "med", ux: "Separate ‘actively searching’ state from ‘queue cleared’; show what Sprout is scanning." },
        { c: "No matches found at all (targets too narrow / niche role).", s: "high", ux: "“Your filters are strict” → one-tap to widen targets in Copilot." },
        { c: "Free user has drafts queued but is over their monthly send cap.", s: "high", ux: "Lock the approve CTA with an inline upgrade prompt, not a dead end after tapping." },
        { c: "Auto Apply silently paused (payment failed / guardrail tripped) but hero still says ‘running’.", s: "high", ux: "Persistent ‘Auto Apply paused’ banner with reason + resume CTA." },
        { c: "Feed / stats fail to load or are stale.", s: "med", ux: "Skeletons → error card with retry; timestamp the data." },
      ],
      states: {
        empty: "Have (caught-up) — but missing the first-run and no-matches variants.",
        loading: "Missing — hero, queue, feed and stat tiles need skeletons.",
        success: "Have — celebrate banner.",
        error: "Missing — feed/stats load failure + auto-paused banner.",
      },
      modals: [
        { n: "Upgrade to keep applying", t: "Free cap reached on approve", a: "Upgrade · Maybe later" },
        { n: "Auto Apply paused", t: "Banner CTA (payment / guardrail)", a: "Fix & resume · Review manually" },
      ],
      notifs: ["In-app: “3 drafts ready to review”", "Push/email: recruiter reply", "Daily digest: what Sprout did", "Banner: Auto Apply paused"],
    },

    // 4 ─ REVIEW
    {
      id: "review", name: "Review Flow", icon: "✋", tint: "butter",
      happy: "Per-job review: JD panel + Sprout's 10 drafted answers; edit any inline (AI assist or manual), confirm just-in-time fields, Approve & send.",
      have: [
        "Skip-job confirmation modal",
        "“N answers need your eyes” triage nudge",
        "AI-assist rewriting busy/disabled state",
        "Just-in-time question card (asks once, saves for future)",
        "Essay starter → type → polish phases",
        "Scoped chat with graceful off-topic fallback",
      ],
      edges: [
        { c: "Leaving mid-review discards all inline edits with no warning (edits are local-only).", s: "high", ux: "Unsaved-changes guard on back/nav; auto-save draft answers per job." },
        { c: "“Approve & send” has no failure path — ATS/network error after tap is unhandled.", s: "high", ux: "Send → pending → success/celebrate OR “Couldn't send, saved as draft” with retry." },
        { c: "AI low confidence on an answer isn't surfaced — all drafts look equally trustworthy.", s: "high", ux: "Confidence flag on shaky answers (“Double-check this”), distinct from the ‘needs your eyes’ chip." },
        { c: "Failed generation / model timeout while drafting or rewriting.", s: "high", ux: "Per-card error with Retry + ‘write it myself’; never leave a blank approved answer." },
        { c: "Fabrication risk — Sprout can invent metrics/claims the user never gave (e.g. the polish step appends a made-up stat).", s: "high", ux: "Mark AI-inferred claims; require user confirmation before any unverifiable fact is sent." },
        { c: "Posting closes / is removed while the user reviews.", s: "high", ux: "Live ‘This role just closed’ banner; block send; offer similar roles." },
        { c: "Duplicate — user already applied to this company/role.", s: "med", ux: "“You applied 3 days ago” warning before re-sending." },
        { c: "Essay below required word count after polish.", s: "med", ux: "Validate against the posting's limit; block send with a clear count." },
        { c: "Approve while offline.", s: "high", ux: "Queue the send; ‘will send when you're back online’; reconcile on reconnect." },
        { c: "Résumé attachment fails to attach at send time.", s: "med", ux: "Verify attachment; surface failure before counting as sent." },
      ],
      states: {
        empty: "n/a — always has the 10-question set.",
        loading: "Missing — initial ‘Sprout is drafting…’ and per-answer regenerate states.",
        success: "Have — routes to celebrate on Home.",
        error: "Missing — send-failure, generation-failure, job-closed.",
      },
      modals: [
        { n: "Skip this job?", t: "Tap “Skip”", a: "Skip · Keep reviewing", have: true },
        { n: "Unsaved changes", t: "Leave with edited answers", a: "Save draft · Discard · Stay" },
        { n: "Send failed", t: "Approve & send error", a: "Retry · Save as draft" },
        { n: "Role closed", t: "Posting expired mid-review", a: "See similar · Close" },
        { n: "Already applied", t: "Duplicate detected", a: "Apply anyway · Cancel" },
      ],
      notifs: ["Toast: “Application sent to {Co}”", "In-app: “Couldn't send — action needed”", "Push: recruiter replied / viewed"],
    },

    // 5 ─ APPLICATIONS
    {
      id: "applications", name: "Applications Tracker", icon: "✓", tint: "mint",
      happy: "Kanban pipeline (Review → Applied → Replied → Interviewing → Offer): move status, favorite, relevance thumbs, bulk select, batch-apply, job detail modal.",
      have: [
        "Per-column empty states (Sprout-voiced)",
        "Batch-apply progress + ‘all sent’ overlay",
        "Bulk-action bar on selection",
        "Move-status menu + status-change history log",
        "Relevance feedback toast",
        "Job-detail modal with timeline + tabs",
        "Search, favorites filter, ghost ‘+296 more’ tail",
      ],
      edges: [
        { c: "Delete is immediate — no confirm, no undo (DELETE_JOB removes instantly).", s: "high", ux: "Undo toast (“Deleted — Undo”) or a confirm for multi-delete; soft-delete to Archive." },
        { c: "Search with no results — header counts and columns don't reflect ‘nothing found’.", s: "med", ux: "Dedicated ‘No matches for “x”’ empty state with clear-search CTA." },
        { c: "Archive button leads nowhere — no archive view or empty state.", s: "med", ux: "Build the archive list + restore action, or hide until shipped." },
        { c: "Bulk Move/Delete/Favorite are unwired and unconfirmed.", s: "med", ux: "Wire bulk actions; confirm destructive bulk ops; show progress for large sets." },
        { c: "Batch-apply partial failure — some sends fail or hit a paywall mid-run.", s: "high", ux: "Summarize ‘8 sent · 2 need input’; never report all-sent when some failed." },
        { c: "A queued job needs an essay/JIT answer mid batch-apply.", s: "high", ux: "Pause the batch, ask, resume — don't skip or send blank." },
        { c: "Pipeline jobs go stale — expired posting, employer ghosts, offer deadline passes.", s: "med", ux: "‘Posting closed’ + ‘No reply in 30d — archive?’ + expired-offer treatments." },
        { c: "‘+296 more’ has no pagination / load path.", s: "med", ux: "Paginate or virtualize; skeleton on load-more." },
        { c: "Move-status fails to persist (offline / error).", s: "med", ux: "Optimistic update with rollback + retry toast." },
      ],
      states: {
        empty: "Have — per-column + caught-up empties.",
        loading: "Missing — column + card skeletons, load-more spinner.",
        success: "Partial — move logs history; needs a visible confirm toast.",
        error: "Missing — move/delete/load failures.",
      },
      modals: [
        { n: "Job detail", t: "Tap a card", a: "Close · View posting · Open answers", have: true },
        { n: "Delete / undo", t: "Trash a card", a: "Undo (toast) · Confirm (bulk)" },
        { n: "Bulk move", t: "Bulk-bar “Move to”", a: "Pick stage · Apply" },
        { n: "Batch-apply summary", t: "After batch run", a: "Resolve flagged · Done" },
      ],
      notifs: ["Toast: status moved", "In-app: recruiter replied", "In-app: ‘No reply in 30 days — archive?’", "Push: interview scheduled / offer"],
    },

    // 6 ─ COPILOT
    {
      id: "copilot", name: "Copilot Config (Sprout)", icon: "✦", tint: "cyan",
      happy: "Configure the single Sprout agent: inline-editable facts, search targets, ping-me guardrails, and the Review ↔ Auto mode switch.",
      have: [
        "Unsaved-changes save bar + Discard",
        "‘Saved’ toast confirmation",
        "Inline fact editing with ‘edited’ marker",
        "Mode picker, target chips, guardrail toggles",
      ],
      edges: [
        { c: "No validation on edited facts (salary as free text, empty values, bad URL).", s: "med", ux: "Typed inputs / format hints; block clearly-invalid saves." },
        { c: "Save fails — toast claims success regardless.", s: "med", ux: "Only confirm on success; keep edits dirty + retry on failure." },
        { c: "Navigating away with unsaved edits doesn't warn (save bar is dismissible by leaving).", s: "high", ux: "Route guard → unsaved-changes prompt." },
        { c: "Targets narrowed to near-zero results with no warning.", s: "med", ux: "Live ‘~N matching roles’ estimate; warn at zero." },
        { c: "First switch to full Auto Apply has no consent step.", s: "high", ux: "One-time confirm: ‘Sprout will submit without your review’ + what's protected by guardrails." },
        { c: "Auto mode with most guardrails off — high-risk auto-sends.", s: "med", ux: "Safety check before enabling broad auto-send; recommend baseline guardrails." },
        { c: "Conflicting prefs (floor above target band).", s: "low", ux: "Soft inline warning, not a block." },
      ],
      states: {
        empty: "n/a — pre-seeded from onboarding.",
        loading: "Missing — initial config fetch skeleton.",
        success: "Have — saved toast + save bar.",
        error: "Missing — save failure.",
      },
      modals: [
        { n: "Turn on Auto Apply?", t: "First Review→Auto switch", a: "Enable · Keep reviewing" },
        { n: "Unsaved changes", t: "Leave with dirty edits", a: "Save · Discard · Stay" },
        { n: "Targets too narrow", t: "Zero-result target set", a: "Widen · Keep anyway" },
      ],
      notifs: ["Toast: ‘Sprout updated — using these next batch’", "In-app: ‘Auto Apply is on’ confirmation"],
    },

    // 7 ─ PLAN & BILLING
    {
      id: "billing", name: "Plan & Billing", icon: "✦", tint: "lilac",
      happy: "Three tiers (Free / Pro / Launch); see current plan + usage; upgrade, downgrade, manage payment method & invoices.",
      have: [
        "Plan cards + current-plan state",
        "Free usage indicator (‘3 of 5 used · 2 left’)",
        "Billing rows (method, email, invoices)",
        "Plan-changed confirmation context",
      ],
      edges: [
        { c: "Plan change is instant — no checkout, no card capture for paid tiers.", s: "high", ux: "Real checkout: card entry → confirm → success; never ‘upgrade’ without payment." },
        { c: "Card declined / insufficient funds.", s: "high", ux: "Inline decline reason; keep current plan; retry / change card." },
        { c: "Payment interrupted (browser closed) / requires 3DS / ACH pending.", s: "med", ux: "‘Confirming payment…’ pending state; idempotent — no double charge on resume." },
        { c: "Subscription renewal fails (expired card).", s: "high", ux: "Dunning banner + grace period + ‘update card’; degrade, don't hard-cut." },
        { c: "Launch (60-day) / trial expiry.", s: "high", ux: "Countdown + pre-expiry reminders + convert/renew path." },
        { c: "Downgrade while relying on a paid feature (Auto Apply, over send cap).", s: "high", ux: "Confirm what's lost + when it takes effect (period end)." },
        { c: "No cancel-subscription flow exists.", s: "high", ux: "Cancel + reason + retention offer + ‘active until period end’." },
        { c: "Free monthly cap not enforced at the point of action.", s: "high", ux: "Gate the send action everywhere with a consistent paywall + counter." },
        { c: "Delete account with an active paid subscription.", s: "med", ux: "Require cancel / explain final charge before deletion." },
      ],
      states: {
        empty: "n/a.",
        loading: "Missing — billing + invoice load; checkout submitting.",
        success: "Partial — plan-changed context exists; needs receipt + confirmation screen.",
        error: "Missing — declined, renewal-failed, pending.",
      },
      modals: [
        { n: "Checkout", t: "Upgrade / Get Launch", a: "Pay · Cancel" },
        { n: "Card declined", t: "Payment failure", a: "Retry · Change card" },
        { n: "Confirm downgrade", t: "Downgrade tap", a: "Downgrade · Keep plan" },
        { n: "Cancel subscription", t: "Cancel tap", a: "Cancel · Keep · Pause" },
        { n: "Delete account", t: "Danger-zone tap", a: "Delete · Cancel" },
      ],
      notifs: ["Email: receipt / invoice", "Email + in-app: renewal in 3 days", "Banner: payment failed — update card", "Email: trial / Launch ending", "In-app: free cap reached"],
    },
  ],

  // ── Cross-cutting systems ──────────────────────────────────────────
  systems: [
    {
      id: "ai", name: "AI / Sprout Behaviour", icon: "🤖", tint: "cyan",
      intro: "Sprout writes and (in Auto) submits real applications under the user's name. This is the product's defining risk surface — every gap here is a trust or reputation failure with a real employer on the other end.",
      items: [
        { c: "Confidence too low — no signal which drafts are shaky.", s: "high", ux: "Per-answer confidence; route low-confidence to review even in Auto mode." },
        { c: "Incorrect / hallucinated output — fabricated metrics, employers, or claims.", s: "high", ux: "Tag inferred vs user-provided facts; never auto-send unverifiable claims; ‘where did this come from?’ provenance." },
        { c: "Missing information mid-draft.", s: "med", ux: "Just-in-time ask (exists in review) — extend to Auto mode with a hold-and-ask queue." },
        { c: "Incomplete profile → thin or generic answers.", s: "med", ux: "Quality gate: warn before sending below a completeness bar." },
        { c: "Generation failure / model timeout / rate limit.", s: "high", ux: "Retry with backoff; ‘Sprout is busy’ state; manual-write fallback; never block the whole queue." },
        { c: "Auto mode submits a bad answer with no human in the loop.", s: "high", ux: "Hard guardrails (essay, low-confidence, custom Qs) force review; post-send 5-min ‘undo send’ window." },
        { c: "Off-scope chat requests.", s: "low", ux: "Graceful decline + redirect (already handled in review chat)." },
      ],
    },
    {
      id: "permissions", name: "Permissions & Access", icon: "🔒", tint: "lilac",
      intro: "Who can see and do what, across auth and subscription state.",
      items: [
        { c: "Logged-out user hits a deep link (e.g. a shared review URL).", s: "high", ux: "Redirect to login, preserve destination, return after auth." },
        { c: "Session expires mid-session.", s: "high", ux: "Re-auth modal that preserves in-progress work; never silent data loss." },
        { c: "Subscription expired / downgraded — feature still visible.", s: "high", ux: "Gate gracefully to read-only; clear ‘upgrade to use’ affordance." },
        { c: "Free-plan feature gating (Auto Apply is Pro).", s: "med", ux: "Show the feature locked with value framing, not hidden." },
        { c: "Concurrent sessions / signed in on two devices.", s: "low", ux: "Reconcile state; last-write-wins with a notice." },
      ],
    },
    {
      id: "notifications", name: "Notifications System", icon: "🔔", tint: "flame",
      intro: "The home ‘activity feed’ is not a notification system. There's no center, no cross-channel delivery, and no preferences.",
      items: [
        { c: "No notification center / unread management.", s: "high", ux: "Bell + center with read/unread, grouped by type, deep-linking to the item." },
        { c: "No email / push channel for time-sensitive events (recruiter reply, offer deadline).", s: "high", ux: "Multi-channel delivery with sensible defaults." },
        { c: "No notification preferences.", s: "med", ux: "Per-type, per-channel toggles in Settings." },
        { c: "Subscription / billing events not surfaced.", s: "med", ux: "Payment-failed, renewal, trial-ending alerts in-app + email." },
        { c: "Automation alerts (Auto paused, batch summary).", s: "med", ux: "Clear actionable alerts, not buried in the feed." },
      ],
    },
    {
      id: "resilience", name: "Network, Offline & Loading", icon: "📶", tint: "butter",
      intro: "The app assumes data is present and synchronous. There is no loading, error, offline, or slow-network vocabulary anywhere.",
      items: [
        { c: "No loading / skeleton states — any latency shows blank or janky.", s: "high", ux: "Skeletons for hero, lists, cards, billing; spinners for actions." },
        { c: "No global API-error / 500 / timeout handling.", s: "high", ux: "Error boundary + retriable error cards; preserve user input." },
        { c: "No offline detection or queue.", s: "high", ux: "Offline banner; queue approves/edits; sync on reconnect." },
        { c: "Slow network — long AI actions feel frozen.", s: "med", ux: "Determinate progress + ‘this is taking longer’ copy + cancel." },
        { c: "Partial loading (some data fails).", s: "med", ux: "Render what's available; inline retry for the failed region." },
      ],
    },
    {
      id: "mobile", name: "Mobile & Responsive", icon: "📱", tint: "mint",
      intro: "The product is built as a fixed desktop layout (sidebar + multi-column kanban + side panels). There is no responsive or mobile strategy — a strategic decision to confirm before launch.",
      items: [
        { c: "Small screens — 5-column kanban, 320–384px side panels, and split review layout don't fit.", s: "high", ux: "Define a mobile information architecture (stacked pipeline, single-column review)." },
        { c: "Keyboard overlap on chat / essay inputs.", s: "med", ux: "Scroll input into view; avoid fixed bottom docks colliding with the keyboard." },
        { c: "Touch targets / hover-only actions (card actions reveal on hover).", s: "high", ux: "Hover-revealed controls are invisible on touch — provide a tap affordance." },
        { c: "Orientation changes / very wide & very narrow.", s: "low", ux: "Fluid breakpoints; test landscape." },
        { c: "Offline on mobile (commuting).", s: "med", ux: "Covered by offline queue above; matters most on mobile." },
      ],
    },
    {
      id: "recovery", name: "Recovery & Data Safety", icon: "♻️", tint: "lilac",
      intro: "What protects the user's work and progress when something fails. Recommended patterns to apply consistently.",
      items: [
        { c: "In-progress review edits are volatile (local component state).", s: "high", ux: "Per-job autosave drafts; restore on return." },
        { c: "No undo for destructive actions.", s: "high", ux: "Undo toasts for delete/skip/move; soft-delete with Archive." },
        { c: "No send-reconciliation / idempotency.", s: "high", ux: "Idempotent submit; ‘pending → confirmed’; no duplicate applications on retry." },
        { c: "No global error boundary.", s: "med", ux: "Friendly crash screen with ‘reload / report’ that keeps the user signed in." },
        { c: "Data export / account deletion exist as rows but no flow.", s: "low", ux: "Wire export (async, emailed link) and deletion (confirm + cancel-sub gate)." },
      ],
    },
  ],

  // ── Prioritized implementation checklist ───────────────────────────
  checklist: {
    critical: {
      label: "Critical before launch",
      desc: "Trust, money, and data-safety gaps that will cause real-world harm — fabricated applications, lost work, failed payments, broken auth.",
      items: [
        "AI fabrication guardrail — never auto-send unverifiable claims; tag inferred vs provided facts",
        "Per-answer AI confidence + low-confidence forced review (even in Auto)",
        "Review “Approve & send” failure path + send reconciliation (no duplicate / phantom applies)",
        "Unsaved-changes guard + per-job autosave in Review",
        "Delete confirmation / undo across the tracker (no silent destructive actions)",
        "Real checkout for paid plans (card capture, decline, pending)",
        "Subscription renewal-failure dunning + grace period",
        "Cancel-subscription flow",
        "Enforce free-tier cap at the point of action (consistent paywall)",
        "First-time Auto-Apply consent step",
        "Auth validation, wrong-credentials feedback, and Forgot-password flow",
        "Onboarding exit-save + résumé upload/parse failure handling",
        "Global error boundary + API-error states (no blank/janky failures)",
        "Logged-out deep-link redirect + session-expiry re-auth without data loss",
      ],
    },
    v1: {
      label: "Important for V1",
      desc: "Expected polish for thousands of users — failure recovery, loading vocabulary, and the notification system.",
      items: [
        "Loading / skeleton states across Home, tracker, billing, and AI actions",
        "Offline detection + action queue + sync-on-reconnect",
        "Notification center + email/push for recruiter replies & offers",
        "Batch-apply partial-failure + mid-batch JIT handling",
        "Job-closed / expired-posting detection in Review and the tracker",
        "Duplicate-application detection",
        "First-run Home (no fabricated stats) + no-matches state",
        "Auto-Apply ‘paused’ banner with reason + resume",
        "Search-no-results state + working Archive view",
        "Copilot route guard, field validation, and target-count estimate",
        "Trial / Launch expiry reminders + convert path",
        "Mobile touch affordances for hover-revealed actions",
      ],
    },
    nice: {
      label: "Nice to have",
      desc: "Meaningful improvements that raise quality but aren't launch-blocking.",
      items: [
        "Notification preferences (per-type, per-channel)",
        "Post-send 5-minute ‘undo send’ window",
        "5-day ghost / ‘no reply in 30 days — archive?’ nudges",
        "Pagination / virtualization for the ‘+296 more’ tail",
        "Optimistic move-status with rollback",
        "Breached-password & email-verification on auth",
        "Proration / refund clarity on plan changes",
        "Data export (async emailed link) + full delete flow",
      ],
    },
    future: {
      label: "Future improvements",
      desc: "Strategic bets beyond the immediate edge-case backlog.",
      items: [
        "Full responsive / native mobile experience",
        "2FA and security-event history",
        "AI answer provenance & per-source audit trail",
        "Multi-résumé / multi-persona profiles",
        "Interview-prep & negotiation coaching surfaces (Launch tier groundwork)",
        "Employer-side integrations / direct-ATS submission reliability tiers",
        "Localization & multi-region work-authorization handling",
      ],
    },
  },
};

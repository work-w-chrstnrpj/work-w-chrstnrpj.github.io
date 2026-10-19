import {attachShowcaseControls} from './showcase-controls.js';
/** Every peso — Notable Finance. One deterministic clock, local instance state. */
export const DEFAULT_STORYBOARD = {
  "schemaVersion": 2,
  "storyboardRevision": "3",
  "project": "Notable Finance Desktop",
  "script": {
    "reference": "presentation-script.md",
    "revision": "3"
  },
  "creativeConcept": "Give every peso a place.",
  "features": [
    {
      "id": "overview",
      "title": "Dashboard and active accounts",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/dashboard.tsx"
      ],
      "evidence": "source"
    },
    {
      "id": "records",
      "title": "Income and expense recording, local first",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/features/records/use-optimistic-records.ts"
      ],
      "evidence": "source"
    },
    {
      "id": "credit",
      "title": "Installments and Pasabuy repayments",
      "sourceReferences": [
        "notable-finance-app/src/shared/notion-formulas.ts"
      ],
      "evidence": "source"
    },
    {
      "id": "movements",
      "title": "Transfer, card payment, Alkansya and receivables",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/workflow/workflow-form-fields.tsx"
      ],
      "evidence": "source"
    },
    {
      "id": "planning",
      "title": "Budget actuals and Monitoring-only forecasts",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/monitoring.tsx"
      ],
      "evidence": "source"
    },
    {
      "id": "copilot",
      "title": "AI draft review and approval",
      "sourceReferences": [
        "notable-finance-app/src/main/chat/confirm.ts"
      ],
      "evidence": "source"
    },
    {
      "id": "sync",
      "title": "Bidirectional Notion sync and conflict review",
      "sourceReferences": [
        "notable-finance-app/src/main/sync/index.ts"
      ],
      "evidence": "source"
    },
    {
      "id": "receipts",
      "title": "Printable expense receipts",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/expense/expense-receipt.ts"
      ],
      "evidence": "source"
    }
  ],
  "targetDurationMs": 64000,
  "timingStatus": "estimated",
  "scenes": [
    {
      "id": "loose-ends",
      "scriptBeatId": "loose-ends",
      "featureIds": [],
      "audienceBenefit": "Replace the feeling of scattered obligations with one organizing idea.",
      "onScreenText": [
        "Your money has places to be.",
        "Salary +₱65,000",
        "Coffee −₱240",
        "Card payment ₱3,000",
        "Alex owes ₱4,000",
        "Savings ₱10,000"
      ],
      "startMs": 0,
      "durationMs": 6000,
      "headline": "Your money has places to be.",
      "visualAction": "Scattered paper slips orbit a central peso mark. Salary, coffee, card bills and repayments each arrive at a different angle. A blue rule draws through the mess; the papers straighten into the aligned stack that match-cuts to the dashboard.",
      "sourceReferences": [
        "README.md"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Scattered paper slips orbit a central peso mark. Salary, coffee, card bills and repayments each arrive at a different angle. A blue rule draws through the mess; the papers straighten into the aligned stack that match-cuts to the dashboard.",
        "focus": "Replace the feeling of scattered obligations with one organizing idea.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 3400,
            "description": "Papers enter with staggered rotations, then converge into an aligned stack."
          }
        ],
        "settleStartMs": 3400,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2200,
      "cues": [
        {
          "id": "loose-ends-settled",
          "offsetMs": 3400,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "picture",
      "scriptBeatId": "picture",
      "featureIds": [
        "overview",
        "records"
      ],
      "audienceBenefit": "Read the month and the account position together.",
      "onScreenText": [
        "See where you stand.",
        "DASHBOARD / OCTOBER",
        "Monthly income ₱65,000",
        "Monthly expenses ₱18,400",
        "Savings this month ₱10,000",
        "Everyday ₱42,150",
        "Available credit ₱42,000",
        "Expenses exclude Pasabuy"
      ],
      "startMs": 6000,
      "durationMs": 7000,
      "headline": "See where you stand.",
      "visualAction": "The aligned paper stack match-cuts to a focused Dashboard. Income, personal expenses and savings count into place. A spending ring draws while active account cards rise below it. This is a context-setting snapshot, not a continuation of opening arithmetic.",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/dashboard.tsx",
        "notable-finance-app/src/renderer/src/features/records/use-optimistic-records.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "The aligned paper stack match-cuts to a focused Dashboard. Income, personal expenses and savings count into place. A spending ring draws while active account cards rise below it. This is a context-setting snapshot, not a continuation of opening arithmetic.",
        "focus": "Read the month and the account position together.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 3600,
            "description": "Numbers settle; the expense tile detaches into the next purchase."
          }
        ],
        "settleStartMs": 3600,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "picture-settled",
          "offsetMs": 3600,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "small-things",
      "scriptBeatId": "small-things",
      "featureIds": [
        "records"
      ],
      "audienceBenefit": "Keep everyday purchases recorded without a network connection.",
      "onScreenText": [
        "Even the little things. Even offline.",
        "NEW EXPENSE",
        "Coffee",
        "₱240",
        "Everyday · Dining",
        "Save expense",
        "Saved locally",
        "Not yet synced",
        "Everyday balance",
        "₱41,910"
      ],
      "startMs": 13000,
      "durationMs": 7000,
      "headline": "Even the little things. Even offline.",
      "visualAction": "A large ₱240 coffee marker establishes the purchase beside an entering expense form. Description and amount type in, Save expense is pressed, and the record slides into the ledger. The Everyday balance decreases from ₱42,150 to ₱41,910. The Not yet synced badge remains visible.",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/features/records/use-optimistic-records.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "A large ₱240 coffee marker establishes the purchase beside an entering expense form. Description and amount type in, Save expense is pressed, and the record slides into the ledger. The Everyday balance decreases from ₱42,150 to ₱41,910. The Not yet synced badge remains visible.",
        "focus": "Keep everyday purchases recorded without a network connection.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 3900,
            "description": "The coffee marker holds while fields fill; the saved record slides into the ledger and the balance updates."
          }
        ],
        "settleStartMs": 3900,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2700,
      "cues": [
        {
          "id": "small-things-settled",
          "offsetMs": 3900,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "untangle",
      "scriptBeatId": "untangle",
      "featureIds": [
        "credit"
      ],
      "audienceBenefit": "Separate your payment schedule from money someone owes you.",
      "onScreenText": [
        "Big purchases. Smaller loose ends.",
        "INSTALLMENTS",
        "₱12,000 / 6 months",
        "₱2,000 per month",
        "2 paid · ₱8,000 remaining",
        "PASABUY",
        "₱6,000 purchase",
        "₱2,000 received",
        "₱4,000 to collect",
        "Separate from personal spending"
      ],
      "startMs": 20000,
      "durationMs": 8000,
      "headline": "Big purchases. Smaller loose ends.",
      "visualAction": "A ₱12,000 installment purchase fans into six ₱2,000 pieces. Two mark as paid; the remaining balance becomes ₱8,000. A separate Pasabuy card slides alongside: ₱6,000 gross, ₱2,000 received, ₱4,000 still to collect. The two diagrams stay visibly distinct.",
      "sourceReferences": [
        "notable-finance-app/src/shared/notion-formulas.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "A ₱12,000 installment purchase fans into six ₱2,000 pieces. Two mark as paid; the remaining balance becomes ₱8,000. A separate Pasabuy card slides alongside: ₱6,000 gross, ₱2,000 received, ₱4,000 still to collect. The two diagrams stay visibly distinct.",
        "focus": "Separate your payment schedule from money someone owes you.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4400,
            "description": "Split a purchase into six pieces and mark two paid; subtract a received repayment from the Pasabuy total."
          }
        ],
        "settleStartMs": 4400,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 3200,
      "cues": [
        {
          "id": "untangle-settled",
          "offsetMs": 4400,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "move",
      "scriptBeatId": "move",
      "featureIds": [
        "movements"
      ],
      "audienceBenefit": "Record different kinds of money movement in fields built for each.",
      "onScreenText": [
        "Move it with meaning.",
        "Transfer",
        "Everyday → Travel",
        "₱1,500",
        "Credit Card Payment",
        "Link covered expenses",
        "₱3,000",
        "Alkansya",
        "Set savings aside",
        "₱2,000",
        "Receivables",
        "Track what is owed",
        "₱4,000"
      ],
      "startMs": 28000,
      "durationMs": 8000,
      "headline": "Move it with meaning.",
      "visualAction": "Four horizontal routes reveal dedicated workflows. A blue payment token travels from Everyday to Travel in Transfer; a second arrives on the card-payment route labeled Link covered expenses; a third lands in Alkansya; a final token checks off the Receivables route. These are separate workflow examples.",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/workflow/workflow-form-fields.tsx"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Four horizontal routes reveal dedicated workflows. A blue payment token travels from Everyday to Travel in Transfer; a second arrives on the card-payment route labeled Link covered expenses; a third lands in Alkansya; a final token checks off the Receivables route. These are separate workflow examples.",
        "focus": "Record different kinds of money movement in fields built for each.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4800,
            "description": "A token travels each route in sequence, leaving a check at its destination."
          }
        ],
        "settleStartMs": 4800,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2800,
      "cues": [
        {
          "id": "move-settled",
          "offsetMs": 4800,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "ahead",
      "scriptBeatId": "ahead",
      "featureIds": [
        "planning"
      ],
      "audienceBenefit": "Explore a possible income before creating a financial record.",
      "onScreenText": [
        "Make room for what’s next.",
        "MONTHLY MONITORING",
        "Needs",
        "Wants",
        "Savings",
        "Income + forecast ₱70,000",
        "Freelance +₱5,000",
        "Forecast only · No record created",
        "Recorded actuals / Income-based budget"
      ],
      "startMs": 36000,
      "durationMs": 7000,
      "headline": "Make room for what’s next.",
      "visualAction": "Needs, Wants and Savings budget rails draw to their recorded values. A dashed +₱5,000 Freelance forecast slips into the Monitoring workspace. The income total moves from ₱65,000 to ₱70,000; the temporary income allocation bars extend, while recorded actuals remain unchanged.",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/monitoring.tsx"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Needs, Wants and Savings budget rails draw to their recorded values. A dashed +₱5,000 Freelance forecast slips into the Monitoring workspace. The income total moves from ₱65,000 to ₱70,000; the temporary income allocation bars extend, while recorded actuals remain unchanged.",
        "focus": "Explore a possible income before creating a financial record.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 3900,
            "description": "Slide forecast card into a dashed slot; extend allocation rails without changing actuals."
          }
        ],
        "settleStartMs": 3900,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2700,
      "cues": [
        {
          "id": "ahead-settled",
          "offsetMs": 3900,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "say-it",
      "scriptBeatId": "say-it",
      "featureIds": [
        "copilot"
      ],
      "audienceBenefit": "Prepare a record conversationally and review it before writing.",
      "onScreenText": [
        "You say it. You still call it.",
        "FINANCE COPILOT",
        "Record a ₱350 lunch from Everyday today, under Dining.",
        "Expense draft",
        "Lunch · ₱350",
        "Everyday · Dining",
        "Ready for review",
        "Approve",
        "Applied locally",
        "Illustrative AI response · API key required for writes"
      ],
      "startMs": 43000,
      "durationMs": 8000,
      "headline": "You say it. You still call it.",
      "visualAction": "A prompt types: Record a ₱350 lunch from Everyday today, under Dining. A reconstructed expense draft appears below it with account, category and amount for review. A pointer approaches Approve, presses, and only then does the card mark Applied locally.",
      "sourceReferences": [
        "notable-finance-app/src/main/chat/confirm.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "A prompt types: Record a ₱350 lunch from Everyday today, under Dining. A reconstructed expense draft appears below it with account, category and amount for review. A pointer approaches Approve, presses, and only then does the card mark Applied locally.",
        "focus": "Prepare a record conversationally and review it before writing.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4600,
            "description": "The typed prompt is followed by draft field rows; review precedes a deliberate approval press."
          }
        ],
        "settleStartMs": 4600,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "say-it-settled",
          "offsetMs": 4600,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "together",
      "scriptBeatId": "together",
      "featureIds": [
        "sync"
      ],
      "audienceBenefit": "Keep the local workspace connected with deliberate conflict choices.",
      "onScreenText": [
        "Keep Notion in the picture.",
        "LOCAL WORKSPACE",
        "NOTION MIRROR",
        "Bidirectional sync",
        "Overlapping edit · Description",
        "Coffee",
        "Morning coffee",
        "Keep local",
        "Resolution selected",
        "Review overlapping edits before syncing them"
      ],
      "startMs": 51000,
      "durationMs": 7000,
      "headline": "Keep Notion in the picture.",
      "visualAction": "The same Coffee record appears on local and Notion sides. A line carries the record between them. An overlapping description edit reveals Local: Coffee and Notion: Morning coffee. Keep local is selected and the state stops at Resolution selected; it does not claim sync completion.",
      "sourceReferences": [
        "notable-finance-app/src/main/sync/index.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "The same Coffee record appears on local and Notion sides. A line carries the record between them. An overlapping description edit reveals Local: Coffee and Notion: Morning coffee. Keep local is selected and the state stops at Resolution selected; it does not claim sync completion.",
        "focus": "Keep the local workspace connected with deliberate conflict choices.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4200,
            "description": "Two record sheets align; their differing description is highlighted; a selection bridges the gap."
          }
        ],
        "settleStartMs": 4200,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2400,
      "cues": [
        {
          "id": "together-settled",
          "offsetMs": 4200,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    },
    {
      "id": "a-place",
      "scriptBeatId": "a-place",
      "featureIds": [
        "receipts"
      ],
      "audienceBenefit": "Finish with a tangible record and the organizing promise.",
      "onScreenText": [
        "Give every peso a place.",
        "Notable Finance",
        "Give every peso a place.",
        "Record. Plan. Connect.",
        "EXPENSE RECEIPT",
        "Coffee ₱240",
        "Lunch ₱350",
        "TOTAL ₱590",
        "Local-first desktop · Notion connected"
      ],
      "startMs": 58000,
      "durationMs": 6000,
      "headline": "Give every peso a place.",
      "visualAction": "A printed expense receipt emerges with Coffee ₱240 and Lunch ₱350, total ₱590. It shrinks to a tidy paper bookmark beside the Notable Finance wordmark. Three quiet labels resolve the promise: Record. Plan. Connect. This is a separate receipt illustration using two fictional purchases.",
      "sourceReferences": [
        "notable-finance-app/src/renderer/src/components/pages/expense/expense-receipt.ts"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "A printed expense receipt emerges with Coffee ₱240 and Lunch ₱350, total ₱590. It shrinks to a tidy paper bookmark beside the Notable Finance wordmark. Three quiet labels resolve the promise: Record. Plan. Connect. This is a separate receipt illustration using two fictional purchases.",
        "focus": "Finish with a tangible record and the organizing promise.",
        "transitionIn": "Retain the periwinkle accent and cream paper; shift focus to this beat’s object.",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 2900,
            "description": "Receipt prints upward and parks beside the logo; closing typography resolves in a held composition."
          }
        ],
        "settleStartMs": 2900,
        "transitionOut": "Paper and accent carry the visual connection; leave the settled reading hold before a 400ms exit.",
        "reducedMotion": "Show the settled result; Previous and Next select complete scene summaries."
      },
      "readingHoldMs": 2700,
      "cues": [
        {
          "id": "a-place-settled",
          "offsetMs": 2900,
          "meaning": "Product action complete; read resulting state"
        }
      ]
    }
  ]
};
const logo = new URL('./assets/logo.png',import.meta.url).href;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const progress=(t,start,duration)=>clamp((t-start)/duration);
const ease=p=>1-Math.pow(1-p,3);
const money=n=>'₱'+Math.round(n).toLocaleString('en-PH');
const iconPaths={coffee:'M5 7h12v6a6 6 0 0 1-12 0V7Zm12 1h2a3 3 0 0 1 0 6h-2M8 2v2m5-2v2M3 21h18',transfer:'M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4',card:'M3 5h18v14H3zM3 10h18M7 15h4',jar:'M8 4h8M7 8h10l3 11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L7 8Zm3 4h4',receipt:'M6 3h12v19l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6m-6 4h3',wallet:'M3 6h18v14H3zM3 6l15-3v3m-3 6h6v4h-6z',spark:'m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z',check:'m5 12 4 4L20 5',notion:'M5 3h14l2 3v15H4V4l1-1Zm3 5v10m0-10 8 10V8M4 6h17'};
const icon=name=>`<svg class="nfe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${iconPaths[name]||iconPaths.wallet}"/></svg>`;
const chip=(s,t='')=>`<span class="nfe-chip ${t}">${s}</span>`;
const row=(a,b,cls='')=>`<div class="nfe-row ${cls}"><span>${a}</span><span>${b}</span></div>`;
const pointer=cls=>`<svg class="nfe-pointer ${cls}" data-el="pointer" viewBox="0 0 24 30" aria-hidden="true"><path d="M2 2v23l6-6 5 9 5-3-5-8h9Z" fill="#1c1917" stroke="white" stroke-width="2"/></svg>`;
const copy=(cls,kicker,title)=>`<div class="nfe-copy ${cls}" data-el="copy"><div class="nfe-kicker">${kicker}</div><h2 class="nfe-title">${title}</h2></div>`;
const templates=[
()=>`${copy('nfe-open-title','A LITTLE ORDER. A LOT OF CLARITY.','Your money<br>has places<br>to <em>be.</em>')}${[['Salary','+₱65,000'],['Coffee','−₱240'],['Card payment','₱3,000'],['Alex owes','₱4,000'],['Savings','₱10,000']].map(([label,value],i)=>`<div class="nfe-object nfe-sheet nfe-slip" data-el="slip${i}"><span class="nfe-label">${label}</span><span class="nfe-money ${i===0?'nfe-green':'nfe-blue'}">${value}</span></div>`).join('')}<div class="nfe-open-line" data-el="line"></div><div class="nfe-open-quote" data-el="quote">Let’s give them a place.</div>`,
()=>`<div class="nfe-copy nfe-overview-copy" data-el="copy"><div><div class="nfe-kicker">DASHBOARD / OCTOBER</div><h2 class="nfe-title">See where you <em>stand.</em></h2></div>${chip('Local-first desktop','green')}</div><div class="nfe-object nfe-sheet nfe-dash" data-el="dash"><div class="nfe-stat-grid"><div class="nfe-stat" data-el="stat0"><span class="nfe-label">Monthly income</span><span class="nfe-money nfe-blue" data-el="income">₱65,000</span></div><div class="nfe-stat" data-el="stat1"><span class="nfe-label">Monthly expenses</span><span class="nfe-money" data-el="expense">₱18,400</span></div><div class="nfe-stat" data-el="stat2"><span class="nfe-label">Savings this month</span><span class="nfe-money nfe-green" data-el="saving">₱10,000</span></div></div><div><div class="nfe-chart"><div class="nfe-donut"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="40" stroke="#e8e7e2"/><circle class="nfe-ring" data-el="ring" cx="50" cy="50" r="40"/></svg><span>October</span></div><div class="nfe-sub">A month<br>in perspective.</div></div><div class="nfe-account" data-el="accounts">${row('Everyday','₱42,150')}${row('Available credit','₱42,000')}</div></div></div><div class="nfe-footnote">Expenses exclude Pasabuy</div>`,
()=>`${copy('nfe-expense-copy','THE EVERYDAY, TAKEN CARE OF.','Even the<br>little things.<br><em>Even offline.</em>')}<div class="nfe-object nfe-coffee" data-el="coffee">${icon('coffee')}₱240</div><div class="nfe-object nfe-sheet nfe-expense-form" data-el="form"><div class="nfe-label">NEW EXPENSE</div><div class="nfe-field"><small>Description</small><strong data-el="description"></strong></div><div class="nfe-field"><small>Amount</small><strong class="nfe-blue" data-el="amount"></strong></div><div class="nfe-field"><small>Account · Category</small><strong>Everyday · Dining</strong></div><div class="nfe-form-actions">${chip('Offline','amber')}<span class="nfe-cta" data-el="save">Save expense</span></div></div>${pointer('nfe-expense-pointer')}<div class="nfe-object nfe-sheet nfe-ledger" data-el="ledger">${row('Coffee','₱240')}<div style="display:flex;justify-content:space-between">${chip('Saved locally','green')}${chip('Not yet synced','amber')}</div></div><div class="nfe-object nfe-balance" data-el="balance"><span class="nfe-label">Everyday balance</span><div class="nfe-money" data-el="balanceValue">₱42,150</div></div>`,
()=>`${copy('nfe-credit-copy','UNTANGLE THE COMPLICATED.','Big purchases.<br><em>Smaller loose ends.</em>')}<div class="nfe-object nfe-sheet nfe-credit-card" data-el="installments"><span class="nfe-label">INSTALLMENTS</span><div class="nfe-money">₱12,000 <span style="font-size:.5em;letter-spacing:0">/ 6 months</span></div><div class="nfe-slices">${Array.from({length:6},(_,i)=>`<div class="nfe-slice" data-el="slice${i}">2,000</div>`).join('')}</div><div class="nfe-paid" data-el="paid">₱2,000 per month</div>${chip('2 paid · ₱8,000 remaining','green')}</div><div class="nfe-object nfe-sheet nfe-pasabuy" data-el="pasabuy"><span class="nfe-label">PASABUY</span>${row('Purchase','₱6,000')}${row('Received','₱2,000')}<div class="nfe-meter"><i data-el="meter"></i></div><small class="nfe-label">To collect</small><strong class="nfe-money nfe-green" data-el="collect">₱4,000</strong></div><div class="nfe-footnote">Separate from personal spending</div>`,
()=>`${copy('nfe-move-copy','EVERY MOVE HAS A PURPOSE.','Move it<br>with<br><em>meaning.</em>')}<div class="nfe-routes">${[['transfer','Transfer','Everyday → Travel','₱1,500'],['card','Credit Card Payment','Link covered expenses','₱3,000'],['jar','Alkansya','Set savings aside','₱2,000'],['receipt','Receivables','Track what is owed','₱4,000']].map(([ico,label,sub,value],i)=>`<div class="nfe-sheet nfe-route" data-el="route${i}"><div class="nfe-route-icon">${icon(ico)}</div><div><strong>${label}</strong><small>${sub}</small></div><b>${value}</b><span class="nfe-route-check" data-el="check${i}">✓</span><div class="nfe-token nfe-travel-token" data-el="token${i}">₱</div></div>`).join('')}</div>`,
()=>`${copy('nfe-plan-copy','MONTHLY MONITORING','Make room<br>for what’s<br><em>next.</em>')}<div class="nfe-object nfe-sheet nfe-forecast" data-el="forecast"><span class="nfe-label">Freelance</span><div class="nfe-money nfe-blue">+₱5,000</div><div class="nfe-sub">Forecast only<br>No record created</div></div><div class="nfe-object nfe-sheet nfe-budget" data-el="budget"><span class="nfe-label">Income + forecast</span><div class="nfe-money" data-el="planIncome">₱65,000</div>${[['Needs','₱14,000',35],['Wants','₱4,400',11],['Savings','₱10,000',25]].map(([label,value,w],i)=>`<div class="nfe-budget-row">${row(label,value)}<div class="nfe-rail"><i class="nfe-allocation" data-el="allocation${i}"></i><i class="nfe-actual" style="width:${w}%"></i></div></div>`).join('')}<div class="nfe-plan-note">Recorded actuals / Income-based budget</div></div>`,
()=>`${copy('nfe-chat-copy','FINANCE COPILOT','You say it.<br>You still<br><em>call it.</em>')}<div class="nfe-object nfe-chat-spark" data-el="spark">✳</div><div class="nfe-object nfe-sheet nfe-prompt" data-el="prompt"><span data-el="promptText"></span></div><div class="nfe-object nfe-sheet nfe-draft" data-el="draft"><div style="display:flex;justify-content:space-between;align-items:center"><span class="nfe-label">Expense draft</span><span class="nfe-chip" data-el="ready">Ready for review</span></div>${row('Description · Amount','Lunch · ₱350')}${row('Account · Category','Everyday · Dining')}<div class="nfe-form-actions"><span class="nfe-sub">Your decision.</span><span class="nfe-cta" data-el="approve">Approve</span></div></div>${pointer('nfe-chat-pointer')}<div class="nfe-footnote nfe-chat-note">Illustrative AI response · API key required for writes</div>`,
()=>`${copy('nfe-sync-copy','BIDIRECTIONAL SYNC','Keep Notion<br><em>in the picture.</em>')}<div class="nfe-sync-link" data-el="link"></div><div class="nfe-sync-symbol" data-el="symbol">⇄</div><div class="nfe-object nfe-sheet nfe-sync-card" data-el="local"><span class="nfe-label">LOCAL WORKSPACE</span><div class="nfe-sync-title">${icon('wallet')} Coffee</div><div class="nfe-money">₱240</div><div class="nfe-sync-value" data-el="localValue">Coffee</div></div><div class="nfe-object nfe-sheet nfe-sync-card remote" data-el="remote"><span class="nfe-label">NOTION MIRROR</span><div class="nfe-sync-title">${icon('notion')} Coffee</div><div class="nfe-money">₱240</div><div class="nfe-sync-value" data-el="remoteValue">Morning coffee</div></div><div class="nfe-object nfe-sheet nfe-resolution" data-el="resolution"><span data-el="conflict">Overlapping edit · Description</span><span class="nfe-cta" data-el="resolve">Keep local</span></div><div class="nfe-token nfe-sync-token" data-el="syncToken">₱</div><div class="nfe-footnote">Review overlapping edits before syncing them</div>`,
()=>`<div class="nfe-copy nfe-final-copy" data-el="copy"><div class="nfe-final-brand"><img src="${logo}" alt="">Notable Finance</div><h2 class="nfe-title">Give every<br>peso a <em>place.</em></h2><p class="nfe-sub">Record. Plan. Connect.</p></div><div class="nfe-object nfe-sheet nfe-receipt" data-el="receipt"><h3>Notable Finance</h3><span class="nfe-label">EXPENSE RECEIPT</span><div class="nfe-rule"></div>${row('Coffee','₱240')}${row('Lunch','₱350')}<div class="nfe-receipt-total">${row('TOTAL','<b>₱590</b>')}</div><div class="nfe-barcode"></div></div><div class="nfe-footnote">Local-first desktop · Notion connected</div>`
];
/** Mount a silent showcase. Options: aspectRatio, initialTimeMs, showControls, onStateChange. */
function mountOriginalBravado(container,options={}){
 if(!container?.append)throw new TypeError('mountBravado requires a DOM container');
 const scenes=DEFAULT_STORYBOARD.scenes,durationMs=DEFAULT_STORYBOARD.targetDurationMs;
 const root=document.createElement('section');root.className='nfe';root.setAttribute('aria-label','Notable Finance — Give every peso a place');
 root.style.setProperty('--nfe-ratio',options.aspectRatio||'16 / 10');
 root.innerHTML=`<div class="nfe-stage"><div class="nfe-mast"><span class="nfe-mark"><img src="${logo}" alt="">Notable Finance</span><span class="nfe-counter"></span></div><div class="nfe-scene"></div></div><div class="nfe-controls"><button type="button" data-act="play" aria-label="Play showcase">Play</button><button type="button" data-act="replay" aria-label="Replay showcase">↺</button><button type="button" data-act="previous" aria-label="Previous scene">‹</button><input type="range" min="0" max="${durationMs}" step="100" value="0" aria-label="Showcase position"><button type="button" data-act="next" aria-label="Next scene">›</button><output>0:00 / 1:04</output></div><nav class="nfe-chapters" aria-label="Showcase scenes">${scenes.map((s,i)=>`<button type="button" data-scene="${i}" aria-label="${i+1}. ${s.headline}" title="${s.headline}"></button>`).join('')}</nav><details class="nfe-transcript"><summary>Read the story</summary><ol>${scenes.map(s=>`<li><strong>${s.headline}</strong> ${s.audienceBenefit}</li>`).join('')}</ol><p>Reconstructed product scenes. Fictional records. No live data, AI calls or financial transactions.</p></details>`;
 container.append(root);
 const q=s=>root.querySelector(s),stage=q('.nfe-scene'),range=q('input'),playButton=q('[data-act=play]'),output=q('output'),counter=q('.nfe-counter'),chapterButtons=[...root.querySelectorAll('[data-scene]')];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let timeMs=clamp(Number(options.initialTimeMs)||0,0,durationMs),wanted=false,visible=true,dead=false,frame=0,last=null,index=-1,els={},lastNotify='';
 const state=()=>({timeMs,durationMs,playing:wanted&&visible&&!document.hidden&&!reduced.matches&&!dead});
 const text=(key,value)=>{const el=els[key];if(el&&el.textContent!==value)el.textContent=value;};
 const alpha=(key,v)=>{if(els[key])els[key].style.opacity=clamp(v);};
 const transform=(key,value)=>{if(els[key])els[key].style.transform=value;};
 const reveal=(key,t,start=0,dur=650,y=3,rotate=0)=>{const p=ease(progress(t,start,dur));alpha(key,p);transform(key,`translateY(${(1-p)*y}cqw) rotate(${(1-p)*rotate}deg)`);};
 function paint(){
  if(dead)return;
  const i=Math.max(0,scenes.findIndex(s=>timeMs<s.startMs+s.durationMs));
  const n=timeMs===durationMs?scenes.length-1:i;
  if(n!==index){index=n;stage.innerHTML=templates[n]();els=Object.fromEntries([...stage.querySelectorAll('[data-el]')].map(el=>[el.dataset.el,el]));chapterButtons.forEach((b,j)=>b.setAttribute('aria-current',j===n?'step':'false'));counter.textContent=`${String(n+1).padStart(2,'0')} / 09`;} 
  const s=scenes[n];let t=timeMs-s.startMs;
  if(reduced.matches)t=s.motion.settleStartMs;
  const entrance=n===0?1:ease(progress(t,0,450));const exit=n===8?0:ease(progress(t,s.durationMs-400,400));
  stage.style.opacity=(1-exit)*(.25+.75*entrance);stage.style.transform=`translateY(${-exit*2}cqw) scale(${1-exit*.025})`;
  switch(n){
  case 0:{
   const settle=ease(progress(t,2100,1300));
   const loose=[[-6,-8,-18],[5,5,13],[-8,18,-10],[10,30,17],[-3,39,-5]];
   for(let j=0;j<5;j++){const p=ease(progress(t,-800+j*100,850));const [x,y,r]=loose[j];alpha('slip'+j,p);transform('slip'+j,`translate(${x*(1-settle)}cqw,${y*(1-settle)+j*9.3*settle+(1-p)*20}cqw) rotate(${r*(1-settle)}deg)`);}
   transform('line',`scaleX(${ease(progress(t,2300,900))})`);reveal('quote',t,2550,750,1);reveal('copy',t,-750,1000,2);break;
  }
  case 1:{
   reveal('dash',t,0,1000,8);[0,1,2].forEach(j=>reveal('stat'+j,t,200+j*220,650,3));
   const p=ease(progress(t,450,1700));text('income',money(65000*p));text('expense',money(18400*p));text('saving',money(10000*p));
   els.ring.style.strokeDashoffset=251.328*(1-.73*ease(progress(t,700,1700)));reveal('accounts',t,1800,1200,5);break;
  }
  case 2:{
   reveal('form',t,200,750,7,-5);reveal('coffee',t,0,1000,3);text('description','Coffee'.slice(0,Math.floor(progress(t,750,650)*6)));text('amount','₱240'.slice(0,Math.floor(progress(t,1250,500)*4)));
   const pointerP=ease(progress(t,1800,700));alpha('pointer',progress(t,1800,200)*(1-progress(t,2850,200)));transform('pointer',`translate(${(1-pointerP)*13}cqw,${(1-pointerP)*8}cqw) scale(${1-.18*progress(t,2550,130)*(1-progress(t,2700,130))})`);
   const saved=t>=2700;text('save',saved?'✓ Saved':'Save expense');reveal('ledger',t,2700,900,7);reveal('balance',t,0,650,1);text('balanceValue',money(42150-240*ease(progress(t,2750,1000))));break;
  }
  case 3:{
   reveal('installments',t,0,750,5);for(let j=0;j<6;j++){const p=ease(progress(t,400+j*180,750));alpha('slice'+j,p);transform('slice'+j,`translateX(${(1-p)*(3-j)*3}cqw) scaleX(${.6+.4*p})`);els['slice'+j].classList.toggle('is-paid',j<2&&t>=2000+j*300);}
   text('paid',t>=2550?'₱2,000 per month':'₱2,000 per month');reveal('pasabuy',t,2000,1000,7,6);transform('meter',`scaleX(${ease(progress(t,3000,1000))/3})`);text('collect',money(6000-2000*ease(progress(t,3100,1200))));break;
  }
  case 4:{
   for(let j=0;j<4;j++){reveal('route'+j,t,j*340,600,4);const p=ease(progress(t,700+j*850,600));alpha('token'+j,progress(t,650+j*850,150)*(1-progress(t,1250+j*850,150)));transform('token'+j,`translate(${(-34+30*p)}cqw,2cqw) scale(.65)`);alpha('check'+j,progress(t,1250+j*850,220));}
   break;
  }
  case 5:{
   reveal('budget',t,0,800,6);reveal('forecast',t,1300,1300,7,-9);const p=ease(progress(t,2450,1400));text('planIncome',money(65000+5000*p));[.8125,.4875,.325].forEach((w,j)=>{transform('allocation'+j,`scaleX(${w*ease(progress(t,500+j*200,800))*(1+p*5000/65000)})`);});break;
  }
  case 6:{
   reveal('prompt',t,0,600,3);const prompt='Record a ₱350 lunch from Everyday today, under Dining.';text('promptText',prompt.slice(0,Math.floor(progress(t,150,1450)*prompt.length)));reveal('spark',t,0,1000,5,-20);reveal('draft',t,1700,900,8);
   const p=ease(progress(t,2850,800));alpha('pointer',progress(t,2850,150)*(1-progress(t,4300,250)));transform('pointer',`translate(${(1-p)*14}cqw,${(1-p)*5}cqw) scale(${1-.18*progress(t,3800,140)*(1-progress(t,3950,180))})`);
   text('approve',t>=4050?'✓ Applied':'Approve');text('ready',t>=4050?'Applied locally':'Ready for review');els.ready.classList.toggle('green',t>=4050);break;
  }
  case 7:{
   reveal('local',t,0,800,4,-5);reveal('remote',t,400,900,4,5);transform('link',`scaleX(${ease(progress(t,1100,900))})`);reveal('symbol',t,1100,600,0);
   const p=ease(progress(t,1450,700));alpha('syncToken',progress(t,1400,150)*(1-progress(t,2150,200)));transform('syncToken',`translateX(${p*19}cqw) scale(.6)`);reveal('resolution',t,2300,750,3);
   const chosen=t>=3700;els.localValue.style.borderColor=chosen?'#0d9488':'#e7e5e1';els.localValue.style.background=chosen?'#e7f5f0':'#f3f2ef';text('resolve',chosen?'✓ Selected':'Keep local');text('conflict',chosen?'Resolution selected':'Overlapping edit · Description');break;
  }
  case 8:{
   const p=ease(progress(t,0,1800));alpha('receipt',p);transform('receipt',`translateY(${(1-p)*40}cqw) rotate(${6+(1-p)*8}deg)`);reveal('copy',t,650,1600,2);break;
  }}
  range.value=String(timeMs);output.textContent=`${Math.floor(timeMs/60000)}:${String(Math.floor(timeMs/1000)%60).padStart(2,'0')} / 1:04`;
  playButton.textContent=reduced.matches?'Next':wanted?'Pause':'Play';playButton.setAttribute('aria-label',reduced.matches?'Next scene':wanted?'Pause showcase':'Play showcase');
  const notify=`${Math.floor(timeMs/100)}:${state().playing}`;if(lastNotify!==notify){lastNotify=notify;options.onStateChange?.(state());}
 }
 function stop(){if(frame)cancelAnimationFrame(frame);frame=0;last=null;}
 function tick(now){frame=0;if(!state().playing){stop();return;}if(last!==null)timeMs=clamp(timeMs+now-last,0,durationMs);last=now;if(timeMs===durationMs)wanted=false;paint();if(state().playing)frame=requestAnimationFrame(tick);else stop();}
 function schedule(){if(dead)return;stop();paint();if(state().playing)frame=requestAnimationFrame(tick);}
 function sceneAt(ms){return scenes.findIndex(s=>ms<s.startMs+s.durationMs);}
 function goScene(n){if(dead)return;wanted=false;const s=scenes[(n+scenes.length)%scenes.length];timeMs=s.startMs+s.motion.settleStartMs;schedule();}
 const api={
  play(){if(dead)return;if(reduced.matches){goScene(index+1);return;}if(timeMs===durationMs)timeMs=0;wanted=true;schedule();},
  pause(){if(dead)return;wanted=false;schedule();},
  replay(){if(dead)return;wanted=!reduced.matches;timeMs=reduced.matches?scenes[0].motion.settleStartMs:0;schedule();},
  seek(ms){if(dead||!Number.isFinite(Number(ms)))return;timeMs=clamp(Number(ms),0,durationMs);if(timeMs===durationMs)wanted=false;schedule();},
  getState:state,
  destroy(){if(dead)return;wanted=false;dead=true;stop();observer.disconnect();document.removeEventListener('visibilitychange',suspend);reduced.removeEventListener('change',motionChange);root.removeEventListener('click',click);range.removeEventListener('input',input);root.remove();}
 };
 function click(e){const b=e.target.closest('button');if(!b||!root.contains(b))return;if(b.dataset.scene!==undefined)goScene(Number(b.dataset.scene));else if(b.dataset.act==='play')wanted?api.pause():api.play();else if(b.dataset.act==='replay')api.replay();else if(b.dataset.act==='next')goScene(index+1);else if(b.dataset.act==='previous')goScene(index-1);}
 function input(){api.seek(range.value);}
 function suspend(){schedule();}
 function motionChange(){if(reduced.matches){wanted=false;const s=scenes[Math.max(0,sceneAt(Math.min(timeMs,durationMs-1)))];timeMs=s.startMs+s.motion.settleStartMs;}schedule();}
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();});observer.observe(root);
 root.addEventListener('click',click);range.addEventListener('input',input);document.addEventListener('visibilitychange',suspend);reduced.addEventListener('change',motionChange);
 if(options.showControls===false){q('.nfe-controls').hidden=true;q('.nfe-chapters').hidden=true;}
 if(reduced.matches){const s=scenes[Math.max(0,sceneAt(Math.min(timeMs,durationMs-1)))];timeMs=s.startMs+s.motion.settleStartMs;}
 paint();return api;
}

// Normalize controls only; the project scene renderer above remains independent.
export function mountBravado(container,options={}){
 const initial=options.initialTimeMs??options.initialTime??0;
 const controller=mountOriginalBravado(container,{...options,initialTimeMs:initial,initialTime:initial,autoplay:false,controls:false,showControls:false});
 return attachShowcaseControls(container,controller,{title:'Notable Finance',root:'.nfe',stage:'.nfe-stage',controls:'.nfe-controls',hide:'.nfe-transcript,.nfe-chapters',playAttribute:'data-act',scenes:DEFAULT_STORYBOARD.scenes.map(s=>({startMs:s.startMs,settledMs:s.startMs+s.motion.settleStartMs}))},options);
}

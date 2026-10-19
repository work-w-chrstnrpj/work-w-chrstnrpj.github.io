export const storyboard = {
  "schemaVersion": 2,
  "storyboardRevision": "2",
  "project": "SyncStock",
  "script": {
    "reference": "presentation-script.md",
    "revision": "2"
  },
  "creativeConcept": "Stock moves. Keep the details with it. One product label travels through an inventory workflow.",
  "features": [
    {
      "id": "company",
      "title": "Company code onboarding",
      "sourceReferences": [
        "backend/syncstock/models.py",
        "backend/syncstock/views.py",
        "frontend/src/components/publicroutes/SignUp.jsx"
      ],
      "evidence": "source"
    },
    {
      "id": "organize",
      "title": "Item records, categories and locations",
      "sourceReferences": [
        "frontend/src/components/pages/inventory/InventoryForm.jsx",
        "frontend/src/components/pages/category/Category.jsx",
        "frontend/src/components/pages/location/Location.jsx"
      ],
      "evidence": "source"
    },
    {
      "id": "current",
      "title": "Current stock search and filtering",
      "sourceReferences": [
        "frontend/src/components/pages/current-inventory/CurrentStock.jsx"
      ],
      "evidence": "source"
    },
    {
      "id": "adjust",
      "title": "Stock adjustment creation",
      "sourceReferences": [
        "frontend/src/components/pages/adjustment/AdjustmentForm.jsx",
        "backend/syncstock/signals.py"
      ],
      "evidence": "source"
    },
    {
      "id": "transfer",
      "title": "Inter-location transfer creation",
      "sourceReferences": [
        "frontend/src/components/pages/transfer/TransferForm.jsx",
        "backend/syncstock/signals.py"
      ],
      "evidence": "source"
    },
    {
      "id": "analytics",
      "title": "Grouped inventory charts",
      "sourceReferences": [
        "frontend/src/components/pages/analytics/Analytics.jsx",
        "frontend/src/config/analytics/inventoryConfig.js",
        "backend/syncstock/views.py"
      ],
      "evidence": "source"
    }
  ],
  "targetDurationMs": 60000,
  "timingStatus": "estimated",
  "scenes": [
    {
      "id": "move",
      "scriptBeatId": "move",
      "featureIds": [],
      "audienceBenefit": "Recognize the need to keep context with moving goods",
      "onScreenText": [
        "Stock moves.",
        "Keep the details with it."
      ],
      "startMs": 0,
      "durationMs": 6000,
      "headline": "Stock moves.",
      "visualAction": "Align location tags and rotate parcel onto grid",
      "sourceReferences": [
        "frontend/src/theme.js",
        "frontend/src/components/primary/LandingPage.jsx"
      ],
      "sourcing": "illustrate",
      "motion": {
        "composition": "Blue parcel with offset location labels",
        "focus": "Recognize the need to keep context with moving goods",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 2500,
            "description": "Align location tags and rotate parcel onto grid"
          }
        ],
        "settleStartMs": 2500,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "move-settled",
          "offsetMs": 2500,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "company",
      "scriptBeatId": "company",
      "featureIds": [
        "company"
      ],
      "audienceBenefit": "Share a company context",
      "onScreenText": [
        "One company. Common ground."
      ],
      "startMs": 6000,
      "durationMs": 7000,
      "headline": "One company. Common ground.",
      "visualAction": "Reveal masked code segments; converge member discs",
      "sourceReferences": [
        "backend/syncstock/models.py",
        "backend/syncstock/views.py",
        "frontend/src/components/publicroutes/SignUp.jsx"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Company code card and three member discs",
        "focus": "Share a company context",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4000,
            "description": "Reveal masked code segments; converge member discs"
          }
        ],
        "settleStartMs": 4000,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 2500,
      "cues": [
        {
          "id": "company-settled",
          "offsetMs": 4000,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "organize",
      "scriptBeatId": "organize",
      "featureIds": [
        "organize"
      ],
      "audienceBenefit": "Connect identity with category and location",
      "onScreenText": [
        "More than a number."
      ],
      "startMs": 13000,
      "durationMs": 8000,
      "headline": "More than a number.",
      "visualAction": "Emphasize product identity and slide category/location chips into their record fields",
      "sourceReferences": [
        "frontend/src/components/pages/inventory/InventoryForm.jsx",
        "frontend/src/components/pages/category/Category.jsx",
        "frontend/src/components/pages/location/Location.jsx"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Product identity above category, location and quantity fields",
        "focus": "Connect identity with category and location",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4500,
            "description": "Emphasize product identity and slide category/location chips into their record fields"
          }
        ],
        "settleStartMs": 4500,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "organize-settled",
          "offsetMs": 4500,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "find",
      "scriptBeatId": "find",
      "featureIds": [
        "current"
      ],
      "audienceBenefit": "Focus the current item list",
      "onScreenText": [
        "Find your focus."
      ],
      "startMs": 21000,
      "durationMs": 7000,
      "headline": "Find your focus.",
      "visualAction": "Highlight location and collapse the zero-stock row",
      "sourceReferences": [
        "frontend/src/components/pages/current-inventory/CurrentStock.jsx"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Current-stock rows with a location filter",
        "focus": "Focus the current item list",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 3500,
            "description": "Highlight location and collapse the zero-stock row"
          }
        ],
        "settleStartMs": 3500,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "find-settled",
          "offsetMs": 3500,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "adjust",
      "scriptBeatId": "adjust",
      "featureIds": [
        "adjust"
      ],
      "audienceBenefit": "Explain removed stock with a reason",
      "onScreenText": [
        "Give every change a reason."
      ],
      "startMs": 28000,
      "durationMs": 8000,
      "headline": "Give every change a reason.",
      "visualAction": "Peel away five blocks and count from 100 to 95",
      "sourceReferences": [
        "frontend/src/components/pages/adjustment/AdjustmentForm.jsx",
        "backend/syncstock/signals.py"
      ],
      "sourcing": "illustrate",
      "motion": {
        "composition": "Large stock count and orange reason label",
        "focus": "Explain removed stock with a reason",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 4500,
            "description": "Peel away five blocks and count from 100 to 95"
          }
        ],
        "settleStartMs": 4500,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3000,
      "cues": [
        {
          "id": "adjust-settled",
          "offsetMs": 4500,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "transfer",
      "scriptBeatId": "transfer",
      "featureIds": [
        "transfer"
      ],
      "audienceBenefit": "Represent movement between storage locations",
      "onScreenText": [
        "New location. Same item."
      ],
      "startMs": 36000,
      "durationMs": 9000,
      "headline": "New location. Same item.",
      "visualAction": "Move 20-unit parcel and resolve balances from 95/0 to 75/20",
      "sourceReferences": [
        "frontend/src/components/pages/transfer/TransferForm.jsx",
        "backend/syncstock/signals.py"
      ],
      "sourcing": "illustrate",
      "motion": {
        "composition": "Two location balances connected by a route",
        "focus": "Represent movement between storage locations",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 5000,
            "description": "Move 20-unit parcel and resolve balances from 95/0 to 75/20"
          }
        ],
        "settleStartMs": 5000,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3500,
      "cues": [
        {
          "id": "transfer-settled",
          "offsetMs": 5000,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "understand",
      "scriptBeatId": "understand",
      "featureIds": [
        "analytics"
      ],
      "audienceBenefit": "Inspect grouped current quantities",
      "onScreenText": [
        "Let the quantities speak."
      ],
      "startMs": 45000,
      "durationMs": 9000,
      "headline": "Let the quantities speak.",
      "visualAction": "Gather quantities into bins and grow four labeled bars",
      "sourceReferences": [
        "frontend/src/components/pages/analytics/Analytics.jsx",
        "frontend/src/config/analytics/inventoryConfig.js",
        "backend/syncstock/views.py"
      ],
      "sourcing": "reconstruct",
      "motion": {
        "composition": "Monthly bars for a separate example dataset",
        "focus": "Inspect grouped current quantities",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 5000,
            "description": "Gather quantities into bins and grow four labeled bars"
          }
        ],
        "settleStartMs": 5000,
        "transitionOut": "Frame moves upward and fades in final 500ms",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 3500,
      "cues": [
        {
          "id": "understand-settled",
          "offsetMs": 5000,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    },
    {
      "id": "picture",
      "scriptBeatId": "picture",
      "featureIds": [],
      "audienceBenefit": "Recall one connected inventory workflow",
      "onScreenText": [
        "Every item. A clearer picture."
      ],
      "startMs": 54000,
      "durationMs": 6000,
      "headline": "Every item. A clearer picture.",
      "visualAction": "Rotate and scale the blue package mark into its final position",
      "sourceReferences": [
        "frontend/src/theme.js",
        "frontend/src/components/primary/LandingPage.jsx"
      ],
      "sourcing": "illustrate",
      "motion": {
        "composition": "Package mark and campaign payoff",
        "focus": "Recall one connected inventory workflow",
        "transitionIn": "Paper frame rises 12px equivalent and becomes opaque over 350ms",
        "actions": [
          {
            "offsetMs": 0,
            "durationMs": 2000,
            "description": "Rotate and scale the blue package mark into its final position"
          }
        ],
        "settleStartMs": 2000,
        "transitionOut": "Hold complete final composition",
        "reducedMotion": "Select this settled composition with Previous/Next controls; no continuous movement"
      },
      "readingHoldMs": 4000,
      "cues": [
        {
          "id": "picture-settled",
          "offsetMs": 2000,
          "meaning": "Result and campaign copy fully settled"
        }
      ]
    }
  ]
};

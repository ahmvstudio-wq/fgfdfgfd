export const blueprintData = {
  hero: {
    title: "Agency Growth Blueprint",
    subtitle: "Bringing Money, Leads, and Business to Local Businesses",
    description: "A hyper-focused system to transform relationship-dependent analog sales into data-driven, automated acquisition engines."
  },
  industryGaps: [
    {
      industry: "Real Estate & Property Management",
      icon: "Building",
      trends: "Shift to fractional ownership, demand for smart-homes, yield-focused commercial investing, ultra-personalized luxury curation.",
      acquisition: "Heavy reliance on aggregators (99acres, MagicBricks, Zillow), broker networks, and localized word-of-mouth.",
      bottlenecks: "Lead leakage (slow response times), poor qualification, fragmented CRM data, unpredictable cash flow in rentals.",
      opportunities: "First-to-respond advantage (sub-5-minute SLA), predictive analytics for property valuation, omni-channel retargeting.",
      digitalGaps: "Most use CRMs as static Rolodexes rather than dynamic, trigger-based workflow engines.",
      aiAutomation: "AI-driven voice bots for initial qualification, automated multi-touch follow-up sequences based on lead behavior.",
      competitorStrategy: "High spend on performance ads leading to generic landing pages with high bounce rates and low conversion.",
      lowCostGrowth: "Granular local SEO (Google Business Profiles per neighborhood), hyper-targeted WhatsApp reactivation campaigns."
    },
    {
      industry: "Construction & Interior Design",
      icon: "HardHat",
      trends: "Sustainable materials, 3D visualization before execution, modular construction, transparent pricing models.",
      acquisition: "Architect referrals, Instagram portfolios, Houzz/Pinterest visibility, local B2B networking.",
      bottlenecks: "Long sales cycles, subjective client approvals, high customer acquisition cost (CAC), scope creep.",
      opportunities: "Productizing services (e.g., \"Fixed-price kitchen remodels\"), interactive AR/VR walkthroughs as lead magnets.",
      digitalGaps: "Lack of automated project milestone updates for clients; disjointed post-inquiry nurture sequences.",
      aiAutomation: "Generative AI for instant mood board creation during discovery calls; automated review generation post-handover.",
      competitorStrategy: "Heavily visual social media, but lacking backend capture mechanisms to turn likes into qualified appointments.",
      lowCostGrowth: "Strategic partnerships with real estate brokers (capturing buyers immediately post-purchase)."
    }
  ],
  journey: [
    {
      stage: "Discovery",
      painPoint: "High ad spend, low intent.",
      opportunity: "AI Lookalike Audiences: Hyper-targeted ads based on past closed-won data.",
      action: "Tag source, campaign, and initial intent score."
    },
    {
      stage: "Interest",
      painPoint: "Generic website browsing.",
      opportunity: "Conversational AI: Webchat trained on your specific inventory and FAQs.",
      action: "Capture WhatsApp/Email; initiate welcome sequence."
    },
    {
      stage: "Inquiry",
      painPoint: "After-hours leads go cold.",
      opportunity: "AI Voice Agent: Instant outbound call via Vapi/Twilio to engage within 60 seconds.",
      action: "Log call transcript; update lead status to 'Contacted'."
    },
    {
      stage: "Qualification",
      painPoint: "Agents waste time on bad leads.",
      opportunity: "Automated WhatsApp Bot: 3-question interactive flow (Budget, Timeline, Location).",
      action: "Route to specific agent calendar based on lead score."
    },
    {
      stage: "Meeting / Visit",
      painPoint: "High no-show rates.",
      opportunity: "Predictive Routing: Match lead profile to best-performing agent.",
      action: "Send automated WhatsApp/SMS reminders with map links."
    },
    {
      stage: "Negotiation",
      painPoint: "Emotion-driven pricing friction.",
      opportunity: "AI Prop-Tech: Generate instant comparative market analysis (CMA) reports.",
      action: "Trigger 'Active Negotiation' pipeline stage; alert management."
    },
    {
      stage: "Purchase",
      painPoint: "Paperwork delays.",
      opportunity: "Automated Document Gen: Auto-populate contracts via webhooks (e.g., DocuSign API).",
      action: "Transition from 'Lead' to 'Client' pipeline."
    },
    {
      stage: "After Sales",
      painPoint: "Buyer's remorse; radio silence.",
      opportunity: "Milestone Automations: Drip campaign explaining next steps, moving checklists, etc.",
      action: "Schedule 30-day, 90-day, 1-year check-in tasks."
    },
    {
      stage: "Referral",
      painPoint: "Forgetting to ask for introductions.",
      opportunity: "NPS Automation: Trigger review requests at peak happiness (e.g., key handover).",
      action: "Create affiliate link/code; track referral source automatically."
    }
  ],
  leadMatrix: [
    { rank: 1, source: "Google Ads (Search/Local)", cost: "High", difficulty: "Medium", scale: "High", roi: "High", bestPractice: "Hyper-local intent keywords. Send traffic to dynamic landing pages." },
    { rank: 2, source: "Meta Ads (FB/IG)", cost: "Med", difficulty: "Medium", scale: "High", roi: "High", bestPractice: "Use lead forms synced directly to CRM via webhooks for instant AI follow-up." },
    { rank: 3, source: "Database Reactivation", cost: "Low", difficulty: "Low", scale: "Med", roi: "High", bestPractice: "Run an AI SMS/WhatsApp campaign on old/dead leads. Immediate cash injection." },
    { rank: 4, source: "Strategic Partnerships", cost: "Low", difficulty: "High", scale: "Med", roi: "High", bestPractice: "Automate a B2B outreach sequence via LinkedIn/Email to mortgage brokers." },
    { rank: 5, source: "Local SEO (GBP)", cost: "Low", difficulty: "Low", scale: "Low", roi: "Med", bestPractice: "Automate review requests. Optimize profiles with weekly automated post updates." },
    { rank: 6, source: "Organic Social (IG/YouTube)", cost: "Low", difficulty: "High", scale: "High", roi: "Med", bestPractice: "Document site visits and market updates. Use ManyChat to trigger lead capture." },
    { rank: 7, source: "Cold Email / Outreach", cost: "Low", difficulty: "High", scale: "High", roi: "Med", bestPractice: "Use instantly.ai or Lemlist. Target commercial clients and high-net-worth investors." },
    { rank: 8, source: "Directories / Aggregators", cost: "Med", difficulty: "Low", scale: "Med", roi: "Low", bestPractice: "Only use if integrated via API to your CRM for instant response." },
    { rank: 9, source: "Events / Networking", cost: "High", difficulty: "High", scale: "Low", roi: "Med", bestPractice: "Use QR codes that dump directly into an automated CRM sequence." }
  ],
  salesEngine: [
    { step: "Lead Capture (The Net)", desc: "All sources feed into a single webhook." },
    { step: "Speed-to-Lead (The Filter)", desc: "Within 2 mins, CRM triggers WhatsApp & AI Voice Agent." },
    { step: "Automated Qualification (The Gate)", desc: "AI agent asks BANT questions." },
    { step: "Calendar Sync (The Handoff)", desc: "Qualified leads get booking link; unqualified go to nurture." },
    { step: "Pre-Meeting Nurture (The Primer)", desc: "Automated authority-building content sent before meeting." },
    { step: "Proposal & Follow-up (The Closer)", desc: "Dynamic proposal generated. 5-step follow-up if unsigned." },
    { step: "Post-Close (The Flywheel)", desc: "Client enters onboarding and referral generation sequence." }
  ],
  engineKPIs: [
    { metric: "Time-to-first-touch", target: "< 5 mins" },
    { metric: "Lead-to-Appointment Rate", target: "> 15%" },
    { metric: "Show-up Rate", target: "> 75%" },
    { metric: "Appointment-to-Close Rate", target: "> 20%" }
  ],
  aiBlueprint: [
    { useCase: "AI Voice Receptionist", complexity: "High", impact: "Massive", tech: "Vapi.ai / Bland.ai + Twilio + Make.com" },
    { useCase: "AI WhatsApp Assistant", complexity: "Medium", impact: "Massive", tech: "WATI / ChatNode + OpenAI API" },
    { useCase: "Automated Lead Scoring", complexity: "Medium", impact: "High", tech: "CRM native scoring + Make.com" },
    { useCase: "Proposal Generation", complexity: "Low", impact: "Medium", tech: "GoHighLevel / PandaDoc API + ChatGPT" },
    { useCase: "Predictive Analytics", complexity: "High", impact: "High", tech: "Python scripts analyzing historical CRM data" },
    { useCase: "Generative Visuals", complexity: "Low", impact: "Medium", tech: "Midjourney / DALL-E for interior design concepts" },
    { useCase: "Review Sentiment Analysis", complexity: "Low", impact: "Low", tech: "Zapier + OpenAI" }
  ],
  operations: [
    { rhythm: "Daily", tasks: "Automated end-of-day Slack/WhatsApp report. Metrics: Leads generated, calls made, meetings booked." },
    { rhythm: "Weekly (Sales Sprint)", tasks: "45-minute pipeline review. Metrics: Deals stuck > 7 days, show-up rates, conversion bottlenecks." },
    { rhythm: "Monthly (Strategy Review)", tasks: "Assess marketing channel ROI. Shift budget from underperforming ads. Review AI chat transcripts." },
    { rhythm: "Quarterly (System Audit)", tasks: "Deep dive into operational efficiency. Update SOPs, refine copy, audit CRM hygiene." }
  ],
  kpiDashboard: {
    topFunnel: ["Cost per Lead (CPL)", "Website Conversion Rate", "Ad Click-Through Rate (CTR)", "Total Organic Leads"],
    midFunnel: ["Lead-to-Meeting Ratio", "Cost per Acquisition (CPA)", "Follow-up Contact Rate", "Time-to-First-Response"],
    bottomFunnel: ["Deal Win Rate", "Average Deal Size", "Sales Cycle Length", "Total Pipeline Value", "Pipeline Velocity"],
    postSale: ["Client Lifetime Value (LTV)", "Net Promoter Score (NPS)", "Referral Rate percentage"]
  },
  roadmap: [
    { phase: "Phase 1: Foundation & Capture", weeks: "Week 1-4", goals: "CRM Setup, Asset Audit, Lead Magnets, Reactivation." },
    { phase: "Phase 2: Automation & AI", weeks: "Week 5-8", goals: "Speed-to-Lead, AI Qualification, Voice Agent Beta, Sales SOPs." },
    { phase: "Phase 3: Scale & Optimize", weeks: "Week 9-12", goals: "Paid Ads Launch, Retargeting, Dashboards, Review & Refine." }
  ],
  advertising: {
    philosophy: "Split strategy into two distinct engines: Google Ads (Capturing Intent) & Meta Ads (Generating Demand).",
    meta: {
      title: "Meta (FB/IG) Blueprint",
      bestFor: "Interior Design, Luxury Real Estate, Pre-Launch Projects.",
      campaigns: [
        { name: "The 'Irresistible Offer' Campaign (TOF)", angle: "Give high-value asset in exchange for details." },
        { name: "The 'Proof & Process' Campaign (MOF)", angle: "Show, don't tell. Video content works best here." },
        { name: "The 'Omnipresent Retargeting' Campaign (BOF)", angle: "Push them off the fence with urgency and proof." }
      ]
    },
    google: {
      title: "Google Ads Blueprint",
      bestFor: "Commercial Real Estate, Urgent Rentals, High-Intent Buyers.",
      tactics: [
        { name: "Single Keyword Ad Groups", desc: "Tight thematic groups matching search term, ad headline, and landing page." },
        { name: "Negative Keyword Shield", desc: "Block wasted spend (jobs, cheap, free, course)." },
        { name: "Dedicated Landing Pages", desc: "Stripped-down, high-speed, no navigation bars." }
      ]
    },
    technical: [
      "The Webhook Pipeline: Route all leads through Make.com to CRM.",
      "Speed-to-Lead Automation: Trigger WhatsApp sequence instantly.",
      "Meta Conversions API (CAPI): Send offline conversions back to Facebook.",
      "UTM Tracking: Map UTMs to CRM to calculate true ROAS."
    ]
  }
};

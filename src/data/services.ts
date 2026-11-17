export const SERVICES = [
  {
    category: "Author Branding & Digital Presence",
    intro: "Give your author work a clear, professional home. We shape the identity and digital experience around your books, readers and goals, whether you need a first website or improvements to what you already have.",
    benefit: "A consistent author presence makes it easier for readers, media contacts and potential partners to understand who you are, explore your books and take the next step.",
    deliverables: [
      "Author website design and development, with reader-friendly structure and navigation.",
      "Author brand identity and visual consistency across key digital touchpoints.",
      "Professional author and book landing pages, plus improvements to existing websites and book pages.",
      "Contact and enquiry forms, newsletter and reader sign-up integration.",
      "Book retailer and direct-purchase links, with suitable payment and ordering integrations where required.",
    ],
    packages: [{ name: "Book Landing Page", price: 450 }],
    quote: "Author websites, brand identity work, redesigns and additional integrations are scoped to your requirements and quoted after assessment.",
    cta: "Discuss your author website",
  },
  {
    category: "Pinterest Marketing & Book Visibility",
    intro: "Build a considered Pinterest presence for your author brand and books. We combine audience and keyword research with branded creative, organised boards and ongoing campaign management.",
    benefit: "A well-structured Pinterest presence creates additional routes for people searching and browsing relevant subjects to encounter your books and visit your chosen destination.",
    deliverables: [
      "Pinterest business account setup, profile optimisation and author/book strategy.",
      "Audience and keyword research to guide topics, descriptions and board structure.",
      "Custom branded pin design and board creation or optimisation.",
      "Content scheduling, campaign management and monitoring.",
      "Performance reporting with practical recommendations for the next stage.",
    ],
    packages: [
      { name: "Pinterest Foundation", price: 250 },
      { name: "Pinterest Visibility Campaign", price: 450 },
      { name: "Pinterest Growth Campaign", price: 750 },
    ],
    quote: "Package scope, creative volume, campaign period and reporting details are confirmed with you before work begins.",
    cta: "Discuss Pinterest support",
  },
  {
    category: "Book Trailers & Visual Promotion",
    intro: "Introduce your book through purposeful visual storytelling. We develop promotional video and supporting creative that communicate its subject, atmosphere and appeal.",
    benefit: "A trailer gives you a flexible visual asset to introduce a book on your website and across suitable social channels.",
    deliverables: [
      "Professionally produced book trailer shaped around the book and intended audience.",
      "Visual storytelling that communicates the book's subject, atmosphere and appeal.",
      "Promotional video adaptations for websites and social media.",
      "Supporting promotional graphics and visual assets.",
    ],
    packages: [],
    quote: "Book trailers and supporting visual assets are quoted individually after we discuss the book, creative direction, formats and intended use.",
    cta: "Request a trailer quote",
  },
  {
    category: "Book Discovery & Audience Development",
    intro: "Understand where your intended readers spend time and how your book can be presented in relevant discovery spaces. Research informs the channels and engagement activities selected for your project.",
    benefit: "A more informed discovery plan helps focus effort on communities, platforms and conversations that make sense for your book rather than relying on one channel alone.",
    deliverables: [
      "Reader and audience research aligned with your book's subject and readership.",
      "Identification of relevant communities, groups and discovery channels.",
      "Goodreads Listopia research and relevant public book-list opportunities.",
      "Book discussion prompts, polls and reader-engagement activities.",
      "Research into suitable platforms, publications, events and organisations.",
      "Recommendations for connecting the book with relevant audiences.",
    ],
    packages: [],
    quote: "Research depth, selected channels and engagement activities are tailored to the book and agreed project scope.",
    cta: "Discuss book discovery",
  },
  {
    category: "Ongoing Author Visibility Management",
    intro: "Keep your author presence active and consistent with an agreed programme of content, updates, discovery work and performance reviews.",
    benefit: "Rather than treating visibility as a one-off task, ongoing support helps maintain your digital touchpoints and gives you a regular basis for reviewing what to improve next.",
    deliverables: [
      "Ongoing Pinterest content, scheduling and campaign management.",
      "Regular creation of promotional content and visual assets.",
      "Book-page and author-website updates.",
      "Visual promotion and book-trailer adaptations for agreed channels.",
      "Audience and book-discovery research.",
      "Periodic performance reviews and practical recommendations.",
    ],
    packages: [],
    quote: "Ongoing support is arranged as a custom monthly scope based on the channels, content cadence and level of management you need.",
    cta: "Discuss ongoing support",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Author Branding & Digital Presence",
  "Pinterest Marketing & Book Visibility",
  "Book Trailers & Visual Promotion",
  "Book Discovery & Audience Development",
  "Ongoing Author Visibility Management",
  "Book Landing Page",
  "Pinterest Foundation",
  "Pinterest Visibility Campaign",
  "Pinterest Growth Campaign",
] as const;

export const PORTFOLIO_PROJECTS = [
  { name: "Women Gone WILD", href: "https://women-gone-wild-reader-experience.pages.dev" },
  {
    name: "Outback Odyssey — Goodreads discussion",
    href: "https://www.goodreads.com/topic/show/24779734-the-land-doesn-t-know-you-how-do-you-learn-to-belong",
  },
  { name: "Kanfmatic Agency", href: "https://kanfmaticagency.online" },
  {
    name: "Goodreads Reader Discovery",
    href: "https://robert-henry-reader-engagement.pages.dev",
  },
] as const;

export const PROCESS_STEPS = [
  { title: "Discover", text: "We learn about your author brand, book, current digital presence, and goals." },
  { title: "Assess", text: "We review what is in place and identify the needs and priorities for your project." },
  { title: "Create", text: "We agree on scope, deliverables, costs, and timing in a proposal before work begins." },
  { title: "Improve", text: "We complete the agreed work and identify any next steps together." },
] as const;

export const PROJECT_TERMS = {
  oneTimeDepositPercent: 50,
  oneTimeBalancePercent: 50,
  monthlyRetainerDue: "at the beginning of each service month",
  timelineStarts: "after the deposit and required materials are received",
  separateCosts: ["domains", "hosting", "premium software", "third-party costs"],
} as const;

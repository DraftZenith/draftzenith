export const SERVICES = [
  {
    category: "Author Brand Development",
    intro: "Build a clear, professional author brand through the selected brand-development package.",
    packages: [
      { name: "Author Brand Essentials", price: 650 },
      { name: "Complete Author Brand", price: 1250 },
      { name: "Author Brand & Digital Presence", price: 2100 },
    ],
  },
  {
    category: "Author Websites & Book Landing Pages",
    intro: "Create an author website or book-focused landing page suited to your digital presence needs.",
    packages: [
      { name: "Book Landing Page", price: 450 },
      { name: "Complete Author Website", price: 950 },
      { name: "Premium Author Digital Platform", price: 1750 },
    ],
  },
  {
    category: "Pinterest Discoverability",
    intro: "Plan Pinterest activity to make book and author pages easier for relevant readers to find.",
    packages: [
      { name: "Pinterest Foundation", price: 250 },
      { name: "Pinterest Visibility Campaign", price: 450 },
      { name: "Pinterest Growth Campaign", price: 750 },
    ],
  },
  {
    category: "Goodreads Listopia Campaigns",
    intro: "Support book discoverability through the selected Goodreads Listopia campaign.",
    packages: [
      { name: "Listopia Starter", price: 85 },
      { name: "Listopia Visibility", price: 150 },
      { name: "Listopia Extended Campaign", price: 300 },
    ],
  },
  {
    category: "Multi-Platform Book Discovery",
    intro: "Choose a book-discovery package designed around the selected platforms and agreed scope.",
    packages: [
      { name: "Essential Book Discovery", price: 350 },
      { name: "Multi-Platform Visibility", price: 550 },
      { name: "Complete Book Discovery Campaign", price: 850 },
    ],
  },
  {
    category: "Author Visibility Management",
    intro: "Ongoing visibility support, scoped and agreed for each service month.",
    packages: [
      { name: "Pinterest Management", price: 350, monthly: true },
      { name: "Multi-Platform Management", price: 650, monthly: true },
      { name: "Comprehensive Visibility Management", price: 950, monthly: true },
    ],
  },
] as const;

export const SERVICE_OPTIONS = SERVICES.flatMap((service) =>
  service.packages.map((offer) => offer.name),
);

export const PORTFOLIO_PROJECTS = [
  { name: "Women Gone WILD", href: "https://women-gone-wild-reader-experience.pages.dev" },
  { name: "Outback Odyssey", href: null },
  { name: "Kanfmatic Agency", href: "https://kanfmaticagency.online" },
  {
    name: "Goodreads Reader Discovery",
    href: "https://robert-henry-reader-engagement.authorbloomcircle.workers.dev/",
  },
] as const;

export const PROCESS_STEPS = [
  { title: "Discover", text: "We learn about your author brand, book, current digital presence, and goals." },
  { title: "Assess", text: "We review what is in place and identify the needs and priorities for your project." },
  { title: "Create", text: "We agree on scope, deliverables, costs, and timing in a proposal before work begins." },
  { title: "Improve", text: "We complete the agreed work and identify any next steps together." },
] as const;
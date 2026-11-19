export type ServicePackage = {
  name: string;
  price: number;
  billing?: "one-time" | "monthly";
  featured?: boolean;
  description: string;
  inclusions: readonly string[];
};

export type Service = {
  category: string;
  intro: string;
  benefit: string;
  deliverables: readonly string[];
  packages: readonly ServicePackage[];
  quote: string;
  cta: string;
  notes?: readonly string[];
};

export const SERVICES = [
  {
    category: "Author Branding & Digital Presence",
    intro: "Build an author identity and online home that present your work clearly. We can develop the brand, create a full author website or improve the pages and materials you already use.",
    benefit: "A recognisable identity and well-organised website help readers, media contacts and professional partners understand who you are, explore your books and find the right next step.",
    deliverables: [
      "Initial brand discovery and assessment, followed by author positioning and brand messaging.",
      "Development or refinement of your professional identity, author biography and visual direction.",
      "Logo design, visual identity, brand colour palette, typography and basic brand guidelines.",
      "Social media visual identity and branded social media templates.",
      "Recommendations for presenting your books and creative work consistently across relevant platforms.",
      "Custom author website design and development, including homepage, biography and profile section.",
      "Book presentation pages or sections, supplied image organisation, retailer links and contact or enquiry information.",
      "Relevant social links, mobile-responsive design, basic on-page SEO, testing and launch support.",
      "Book Landing Page: custom design, page structure, content arrangement, copywriting, book and author introduction, supplied testimonials, retailer links, clear calls to action, mobile responsiveness, basic SEO and pre-handover testing.",
    ],
    packages: [
      {
        name: "Book Landing Page",
        price: 450,
        billing: "one-time",
        description: "A dedicated page for one book, designed to explain the book and make the next step clear.",
        inclusions: [
          "Custom landing-page design and content structure.",
          "Landing-page copywriting and compelling book introduction.",
          "Author introduction or biography section.",
          "Book cover, supplied images and author-provided testimonials.",
          "Relevant retailer or book-purchase links and clear calls to action.",
          "Mobile-responsive design, basic on-page SEO and testing before handover.",
        ],
      },
    ],
    quote: "Full author branding, logo and identity development, complete author websites, redesigns and additional integrations are scoped and quoted after assessment. The author supplies accurate biography and book information, covers, photographs, awards, testimonials and other approved content. Domain registration, hosting, premium software and other third-party expenses are separate unless the project agreement says otherwise.",
    cta: "Discuss your author brand",
    notes: [
      "The Book Landing Page price is a one-time project fee.",
      "A full author website or brand identity project is quoted to its agreed scope.",
    ],
  },
  {
    category: "Pinterest Marketing & Book Visibility",
    intro: "Build a purposeful Pinterest presence through relevant keywords, organised boards and custom creative. Choose a foundation setup, a focused 30-day campaign or a broader 60-day growth campaign.",
    benefit: "A considered Pinterest strategy creates additional ways for people browsing relevant subjects to encounter your books and visit your chosen destination. Impressions, saves and outbound clicks are different measures, and none guarantees a sale.",
    deliverables: [
      "Review of the author's existing Pinterest presence, where applicable.",
      "Pinterest account setup or optimisation and professional profile presentation.",
      "Keyword and audience research relevant to the author, book and intended readership.",
      "Board strategy, themed board creation or optimisation, and search-friendly titles and descriptions.",
      "Original custom pin design based on the actual book, author, supplied visuals and relevant audience.",
      "Relevant destination links to the author's book page, website or retailer.",
      "Pinterest publishing, scheduling and campaign management where included in the selected package.",
      "Monitoring of available impressions, saves, outbound clicks and other engagement indicators.",
      "Performance review, reporting and practical recommendations where included in the selected package.",
    ],
    packages: [
      {
        name: "Pinterest Foundation",
        price: 250,
        billing: "one-time",
        description: "An organised starting point for authors who need a properly presented Pinterest account. This is a setup and optimisation service, not a long-term managed campaign.",
        inclusions: [
          "Review of an existing account, where applicable, or account setup.",
          "Professional profile presentation and relevant keyword research.",
          "Pinterest board strategy and creation or organisation of themed boards.",
          "Search-friendly board titles and descriptions.",
          "Initial custom pin designs based on the book and supplied visual materials.",
          "Relevant destination links, publishing guidance and recommendations for maintaining the account.",
        ],
      },
      {
        name: "Pinterest Visibility Campaign",
        price: 450,
        billing: "one-time",
        featured: true,
        description: "A focused 30-day campaign to strengthen a book's Pinterest presence through researched content and active publishing.",
        inclusions: [
          "Initial Pinterest account and book visibility assessment.",
          "Keyword and audience research.",
          "Development or refinement of up to five relevant themed boards.",
          "15 original, customised Pinterest pins with search-friendly titles and descriptions.",
          "Relevant links to the author's book page or website.",
          "Pinterest publishing and scheduling with campaign management over 30 days.",
          "Monitoring of available performance indicators and an end-of-campaign report with recommendations.",
        ],
      },
      {
        name: "Pinterest Growth Campaign",
        price: 750,
        billing: "one-time",
        description: "An expanded 60-day campaign with a broader creative range and a longer period of publishing and performance review.",
        inclusions: [
          "Comprehensive Pinterest account and visibility assessment.",
          "Expanded keyword and audience research.",
          "Development and optimisation of relevant themed boards.",
          "30 or more original pins using multiple visual approaches to present the book and its themes.",
          "Search-friendly titles and descriptions with relevant destination links.",
          "Pinterest publishing and scheduling with campaign management over 60 days.",
          "Ongoing monitoring, content-performance review, final report and recommendations for continued growth.",
        ],
      },
    ],
    quote: "Custom graphics are designed for the actual book, author and relevant audience. We do not promise a set number of views, clicks, saves, followers or sales. Pinterest Foundation establishes the account; the two campaign packages include the stated publishing periods and management.",
    cta: "Discuss Pinterest support",
    notes: [
      "Pinterest Foundation is a one-time setup and optimisation service.",
      "Pinterest Visibility Campaign runs for 30 days. Pinterest Growth Campaign runs for 60 days.",
      "Performance indicators are reported as available and are not sales guarantees.",
    ],
  },
  {
    category: "Book Trailers & Visual Promotion",
    intro: "Introduce your book through professionally produced visual storytelling. Creative direction is shaped around the book's genre, tone, themes and intended audience.",
    benefit: "A well-considered trailer gives you a visual asset to introduce your book on your website and in suitable social placements.",
    deliverables: [
      "Initial book and promotional-content assessment.",
      "Creative concept development, trailer direction and visual approach.",
      "Storyboard or scene planning.",
      "Arrangement of the book cover and approved promotional images.",
      "Promotional text and messaging.",
      "Visual transitions and motion elements.",
      "Music or sound selection using appropriately licensed material.",
      "Video editing, production and final video export.",
      "Preparation of suitable formats for agreed website and social media placements.",
    ],
    packages: [
      {
        name: "Essential",
        price: 250,
        billing: "one-time",
        description: "A focused book-trailer production option.",
        inclusions: [
          "Initial book and promotional-content assessment.",
          "Creative concept and visual approach.",
          "Use of the supplied book cover and approved promotional materials.",
          "Promotional messaging, editing, licensed music or sound selection and final export.",
          "Preparation for agreed website or social placement.",
        ],
      },
      {
        name: "Standard",
        price: 450,
        billing: "one-time",
        featured: true,
        description: "A more developed visual presentation for authors who want a stronger promotional introduction.",
        inclusions: [
          "Initial book and promotional-content assessment.",
          "Creative concept development and storyboard or scene planning.",
          "Visual storytelling shaped around the book's genre, tone and themes.",
          "Promotional messaging, transitions, motion elements and licensed sound selection.",
          "Editing, final export and preparation for agreed placements.",
        ],
      },
      {
        name: "Premium",
        price: 750,
        billing: "one-time",
        description: "An expanded production option for a more involved visual treatment.",
        inclusions: [
          "Initial book and promotional-content assessment.",
          "Creative concept, direction and scene planning.",
          "Arrangement of approved images, book-cover material and promotional messaging.",
          "Visual transitions, motion elements, editing and appropriately licensed sound.",
          "Final video export and preparation for agreed website and social placements.",
        ],
      },
    ],
    quote: "The package price covers the agreed Draft Zenith production scope. No fixed video duration, revision count or delivery timeline is promised here; these are confirmed in the project agreement. Actors, voice talent, premium licences, paid music or other external production expenses are separate where applicable. The author supplies the book cover, description and relevant approved materials.",
    cta: "Request a trailer quote",
    notes: [
      "All trailer options follow the production workflow described above.",
      "Exact creative scope, formats and any external production expenses are confirmed before work begins.",
    ],
  },
  {
    category: "Book Discovery & Audience Development",
    intro: "Find out where your intended readers spend time and which discovery channels make sense for your book. Research guides the communities, platforms and engagement activities selected for your project.",
    benefit: "A book-specific discovery plan helps focus effort on relevant audiences and genuine opportunities instead of relying on indiscriminate promotion.",
    deliverables: [
      "Review of the book's subject, genre and intended readership.",
      "Audience and keyword research.",
      "Identification of relevant reader communities and book-discovery platforms.",
      "Research into suitable promotional channels and opportunities.",
      "Recommendations for presenting the book to appropriate audiences.",
      "Discovery strategy based on the book's actual subject and readership.",
      "Research into relevant Goodreads Listopia lists and review of their relevance, activity and suitability.",
      "Recommendations for legitimate list participation and relevant book visibility.",
      "Development of book discussion prompts, reader questions and polls.",
      "Monitoring of agreed engagement activity, summary of findings and recommendations.",
    ],
    packages: [],
    quote: "Research depth, selected channels and engagement activities are tailored to the book and agreed project scope. We do not promise Goodreads rankings, votes, reviews, TBR additions or guaranteed reader responses. Paid or incentivised activity is never presented as independent reader opinion.",
    cta: "Discuss book discovery",
    notes: [
      "Book discovery research and Goodreads engagement are scoped to the individual book.",
      "Any engagement activity is described transparently and does not represent independent reader endorsement.",
    ],
  },
  {
    category: "Media & Professional Recognition",
    intro: "Build a stronger professional record through prepared press materials, relevant publication research and carefully managed editorial outreach. We support authors and artists while respecting each publication's independent decisions.",
    benefit: "Relevant reviews, interviews and features can provide material for an author biography, CV, website, proposals and professional portfolio. Coverage itself is never guaranteed.",
    deliverables: [
      "Press kit and professional profile: author or artist biography, book or project description, press release or media announcement, artist statement where relevant, approved photographs and project images.",
      "Media research: relevant newspapers, magazines, specialist publications, journals, professional publications and appropriate editorial contacts.",
      "Publication-fit review, submission requirements, tailored editorial pitches and review-submission materials.",
      "Interview proposals, submission coordination, editorial communication and appropriate follow-up.",
      "Professional recognition presentation: organisation of verified reviews, features, interviews and media mentions.",
      "Dedicated media or recognition section on the author's website where commissioned.",
      "Visual publicity support, including interview and feature announcement graphics and promotional assets.",
      "Campaign planning, pitch preparation, submission management, response monitoring, progress updates and final activity report.",
    ],
    packages: [
      {
        name: "Press Kit & Professional Profile",
        price: 250,
        billing: "one-time",
        description: "Prepare clear, media-ready information about the author, artist or creative project.",
        inclusions: [
          "Professional author or artist biography.",
          "Book or creative-project description and media announcement or press release.",
          "Author or artist statement where relevant.",
          "Selection and arrangement of approved photographs and project images.",
          "Press-kit preparation and media-ready project information.",
        ],
      },
      {
        name: "Media Outreach Campaign",
        price: 450,
        billing: "one-time",
        featured: true,
        description: "Research relevant publications and coordinate tailored editorial submissions.",
        inclusions: [
          "Research into relevant publications and appropriate editorial contacts.",
          "Review of publication relevance and submission requirements.",
          "Preparation of tailored editorial pitches and review-submission materials.",
          "Interview proposals and submission coordination.",
          "Editorial communication, appropriate follow-up and campaign progress update.",
        ],
      },
      {
        name: "Professional Recognition Campaign",
        price: 750,
        billing: "one-time",
        description: "Coordinate a broader publicity effort and organise verified professional coverage as it becomes available.",
        inclusions: [
          "Campaign planning and publication research.",
          "Press-kit and pitch preparation aligned with the agreed campaign.",
          "Submission management, communication and appropriate follow-up.",
          "Monitoring of responses and any coverage secured independently by publications.",
          "Organisation of verified reviews, interviews and media mentions.",
          "Campaign progress updates, final activity report and recommendations.",
        ],
      },
      {
        name: "Professional Recognition Page",
        price: 150,
        billing: "one-time",
        description: "A dedicated website section presenting verified reviews, interviews and media mentions.",
        inclusions: [
          "Organisation of approved and verified coverage.",
          "Presentation of published reviews, interviews and media mentions.",
          "Clear layout for professional recognition on the author's website.",
          "Page content arrangement and supplied links or approved assets.",
        ],
      },
    ],
    quote: "Earned editorial coverage: Draft Zenith prepares and manages professional outreach, but the publication decides whether to accept, review, interview or feature the author. Paid media placements are a separate route and must be identified as sponsored, with publication fees and terms disclosed. External publication charges are not included in Draft Zenith's service fee.",
    cta: "Discuss media support",
    notes: [
      "Prices shown are Draft Zenith service fees, not publication fees.",
      "No publication acceptance, positive review, interview or feature is guaranteed.",
      "Research volumes, tailored pitch limits and campaign duration are confirmed in the written scope; no unlisted numerical allowance is implied.",
    ],
  },
  {
    category: "Ongoing Author Visibility Management",
    intro: "Keep your author presence active with a recurring programme of Pinterest content, promotional coordination, discovery research and performance reviews.",
    benefit: "Regular support gives your online presence continuity and creates a practical rhythm for reviewing activity and deciding what to improve next.",
    deliverables: [
      "Monthly visibility strategy and content planning.",
      "Creation of 12 original Pinterest pins per month.",
      "Pinterest publishing and scheduling.",
      "Keyword and board optimisation.",
      "Relevant Goodreads research and engagement activity where agreed.",
      "Promotional content coordination.",
      "Monitoring of available performance indicators.",
      "Recommendations for improving future activity and monthly performance report.",
    ],
    packages: [
      {
        name: "Visibility Maintenance",
        price: 350,
        billing: "monthly",
        description: "Maintain a consistent Pinterest presence with a defined monthly content rhythm.",
        inclusions: [
          "Monthly visibility plan.",
          "12 original Pinterest pins per month.",
          "Pinterest publishing and scheduling.",
          "Keyword and board optimisation.",
          "Monitoring of available indicators and monthly performance report.",
        ],
      },
      {
        name: "Visibility Growth",
        price: 650,
        billing: "monthly",
        featured: true,
        description: "Combine the monthly Pinterest programme with broader discovery and promotional coordination.",
        inclusions: [
          "All Visibility Maintenance inclusions.",
          "Relevant Goodreads research and engagement activity where agreed.",
          "Promotional content coordination across agreed channels.",
          "Ongoing review of activity and recommendations for future visibility work.",
        ],
      },
      {
        name: "Comprehensive Visibility Management",
        price: 950,
        billing: "monthly",
        description: "Coordinate a broader ongoing visibility programme across agreed author and book touchpoints.",
        inclusions: [
          "All Visibility Growth inclusions.",
          "Coordinated management of the agreed monthly visibility activities.",
          "Monthly review of available performance indicators and recommendations for the next month's priorities.",
        ],
      },
    ],
    quote: "Monthly prices are recurring service fees, paid in advance. The agreed scope confirms channels and management responsibilities. Additional books, extra content, other platforms, video production and separate campaigns are scoped and quoted independently. No unlimited promotional activity is included.",
    cta: "Discuss monthly visibility support",
    notes: [
      "The monthly programme includes 12 original Pinterest pins.",
      "Additional books, content, platforms, video production and separate campaigns are quoted separately.",
    ],
  },
] as const satisfies readonly Service[];

export const SERVICE_OPTIONS = [
  "Author Branding & Digital Presence",
  "Pinterest Marketing & Book Visibility",
  "Book Trailers & Visual Promotion",
  "Book Discovery & Audience Development",
  "Media & Professional Recognition",
  "Ongoing Author Visibility Management",
  "Author Brand Development",
  "Author Website Design and Development",
  "Book Landing Page",
  "Pinterest Foundation",
  "Pinterest Visibility Campaign",
  "Pinterest Growth Campaign",
  "Professional Book Trailer Production",
  "Press Kit & Professional Profile",
  "Media Outreach Campaign",
  "Professional Recognition Campaign",
  "Professional Recognition Page",
  "Visibility Maintenance",
  "Visibility Growth",
  "Comprehensive Visibility Management",
] as const;

export const PORTFOLIO_PROJECTS = [
  { name: "Women Gone WILD", href: "https://women-gone-wild-reader-experience.pages.dev" },
  {
    name: "Outback Odyssey: Goodreads discussion",
    href: "https://www.goodreads.com/topic/show/24779734-the-land-doesn’t-know-you-how-do-you-learn-to-belong",
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
  monthlyRetainerDue: "in full in advance each month",
  timelineStarts: "after the deposit and required materials are received",
  separateCosts: ["domains", "hosting", "premium software", "advertising spend", "third-party costs", "external publication charges", "actors", "voice talent", "premium licences"],
} as const;

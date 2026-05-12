import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.jpg";
import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";

export const CATEGORIES = [
  "Fantasy", "Romance", "Thriller", "Mystery", "Self-Help",
  "Writing Tips", "Publishing Tips", "Indie Authors", "Kindle Finds", "Book Recommendations",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  author: string;
  authorSlug: string;
  date: string;
  readMinutes: number;
  body: string[];
  featured?: boolean;
};

export const POSTS: Post[] = [
  {
    slug: "the-quiet-rise-of-indie-fantasy",
    title: "The Quiet Rise of Indie Fantasy",
    excerpt: "Why the most ambitious worldbuilding of the decade is happening outside the Big Five — and how readers are finally finding it.",
    category: "Fantasy",
    image: post4,
    author: "Maren Holloway",
    authorSlug: "maren-holloway",
    date: "May 02, 2026",
    readMinutes: 9,
    featured: true,
    body: [
      "For years, the conversation around literary fantasy was dominated by a small handful of imprints. Today, the most daring sentences, the strangest magic systems, and the most lived-in worlds are arriving from independent authors who refuse to compromise.",
      "What changed isn't the talent — it's the distribution. Direct-to-reader platforms, premium newsletters, and a renewed editorial focus on craft have made it possible for a debut author in a small town to reach a global audience without losing their voice.",
      "At Draft Zenith we've spent the last year reading, listening, and watching this shift unfold. The titles below are the ones we keep returning to: books that feel like rooms you can walk into, written by people who treat storytelling as a vocation.",
      "If there is a single throughline, it is patience. These authors are not optimizing for the algorithm. They are building, slowly and with intent, the kind of work readers will press into the hands of friends a decade from now.",
    ],
  },
  {
    slug: "what-makes-a-romance-novel-unforgettable",
    title: "What Makes a Romance Novel Unforgettable",
    excerpt: "Beyond the meet-cute: the architecture of longing, restraint, and earned intimacy in the year's standout love stories.",
    category: "Romance",
    image: post5,
    author: "Imani Carter",
    authorSlug: "imani-carter",
    date: "Apr 24, 2026",
    readMinutes: 7,
    body: [
      "The romances that linger are not the ones with the most dramatic gestures. They are the ones that respect the reader's intelligence — the slow accumulation of glances, the small concession, the line of dialogue that recasts every page that came before.",
      "We spoke to seven editors and a dozen readers to understand why certain titles are passed from hand to hand for years. The pattern is clear: restraint, specificity, and a willingness to let the characters be inconvenient to one another.",
    ],
  },
  {
    slug: "the-thriller-rules-no-one-talks-about",
    title: "The Thriller Rules No One Talks About",
    excerpt: "Pacing isn't speed — it's pressure. A working novelist breaks down the invisible scaffolding behind a perfect page-turner.",
    category: "Thriller",
    image: post6,
    author: "Edmund Vale",
    authorSlug: "edmund-vale",
    date: "Apr 18, 2026",
    readMinutes: 11,
    body: [
      "A great thriller is a contract. The author promises that nothing on the page is wasted, and the reader, in turn, agrees to keep turning. Break the contract once and the spell is gone.",
      "What follows is a working list — not a theory — of the techniques I rely on whenever a manuscript begins to sag in the middle.",
    ],
  },
  {
    slug: "kindle-finds-under-the-radar",
    title: "Five Kindle Finds Flying Under the Radar",
    excerpt: "Hand-picked by our editors: short, sharp, and almost certainly missing from your library.",
    category: "Kindle Finds",
    image: post1,
    author: "Maren Holloway",
    authorSlug: "maren-holloway",
    date: "Apr 11, 2026",
    readMinutes: 5,
    body: [
      "Every Friday our editors compare notes on the indie titles that surprised them most. These five did not just stand out — they stayed with us long after the last page.",
    ],
  },
  {
    slug: "writing-the-second-draft",
    title: "Writing the Second Draft Without Losing the First",
    excerpt: "On revision as architecture: keeping the wild electricity of a first draft while quietly fixing everything that's broken.",
    category: "Writing Tips",
    image: post2,
    author: "Edmund Vale",
    authorSlug: "edmund-vale",
    date: "Apr 03, 2026",
    readMinutes: 8,
    body: [
      "First drafts are written in a fever. Second drafts are written in a chair. The trick is to do the careful work without extinguishing the fever.",
    ],
  },
  {
    slug: "publishing-in-public",
    title: "Publishing in Public: A New Author Playbook",
    excerpt: "How indie authors are using small, generous newsletters to outpace traditional marketing budgets.",
    category: "Publishing Tips",
    image: post3,
    author: "Imani Carter",
    authorSlug: "imani-carter",
    date: "Mar 27, 2026",
    readMinutes: 6,
    body: [
      "The most successful indie launches we tracked this year had one thing in common: the author had been quietly cultivating a small, attentive audience for months — sometimes years — before publication.",
    ],
  },
];

export type Author = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: { twitter?: string; instagram?: string; website?: string };
  books: { title: string; year: string }[];
  interview: { q: string; a: string }[];
};

export const AUTHORS: Author[] = [
  {
    slug: "maren-holloway",
    name: "Maren Holloway",
    role: "Editor-at-Large · Fantasy & Speculative",
    image: author1,
    bio: "Maren has spent fifteen years championing speculative fiction, first as a bookseller in Edinburgh, then as a literary agent, and now as Editor-at-Large at Draft Zenith. She believes worldbuilding is a moral act.",
    social: { twitter: "#", instagram: "#", website: "#" },
    books: [
      { title: "The Lantern Country", year: "2024" },
      { title: "Salt & Cinder", year: "2022" },
      { title: "Small Gods of the North", year: "2019" },
    ],
    interview: [
      { q: "What makes a fantasy novel last?", a: "Specificity. The world has to feel like it existed before you opened the book and will keep going after you close it." },
      { q: "Advice for indie authors?", a: "Write the second book before you market the first." },
    ],
  },
  {
    slug: "edmund-vale",
    name: "Edmund Vale",
    role: "Contributing Editor · Thriller & Craft",
    image: author2,
    bio: "Edmund is the author of seven novels and a former screenwriter. His monthly column on craft is required reading in three MFA programs.",
    social: { twitter: "#", website: "#" },
    books: [
      { title: "The Long Returning", year: "2025" },
      { title: "Witness Tree", year: "2021" },
    ],
    interview: [
      { q: "How do you start a thriller?", a: "With a question I cannot stop thinking about. If I'm not haunted, the reader won't be either." },
    ],
  },
  {
    slug: "imani-carter",
    name: "Imani Carter",
    role: "Senior Editor · Romance & Indie Voices",
    image: author3,
    bio: "Imani built her audience one newsletter at a time. She writes about love stories with the seriousness they deserve, and she has the receipts.",
    social: { instagram: "#", website: "#" },
    books: [
      { title: "All the Quiet Hours", year: "2025" },
      { title: "The Letter House", year: "2023" },
    ],
    interview: [
      { q: "What do romance readers actually want?", a: "To be respected. The genre has been condescended to for a century. Readers can feel it instantly." },
    ],
  },
];

export const TRENDING_BOOKS = [
  { title: "The Lantern Country", author: "Maren Holloway", genre: "Fantasy", image: book1 },
  { title: "All the Quiet Hours", author: "Imani Carter", genre: "Romance", image: book2 },
  { title: "The Long Returning", author: "Edmund Vale", genre: "Thriller", image: book3 },
  { title: "Salt & Cinder", author: "Maren Holloway", genre: "Fantasy", image: book4 },
];

export const TESTIMONIALS = [
  { quote: "Draft Zenith doesn't just review books — it reframes them. Every issue makes me a better reader.", name: "Hana Okafor", role: "Bookseller, Lagos" },
  { quote: "I sold more copies in the month after my spotlight than in the year before. The audience is real.", name: "Theodore Reyes", role: "Indie author of 'Northwater'" },
  { quote: "The most beautifully edited book newsletter on the internet, full stop.", name: "Clara Bishop", role: "Editor, Penumbra Press" },
];
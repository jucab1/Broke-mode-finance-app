export type Category = "Food" | "Transport" | "Fun" | "School" | "Subscriptions" | "Income";

export type Transaction = {
  id: string;
  name: string;
  category: Category;
  date: string;
  amount: number;
  kind: "income" | "expense";
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  cost: number;
  duration: string;
  group: string;
  type: "At home" | "Outing" | "Outdoor" | "Campus";
  setting: "Indoor" | "Outdoor" | "Either";
  vibe: "Chill" | "Creative" | "Social" | "Active";
  tags: string[];
};

export type Goal = { id: string; name: string; saved: number; target: number; date?: string; tint: "lime" | "lavender" | "coral" };
export type GroupPlan = { id: string; name: string; date: string; groupSize: number; area: string; vibe: string; options: { name: string; votes: number }[] };

export const transactions: Transaction[] = [
  { id: "t1", name: "Campus café", category: "Food", date: "Today", amount: 6.75, kind: "expense" },
  { id: "t2", name: "Part-time shift", category: "Income", date: "Yesterday", amount: 124, kind: "income" },
  { id: "t3", name: "City bus", category: "Transport", date: "Oct 20", amount: 3.35, kind: "expense" },
  { id: "t4", name: "Streaming plan", category: "Subscriptions", date: "Oct 19", amount: 8.99, kind: "expense" },
  { id: "t5", name: "Groceries", category: "Food", date: "Oct 18", amount: 27.46, kind: "expense" },
  { id: "t6", name: "Trivia night", category: "Fun", date: "Oct 16", amount: 4, kind: "expense" },
];

export const activities: Activity[] = [
  { id: "movie", title: "Movie night at a friend’s", description: "Pick a theme, bring the coziest snacks, and press play.", cost: 0, duration: "2–3 hrs", group: "2–6 people", type: "At home", setting: "Indoor", vibe: "Chill", tags: ["$0", "cozy", "low prep"] },
  { id: "pizza", title: "Homemade pizza night", description: "Build-your-own slices with a shared grocery run.", cost: 6, duration: "2 hrs", group: "2–5 people", type: "At home", setting: "Indoor", vibe: "Social", tags: ["food", "hands-on", "flexible"] },
  { id: "baking", title: "Bake cookies together", description: "One bowl, a playlist, and fresh cookies for the group.", cost: 4, duration: "1–2 hrs", group: "2–4 people", type: "At home", setting: "Indoor", vibe: "Creative", tags: ["sweet", "easy", "indoor"] },
  { id: "walk", title: "Sunset walk", description: "A no-spend reset with your favourite people and a view.", cost: 0, duration: "1 hr", group: "1–8 people", type: "Outdoor", setting: "Outdoor", vibe: "Chill", tags: ["$0", "outdoors", "easy"] },
  { id: "photo", title: "Photo challenge", description: "Split into teams and capture a themed list around town.", cost: 0, duration: "1–2 hrs", group: "2–8 people", type: "Outdoor", setting: "Outdoor", vibe: "Creative", tags: ["$0", "team", "explore"] },
  { id: "picnic", title: "Picnic in the park", description: "Bring what you already have and make an afternoon of it.", cost: 5, duration: "2 hrs", group: "2–6 people", type: "Outdoor", setting: "Outdoor", vibe: "Chill", tags: ["outdoors", "snacks", "weather"] },
  { id: "trivia", title: "Campus trivia night", description: "Check your campus calendar for a student-led game night.", cost: 0, duration: "2 hrs", group: "2–5 people", type: "Campus", setting: "Indoor", vibe: "Social", tags: ["$0", "campus", "social"] },
  { id: "bowling", title: "Bowling outing", description: "A classic group option—check local rates before you go.", cost: 18, duration: "2 hrs", group: "3–6 people", type: "Outing", setting: "Indoor", vibe: "Active", tags: ["outing", "active", "estimate"] },
  { id: "board", title: "Board-game night", description: "Turn a shelf of games into an easy low-cost hangout.", cost: 0, duration: "2–4 hrs", group: "2–6 people", type: "At home", setting: "Indoor", vibe: "Social", tags: ["$0", "games", "cozy"] },
];

export const goals: Goal[] = [
  { id: "g1", name: "Spring trip fund", saved: 186, target: 500, date: "Apr 30", tint: "lime" },
  { id: "g2", name: "New headphones", saved: 74, target: 180, date: "Dec 15", tint: "lavender" },
  { id: "g3", name: "Rainy-day cushion", saved: 45, target: 250, tint: "coral" },
];

export const groupPlans: GroupPlan[] = [
  { id: "p1", name: "Friday reset", date: "This Friday", groupSize: 4, area: "Near campus", vibe: "Chill", options: [{ name: "Movie night", votes: 3 }, { name: "Sunset walk", votes: 1 }, { name: "Bowling", votes: 0 }] },
  { id: "p2", name: "Midterm victory lap", date: "Nov 2", groupSize: 5, area: "Downtown", vibe: "Social", options: [{ name: "Potluck", votes: 2 }, { name: "Trivia night", votes: 2 }, { name: "Mini golf", votes: 1 }] },
];

export const money = (value: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(value);

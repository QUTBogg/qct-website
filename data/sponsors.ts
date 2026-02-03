export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Bronze";

export const SPONSOR_GOAL_AMOUNT = 25000;

export interface Sponsor {
  name: string;
  amount: number;
  tier: SponsorTier;
}

export const sponsors: Sponsor[] = [
  { name: "Samuel, Son & Co", amount: 5000, tier: "Platinum" },
  { name: "Acciona", amount: 4000, tier: "Gold" },
  { name: "Res Group", amount: 2500, tier: "Gold" },
  { name: "RJC Engineers", amount: 1000, tier: "Silver" },
  { name: "EllisDon", amount: 2000, tier: "Silver" },
  { name: "B.M. Ross and Associates Limited", amount: 250, tier: "Bronze" },
  { name: "Hapa Collaborative", amount: 800, tier: "Bronze" },
];

export const totalRaised = sponsors.reduce((sum, sponsor) => sum + sponsor.amount, 0);
export const progress = (totalRaised / SPONSOR_GOAL_AMOUNT) * 100;


export type RoleType =
  | "Captain"
  | "Concrete Head"
  | "Mechanical Head"
  | "Ski Profile Head"
  | "Finance Head"
  | "Spirit Head"
  | "Tech Ex Head"
  | "Grad Advisor"
  | "General Member";

export interface TeamMember {
  name: string;
  role: RoleType;
}

export const teamMembers: TeamMember[] = [
  // Leadership – Captains
  { name: "Ryan Currie", role: "Captain" },
  { name: "Simone Duifhuis", role: "Captain" },

  // Leadership – Finance
  { name: "Gavin Bhattacharya", role: "Finance Head" },
  { name: "Liam Cavanagh", role: "Finance Head" },

  // Leadership – Concrete
  { name: "Darryl Gladston", role: "Concrete Head" },
  { name: "Tiana Maedel", role: "Concrete Head" },

  // Leadership – Ski Profile
  { name: "Olek Guy", role: "Ski Profile Head" },
  { name: "Oliver Price", role: "Ski Profile Head" },

  // Leadership – Mechanical
  { name: "Darryl Gladston", role: "Mechanical Head" },
  { name: "Ryan Johnston", role: "Mechanical Head" },
  { name: "Justin MacLeod", role: "Mechanical Head" },

  // Leadership – Spirit
  { name: "Gabrielle Kline", role: "Spirit Head" },
  { name: "Elysium Phillips", role: "Spirit Head" },

  // Leadership – Tech Ex
  { name: "Aria Rechsteiner", role: "Tech Ex Head" },
  { name: "Peter Stewart", role: "Tech Ex Head" },

  // Leadership – Grad Advisor
  { name: "Brendan Deeves", role: "Grad Advisor" },

  // General Members
  { name: "TBD", role: "General Member" },
];

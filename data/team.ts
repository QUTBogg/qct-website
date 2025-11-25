export type RoleType =
  | "Captain"
  | "Concrete Head"
  | "Mechanical Head"
  | "Finance Head"
  | "Tech Exec"
  | "Grad Advisor"
  | "General Member";

export interface TeamMember {
  name: string;
  role: RoleType;
}

export const teamMembers: TeamMember[] = [
  // Leadership – Captains
  { name: "Thomas Carrie", role: "Captain" },
  { name: "Ciaran Henning", role: "Captain" },

  // Leadership – Finance
  { name: "Jordan Raftis", role: "Finance Head" },
  { name: "Evan Wansbrough", role: "Finance Head" },

  // Leadership – Concrete
  { name: "Evan Kischer", role: "Concrete Head" },
  { name: "Jamie Taylor", role: "Concrete Head" },

  // Leadership – Mechanical
  { name: "Avery Martin", role: "Mechanical Head" },
  { name: "Nolan Carson", role: "Mechanical Head" },

  // Leadership – Tech Execs
  { name: "Claire Mount", role: "Tech Exec" },
  { name: "Ella Hoffman", role: "Tech Exec" },

  // Leadership – Grad Advisor
  { name: "Brendan Deeves", role: "Grad Advisor" },

  // General Members
  { name: "Sienna Weatherly", role: "General Member" },
  { name: "Colten Rolheiser", role: "General Member" },
  { name: "Luke Piercey", role: "General Member" },
  { name: "Elysium Phillips", role: "General Member" },
  { name: "Simone Duifhuis", role: "General Member" },
  { name: "Gabrielle Kline", role: "General Member" },
  { name: "Jacob Rothauser", role: "General Member" },
  { name: "Eddie Fitzgerald", role: "General Member" },
  { name: "Tiana Maedel", role: "General Member" },
  { name: "Aria Rechsteiner", role: "General Member" },
  { name: "Oliver Price", role: "General Member" },
  { name: "Darryl Gladston", role: "General Member" },
  { name: "Justin MacLeod", role: "General Member" },
  { name: "Toby Holland", role: "General Member" },
];

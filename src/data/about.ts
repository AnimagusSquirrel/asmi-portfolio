export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export const experiences = [
  {
    company: "D.E. Shaw",
    role: "Product Design Intern",
    period: "May–Jul 2024",
    logo: "/images/about/Shaw.svg",
  },
  {
    company: "Uber She ++ 2025",
    role: "Top 105 students selected nationwide",
    period: "",
    logo: "/images/about/Uber.svg",
  },
  {
    company: "Techniche",
    role: "Creatives Team Head, 2026",
    period: "",
    logo: "/images/about/Techniche.svg",
  },
];

export const education: Education[] = [
  {
    institution: "IIT Guwahati",
    degree: "Bachelor's in Design",
    period: "2022 - 2026",
    description: "Final year student",
  },
];

export const bio = {
  intro: "I am a final year bachelor's in Design student at IIT Guwahati.",
  curiosity:
    "Curiosity drives me, how things or systems function, why they work or maybe break, and can I reimage them?",
  personal:
    "Outside design, you'll find me with music, children's fictions, or at the swimming pool :)",
};


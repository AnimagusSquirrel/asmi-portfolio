export interface Project {
  slug: string;

  image: string;

  title: string;
  description: string;

  role: string;
  product: string;
  duration: string;

  featured: boolean;
  archived: boolean;
}

export const projects: Project[] = [

  // ==========================================================
  // Project 1
  // ==========================================================

  {
    slug: "shaw_nda",

    image: "/images/projects/cc.png",

    title:
      "Helping D.E. Shaw build a self-service infrastructure platform for application environments",

    description:
      "My work at D.E. Shaw included collaborating with Product Managers, regular syncs with engineers and designing workflows for application infrastructure management.",

    role: "UX Design",

    product: "Internship",

    duration: "May – July 2024",

    featured: true,

    archived: false,
  },

  // ==========================================================
  // Project 2
  // ==========================================================

  {
    slug: "interiit2025",

    image: "/images/projects/cc.png",

    title: "Inter IIT Tech Meet 2025",

    description:
      "Placeholder — Inter IIT Tech Meet 2025 case study.",

    role: "UX Design",
    product: "Competition",
    duration: "2025",
    featured: true,
    archived: false,
  },

  {
    slug: "campus_sync",

    image: "/images/projects/cc.png",

    title:
      "Making campus events easier to discover, organize and experience",

    description:
      "Designed an event discovery platform for IIT Guwahati students that brought together clubs, departments and fests into a single experience.",

    role: "UX Design",

    product: "Case Study",

    duration: "Jan – Apr 2025",

    featured: true,

    archived: false,
  },

  // ==========================================================
  // Project 3
  // ==========================================================

  {
    slug: "photoshop",

    image: "/images/projects/cc.png",

    title:
      "Re-imagining Photoshop with AI-assisted creative workflows",

    description:
      "Explored how AI could become a creative partner inside Photoshop instead of replacing the designer's workflow.",

    role: "UX Design",

    product: "Concept",

    duration: "Dec 2024",

    featured: false,

    archived: true,
  },

  // ==========================================================
  // Project 4
  // ==========================================================

  {
    slug: "uber-she",

    image: "/images/projects/cc.png",

    title:
      "Uber She++ Design Challenge",

    description:
      "Designed solutions as part of Uber She++, focusing on product thinking and end-to-end UX.",

    role: "UX Design",

    product: "Hackathon",

    duration: "2025",

    featured: false,

    archived: true,
  },

];




// helper functions to get projects based on certain criteria


export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getArchiveProjects() {
  return projects.filter((project) => project.archived);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
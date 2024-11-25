interface Skill {
  id: string;
  name: string;
  group: string;
  level: number;
  description: string;
  related: string[];
}

interface Link {
  source: string;
  target: string;
  strength: number;
}

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    group: "Frontend",
    level: 90,
    description:
      "Bibliothèque JavaScript pour la création d'interfaces utilisateur modernes et réactives. Expertise dans les Hooks, Context, et les patterns avancés.",
    related: ["typescript", "nextjs", "redux", "tailwind"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    group: "Frontend",
    level: 85,
    description:
      "Framework React pour des applications web performantes avec rendu hybride, routage avancé et optimisation automatique.",
    related: ["react", "typescript", "tailwind"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    group: "Languages",
    level: 88,
    description:
      "Superset JavaScript apportant un système de types statiques pour un code plus robuste et maintenable.",
    related: ["react", "nextjs", "nodejs"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    group: "Backend",
    level: 85,
    description:
      "Runtime JavaScript côté serveur permettant de construire des applications scalables et performantes.",
    related: ["typescript", "express", "mongodb"],
  },
  {
    id: "express",
    name: "Express",
    group: "Backend",
    level: 82,
    description:
      "Framework web minimaliste et flexible pour Node.js, idéal pour créer des APIs RESTful.",
    related: ["nodejs", "mongodb", "typescript"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    group: "Database",
    level: 88,
    description:
      "Base de données NoSQL orientée documents offrant flexibilité et scalabilité pour les applications modernes.",
    related: ["nodejs", "express", "prisma"],
  },
  {
    id: "prisma",
    name: "Prisma",
    group: "Database",
    level: 82,
    description:
      "ORM nouvelle génération pour TypeScript et Node.js, avec un excellent support des types et une API intuitive.",
    related: ["typescript", "mongodb", "postgresql"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    group: "Database",
    level: 85,
    description:
      "Système de gestion de base de données relationnelle robuste avec support avancé des transactions et des requêtes complexes.",
    related: ["prisma", "nodejs"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    group: "Frontend",
    level: 92,
    description:
      "Framework CSS utilitaire permettant un développement rapide et cohérent d'interfaces modernes.",
    related: ["react", "nextjs"],
  },
  {
    id: "redux",
    name: "Redux",
    group: "Frontend",
    level: 85,
    description:
      "Bibliothèque de gestion d'état prévisible pour les applications JavaScript complexes.",
    related: ["react", "typescript"],
  },
  {
    id: "docker",
    name: "Docker",
    group: "DevOps",
    level: 80,
    description:
      "Plateforme de conteneurisation pour le déploiement cohérent d'applications dans différents environnements.",
    related: ["kubernetes", "nodejs"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    group: "DevOps",
    level: 75,
    description:
      "Système d'orchestration de conteneurs pour le déploiement, la mise à l'échelle et la gestion d'applications.",
    related: ["docker", "aws"],
  },
  {
    id: "aws",
    name: "AWS",
    group: "DevOps",
    level: 78,
    description:
      "Suite complète de services cloud pour le déploiement et la gestion d'applications à grande échelle.",
    related: ["kubernetes", "docker"],
  },
];

const calculateLinkStrength = (source: string, target: string): number => {
  const sourceSkill = skills.find((s) => s.id === source);
  const targetSkill = skills.find((s) => s.id === target);

  if (!sourceSkill || !targetSkill) return 0.5;

  // Stronger links between skills in the same group
  if (sourceSkill.group === targetSkill.group) return 0.8;

  // Medium strength for directly related skills
  if (sourceSkill.related.includes(target)) return 0.6;

  return 0.4;
};

export const generateLinks = (): Link[] => {
  const links: Link[] = [];
  skills.forEach((skill) => {
    skill.related.forEach((relatedId) => {
      // AHugo duplicate links
      const existingLink = links.find(
        (link) =>
          (link.source === skill.id && link.target === relatedId) ||
          (link.source === relatedId && link.target === skill.id)
      );

      if (!existingLink) {
        links.push({
          source: skill.id,
          target: relatedId,
          strength: calculateLinkStrength(skill.id, relatedId),
        });
      }
    });
  });
  return links;
};

export const graphData = {
  nodes: skills.map((skill) => ({
    id: skill.id,
    name: skill.name,
    group: skill.group,
    level: skill.level,
    description: skill.description,
    val: skill.level / 10, // Node size based on skill level
  })),
  links: generateLinks(),
};

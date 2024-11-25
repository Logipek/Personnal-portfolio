"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Rocket,
  Shield,
  Sparkles,
  Brain,
  Coffee,
  Zap,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Expertise technique",
    description:
      "Maîtrise des technologies modernes du web pour concevoir des solutions innovantes et performantes.",
    icon: Code2,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Approche créative",
    description:
      "Chaque projet représente une occasion de dépasser les frontières de l'innovation et du design.",
    icon: Brain,
    className: "md:col-span-1 md:row-span-2",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Solutions personnalisées",
    description:
      "Conception d'applications web adaptées à vos besoins spécifiques et à votre vision.",
    icon: Target,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500/20 to-red-500/20",
  },
  {
    title: "Performance optimale",
    description:
      "Optimisation constante pour assurer vitesse, fluidité et expérience utilisateur remarquable.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Passion pour le code",
    description:
      "Investissement total dans chaque projet, avec un soin particulier pour les détails et la qualité.",
    icon: Coffee,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Innovation continue",
    description:
      "Veille technologique permanente pour appliquer les meilleures pratiques du développement web et rester à l'avant-garde de l'innovation. Contribution active à la communauté open source et diffusion des connaissances.",
    icon: Rocket,
    className: "md:col-span-4",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">
            À propos de moi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Développeur passionné avec plus de 5 ans d&apos;expérience dans la
            création d&apos;applications web modernes et performantes. Je
            m&apos;efforce constamment d&apos;améliorer mes compétences pour
            offrir les meilleures solutions à mes clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`group relative p-8 rounded-md bg-secondary/10 backdrop-blur-sm border border-primary/5 
                  hover:bg-secondary/20 hover:border-primary/10 transition-all duration-300 ${feature.className}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mon objectif est de créer des expériences web exceptionnelles qui
            combinent design innovant, performance technique et facilité
            d&apos;utilisation. Chaque projet est une nouvelle opportunité
            dapprendre et de repousser les limites de ce qui est possible sur le
            web.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

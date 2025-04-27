"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Real Projects Only
const realProjects = [
  {
    id: "real-1",
    title: "SRB Construction & Engineering Website",
    description:
      "A fully responsive business website built with Next.js and Tailwind CSS, showcasing SRB's services and portfolio.",
    image: "/images/srbce.png",
    demoUrl: "https://srbce.vercel.app/",
    githubUrl: "https://github.com/YanRho/srbce-landing-page",
    techStack: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "real-2",
    title: "DROCSID Communication Platform Web App",
    description:
      "A real-time communication platform MVP for Senior Project Class. It allows users to send and receive messages in real-time, similar to Discord.",
    image: "/images/drocsid.png",
    demoUrl: null,
    githubUrl: "https://github.com/YanRho/8-bitbois",
    techStack: ["Next.js", "Neon DB", "Tailwind"],
  },
  {
    id: "real-3",
    title: "Lung Cancer Prediction Data Analysis",
    description:
      "A data analysis project using Python and Pandas to predict lung cancer risk based on various health metrics. Lung Cancer Dataset from Kaggle.",
    image: "/images/lungcancerbar.png",
    demoUrl: null,
    githubUrl: "https://github.com/YanRho/hw1-lung-cancer-prediction",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);

  const getRandomMotion = () => {
    const xMovement = Math.random() * 40 - 20; // Smaller float
    const yMovement = Math.random() * 40 - 20;
    const duration = 5 + Math.random() * 3; // 5-8s

    return {
      animate: {
        x: [0, xMovement, 0],
        y: [0, yMovement, 0],
      },
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration,
        ease: "easeInOut",
      },
    };
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900 px-6 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          My Projects
        </h1>

        <motion.div
          layout
          className="flex flex-wrap justify-center gap-10 relative mx-auto max-w-4xl"
        >
          {realProjects.map((project) => {
            const motionSettings = getRandomMotion();

            return (
              <motion.div
                key={project.id}
                layout
                onClick={() =>
                  setSelected(selected === project.id ? null : project.id)
                }
                className={`rounded-full overflow-hidden shadow-lg flex items-center justify-center
                  ${
                    selected
                      ? selected === project.id
                        ? "w-96 h-96 z-20" // Expanded big (24rem)
                        : "w-24 h-24 opacity-70" // Smaller when another is selected
                      : "w-40 h-40"
                  }
                  bg-white dark:bg-gray-800 cursor-pointer
                  transition-all duration-500 ease-in-out`}
                whileHover={{
                  scale: selected === project.id ? 1 : 1.1,
                }}
                animate={motionSettings.animate}
                transition={motionSettings.transition}
              >
                {selected === project.id ? (
                  <div className="p-6 text-center flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-black dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-black text-white rounded-full text-xs hover:bg-gray-700"
                        >
                          🎯 Live
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs hover:bg-gray-700"
                      >
                        🔗 GitHub
                      </a>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

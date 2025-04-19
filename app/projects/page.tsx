import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "SRB Construction & Engineering Website",
    description:
      "A fully responsive business website built with Next.js and Tailwind CSS, showcasing SRB's services and portfolio.",
    image: "/images/srbce.png",
    demoUrl: "https://srbce.vercel.app/",
    githubUrl: "https://github.com/YanRho/srbce-landing-page",
    techStack: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    id: 2,
    title: "DROCSID Communication Platform Web App",
    description:
      "A real-time communication platform MVP for Senior Project Class. It allows users to send and receive messages in real-time, similar to Discord.",
    image: "/images/drocsid.png",
    demoUrl: null,
    githubUrl: "https://github.com/YanRho/8-bitbois",
    techStack: ["Next.js", "Neon DB", "Tailwind"],
  },
  {
    id: 3,
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
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />

              {/* Content Section */}
              <div className="flex flex-col flex-grow p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg text-black dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between mt-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700"
                    >
                      🎯 Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    🔗 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

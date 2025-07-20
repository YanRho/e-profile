import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "JavaScript", "Python", "C++", "C#", "HTML", "CSS"
      ]
    },
    {
      title: "Frameworks",
      skills: [
        "React", "Next.js", "ASP .NET", "Tailwind CSS", 
        "Node.js", "React Native", 
      ]
    },
    {
      title: "Backend, Databases & Tools",
      skills: [
        "PostgreSQL", "MongoDB",
        "SQL", "Figma", "VsCode", "Jira", "Git"
      ]
    },
    {
      title: "Graphics & Systems",
      skills: ["OpenGL", "GLSL", "Assimp", "GLFW", "Modern C++"]
    }
    
  ];

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "#09090b" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] text-transparent bg-clip-text">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Modern technologies and frameworks that I have dabbed into, ranging from web development to graphics programming. 
            Some are self taught and some are learned through my computer science degree.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="
                p-8 bg-gradient-to-br from-[#1a1a1a] to-[#121212] 
                border border-border/20 rounded-2xl shadow-md 
                transition-colors duration-300 
                hover:border-[#442450]
              "
            >
              <h3 className="text-xl font-semibold mb-6 text-[#07a7a7]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="
                      bg-black text-white px-3 py-1 rounded-full 
                      text-sm font-medium transition-colors duration-300 
                      hover:bg-[#442450] hover:text-white
                    "
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Code, Server, Database, Wrench } from "lucide-react";

const SkillsStackNoLevels: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        "React.js",
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "MongoDB",
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "Tools & Languages",
      icon: Wrench,
      skills: [
        "Java",
        "Python",
        "Docker",
        "GitHub",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Skills Stack
      </h2>

      {skillCategories.map((category) => (
        <section key={category.title} className="mb-12">
          <h3 className="flex items-center text-2xl font-semibold mb-6 text-white">
            <category.icon className="w-6 h-6 mr-3 text-pink-400" />
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 rounded-xl px-4 py-2 text-white font-medium cursor-default select-none hover:bg-pink-600 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkillsStackNoLevels;

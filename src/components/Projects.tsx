import React from 'react';
import {
  ExternalLink,
  Github,
  Brain,
  FlaskConical,
  Calculator,
  ArrowRight,
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-based Lawyer Communication Web App',
      description:
        'AI-powered legal chat system with secure login and role-based access. Integrated OpenAI API for intelligent query responses with advanced natural language processing.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Flask', 'OpenAI API'],
      icon: Brain,
      gradient: 'from-purple-600 to-blue-600',
      glowColor: 'purple',
      githubUrl: 'https://github.com/KOWSIHASH/',
    },
    {
      id: 2,
      title: 'Interactive Periodic Table',
      description:
        'Dynamic educational tool with hover effects, filters, and responsive layout. Features detailed element information and visual learning capabilities.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      icon: FlaskConical,
      gradient: 'from-green-600 to-teal-600',
      glowColor: 'green',
      githubUrl: 'https://github.com/KOWSIHASH/',
    },
    {
      id: 3,
      title: 'Smart Expense Tracker',
      description:
        'Personal finance dashboard with advanced filtering, data visualizations, and persistent storage. Includes comprehensive analytics and budget management.',
      techStack: ['React.js', 'Node.js', 'Chart.js', 'MongoDB'],
      icon: Calculator,
      gradient: 'from-pink-600 to-red-600',
      glowColor: 'pink',
      githubUrl: 'https://github.com/KOWSIHASH/',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, AI integration, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden"
            >
              {/* Background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              ></div>

              {/* Project Icon */}
              <div className="relative z-10 mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg group-hover:shadow-${project.glowColor}-500/25 transition-all duration-300`}
                >
                  <project.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-purple-400 text-sm rounded-full border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                    <ArrowRight className="h-3 w-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-700/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live Demo</span>
                    <ArrowRight className="h-3 w-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/KOWSIHASH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

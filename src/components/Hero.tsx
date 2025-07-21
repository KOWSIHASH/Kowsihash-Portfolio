import React from 'react';
import { ChevronDown, Download, Eye, Code2, Database, Brain, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWork }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Code2 className="h-8 w-8 text-purple-400/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-1000">
          <Database className="h-6 w-6 text-pink-400/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float animation-delay-2000">
          <Brain className="h-10 w-10 text-blue-400/30" />
        </div>
        <div className="absolute top-60 right-40 animate-float animation-delay-3000">
          <Sparkles className="h-7 w-7 text-yellow-400/30" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Hi, I'm Kowsihash
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
            Full Stack Developer | UI and UX Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting intelligent and scalable web solutions using React.js, Node.js, and Python.
            Specializing in AI-driven applications and modern user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={onViewWork}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <Eye className="h-5 w-5" />
              <span>View My Work</span>
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1P-9n_q1gQdXASs0n9T13y1fANbVahBTT"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center space-x-3"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Scroll Down Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={onViewWork}
              className="flex flex-col items-center space-y-2 animate-bounce mt-4"
            >
              <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll Down</span>
              <ChevronDown className="h-6 w-6 text-purple-400" />
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Hero;

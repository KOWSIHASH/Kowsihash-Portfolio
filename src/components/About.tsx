import React from 'react';
import { GraduationCap, Heart, Code, Presentation, User } from 'lucide-react';
import kowsi from '../assets/kowsi.jpg'; // make sure this path is correct

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-30 group-hover:opacity-50 animate-pulse transition-opacity duration-300"></div>

              {/* Main profile circle */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src={kowsi}
                  alt="Kowsihash"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-2000"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300 space-y-6">
              <p className="leading-relaxed text-lg">
                Hi, I'm Kowsihash — a passionate and driven <span className="text-purple-400 font-semibold">Full Stack Developer</span> with a strong foundation in 
                Artificial Intelligence and Data Science. I specialize in building user-friendly web applications 
                with React.js, Node.js, and Python, integrating smart features and secure authentication systems.
              </p>
              
              <p className="leading-relaxed text-lg">
                I've built projects like an <span className="text-pink-400 font-semibold">AI-powered lawyer chat platform</span>, an interactive periodic table, 
                and a smart expense tracker, all reflecting my goal of blending tech with purpose.
              </p>
              
              <p className="leading-relaxed text-lg">
                I'm currently pursuing <span className="text-blue-400 font-semibold">B.Tech in AI & Data Science</span> at Dr. N.G.P. Institute of Technology. 
                Outside of coding, I love exploring new tools, building innovative apps, and presenting ideas at tech symposiums.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="group flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">Education</p>
                  <p className="text-sm text-gray-400">B.Tech AI & Data Science</p>
                </div>
              </div>
              
              <div className="group flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">Speaking</p>
                  <p className="text-sm text-gray-400">Tech Symposiums</p>
                </div>
              </div>
            </div>

            {/* Passion Statement */}
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-xl border border-gray-700/50">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mt-1">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to explore cutting-edge technologies, collaborate on meaningful projects, and contribute to innovative solutions that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, User } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-green-400">
              <User className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider font-medium">Portfolio</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                I'm <span className="text-green-400">Elyse</span>
                <br />Niyitegeka
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-slate-300 font-medium">
                  Full Stack Developer
                </p>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Building modern web applications with clean code and exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                View My Work
              </button>
              <a
                href="mailto:elyse.niyitegeka@example.com"
                className="px-8 py-3 border-2 border-green-600 text-green-400 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="mailto:niyitegekaelisee28@gmail.com"
                className="p-3 bg-slate-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-green-600/10 rounded-full flex items-center justify-center">
              <div className="w-60 h-60 bg-green-600/20 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-green-600/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-slate-400 hover:text-green-400 transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
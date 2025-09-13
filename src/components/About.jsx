import React from 'react';
import { Code, Database, Globe, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-green-600">Elyse</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated full-stack developer passionate about creating efficient, scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Hello! I'm Elyse, a full-stack developer with expertise in modern web technologies. 
                I enjoy building applications that solve real-world problems and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My approach combines technical proficiency with attention to detail, ensuring that every project 
                I work on meets high standards of quality, performance, and maintainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-600 p-6 rounded-xl text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <p className="text-blue-100">
                  Creating responsive, interactive user interfaces with React, JavaScript, and modern CSS.
                </p>
              </div>
              
              <div className="bg-slate-700 p-6 rounded-xl text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <p className="text-slate-300">
                  Building robust APIs and server-side applications with Node.js and database management.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Expertise</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Web Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>API Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Database Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Problem Solving</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-semibold mb-3">Let's Work Together</h3>
              <p className="text-blue-100 text-sm mb-4">
                Open to new opportunities and exciting projects.
              </p>
              <button className="w-full bg-white/20 py-2 px-4 rounded-lg hover:bg-white/30 transition-colors duration-200 text-sm font-medium">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
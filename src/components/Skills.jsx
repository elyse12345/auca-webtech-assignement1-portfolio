import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'CI/CD']
    }
  ];

  const expertise = [
    { name: 'JavaScript/React', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Database Design', level: 80 },
    { name: 'Problem Solving', level: 95 }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Skills & <span className="text-green-600">Technologies</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in modern web development technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-green-600 mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-slate-600 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Proficiency Level</h3>
              </div>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{item.name}</span>
                      <span className="text-slate-900 font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-green-600"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-600 p-6 rounded-xl text-white">
              <div className="flex items-center mb-4">
                <Server className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-semibold">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Docker', 'Kubernetes', 'GraphQL', 'AWS'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm border border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
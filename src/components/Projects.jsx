import React from 'react';
import { ExternalLink, Github, Globe, Database, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A full-stack web application for managing student records with user authentication, CRUD operations, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['User Authentication', 'Database Integration', 'Responsive Design', 'RESTful API'],
      icon: Database,
      color: 'blue',
      github: '#',
      live: '#'
    },
    {
      title: 'Network Security Dashboard',
      description: 'A monitoring dashboard for network security metrics with real-time data visualization and alert systems.',
      technologies: ['Python', 'Flask', 'Chart.js', 'SQLite'],
      features: ['Real-time Monitoring', 'Data Visualization', 'Alert System', 'Security Metrics'],
      icon: Shield,
      color: 'red',
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and modern design.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
      features: ['Responsive Design', 'Modern UI/UX', 'Smooth Animations', 'Performance Optimized'],
      icon: Globe,
      color: 'green',
      github: '#',
      live: '#'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' }
    };
    return colorMap[color] || { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`p-6 ${colors.bg} ${colors.border} border-b`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-white rounded-lg shadow-sm mr-4`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-sm rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${colors.text} ${colors.border} hover:${colors.bg}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for more updates on my development journey.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span>View All on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
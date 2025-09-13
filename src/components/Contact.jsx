import React from 'react';
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Let's <span className="text-green-600">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project? I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's discuss your project
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you need a full-stack web application, API development, or technical consultation, 
                I'm here to help bring your ideas to life with clean, efficient code.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-600 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-900 font-semibold">elyse.niyitegeka@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-700 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <p className="text-slate-900 font-semibold">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-600 p-8 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">
                Connect with me
              </h3>
              <p className="text-blue-100 mb-6 text-sm">
                Follow my work and stay updated with my latest projects.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors duration-200"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a
                  href="mailto:niyitegekaelisee28@gmail.com"
                  className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors duration-200"
                >
                  <Mail className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-50 p-12 rounded-xl text-center max-w-md">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Start a conversation
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have a project in mind? Let's discuss how we can work together to create something great.
              </p>
              <a
                href="mailto:niyitegekaelisee28@gmail.com"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
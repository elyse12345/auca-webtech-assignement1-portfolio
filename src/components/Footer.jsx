import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EN</span>
            </div>
            <span className="text-xl font-bold text-white">
              Elyse Niyitegeka
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400">
            <span>Built with</span>
            <Code className="h-4 w-4 text-green-400" />
            <span>and attention to detail</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Elyse Niyitegeka. All rights reserved.</p>
            <p className="mt-1 text-xs">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
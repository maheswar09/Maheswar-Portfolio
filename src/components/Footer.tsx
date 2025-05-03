import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Sree Venkat Chintakula</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              MS in Data Science candidate at Indiana University, specializing in biostatistics, 
              machine learning, and health data science. Seeking opportunities starting May 2025.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>✉️ sreevenkat450@gmail.com</span>
              <span>📱 +1 (930) 333-2608</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Machine Learning & AI</li>
              <li>Biostatistics</li>
              <li>Data Analysis</li>
              <li>Python Programming</li>
              <li>Research & Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Sree Venkat Chintakula. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
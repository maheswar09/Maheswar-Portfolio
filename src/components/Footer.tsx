import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Maheswar Gorantla</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md text-lg">
              MS in Computer Science candidate at Indiana University, specialized in 
              full-stack development, CMS platforms, and scalable systems. Seeking opportunities starting June 2025.
            </p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 text-lg text-gray-500 dark:text-gray-400">
              <span>✉️ gorantlamaheswar@gmail.com</span>
              <span>📱 +1 (930) 333-2778</span>
            </div>
          </div>
          
            <div>
            <h4 className="font-semibold mb-4 text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-lg">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-xl">Core Competencies</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-lg">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Automation Testing</li>
              <li>Data Analysis</li>
              <li>Python Programming</li>
              <li>Research & Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            © {currentYear} Maheswar Gorantla. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
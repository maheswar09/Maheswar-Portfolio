import React, { useState } from 'react';
import {  Github,CheckCircle } from 'lucide-react';
import { motion } from '../utils/motion';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Agentic AI');

  const filteredProjects = projectsData.filter(project => project.category === activeFilter);

  const categories = [ ...new Set(projectsData.map(project => project.category))];

  return (
    <section id="projects" className="md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore my portfolio of data-driven projects with measurable impact and results.
          </p>
        </div>

        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 w-max px-4 mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-lg font-medium whitespace-nowrap transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <a href={project.githubUrl} target="_blank"  rel="noopener noreferrer" >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="p-6">
                <div className="flex flex-row justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-md font-medium rounded-full">
                  {/* <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"> */}
                    <p className='text-center'>{project.category}</p>
                  {/* </span> */}
                  </div>
                </div>

                <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2">
                  {project.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div>
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      </div>
                      <span className="line-clamp-7 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>


                {/* <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-center"
                    >
                      <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div> */}

                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <Github size={30} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion } from '../utils/motion';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A chronological timeline of my career progression and key achievements.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:ml-auto'
              } ${index % 2 === 0 ? 'md:mr-1/2' : 'ml-6 md:ml-1/2'}`}
              style={{ maxWidth: 'calc(50% - 32px)' }}
            >
              {/* Custom timeline dot with year */}
              <div 
                className={`absolute top-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 z-10 ${
                  index % 2 === 0 
                    ? 'left-full md:left-full md:-ml-6' 
                    : 'left-0 -ml-6 md:left-0 md:-ml-6'
                }`}
              >
                <span className="text-xs font-bold text-blue-800 dark:text-blue-200">
                  {item.year}
                </span>
              </div>
              
              <div className={`
                p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow
                ${index % 2 === 0 ? 'mr-6 md:mr-0' : 'ml-0 md:ml-0'}
              `}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    item.current 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
                  }`}>
                    {item.current ? 'Current' : `${item.duration}`}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {item.company} • {item.location}
                </p>
                
                <p className={`text-gray-700 dark:text-gray-300 mb-4 ${
                  expandedId === item.id ? '' : 'line-clamp-2'
                }`}>
                  {item.description}
                </p>
                
                {expandedId === item.id && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  {expandedId === item.id ? 'Show less' : 'Show more'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
import React, { useState } from 'react';
import { motion } from '../utils/motion';
import { CheckCircle } from 'lucide-react';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="timeline" className="md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A chronological timeline of my career progression and key achievements.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />


          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`relative mb-16 lg:mb-12 w-full 
              ${index % 2 === 0 ? 'lg:pr-12 lg:max-w-[calc(50%-32px)]' : 'lg:pl-12 lg:ml-auto lg:max-w-[calc(50%-32px)]'}`}

            >
              {/* Timeline Dot */}
              <div
                className={`hidden lg:flex absolute top-0 items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 z-10 
                ${index % 2 === 0 ? 'left-full lg:-ml-2' : 'left-0 lg:-ml-16'}`}

              >
                <span className="text-lg font-bold text-blue-800 dark:text-blue-200">{item.year}</span>
              </div>

              {/* Card */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                {/* Title and duration badge */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold mb-1 sm:mb-0">{item.title}</h3>
                  <span
                    className={`self-start inline-block px-3 py-1 text-lg font-medium rounded-full ${
                      item.current
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    <p className='text-center'>
                    {item.current ? 'Current' : item.duration}
                    </p>
                  </span>
                </div>

                {/* Company and location */}
                <div className='flex flex-horizontal justify-between'>
                <p className="text-lg  text-gray-600 dark:text-gray-300 mb-2">{item.company}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{item.location}</p>
                </div>
                {/* Expanded details */}
                {expandedId === item.id && (
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.description.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div>
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          </div>
                          <span className="text-lg text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      <h4 className="text-xl font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-lg rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Show More / Less */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    {expandedId === item.id ? 'Show less' : 'Show more'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

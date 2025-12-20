import React from 'react';
import { motion } from '../utils/motion';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A professional overview of my technical proficiencies and domain knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.keywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-lg"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

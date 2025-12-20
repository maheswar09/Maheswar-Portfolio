import React from 'react';
import { motion } from '../utils/motion';

interface EducationItem {
  id: number;
  university: string;
  logo: string;
  degree: string;
  duration: string;
  grade: string;
  location?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    university: 'Indiana University, Bloomington',
    logo: '/images/IU_logo.png',
    degree: 'Masters in Computer Science',
    duration: 'Aug 2023 - May 2025',
    grade: '3.94 / 4.0',
  },
  {
    id: 2,
    university: 'International Institute of Information Technology, Bhubaneswar (IIIT-BH)',
    logo: '/images/IIIT_Bhubaneswar_Logo.png', 
    degree: "Bachelor's in Computer Science and Engineering",
    duration: 'Aug 2019 - May 2023',
    grade: '8.53 / 10',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Academic journey and accomplishments across institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex items-start space-x-4"
            >
              <img
                src={edu.logo}
                alt={edu.university}
                className="w-20 h-20 rounded-full object-contain bg-white p-1 dark:bg-gray-100"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{edu.university}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">{edu.degree}</p>
                <p className="text-lg text-gray-500 dark:text-gray-400">{edu.duration}</p>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium mt-1">Grade: {edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

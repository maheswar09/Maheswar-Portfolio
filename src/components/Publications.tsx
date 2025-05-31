import React from 'react';
import { motion } from '../utils/motion';
import { ExternalLink, BookOpenCheck } from 'lucide-react';

const publicationsData = [
  {
    id: 1,
    title:
      'AI-driven estimation of O6 methylguanine-DNA-methyltransferase (MGMT) promoter methylation in glioblastoma patients: a systematic review with bias analysis.',
    link: 'https://link.springer.com/article/10.1007/s00432-023-05566-5',
  },
  {
    id: 2,
    title:
      'Synthesis of Glioblastoma Segmentation Data Using Generative Adversarial Network.',
    link: 'https://www.researchgate.net/publication/381946660_Synthesis_of_Glioblastoma_Segmentation_Data_Using_Generative_Adversarial_Network',
  },
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Publications</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Peer-reviewed research contributions in the field of AI and medical imaging.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex space-x-4 items-start"
            >
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center w-14 h-14">
                <BookOpenCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
              </div>

              <div className="flex-1">
                <h3 className="text-md font-medium text-gray-800 dark:text-gray-100 mb-2">
                  {pub.title}
                </h3>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Publication <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

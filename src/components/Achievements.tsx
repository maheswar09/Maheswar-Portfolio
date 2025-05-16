import React from 'react';
import { motion } from '../utils/motion';
import { achievementsData } from '../data/achievementsData';
import { ExternalLink, Award, Medal, BadgeCheck } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Milestones and recognitions across certifications, competitions, and hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex space-x-4 items-start"
            >
              {/* Left: Icon or Image */}
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center w-14 h-14">
                {achievement.type === 'Badge' && achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="h-8 w-8 object-contain"
                  />
                ) : achievement.type === 'Certification' ? (
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                ) : achievement.type === 'Competition' ? (
                  <Medal className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : achievement.type === 'Hackathon' ? (
                  <Medal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                ) : (
                  <BadgeCheck className="w-6 h-6 text-yellow-500 dark:text-yellow-300" />
                )}
              </div>

              {/* Right: Details */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {achievement.organization} {achievement.date && `• ${achievement.date}`}
                </p>
                {achievement.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{achievement.description}</p>
                )}
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Details <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

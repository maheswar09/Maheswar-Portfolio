import React, { useState } from 'react';
import { motion } from '../utils/motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
 import emailjs from '@emailjs/browser';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
 



// Inside your handleSubmit:
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    
    import.meta.env.VITE_TEMPLATE_ID, 
        
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    import.meta.env.VITE_PUBLIC_KEY   
      
  )
  .then(() => {
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  })
  .catch((err) => {
    alert("Email failed to send. Please try again.");
    console.error('EmailJS Error:', err);
  })
  .finally(() => {
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  });
};



  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Looking forward to connecting about research and job opportunities in data science.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Email</h4>
                  <a href="mailto:gorantlamaheswar@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg">
                    gorantlamaheswar@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Phone</h4>
                  <a href="tel:+19303332778" className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +1 (930) 333-2778
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Location</h4>
                  <p className='text-lg'>Bloomington, Indiana, USA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Professional Profiles</h3>
              <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/maheswar-gorantla-a80b60209/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://github.com/maheswar09" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <Github className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              </a>

              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Job Preferences</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Education</span>
                  <span className="font-medium text-lg">MS in Computer Science (2025)</span>
                </div>
                
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400 whitespace-nowrap text-lg">
                    Preferred Roles
                  </span>
                  <span className="font-medium text-right max-w-[70%] text-lg">
                    Software Developer, Web Developer, Frontend Developer, Backend Developer, Full Stack Developer
                  </span>
                </div>

                
                <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Available From</span>
                  <span className="font-medium text-lg">June 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg">
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-green-700 dark:text-green-300 text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="" className='text-lg'>Select a subject</option>
                    <option value="Job Opportunity" className='text-lg'>Job Opportunity</option>
                    <option value="Research Collaboration" className='text-lg'>Research Collaboration</option>
                    <option value="Interview Request" className='text-lg'>Interview Request</option>
                    <option value="Other" className='text-lg'>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
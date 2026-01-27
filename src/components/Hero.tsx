import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    createParticles();

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const primaryColor = theme === 'dark' ? '59, 130, 246' : '37, 99, 235';

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${particle.opacity})`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <section
  id="about"
  className="relative min-h-screen pt-24 scroll-mt-16 flex items-center justify-center overflow-hidden"
>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      ></canvas>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Maheswar Gorantla</span>
            <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Software Engineer | Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Engineer with hands-on experience in full-stack development, cloud platforms, and
            DevOps tools. Proficient in building scalable, accessible AI-powered web and mobile applications
            with microservice architecture. Skilled in CI/CD pipelines, Containerization, RESTful APIs, 
            and database design. Collaborative in agile teams, mentoring peers, and committed to 
            continuous learning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-lg text-white font-medium transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/11876xoNKV72zzIaF-rF6uPZRXoyhSROK/view?usp=drive_link"
              target="_blank"
              className="px-6 py-3 rounded-full bg-gray-200 text-lg dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium transition-colors duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="inline-flex flex-col items-center mt-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href='#skills'>
            <span className="text-lg mb-2">Explore My Work</span>
            </a>
            <ArrowDown size={30}/>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

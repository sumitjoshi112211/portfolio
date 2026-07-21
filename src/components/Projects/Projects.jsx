import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import aiImage from '../../assets/AI.png';
import portImage from '../../assets/port.png';
import chronosImage from '../../assets/chronos.png';
import quickshowImage from '../../assets/quickshow.png';
import internshipImage from '../../assets/internship.png';
import golfImage from '../../assets/golf.png';
import grocifyImage from '../../assets/grocify.png';
import sparkImage from '../../assets/spark.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'AI Smart Assistant for Education',
      description: 'An AI-powered educational platform developed during my internship that helps students learn through an intelligent chatbot, curated courses, quizzes, and personalized learning resources. The platform provides an interactive dashboard, responsive user interface, and modern user experience.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'REST API', 'Firebase Authentication', 'JavaScript', 'HTML5', 'CSS3'],
      liveDemo: '#',
      github: '#',
      image: aiImage,
      badge: 'Featured'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, fully responsive developer portfolio built with React.js. It showcases my skills, projects, certifications, and contact information with smooth scrolling, responsive layouts, beautiful UI animations, reusable React components, and an optimized user experience. Designed to impress recruiters and highlight my frontend development skills.',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Framer Motion', 'React Icons', 'Vite'],
      liveDemo: '#',
      github: '#',
      image: portImage,
      badge: 'Featured'
    },
    {
      title: 'Chronos – AI Health Assistant',
      description: 'Chronos is a modern AI-powered healthcare assistant built to help users monitor their health and receive intelligent recommendations. Users can track blood pressure, heart rate, blood sugar, and other health metrics while Gemini AI analyzes symptoms and provides personalized health suggestions, medicine guidance, and recommendations on when professional medical consultation is needed. The platform also includes real-time medicine reminders, alarm and timer functionality, multiple dashboards, and an intuitive responsive interface for a seamless healthcare experience.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT Authentication', 'REST API', 'Responsive UI'],
      liveDemo: '#',
      github: '#',
      image: chronosImage,
      badge: 'Featured'
    },
    {
      title: 'Quick Show',
      description: 'A modern movie browsing web application with a responsive interface and clean user experience.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      liveDemo: 'https://quick-show12.vercel.app/',
      github: null,
      image: quickshowImage,
      badge: null
    },
    {
      title: 'EdTech Platform',
      description: 'Developed during my Full Stack Development Internship. An educational platform providing learning resources with a responsive and modern UI.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveDemo: 'https://edtech-self.vercel.app/',
      github: null,
      image: internshipImage,
      badge: 'Internship Project'
    },
    {
      title: 'Family Golf',
      description: 'A modern golf club website featuring smooth scrolling, interactive animations, responsive design, and engaging UI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      liveDemo: 'https://familygolfbasic.vercel.app/',
      github: null,
      image: golfImage,
      badge: null
    },
    {
      title: 'Grocify',
      description: 'A responsive grocery shopping website with modern product browsing experience and attractive UI.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      liveDemo: 'https://grocify-jet.vercel.app/',
      github: null,
      image: grocifyImage,
      badge: null
    },
    {
      title: 'Spark Career',
      description: 'A career guidance website helping students explore career opportunities through an attractive interface.',
      technologies: ['React.js', 'JavaScript', 'CSS'],
      liveDemo: 'https://spark-career-ui.vercel.app/',
      github: null,
      image: sparkImage,
      badge: null
    }
  ];

  const visibleProjects = projects.slice(0, 3);
  const hiddenProjects = projects.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.badge && (
                  <span className="project-badge">{project.badge}</span>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a
                    href={project.liveDemo}
                    target={project.liveDemo !== '#' ? '_blank' : undefined}
                    rel={project.liveDemo !== '#' ? 'noopener noreferrer' : undefined}
                    className="project-btn project-btn-primary"
                    onClick={(e) => project.liveDemo === '#' && e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <button
                    className={`project-btn project-btn-secondary ${!project.github || project.github === '#' ? 'disabled' : ''}`}
                    disabled={!project.github || project.github === '#'}
                    onClick={() => project.github && project.github !== '#' && window.open(project.github, '_blank')}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {hiddenProjects.map((project, index) => (
                <motion.div
                  key={index + 3}
                  className="project-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    {project.badge && (
                      <span className="project-badge">{project.badge}</span>
                    )}
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-buttons">
                      <a
                        href={project.liveDemo}
                        target={project.liveDemo !== '#' ? '_blank' : undefined}
                        rel={project.liveDemo !== '#' ? 'noopener noreferrer' : undefined}
                        className="project-btn project-btn-primary"
                        onClick={(e) => project.liveDemo === '#' && e.preventDefault()}
                      >
                        Live Demo
                      </a>
                      <button
                        className={`project-btn project-btn-secondary ${!project.github || project.github === '#' ? 'disabled' : ''}`}
                        disabled={!project.github || project.github === '#'}
                        onClick={() => project.github && project.github !== '#' && window.open(project.github, '_blank')}
                      >
                        GitHub
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {projects.length > 3 && (
          <motion.button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less Projects' : 'Show More Projects'}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Projects;

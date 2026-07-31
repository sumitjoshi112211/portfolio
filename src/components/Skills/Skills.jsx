import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript'],
      icon: '💻'
    },
    {
      title: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
      icon: '⚙️'
    },
    {
      title: 'Database Management',
      skills: ['MongoDB', 'MySQL'],
      icon: '🗄️'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Chrome DevTools'],
      icon: '🛠️'
    },
    {
      title: 'Core CS Fundamentals',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Operating Systems'],
      icon: '📚'
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
      icon: '🔀'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 * categoryIndex + 0.05 * skillIndex }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

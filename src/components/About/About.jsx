import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const interests = [
    'Software Engineering & Development',
    'Frontend Development (React.js)',
    'Backend Development (Node.js & Express.js)',
    'Full Stack Web Development (MERN Stack)',
  ];

  const personalInfo = [
    { label: 'Name', value: 'Sumit Joshi' },
    { label: 'Age', value: '21' },
    { label: 'Course', value: 'B.Tech, CSE' },
    { label: 'College', value: 'SISTec-GN, Bhopal' },
    { label: 'CGPA', value: '6.64 / 10' },
    { label: 'Email', value: 'sumitjoshi66508@gmail.com' },
    { label: 'Phone', value: '+91 8269522657' },
    { label: 'GitHub', value: 'sumitjoshi112211' },
    { label: 'LinkedIn', value: 'linkedin.com/in/sumit-joshi-018074333' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who I am
          </motion.h2>

          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A little about my background, interests, and what drives me.
          </motion.p>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              I'm Sumit Joshi, a B.Tech student at Sagar Institute of Science and Technology (SISTec-GN), Bhopal, majoring in Computer Science & Engineering. I have a strong interest in Software Engineering, Frontend Development, Backend Development, and building scalable web applications using modern technologies.
            </p>
            <p>
              I enjoy building complete web applications from frontend to backend using React.js, Node.js, Express.js, and MongoDB. I love creating clean user interfaces, writing efficient backend logic, and continuously improving my problem-solving skills through real-world projects.
            </p>
            <p>
              Outside of coursework, I spend my time learning new technologies, solving Data Structures & Algorithms problems, improving my development skills, and building projects that strengthen my full-stack development experience.
            </p>
          </motion.div>

          <motion.ul
            className="about-interests"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {interests.map((interest, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {interest}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-card">
            <motion.h3
              className="card-title"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Personal Information
            </motion.h3>

            <div className="card-content">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="card-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                >
                  <span className="card-label">{info.label}</span>
                  <span className="card-value">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

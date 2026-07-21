import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';
import angularImage from '../../assets/Angular.png';
import mackyImage from '../../assets/macky.png';
import pythonImage from '../../assets/python.png';
import mernImage from '../../assets/Mern stack.png';
import deloitteImage from '../../assets/Deloite.png';

const Certificates = () => {
  const certificates = [
    {
      title: 'Angular Stack Development',
      organization: 'Infosys Springboard',
      image: angularImage
    },
    {
      title: 'Full Stack Development Internship',
      organization: 'Macky\'s Tech',
      image: mackyImage
    },
    {
      title: 'Python Programming',
      organization: 'Cisco Networking Academy',
      image: pythonImage
    },
    {
      title: 'MERN Stack Development',
      organization: 'Sheryians Coding School',
      image: mernImage
    },
    {
      title: 'Technology Job Simulation',
      organization: 'Deloitte (Forage)',
      image: deloitteImage
    }
  ];

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

  const handleCertificateClick = (image) => {
    window.open(image, '_blank');
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <motion.div
          className="certificates-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="certificates-title">Certificates</h2>
          <p className="certificates-subtitle">Professional certifications and achievements I've earned.</p>
        </motion.div>

        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 45px rgba(0,0,0,0.45)'
              }}
              onClick={() => handleCertificateClick(cert.image)}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-organization">{cert.organization}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

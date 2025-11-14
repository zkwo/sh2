import React from 'react';
import styles from './ContactSection.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className={`${styles.contactSection} glass-effect`}> {/* Tambah efek kaca */}
      <h2 className={styles.sectionTitle}>Get In Touch</h2>
      <p className={styles.contactText}>
        Have a project in mind or just want to say hello? I'd love to hear from you.
        Feel free to reach out via email or connect with me on social media.
      </p>
      
      <a href="mailto:your.email@example.com" className={`${styles.contactLink} cling-glow`}> {/* Tambah efek cling */}
        your.email@example.com
      </a>

      <div className={styles.socialIcons}>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </section>
  );
};

export default ContactSection;

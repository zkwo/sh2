import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={`${styles.aboutSection} glass-effect`}> {/* Tambah efek kaca */}
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <p>
            I am a passionate [Your Profession, e.g., Web Designer/Developer]
            with a strong focus on creating clean, intuitive, and high-performing
            digital experiences. With [X] years in the industry, I thrive on
            transforming complex ideas into elegant solutions.
          </p>
          <p>
            My work is driven by a commitment to detail and a belief that good design
            should be both beautiful and functional. I enjoy collaborating
            with clients to bring their visions to life, always pushing for
            excellence in every project.
          </p>
        </div>
        <div className={styles.skillsColumn}>
          <h3>My Expertise</h3>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>Web Design (UI/UX)</li>
            <li className={styles.skillItem}>Front-end Development</li>
            <li className={styles.skillItem}>React.js</li>
            <li className={styles.skillItem}>Vite</li>
            <li className={styles.skillItem}>HTML & CSS</li>
            <li className={styles.skillItem}>JavaScript (ES6+)</li>
            <li className={styles.skillItem}>Git & GitHub</li>
            <li className={styles.skillItem}>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

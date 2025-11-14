import React from 'react';
import styles from './WorkSection.module.css';

const ProjectCard = ({ category, title, description, link }) => (
  <div className={`${styles.projectCard} glass-effect`}> {/* Tambah efek kaca */}
    <p className={styles.projectCategory}>{category}</p>
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectDescription}>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
      View Project &rarr;
    </a>
  </div>
);

const WorkSection = () => {
  return (
    <section id="work" className={styles.workSection}>
      <h2 className={styles.sectionTitle}>My Work</h2>
      <div className={styles.projectGrid}>
        <ProjectCard
          category="Web Development"
          title="E-Commerce Rebuild"
          description="Modernisasi platform e-commerce dengan React dan headless CMS, meningkatkan performa dan UX."
          link="#"
        />
        <ProjectCard
          category="UI/UX Design"
          title="Mobile App Redesign"
          description="Mendesain ulang aplikasi mobile untuk startup fintech, fokus pada user flow dan estetika."
          link="#"
        />
        <ProjectCard
          category="Branding"
          title="Corporate Identity Kit"
          description="Pengembangan identitas visual lengkap termasuk logo, palet warna, dan pedoman branding."
          link="#"
        />
         <ProjectCard
          category="Web Development"
          title="Portfolio Website"
          description="Membangun situs portfolio pribadi yang responsif dan berkinerja tinggi menggunakan Vite dan React."
          link="#"
        />
      </div>
    </section>
  );
};

export default WorkSection;

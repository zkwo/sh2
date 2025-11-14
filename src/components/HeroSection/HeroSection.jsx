import React from 'react';
import { Link } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <p className={styles.intro}>HELLO, I'M</p>
      <h1 className={styles.name}>YOUR NAME</h1>
      <h2 className={styles.tagline}>A DIGITAL CREATOR FOCUSED ON MINIMALIST DESIGN & ELEGANT SOLUTIONS.</h2>

      <Link to="about" smooth={true} duration={500} className={styles.scrollDown}>
        SCROLL DOWN
        <FiChevronDown className={styles.scrollDownArrow} />
      </Link>
    </section>
  );
};

export default HeroSection;

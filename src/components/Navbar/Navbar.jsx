// File: src/components/Navbar/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './Navbar.module.css';

// TIDAK ADA IMPOR MUSIK DI SINI! (Sudah dipindahkan ke public/)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Penting: Autoplay hanya akan bekerja jika dipicu oleh interaksi user
        audioRef.current.play().catch(error => {
          console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; 
      audioRef.current.loop = true; 
    }
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        {/* Audio Player (menggunakan jalur absolut / dari folder public) */}
        <audio ref={audioRef} src="/background-music.mp3" preload="auto"></audio> 

        {/* Ikon Musik */}
        <button onClick={toggleMusic} className={styles.musicPlayer}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Ikon Hamburger / Close */}
        <button onClick={toggleMenu} className={styles.hamburger}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div className={`${styles.overlayMenu} ${isOpen ? styles.open : ''} glass-effect`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link to="hero" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="work" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Work
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu} className={styles.menuLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

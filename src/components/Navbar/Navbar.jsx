import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlay, FaPause } from 'react-icons/fa';
import styles from './Navbar.module.css';
import backgroundMusic from '../../media/background-music.mp3'; // Import file musik

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Ref untuk elemen audio

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
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Pastikan audio dimainkan saat komponen dimuat jika Anda ingin autoplay
    // Namun, autoplay sering diblokir browser, jadi lebih baik via interaksi user
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Atur volume default
      audioRef.current.loop = true; // Set loop untuk musik latar
    }
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        {/* Audio Player (tersembunyi) */}
        <audio ref={audioRef} src={backgroundMusic} preload="auto"></audio>

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

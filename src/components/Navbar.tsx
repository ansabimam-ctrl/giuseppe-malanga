'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">GIUSEPPE MALANGA</Link>
      </div>
      
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.navLinks}>
        <li><Link href="#home">HOME</Link></li>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#profile">PROFILE</Link></li>
        <li><Link href="#work">WORK</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="#home" onClick={toggleMenu}>HOME</Link></li>
          <li><Link href="#about" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link href="#profile" onClick={toggleMenu}>PROFILE</Link></li>
          <li><Link href="#work" onClick={toggleMenu}>WORK</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

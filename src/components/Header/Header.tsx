import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import nfLogo from '../../assets/images/nf-logo.png';

const Header: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <img 
            src={nfLogo}
            alt="NF Logo" 
            className={styles.logo}
          />
          <Link to="/" className={styles.brandName}>
            ReAlice
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link to="/media" className={styles.navLink}>ニュース</Link>
          <Link to="/event" className={styles.navLink}>社内Blog</Link>
          <Link to="/recruiter" className={styles.navLink}>採用担当者の方はこちら</Link>
          <Link to="/login" className={styles.loginButton}>ログイン</Link>
          <a href="#application-form" 
             onClick={scrollToForm} 
             className={styles.registerButton}>
            応募する
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
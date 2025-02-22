import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Company Logo
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>ホーム</Link>
          <Link to="/positions" className={styles.navLink}>募集職種</Link>
        </nav>
      </div>
    </header>
  );
}; 
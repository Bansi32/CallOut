import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
export default function Navigation() {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" className={styles.link}>
        <img src="/images/Emoji.png" alt="logo" />
        <span className={styles.logoText}>Call Out</span>
      </Link>
    </nav>
  )
}

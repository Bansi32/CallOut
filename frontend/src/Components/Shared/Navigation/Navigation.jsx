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
      <div className="links">
        <Link className={styles.blogs} to="/blogs">Blogs</Link>
        <Link className={styles.logout} to='/logout'>Logout</Link>
      </div>
    </nav>
  )
}

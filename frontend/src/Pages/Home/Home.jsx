import React from 'react';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../Components/Shared/Card/Card';
import Button from '../../Components/Shared/Button/Button';

export default function Home() {
  const navigate = useNavigate();

  function startRegister() {
    navigate('/authenticate');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Call Out !" icon="g">
        <p className={styles.text}>
        We are working to get Call Out ready for everyone!
        As of now we are supporting only Indian numbers as we are on testing mode to check if nothing breaks :) 
      </p>
        <Button onClick={startRegister} title="Ready to Go!" text="Next"></Button>
      <div className={styles.link}>
        <span>Have an invite text?</span>
        <Link className={styles.linkStyle}to="/login">LogIn</Link>
      </div>
     </Card> 
    </div>
  )
}

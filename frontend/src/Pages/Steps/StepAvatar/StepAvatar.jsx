import React from 'react';
import Card from '../../../Components/Shared/Card/Card';
import Button from '../../../Components/Shared/Button/Button';
import style from './StepAvatar.module.css';
import { useSelector } from 'react-redux';
import styles from '../../../Pages/Home/Home.module.css';

export default function StepAvatar({onNext}) {
  const { name } = useSelector((state)=>state.activate);
  function submit() {}
  return (
    <>
    <div className={styles.cardWrapper}>
      <Card title={`Hello, ${name}!`} icon="monkey">
        <p className={style.subheading}>Your Profile Photo</p>
        <div>
          <Button onClick={submit}>Next</Button>
        </div>
      </Card>
    </div>
    </>    
  );
};

import React, { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css';

const StepPhoneEmailMap = {
  phone: Phone,
  email:Email
}

export default function StepPhoneEmail({onNext}) {
  let [type, setType] = useState('phone');
  const Type = StepPhoneEmailMap[type];
    return (
      <>
        <div className={styles.cardWrapper}>
          <div>
            <div className={styles.buttonWrapper}>
              <button  className={`${styles.tabButton} ${type==='phone'? styles.active:''}`} onClick={() => { setType('phone') }}>
                <img src="/images/phon.png" alt="phone" />
              </button>
              <button className={`${styles.tabButton} ${type==='email'? styles.active:''}`} onClick={() => { setType('email') }}>
                <img src="/images/email.png" alt="email" />
              </button>
            </div>
           {<Type onNext={onNext}/>}
          </div>
        </div>
      </>
      
  )
}

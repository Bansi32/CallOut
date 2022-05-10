import React from 'react'
import styles from './Button.module.css';

export default function Button({text,onClick}) {
  return (
    <div >
        <button onClick={onClick} className={styles.button}> 
              <span>{text}</span>
          <img src="/images/Vector.png" alt="forward arrow" />
        </button>
      </div>
  )
}

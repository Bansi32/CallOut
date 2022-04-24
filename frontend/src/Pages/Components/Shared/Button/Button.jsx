import React from 'react'
import styles from './Button.module.css';

export default function Button({title,onClick}) {
  return (
    <div >
        <button onClick={onClick} className={styles.button}> 
              <span>{ title}</span>
          <img src="/images/Vector.png" alt="forward arrow" />
        </button>
      </div>
  )
}

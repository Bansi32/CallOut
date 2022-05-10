import React from 'react'
import styles from './TextInput.module.css';

export default function TextInput(props) {
  return (
      <div>
          <input className={styles.input} type="text" {...props} />
    </div>
  )
}

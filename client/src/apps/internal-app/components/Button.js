import React from 'react'
import styles from './css/Button.module.css'

const Button = ({title, onClick, style}) => {
  return (
    <div style={style} className={styles.Button}>
      <input 
        type='submit' 
        value={title}
        onClick={onClick}
      />
    </div>
  )
}

export default Button
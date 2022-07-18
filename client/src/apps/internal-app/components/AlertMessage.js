import React from 'react'
import styles from './css/AlertMessage.module.css'

const AlertMessage = ({error, sign}) => {
  return (
    <div className={styles.AlertMessage}>
        <p id={sign ? styles.positive : styles.negative}>{error}</p>
    </div>
  )
}

export default AlertMessage;
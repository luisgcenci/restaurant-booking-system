import React from 'react'
import styles from './css/CompanyInfo.module.css'

const CompanyInfo = ({logo, name}) => {
  return (
    <>
      <div className={styles.Image}>
        <img src={logo} alt='Logo'/>
      </div>
      <div className={styles.Name}>
        <p>{name}</p>
      </div>
    </>
  )
}

export default CompanyInfo
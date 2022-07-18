import React from 'react'
import styles from './css/UserInfo.module.css'

const UserInfo = ({avatar, name, email}) => {
  return (
    <>
      <div className={styles.Avatar}>
        <img src={avatar} alt='Avatar'/>
      </div>
      <div className={styles.Info}>
        <p>{name}</p>
        <p id={styles.email}>{email}</p>
      </div>
    </>
  )
}

export default UserInfo
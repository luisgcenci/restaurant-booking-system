import React from 'react'
import styles from './css/UserInfo.module.css'
import Button from './Button'
import { useAppDispatch } from 'hooks/hooks'
import { clearUserStates } from 'store/features/userSlice'
import { clearReservationStates } from 'store/features/reservationSlice'

const UserInfo = ({avatar, name, email}) => {
  
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    dispatch(clearReservationStates());
    dispatch(clearUserStates());
  }

  return (
    <>
      <div className={styles.Avatar}>
        <img src={avatar} alt='Avatar'/>
      </div>
      <div className={styles.Info}>
        <p>{name}</p>
        <p id={styles.email}>{email}</p>
        <div className={styles.LogOut}>
          <Button
            title='logout'
            onClick={handleLogOut}
          />
        </div>
      </div>
    </>
  )
}

export default UserInfo
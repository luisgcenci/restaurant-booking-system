import React from 'react'
import styles from './css/NavBar.module.css'
import avatar from 'public/sidebar/avatar.png'
import logo from 'public/sidebar/logo.png'
import { FaHome } from 'react-icons/fa';
import { MdRestaurant } from 'react-icons/md'
import { IoSettings } from 'react-icons/io5'
import CompanyInfo from '../components/CompanyInfo';
import NavBarItem from '../components/NavBarItem';
import UserInfo from '../components/UserInfo';
import { useAppSelector } from 'hooks/hooks';

const NavBar = () => {

  const userEmail = useAppSelector((state) => state.user.username);

  return (
    <div className={styles.NavBar}>
      <div className={styles.Company}>
        <CompanyInfo
          logo={logo}
          name='The Little Eatery'
        />
      </div>
      <div className={styles.Items}>
        <NavBarItem 
          ItemIcon={FaHome}
          linkTo='/home'
          text='Home'
        />
        <NavBarItem 
          ItemIcon={MdRestaurant}
          linkTo='/booking'
          text='Reserve Table'
        />
      </div>
      <div className={styles.BottomItems}>
        <NavBarItem 
          ItemIcon={IoSettings}
          linkTo='/settings'
          text='Settings'
        />
      </div>
      <div className={styles.User}>
        <UserInfo
          avatar={avatar}
          name='Brooklyn Simmons'
          email={userEmail}
        />
      </div>
    </div>
  )
}

export default NavBar
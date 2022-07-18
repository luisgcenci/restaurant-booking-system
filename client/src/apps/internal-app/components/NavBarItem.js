import React from 'react'
import styles from './css/NavBarItem.module.css'
import { Link } from 'react-router-dom';

const NavBarItem = ({ItemIcon, linkTo, text}) => {
  return (
    <Link to={linkTo} className={styles.Item}>
      <ItemIcon className={styles.Icon}/>
      <p>{text}</p>
    </Link>
  )
}

export default NavBarItem;
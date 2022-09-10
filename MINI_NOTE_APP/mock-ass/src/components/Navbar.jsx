import React from 'react'
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";


export const Navbar = () => {
 
  return (
    <div className={styles.nav}>
      <Link to='/' className={styles.page}><h3>Home</h3></Link>
     
    </div>
  )
}

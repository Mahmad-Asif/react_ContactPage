import React from 'react'
import styles from "./Navigation.module.css"

function Navigation() {
  return (
   <nav className={ ` ${styles.nav} container`}>
    <div>
        <img src="./images/logo.png" alt="a logo of website" />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
    </ul>
   </nav>
  )
}

export default Navigation
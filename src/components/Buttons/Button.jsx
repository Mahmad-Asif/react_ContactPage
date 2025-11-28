import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from  "./Button.module.css"


function Button({text,icon , isoutline}) {
  return (
  <button className={isoutline ? styles.outline_btn   : styles.primary_btn}>



    {icon}
    {text}




  
  </button>
  
  )
}

export default Button
//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import styles from './404PageNotFound.module.css'


//********************COMPONENT BEGINS***********************/
export default function PageNotFound() {
  return (
    <div className={styles.outer_container}>
        <p className={styles.title}>404</p>
        <p className={styles.subheading}>Oops! There must be a bug in the system. Your page cannot be found</p>
        
    </div>
  )
}

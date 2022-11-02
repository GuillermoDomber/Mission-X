//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from 'react'
import styles from './DashboardSidebar.module.css'



//************************************SIDEBAR BUTTON COMPONENT BEGINS*******************************************************/
export default function DashboardSidebar_Button(props) {
  
  return (
    
// The displayedHeroContent props is passed down from the closest common component which is the student dashboard and the teacher dashboard
//This useState is taking the properties of the current button being clicked (which includes the component that will be rendered onClick)
    <div id={props.id} className={`${styles.sidebar_button} ${props.displayedHeroContent.name === props.name && styles.sidebar_button_clicked}`} onClick={() =>{
        props.setDisplayedHeroContent({
          id: props.id,
          name: props.name,
          img: props.img,
          imgSelected: props.imgSelected,
          text: props.text,
          componentToDisplay: props.componentToDisplay,
        })}}>

        {props.displayedHeroContent.name === props.name ? <img src={props.imgSelected} className={styles.sidebar_button_image} /> : <img src={props.img} className={styles.sidebar_button_image}/>}
        <p className={styles.sidebar_text}>{props.text}</p>
      </div>
  )
}

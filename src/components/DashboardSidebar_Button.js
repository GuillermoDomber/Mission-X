import React from 'react'
import styles from './DashboardSidebar.module.css'

export default function DashboardSidebar_Button(props) {
  return (
    // <div>DashboardSidebar_Button</div>

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

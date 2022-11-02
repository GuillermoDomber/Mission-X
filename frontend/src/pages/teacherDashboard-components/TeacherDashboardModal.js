//-----------------PACKAGE IMPORTS AND CSS--------------------//
import React from "react";
import styles from "./TeacherDashboardModal.module.css";


//props are being pass in from the teacher dashboard submissions page
export default function Modal(props) {
  return (
    // This onClick will cause the modal to close when clicking on the background
    <div className={styles.modalBackground} onClick={() => {props.setOpenModal(false);}}>
        
      <div className={styles.modalContainer}>

           {/* This onClick will cause the modal to close when clicking on the image/modal itself */}
          <img src={props.picPath} onClick={() => {props.setOpenModal(false);}}/>

      </div>
    </div>
  );
}


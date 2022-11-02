// import React from "react";
// import styles from "./TeacherDashboardModal.module.css";

// export default function Modal(props) {


//   return (
//     <div className={props.setOpenModal === false ? styles.modalBackground : `${styles.modalBackground}`} onClick={() => {
//         props.setOpenModal(false);
//       }}>
        
//       <div className={styles.modalContainer}>
        
//           <img src={props.picPath} onClick={() => {
//               props.setOpenModal(false);
//             }}/>

//       </div>
//     </div>
//   );
// }



import React from "react";
import styles from "./TeacherDashboardModal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.modalBackground} onClick={() => {
        props.setOpenModal(false);
      }}>
        
      <div className={styles.modalContainer}>
        
          <img src={props.picPath} onClick={() => {
              props.setOpenModal(false);
            }}/>

      </div>
    </div>
  );
}


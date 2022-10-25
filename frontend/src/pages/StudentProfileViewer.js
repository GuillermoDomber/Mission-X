import HeaderJG from "./HeaderJg/HeaderJg";
import styles from "./StudentProfileViewer.module.css";
import kidImg from "../assets/libPhoto/RawiriFletcher.png";
import Edit from "../assets/libPhoto/EditProfile.jpg";
import Change from "../assets/libPhoto/ChangePhoto.jpg";
import { Link } from "react-router-dom";



export default function StudentProfileViewer() {
  return (
    <div>
      <HeaderJG></HeaderJG>
      <div className={styles.mainBody}>
        <div className={styles.leftRight}>
          <div className={styles.leftBody}>
            <img src={kidImg} className={styles.kidImg} alt='kid'></img>

            <img src={Edit} className={styles.button1}alt='edit'></img>
            <img src={Change} className={styles.button2}alt='change'></img>
          </div>
          <div className={styles.rightBody}>
            <h1>Rawiri Fletcher</h1>
            <div className={styles.bottomContent}>
              <div className={styles.leftTitle}>
             
                <p className={styles.pTag}>School</p>
                <p className={styles.pTag}>Teacher</p>
                <p className={styles.pTag}>Course</p>
                <p className={styles.pTag}>Date of Birth</p>
                <p className={styles.pTag}>Contact No</p>
                <p className={styles.pTag}>Email Address</p>
               
              </div>
              <div className={styles.rightTitle}>
           
                <p className={styles.pTag}>Homai School</p>
                <p className={styles.pTag}>Jasmina Salvador</p>
                <p className={styles.pTag}>Beginner</p>
                <p className={styles.pTag}>25 June 2010</p>
                <p className={styles.pTag}>022 524 63 99</p>
                <p className={styles.pTag}>fletchy.r@gmail.com</p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backToProject}>
        <button className={styles.btp} ><Link className={styles.link} to='/StudentProjectLibrary'>BACK TO PROJECTS</Link></button>
      </div>
    </div>
  );
}

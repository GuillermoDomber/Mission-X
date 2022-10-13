import HeaderJG from "./HeaderJg";
import styles from "./StudentProfileViewer.module.css";
import kidImg from "../libPhoto/RawiriFletcher.png";
import Edit from "../libPhoto/EditProfile.jpg";
import Change from "../libPhoto/ChangePhoto.jpg";
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
                <p>School</p>
                <p>Teacher</p>
                <p>Course</p>
                <p>Date of Birth</p>
                <p>Contact No</p>
                <p>Email Address</p>
              </div>
              <div className={styles.rightTitle}>
                <p>Homai School</p>
                <p>Jasmina Salvador</p>
                <p>Beginner</p>
                <p>25 June 2010</p>
                <p>022 524 63 99</p>
                <p>fletchy.r@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backToProject}>
        <button className={styles.btp} ><Link className={styles.link} to='/'>BACK TO PROJECTS</Link></button>
      </div>
    </div>
  );
}

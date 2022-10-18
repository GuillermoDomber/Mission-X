import styles from "./ProjectsLibraryJG.module.css";

export default function ProjectsLibraryJG() {





  return (
    <div className={styles.rightSide}>
      <div className={styles.topButtons}>
        <div className={styles.leftButtons}>
          <button className={styles.begBtn}>BEGINNER</button>
          <button className={styles.intBtn}>INTERMEDIATE</button>
          <button className={styles.advBtn}>ADVANCED</button>
        </div>
        <div className={styles.rightButton}>
          <span className={styles.show}>SHOW</span>
          <button className={styles.number25}>25</button>
          <button className={styles.number50}>50</button>
          <button className={styles.number100}>100</button>
        </div>
      </div>

      <div className={styles.bottomProjects}>



      </div>
      </div>
  );
}

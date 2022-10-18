import styles from "./LeftsideStudProjJg.module.css";
export default function LeftSideStudProjJg() {
  return (
    <div className={styles.leftside}>
      

      <p className={styles.subscription}>SUBSCRIPTION</p>
      <hr></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span>Free</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Premium</span>
      </div>

      <p className={styles.category}>ACTIVITY TYPE</p>
      <hr></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span>Animation</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Game</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Chatbot</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Augmented Reality</span>
      </div>

      <p className={styles.category}>YEAR LEVEL</p>
      <hr></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span>1 - 4</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>5 - 6</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>7 - 8</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>9 - 13</span>
      </div>
      <p className={styles.category}>SUBJECT MATTER</p>
      <hr></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span>Computer Science</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Maths</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Science</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Language</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Art</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span>Music</span>
      </div>
    </div>
  );
}

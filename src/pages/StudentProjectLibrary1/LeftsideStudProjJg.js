import styles from "./LeftsideStudProjJg.module.css";
export default function LeftSideStudProjJg() {
  return (
    <div className={styles.leftside}>
      

      <p className={styles.subscription}>SUBSCRIPTION</p>
      <hr className={styles.leftsideHR}></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span className={styles.leftSpan}>Free</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Premium</span>
      </div>

      <p className={styles.category}>ACTIVITY TYPE</p>
      <hr className={styles.leftsideHR}></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span className={styles.leftSpan}>Animation</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Game</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Chatbot</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Augmented Reality</span>
      </div>

      <p className={styles.category}>YEAR LEVEL</p>
      <hr className={styles.leftsideHR}></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span className={styles.leftSpan}>1 - 4</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>5 - 6</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>7 - 8</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>9 - 13</span>
      </div>
      <p className={styles.category}>SUBJECT MATTER</p>
      <hr className={styles.leftsideHR}></hr>
      <div>
        <input type="checkbox" className={styles.checkTop}></input>
        <span className={styles.leftSpan}>Computer Science</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Maths</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Science</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Language</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Art</span>
      </div>
      <div>
        <input type="checkbox" className={styles.checkBot}></input>
        <span className={styles.leftSpan}>Music</span>
      </div>
    </div>
  );
}

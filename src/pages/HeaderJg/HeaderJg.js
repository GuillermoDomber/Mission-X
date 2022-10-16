import styles from "./HeaderJg.module.css";
import logo from "../../assets/libPhoto/logo.png";
import Mflag from "../../assets/libPhoto/Mflag.jpg";
import NzFlag from "../../assets/libPhoto/NZFlag.jpg";
import kidImg from "../../assets/libPhoto/RawiriFletcher.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function HeaderJG() {
  const [show, setshow] = useState(false);

  const showUL = function () {
    setshow(!show);
  };

  window.onclick = function (e) {
    if (!e.target.matches(".dropDown")) {
    }
    console.log(e)
  };

  let menuClose = useRef();
  useEffect(() => {
    let closeDropdown = (e) => {
      if (!menuClose.current.contains(e.target)) {
        setshow(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return()=>{
      document.body.removeEventListener("click",closeDropdown) // go back to this code
    }
  });

  return (
    <div>
      <nav className={styles.navBarHeader}>
        <div className={styles.leftNav}>
          <img src={logo} alt='logo'></img>
        </div>
        <div className={styles.centerNav}>
          <p>HOME</p>
          <p>PROJECTS</p>
          <p>TEACHERS</p>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.topRight}>
            <p className={styles.langText}>LANG</p>

            <img src={NzFlag} alt='nzflag' ></img>
            <img src={Mflag} alt='mflag'></img>
          </div>

          <div onClick={showUL} className={styles.downRight} ref={menuClose}>
         
              <img className={styles.kidPhoto} src={kidImg} alt='kid' ></img>
           
              <p className={styles.Rflet}>RAWIRI FLETCHER</p>
              {show === true ? (
              <ul className={styles.dropDown}>
                <li><Link className={styles.link} to='/StudentProfileViewer'>My Profile</Link></li>
                <li>Settings</li>
                <li>Log out</li>
              </ul>
            ) : (
              ""
            )}
            
          </div>
        </div>
      </nav>
    </div>
  );
}

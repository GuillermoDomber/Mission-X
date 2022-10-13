import HeaderJg from "./JervinComp/HeaderJg";
import LeftSideStudProjJg from "./JervinComp/LeftsideStudProjJg";
import ProjectTitleJG from "./JervinComp/ProjectsTitleJG";
import ProjectsLibraryJG from "./JervinComp/ProjectsLibraryJG";

import styles from "./StudentProjectLibrary.module.css";

export default function StudentProjectLibrary() {
  return (
    
    <div>
      <HeaderJg></HeaderJg>
      <ProjectTitleJG></ProjectTitleJG>
      <div className={styles.mainBody}>
        <LeftSideStudProjJg></LeftSideStudProjJg>
        <ProjectsLibraryJG></ProjectsLibraryJG>
      </div>
    </div>
  )}

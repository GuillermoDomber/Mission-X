import React from 'react'
import HeaderJg from './HeaderJg/HeaderJg'
import ProjectTitleJG from './StudentProjectLibrary1/ProjectsTitleJG'
import styles from './StudentProjectLibrary.module.css'
import LeftSideStudProjJg from './StudentProjectLibrary1/LeftsideStudProjJg'
import ProjectsLibraryJG from './StudentProjectLibrary1/ProjectsLibraryJG'
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
  )
}

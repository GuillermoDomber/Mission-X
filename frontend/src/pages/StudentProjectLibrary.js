import React from 'react'

import HeaderJg from '../components/HeaderJg'
import ProjectTitleJG from './StudentProjectLibrary1/ProjectsTitleJG'
import styles from './StudentProjectLibrary.module.css'
import LeftSideStudProjJg from './StudentProjectLibrary1/LeftsideStudProjJg'
import ProjectsLibraryJG from './StudentProjectLibrary1/ProjectsLibraryJG'
import Footer from '../components/Footer'
export default function StudentProjectLibrary() {
  return (
    <div>  
    <HeaderJg></HeaderJg>
    <ProjectTitleJG></ProjectTitleJG>
    <div className={styles.mainBody}>
      <LeftSideStudProjJg></LeftSideStudProjJg>
      <ProjectsLibraryJG></ProjectsLibraryJG>
    </div>
    <Footer/>
  </div>

  )
}

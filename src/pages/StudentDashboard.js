import React from "react";
import styles from "././studentDashboard-components/StudentDashboard.module.css";
import DashboardNavBar from "../components/DashboardNavBar";
import DashboardSidebar from "../components/DashboardSidebar";
import StudentDashboardHero from "./studentDashboard-components/StudentDashboard-hero";
import DashboardFooter from "../components/DashboardFooter";

export default function StudentDashboard() {
  return (
    <div className={styles.pageContainer}>
      <h1>StudentDashboard</h1>
      <DashboardNavBar />

      <main className={styles.mainHeroSection}>
        <DashboardSidebar />
        <StudentDashboardHero />
      </main>

      <DashboardFooter />
    </div>
  );
}

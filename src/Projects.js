import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";


function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsBlock}>
        <div className={styles.projectsHeader}>Мои проекты</div>
        <div className={styles.myProjects}>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  );
}

export default Projects;

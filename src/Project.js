import React from 'react';
import styles from './Project.module.css';

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src="" alt=""/>
      </div>
      <div className={styles.projectName}>Название проекта</div>
      <div className={styles.projectDescription}>Краткое описание</div>
    </div>
  );
}

export default Project;

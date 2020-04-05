import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsBlock}>
        <div className={styles.skillsHeader}>Мои скиллы</div>
        <div className={styles.mySkills}>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  );
}

export default Skills;

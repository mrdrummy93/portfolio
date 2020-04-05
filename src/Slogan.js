import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
    <div className={styles.sloganBlock}>
      <div className={styles.sloganText}>Рассматриваю варианты удалённой работы</div>
      <button className={styles.hireButton}>Нанять меня</button>
    </div>
    </div>
  );
}

export default Slogan;

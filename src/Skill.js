import React from 'react';
import styles from './Skill.module.css';

function Skill() {
    return (
        <div className={styles.skill}>
            <div className={styles.image}>
                <img src="" alt=""/>
            </div>
            <div className={styles.skillName}>React</div>
            <div className={styles.skillDescription}>Подробное описание навыка</div>
        </div>
    );
}

export default Skill;

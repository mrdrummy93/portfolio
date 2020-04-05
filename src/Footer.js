import React from 'react';
import styles from './Footer.module.css';
import Link from "./Link";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>Евгений Васильев
        <div className={styles.linksBlock}>
          <Link/>
          <Link/>
          <Link/>
          <Link/>
        </div>
        <div className={styles.copyright}>2020 Все права защищены</div>
      </div>
    </div>
  );
}

export default Footer;

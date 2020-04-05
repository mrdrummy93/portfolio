import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsBlock}>Контакты
        <form action='handler.php' className={styles.contactsForm}>
          <input/>
          <input/>
          <textarea/>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

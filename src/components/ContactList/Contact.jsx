import styles from './ContactList.module.css'
import clsx from 'clsx'

import { FaPhoneAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

const Contact = ({ name, number, id, handleDeliteContact }) => {
  return (
    <div className={clsx(styles.contact, 'border')}>
      <div className={styles.content}>
        <div className={styles.row}><FaPhoneAlt className={styles.icon} />{name}</div>
        <div><FaUser className={styles.icon} />{number}</div>
      </div>
      <button onClick={() => handleDeliteContact(id)}>Delete</button>
    </div>
  )
}

export default Contact
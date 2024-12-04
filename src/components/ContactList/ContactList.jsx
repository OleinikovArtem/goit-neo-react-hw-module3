import styles from './ContactList.module.css'

import Contact from './Contact'

const ContactList = ({ contacts, handleDeliteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}><Contact {...contact} handleDeliteContact={handleDeliteContact} /></li>
      ))}
    </ul>
  )
}

export default ContactList
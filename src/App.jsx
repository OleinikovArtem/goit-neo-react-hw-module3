import { useEffect, useState } from 'react'
import { ContactForm, SearchBox, ContactList } from './components'

const CONTACTS_KEY = 'contacts'

const saveContactsToLocalStorage = (contacts = []) => {
  const json = JSON.stringify(contacts)
  localStorage.setItem(CONTACTS_KEY, json)
}

const getContactsFromLocalStorage = () => {
  const json = localStorage.getItem(CONTACTS_KEY)
  if (!json) return [];
  return JSON.parse(json)
}

const App = () => {
  const [contacts, setContacts] = useState(() => getContactsFromLocalStorage() || [])
  const [filteredContacts, setFilteredContacts] = useState([])
  
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleCreateContact = (newContact) => {
    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    saveContactsToLocalStorage(newContacts)
  }

  const handleDeliteContact = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
    saveContactsToLocalStorage(newContacts)
  }

  useEffect(() => {
    const value = search.trim().toLowerCase();
    if (!value) {
      setFilteredContacts(contacts);
      return;
    }
  
    const searchedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  
    setFilteredContacts(searchedContacts);
  }, [search, contacts]);
  
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm handleCreateContact={handleCreateContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} handleDeliteContact={handleDeliteContact} />
    </div>
  )
}

export default App

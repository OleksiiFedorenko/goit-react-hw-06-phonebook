import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import NoContacts from 'components/NoContacts/NoContacts';

// const LSKey = 'contact-list';

////////////////USED
// const initContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
////////////////USED

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem(LSKey);
  //   return savedContacts ? JSON.parse(savedContacts) : initContacts;
  // });

  // const areAnyContacts = Boolean(contacts.length);

  ////////////////NOT NEEDED
  // const [filter, setFilter] = useState('');
  ////////////////NOT NEEDED

  ////////////////USED
  // const normalizedFilter = filter.toLowerCase();
  ////////////////USED

  ////////////////USED
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );
  ////////////////USED

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem(LSKey, JSON.stringify(contacts));
  // }, [contacts]);

  ////////////////USED
  // const addContact = ({ name, number }) => {
  //   const normalizedName = name.toLowerCase();

  //   if (
  //     contacts.some(contact => contact.name.toLowerCase() === normalizedName)
  //   ) {
  //     toast.warn(`${name} is already in contacts.`);
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   setContacts(prevContacts => [...prevContacts, newContact]);
  //   toast.success(`${name} is added to contacts.`);
  //   return true;
  // };
  ////////////////USED

  ////////////////USED
  // const deleteContact = (id, name) => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(updatedContacts);
  //   toast.error(`${name} was removed from contacts.`);
  // };
  ////////////////USED

  return (
    <Container>
      <Title mainTitle="Phonebook" />
      {/* <NewContactForm addContact={addContact} /> */}
      <NewContactForm />
      <Title title="Contacts" />
      {/* <Filter filter={filter} onFilter={setFilter} /> */}
      <Filter />

      {/* {areAnyContacts && filteredContacts.length ? (
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      ) : (
        <NoContacts
          message={areAnyContacts ? `No contacts found` : `No contacts yet`}
        />
      )} */}
      <ContactList />

      <ToastContainer />
    </Container>
  );
};

export default App;
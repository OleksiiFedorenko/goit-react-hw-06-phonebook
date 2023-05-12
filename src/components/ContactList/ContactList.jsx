import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactsContainer } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactsContainer>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ContactsContainer>
  );
};

export default ContactList;

// import { useState } from 'react';
import ContactsList from './Contacts/ContactsList';
import { FormData } from './Contacts/FormData';
import { Filter } from './Contacts/Filter';
import { RiGameFill } from 'react-icons/ri';
import css from './Contacts/Contacts.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterContacts.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = data => {
  //   const { name, number } = data;
  //   for (const contact of contacts) {
  //     if (name.toLowerCase() === contact.name.toLowerCase()) {
  //       alert(`${name} is already in contacts`);
  //       return;
  //     }
  //   }

  //   const newContact = {
  //     id: nanoid(5),
  //     name,
  //     number,
  //   };

  //   setContacts([newContact, ...contacts]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(
  //     contacts.filter(contact => {
  //       return contact.id !== contactId;
  //     })
  //   );
  // };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: '#010101',
      }}
    >
      <div
        style={{
          border: '2px solid tomato',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'yellow',
        }}
      >
        <div className={css.phonebookWrapper}>
          <RiGameFill
            size={25}
            style={{
              fill: 'tomato',
            }}
          />
          <h1>Phonebook</h1>
        </div>
        <FormData />
        <h1
          style={{
            marginBottom: '10px',
          }}
        >
          📃Contacts
        </h1>
        {contacts.length > 0 ? (
          <>
            <Filter filter={filterContacts} />
            <ContactsList items={visibleContacts} />
          </>
        ) : (
          <p>There are no contacts</p>
        )}
      </div>
    </div>
  );
};

import { AppBar } from 'components/AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice/operations';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';
import { RiGameFill } from 'react-icons/ri';
import css from 'components/Contacts/Contacts.module.css';
import { FormData } from 'components/Contacts/FormData';
import { Filter } from 'components/Contacts/Filter';
import ContactsList from 'components/Contacts/ContactsList';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

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
          <AppBar />
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
            <Filter filter={filteredContacts} />
            <ContactsList items={visibleContacts} />
          </>
        ) : (
          <p>There are no contacts</p>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

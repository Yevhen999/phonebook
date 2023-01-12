import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contactsSlice/operations';
import ContactsList from 'components/Contacts/ContactsList';
import { Filter } from 'components/Contacts/Filter';
import { selectIsLoading } from 'redux/selectors';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';
import { FormData } from 'components/Contacts/FormData';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {/* <Filter /> */}
      <div>{isLoading && 'Request in progress...'}</div>
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
    </>
  );
};

export default Contacts;

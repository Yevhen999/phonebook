import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchContacts } from 'redux/contactsSlice/operations';
import ContactsList from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contactsSlice/selectors';
import { selectFilter } from 'redux/filterSlice/selectors';
import { FormData } from 'components/FormData/FormData';

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
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <FormData />
      {contacts.length > 0 ? (
        <>
          <Filter filter={filteredContacts} />
          <ContactsList items={visibleContacts} />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>There are no contacts</p>
      )}
    </HelmetProvider>
  );
};

export default Contacts;

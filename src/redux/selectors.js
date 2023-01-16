import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice/selectors';
import { selectFilter } from './filterSlice/selectors';

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

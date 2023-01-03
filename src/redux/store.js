import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialContacts = [];

export const contactsReducer = (state = initialContacts, action) => {
  // code
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

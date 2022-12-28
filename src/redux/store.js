import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const filters = createAction('myCounter/filters');
console.log(filters.toString());

const myContacts = createReducer([], {});

const myFilter = createReducer('', {});

export const store = configureStore({
  reducer: {
    contacts: myContacts,
    filter: myFilter,
  },
});

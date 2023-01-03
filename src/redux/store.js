import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

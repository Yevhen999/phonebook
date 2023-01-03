import { configureStore, nanoid } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact(state, action) {
      console.log(state);
      console.log(action.payload);

      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

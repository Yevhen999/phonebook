import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialStateContacts = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Виконається в момент старту HTTP-запиту
    // fetchingInProgress(state) {
    //   state.isLoading = true;
    // },
    // // Виконається якщо HTTP-запит завершився успішно
    // fetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = action.payload;
    // },
    // // Виконається якщо HTTP-запит завершився з помилкою
    // fetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // // fetchContacts: {},
    // // addContacts: {},
    // // deleteContacts: {},
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.push(action.payload);
    //   },
    //   prepare(contact) {
    //     return {
    //       payload: {
    //         name: contact.name,
    //         number: contact.number,
    //         id: nanoid(5),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContact,
  deleteContact,
} = contactsSlice.actions;

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from 'redux/contactsSlice/contactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://63b9b4d856043ab3c78d2483.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}/contacts`);
      const data = await response.json();
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     const response = await fetch(`${baseURL}/contacts`);
//     const data = await response.json();
//     console.log('data', data);
//     dispatch(fetchingSuccess(data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }

import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';

const initialStateFilter = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },

  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, (state) => {
      state.filter = '';
    });
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

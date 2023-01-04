import { createSlice } from '@reduxjs/toolkit';

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
});

export const { changeFilter } = filterSlice.actions;

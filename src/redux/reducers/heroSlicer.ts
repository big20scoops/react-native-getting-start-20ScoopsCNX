import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'hero',
  initialState: {
    currentHero: '',
  },
  reducers: {
    selectCurrentHero: (state, action) => {
      state.currentHero = action.payload;
    },
  },
});

export const {selectCurrentHero} = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserPhone: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setUserPhone } = userSlice.actions;

export const selectUserPhone = (state) => state.user.phoneNumber;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: '',
  theme: 'system',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserPhone: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUserTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setUserPhone, setUserTheme } = userSlice.actions;

export const selectUserPhone = (state) => state.user.phoneNumber;
export const selectUserTheme = (state) => state.user.theme;

export default userSlice.reducer;

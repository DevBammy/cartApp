import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { login, logOut } = userSlice.actions;

export default userSlice.reducer; // Corrected the export

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface serverState {
  baseUrl: String,
}

const initialState: serverState = {
  baseUrl: 'https://restaurant-booking-system.ga:5000/',
};

const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
  },
});

export const {
} = serverSlice.actions;

export default serverSlice.reducer;
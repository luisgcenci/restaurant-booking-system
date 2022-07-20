import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface serverState {
  baseUrl: String,
}

const initialState: serverState = {
  baseUrl: 'http://18.219.62.185:5000/',
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
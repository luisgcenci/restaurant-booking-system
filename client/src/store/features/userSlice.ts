import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  username: String,
  auth: Boolean,
  token: String
}

const initialState: userState = {
  username: '',
  auth: false,
  token: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state: any, action: PayloadAction<String>) {
      const st = state;
      st.username = action.payload;
    },
    updateAuth(state: any, action: PayloadAction<String>) {
      const st = state;
      st.auth = action.payload;
    },
    updateToken(state: any, action: PayloadAction<String>) {
      const st = state;
      st.token = action.payload;
    },
    clearUserStates(state: any, action: PayloadAction<String>){
      const st = state;
      st.username = '';
      st.auth = '';
      st.token = '';
    }
  },
});

export const {
  updateUsername,
  updateAuth,
  updateToken,
  clearUserStates
} = userSlice.actions;

export default userSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  username: String
}

const initialState: userState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state: any, action: PayloadAction<String>) {
      const st = state;
      st.username = action.payload;
    },
  },
});

export const {
    updateUsername,
} = userSlice.actions;

export default userSlice.reducer;
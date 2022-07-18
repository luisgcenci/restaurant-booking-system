import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// startDate: startDate.format(),
// endDate: endDate.format(),
// customerFName: customerFirstName,
// customerLName: customerLastName,
// numberOfPeople: numberOfPeople

interface userState {
  firstName: String,
  lastName: String,
  startDate: String,
  endDate: String,
  people: Number
}

const initialState: userState = {
    firstName: '',
    lastName: '',
    startDate: '',
    endDate: '',
    people: 1
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateFirstName(state: any, action: PayloadAction<String>) {
      const st = state;
      st.firstName = action.payload;
    },
    updateLastName(state: any, action: PayloadAction<String>) {
        const st = state;
        st.lastName = action.payload;
    },
    updateStartDate(state: any, action: PayloadAction<String>) {
        const st = state;
        st.startDate = action.payload;
    },
    updateEndDate(state: any, action: PayloadAction<String>) {
        const st = state;
        st.endDate = action.payload;
    },
    updatePeople(state: any, action: PayloadAction<Number>) {
        const st = state;
        st.people = action.payload;
    },
  },
});

export const {
    updateFirstName,
    updateLastName,
    updateStartDate,
    updateEndDate,
    updatePeople
} = userSlice.actions;

export default userSlice.reducer;
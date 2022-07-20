import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface reservationState {
  firstName: String,
  lastName: String,
  startDate: String,
  endDate: String,
  peopleCount: Number
}

const initialState: reservationState = {
  firstName: '',
  lastName: '',
  startDate: '',
  endDate: '',
  peopleCount: 1
};

const reservationSlice = createSlice({
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
    updatePeopleCount(state: any, action: PayloadAction<Number>) {
      const st = state;
      st.peopleCount = action.payload;
    },
    clearReservationStates(state: any, action: PayloadAction<String>){
      const st = state;
      st.firstName = '';
      st.lastName = '';
      st.startDate = '';
      st.endDate = '';
      st.peopleCount = 1;
    }
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateStartDate,
  updateEndDate,
  updatePeopleCount,
  clearReservationStates
} = reservationSlice.actions;

export default reservationSlice.reducer;

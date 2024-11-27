import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // state name and it's Value
};

export const counterSlice = createSlice({
  name: "counter", // Slice name
  initialState,
  // This all are Actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// Actions Exports
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Reducer is export for registering in store
export default counterSlice.reducer;

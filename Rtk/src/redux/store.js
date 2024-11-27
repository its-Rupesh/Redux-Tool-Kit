import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Counter Reducer is created ,store can have many reducer of Different name of which they are created
  },
});

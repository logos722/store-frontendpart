import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./selectors/userSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

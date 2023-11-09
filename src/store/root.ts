import { combineReducers } from "@reduxjs/toolkit";
import jobsSlice from "./slices/jobsSlice";

const rootReducer = combineReducers({
  jobsSlice: jobsSlice,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/userSlice";

const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

import authReducers from "./auth";

export const rootReducer = combineReducers({
  auth: authReducers
});

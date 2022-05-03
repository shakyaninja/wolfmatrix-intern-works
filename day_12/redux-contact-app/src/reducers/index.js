import contactReducer from "./contactReducer";
import { combineReducers } from "@reduxjs/toolkit";
export const RootReducer = combineReducers({
    contact: contactReducer,
});
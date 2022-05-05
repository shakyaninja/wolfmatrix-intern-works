import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/contact/contactSlicer";

export default configureStore({
    reducer: {
        contacts: contactReducer
    }
})
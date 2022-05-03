import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers";

// const defaultState = {
//     name: {
//         name: '',
//         contact: ''
//     }
//     // ,
//     // search: {
//     //     keyword: '',
//     //     search_result: []
//     // },
//     // contact: {
//     //     counter: 0
//     // }
// };

export const store = configureStore({
    reducer: RootReducer
})
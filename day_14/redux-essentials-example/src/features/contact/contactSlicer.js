import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    create: (state,action) => {
        state.push(action.payload);
    },
    remove: (state,action) => {
        var filtered = current(state).filter((data, i) => i !== action.payload);
        return filtered;
    },
    update: (state, action) => {
        // console.log("action:",action);
        var filtered = current(state).filter((data, i) => i !== action.payload.id);
        filtered.push(action.payload.element);
        // console.log("filtered: ",filtered);
        return filtered;
    }
  },
})

export const { create, remove ,update} = contactSlice.actions

export const selectContact = (state) => state.contact

export default contactSlice.reducer

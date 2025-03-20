import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { items: [] };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      const contactExists = state.items.some(item => item.id === action.payload.id);
      if (!contactExists) {
        state.items.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logoutThunk } from "../auth/operations";
import { selectNameFilter } from "../filters/selectors";
import { selectContacts } from "./selectors";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(logoutThunk.fulfilled, () => initialState);
  },
});

const filterContacts = (contacts, filter) => {
  if (!contacts || !contacts.items) [];

  return contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.name.toLowerCase())
  );
};
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],

  (contacts, filter) => filterContacts(contacts, filter)
);

export const contactsReducer = contactsSlice.reducer;

import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import { selectContacts, selectFilter } from "./selectors";

axios.defaults.baseURL = "https://67c1ed1361d8935867e4c1ff.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const filterContacts = (contacts, filter) => {
  if (!contacts || !contacts.items) {
    return [];
  }
  return contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.name.toLowerCase())
  );
};

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => filterContacts(contacts, filter)
);

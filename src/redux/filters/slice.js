import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
const filterSlice = createSlice({
  initialState,
  name: "filter",

  reducers: {
    changeFilter: (state, action) => ({
      ...state,
      name: action.payload,
    }),
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


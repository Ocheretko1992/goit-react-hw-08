import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter;

const initialState = {
  name: "",
};

const filterReducer = createSlice({
  initialState,
  name: "filter",

  reducers: {
    changeFilter: (state, action) => ({
      ...state,
      name: action.payload,
    }),
  },
});

export const { changeFilter } = filterReducer.actions;
export default filterReducer.reducer;

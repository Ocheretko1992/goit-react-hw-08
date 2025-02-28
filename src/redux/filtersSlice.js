import { createSlice } from "@reduxjs/toolkit";

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

export default filterReducer.reducer;
export const { changeFilter } = filterReducer.actions;

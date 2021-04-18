import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "./actions";
import { IItemReducer } from "./types";

const initialState: IItemReducer = {
  loading: false,
  item: null
}

const item = createSlice({
  name: 'hn-item',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getItem.pending, (state, action) => {
      state.loading = true;
      state.item = null;
    });
    builder.addCase(getItem.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getItem.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
  }
});

export default item.reducer;
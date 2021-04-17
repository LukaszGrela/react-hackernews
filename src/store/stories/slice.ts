import { createSlice } from "@reduxjs/toolkit";
import { getStory } from "./actions";
import { IStoriesReducer } from "./types";

const initialState: IStoriesReducer = {
  loading: false,
  stories: [],
};

const stories = createSlice({
  name: "hn-stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getStory.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getStory.fulfilled, (state, action) => {
      state.loading = false;
      state.stories = action.payload;
    });
  },
});

export default stories.reducer;

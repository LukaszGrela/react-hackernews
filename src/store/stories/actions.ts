import { createAsyncThunk } from "@reduxjs/toolkit";
import { stories } from "../../components/Stories/types";
import { IGetStoryActionPayload, IHNStory } from "./types";

const getStory = createAsyncThunk<IHNStory[], IGetStoryActionPayload>(
  "hn-stories/GET",
  async function getStoryActionCreator(arg, { signal }) {
    const path = `https://node-hnapi.herokuapp.com/${stories[arg.story]}`;
    const result = await fetch(path, { signal }).then((r) => r.json());
    console.log(result);
    return result;
  }
);

export { getStory };

export type TActionTypes =
  | typeof getStory.pending
  | typeof getStory.rejected
  | typeof getStory.fulfilled;

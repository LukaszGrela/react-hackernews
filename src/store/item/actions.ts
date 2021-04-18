import { createAsyncThunk } from "@reduxjs/toolkit";
import { IHNItem } from "../../model";

const getItem = createAsyncThunk<IHNItem, string>('hn-item/GET', async function getItemActionCreator(id, { signal }) {
  const path = `https://node-hnapi.herokuapp.com/item/${id}`;
  const result: IHNItem = await fetch(path, { signal }).then((r) => r.json())

  return result;
})
export { getItem };

export type TActionTypes =
  | typeof getItem.pending
  | typeof getItem.rejected
  | typeof getItem.fulfilled;
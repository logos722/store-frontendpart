import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState();

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addchannel: channelsAdapter.addOne,
    addchannels: channelsAdapter.addMany,
    renameChannel: channelsAdapter.updateOne,
  },
});

export const { actions } = channelsSlice;

export default channelsSlice.reducer;

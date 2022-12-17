import { createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import initialState from "./NftsAddresses.state";
import reducers from "./NftsAddresses.reducers";

const NAME = "NftsAddresses";

const NftsAddressesSlice = createSlice({
  name: NAME,
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => ({
      ...state,
      ...action.payload.NftsAddressesModule,
    }));
  },
});

const { reducer } = NftsAddressesSlice;
export const NftsAddressesSliceActions = NftsAddressesSlice.actions;
export { reducer as NftsAddressesModule };

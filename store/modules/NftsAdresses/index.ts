import { createSlice } from "@reduxjs/toolkit";
import initialState from "./NftsAddresses.state";
import reducers from "./NftsAddresses.reducers";

const NAME = "NftsAddresses";

const NftsAddressesSlice = createSlice({
  name: NAME,
  initialState,
  reducers,
});

const { reducer } = NftsAddressesSlice;
export const NftsAddressesSliceActions = NftsAddressesSlice.actions;
export { reducer as NftsAddressesModule };

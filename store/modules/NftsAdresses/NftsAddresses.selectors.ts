// import { createSelector } from "reselect";
import initialState from "./NftsAddresses.state";

export const getNftsAddressesInitialState = (state: any) =>
  state.initialState || initialState;

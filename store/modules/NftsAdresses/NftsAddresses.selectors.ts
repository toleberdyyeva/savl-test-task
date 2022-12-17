import { createSelector } from "reselect";
import initialState from "./NftsAddresses.state";
import { SavlRootState } from "../../index";

const getNftsAddressesInitialState = (state: SavlRootState) =>
  state.initialState || initialState;

export const getNftsByAddressSearchResult = createSelector(
  [getNftsAddressesInitialState],
  (state) => {
    const { request_error, is_loading } = state;
    const images: any[] = [];
    return {
      images,
      is_loading,
      err: {
        isHas: Object.keys(request_error).length > 0,
        errorInfo: request_error,
      },
    };
  }
);

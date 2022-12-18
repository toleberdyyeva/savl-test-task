import { createSelector } from "reselect";
import initialState from "./NftsAddresses.state";
import { SavlRootState } from "../../index";
import { ResolveSavlNftsByAddressesGroupedSecond } from "./helper";

const getNftsAddressesInitialState = (state: SavlRootState) =>
  state.NftsAddressesModule || initialState;

export const getNftsByAddressSearchResult = createSelector(
  [getNftsAddressesInitialState],
  (state) => {
    const { request_error, is_loading, address_used, nfts_data } = state;

    // Если честно не понятный пункт в требованиях по обледенению по ключу

    // const images: any[] = ResolveSavlNftsByAddressesGrouped(
    //   nfts_data,
    //   address_used
    // );
    const nfts_image_data: any[] = ResolveSavlNftsByAddressesGroupedSecond(
      nfts_data.nfts,
      address_used
    );

    return {
      address_used,
      nfts_image_data,
      nfts_image_count: nfts_image_data.length,
      is_empty: !(nfts_image_data.length > 0),
      is_loading,
      err: {
        isHas: Object.keys(request_error).length > 0,
        errorInfo: request_error,
      },
    };
  }
);

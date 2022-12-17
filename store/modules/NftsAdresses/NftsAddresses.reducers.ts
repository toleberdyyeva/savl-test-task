import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  NftsAddressesModuleInitialState,
  // eslint-disable-next-line camelcase
  SavlAPI_GetNftsByAddressPayload,
  SavlAPI_NftByAddressFailedResponse,
  SavlAPI_NftByAddressResponse,
} from "./types";

const GetNftsAddressesInfoInit: CaseReducer<
  NftsAddressesModuleInitialState,
  PayloadAction<SavlAPI_GetNftsByAddressPayload>
> = (state) => {
  state.request_error = {};
  state.is_loading = true;
};

const GetNftsAddressesInfoSucceed: CaseReducer<
  NftsAddressesModuleInitialState,
  PayloadAction<{ data: SavlAPI_NftByAddressResponse["data"] }>
> = (state, { payload }) => {
  state.nfts_data = payload;
  state.is_loading = false;
  state.request_error = {};
};
const GetNftsAddressesInfoFailed: CaseReducer<
  NftsAddressesModuleInitialState,
  PayloadAction<{ data: SavlAPI_NftByAddressFailedResponse["data"] }>
> = (state, { payload }) => {
  state.is_loading = false;
  state.request_error = payload;
};

export default {
  GetNftsAddressesInfoInit,
  GetNftsAddressesInfoSucceed,
  GetNftsAddressesInfoFailed,
};

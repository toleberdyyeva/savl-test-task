import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  AddressModuleInitialState,
  // eslint-disable-next-line camelcase
  SavlAPI_GetNftsByAddressPayload,
  SavlAPI_NftByAddressFailedResponse,
  SavlAPI_NftByAddressResponse,
} from "./types";

const GetAddressInfoInit: CaseReducer<
  AddressModuleInitialState,
  PayloadAction<SavlAPI_GetNftsByAddressPayload>
> = (state) => {
  state.request_error = {};
  state.is_loading = true;
};

const GetAddressInfoSuccess: CaseReducer<
  AddressModuleInitialState,
  PayloadAction<{ data: SavlAPI_NftByAddressResponse["data"] }>
> = (state) => {
  state.is_loading = false;
  state.request_error = {};
};
const GetAddressInfoFailed: CaseReducer<
  AddressModuleInitialState,
  PayloadAction<{ data: SavlAPI_NftByAddressFailedResponse["data"] }>
> = (state, { payload }) => {
  state.is_loading = false;
  state.request_error = payload;
};

export default {
  GetAddressInfoInit,
  GetAddressInfoSuccess,
  GetAddressInfoFailed,
};

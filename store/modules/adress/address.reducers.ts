import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {AddressModuleInitialState, SavlAPI_NftByAddressFailedResponse, SavlAPI_NftByAddressResponse} from "./types";

const GetAddressInfoInit: CaseReducer<AddressModuleInitialState, PayloadAction<{ address: string }>> = (state,{ payload }) => {
    state.request_error = {}
    state.is_loading = true
}

const GetAddressInfoSuccess: CaseReducer<AddressModuleInitialState, PayloadAction<{ data: SavlAPI_NftByAddressResponse['data']}>> = (state) => {
    state.is_loading = false
    state.request_error = {}
}
const GetAddressInfoFailed: CaseReducer<AddressModuleInitialState, PayloadAction<{ data: SavlAPI_NftByAddressFailedResponse['data']}>> = (state, { payload }) => {
    state.is_loading = false
    state.request_error = payload
}

export default { GetAddressInfoInit, GetAddressInfoSuccess , GetAddressInfoFailed}
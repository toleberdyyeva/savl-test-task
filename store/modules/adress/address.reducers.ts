import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {AddressModuleInitialState} from "./types";

const GetAddressInfoInit: CaseReducer<AddressModuleInitialState, PayloadAction<{ address: string }>> = (_,{ payload }) => {
    console.log(payload)
}

export default { GetAddressInfoInit }
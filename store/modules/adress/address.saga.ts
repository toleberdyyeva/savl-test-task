import {all, call, put, takeLatest,} from 'redux-saga/effects';
import { AddressActions } from "./index";
import {getNftByAddress} from "./address.services";
import {SavlAPI_NftByAddressResponse} from "./types";
import {SavlNftsByAddressFormatter} from "./helper";

function* handleGetNftsSearchByAddress(action: any) {
    try {
        const { data }:{ data: SavlAPI_NftByAddressResponse } = yield call(getNftByAddress, { address: '8PdqmeKdn3999sT3jkkx3JRquGqZAfr3m7F4G5NoWkuG'})
        yield put(AddressActions.GetAddressInfoSuccess(data))
    } catch (e) {

    }
}



export default function* () {
    yield all([takeLatest(AddressActions.GetAddressInfoInit, handleGetNftsSearchByAddress)]);
}

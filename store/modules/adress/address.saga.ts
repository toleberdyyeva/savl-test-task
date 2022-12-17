import {all, call, takeLatest,} from 'redux-saga/effects';
import { AddressActions } from "./index";
import {getNftByAddress} from "./address.services";

function* handlerRequestFinishing(action: any) {
    console.log(action)
    try {
        const {data} = yield call(getNftByAddress, { address: '8PdqmeKdn3999sT3jkkx3JRquGqZAfr3m7F4G5NoWkuG'})
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

export default function* () {
    yield all([takeLatest(AddressActions.GetAddressInfoInit, handlerRequestFinishing)]);
}

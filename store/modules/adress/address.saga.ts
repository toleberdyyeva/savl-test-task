import { all, takeLatest, } from 'redux-saga/effects';
import { AddressActions } from "./index";

function* handlerRequestFinishing(action:  any) {
    console.log(action)
}

export default function* () {
    yield all([takeLatest(AddressActions.GetAddressInfoInit, handlerRequestFinishing)]);
}

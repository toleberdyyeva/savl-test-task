import { all, call, put, takeLatest } from "redux-saga/effects";
import { NftsAddressesSliceActions } from "./index";
import { getNftByAddress } from "./NftsAddresses.services";
import {
  SavlAPI_GetNftsByAddressPayload,
  SavlAPI_NftByAddressResponse,
} from "./types";
import { ErrorParse } from "../../../serivces/helper";
// import { SavlNftsByAddressFormatter } from "./helper";

function* handleGetNftsSearchByAddress(action: {
  payload: SavlAPI_GetNftsByAddressPayload;
}) {
  const { payload } = action;
  if (payload?.address?.length > 0) {
    try {
      const { data }: { data: SavlAPI_NftByAddressResponse } = yield call(
        getNftByAddress,
        payload
      );
      yield put(
        NftsAddressesSliceActions.GetNftsAddressesInfoSucceed({
          ...data,
          ...payload,
        })
      );
    } catch (e) {
      const error = ErrorParse(e);
      if (error.isAxiosError) {
        yield put(
          NftsAddressesSliceActions.GetNftsAddressesInfoFailed({
            data: error.response.data,
          })
        );
      }
    }
  } else {
    yield put(
      NftsAddressesSliceActions.GetNftsAddressesInfoFailed({
        data: {
          type: "source - next/savl",
          error: "Address not given",
        },
      })
    );
  }
}

export default function* () {
  yield all([
    takeLatest(
      NftsAddressesSliceActions.GetNftsAddressesInfoInit,
      handleGetNftsSearchByAddress
    ),
  ]);
}

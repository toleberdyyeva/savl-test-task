import {SavlApiInstance} from "../../../serivces";
import {AxiosInstance, AxiosPromise} from "axios";

export const getNftByAddress = (payload: { address: string }): AxiosPromise => {
    const
    return SavlApiInstance({
        method: 'get',
        url: `nft/solana/address/${address}`
    })
}
import {SavlApiInstance} from "../../../serivces";
import {SavlApiService} from "../../../serivces/type";

export const getNftByAddress: SavlApiService = (payload: { address: string }) => {
    const { address } = payload;
    return SavlApiInstance({
        method: 'get',
        url: `nft/solana/address/${address}`
    })
}
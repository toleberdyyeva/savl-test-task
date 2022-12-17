import {SavlAPI_NftByAddressResponse} from "./types";

const AA = '8PdqmeKdn3999sT3jkkx3JRquGqZAfr3m7F4G5NoWkuG'

export const SavlNftsByAddressFormatter = (nfts: SavlAPI_NftByAddressResponse['data']['nfts']) => {
    console.log(nfts.length)
    const a = nfts.reduce((prev, current) => {
        const { updateAuthority } = current;
        const existingItem = prev[updateAuthority]
        console.log(`https://dev.solhall.io/v1/nft/solana/metadata/?nftAddress=${current.address}&url=${current.uri}&holderAddress=${AA}`)
        // console.log(current.address,current.uri, )
        if (existingItem === undefined) {
            return {...prev, [updateAuthority]: [current]}
        } else {
            existingItem.push(current)
            return {...prev, [updateAuthority]: existingItem}
        }
    }, {} as any)

    Object.keys(a).map(key => {
        // console.log(key, a[key].length)
    })
    // console.log(a)
}
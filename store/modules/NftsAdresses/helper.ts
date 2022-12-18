import {
  NftData,
  NftDataWLink,
  SavlAPI_GetNftsByAddressPayload,
  SavlAPI_NftByAddressResponse,
} from "./types";

const imageRequestLinkGenerator = (
  nft: NftData,
  address: SavlAPI_GetNftsByAddressPayload["address"]
) =>
  `https://dev.solhall.io/v1/nft/solana/metadata/?nftAddress=${nft.address}&url=${nft.uri}&holderAddress=${address}`;

export const ResolveSavlNftsByAddressesGrouped = (
  nfts: SavlAPI_NftByAddressResponse["data"]["nfts"],
  address: SavlAPI_GetNftsByAddressPayload["address"]
) => {
  const grouped = (nfts || []).reduce((prev, current) => {
    const { updateAuthority } = current;
    const existingItem = prev[updateAuthority];
    const image_request_url = imageRequestLinkGenerator(current, address);
    if (existingItem === undefined) {
      return {
        ...prev,
        [updateAuthority]: { ...current, image_request_url },
      };
    }
    return { ...prev, [updateAuthority]: { ...current, image_request_url } };
  }, {} as any);
  return Object.values(grouped);
};

//
export const ResolveSavlNftsByAddressesGroupedSecond = (
  nfts: SavlAPI_NftByAddressResponse["data"]["nfts"],
  address: SavlAPI_GetNftsByAddressPayload["address"]
): NftDataWLink[] =>
  (nfts || []).map((item) => ({
    ...item,
    image_request_url: imageRequestLinkGenerator(item, address),
  }));

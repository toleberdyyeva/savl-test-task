import { ResolveSavlNftsByAddressesGroupedSecond } from "./helper";

export interface SavlAPI_GetNftsByAddressPayload {
  address: string;
}

export interface NftData {
  key: number;
  address: string;
  name: string;
  uri: string;
  creators: {
    address: string;
    verified: number;
    share: number;
  }[];
  sellerFeeBasisPoints: number;
  primarySaleHappened: 1;
  isMutable: 1;
  updateAuthority: string;
}

export interface NftDataWLink extends NftData {
  image_request_url: string;
}

export interface SavlAPI_NftByAddressResponse {
  data: {
    blockchain: "solana" | string;
    nfts: NftData[];
  };
}

export interface SavlAPI_NftByAddressFailedResponse {
  data: any;
}

export interface NftsAddressesModuleInitialState {
  nfts_data: SavlAPI_NftByAddressResponse["data"];
  address_used: SavlAPI_GetNftsByAddressPayload["address"];
  request_error: any;
  is_loading: boolean;
}

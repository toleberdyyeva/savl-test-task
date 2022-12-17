export interface AddressModuleInitialState {
  nfts_data: {};
  request_error: any;
  is_loading: boolean;
}

export interface SavlAPI_GetNftsByAddressPayload {
  address: string;
}

export interface SavlAPI_NftByAddressResponse {
  data: {
    blockchain: "solana" | string;
    nfts: {
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
    }[];
  };
}

export interface SavlAPI_NftByAddressFailedResponse {
  data: any;
}

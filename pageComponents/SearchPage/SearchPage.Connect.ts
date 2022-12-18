import { connect, ConnectedProps } from "react-redux";
import { getNftsByAddressSearchResult } from "../../store/modules/NftsAdresses/NftsAddresses.selectors";
import { SavlRootState } from "../../store";
import { NftsAddressesSliceActions } from "../../store/modules/NftsAdresses";

const mapState = (state: SavlRootState) => ({
  searchResult: getNftsByAddressSearchResult(state),
});

const mapDispatch = {
  fetchNftsByAddress: NftsAddressesSliceActions.GetNftsAddressesInfoInit,
};

const SearchPageConnector = connect(mapState, mapDispatch);

export type SearchPageConnectorProps = ConnectedProps<
  typeof SearchPageConnector
>;
export default SearchPageConnector;

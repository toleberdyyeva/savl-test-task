import { connect, ConnectedProps } from "react-redux";
import { getNftsByAddressSearchResult } from "../../store/modules/NftsAdresses/NftsAddresses.selectors";
import { SavlRootState } from "../../store";

const mapState = (state: SavlRootState) => ({
  searchResult: getNftsByAddressSearchResult(state),
});

const SearchPageConnector = connect(mapState, {});

export type SearchPageConnectorProps = ConnectedProps<
  typeof SearchPageConnector
>;
export default SearchPageConnector;

import { connect, ConnectedProps } from "react-redux";

// const mapState = (state: any) => state;
const SearchBlockConnector = connect((state: any) => state, {});
export type SearchBlockConnectorProps = ConnectedProps<
  typeof SearchBlockConnector
>;
export default SearchBlockConnector;

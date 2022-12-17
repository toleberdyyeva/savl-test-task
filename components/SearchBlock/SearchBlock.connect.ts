import { connect, ConnectedProps } from "react-redux";

// const mapState = (state: any) => state;
const SearchBlockConnector = connect(() => {}, {});
export type SearchBlockConnectorProps = ConnectedProps<
  typeof SearchBlockConnector
>;

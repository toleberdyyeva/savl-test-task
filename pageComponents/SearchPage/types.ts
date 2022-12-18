import { SearchPageConnectorProps } from "./SearchPage.Connect";
import { InputSearchProps } from "../../components/InputSearch/types";

export interface SearchPageProps extends SearchPageConnectorProps {}
export interface SearchPageLayoutProps extends SearchPageConnectorProps {
  searchInitialValue: string;
  onSearchValueChanged: InputSearchProps["onSearchValueChange"];
}

import SearchPageServerProps from "./SearchPage.ServerProps";
import SearchPageContainer from "./SearchPage.Container";
import SearchPageConnector from "./SearchPage.Connect";
import { SavlAppPage } from "../types";

export const SearchPage: SavlAppPage = {
  ssr: SearchPageServerProps,
  page: SearchPageConnector(SearchPageContainer),
};

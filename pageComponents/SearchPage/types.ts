import React from "react";
import { SearchPageConnectorProps } from "./SearchPage.Connect";
import { InputSearchProps } from "../../components/InputSearch/types";

export interface SearchPageProps extends SearchPageConnectorProps {}
export interface SearchPageLayoutProps extends SearchPageConnectorProps {
  searchInitialValue: string;
  onSearchValueChange: InputSearchProps["onSearchValueChange"];
  onSearchFormSubmit: (
    e: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => void;
}

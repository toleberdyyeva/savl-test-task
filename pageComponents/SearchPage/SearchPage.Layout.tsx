import React from "react";
import { Container } from "../../components/Container";
import { InputSearch } from "../../components/InputSearch";
import { SearchPageLayoutSearchResult } from "./SearchPage.Layout_SearchResult";
import { SearchPageLayoutProps } from "./types";
import {
  SearchTitle,
  SearchFormBlock,
  SearchButton,
} from "./SearchPage.Styles";

const SearchPageLayout: React.FC<SearchPageLayoutProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { searchInitialValue, onSearchValueChange, onSearchFormSubmit } = props;
  // ---------------------------------------------------------------------- child props section
  const inputProps = {
    value: searchInitialValue,
    onSearchValueChange,
  };
  // ---------------------------------------------------------------------- layout return
  return (
    <Container>
      <SearchTitle>
        Search <span className="highlighted">NFT-collection </span>
        by address
      </SearchTitle>
      <SearchFormBlock onSubmit={onSearchFormSubmit}>
        <InputSearch {...inputProps} />
        <SearchButton onClick={onSearchFormSubmit}>Search</SearchButton>
      </SearchFormBlock>
      <SearchPageLayoutSearchResult {...props} />
    </Container>
  );
};

export default SearchPageLayout;

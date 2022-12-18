import React from "react";
import { Container } from "../../components/Container";
import { InputSearch } from "../../components/InputSearch";
import { SearchPageLayoutProps } from "./types";
import {
  SearchTitle,
  SearchFormBlock,
  SearchButton,
} from "./SearchPage.Styles";

const SearchPageLayout: React.FC<SearchPageLayoutProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { searchInitialValue, onSearchValueChanged } = props;
  // ---------------------------------------------------------------------- child props section
  const inputProps = { value: searchInitialValue, onSearchValueChanged };
  // ---------------------------------------------------------------------- layout return
  return (
    <Container>
      <SearchTitle>
        Search <span className="highlighted">NFT-collection </span>
        by address
      </SearchTitle>
      <SearchFormBlock>
        <InputSearch {...inputProps} />
        <SearchButton>Search</SearchButton>
      </SearchFormBlock>
    </Container>
  );
};

export default SearchPageLayout;

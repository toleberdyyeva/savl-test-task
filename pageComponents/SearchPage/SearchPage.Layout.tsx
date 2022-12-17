import React from "react";
import { Container } from "../../components/Container";
import { InputSearch } from "../../components/InputSearch";
import { SearchPageProps } from "./types";
import {
  SearchTitle,
  SearchFormBlock,
  SearchButton,
} from "./SearchPage.Styles";

const SearchPageLayout: React.FC<SearchPageProps> = (props) => {
  const { ...rest } = props;
  return (
    <Container>
      <SearchTitle>
        Search <span className="highlighted">NFT-collection </span>
        by address
      </SearchTitle>
      <SearchFormBlock>
        <InputSearch />
        <SearchButton>Search</SearchButton>
      </SearchFormBlock>
    </Container>
  );
};

export default SearchPageLayout;

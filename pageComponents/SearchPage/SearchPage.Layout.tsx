import React from "react";
import { SearchPageProps } from "./types";

const SearchPageLayout: React.FC<SearchPageProps> = (props) => {
  const { ...rest } = props;
  console.log(rest);
  return <h1>Hello world!</h1>;
};

export default SearchPageLayout;

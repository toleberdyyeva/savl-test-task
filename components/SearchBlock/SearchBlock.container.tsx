import { NextPage } from "next";
import React from "react";
import { SearchBlockProps } from "./types";
import Layout from "./SearchBlock.layout";

const SearchBlock: NextPage<SearchBlockProps> = (props) => (
  <Layout {...props} />
);

export default SearchBlock;

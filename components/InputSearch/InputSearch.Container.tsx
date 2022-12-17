import React from "react";
import { InputSearchProps } from "./types";
import { InputSearchStyles, InputSearchWrapper } from "./InputSearch.Styles";
import SearchIcon from "./icon.svg";

const InputSearchContainer: React.FC<InputSearchProps> = (props) => (
  <InputSearchWrapper>
    <SearchIcon />
    <InputSearchStyles {...props} />;
  </InputSearchWrapper>
);

export default InputSearchContainer;

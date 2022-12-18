import React from "react";
import { InputSearchLayoutProps } from "./types";
import { InputSearchStyles, InputSearchWrapper } from "./InputSearch.Styles";
import SearchIcon from "./icon.svg";

const InputSearchLayout: React.FC<InputSearchLayoutProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { onWrapperClick, ...inputProps } = props;
  // ---------------------------------------------------------------------- layout return
  return (
    <InputSearchWrapper onClick={onWrapperClick}>
      <SearchIcon />
      <InputSearchStyles {...inputProps} />
    </InputSearchWrapper>
  );
};

export default InputSearchLayout;

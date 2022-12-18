import React from "react";
import { InputSearchLayoutProps } from "./types";
import { InputSearchStyles, InputSearchWrapper } from "./InputSearch.Styles";
import SearchIcon from "./search.svg";

const InputSearchLayout: React.FC<InputSearchLayoutProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { onWrapperClick, ...inputProps } = props;
  // ---------------------------------------------------------------------- layout return
  return (
    <InputSearchWrapper onClick={onWrapperClick}>
      <div className="iconWrapper">
        <SearchIcon />
      </div>
      <InputSearchStyles {...inputProps} />
    </InputSearchWrapper>
  );
};

export default InputSearchLayout;

import React from "react";
import { InputSearchLayoutProps } from "./types";
import { InputSearchStyles, InputSearchWrapper } from "./InputSearch.Styles";
import SearchIcon from "./icons/search.svg";
import CrossIcon from "./icons/cross.svg";

const InputSearchLayout: React.FC<InputSearchLayoutProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { onWrapperClick, showCrossIcon, onCrossIconClick, ...inputProps } =
    props;
  // ---------------------------------------------------------------------- layout return
  return (
    <InputSearchWrapper onClick={onWrapperClick}>
      <div className="iconWrapper">
        <SearchIcon />
      </div>
      <InputSearchStyles {...inputProps} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="crossIconWrapper" onClick={onCrossIconClick}>
        {showCrossIcon && <CrossIcon />}
      </div>
    </InputSearchWrapper>
  );
};

export default InputSearchLayout;

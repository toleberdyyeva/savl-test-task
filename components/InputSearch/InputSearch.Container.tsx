import React, { useEffect } from "react";
import { InputSearchProps } from "./types";
import InputSearchLayout from "./InputSearch.Layout";
import Helpers from "./helper";

const INPUT_ID = "InputSearch-Input";
const InputSearchContainer: React.FC<InputSearchProps> = (props) => {
  // ---------------------------------------------------------------------- props section
  const { value: initialValue = "", onSearchValueChange = () => {} } = props;
  // ---------------------------------------------------------------------- state section
  const [value, setValue] = React.useState<string>(initialValue as string);
  const setInputValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(() => e.target?.value),
    [setValue]
  );
  const showCrossIcon = React.useMemo(() => value.length > 0, [value]);
  const onCrossIconClick = React.useCallback(() => {
    setValue(() => "");
  }, []);
  // ---------------------------------------------------------------------- effect section
  useEffect(() => {
    if (onSearchValueChange) {
      onSearchValueChange(value as string);
    }
  }, [onSearchValueChange, value]);
  // ---------------------------------------------------------------------- child props section
  const inputProps = {
    value,
    placeholder: "Enter an address...",
    id: INPUT_ID,
    onChange: setInputValue,
  };
  const layoutProps = {
    onWrapperClick: Helpers.onWrapperClick(INPUT_ID),
    showCrossIcon,
    onCrossIconClick,
    ...inputProps,
  };
  // ---------------------------------------------------------------------- layout return
  return <InputSearchLayout {...layoutProps} />;
};

export default InputSearchContainer;

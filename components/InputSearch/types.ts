import React, { ReactEventHandler } from "react";

export interface InputSearchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onSearchValueChange?: (value: string) => void;
}
export interface InputSearchLayoutProps
  extends Omit<InputSearchProps, "onSearchValueChange"> {
  onWrapperClick: () => void;
}

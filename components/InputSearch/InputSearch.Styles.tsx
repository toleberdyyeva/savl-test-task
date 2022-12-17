import styled from "styled-components";
import React from "react";
import { FormControlSpacing } from "../common";
import { InputSearchProps } from "./types";

export const InputSearchWrapper: React.FC<any> = styled.div`
  flex: 1 1 auto;
  border: 1px solid #005d84;
  display: flex;
`;

export const InputSearchStyles: React.FC<InputSearchProps> = styled.input<InputSearchProps>`
  width: 100%;
  font-family: inherit;
  background-color: transparent;
  outline: none;
  ${FormControlSpacing};
`;

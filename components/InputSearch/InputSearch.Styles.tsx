import styled from "styled-components";
import React from "react";
import { FormControlSpacing } from "../common";
import { InputSearchProps } from "./types";

export const InputSearchWrapper: React.FC<any> = styled.div`
  cursor: pointer;
  flex: 1 1 auto;
  border: 1px solid #005d84;
  display: flex;
  align-items: center;
  border-radius: 2px;
  .iconWrapper {
    padding-left: 17px;
    padding-right: 8px;
    display: flex;
    align-items: center;
  }
  .crossIconWrapper {
    position: relative;
    padding: 0 13px;
    display: flex;
    align-items: center;
  }
`;

export const InputSearchStyles: React.FC<InputSearchProps> = styled.input<InputSearchProps>`
  width: 100%;
  font-family: inherit;
  border: none;
  color: white;

  background-color: transparent;
  outline: none;
  ${FormControlSpacing};
`;

import styled from "styled-components";
import { Button } from "../../components/Button";

export const SearchTitle = styled("h1")`
  margin: 117px auto 48px;
  line-height: 54px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  color: #f5f8f9;
  span.highlighted {
    color: #14f1ff;
  }
`;

export const SearchFormBlock = styled("div")`
  width: 100%;
  max-width: 659px;
  margin: 0 auto;
  display: flex;
  gap: 19px;
  flex-direction: row;
`;

export const SearchButton = styled(Button)`
  color: #001636;
  background-color: #14f1ff;
  border: none;
  font-size: 0.87rem;
  padding-left: 18.5px;
  padding-right: 18.5px;
  line-height: 1.42rem;
  width: 87px;
  font-weight: 500;
`;

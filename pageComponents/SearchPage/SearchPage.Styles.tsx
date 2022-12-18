import styled, { css } from "styled-components";
import { Button } from "../../components/Button";

const typographyCommon = css`
  line-height: 3.375rem;
  font-size: 2.5rem;
`;

export const SearchTitle = styled("h1")`
  margin: 117px 0 48px;
  ${typographyCommon};
  font-weight: 600;
  text-align: center;
  color: #f5f8f9;
  span.highlighted {
    color: #14f1ff;
  }
`;

export const SearchFormBlock = styled("form")`
  width: 100%;
  max-width: 660px;
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
  line-height: 1.25rem;
  width: 87px;
  font-weight: 500;
  border-radius: 2px;
`;

export const SearchResultWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const ResultTItle = styled("p")`
  color: white;
  width: 100%;
  ${typographyCommon};
  font-weight: 500;
  span.highlighted {
    background: linear-gradient(
      to left,
      #001c1e -21.67%,
      #006089 21.57%,
      #00e0ee 62.15%,
      #effcfd 106.06%
    );
    font-weight: 400;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SearchResultImagesWrapper = styled("div")`
  //background-color: red;
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;

export const NftImage = styled("div")<{
  imageUrl: string;
}>`
  flex-grow: 1;
  //background-color: green;
  width: 33.33%;
  max-width: 33.33%;
  padding: 15px;
  .cardWrapper {
    overflow: hidden;
    border-radius: 4px;
    .name_layer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 26px 25px 16px;
      flex: 1 1 auto;
      background-color: #01122a;
      p {
        margin: 0;
        line-height: 1.375rem;
        font-size: 1rem;
      }
      .iconWrapper {
      }
    }
    .image_layer {
      background-image: ${(props) => `url(${props.imageUrl})`};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding-top: 100%;
    }
  }
`;

import React from "react";
import { SearchPageLayoutProps } from "./types";
import {
  NftImage,
  ResultTItle,
  SearchResultImagesWrapper,
  SearchResultWrapper,
} from "./SearchPage.Styles";
import { NftDataWLink } from "../../store/modules/NftsAdresses/types";

const ErrorBlock: React.FC<SearchPageLayoutProps> = () => <>Error</>;
const ResultBlock: React.FC<SearchPageLayoutProps> = (props) => {
  const { searchResult } = props;
  const { nfts_image_count } = searchResult;

  const ResultImage = React.useCallback(
    (data: NftDataWLink) => (
      <NftImage>
        <div className="image_layer" />
        Hello
      </NftImage>
    ),
    []
  );

  const ResultImages = React.useMemo(() => {
    const { nfts_image_data } = searchResult;
    console.log(nfts_image_data);
    return (
      <SearchResultImagesWrapper>
        {nfts_image_data.map((item) => ResultImage(item))}
      </SearchResultImagesWrapper>
    );
  }, [searchResult]);

  return (
    <>
      <ResultTItle>
        My collections <span className="highlighted">{nfts_image_count}</span>
      </ResultTItle>
      {ResultImages}
    </>
  );
};
const LoadingBlock: React.FC<SearchPageLayoutProps> = () => <>Loading</>;

export const SearchPageLayoutSearchResult: React.FC<SearchPageLayoutProps> = (
  props
) => {
  const { searchResult } = props;

  const Render = React.useMemo(() => {
    const { err, is_loading } = searchResult;
    if (is_loading) {
      return <LoadingBlock {...props} />;
    }
    if (err && err.isHas) {
      return <ErrorBlock {...props} />;
    }
    return <ResultBlock {...props} />;
  }, [props, searchResult]);

  return <SearchResultWrapper>{Render}</SearchResultWrapper>;
};

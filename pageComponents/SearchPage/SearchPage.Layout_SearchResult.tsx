import React, { useEffect } from "react";
import { SearchPageLayoutProps } from "./types";
import {
  NftImage,
  NftImageMock,
  ResultTItle,
  SearchResultImagesWrapper,
  SearchResultWrapper,
} from "./SearchPage.Styles";
import { NftDataWLink } from "../../store/modules/NftsAdresses/types";
import { SavlApiInstance } from "../../serivces";
import ArrowRight from "./icons/arrorRight.svg";
import LoadingIcon from "./icons/packIconLoading.svg";

const ErrorBlock: React.FC<SearchPageLayoutProps> = ({ searchResult }) => (
  <>
    <ResultTItle>Error</ResultTItle>
    <code
      style={{
        color: "rgba(255,255,255,0.6)",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      {JSON.stringify(searchResult.err?.errorInfo, null, 2)}
    </code>
  </>
);

const ResultImage: React.FC<NftDataWLink> = (props: NftDataWLink) => {
  const { image_request_url } = props;

  const [imageUrlInfo, setImageUrlInfo] = React.useState<{
    image: string;
    name: string;
  }>({ image: "", name: "" });

  const [imageUrlError, setImageUrlError] = React.useState<boolean>(false);
  useEffect(() => {
    SavlApiInstance({ url: image_request_url })
      .then((res) => {
        const { name, image } = res.data.data.metadata;
        setImageUrlInfo({ image, name });
      })
      .catch((e) => {
        setImageUrlError(true);
      });
  }, [image_request_url]);

  return (
    <NftImage imageUrl={imageUrlInfo.image}>
      <div className="cardWrapper">
        <div className="image_layer" />
        <div className="name_layer">
          <p>{imageUrlInfo.name}</p>
          <div className="iconWrapper">
            <ArrowRight />
          </div>
        </div>
      </div>
    </NftImage>
  );
};

const ResultBlock: React.FC<SearchPageLayoutProps> = (props) => {
  const { searchResult } = props;
  const { nfts_image_count } = searchResult;

  const ResultImages = React.useMemo(() => {
    const { nfts_image_data } = searchResult;
    return (
      <SearchResultImagesWrapper>
        {nfts_image_data.map((item, index) => (
          <ResultImage {...item} key={index} />
        ))}
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
const LoadingBlock: React.FC<SearchPageLayoutProps> = () => (
  <>
    <ResultTItle>
      <span className="highlighted">Wait a bit…</span>
    </ResultTItle>
    <SearchResultImagesWrapper>
      {[1, 2, 3].map((_, index) => (
        <NftImageMock key={`${index}-loader`}>
          <div className="cardWrapper">
            <LoadingIcon />
          </div>
        </NftImageMock>
      ))}
    </SearchResultImagesWrapper>
  </>
);

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

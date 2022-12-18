import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import SearchPageLayout from "./SearchPage.Layout";
import { SearchPageProps } from "./types";
import { InputSearch } from "../../components/InputSearch";
import { InputSearchProps } from "../../components/InputSearch/types";

const SearchPageContainer: NextPage<SearchPageProps> = (props) => {
  // ---------------------------------------------------------------------- hooks section
  const router = useRouter();
  useEffect(() => {}, [router]);
  // ---------------------------------------------------------------------- state section
  const [searchValue, setSearchValue] = React.useState<string>(
    router?.query?.address as string
  );
  // ---------------------------------------------------------------------- events section
  const onSearchValueChanged: InputSearchProps["onSearchValueChange"] =
    React.useCallback((newValue: string) => {
      console.log(newValue);
      setSearchValue(() => newValue);
    }, []);
  // ---------------------------------------------------------------------- child props section
  const layoutProps = {
    ...props,
    searchInitialValue: searchValue,
    onSearchValueChanged,
  };
  // ---------------------------------------------------------------------- layout return
  return (
    <>
      <Head>
        <title />
      </Head>
      <main>
        <SearchPageLayout {...layoutProps} />
      </main>
    </>
  );
};

export default SearchPageContainer;

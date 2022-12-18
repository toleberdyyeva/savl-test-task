import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import SearchPageLayout from "./SearchPage.Layout";
import { SearchPageProps } from "./types";
import { InputSearchProps } from "../../components/InputSearch/types";

const SearchPageContainer: NextPage<SearchPageProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fetchNftsByAddress } = props;
  // ---------------------------------------------------------------------- hooks section
  const router = useRouter();
  const { query } = router;
  useEffect(() => {}, [router]);

  // ---------------------------------------------------------------------- state section
  const [searchValue, setSearchValue] = React.useState<string>(
    query?.address as string
  );

  useEffect(() => {
    fetchNftsByAddress({ address: query?.address as string });
  }, [fetchNftsByAddress, query]);
  // ---------------------------------------------------------------------- events section
  const onSearchValueChange: InputSearchProps["onSearchValueChange"] =
    React.useCallback((newValue: string) => {
      setSearchValue(() => newValue);
    }, []);

  const onSearchFormSubmit = React.useCallback(
    (e: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
      e.preventDefault();
      router
        .push({ query: { ...query, address: searchValue } }, undefined, {
          shallow: true,
        })
        .then((r) => r);
    },
    [query, router, searchValue]
  );
  // ---------------------------------------------------------------------- child props section
  const layoutProps = {
    ...props,
    searchInitialValue: searchValue,
    onSearchValueChange,
    onSearchFormSubmit,
  };
  // ---------------------------------------------------------------------- layout return
  return (
    <>
      <Head>
        <title />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <SearchPageLayout {...layoutProps} />
      </main>
    </>
  );
};

export default SearchPageContainer;

import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Head from "next/head";
import SearchPageLayout from "./SearchPage.Layout";
import { SearchPageProps } from "./types";

const SearchPageContainer: NextPage<SearchPageProps> = (props) => {
  const router = useRouter();
  useEffect(() => {}, [router]);

  return (
    <>
      <Head>
        <title />
      </Head>
      <main>
        <SearchPageLayout {...props} />
      </main>
    </>
  );
};

export default SearchPageContainer;

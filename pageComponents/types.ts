import { GetServerSideProps, NextPage } from "next";

export interface SavlAppPage {
  ssr: GetServerSideProps<any>;
  page: NextPage;
}

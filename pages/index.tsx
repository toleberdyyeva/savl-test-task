import { SearchPage } from "../pageComponents/SearchPage";

export const getServerSideProps = SearchPage.ssr;
export default SearchPage.page;

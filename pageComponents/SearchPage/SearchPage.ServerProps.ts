import { END } from "redux-saga";
import { StoreWrapper } from "../../store";
import { NftsAddressesSliceActions } from "../../store/modules/NftsAdresses";

const SearchPageServerProps = StoreWrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(
      NftsAddressesSliceActions.GetNftsAddressesInfoInit({
        address: context.query?.address as string,
      })
    );
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
    };
  }
);

export default SearchPageServerProps;

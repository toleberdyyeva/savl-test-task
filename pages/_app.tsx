import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import GlobalStyles from "../styles/globalStyles";
import { StoreWrapper } from "../store";

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = StoreWrapper.useWrappedStore(rest);
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
};

export default App;

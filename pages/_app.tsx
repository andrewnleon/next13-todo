import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";
import Head from "next/head";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return getLayout(
  <>
  <Head>
    <link rel="apple-touch-icon" href="/icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  </>
  );
};
export default App;

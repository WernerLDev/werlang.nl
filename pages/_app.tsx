import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/wfavicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Head from "next/head";
import GlobalStyles from "../styles/global";
// import { ParallaxProvider } from "react-scroll-parallax";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>Belen Miguens</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="TURISMO & FOTOGRAFÍA" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* <div className={` ${bebasneue.variable} ${montserrat.variable} font-sans`}> */}
      <GlobalStyles />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default appWithTranslation(MyApp);

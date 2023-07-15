import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/ui/Layout";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import "../styles/global.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { AppProps } from "next/app";

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next' 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const formattedPath = router.pathname.replace(/\//, "").replace(/-/, " ");
  const [isLoading, setIsLoading] = useState(false);

  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    //TODO: need a handleError method
    router.events.on("routeChangeError", handleComplete);

    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration: 800,
      delay: 200,
      offset: 100,
      easing: "ease",
      once: true,
    });
    AOS.refresh();

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  return getLayout(
    <>
      <Head>
        <title>
          {router.pathname === "/"
            ? "Fabio Viscuso: home"
            : `Fabio Viscuso: ${formattedPath}`}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isLoading ? <LoadingSpinner /> : <></>}
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(App);

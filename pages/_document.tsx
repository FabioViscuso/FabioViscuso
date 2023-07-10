import { Html, Head, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";
import { AppProps } from "next/app";

export default function Document(props: any) {
  const currLocale =
    props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currLocale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

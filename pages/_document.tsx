import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

export default function Document(props) {
    const currLocale = props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    console.log(currLocale)
    return (
        <Html lang={currLocale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

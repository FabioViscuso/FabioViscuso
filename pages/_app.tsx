import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/ui/Layout'
import '../styles/global.css'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'


const App = ({ Component, pageProps }) => {
    const router = useRouter()
    const formattedPath = router.pathname.replace(/\//, '').replace(/-/, ' ');

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Head>
                <title>
                    {router.pathname === '/' ? 'Fabio Viscuso: home' : `Fabio Viscuso: ${formattedPath}`}
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component{...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(App)

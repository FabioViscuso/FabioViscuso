import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/ui/Layout'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    const router = useRouter()
    const formattedPath = router.pathname.replace(/\//, '').replace(/-/, ' ');
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

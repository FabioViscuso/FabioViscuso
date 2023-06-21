import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import Layout from '../components/ui/Layout';
import LoadingSpinner from '../components/navigation/LoadingSpinner';
import '../styles/global.css';

import AOS from 'aos';
import "aos/dist/aos.css";

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const formattedPath = router.pathname.replace(/\//, '').replace(/-/, ' ');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setIsLoading(true);
        const handleComplete = () => setIsLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        console.log("on useeffect", isLoading)

            AOS.init({
                duration: 800,     // Animation duration in milliseconds
                delay: 200,        // Delay before animations start in milliseconds
                offset: 100,       // Offset (in pixels) from the original trigger point
                easing: 'ease',    // Easing function
                once: true,        // Only animate elements once (on scroll)
            });
            AOS.refresh();

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
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
                {isLoading && <LoadingSpinner/>}
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(App)

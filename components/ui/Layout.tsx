import Head from 'next/head'
import Footer from '../navigation/Footer'
import Navbar from '../navigation/Navbar'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        "Hello! That's me!",
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content="Hello! That's me!" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className='p-10 h-full flex flex-col justify-between'>
                <>{children}</>
                <Footer />
            </div>
        </>
    )
}

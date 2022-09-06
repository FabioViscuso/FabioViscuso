import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classes from './Layout.module.css'
import Navbar from './navigation/Navbar'

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
            <main>{children}</main>
            <footer>Copyright Fabio Viscuso 2022</footer>
        </>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classes from './Layout.module.css'
import classesUtils from '../styles/utils.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
    home?: boolean
}

const name = 'Fabio Viscuso';
export const siteTitle = 'That\'s me!';

export default function Layout({ children, home = false }: Props) {
    return (
        <div className={classes.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={classes.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/me.jpg"
                            className={classesUtils.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={classesUtils.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/me.jpg"
                                    className={classesUtils.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={classesUtils.headingLg}>
                            <Link href="/">
                                <a className={classesUtils.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={classes.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

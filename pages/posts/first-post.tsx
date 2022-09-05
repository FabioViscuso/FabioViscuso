import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First post!</title>
            </Head>

            <Layout home={false}>
                <h1>First post!</h1>
                <Link href={"/"}><button>Go back home</button></Link>
            </Layout>
        </>
    )
}

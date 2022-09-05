import { getPostsIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import Layout from '../../components/Layout';
import Head from 'next/head';
import classesUtils from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={classesUtils.headingXl}>{postData.title}</h1>
                <div className={classesUtils.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPostsIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

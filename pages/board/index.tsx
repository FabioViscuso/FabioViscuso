import { MongoClient } from "mongodb";
import { GetServerSideProps } from "next";
import Postit from "../../components/ui/PostIt";

// needed for i18next functionality with SSG / SSR
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import translation function
import { useTranslation, Trans } from 'next-i18next';
import Head from "next/head";

export default function Board({ postits, ...props }) {
    const { t } = useTranslation('page-board')
    return (
        <>
            <Head>
                <meta name="description" content="post-it board page" />
            </Head>
            <main className="px-10 pt-24 md:pt-10 md:pr-52">
                <h1 className="text-6xl text-left md:text-center mb-10 main-text-gradient">{t('board-header')}</h1>
                <h2 className="text-3xl text-left md:text-center mb-14">{t('board-subhead')}</h2>
                <div className="postit-grid justify-items-center gap-8 ">
                    {postits.map(postits => (
                        <Postit
                            key={postits.id}
                            creator={postits.creator}
                            title={postits.title}
                            content={postits.content}
                            color={postits.color}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const collection = db.collection('postits');
    const postits = await collection.find().toArray();
    client.close()

    return {
        props: {
            postits: postits.map(postit => ({
                title: postit.title,
                creator: postit.creator,
                content: postit.content,
                color: postit.color,
                id: postit._id.toString()
            })),
            ...(await serverSideTranslations(locale, ['common', 'page-board'])),
        }
    }
}

import { MongoClient } from "mongodb";
import Postit from "../../components/ui/PostIt";

export default function Board({ postits }) {
    return (
        <div className="flex flex-wrap gap-4">
            {postits.map(postits => (
                <Postit
                    key={postits.id}
                    creator={postits.creator}
                    title={postits.title}
                    date={postits.date}
                    content={postits.content}
                />
            ))}
        </div>
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`);
    const db = client.db();

    const collection = db.collection('postits');
    const postits = await collection.find().toArray();
    client.close()

    return {
        props: {
            postits: postits.map(postit => ({
                title: postit.title,
                creator: postit.creator,
                date: postit.date,
                content: postit.content,
                id: postit._id.toString()
            }))
        },
        revalidate: 1
    }
}

import { MongoClient } from "mongodb";
import Postit, {
  PostItType,
} from "../../../components/postit-board-page/PostIt";

// import translation function
import { useTranslation } from "../../i18n";

export default async function Page({
  params: { lng },
}: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "page-board", {});

  const getPostits = async () => {
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const collection = db.collection("postits");
    const postits = await collection.find().toArray();
    client.close();

    const formattedPostits = postits.map((postit) => ({
      title: postit.title,
      creator: postit.creator,
      content: postit.content,
      color: postit.color,
      id: postit._id.toString(),
    }))

    return formattedPostits;
  };

  const postits = await getPostits();

  return (
    <main className="bg-notebook px-10 pt-24 md:pt-10 md:pr-52 bg-dark">
      <h1 className="font-indieFlower text-8xl text-center mb-10 drop-shadow-[0px_0px_1px_rgb(0,0,0)]">
        {t("board-header")}
      </h1>
      <p className="font-indieFlower text-3xl text-center mb-14">
        {t("board-subhead")}
      </p>
      <div className="postit-grid justify-items-center gap-8 ">
        {postits.map((postits: any) => (
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
  );
}

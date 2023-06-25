// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
    );
    const db = client.db();

    const collection = db.collection("postits");
    const result = await collection.insertOne(data);
    client.close();

    res.status(201).json({ message: "postit inserted", data: result });
  }
}

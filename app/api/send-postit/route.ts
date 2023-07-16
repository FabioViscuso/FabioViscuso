import { MongoClient } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const collection = db.collection("postits");
  const result = await collection.insertOne(body!);
  client.close();

  return new Response(JSON.stringify({ message: "postit inserted", data: result }));
}

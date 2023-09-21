import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const data = await req.json();

    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db('test');
    const collection = db.collection("postits");
    const insertion = await collection.insertOne(data!);

    return NextResponse.json({ok: insertion.acknowledged})
  }
}

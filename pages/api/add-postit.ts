// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://fabio:geronimo@cluster0.potbyzj.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();

        const collection = db.collection('postits')
        const result = await collection.insertOne(data)
        client.close()

        res.status(201).json({ message: 'postit inserted', data: result })
    }
}


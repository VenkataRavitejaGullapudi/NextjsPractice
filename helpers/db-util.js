import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const dbName = "EventsAppDb"
  const client = await MongoClient.connect(
    `mongodb://admin:raviadminofmongodb@cluster0-shard-00-00.jjgyu.mongodb.net:27017,cluster0-shard-00-01.jjgyu.mongodb.net:27017,cluster0-shard-00-02.jjgyu.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-r4qq28-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useUnifiedTopology: true } 
    );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents;
}
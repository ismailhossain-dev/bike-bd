import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_NAME;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// stripe data mongodb te save na hower karone async use kora holo

export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};



import {MongoClient} from 'mongodb';

const getMeetupsHandler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const meetupListCollection = db.collection('meetups');

    const result = await meetupListCollection.find().toArray();

    res.status(201).json({
      message: 'success',
      data: result
    });

    client.close();
  }
};

export default getMeetupsHandler;

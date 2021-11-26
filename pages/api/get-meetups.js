import {MongoClient} from 'mongodb';
// /api/new-meetup

const getMeetupsHandler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const meetupListCollection = db.collection('meetups');

    const result = await meetupListCollection.find().toArray();

    // console.log('testing api', result);

    client.close();

    res.status(201).json({
      message: 'success',
      data: result
    });
  }
};

export default getMeetupsHandler;

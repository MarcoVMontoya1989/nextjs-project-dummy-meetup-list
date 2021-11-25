// /api/new-meetup
import {MongoClient} from 'mongodb';

const newMeetupHandler = async (req, res, next) => {
  if (req.method === 'POST') {
    // const data = JSON.parse(req.body);
    const data = req.body;

    // console.log('triggering testing');

    // const {title, image, address, description} = data;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const meetupListCollection = db.collection('meetups');

    const resultCollection = await meetupListCollection.insertOne(data);

    // console.log(resultCollection);

    client.close();

    res.status(201).json({
      message: 'added to collection',
    });
  }
}

export default newMeetupHandler;
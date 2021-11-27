import {MongoClient, ObjectId} from 'mongodb';

const getSingleMeetup = async (req, res) => {

  console.log('start fetch');

  if (req.method === 'POST') {

    const toSearchMeetup = req.body;

    console.log(toSearchMeetup);

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const meetupListCollection = db.collection('meetups');

    const resultSearch = await meetupListCollection
      .findOne({ _id: ObjectId(toSearchMeetup) });

    res.status(201).json({
      message: 'success',
      data: resultSearch,
    });

    client.close();
  }
}

export default getSingleMeetup;
import {Fragment} from "react";
import {useRouter} from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {server} from "../../config";
import {MongoClient} from "mongodb";

const MeetupDetails = ({meetupData}) => {

  const {_id, title, description, image, address} = meetupData;

  return (
    <Fragment>
      <MeetupDetail
        key={_id}
        image={image}
        description={description}
        address={address}
        title={title}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();


  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {meetupId: meetup._id.toString()}
    })),
  }
}

export async function getStaticProps(context) {
  const meetupIDParam = context.params.meetupId;

  const searchData = await fetch(`${server}/api/get-single-meetup`, {
    method: 'POST',
    body: JSON.stringify(meetupIDParam),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const response = await searchData.json();

  return {
    props: {
      meetupData: response.data
    }
  }
}

export default MeetupDetails;
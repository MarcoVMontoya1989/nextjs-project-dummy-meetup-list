import {useEffect, useState, useCallback} from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'A first world meetup',
    image: 'https://picsum.photos/800/600',
    address: 'lorem Ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'just the first world meetup'
  },
  {
    id: 'm2',
    title: 'A second world meetup',
    image: 'https://picsum.photos/700/600',
    address: 'lorem Ipsum bullshit sit amet, consectetur adipiscing elit',
    description: 'just the second world meetup'
  },
];

const Index = (props) => {

  const [meetupList, setMeetupList] = useState([]);

  useEffect(() => {
    (async function() {
      try {
        const response = await fetch('api/get-meetups');
        const json = await response.json();

        setMeetupList(json.data);

        // setMeetupList(json.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  let showMeetupList = (<MeetupList meetups={props.meetups} />);

  if (meetupList.length > 1) {
    showMeetupList = (<MeetupList meetups={meetupList} />);
  }

  return (
    <>
      {showMeetupList}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUP,
    }
  }
}

export default Index;
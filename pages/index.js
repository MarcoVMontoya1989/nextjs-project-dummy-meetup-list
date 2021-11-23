import React, {Fragment, useEffect, useState} from 'react';
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
]

const Index = () => {

  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    //send request

    setLoadedMeetups(DUMMY_MEETUP);

  }, [])

  return (
    <Fragment>
      <MeetupList meetups={loadedMeetups} />
    </Fragment>
  );
};

export default Index;
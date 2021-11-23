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

const Index = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
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
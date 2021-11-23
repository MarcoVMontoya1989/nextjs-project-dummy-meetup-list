import {Fragment} from "react";
import {useRouter} from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({router}) => {

  const routerRef = useRouter();

  console.log(routerRef);

  return (
    <Fragment>
      <MeetupDetail
        image={'https://picsum.photos/700/600'}
        description={'lorem Ipsum'}
        address={'foobar'}
        title={'pokemon'}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  //fetching data for a single meetup

  const meetupIDParam = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupIDParam,
        title: 'A second world meetup',
        image: 'https://picsum.photos/700/600',
        address: 'lorem Ipsum bullshit sit amet, consectetur adipiscing elit',
        description: 'just the second world meetup'
      }
    }
  }

}

export default MeetupDetails;
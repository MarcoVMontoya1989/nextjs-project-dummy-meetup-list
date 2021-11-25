import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

function NewMeetupPage() {

  const router = useRouter();

  const onAddMeetupHandler = async (data) => {
    // console.log('trigger', data);

    const response = await fetch('api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    router.push('/');

  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
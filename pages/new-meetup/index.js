import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const onAddMeetupHandler = (data) => {
    console.log('trigger', data);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
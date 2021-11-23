import {Fragment} from "react";
import {useRouter} from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({router}) => {

  const routerRef = useRouter();

  console.log(routerRef);

  return (
    <Fragment>
      <MeetupDetail meetups={null} />
    </Fragment>
  );
};

export default MeetupDetails;
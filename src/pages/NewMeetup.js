import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(){

    const history = useNavigate();

    function addMeetUpHandler(meetupData){

        fetch('https://react-numero-duo-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history("/", { replace: true })
        });
    }

    return (
        <section>
            <h1>New Meetups !</h1>
            <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
        </section>
    );
}


export default NewMeetupPage;
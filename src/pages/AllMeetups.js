import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';


function AllMeetupsPage(){

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetups] = useState([]);


  useEffect(() => {
    
      //Fetch Data with Firebase
    fetch('https://react-numero-duo-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json').then(response=>{
      return response.json();
    }).then(data => {
      //do something


      const meetups =[];

      for(const key in data){
        const meetup ={
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      console.log(loadedMeetUps);
      setLoadedMeetups(meetups);
      console.log(loadedMeetUps);
    });


  }, []);
  //any external dependecies needs to be passed in array

    if(isLoading){
      return(
        <section>
          <p>Loading ....</p>
        </section>
      );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetUps} />
        </section>
    );
}


export default AllMeetupsPage;
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
class Event {
  name: string;
  constructor(theName:string){
    this.name = theName;
  }
}
function App() {
  const [events, setEvents] = useState<Array<Event>>([{name:''}])
  useEffect(()=>{
    axios(
      {
        url:"https://app.ticketmaster.com/discovery/v2/events",
        params:{
          "apikey": "Mx0hOk19jA4oOAyy5kphNjMopcL2xvUf"
        }
      })
  .then(data=>{
    console.log(data.data._embedded.events)
    setEvents(data.data._embedded.events)
  })
  },[])
  // useEffect(()=>{
  //   console.log(events)
  // },[events])

  return (
    <div className="App">
      <header className="App-header">
        test
      </header>
      <div>
      {events.map((event)=>(<div>{event.name}</div>))}
      </div>
    </div>

  );
}

export default App;

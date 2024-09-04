import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
//import events from './gateway/events.js';
import {fetchTasksList} from './gateway/events.js';



import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
//import events from './gateway/events.js';

//const baseUrl = 'https://669781f802f3150fb66de387.mockapi.io/users';

 const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [dif, setDif] = useState(0);
  const [open, setOpen] = useState(false);
  const [newEvents, setNewEvents] = useState([]);
  //const [newEvents, setNewEvents] = useState(events);

  useEffect( () => {onCreate()}, []);

  
  const difference = (n) => {
    
    if (n === 0) {
      
      setDif(n);
    } else {
setDif(dif + n);

  }
  
}

const clickOpen = () => {
  setOpen(true);

}

const clickClose = () => {
  setOpen(false);
  
}

const onCreate = () => {
  fetchTasksList()
  .then(events => setNewEvents(events));
  //.then(events => setNewEvents(events));

//const onCreate = (value) => { 
//const updateTask = [...newEvents, value];
//setNewEvents(updateTask);
//console.log(updateTask);
// //-----
// fetch(baseUrl)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//     })    
//     .then(eventsList => {const events = eventsList.map(({ _id, ...event }) => ({ id: _id, ...event }));
//     setNewEvents(events);
// });
    
//----

}   
    console.log(newEvents);
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate, dif));
    
    return (
      <>      
        <Header onClick={difference} onModal={clickOpen}/>
        { open && (<Modal onModal={clickClose} onCreate={onCreate}/>)}
        <Calendar weekDates={weekDates} events={newEvents}/>
      </>
    );
  }

export default App;

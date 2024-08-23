import React, { Component, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import events from './gateway/events.js';



import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

// class App extends Component {
 const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [dif, setDif] = useState(0);
  const [open, setOpen] = useState(false);
  const [newEvents, setNewEvents] = useState(events);
  //const [event, setEvent] = use
  //const [open, setOpen] = useState(false);
  // state = {
  //   weekStartDate: new Date(),
  //   dif: 0,
  //   open: false,
  //   newEvents: events,//1111
  // };

  const difference = (n) => {
    //alert(n);
    if (n === 0) {
      //this.setState({dif: n});
      setDif(n);
    } else {
//this.setState({dif: this.state.dif + n});
//alert(dif);
//let a = dif + n;
//alert(a);
setDif(dif + n);
//alert(dif);
  }
  
}

const clickOpen = () => {
  setOpen(true);
// this.setState({
//   open: true
// })
}

const clickClose = () => {
  setOpen(false);
  // this.setState({
  //   open: false
  // })
}

const onCreate = (value) => { 
  //alert(value);
 // console.log(value);
//const { newEvents }  = this.state;
const updateTask = [...newEvents, value];
//this.setState({ newEvents: updateTask});
setNewEvents(updateTask);
//alert(newEvents);
console.log(updateTask);
}



  //render() {
    
    //const { weekStartDate } = this.state;
    
    //const weekDates = generateWeekRange(getWeekStartDate(weekStartDate, this.state.dif));
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate, dif));
    
    return (
      <>      
        <Header onClick={difference} onModal={clickOpen}/>
        { open && (<Modal onModal={clickClose} onCreate={onCreate}/>)}
        <Calendar weekDates={weekDates} events={newEvents}/>
      </>
    );
  }
//}

export default App;

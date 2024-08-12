import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import events from './gateway/events.js';



import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    dif: 0,
    open: false,
    newEvents: events,//1111
  };

  difference = (n) => {
    if (n === 0) {
      this.setState({dif: n});
    } else {
this.setState({dif: this.state.dif + n});
  }
  
}

clickOpen = () => {
this.setState({
  open: true
})
}

clickClose = () => {
  this.setState({
    open: false
  })
}

onCreate = (value) => { 
  const { newEvents }  = this.state;
const updateTask = [...newEvents, value];
this.setState({ newEvents: updateTask});
alert(this.state.newEvents);
}



  render() {
    
    const { weekStartDate } = this.state;
    
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate, this.state.dif));
    
    return (
      <>      
        <Header onClick={this.difference} onModal={this.clickOpen}/>
        { this.state.open && (<Modal onModal={this.clickClose} onCreate={this.onCreate}/>)}
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;

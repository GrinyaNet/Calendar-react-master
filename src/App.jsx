import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';


import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    dif: 0,
    open: false,    
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


  render() {
    const { weekStartDate } = this.state;
    
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate, this.state.dif));

    
    return (
      <>
        <Header onClick={this.difference} onModal={this.clickOpen}/>
        { this.state.open && (<Modal onModal={this.clickClose}/>)}
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;

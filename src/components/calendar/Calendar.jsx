import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
//import events from '../../gateway/events';


import './calendar.scss';
import events from '../../gateway/events';

const Calendar = ({weekDates, events}) => {
// class Calendar extends Component {
//   state = {
//     events,
//   };

  //render() {
    //const { weekDates } = this.props;
console.log(events);
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={events} />
            {/* <Week weekDates={weekDates} events={this.state.events} /> */}
            
          </div>
        </div>
      </section>
    );
  }
//}

export default Calendar;

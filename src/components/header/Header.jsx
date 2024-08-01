import React, { Component } from 'react';
import { months, getWeekStartDate, monthShift } from '../../utils/dateUtils';

import './header.scss';

//const Header = () => {
  
  

  class Header extends Component {
    
   state = {
    date: new Date(),
    shift: monthShift(new Date(), 0),
   }    
   
  navClick = (d) => {
  
  let [firstDay, lastDay, newMonth, currDate] = monthShift(this.state.date, d);
   
   this.setState({
    date: currDate,
    shift: monthShift(this.state.date, d),
   
  })
  this.props.onClick(d);
   
  
}

render() {

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => this.navClick(0)}>Today</button>
        <button className="icon-button navigation__nav-icon" onClick={() => this.navClick(-7)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => this.navClick(7)}>
          <i className="fas fa-chevron-right"></i>
        </button>
        { this.state.shift[0]  < this.state.shift[1] 
        ? <span className="navigation__displayed-month">{months[this.state.shift[2]]}</span> 
        : <span className="navigation__displayed-month">{months[this.state.shift[2]]} - {months[this.state.shift[2] + 1]}</span>}
        
      </div>
    </header>
  );
};
};

export default Header;



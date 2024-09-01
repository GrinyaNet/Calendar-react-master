import React, { Component, useState } from 'react';
import { months, getWeekStartDate, monthShift } from '../../utils/dateUtils';

import './header.scss';

const Header = ({onClick, onModal}) => {
  const [date, setDate] = useState(new Date());
  const [shift, setShift] = useState(monthShift(new Date(), 0));    
   
  const navClick = (d) => {  
  let [firstDay, lastDay, newMonth, currDate] = monthShift(date, d);
   
 
  setDate(currDate);  
  setShift(monthShift(date, d));
  
  onClick(d);
   alert(monthShift(date, d));
  
}

const openModal = () => {
  
  onModal();
}
  
  return (
    
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => navClick(0)}>Today</button>
        <button className="icon-button navigation__nav-icon" onClick={() => navClick(-7)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => navClick(7)}>
          <i className="fas fa-chevron-right"></i>
        </button>
        { shift[0]  < shift[1] 
        ? <span className="navigation__displayed-month">{months[shift[2]]}</span> 
        : <span className="navigation__displayed-month">{months[shift[2]]} - {months[shift[2] + 1]}</span>}
        
      </div>
    </header>
  );
};

export default Header;

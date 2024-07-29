import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  
  let currentDate = new Date();  
  currentDate.setHours(0, 0, 0, 0);  
  
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (        
        <div className="calendar__day-label day-label">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          {(dayDate.toISOString()) === (currentDate.toISOString()) ? <span className="day-label__day-number day-label__day-color">{dayDate.getDate()}</span> : <span className="day-label__day-number">{dayDate.getDate()}</span>}          
        </div>
      ))}
    </header>
  );
};

export default Navigation;

//{dayDate.getDate()}
//dayDate.toISOString().split('T')[0]
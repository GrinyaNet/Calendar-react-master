import React, { Component, useState } from 'react';
import moment from 'moment';

import './modal.scss';
import events from '../../gateway/events';
//import events from '../../gateway/events';
import {createTask} from '../../gateway/events';
const baseUrl = 'https://669781f802f3150fb66de387.mockapi.io/users';

const Modal = ({ onModal, onCreate }) => {
 const [event, setEvent] = useState(
   {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
  }

 );  

  const closeModal = () => {
    onModal();
  }

  const handleChange = (e) => {
    const { name, value} = e.target; 
    setEvent({
      ...event, 
        [name]: value,      
  })    

  }

 const handleTaskCreate = (e) => {
    e.preventDefault();    
    
    const startDate = moment(`${event.date} ${event.startTime}`).toDate();    
    const endDate = moment(`${event.date} ${event.endTime}`).toDate();
    
    const events = {      
      title: event.title,
      description: event.description,      
      dateFrom: new Date(startDate),      
      dateTo: new Date(endDate),
    }
        
//--
createTask(events);
//--
    // ////
    // fetch(baseUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(events),
    // }).then(responce => {
    //   if (!responce.ok) {
    //     throw new Error('Faild to create task');
    //   }
    // });
    // /////
    
    onCreate();
    //onCreate(events);
        
    onModal();
  }

    
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={closeModal}>+</button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={event.title}
                className="event-form__field"                                
                onChange={handleChange}
              />
              <div className="event-form__time">
                <input type="date" name="date" value={event.date} className="event-form__field" onChange={handleChange}/>
                <input
                  type="time"
                  name="startTime"
                  value={event.startTime}
                  className="event-form__field"                  
                  onChange={handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  value={event.endTime}
                  className="event-form__field"                  
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                value={event.description}
                className="event-form__field"                
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn" onClick={(e) => handleTaskCreate(e)}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default Modal;

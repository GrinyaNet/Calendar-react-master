import React, { Component, useState } from 'react';
import moment from 'moment';

import './modal.scss';
import events from '../../gateway/events';
//import events from '../../gateway/events';


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
  //  state = {          
  //     title: '',
  //     date: '',
  //     startTime: '',
  //     endTime: '',
  //     description: '',     
  //  }

  const closeModal = () => {
    onModal();
  }

  const handleChange = (e) => {
    const { name, value} = e.target; 
    setEvent({
      ...event, 
        [name]: value,
      
  })
    // setEvent({
    //   [name]: value,

    // })
    //alert(event);
//const { name, value} = event.target;

// this.setState({  
//     [name]: value,   
// })

  }

 const handleTaskCreate = (e) => {
    e.preventDefault();
    //const { title, date, startTime, endTime, description } = this.state;
    //console.log(event.date);
    const startDate = moment(`${event.date} ${event.startTime}`).toDate();
    const endDate = moment(`${event.date} ${event.endTime}`).toDate();
    //const startDate = "'" + event.date + 'T' + event.startTime + "'";
    //const endDate = "'" + event.date + 'T' + event.endTime + "'";
    const events = {
      id: Math.random(),
      title: event.title,
      description: event.description,
      dateFrom: new Date(startDate),
      dateTo: new Date(endDate),
    }
    //let str1 = str.replace(/[-,:]/g, ',');
    
    
    //let newDate = new Date('2024-08-10T12:08');
    //let a = newDate.setMonth(newDate.getMonth() - 1);
    //alert(new Date(time));
    
    //alert(new Date('2024-08-10T12:08'));
    onCreate(events);
    //this.props.onCreate(this.state.events);
    //console.log(events);
    onModal();
  }

  //render() {    
  
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
  //}
}

export default Modal;

//value={formData.date}
//onChange={e => setFormData({ ...formData, date: e.target.value })}
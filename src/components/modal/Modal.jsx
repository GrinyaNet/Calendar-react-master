import React, { Component } from 'react';

import './modal.scss';
//import events from '../../gateway/events';


class Modal extends Component {
 
   state = {          
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',     
   }

  closeModal = () => {
    this.props.onModal();
  }

  handleChange = event => {
    
const { name, value} = event.target;

this.setState({  
    [name]: value,   
})

  }

  handleTaskCreate = (e) => {
    e.preventDefault();
    const { title, date, startTime, endTime, description } = this.state;
    const startDate = "'" + date + 'T' + startTime + "'";
    const endDate = "'" + date + 'T' + endTime + "'";
    const events = {
      id: Math.random(),
      title,
      description,
      dateFrom: new Date(startDate),
      dateTo: new Date(endDate),
    }
    //let str1 = str.replace(/[-,:]/g, ',');
    
    
    //let newDate = new Date('2024-08-10T12:08');
    //let a = newDate.setMonth(newDate.getMonth() - 1);
    //alert(new Date(time));
    
    //alert(new Date('2024-08-10T12:08'));
    this.props.onCreate(events);
    //this.props.onCreate(this.state.events);
  }

  render() {    
  
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={this.closeModal}>+</button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                className="event-form__field"                                
                onChange={this.handleChange}
              />
              <div className="event-form__time">
                <input type="date" name="date" value={this.state.date} className="event-form__field" onChange={this.handleChange}/>
                <input
                  type="time"
                  name="startTime"
                  value={this.state.startTime}
                  className="event-form__field"                  
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  value={this.state.endTime}
                  className="event-form__field"                  
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                value={this.state.description}
                className="event-form__field"                
                onChange={this.handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn" onClick={(e) => this.handleTaskCreate(e)}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

//value={formData.date}
//onChange={e => setFormData({ ...formData, date: e.target.value })}
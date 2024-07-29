import React, { Component } from 'react';
//import { months } from '../../utils/dateUtils';

import './header.scss';

//const Header = () => {
  class Header extends Component {

    
   
  navClick = (d) => {
  
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
        <span className="navigation__displayed-month">111</span>
      </div>
    </header>
  );
};
};

export default Header;


//onClick={() => this.setBodyColor(GREEN)}
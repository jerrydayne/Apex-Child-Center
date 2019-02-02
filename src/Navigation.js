import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';
//import ApexLogo from './img/apexlogo.jpg';

class Navigation extends Component {
  render() {
const sections = ['Home', 'Timeline', 'About Us',];
const navLinks = sections.map(section => {
    return(
        <li><a href={'#' + section }>{section} </a></li>
    )
});
    return (
    <nav>
        <h2 className="Logo">{this.props.LogoTitle}</h2>

        <ul>
            {navLinks}
        </ul>

    </nav>
    );
  }
}

export default Navigation; 
import React, {Component} from 'react';

import Background from './img/apexlogo.jpg';
import './Header.css';

const myStyle = {
    backgroundImage: `url(${Background})`,
    height: '100vh',
    backgroundSize: 'cover'
};

class Header extends Component {
    render(){ 
        return(
            <header style={myStyle}>
                <h1>{this.props.title}</h1>
                <p className="b"><i>this is where we discover, norture and make dreams come true</i></p>
                <a className="a"href="#button">{this.props.button}</a>
            </header>
        );
        }
};

export default Header;
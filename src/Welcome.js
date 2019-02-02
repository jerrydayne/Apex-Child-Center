import React, {Component} from 'react';

import Background from './img/apex-kids1.jpg';
import './Welcome.css';
const Style = {
    backgroundImage: `url(${Background})`,
    height: '80vh',
    backgroundSize: 'cover'
};

class Welcome extends Component {
    render(){ 
        return(
            <header className="style" style={Style}>
                <h2>{this.props.title}</h2>
                <p> Welcome to the official site of “Apex Child Center” kaduna, <br />
                     we offer childcare and educational services, ensuring that your children blossom in excellence <br /> and soar high into a prospective future. 
                     <br /> — Mrs Justina Bijimi</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
        }
};

export default Welcome;
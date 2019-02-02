import React, {Component} from 'react';

import './Services.css';


class Services extends Component {
    render(){ 
        return(
            <div className="services">
                <h3> APEX services</h3>
                <h2><i>what we offer</i></h2>

                <div className="row">
                <div>
                    <span>
                        <i class="fas fa-mobile-alt"></i>
                    </span>
                    <h4>Responsive</h4>
                    <p><i>we are always available</i></p>
                </div>
                <div>
                    <span>
                    <i class="fas fa-home"></i>
                    </span>
                    <h4>Environment</h4>
                    <p><i>condusive for child development</i></p>
                </div>
                <div>
                    <span>
                    <i class="fas fa-graduation-cap"></i>
                    </span>
                    <h4>Education</h4>
                <p><i>we <i class="far fa-heart"></i> keeping up to Quality standards</i></p>  
                </div>
                 <div>
                    <span>
                        <i class="far fa-question-circle"></i>
                    </span>
                    <h4>Questions?</h4>
                <p><i>we have all the answers</i></p>
                </div>
                
                
            </div>
            </div>
        );
        }
};

export default Services;
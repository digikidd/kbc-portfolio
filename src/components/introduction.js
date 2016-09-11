import React from 'react';
import {Element} from 'react-scroll';

class Introduction extends React.Component {
    render() {

        return (
            <div className="introduction col-lg-12 col-md-12 col-xs-12">

                <Element name="intro">
                    {this.state}
                    <div className="anything"></div>
                <h1 className="intro-text">Kelly Carmichael<br/><br/>
                    full-stack<br/>
                    (web) developer<br/>
                </h1>
                <h2 className="kbcHeading">
                    <p>a passion for </p></h2>
                   <h2 className="kbcHeading2">
                       creating <strong>websites</strong> | web <strong>applications</strong> | <strong>creative</strong> design
                </h2>
                </Element>
            </div>

        )
    }

}



export default Introduction;

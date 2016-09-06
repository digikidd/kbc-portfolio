import React from 'react';
import {Element} from 'react-scroll';

class AboutMe extends React.Component {

    render () {
        return (
            <div className="aboutMe col-lg-12 col-md-12 col-xs-12">
                <Element name="about" className="aboutMe">
                    <h1>kelly</h1><img className="arrow" src="../../images/arrow.png"></img>
                    <h4>
                        so that's <strong>me.</strong> my <strong>name</strong> is kelly <strong>carmichael.</strong>
                    </h4>
                    <p>
                        I consider myself a full stack developer because I enjoy the creative aspect of styling but I also enjoy testing my logic with back-end development.
                    </p>
                    <h4>a little <strong>about</strong> me</h4>
                    <p>
                        My background is one of creative aspirations ranging from sound design at places like XM Radio to web development for front-end and back-end applications.
                    </p>
                    <p>
                        I started my journey with sound design and audio production in a galaxy far, far away creating radio imaging and promos
                    </p>
                    <p>
                        to working at a satellite radio company on a global level.
                    </p>
                    <p>
                        I quickly became obsessed and fascinated with computers and technology which ultimately led to discovering the amazing world of programming.
                    </p>
                    <p>
                        I am passionate about using my creativity and logic to create exciting and engaging websites and web applications.
                    </p>
                    <br/>
                    <p>
                        Thank you checking out my info and my portfolio site!
                    </p>
                    <br/>
                    <h5>
                        I am <strong>excited</strong> you made it <strong>this far</strong> far and I hope we can work <strong>together</strong> soon!
                    </h5>
                    <img className="contactIcons cabo" src="../../images/kbc-cabo.jpg"></img>
                    <hr className="faded"/>
                </Element>

            </div>
        )
    }
}

export default AboutMe;
import React from "react";
import {Element} from "react-scroll";


class Contact extends React.Component {

    icons = [
        {ICON: "../../images/contact/email.png", LINK: "mailto:digikidd@gmail.com?subject=Visiting Your Site"},
        {ICON: "../../images/contact/facebook.png", LINK:"http://facebook.com/kbctexas"},
        {ICON: "../../images/contact/github.png", LINK:"https://github.com/digikidd"},
        {ICON: "../../images/contact/linkedin.png", LINK:"https://www.linkedin.com/in/kelly-carmichael-1b80b530"},
        {ICON: "../../images/contact/skype.png", LINK:"skype:digikidd?call"},
        {ICON: "../../images/contact/twitter.png", LINK:"https://twitter.com/kbctexas"}
    ];

    render () {
        return (
            <div className="contact col-lg-12 col-md-12 col-xs-12">
                <Element name="contact" className="mycontact">
                    <div className="col-lg-12 col-md-12 col-xs-12 contactMe">
                        <h1>would <strong>you</strong> like to <strong>work</strong> together?</h1>
                        <div className="row contactkbc">
                            {this.icons.map ((item, index)=> {
                                return (
                                    <div key={index} className="social-icons col-md-2 col-xs-2"><a href={item.LINK}> <img className="contactIcons socialmedia icons" key={index} src={item.ICON}></img></a></div>)
                            })}
                        </div>
                    </div>
                </Element>
            </div>
        )
    }
}

export default Contact;
import React from 'react';
import {Link, Element} from 'react-scroll';


class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">

                        <div className="navbar-header" classID="a">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                                <Link to="intro" spy={true} smooth={true} offset={-59} duration={500}>
                                    <a className="logo"><img className="kbc-logo" src="../../images/logo.png"/></a>
                                </Link>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="navAbout">
                                    <Link to="about" spy={true} smooth={true} offset={-59} duration={500}>about</Link>
                                </li>
                                <li className="navSkills">
                                    <Link to="skills" spy={true} smooth={true} offset={-59} duration={500}>skills</Link>
                                </li>
                                <li className="navPortfolio">
                                    <Link to="portfolio" spy={true} smooth={true} offset={-59} duration={500}>portfolio</Link>
                                </li>
                                <li className="navContact">
                                    <Link to="contact" spy={true} smooth={true} offset={-59} duration={500}>contact</Link>
                                </li>
                                <li className="navLogin">
                                    <Link to="formsubmit" spy={true} smooth={true} offset={-59} duration={500}>login</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
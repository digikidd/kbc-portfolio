import React, {Component} from "react";
import {Link, Element} from "react-scroll";

//Components
import Header from "./header";
import Introduction from "./introduction";
import AboutMe from "./aboutMe";
import MySkills from "./mySkills";
import PortfolioContainer from "./portfolio/portfoliocontainer";
import Contact from "./contact";
import MyLinks from "./links"
import Footer from "./footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Introduction/>
                <AboutMe/>
                <MySkills/>
                <PortfolioContainer/>
                <Contact/>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
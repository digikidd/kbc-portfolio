import React, {Component} from "react";

//Components
import Header from "./header";
import Introduction from "./introduction";
import AboutMe from "./aboutMe";
import MySkills from "./mySkills";
import PortfolioContainer from "./portfolio/portfoliocontainer";
import Contact from "./contact";
import FormSubmit from "./formsubmit";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Introduction/>
                <AboutMe/>
                <MySkills/>
                <PortfolioContainer/>
                <Contact/>
                <FormSubmit/>
            </div>
        );
    }
}

export default App;
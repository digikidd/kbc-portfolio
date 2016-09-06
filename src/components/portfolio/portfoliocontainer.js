import React from "react";
import PortfolioItem from "./portfolioItem";
import {Element} from 'react-scroll';

class PortfolioContainer extends React.Component {
    render () {
        return (
            <div>
                <Element name="portfolio" className="portfolio">
                    <h2>Portfolio Title Goes Here</h2>
                    <PortfolioItem title="Portfolio Item"/>
                    <PortfolioItem title=""/>
                    <PortfolioItem title="Portfolio Item"/>
                </Element>

            </div>

        )

    }

}

export default PortfolioContainer;
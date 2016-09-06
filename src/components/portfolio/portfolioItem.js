import React from "react";


class PortfolioItem extends React.Component{

    render () {
        var DefaultTitle = "kbc-project";
        return (
        <div className="portfolioItems col-lg-12 col-md-12 col-xs-12">
            <h3>{this.props.title ? this.props.title : DefaultTitle}</h3>
            <p>This project was an intro to javascript basics.</p>
        </div>
        )
    }
}

export default PortfolioItem;
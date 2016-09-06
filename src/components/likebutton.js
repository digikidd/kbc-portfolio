/**
 * Created by kellycarmichael on 9/3/16.
 */
import React from 'react';




class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({liked: !this.state.liked});
    }
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div className="btn">
            <div onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
                </div>
        );
    }
}

export default LikeButton;
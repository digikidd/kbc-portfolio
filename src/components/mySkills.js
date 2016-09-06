import React from "react";
import {Element} from 'react-scroll';

class MySkills extends React.Component {
    skills = [
        {name:"HTML5", stars: 4},
        {name:"CSS3", stars: 3},
        {name:"React", stars: 3},
        {name:"Javascript", stars: 4},
        {name:"Nodejs", stars: 2},
        {name:"Jquery", stars: 3},
        {name:"NPM", stars: 3},
        {name:"Gulp", stars: 2},
        {name:"SASS", stars: 3},
        {name:"AJAX", stars: 3},
        {name:"MongoDB", stars: 2},
        {name:"Redux", stars: 1},
        {name:"JSON", stars: 3}
    ];


    render () {
        return (
            <div className="skills col-lg-12 col-md-12 col-xs-12">
                <Element name="skills" className="mySkills">
                    <p><strong>Skills | </strong>Abilities</p>
                    <hr className="hrSkill"/>
                    <div className="skill-row row">
                            {this.skills.map((item, index)=> {
                                var stars = Array (item.stars).fill ().map ((secondItem, secondIndex) => {
                                    return (<img key={secondIndex} src="../../images/goldstar.png"/>)
                                });
                                if (index % 3 === 2) {
                                    return (
                                        <div className="skill col-lg-6 col-md-6 col-xs-6" key={index}>
                                            <div className=" skill-stars col-lg-6 col-md-6 col-xs-6"><span className="skill-names"><strong>{item.name}</strong></span></div>
                                            <div className="skill-stars col-lg-6 col-md-6 col-xs-6"><span className="stars">{stars}</span></div>
                                        </div>
                                    )
                                }
                                else {
                                return (
                                    <div className="skill col-lg-6 col-md-6 col-xs-6" key={index}>
                                        <div className=" skill col-lg-6 col-md-6 col-xs-6"><span className="skill-names">{item.name}</span></div>
                                        <div className=" skill-stars col-lg-6 col-md-6 col-xs-6"><span className="stars">{stars}</span></div>
                                    </div>
                                )}
                            })}
                    </div>
                </Element>
            </div>
        )
    }

}

export default MySkills;

import React from "react";
import {Element} from 'react-scroll';

class MySkills extends React.Component {
    skills = [
        {name:"HTML5", stars: 4},
        {name:"CSS3", stars: 4},
        {name:"React", stars: 3},
        {name:"Javascript", stars: 4},
        {name:"Nodejs", stars: 3},
        {name:"Jquery", stars: 3},
        {name:"NPM", stars: 3},
        {name:"Gulp", stars: 2},
        {name:"SASS", stars: 3},
        {name:"AJAX", stars: 2},
        {name:"MongoDB", stars: 2},
        {name:"Redux", stars: 2},
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
                                            <p className="skill-names"><strong>{item.name}</strong></p>
                                            <div className="skill-stars col-lg-6 col-md-6 col-xs-6"><p className="stars">{stars}</p></div>
                                        </div>
                                    )
                                }
                                else {
                                return (
                                    <div className="skill col-lg-6 col-md-6 col-xs-6" key={index}>
                                        <p className="skill-names">{item.name}</p>
                                        <div className=" skill-stars col-lg-6 col-md-6 col-xs-6"><p className="stars">{stars}</p></div>
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

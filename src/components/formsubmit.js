/**
 * Created by kellycarmichael on 9/8/16.
 */
import React from "react";
import {Element} from "react-scroll";

class FormSubmit extends React.Component {
    kbcProjects = {};
    OnButtonClick(e, obj){
        e.preventDefault();
        obj.kbcProjects.name = this.refs.name;
    }

    render () {

        return (
            <div className="submitProject col-lg-12 col-md-12 col-xs-12">
                <Element name="submitProject">
                    <div className="projectInfo col-lg-12 col-md-12 col-xs-12">
                        <form onSubmit={this.OnButtonClick}>
                            <div className="form-group">
                                <label htmlFor="projectname">Project: </label>
                                <input type="text" className="form-control" ref="name"
                                       placeholder="project name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectname">Description: </label>
                                <input type="text" className="form-control" ref="description"
                                       placeholder="project description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectname">Github address: </label>
                                <input type="text" className="form-control" ref="github"
                                       placeholder="github address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectname">Language and framework used: </label>
                                <input type="text" className="form-control" ref="framework"
                                       placeholder="framework used on project"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectname">Website to preview: </label>
                                <input type="text" className="form-control" ref="preview"
                                       placeholder="project preview address"/>
                            </div>
                            <button type="submit" className="btn btn-default">Submit Project</button>
                        </form>
                    </div>
                </Element>
            </div>
        )

    }
}

export default FormSubmit;

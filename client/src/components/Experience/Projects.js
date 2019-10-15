import React, {Component} from 'react'
import {projects} from './ProjectData';
import CustomizedModal from '../CustomizedModal'
import { constants } from '../constants'; 

export default class Projects extends Component {
    render() {
        return (
            <div className="project-container">
            <h3>Daily Work</h3>
            <p className="subtitle">{constants.PASTWORK_INTRO}</p>
            <div className="project-gallery">
                { projects.map((project, i) => {
                    return (
                        <CustomizedModal key={i}  
                        buttonTitle={project.locationTitle} 
                        background={project.images[0]} 
                        modelTitle={project.locationFull} 
                        modelSubtitle={project.dateSpanded} 
                        images={project.images}
                        requestedBy={project.requestedBy}
                        location={project.locationFull}
                        details={project.details}
                        />
                    )
                })}
            </div>
        </div>
        )
    }
}

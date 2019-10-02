import React from 'react'
import {projects} from './ProjectData';
import CustomizedModal from '../CustomizedModal'

const Projects = () => {
    return (
        <div className="project-container">
            <h3>Daily Work</h3>
            <p className="subtitle">DESI has been providing Blake Real Estate and their properties electrical services since 1984 in buildings located at:</p>
            <div className="project-gallery">
                {projects.map((project, i) => {
                    return (
                        <CustomizedModal key={i}  buttonTitle={project.locationTitle} background={project.images[0]} modelTitle={project.locationFull} modelSubtitle={project.dateSpanded} images={project.images} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects

import React, {Component} from 'react'
import {projects} from './ProjectData';
import CustomizedModal from '../CustomizedModal'

export default class Projects extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { activeIndex: 0 };

    // }
    // next = () => {
    //     const nextIndex = this.state.activeIndex === projects.length - 1 ? 0 : this.state.activeIndex + 1;
    //     this.setState({ activeIndex: nextIndex });
    //     console.log(this.state.activeIndex)
    //   }
    
    //   previous = () => {
    //     const nextIndex = this.state.activeIndex === 0 ? projects.length - 1 : this.state.activeIndex - 1;
    //     this.setState({ activeIndex: nextIndex });
    //   }
    render() {
        return (
            <div className="project-container">
            <h3>Daily Work</h3>
            <p className="subtitle">DESI has been providing Blake Real Estate and their properties electrical services since 1984 in buildings located at:</p>
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

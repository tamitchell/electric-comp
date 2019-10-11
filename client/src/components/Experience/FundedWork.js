import React from 'react';
import CustomizedModal from '../CustomizedModal'
import {fundedWork} from './FundedData';


const FundedWork = () => {
    return (
        <div className="project-container">
            <h3>Funded Projects</h3>
            <div className="project-gallery fundedWork-gallery">
                { fundedWork.map((project, i) => {
                    return (
                        <CustomizedModal key={i}  
                        buttonTitle={project.locationTitle} 
                        buttonImage={project.btnImage}
                        background={project.images[0]} 
                        amountFunded={project.amountFunded}
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

export default FundedWork

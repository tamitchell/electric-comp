import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  CarouselWThumbnail from './CarouselWThumbnail';
class CustomizedModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const buttonStlye = {
        backgroundImage: `url(${this.props.background})`
    }

    return (
      <div>
        <Button color="danger" className="project-btn" style={buttonStlye} onClick={this.toggle}>
        <p>{this.props.buttonTitle}</p>
        <div className="overlay">
        </div>
        </Button>
        <Modal className="project-modal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
              <h3>{this.props.modelTitle}</h3>
              <p>{this.props.modelSubtitle}</p>
          </ModalHeader>
          <ModalBody>
            <CarouselWThumbnail data={this.props.images}/>
            
            <div className="content">
            <h4>Requested By</h4>
            <p>{this.props.requestedBy}</p>
            <h4>Location</h4>
            <p>{this.props.location}</p>
            <h4>Project Details</h4>
            <p>{this.props.details}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Next</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CustomizedModal;
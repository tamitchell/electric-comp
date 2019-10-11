import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormContainer from '../components/EmailForm/FormContainer';

class ContactUsModal extends React.Component {
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

    return (
      <div>
        <Button className="contact-btn" onClick={this.toggle}>
        Contact Us
        </Button>
        <Modal className="project-modal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
          </ModalHeader>
          <ModalBody>    
          <div className="address-container">
          </div>        
            <div className="form">
              <FormContainer/>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Submit</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default ContactUsModal;
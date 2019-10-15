import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FormContainer from '../components/EmailForm/FormContainer';
import { FaEnvelope, FaPhone} from 'react-icons/fa';
import { constants } from './constants';

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
          <ModalBody>    
          <div className="address-container">
            <span>
            <h3>Get in Touch</h3>
            <a href={`tel:+${constants.COMPANY_PHONE}`}> <FaPhone/>{" "}{constants.COMPANY_PHONE}</a>
            <br/>
            <a href={`mailto:${constants.COMPANY_EMAIL}?subject=ClientQuestion`}><FaEnvelope/>{" "}{constants.COMPANY_EMAIL}</a>
            </span>
          </div>        
            <div className="form">
              <FormContainer/>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ContactUsModal;
import React from "react";
import { Container, Row, Button } from "reactstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
const lamp = require('../../img/hanging-lamp.png')

const StatementPurpose = () => {
    return (
      <Container className="statement-container">
          <Row className="header">
              <img className="lamp" src={lamp} alt="hanging lamp" /> <h2>We Are <br/> Diversified Electric</h2>          
          </Row>
          <Row className="body">
                <p>
                    Diversified Electric Services, Inc. (DESI) strives every day to provide the greatest quality of electrical services. As a family-owned business we understand the value of individualized attention and personal service and we take great pride in satisfying our customers.
              </p>
                <p>
                    Since 1994 we have been serving the DMV with personalized attention to each and every one of our customers. We meticulously plan every detail of a project and take great pride in the work we perform.
              </p>
          </Row>
          <Row className="pretend-footer">
              <h4>Our Leadership</h4>
              <Button><FaAngleDoubleDown/></Button>
          </Row>
      </Container>
    );
  };
  
  export default StatementPurpose
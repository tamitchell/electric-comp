import React from "react";
import { Button } from "reactstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
const lamp = require('../../img/hanging-lamp.png')

const StatementPurpose = () => {
    return (
      <div className="statement-container">
          <div className="header">
              <img className="lamp d-none d-sm-block" src={lamp} alt="hanging lamp" /> <h2>We Are <br/> Diversified Electric</h2>          
          </div>
          <div className="body">
                <p>
                    Diversified Electric Services, Inc. (DESI) strives every day to provide the greatest quality of electrical services. As a family-owned business we understand the value of individualized attention and personal service and we take great pride in satisfying our customers.
              </p>
                <p>
                    Since 1994 we have been serving the DMV with personalized attention to each and every one of our customers. We meticulously plan every detail of a project and take great pride in the work we perform.
              </p>
          </div>
          <div className="pretend-footer">
              <h4>Our Leadership</h4>
              <Button><FaAngleDoubleDown/></Button>
          </div>
      </div>
    );
  };
  
  export default StatementPurpose
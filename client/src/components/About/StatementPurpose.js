import React from "react";
import { Button } from "reactstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
import { constants } from '../constants';

const lamp = require('../../img/hanging-lamp.png')

const StatementPurpose = () => {
    return (
      <div className="statement-container">
          <div className="header">
              <img className="lamp d-none d-lg-block" src={lamp} alt="hanging lamp" /> <h2>We Are <br/> Diversified Electric</h2>          
          </div>
          <div className="body">
                <p>{constants.STATMENT_PURPOSE}</p>
          </div>
          <div className="pretend-footer">
              <h4>Our Leadership</h4>
              <Button><FaAngleDoubleDown/></Button>
          </div>
      </div>
    );
  };
  
  export default StatementPurpose
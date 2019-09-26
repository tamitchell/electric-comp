import React from "react";
import { Container, Row } from "reactstrap";
import { Transform, Fade } from 'react-animation-components'
const receptionUp = require('../../img/receptionUP.png')
const receptionDown = require('../../img/receptionDown.png')

const Hero = (props) => {
  return (
      <Container className="hero__container" fluid={true}>
        <Row>
        <Transform className={props.isOpen ? "reception close-table-top" : "reception open-table-top"} enterTransform="translateY(-80px)" in>
        <button onClick={props.toggleTable} className="hero__prop-img">
        <img src={receptionUp} alt="Line art reception table" />
        </button>
        </Transform>
        
        <Fade in enterOpacity={0.85}>
          <div className="title-card">
            <p className="title">
             <strong>Desi</strong> Electric
            </p>
            <hr className="title-divider"></hr>
            <p className="subtitle">
             DC's Finest Electricians
            </p>
          </div>
          </Fade>
          <Transform className="reception" enterTransform="translateY(80px)" in>
          <button onClick={props.toggleTable} className="hero__prop-img">
          <img src={receptionDown} alt="Line art reception table" />
          </button>
          </Transform>
        </Row>
      </Container>
  );
};

export default Hero;

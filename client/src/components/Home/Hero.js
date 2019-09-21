import React from "react";
import { Container, Row } from "reactstrap";
import { ReactComponent as ReceptionDown } from '../../img/reception-down.svg'
import { ReactComponent as ReceptionUp } from '../../img/reception-up.svg'
import { Transform, Fade } from 'react-animation-components'



const Hero = (props) => {
  return (
    <header>
      <Container className="hero-container" fluid={true}>
        <Row>
        <Transform onClick={props.toggleTable()} className={props.toggleTable ? "reception close-table-top" : "reception open-table-top"} enterTransform="translateY(-200px)" in>
        <ReceptionUp />
        </Transform>
        
        <Fade in enterOpacity={0.85}>
          <span className="title-card">
            <p className="title">
             <emphasis>Desi</emphasis> Electric
            </p>
            <hr></hr>
            <p className="subtitle">
             DC's Finest Electricians
            </p>
          </span>
          </Fade>
          <Transform className="reception" enterTransform="translateY(200px)" in>
          <ReceptionDown />
          </Transform>
        </Row>
      </Container>
    </header>
  );
};

export default Hero;

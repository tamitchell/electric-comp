import React from "react";
import { Container, Row, Button, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { Transform, Fade } from 'react-animation-components'
import { items } from "./MembersData";
import CardStrcture from './CardStructure';

const MemberGroup = () => {
    const item = items.map((member, i) => {
        return (
              <Link key={i}
                  to={{ pathname: "/members/" + member.memberName , 
                  state: { member } }}
                  >
                <CardStrcture 
                src={member.src} 
                name={member.memberName} 
                jobPosition={member.jobPosition} />
            </Link>
        )
    })
    return (
      <Container className="team-container" fluid={true}>
          <Row className="header">
              <h2>Meet Our Leadership</h2>
          </Row>
          <Row className="member-row">
              {items.map((member, i) => {
                  return (
                        <Link key={i}
                            to={{ pathname: "/members/" + member.memberName , 
                            state: { member } }}
                            >
                          <Card className="member-title-card">
        <div className="cardimage-container">
        <CardImg top width="100%" src={member.src} alt="Card image cap" />
        </div>
        <CardBody>
        <CardTitle>{member.memberName}</CardTitle>
        <CardSubtitle>{member.jobPosition}</CardSubtitle>
        </CardBody>
    </Card>
                      </Link>
                  )
              })};
          </Row>
          <Row className="pretend-footer">
              <h4>Back to the Top</h4>
              <Button><FaAngleDoubleUp/></Button>
          </Row>
      </Container>
    );
  };
  
  export default MemberGroup
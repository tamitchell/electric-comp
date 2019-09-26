import React from 'react'
import {
    Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody
} from "reactstrap";
import { serviceData } from './ServiceData';
const workTogether = require('../../img/handshake.png')
export default function AdditionalServices() {
    return (
        <Container className="add-services-container">
            <Row className="service-card">
                <Card>
                    <CardHeader>
                        <h1>A Comprehensive View of Our Services</h1>
                        <subtitle>Commercial Business Only</subtitle>
                    </CardHeader>
                    <CardBody>
                       <Row>
                           {serviceData.map((category, i) => {
                               return(
                                <Col key={i}>
                                <h5>{category.categoryTitle}</h5>
                                <hr/>
                                <ul>
                                    {category.services.map((name, i) => {return<li key={i}>{name}</li>})}
                                </ul>
                               </Col>
                               )
                           })}
                       </Row>
                       </CardBody>
                    <CardFooter><Button>Contact Us</Button></CardFooter>
                </Card>
            </Row>
                <Row>
                <img src={workTogether} alt="Two men shaking hangs"/>
                </Row>
        </Container>
    )
}

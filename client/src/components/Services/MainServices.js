import React from 'react'
import { Container, Row, Button, Card, CardTitle, CardText } from "reactstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
const titleImg = require('../../img/what-we-do.png')

export default function MainServices() {
    return (
        <Container className="main-services-container">
            <Row>
                <Card className="title-card" body>
                    <CardTitle><h1>DC's Finest Electricians</h1></CardTitle>
                    <CardText>
                        <p>As a commercially focused enterprise, DESi Electric specializes in the following three areas:</p>
                        <ul>
                            <li>Electrical Build Outs</li>
                            <li>High Voltage Installs</li>
                            <li>Heavy Panel Upgrades</li>
                        </ul>
                        <p>For a complete and comprehensive list of our abilities, see below             </p>
                    </CardText>
                </Card>
                <img src={titleImg} alt="What we do" />
            </Row>
            <Row className="pretend-footer">
                <h4>Our Services</h4>
                <Button><FaAngleDoubleDown /></Button>
            </Row>
        </Container>
    )
}

import React from 'react'
import { Button, Card, CardTitle, CardText } from "reactstrap";
import { FaAngleDoubleDown } from 'react-icons/fa';
const titleImg = require('../../img/what-we-do.png')

export default function MainServices() {
    return (
        <div className="main-services-container">
            <div className="inner__row">
                <img src={titleImg} className="services-img d-none d-lg-block" alt="What we do" />
                <Card className="row__card" body>
                    <CardTitle><h1>DMV's Finest Electricians</h1></CardTitle>
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
            </div>
            <div className="pretend-footer">
                <h4>Our Services</h4>
                <Button><FaAngleDoubleDown /></Button>
            </div>
        </div>
    )
}

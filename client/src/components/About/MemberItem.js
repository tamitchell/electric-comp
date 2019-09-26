import React, { Component } from 'react'
import { Col, Button, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { FaArrowLeft, FaEnvelope, FaPhone} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class MemberItem extends Component {


    componentDidMount() {

    }
    render() {
        const { handle } = this.props.match.params

        const memberData =
            (this.props.location.state && this.props.location.state) !== undefined
                ? this.props.location.state
                : " ";
        if (memberData.memberName === handle) {
        }

        let member = this.props.location.state.member
        return (
                <div className="member-row individual-view">
                    <Col>  
                    <Card className="member-title-card">
                        <div className="cardimage-container">
                            <CardImg top width="100%" src={member.src} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>{member.memberName}</CardTitle>
                            <CardSubtitle>{member.jobPosition}</CardSubtitle>
                        <Link to="/about">
                        <Button><FaArrowLeft />  Go Back</Button>
                        </Link>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <p>{member.details}</p>
                    </Col>
                    <Col> 
                    <p>{member.detailsCont}</p>
                    <h6>Contact {member.memberName}</h6>
                    <p>{FaEnvelope}{member.email}</p>
                    <p>{FaPhone}{member.phone}</p>
                    </Col>

                </div>

        )
    }
}

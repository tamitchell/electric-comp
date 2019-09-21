import React, { Component } from 'react'
import { Container, Row, Col, Button, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";

export default class MemberItem extends Component {


    componentDidMount() {

    }
    render() {
        const { handle } = this.props.match.params

        const memberData =
            (this.props.location.state && this.props.location.state) != undefined
                ? this.props.location.state
                : " ";
        if (memberData.memberName === handle) {
            console.log("yes")
        }

        let member = this.props.location.state.member
        console.log(memberData)
        return (
            <Container>
                <Row className="content-row">
                    <Col>  
                    <Card className="member-title-card">
                        <div className="cardimage-container">
                            <CardImg top width="100%" src={member.src} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>{member.memberName}</CardTitle>
                            <CardSubtitle>{member.jobPosition}</CardSubtitle>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    <p>{member.details}</p>
                    </Col>
                    <Col>
                    <p>{member.detailsCont}</p>
                    </Col>

                </Row>

            </Container>
        )
    }
}

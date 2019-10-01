import React from "react";
import {Button, Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { FaAngleDoubleUp } from 'react-icons/fa';
// import { Transform, Fade } from 'react-animation-components'
import { items } from "./MembersData";


const MemberGroup = () => {

    return (
        <div className="team-container">
            <div className="header">
                <h2>Meet Our Leadership</h2>
            </div>
            <div className="member-row">
                {items.map((member, i) => {
                    return (
                        <Link className="inner_col" key={i}
                            to={{
                                pathname: "/members/" + member.memberName,
                                state: { member }
                            }}
                        >
                            <Card className="member-title-card scale-up">
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
                })}
          </div>
            <div className="pretend-footer">
                <h4>Back to the Top</h4>
                <Button><FaAngleDoubleUp /></Button>
            </div>
        </div>
    )
}

export default MemberGroup
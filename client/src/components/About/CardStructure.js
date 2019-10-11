import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle} from "reactstrap";

const CardStrcture = (src, name, jobPosition) => {
    return (
    <Card className="member-title-card">
        <div className="cardimage-container">
        <CardImg top width="100%" src={src} alt="Image Not Available" />
        </div>
        <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{jobPosition}</CardSubtitle>
        </CardBody>
    </Card>
    )
}

export default CardStrcture;
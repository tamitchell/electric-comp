import React, { Component } from "react";
import {
  Container,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl
} from "reactstrap";
import { items } from "./TeamMembers";

export default class MeetTheTeam extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  nextSlide = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previousSlide = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Col xs="12" sm="12" md="6" lg="6" xl="6" className="inner-col">
            <div>
              <h6>{item.memberName}</h6>
              <img src={item.src} alt={item.altText} />
              <h6>{item.jobPosition}</h6>
            </div>
          </Col>
          <Col
            md="6"
            lg="6"
            xl="6"
            className="inner-col d-none d-md-block d-lg-block d-xl-block"
          >
            <h2>Meet The Team</h2>
            <p>{item.caption}</p>
          </Col>
        </CarouselItem>
      );
    });

    return (
      <Container fluid={true} className="meet-the-team-container">
        <Carousel
          interval={false}
          activeIndex={activeIndex}
          next={this.nextSlide}
          previous={this.previousSlide}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previousSlide}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.nextSlide}
          />
        </Carousel>
      </Container>
    );
  }
}

import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl
} from "reactstrap";

const items = [
  {
    src: require("../../img/team1.jpg"),
    altText: "Jeff Benzos",
    memberName: "Jeff Benzos",
    jobPosition: "Head of Finance",
    caption: `Fashion axe wayfarers Wes Anderson cray lo-fi you probably haven't keytar raw denim pop-upon Cosby shabby \n single-origin coffee disrupt semiotics High Life try-hard Austin banjo normcore gastropub Echo Park actually gentrify slow-carb four loko Pinterest mustache whatever paleo flexitarian`
  },
  {
    src: require("../../img/team2.jpeg"),
    altText: "Slide 2",
    memberName: "Dr. Martin Lucas",
    jobPosition: "Operations Manager",
    caption: `Fashion axe wayfarers Wes Anderson cray lo-fi you probably haven't keytar raw denim pop-upon Cosby shabby \r mlkshk DIY farm-to-table retro lomo Neutra direct trade`
  },
  {
    src: require("../../img/team3.jpg"),
    altText: "Slide 3",
    memberName: "Lana Peakes",
    jobPosition: "Social Media Coordinator",
    caption: `Fashion axe wayfarers Wes Anderson cray lo-fi you probably haven't keytar raw denim pop-upon Cosby shabby \r mlkshk DIY farm-to-table retro lomo Neutra direct trade  Tonx street art VHS ennui banh mi literally hella Schlitz vinyl hashtag beard fixie blog cliche locavore cred`
  },
  {
    src: require("../../img/team4.jpg"),
    altText: "Slide 4",
    memberName: "Tiko Richardson",
    jobPosition: "Chief Architect",
    caption: `Fashion axe wayfarers Wes Anderson cray lo-fi you probably haven't keytar raw denim pop-upon Cosby shabby \r mlkshk DIY farm-to-table retro lomo Neutra direct trade `
  }
];

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
          <Row>
            <Col className="inner-col" lg={6} md={12}>
              <h6>{item.memberName}</h6>
              <img src={item.src} alt={item.altText} />
              <h6>{item.jobPosition}</h6>
            </Col>
            <Col
              lg={6}
              className="inner-col d-none d-lg-block d-xl-block"
            >
              <p>{item.caption}</p>
            </Col>
          </Row>
        </CarouselItem>
      );
    });

    return (
      <Container fluid={true} className="meet-the-team-container">
        <h2 className="d-none d-lg-block d-xl-block">Meet The Team</h2>

        <Carousel
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

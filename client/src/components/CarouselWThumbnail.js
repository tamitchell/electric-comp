import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';

class CarouselWThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.data.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.data.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = this.props.data.map((data, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={i}
        >
          <img src={data} alt="Building" />
        </CarouselItem>
      );
    });


    return (
        <div className="carousel-container">
        <ol className="carousel-indicators">
          {this.props.data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => this.goToIndex(index)}
                className={index === activeIndex ? "" : "inactive-item" }
                style={{ backgroundImage: `url(${item})`}}
              />
            );
          })}
        </ol>
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
      </Carousel>
        </div>
    );
  }
}


export default CarouselWThumbnail;

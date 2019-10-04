import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <>
        <Carousel>
          <div>
            <img src="https://static.parade.com/wp-content/uploads/2013/07/Six-Flags-Carousel-richardcox8592.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://parade.com/wp-content/uploads/2013/07/AR2H30.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://www.fangirlquest.com/wp-content/uploads/2016/12/5077-house-on-the-rock-wisconsin-huge-carousel.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </>
    );
  }
}

export default DemoCarousel;

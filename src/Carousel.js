import React from "react";
import "./Carousel.css";
import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="carousel__image">
        <img src="/images/carouselImage/1.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/2.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/3.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/4.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/5.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/6.png" alt="" />
      </div>
      <div className="carousel__image">
        <img src="/images/carouselImage/7.png" alt="" />
      </div>
    </Slider>
  );
}

export default Carousel;

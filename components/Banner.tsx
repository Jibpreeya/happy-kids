import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import banner1 from "../public/Banner/Banner1.png";
import banner2 from "../public/Banner/Banner2.png";
import banner4 from "../public/Banner/Banner4.png";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  const slides = [
    { img: banner1, alt: "Banner 1" },
    { img: banner2, alt: "Banner 2" },
    { img: banner4, alt: "Banner 4" },
  ];

  return (
    <BannerContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Image
              src={slide.img}
              alt={slide.alt}
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        ))}
      </Slider>
      <DotContainer>
        {slides.map((slide, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotContainer>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;

  .slick-slider {
    width: 100%;
    height: 100%;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #495057;
  }
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  margin: 0 5px;
  cursor: pointer;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => (props.active ? "#212529" : " #495057")};
`;

export default Banner;

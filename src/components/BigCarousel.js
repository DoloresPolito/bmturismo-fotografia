import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

import image3 from "../../public/assets/pictures/indexcarousel/10x11.jpg";

import img1big from "../../public/assets/pictures/indexcarousel/10x4/1.jpg"
import img2big from "../../public/assets/pictures/indexcarousel/10x4/2.jpg"
import img3big from "../../public/assets/pictures/indexcarousel/10x4/3.jpg"
import img4big from "../../public/assets/pictures/indexcarousel/10x4/4.jpg"
// import img5big from "../../public/assets/pictures/indexcarousel/10x4/5.jpg"
import img6big from "../../public/assets/pictures/indexcarousel/10x4/6.jpg"


import img1medium from "../../public/assets/pictures/indexcarousel/10x7/1.jpg"
import img2medium from "../../public/assets/pictures/indexcarousel/10x7/2.jpg"
import img3medium from "../../public/assets/pictures/indexcarousel/10x7/3.jpg"
import img4medium from "../../public/assets/pictures/indexcarousel/10x7/4.jpg"
import img5medium from "../../public/assets/pictures/indexcarousel/10x7/5.jpg"
import img6medium from "../../public/assets/pictures/indexcarousel/10x7/6.jpg"

import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

const BigCarousel = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
      setSelectedImageIndex(index);
    };

    const [width, setWidth] = useState(null);

  
    useEffect(() => {
  
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <>
      <CarouselSection>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          slideNumber={true}
          autoPlay={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            // hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  left: 15,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                }}
              >
                <Image src={leftArrowImage} alt="Flecha Izquierda" />
              </button>
            // )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            // hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  right: 15,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                }}
              >
                <Image src={rightArrowImage} alt="Flecha Derecha" />
              </button>
            // )
          }
        >
          <Div>
            <Image src={width > 1000 ? img1big : width > 600 ? img1medium : image3} alt="1" />
          </Div>
          <Div>
          <Image src={width > 1000 ? img2big : width > 600 ? img2medium : image3} alt="1" />
          </Div>
          <Div>
          <Image src={width > 1000 ? img3big : width > 600 ? img3medium : image3} alt="1" />
          </Div>
          <Div>
          <Image src={width > 1000 ? img4big : width > 600 ? img4medium : image3} alt="1" />
          </Div>
          {/* <Div>
          <Image src={width > 1000 ? img5big : width > 600 ? img5medium : image3} alt="1" />
          </Div> */}
          <Div>
          <Image src={width > 1000 ? img6big : width > 600 ? img6medium : image3} alt="1" />
          </Div>
        </Carousel>
      </CarouselSection>
    </>
  );
};

const CarouselSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;
const Div = styled.div`
  height: auto;
  width: auto;

  img {
    height: 100%;
    width: 100%;
  }
`;

export default BigCarousel;

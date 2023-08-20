import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

import img1big from "../../public/assets/pictures/indexcarousel/10x4/1.jpg";
import img2big from "../../public/assets/pictures/indexcarousel/10x4/2.jpg";
import img3big from "../../public/assets/pictures/indexcarousel/10x4/3.jpg";

const CarouselComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize with the default index

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <CarouselSection>
      <Carousel
        selectedItem={selectedImageIndex}
        onChange={(index) => setSelectedImageIndex(index)}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        slideNumber={true}
        autoPlay={true}
        renderArrowPrev={
          (onClickHandler, hasPrev, label) => (
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
          )
          // )
        }
        renderArrowNext={
          (onClickHandler, hasNext, label) => (
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
          )
          // )
        }
      >
        <Div>
          <Image src={img1big} alt="1" />
          {/* <p className="legend">Legend 1</p> */}
        </Div>
        <Div>
          <Image src={img2big} alt="2" />
          {/* <p className="legend">Legend 2</p> */}
        </Div>
        <Div>
          <Image src={img3big} alt="3" />
          {/* <p className="legend">Legend 3</p> */}
        </Div>
      </Carousel>

      <SmallImagesContainer>
        <div onClick={() => handleThumbnailClick(0)}>
          <Image
            src={img1big}
            style={{ width: "160px", height: "80px" }}
            alt="Miniatura 1"
          />
        </div>
        <div onClick={() => handleThumbnailClick(1)}>
          <Image
            src={img2big}
            style={{ width: "160px", height: "80px" }}
            alt="Miniatura 2"
          />
        </div>
        <div onClick={() => handleThumbnailClick(2)}>
          <Image
            src={img3big}
            style={{ width: "160px", height: "80px" }}
            alt="Miniatura 3"
          />
        </div>
      </SmallImagesContainer>
    </CarouselSection>
  );
};

const CarouselSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const Div = styled.div`
  /* height: 500px;
  width: 60%; */
  margin: 0 auto;

  height: auto;
  width: 80%;

  img {
    height: 100%;
    width: 100%;
  }
`;

const SmallImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 10px;
    cursor: pointer;
  }
`;
export default CarouselComponent;

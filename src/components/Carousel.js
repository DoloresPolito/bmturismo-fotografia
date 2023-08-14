import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../public/assets/pictures/1.jpg";
import image2 from "../../public/assets/pictures/2.JPG";
import image3 from "../../public/assets/pictures/3.JPG";
import Image from "next/image";
import styled from "styled-components";

import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

const CarouselComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <CarouselSection>
      <Carousel
        selectedItem={selectedImageIndex}
        showThumbs={false}
        showStatus={false}

        // infiniteLoop={true}
        slideNumber={true}
        autoPlay={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
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
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
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
        }
      >
        <Div>
          <Image src={image1} />
          {/* <p className="legend">Legend 1</p> */}
        </Div>
        <Div>
          <Image src={image2} />
          {/* <p className="legend">Legend 2</p> */}
        </Div>
        <Div>
          <Image src={image3} />
          {/* <p className="legend">Legend 3</p> */}
        </Div>
      </Carousel>

      <SmallImagesContainer>
        <div onClick={() => handleThumbnailClick(0)}>
          <Image
            src={image1}
            style={{ width: "140px", height: "90px" }}
            alt="Miniatura 1"
          />
        </div>
        <div onClick={() => handleThumbnailClick(1)}>
          <Image
            src={image2}
            style={{ width: "140px", height: "90px" }}
            alt="Miniatura 2"
          />
        </div>
        <div onClick={() => handleThumbnailClick(2)}>
          <Image
            src={image3}
            style={{ width: "140px", height: "90px" }}
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
  height: 500px;
  width: 60%;
  margin: 0 auto;

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

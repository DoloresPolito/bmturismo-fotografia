import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import image1 from "../../public/assets/pictures/indexcarousel/proporcion 10x3.jpg";
import image2 from "../../public/assets/pictures/indexcarousel/proporcion 10x4.jpg";
// import image3 from "../../public/assets/pictures/indexcarousel/proporcion 10x5.jpg";
import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

const BigCarousel = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
      setSelectedImageIndex(index);
    };
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
            <Image src={image2} alt="1" />
          </Div>
          <Div>
            <Image src={image2} alt="2" />
          </Div>
          <Div>
            <Image src={image2} alt="3" />
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

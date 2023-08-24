import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

import turismo0big from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x6/0.jpg";
import turismo1big from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x6/1.jpg";
import turismo2big from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x6/2.jpg";
import turismo3big from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x6/3.jpg";
// import turismo4big from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x6/4.jpg";

import turismo0small from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x11/0.jpg";
import turismo1small from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x11/1.jpg";
import turismo2small from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x11/2.jpg";
import turismo3small from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x11/3.jpg";
// import turismo4small from "../../public/assets/pictures/sectionscarousel/compress/turismo 10x11/4.jpg";

import { RotatingLines } from "react-loader-spinner";

const CarouselTourism = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize with the default index

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const [width, setWidth] = useState(null);

  const [mostrarPrimerContenido, setMostrarPrimerContenido] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrarPrimerContenido(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

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
        {mostrarPrimerContenido ? (
          <RotatingLines
            strokeColor="#C29A00"
            strokeWidth="3"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        ) : (
          <>
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
                      top: "60%",
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
                      top: "60%",
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
                <Image
                  src={width > 1000 ? turismo0big : turismo0small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? turismo1big : turismo1small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? turismo2big : turismo2small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? turismo3big : turismo3small}
                  alt="1"
                />
              </Div>
              {/* <Div>
          <Image src={width > 1000 ? turismo4big : turismo4small} alt="1" />
        </Div> */}
            </Carousel>

            <SmallImagesContainer>
              <div onClick={() => handleThumbnailClick(0)}>
                <Image src={turismo0big} alt="Miniatura 1" />
              </div>
              <div onClick={() => handleThumbnailClick(1)}>
                <Image src={turismo1big} alt="Miniatura 2" />
              </div>
              <div onClick={() => handleThumbnailClick(2)}>
                <Image src={turismo2big} alt="Miniatura 3" />
              </div>
              <div onClick={() => handleThumbnailClick(3)}>
                <Image src={turismo3big} alt="Miniatura 4" />
              </div>
              {/* <div onClick={() => handleThumbnailClick(4)}>
          <Image src={turismo4big} alt="Miniatura 5" />
        </div> */}
            </SmallImagesContainer>
          </>
        )}
      </CarouselSection>
    </>
  );
};

const CarouselSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 140vh;

  @media screen and (max-width: 1000px) {
    min-height: 150vh;
  }

  @media screen and (max-width: 600px) {
    button {
      display: none;
    }
  }
`;
const Div = styled.div`
  margin: 0 auto;
  margin-top: 180px;
  height: auto;
  width: 60%;

  img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 250px;
    width: 90%;
  }
`;

const SmallImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 40px;
  img {
    padding: 10px;
    cursor: pointer;
    width: auto;
    height: 70px;
  }
`;
export default CarouselTourism;

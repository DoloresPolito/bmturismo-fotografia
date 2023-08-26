import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

import professional0big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/0.jpg";
import professional1big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/1.jpg";
import professional2big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/2.jpg";
import professional3big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/3.jpg";
import professional4big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/4.jpg";
import professional5big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/5.jpg";
import professional6big from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x6/6.jpg";

import professional0small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/0.jpg";
import professional1small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/1.jpg";
import professional2small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/2.jpg";
import professional3small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/3.jpg";
import professional4small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/4.jpg";
import professional5small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/5.jpg";
import professional6small from "../../public/assets/pictures/sectionscarousel/compress/retrato profesional 10x11/6.jpg";

import { RotatingLines } from "react-loader-spinner";

const CarouselProfessional = () => {
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
          <>
            <RingContainer>
              <RotatingLines
                strokeColor="#C29A00"
                strokeWidth="3"
                animationDuration="0.75"
                width="70"
                visible={true}
              />
            </RingContainer>
          </>
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
                  src={width > 1000 ? professional2big : professional2small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional3big : professional3small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional0big : professional0small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional1big : professional1small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional4big : professional4small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional5big : professional5small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? professional6big : professional6small}
                  alt="1"
                />
              </Div>
            </Carousel>

            <SmallImagesContainer>
              <div onClick={() => handleThumbnailClick(0)}>
                <Image src={professional2big} alt="Miniatura 1" />
              </div>
              <div onClick={() => handleThumbnailClick(1)}>
                <Image src={professional3big} alt="Miniatura 2" />
              </div>
              <div onClick={() => handleThumbnailClick(2)}>
                <Image src={professional0big} alt="Miniatura 3" />
              </div>
              <div onClick={() => handleThumbnailClick(3)}>
                <Image src={professional1big} alt="Miniatura 4" />
              </div>
              <div onClick={() => handleThumbnailClick(4)}>
                <Image src={professional4big} alt="Miniatura 5" />
              </div>
              <div onClick={() => handleThumbnailClick(5)}>
                <Image src={professional5big} alt="Miniatura 5" />
              </div>
              <div onClick={() => handleThumbnailClick(6)}>
                <Image src={professional6big} alt="Miniatura 5" />
              </div>
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
  height: auto;
  min-height: 100vh;

  @media screen and (max-width: 600px) {
    button {
      display: none;
    }
  }
`;
const Div = styled.div`
  margin: 0 auto;
  margin-top: 200px;
  height: auto;
  width: 60%;

  img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    margin-top: 230px;
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

const RingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CarouselProfessional;

import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import leftArrowImage from "../../public/assets/icons/back.png";
import rightArrowImage from "../../public/assets/icons/foward.png";

import projects0big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/0.jpg";
import projects1big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/1.jpg";
import projects2big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/2.jpg";
import projects3big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/3.jpg";
import projects4big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/4.jpg";
// import projects5big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/5.jpg";
// import projects6big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/6.jpg";
// import projects7big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/7.jpg";
// import projects8big from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x6/8.jpg";

import projects0small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/0.jpg";
import projects1small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/1.jpg";
import projects2small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/2.jpg";
import projects3small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/3.jpg";
import projects4small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/4.jpg";
// import projects5small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/5.jpg";
// import projects6small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/6.jpg";
// import projects7small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/7.jpg";
// import projects8small from "../../public/assets/pictures/sectionscarousel/compress/proyectos 10x11/8.jpg";

import { RotatingLines } from "react-loader-spinner";

const CarouselProjects = () => {
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
                  src={width > 1000 ? projects0big : projects0small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? projects1big : projects1small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? projects2big : projects2small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? projects3big : projects3small}
                  alt="1"
                />
              </Div>
              <Div>
                <Image
                  src={width > 1000 ? projects4big : projects4small}
                  alt="1"
                />
              </Div>
              {/* <Div>
          <Image src={width > 1000 ? projects5big : projects4small} alt="1" />
        </Div>
        <Div>
          <Image src={width > 1000 ? projects6big : projects6small} alt="1" />
        </Div>
        <Div>
          <Image src={width > 1000 ? projects7big : projects7small} alt="1" />
        </Div>
        <Div>
          <Image src={width > 1000 ? projects8big : projects8small} alt="1" />
        </Div> */}
            </Carousel>

            <SmallImagesContainer>
              <div onClick={() => handleThumbnailClick(0)}>
                <Image src={projects0big} alt="Miniatura 1" />
              </div>
              <div onClick={() => handleThumbnailClick(1)}>
                <Image src={projects1big} alt="Miniatura 2" />
              </div>
              <div onClick={() => handleThumbnailClick(2)}>
                <Image src={projects2big} alt="Miniatura 3" />
              </div>
              <div onClick={() => handleThumbnailClick(3)}>
                <Image src={projects3big} alt="Miniatura 4" />
              </div>
              <div onClick={() => handleThumbnailClick(4)}>
                <Image src={projects4big} alt="Miniatura 5" />
              </div>
              {/* <div onClick={() => handleThumbnailClick(5)}>
          <Image src={projects5big} alt="Miniatura 5" />
        </div>
        <div onClick={() => handleThumbnailClick(6)}>
          <Image src={projects6big} alt="Miniatura 5" />
        </div>
        <div onClick={() => handleThumbnailClick(7)}>
          <Image src={projects7big} alt="Miniatura 5" />
        </div>
        <div onClick={() => handleThumbnailClick(8)}>
          <Image src={projects8big} alt="Miniatura 5" />
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
export default CarouselProjects;

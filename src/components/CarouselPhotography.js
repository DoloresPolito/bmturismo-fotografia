// import React, { useState, useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// import styled from "styled-components";
// import leftArrowImage from "../../public/assets/icons/back.png";
// import rightArrowImage from "../../public/assets/icons/foward.png";

// import fotografia0big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/0.jpg";
// import fotografia1big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/1.jpg";
// import fotografia2big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/2.jpg";
// import fotografia3big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/3.jpg";
// import fotografia4big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/4.jpg";
// import fotografia5big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/5.jpg";
// import fotografia6big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/6.jpg";
// import fotografia7big from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x6/7.jpg";

// import fotografia0small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/0.jpg";
// import fotografia1small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/1.jpg";
// import fotografia2small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/2.jpg";
// import fotografia3small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/3.jpg";
// import fotografia4small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/4.jpg";
// import fotografia5small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/5.jpg";
// import fotografia6small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/6.jpg";
// import fotografia7small from "../../public/assets/pictures/sectionscarousel/compress/fotografia 10x11/7.jpg";

// const CarouselPhotography = () => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initialize with the default index

//   const handleThumbnailClick = (index) => {
//     setSelectedImageIndex(index);
//   };

//   const [width, setWidth] = useState(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };
//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <CarouselSection>
//       <Carousel
//         selectedItem={selectedImageIndex}
//         onChange={(index) => setSelectedImageIndex(index)}
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop={true}
//         slideNumber={true}
//         autoPlay={true}
//         renderArrowPrev={
//           (onClickHandler, hasPrev, label) => (
//             // hasPrev && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               style={{
//                 position: "absolute",
//                 zIndex: 2,
//                 left: 15,
//                 top: "60%",
//                 transform: "translateY(-50%)",
//                 background: "transparent",
//                 border: "none",
//               }}
//             >
//               <Image src={leftArrowImage} alt="Flecha Izquierda" />
//             </button>
//           )
//           // )
//         }
//         renderArrowNext={
//           (onClickHandler, hasNext, label) => (
//             // hasNext && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               style={{
//                 position: "absolute",
//                 zIndex: 2,
//                 right: 15,
//                 top: "60%",
//                 transform: "translateY(-50%)",
//                 background: "transparent",
//                 border: "none",
//               }}
//             >
//               <Image src={rightArrowImage} alt="Flecha Derecha" />
//             </button>
//           )
//           // )
//         }
//       >
//         <Div>
//           <Image src={width > 1000 ? fotografia0big : fotografia0small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia1big : fotografia1small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia2big : fotografia2small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia3big : fotografia3small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia4big : fotografia4small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia5big : fotografia5small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia6big : fotografia6small} alt="1" />
//         </Div>
//         <Div>
//           <Image src={width > 1000 ? fotografia7big : fotografia7small} alt="1" />
//         </Div>
//       </Carousel>

//       <SmallImagesContainer>
//         <div onClick={() => handleThumbnailClick(0)}>
//           <Image src={fotografia0big} alt="Miniatura 1" />
//         </div>
//         <div onClick={() => handleThumbnailClick(1)}>
//           <Image src={fotografia1big} alt="Miniatura 2" />
//         </div>
//         <div onClick={() => handleThumbnailClick(2)}>
//           <Image src={fotografia2big} alt="Miniatura 3" />
//         </div>
//         <div onClick={() => handleThumbnailClick(3)}>
//           <Image src={fotografia3big} alt="Miniatura 4" />
//         </div>
//         <div onClick={() => handleThumbnailClick(4)}>
//           <Image src={fotografia4big} alt="Miniatura 5" />
//         </div>
//         <div onClick={() => handleThumbnailClick(5)}>
//           <Image src={fotografia5big} alt="Miniatura 5" />
//         </div>
//         <div onClick={() => handleThumbnailClick(6)}>
//           <Image src={fotografia6big} alt="Miniatura 5" />
//         </div>
//         <div onClick={() => handleThumbnailClick(7)}>
//           <Image src={fotografia7big} alt="Miniatura 5" />
//         </div>
//       </SmallImagesContainer>
//     </CarouselSection>
//   );
// };

// const CarouselSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-top: 30px;

//   @media screen and (max-width: 600px) {
//     button {
//       display: none;
//     }
//   }
// `;
// const Div = styled.div`
//   margin: 0 auto;
//   margin-top: 180px;
//   height: auto;
//   width: 60%;

//   img {
//     height: 100%;
//     width: 100%;
//   }
//   @media screen and (max-width: 600px) {
//     margin-top: 250px;
//     width: 90%;
//   }
// `;

// const SmallImagesContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   max-width: 800px;
//   img {
//     padding: 10px;
//     cursor: pointer;
//     width: auto;
//     height: 70px;
//   }
// `;
// export default CarouselPhotography;

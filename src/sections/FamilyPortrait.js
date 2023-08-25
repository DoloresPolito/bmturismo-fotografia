import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/portrait/Retrato familiar - Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/portrait/Retrato familiar - Inicial II.jpg";
import image3 from "../../public/assets/pictures/indexpage/portrait/Retrato Familiar.jpg";
import imagemobile from "../../public/assets/pictures/mobileindex/Retrato familiar - Inicial II- CEL.jpg";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FamilyPortrait = () => {
  const { t: translate } = useTranslation("familyportrait");
  const [width, setWidth] = useState(null);

  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.3 });

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

  useEffect(() => {
    if (inView) {


      animation.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });

     
    }

    if (!inView) {

      animation.start({
        opacity: 0,
      });


    }
  }, [inView]);

  const medium = 1200;

  return (
    <>
      <FamilyPortraitSection ref={ref}>
        <Title props={translate("title")} />

        <Content>
          <TextContent>
            <motion.h6 animate={animation}>{translate("text")}</motion.h6>
            <motion.h4 animate={animation}>{translate("subtitle")}</motion.h4>
            <Button props="familyportrait" />
          </TextContent>

          <ImageContent>
            {width > medium ? (
              <>
                <Image1>
                  <Image src={image1} alt="1" />
                </Image1>
                <Image2>
                  <Image src={image2} alt="2" />
                </Image2>
                <Image3>
                  <Image src={image3} alt="3" />
                </Image3>
              </>
            ) : width > 1000 ? (
              <>
                <>
                  <Image1>
                    <Image src={image1} alt="1" />
                  </Image1>
                  <Image2>
                    <Image src={image2} alt="2" />
                  </Image2>
                </>
              </>
            ) : (
              <>
                <>
                  <Image0>
                    <Image src={imagemobile} alt="2" />
                  </Image0>
                </>
              </>
            )}
          </ImageContent>
        </Content>
      </FamilyPortraitSection>
    </>
  );
};

const FamilyPortraitSection = styled.div`
  width: 100%;
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: auto;

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 90%;
    margin: 50px auto;
  }
`;

const Content = styled.div`
  width: 95%;
  height: 375px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const ImageContent = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  background-color: white;
`;
const TextContent = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;

  @media screen and (max-width: 740px) {
    margin-top: 40px;
    margin-right: 0px !important;
    margin-bottom: 40px;
    max-width: 800px !important;
  }

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    max-width: 240px;
    margin-top: 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

  h6 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
`;

const Image0 = styled.div`
  background-color: lightgray;
  height: 275px;
  width: 272px;
  margin: 0 20px;
  @media screen and (max-width: 740px) {
    margin-left: 0px;
  }

  img {
    height: 275px;
    width: 272px;
  }
`;

const Image1 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
  @media screen and (max-width: 740px) {
    margin-left: 0px;
  }

  img {
    height: 375px;
    width: 272px;
  }
`;

const Image2 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
  img {
    height: 375px;
    width: 272px;
  }
`;

const Image3 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
  img {
    height: 375px;
    width: 272px;
  }
`;

export default FamilyPortrait;

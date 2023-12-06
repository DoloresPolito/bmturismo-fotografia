import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

import Image from "next/image";
import image1 from "../../public/assets/pictures/indexpage/portrait/Retrato profesional - Inicial.jpg";

import imagemobile from "../../public/assets/pictures/mobileindex/Retrato profesional - Inicial - CEL.jpg";
import olicuadrada from "../../public/assets/pictures/mobileindex/oli-cuadrada.JPG";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfessionalPortrait = () => {
  const { t: translate } = useTranslation("professionalportrait");

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

  return (
    <>
      <ProfessionalPortraitSection ref={ref}>
        <Title props={translate("title")} />
        <Content>
          <ImageContent>
            {width > 740 ? (
              <>
                <Image src={image1} alt="1" />
              </>
            ) : (
              <>
                <Image src={olicuadrada} alt="1" />
              </>
            )}
          </ImageContent>
          <TextContent>
            <motion.h6 animate={animation}>{translate("text1")}</motion.h6>
            <motion.h4 animate={animation}> {translate("subtitle")}</motion.h4>
            <Button props="/professionalportrait" />
          </TextContent>
        </Content>
      </ProfessionalPortraitSection>
    </>
  );
};

const ProfessionalPortraitSection = styled.div`
  width: 100%;
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width:1600px;
  margin:0 auto;
  margin-bottom: 50px;
  height: auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 50px auto;
    height: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  width: 95%;
  height: 375px;
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 1000px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;

const ImageContent = styled.div`
  /* flex: 50%; */
  background-color: lightgray;
  height: 375px;
  width: 620px;
  @media screen and (max-width: 1000px) {
    flex: 0%;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 740px) {
    height: 300px;
    width: 300px;
  }

  img {
    height: 375px;
    width: 620px;

    @media screen and (max-width: 740px) {
      height: 300px;
      width: 300px;
    }
  }
`;
const TextContent = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  @media screen and (max-width: 1000px) {
    flex: 0%;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 0px;
  }

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    max-width: 240px;
    margin-top: 0px;
  }

  h6 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-top: -10px;
    line-height: 18px;
    @media screen and (max-width: 1000px) {
      max-width: 100%;
    }
  }
`;

export default ProfessionalPortrait;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";
import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/photography/Clases - Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/photography/Clases - Inicial II.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Photography = () => {
  const { t: translate } = useTranslation("photography");

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
      <PhotographySection ref={ref}>
        <Title props={translate("title")} />

        <Content>
          <ImageContent>
            {width > 1100 ? (
              <>
                <Column1>
                  <Image src={image1} alt="1" />
                </Column1>
                <Column2>
                  <div>
                    <Image src={image2} alt="2" />
                  </div>
                  <p>{translate("text3")}</p>
                </Column2>
              </>
            ) : (
              <>
                <Column2>
                  <div>
                    <Image src={image2} alt="2" />
                  </div>
                  <p>{translate("text3")}</p>
                </Column2>
              </>
            )}
          </ImageContent>
          <TextContent>
            <div>
              <motion.h6 animate={animation}>{translate("text1")}</motion.h6>
              <motion.h6 animate={animation}>{translate("text2")}</motion.h6>
            </div>

            <motion.h4 animate={animation}> {translate("subtitle")}</motion.h4>
            <Button props="photography" />
          </TextContent>
        </Content>
      </PhotographySection>
    </>
  );
};

const PhotographySection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  max-width:1600px;
  margin:0 auto;
  margin-bottom: 50px;
  /* background-color:red; */
  /* height: 80vh; */

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 50px auto;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 95%;
  height: 393px;
  display: flex;
  margin-top: 40px;
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const ImageContent = styled.div`
  flex: 50%;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Column1 = styled.div`
  background-color: lightgray;
  height: 393px;
  width: 238px;
  img {
    height: 393px;
    width: 238px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
  @media screen and (max-width: 1000px) {
    padding-left: 0px !important;
  }

  @media screen and (max-width: 740px) {
    padding-left: 0px !important;
  }

  div {
    height: 256px;
    width: 341px;
    background-color: lightgray;
    @media screen and (max-width: 740px) {
      padding-left: 0px !important;
    }

    @media screen and (max-width: 740px) {
      height: 256px;
      width: 300px;
      padding-left: 0px !important;
    }
    img {
      height: 256px;
      width: 341px;
      
      @media screen and (max-width: 740px) {
        height: 256px;
        width: 300px;
      }
    }
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    max-width: 330px;

    /* line-height: 18px; */
  }
`;
const TextContent = styled.div`
  /* flex: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  @media screen and (max-width: 1000px) {
    /* margin-left: 0px; */
    margin-bottom: 40px;
    height: auto;
  }

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    height: auto;
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
    /* font-family: "Inter", sans-serif; */
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-top: 0px;
    line-height: 18px;
    margin: 0 0 18px 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    @media screen and (max-width: 1000px) {
      max-width: 100%;
    }
  }
`;

export default Photography;

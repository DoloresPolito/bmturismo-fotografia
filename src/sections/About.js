import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import Title from "../components/Title";
import Image from "next/image";

import img1big from "../../public/assets/pictures/indexcarousel/10x4/1.jpg";
// import img1medium from "../../public/assets/pictures/indexcarousel/10x7/1.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const About = () => {
  const { t: translate } = useTranslation("about");

  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {


      animation.start({
        opacity: 1,
        transition: {
          duration: 1.5,
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
      <AboutSection id="about" ref={ref}>
        <Image src={img1big} alt="1" />
        <Title props="BELÉN MIGUENS" />
        <AboutContainer>
          <AboutText animate={animation}>{translate("text")}</AboutText>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

const AboutSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width:1600px;
  margin:0 auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 50px auto;
    height: 100%;
  }

  img {
    height: 550px;
    width: 100%;
    margin-bottom: 40px;
    object-fit: cover;
  }
`;

const AboutContainer = styled.div`
  width: 95%;
  display: flex;
  /* justify-content: center; */
  margin-top: 60px;
  margin-bottom: 80px;
`;

const AboutText = styled(motion.p)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  max-width: 1000px;
  /* text-align: center; */
  color: #2B2B2B;
  line-height: 25px;
  font-family: "Montserrat", sans-serif;
    font-weight: 400;
`;
export default About;

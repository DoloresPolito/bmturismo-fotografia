import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/projects/Sustentabilidad - Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/projects/Sustentabilidad - Inicial II.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import link from "../../public/assets/icons/link.png";

const Projects = () => {
  const { t: translate } = useTranslation("projects");
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
      <ProjectsSection ref={ref}>
        <Title props={translate("title")} />

        <Content>
          <TextContent>
            <div>
              <motion.h6 animate={animation}>{translate("text1")}</motion.h6>

              <Link
                href="https://www.instagram.com/artesanosdelibera/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkDiv>
                  <motion.h5 animate={animation}>Artesanos del Iberá</motion.h5>
                  <Image src={link} alt="link" />
                </LinkDiv>
              </Link>

              <Link
                href="https://www.instagram.com/lanur.swiss/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkDiv>
                  <motion.h5 animate={animation}>Lanur Swiss</motion.h5>
                  <Image src={link} alt="link" />
                </LinkDiv>
              </Link>
            </div>
            <motion.h4 animate={animation}>{translate("text4")}</motion.h4>

            <Button props="/projects" />
          </TextContent>

          <ImageContent>
            {width > 1000 ? (
              <>
                {" "}
                <Column1>
                  <Image src={image1} alt="1" />
                </Column1>
                <Column2>
                  <div>
                    <Image src={image2} alt="2" />
                  </div>
                  <p>{translate("text5")}</p>
                </Column2>
              </>
            ) : (
              <>
                <Column1>
                  <Image src={image1} alt="1" />
                </Column1>
              </>
            )}
          </ImageContent>
        </Content>
      </ProjectsSection>
    </>
  );
};

const ProjectsSection = styled.div`
  width: 100%;
  /* height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;

  max-width:1600px;
  margin:0 auto;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 90%;
    margin: 50px auto;
  }
`;

const Content = styled.div`
  width: 95%;
  height: 360px;
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
    height: auto;
    margin-bottom: 40px;
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
  height: 360px;
  width: 284px;
  img {
    height: 360px;
    width: 284px;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 30px;
  }

  @media screen and (max-width: 740px) {
    margin-left: 0px;
    margin-bottom: 30px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
  @media screen and (max-width: 740px) {
    padding-left: 0px;
  }

  div {
    height: 284px;
    width: 284px;
    background-color: lightgray;
    img {
      height: 284px;
      width: 284px;
    }
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 100;
    text-align: justify;
    max-width: 280px;

    /* line-height: 18px; */
  }
`;
const TextContent = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;

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
    text-align: justify;
    margin-top: 0px;
    line-height: 18px;
    max-width: 600px;
    margin: 0 0 18px 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  h5 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    margin-top: 0px;
    line-height: 18px;
    max-width: 600px;
    margin: 0 0 18px 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-decoration: underline;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 15px;
    width: 15px;
    padding-left: 5px;
    padding-top: 2px;
  }
`;

export default Projects;

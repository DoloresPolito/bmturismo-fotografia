import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/projects/Sustentabilidad - Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/projects/Sustentabilidad - Inicial II.jpg";


const Projects = () => {
  const { t: translate } = useTranslation("projects");
  const [width, setWidth] = useState(null);

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
      <ProjectsSection id="projects">
        <Title props={translate("title")} />

        <Content>
          <TextContent>
            <div>
              <h6>{translate("text1")}</h6>
              <h6>{translate("text2")}</h6>
              <h6>{translate("text3")}</h6>
            </div>
            <h4>{translate("text4")}</h4>

            <Button props="/projects" />
          </TextContent>

          <ImageContent>
            {width > 1000 ? (
              <>
                {" "}
                <Column1>
                <Image src={image1} alt="1"/>
                </Column1>
              </>
            ) : (
              <></>
            )}

            <Column2>
              <div>   
                 <Image src={image2} alt="2"/>
              </div>
              <p>
              {translate("text5")}
              </p>
            </Column2>
          </ImageContent>
        </Content>
      </ProjectsSection>
    </>
  );
};

const ProjectsSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


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
  img{
    height: 360px;
  width: 284px;
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
    img{
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

  }
`;

export default Projects;

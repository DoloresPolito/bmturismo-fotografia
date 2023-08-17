import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

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
            <h4>{translate("subtitle")}</h4>

            <Button props="/projects" />
          </TextContent>

          <ImageContent>
            {width > 1000 ? (
              <>
                {" "}
                <Column1></Column1>
              </>
            ) : (
              <></>
            )}

            <Column2>
              <div></div>
              <p>
                “tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet”
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
    margin: 0 auto;
  }
  /* @media screen and (max-width: 800px) {
    width: 85%;
    margin: 0 auto;
  } */
`;

const Content = styled.div`
  width: 95%;
  height: 360px;
  display: flex;
  margin-top: 40px;
  /* @media screen and (max-width: 980px) {
    height: auto;
    flex-direction: column-reverse;
  } */
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

  @media screen and (max-width: 980px) {
    /* flex: 0%; */
    /* background-color:blue;
    justify-content: space-between;
    padding: 0px 50px; */
  }
  @media screen and (max-width: 740px) {


  }
`;

const Column1 = styled.div`
  background-color: lightgray;
  height: 360px;
  width: 284px;
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
  /* @media screen and (max-width: 980px) {
    flex: 0%;
    margin-top: 40px;
    margin-bottom: 40px;
  } */
  /* div {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    background-color: red;
    margin: 0 !important;
  } */

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
    /* @media screen and (max-width: 980px) {
      max-width: 100%;
    } */
  }
`;

export default Projects;

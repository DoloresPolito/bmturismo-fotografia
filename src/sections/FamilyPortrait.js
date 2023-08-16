import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

const FamilyPortrait = () => {
  const { t: translate } = useTranslation("familyportrait");
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

  const medium = 900;

  return (
    <>
      <FamilyPortraitSection id="familyportrait">
        <Title props={translate("title")} />

        <Content>
          <TextContent>
            <h6>{translate("text")}</h6>
            <h4>{translate("subtitle")}</h4>
            <Button props="familyportrait" />
          </TextContent>

          <ImageContent>
            {width > medium ? (<>
              <Image1></Image1>
            <Image2></Image2>
            <Image3></Image3></>) : (<>
              <Image1></Image1>
            <Image2></Image2></>)}
        
          </ImageContent>
        </Content>
      </FamilyPortraitSection>
    </>
  );
};

const FamilyPortraitSection = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
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
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const ImageContent = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  background-color: white;
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: flex-start;
    margin-left: -20px;
  }
`;
const TextContent = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;

  @media screen and (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0px !important;
    margin-bottom: 40px;
    max-width: 800px !important;
  }

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    max-width: 240px;
    margin-top: 0px;
  }

  h6 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 100;
    line-height: 18px;
    margin-top: 0px;

    @media screen and (max-width: 1200px) {
      /* max-width: 800px !important; */
    }
  }
`;

const Image1 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
`;

const Image2 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
`;

const Image3 = styled.div`
  background-color: lightgray;
  height: 375px;
  width: 272px;
  margin: 0 20px;
`;

export default FamilyPortrait;

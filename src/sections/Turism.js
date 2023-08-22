import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";
import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/turism/Turismo Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/turism/Turismo Inicial II.jpg";


const Turism = () => {
  const { t: translate } = useTranslation("turism");
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
      <TurismSection id="turism">
        <TitleSection>
          <TitleContainer>
            <TitleText>{translate("title")}</TitleText>
          </TitleContainer>
        </TitleSection>

        <Content>
          <TextContent>
            <div>
              <h6>{translate("text1")}</h6>
              <h6>{translate("text2")}</h6>
            </div>

            <h4> {translate("subtitle")}</h4>
            <Button props="turism" />
          </TextContent>
          <ImageContent>
            {width > 1000 ? (
              <>
                <Column1>
                  <Image src={image2} alt="2" />
                </Column1>
              </>
            ) : (
              <></>
            )}

            <Column2>
              <div>
                <Image src={image1} alt="1" />
              </div>
            </Column2>
          </ImageContent>
        </Content>
      </TurismSection>
    </>
  );
};

const TurismSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 90%;
    margin: 40px auto;
  }
`;

const TitleSection = styled.div`
  width: 95%;
  margin: 0 auto;
  height: auto;
  display: flex;
`;
const TitleContainer = styled.div`
  width: 550px;
  height: 103px;
  border-bottom: 3px solid #c29a00;
`;

const TitleText = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 100;
  color: #2b2b2b;
  text-transform: uppercase;
  width: 250px;
  font-family: 'Montserrat', sans-serif;
font-weight: 600;
`;

const Content = styled.div`
  width: 95%;
  height: 380px;
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 1000px) {
    height: auto;
  }
  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const ImageContent = styled.div`
  /* flex: 50%; */
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`;

const Column1 = styled.div`
  background-color: lightgray;
  height: 253px;
  width: 233px;
  img {
    height: 253px;
    width: 233px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  align-items: flex-end;
  padding-left: 40px;
  @media screen and (max-width: 740px) {
    padding-left: 0px;
  }

  div {
    height: 380px;
    width: 340px;
    background-color: lightgray;
    img {
      height: 380px;
      width: 340px;
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
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;
  @media screen and (max-width: 740px) {
    margin-top: 40px;
    max-width: 100%;
  }

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    max-width: 240px;
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
font-weight: 600;
  }

  h6 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    /* font-weight: 100; */
    text-align: justify;
    margin-top: 0px;
    line-height: 18px;
    font-weight: 400;
    margin: 0 0 18px 0;
    font-family: 'Montserrat', sans-serif;
font-weight: 400;

  }
`;

export default Turism;

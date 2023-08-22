import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";
import Image from "next/image";

import image1 from "../../public/assets/pictures/indexpage/photography/Clases - Inicial I.jpg";
import image2 from "../../public/assets/pictures/indexpage/photography/Clases - Inicial II.jpg";

const Photography = () => {
  const { t: translate } = useTranslation("photography");

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
      <PhotographySection >
        <Title props={translate("title")} />

        <Content>
          <ImageContent>


            {width > 1000 ? (
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
                <Column1>
                  {" "}
                  <Image src={image1} alt="1" />
                </Column1>
              </>
            )}
          </ImageContent>
          <TextContent>
            <div>
              <h6>{translate("text1")}</h6>
              <h6>{translate("text2")}</h6>
            </div>

            <h4> {translate("subtitle")}</h4>
            <Button props="photography" />
          </TextContent>
        </Content>
      </PhotographySection>
    </>
  );
};

const PhotographySection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  @media screen and (max-width: 740px) {
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
  @media screen and (max-width: 740px) {
    padding-left: 0px;
  }

  div {
    height: 256px;
    width: 341px;
    background-color: lightgray;
    img {
      height: 256px;
      width: 341px;
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

  @media screen and (max-width: 740px) {
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

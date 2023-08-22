import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

import Image from "next/image";
import image1 from "../../public/assets/pictures/indexpage/portrait/Retrato profesional - Inicial.jpg";

const ProfessionalPortrait = () => {
  const { t: translate } = useTranslation("professionalportrait");

  return (
    <>
      <ProfessionalPortraitSection>
        <Title props={translate("title")} />
        <Content>
          <ImageContent>
            <Image src={image1} alt="1" />
          </ImageContent>
          <TextContent>
            <h6>{translate("text1")}</h6>
            <h4> {translate("subtitle")}</h4>
            <Button props="/professionalportrait" />
          </TextContent>
        </Content>
      </ProfessionalPortraitSection>
    </>
  );
};

const ProfessionalPortraitSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 1000px) {
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

  img {
    height: 375px;
    width: 620px;
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

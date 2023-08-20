import styled from "styled-components";
import { useTranslation } from "next-i18next";
import Title from "../components/Title";
import Image from "next/image";

import img1big from "../../public/assets/pictures/indexcarousel/10x4/1.jpg";
import img1medium from "../../public/assets/pictures/indexcarousel/10x7/1.jpg";

const About = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <AboutSection id="about">
        <Image src={img1big} alt="1" />
        <Title props="BELÉN MIGUENS" />
        <AboutContainer>
          <AboutText>{translate("text")}</AboutText>
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

  img {
    height: 550px;
    width: 100%;
    margin-bottom: 40px;
  }
`;

const AboutContainer = styled.div`
  width: 95%;
  display: flex;
  /* justify-content: center; */
  margin-top: 80px;
  margin-bottom: 80px;
`;

const AboutText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 1000px;
  /* text-align: center; */
  color: #c29a00;
  line-height: 30px;
`;
export default About;

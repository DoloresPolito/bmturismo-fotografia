import styled from "styled-components";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <AboutSection>
        <AboutContainer>
          <AboutText>
          {translate("text")}
          </AboutText>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

const AboutSection = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  
`;

const AboutText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  max-width: 1000px;
  text-align: center;
  color:#C29A00;
  line-height: 30px;
`;
export default About;

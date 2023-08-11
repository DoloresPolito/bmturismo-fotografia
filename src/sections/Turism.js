import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

const Turism = () => {
  const { t: translate } = useTranslation("turism");

  return (
    <>
      <TurismSection>

      <TitleSection>
        <TitleContainer>
          <TitleText>{translate("title")}</TitleText>
        </TitleContainer>
      </TitleSection>
       
  
   
      </TurismSection>
    </>
  );
};

const TurismSection = styled.div`
  width: 100%;
  height: 80vh;

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
  font-weight: 500;
  color: #2b2b2b;
  text-transform: uppercase;
  width: 320px;
`;


export default Turism;
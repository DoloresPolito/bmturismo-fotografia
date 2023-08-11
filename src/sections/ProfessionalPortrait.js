import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

const ProfessionalPortrait = () => {
  const { t: translate } = useTranslation("professionalportrait");

  return (
    <>
      <ProfessionalPortraitSection>
        <Title props={translate("title")} />
        <Content>
          <ImageContent>

          </ImageContent>
          <TextContent>
            <h4> {translate("text1")}</h4>
            <h6>{translate("text2")}</h6>
            <Button />
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
`;

const Content = styled.div`
  width: 95%;
  height: 375px;
  display: flex;
  margin-top: 40px;

`;

const ImageContent = styled.div`
  flex: 50%;
  background-color: lightgray;
`;
const TextContent = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;

  h4 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    max-width: 240px;
    margin-top: 0px;
  }

   h6{
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 100;
    text-align: justify;
    margin-top: -10px;
    line-height: 18px
  
  }
`;

export default ProfessionalPortrait;

import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

const FamilyPortrait = () => {
  const { t: translate } = useTranslation("familyportrait");

  return (
    <>
      <FamilyPortraitSection>
        <Title props={translate("title")} />

        <Content>
          <TextContent>
            <h6>{translate("text")}</h6>
            <Button />
          </TextContent>

          <ImageContent>
            <Image1></Image1>
            <Image2></Image2>
            <Image3></Image3>
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
`;

const Content = styled.div`
  width: 95%;
  height: 375px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;

`;

const ImageContent = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  background-color: white;

`;
const TextContent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;



  h6 {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 100;
    line-height: 18px;
    margin-top: 0px;
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

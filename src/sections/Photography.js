import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";
import Button from "../components/Button";

const Photography = () => {
  const { t: translate } = useTranslation("photography");

  return (
    <>
      <PhotographySection>
        <Title props={translate("title")} />

        <Content>
          <ImageContent>
            <Column1></Column1>

            <Column2>
              <div></div>
              <p>
                “tuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet”
              </p>
            </Column2>
          </ImageContent>
          <TextContent>
            <h6>{translate("text2")}</h6>
            <h4> {translate("text1")}</h4>
            <Button props="photography"/>
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
`;

const Content = styled.div`
  width: 95%;
  height: 393px;
  display: flex;
  margin-top: 40px;
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
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;

  div {
    height: 256px;
    width: 341px;
    background-color: lightgray;
  }

  p{
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
  margin-left: 40px;

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
    text-align: justify;
    margin-top: 0px;
    line-height: 18px;
  }
`;

export default Photography;

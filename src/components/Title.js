import styled from "styled-components";

const Title = ({props}) => {
  return (
    <>
      <TitleSection>
        <TitleContainer>
          <TitleText>{props}</TitleText>
        </TitleContainer>
      </TitleSection>
    </>
  );
};

const TitleSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
const TitleContainer = styled.div`
  width: 95%;
  height: auto;
  border-bottom: 3px solid #c29a00;

`;

const TitleText = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 100;
  color: #2b2b2b;
  text-transform: uppercase;
margin-bottom: 3px;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
`;

export default Title;

import styled from "styled-components";

const Button = () => {
  return (
    <>
      <ButtonSection>
        <p>Ver más</p>
      </ButtonSection>
    </>
  );
};

const ButtonSection = styled.button`
  background-color: #c29a00;
  color: white;
  height: 41px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  p {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 100;
    color: white;
  }
`;
export default Button;

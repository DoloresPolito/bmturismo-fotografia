import styled from "styled-components";
import Link from "next/link";
const Button = ({props}) => {
  return (
    <>
    <Link href={`${props}`}>

      <ButtonSection>
        <p>Ver más</p>
      </ButtonSection>
      </Link>
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
  cursor: pointer;

  p {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 100;
    color: white;
  }
`;
export default Button;

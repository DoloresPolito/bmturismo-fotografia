import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";


const Button = ({props}) => {

  const { t: translate } = useTranslation("navbar");
  
  return (
    <>
    <Link href={`${props}`}>

      <ButtonSection>
        <p>{translate("button")}</p>
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

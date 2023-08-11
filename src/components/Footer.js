import styled from "styled-components";
import Image from "next/image";
import email from "../../public/assets/icons/email.png";
import whatsapp from "../../public/assets/icons/whatsapp.png";
import instagram from "../../public/assets/icons/instagram.png";
const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterContent>
            <Item>
              <Image src={instagram} alt="instagram" />
              <p>@Belenmiguensfoto</p>
            </Item>

            <Item>
              <Image src={whatsapp} alt="whatsapp" />
              <p>+54 911 62762509</p>
            </Item>

            <Item>
              <Image src={email} alt="email" />
              <p>miguensbelen@gmail.com</p>
            </Item>
          </FooterContent>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

const FooterSection = styled.div`
  width: 100%;
  height: 100px;
  background-color: #2b2b2b;
  display: flex;
  /* @media only screen and (max-width: 820px) {
    height: 200px;
  } */
`;

const FooterContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;


  /* @media only screen and (max-width: 820px) {
    flex-direction: column;
  } */
`;

const Item = styled.div`
  width: auto;
  height: 20px;
  display: flex;


  /* @media only screen and (max-width: 820px) {
    padding-top: 18px;
  } */

  img {
    width: 25px;
    height: 25px;
    /* @media only screen and (max-width: 820px) {
      width: 20px;
      height: 20px;
    } */
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 100;
    color: white;
    margin-top: 5px;
    padding-left: 10px;
  }
`;

export default Footer;

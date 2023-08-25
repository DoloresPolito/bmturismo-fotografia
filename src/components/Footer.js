import styled from "styled-components";
import Image from "next/image";
import email from "../../public/assets/icons/email.png";
import whatsapp from "../../public/assets/icons/whatsapp.png";
import instagram from "../../public/assets/icons/instagram.png";

import logo from "../../public/assets/logos/logo1.png";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <Wrapper>
            <Logo>
              <Image src={logo} />
            </Logo>
            <FooterContent>
              <a
                href="https://www.instagram.com/tour.and.photo/"
                target="_blank"
                rel="noreferrer"
              >
                <Item>
                  <Image src={instagram} alt="instagram" />
                  <p>@tour.and.photo</p>
                </Item>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=541162762509"
                target="_blank"
                rel="noreferrer"
              >
                <Item>
                  <Image src={whatsapp} alt="whatsapp" />
                  <p>+54 911 62762509</p>
                </Item>
              </a>
              <a href="mailto:miguensbelen@gmail.com">
                <Item>
                  <Image src={email} alt="email" />
                  <p>miguensbelen@gmail.com</p>
                </Item>
              </a>
            </FooterContent>
          </Wrapper>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

const FooterSection = styled.div`
  width: 100%;
  height: 150px;
  background-color: #2b2b2b;
  display: flex;

  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`;

const FooterContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;


  @media only screen and (max-width: 1000px) {
    width: 90% !important;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 800px) {

    justify-content: space-around;
  }
`;

const Logo = styled.div`

  img {
    height: 100px;
    width: 100px;
  }

  @media only screen and (max-width: 800px) {
    img {
    height: 130px;
    width: 130px;
  }

  }

  @media only screen and (max-width: 400px) {
    img {
    height: 110px;
    width: 110px;
  }

  }
`;

const FooterContent = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: auto;
    flex-direction: column;
    justify-content: flex-start !important;
    align-items: flex-start  !important;
    height: auto;
  }
`;

const Item = styled.div`
  width: auto;
  height: 20px;
  display: flex;

  @media only screen and (max-width: 800px) {
    height: 40px;
  }

  img {
    width: 25px;
    height: 25px;

    @media only screen and (max-width: 800px) {
      width: 20px;
      height: 20px;
    }
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 100;
    color: white;
    margin-top: 5px;
    padding-left: 10px;

    @media only screen and (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export default Footer;

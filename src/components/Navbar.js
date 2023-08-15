import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import spanish from "../../public/assets/icons/spanish.png";
import english from "../../public/assets/icons/english.png";
import Hamburger from "hamburger-react";
import Menu from "./Menu";

const Navbar = ({ props }) => {
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  const { pathname } = router;

  const [width, setWidth] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const medium = 1200;

  return (
    <>
      <LangSection>
        <LangContainer>
          {" "}
          <TitleDiv>
            <NavbarTitle>Belén Miguens</NavbarTitle>
            {props ? (
              <>
                {" "}
                <NavbarSubtitle>{props}</NavbarSubtitle>
              </>
            ) : (
              <>
                {" "}
                <NavbarSubtitle>TURISMO & FOTOGRAFÍA</NavbarSubtitle>
              </>
            )}
          </TitleDiv>
          {pathname === "/" ? (
            <>
              <Flags>
                <div onClick={handleClick(locales[0])}>
                  <Image
                    src={spanish}
                    alt="spanish"
                    onClick={handleClick(locales[0])}
                  />
                </div>

                <div
                  onClick={handleClick(locales[1])}
                  style={{ marginTop: "4px", marginLeft: "10px" }}
                >
                  <Image
                    src={english}
                    alt="english"
                    onClick={handleClick(locales[1])}
                  />
                </div>
              </Flags>
            </>
          ) : (
            <></>
          )}
        </LangContainer>
      </LangSection>

      <NavbarSection>
        {width >= medium ? (
          <>
            <Link href="/" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("cero")}</NavbarText>
            </Link>
            <Link href="/turism" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("one")}</NavbarText>
            </Link>
            <Link
              href="/professionalportrait"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <NavbarText>{translate("two")}</NavbarText>
            </Link>
            <Link href="/familyportrait" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("three")}</NavbarText>
            </Link>
            <Link href="/photography" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("four")}</NavbarText>
            </Link>
            <Link href="/projects" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("five")}</NavbarText>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText>{translate("six")}</NavbarText>
            </Link>
          </>
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} setOpen={setOpen}/>
          </>
        )}
      </NavbarSection>
    </>
  );
};

export default Navbar;

const NavbarSection = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c29a00;
  color: #2b2b2b;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
  }

  .hamburger-react {
    position: relative;
    color: #2b2b2b;
    margin-right: 20px;
  }

  /* .hamburger-react :nth-child(2) {
    background: #c29a00 !important;
  } */
  .isClosed .hamburger-react :nth-child(2) {
    left: 22px !important;
    width: 12px !important;
  }
`;

const NavbarText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #2b2b2b;
`;

const LangSection = styled.div`
  width: 100%;
  height: 132px;
  background-color: #2b2b2b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LangContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  line-height: 0px;
`;

const NavbarTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  /* margin-left: 40px; */
  font-size: 22px;
`;

const NavbarSubtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 32px;
  text-transform: uppercase;
`;

const Flags = styled.div`
  display: flex;
  gap: 10px;
  justify-self: center;
  align-self: center;
  div {
    cursor: pointer;
  }
`;

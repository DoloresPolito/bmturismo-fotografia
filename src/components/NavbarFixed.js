import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Hamburger from "hamburger-react";
import Menu from "./Menu";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };
  const { pathname } = router;

  const [width, setWidth] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const currentPagePath = window.location.pathname;

    if (currentPagePath.includes("en")) {
      setActiveSection(currentPagePath.slice(4));
    } else setActiveSection(currentPagePath.slice(1));

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
    <TopSection>
      <LangSection>
        <LangContainer>
          {" "}
          <Link href="/">
            <TitleDiv>
              <NavbarTitle>Belén Miguens</NavbarTitle>

              <NavbarSubtitle> {translate("cero")}</NavbarSubtitle>
            </TitleDiv>
          </Link>
          {pathname === "/" ? (
            <>
              {width > 630 ? (
                <>
                  <Flags>
                    <div onClick={handleClick(locales[0])}>
                      <LanguageText>ESPAÑOL</LanguageText>
                    </div>
                    <p>-</p>
                    <div onClick={handleClick(locales[1])}>
                      <LanguageText>ENGLISH</LanguageText>
                    </div>
                  </Flags>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </LangContainer>
      </LangSection>

      <NavbarSection>
        {width >= medium ? (
          <>
            {activeSection === "" ? (
              <>
                <ScrollLink
                  to="turism"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
              
                    className={activeSection === "turism" ? "active" : ""}
                  >
                    {translate("one")}
                  </NavbarText>
                </ScrollLink>
                <ScrollLink
                  to="photography"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
                    className={activeSection === "photography" ? "active" : ""}
                  >
                    {translate("four")}
                  </NavbarText>
                </ScrollLink>
                <ScrollLink
                  to="professionalportrait"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
                    className={
                      activeSection === "professionalportrait" ? "active" : ""
                    }
                  >
                    {translate("two")}
                  </NavbarText>
                </ScrollLink>
                <ScrollLink
                  to="familyportrait"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
                    className={
                      activeSection === "familyportrait" ? "active" : ""
                    }
                  >
                    {translate("three")}
                  </NavbarText>
                </ScrollLink>

                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
                    className={activeSection === "projects" ? "active" : ""}
                  >
                    {translate("five")}
                  </NavbarText>
                </ScrollLink>

                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                >
                  <NavbarText
                    className={activeSection === "contact" ? "active" : ""}
                  >
                    {translate("six")}
                  </NavbarText>
                </ScrollLink>
              </>
            ) : (
              <>
                <Link href="/#turism">
                  {" "}
                  <NavbarText
                    className={activeSection === "turism" ? "active" : ""}
                  >
                    {translate("one")}
                  </NavbarText>
                </Link>
                <Link href="/#photography">
                  {" "}
                  <NavbarText
                    className={activeSection === "photography" ? "active" : ""}
                  >
                    {translate("four")}
                  </NavbarText>
                </Link>
                <Link href="/#proffesionalportrait">
                  {" "}
                  <NavbarText
                    className={
                      activeSection === "professionalportrait" ? "active" : ""
                    }
                  >
                    {translate("two")}
                  </NavbarText>
                </Link>
                <Link href="/#familyportrait">
                  {" "}
                  <NavbarText
                    className={
                      activeSection === "familyportrait" ? "active" : ""
                    }
                  >
                    {translate("three")}
                  </NavbarText>
                </Link>
                <Link href="/#projects">
                  {" "}
                  <NavbarText
                    className={activeSection === "projects" ? "active" : ""}
                  >
                    {translate("five")}
                  </NavbarText>
                </Link>

                <Link href="/#about">
                  {" "}
                  <NavbarText
                    className={activeSection === "about" ? "active" : ""}
                  >
                    {translate("six")}
                  </NavbarText>
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} setOpen={setOpen} />
          </>
        )}
      </NavbarSection>
      </TopSection>
    </>
  );
};

export default Navbar;


const TopSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
position: fixed;
top:0;
z-index: 1000;

`
const NavbarSection = styled.div`
  width: 100%;
  height: 50px;
  background-color: #c29a00;
  color: #2b2b2b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position:fixed; */

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
  font-weight: 400;
  color: #2b2b2b;
  cursor: pointer;
  font-family: 'PT Sans', sans-serif;


  &.active {
    font-weight: 800;
  }
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
  /* position:fixed; */

  @media screen and (max-width: 600px) {
    height: 190px;
  }
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
  font-family: 'PT Sans', sans-serif;
`;

const NavbarSubtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  font-family: 'PT Sans', sans-serif;
  letter-spacing: 2px;

  @media screen and (max-width: 600px) {
    max-width: 200px;
    line-height: 40px;
  }
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

const LanguageText = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  text-transform: uppercase;
  font-family: 'PT Sans', sans-serif;

  @media screen and (max-width: 1000px) {
    font-size: 13px;
  }
`;

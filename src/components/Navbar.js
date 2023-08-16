import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Hamburger from "hamburger-react";
import Menu from "./Menu";

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

  const sectionRefs = {
    turism: useRef(null),
    professionalportrait: useRef(null),
    familyportrait: useRef(null),
    photography: useRef(null),
    projects: useRef(null),
  };

  const handleIntersection = (entries) => {
    console.log("entries", entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    console.log("use effect observer");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    console.log("observer", observer);
    console.log("sectionRefs", sectionRefs);

    // Observe the sections
    for (const key in sectionRefs) {
      if (sectionRefs.hasOwnProperty(key) && sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
    }

    return () => {
      console.log("use effect observer", observer.disconnect());
      observer.disconnect();
    };
  }, []);

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
          <Link href="/">
            <TitleDiv>
              <NavbarTitle>Belén Miguens</NavbarTitle>

              <NavbarSubtitle>TURISMO & FOTOGRAFÍA</NavbarSubtitle>
            </TitleDiv>
          </Link>
          {pathname === "/" ? (
            <>
              <Flags>
                <div onClick={handleClick(locales[0])}>
                  <LanguageText>SPA</LanguageText>
                </div>
                <p>-</p>
                <div onClick={handleClick(locales[1])}>
                  <LanguageText>ENG</LanguageText>
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
            <Link href="/turism" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText
                className={activeSection === "turism" ? "active" : ""}
              >
                {translate("one")}
              </NavbarText>
            </Link>
            <Link
              href="/professionalportrait"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <NavbarText
                className={
                  activeSection === "professionalportrait" ? "active" : ""
                }
              >
                {translate("two")}
              </NavbarText>
            </Link>
            <Link href="/familyportrait" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText
                className={activeSection === "familyportrait" ? "active" : ""}
              >
                {translate("three")}
              </NavbarText>
            </Link>
            <Link href="/photography" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText
                className={activeSection === "photography" ? "active" : ""}
              >
                {translate("four")}
              </NavbarText>
            </Link>
            <Link href="/projects" style={{ textDecoration: "none" }}>
              {" "}
              <NavbarText
                className={activeSection === "projects" ? "active" : ""}
              >
                {translate("five")}
              </NavbarText>
            </Link>
          </>
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} setOpen={setOpen} />
          </>
        )}
      </NavbarSection>
    </>
  );
};

export default Navbar;

const NavbarSection = styled.div`
  width: 100%;
  height: 50px;
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
  font-weight: 400;
  color: #2b2b2b;

  &.active {
    font-weight: bold;
    color: red;
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

const LanguageText = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 17px;
  text-transform: uppercase;
`;

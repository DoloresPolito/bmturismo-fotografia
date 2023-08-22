import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Menu = ({ open, setOpen }) => {
  const { t: translate } = useTranslation("navbar");

  const [activeSection, setActiveSection] = useState("");

  const handleClose = () => {
    setOpen(false);
    enableBodyScroll();
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const currentPagePath = window.location.pathname;

    if (currentPagePath.includes("en")) {
      setActiveSection(currentPagePath.slice(4));
    } else setActiveSection(currentPagePath.slice(1));

    if (open) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [open]);

  return (
    <StyledMenu open={open} aria-label="menu">
      {activeSection === "" ? (
        <>
          <ScrollLink
            to="turism"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            onClick={() => handleClose()}
          >
            <NavLink className={activeSection === "turism" ? "active" : ""}>
              {translate("one")}
            </NavLink>
          </ScrollLink>
          <ScrollLink
            to="photography"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            onClick={() => handleClose()}
          >
            <NavLink
              className={activeSection === "photography" ? "active" : ""}
            >
              {translate("four")}
            </NavLink>
          </ScrollLink>
          <ScrollLink
            to="professionalportrait"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            onClick={() => handleClose()}
          >
            <NavLink
              className={
                activeSection === "professionalportrait" ? "active" : ""
              }
            >
              {translate("two")}
            </NavLink>
          </ScrollLink>

          <ScrollLink
            to="familyportrait"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            onClick={() => handleClose()}
          >
            {" "}
            <NavLink
              className={activeSection === "familyportrait" ? "active" : ""}
            >
              {translate("three")}
            </NavLink>
          </ScrollLink>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            onClick={() => handleClose()}
          >
            <NavLink className={activeSection === "projects" ? "active" : ""}>
              {translate("five")}
            </NavLink>
          </ScrollLink>

          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={800}
            onClick={() => handleClose()}
          >
            <NavLink className={activeSection === "contact" ? "active" : ""}>
              {translate("six")}
            </NavLink>
          </ScrollLink>
        </>
      ) : (
        <>
          <Link href="/#turism">
            {" "}
            <NavLink className={activeSection === "turism" ? "active" : ""}>
              {translate("one")}
            </NavLink>
          </Link>
          <Link href="/#photography">
            {" "}
            <NavLink
              className={activeSection === "photography" ? "active" : ""}
            >
              {translate("four")}
            </NavLink>
          </Link>
          <Link href="/#proffesionalportrait">
            {" "}
            <NavLink
              className={
                activeSection === "professionalportrait" ? "active" : ""
              }
            >
              {translate("two")}
            </NavLink>
          </Link>
          <Link href="/#familyportrait">
            {" "}
            <NavLink
              className={activeSection === "familyportrait" ? "active" : ""}
            >
              {translate("three")}
            </NavLink>
          </Link>
          <Link href="/#projects">
            {" "}
            <NavLink className={activeSection === "projects" ? "active" : ""}>
              {translate("five")}
            </NavLink>
          </Link>

          <Link href="/#about">
            {" "}
            <NavLink className={activeSection === "about" ? "active" : ""}>
              {translate("six")}
            </NavLink>
          </Link>
        </>
      )}
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #c29a00;
  height: 90%;
  text-align: left;
  padding: 100px 0px 40px 30px;
  position: fixed;
  z-index: 5000;
  top: 180px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media screen and (max-width: 600px) {
    top: 240px;
  }
`;

const NavLink = styled.p`
  text-decoration: none;
  margin-right: 50px;
  line-height: 20px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #2b2b2b;
  font-family: 'PT Sans', sans-serif;

  &.active {
    font-weight: 600;
  }
`;

export default Menu;

import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Menu = ({ open, setOpen }) => {
  const { t: translate } = useTranslation("navbar");

  const handleClose = () => {
    setOpen(false);
    enableBodyScroll(); // Habilitar el desplazamiento nuevamente cuando se cierra el menú
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (open) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [open]);

  return (
    <StyledMenu open={open} aria-label="menu">
      <Link
        href="/"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("cero")}</NavLink>
      </Link>
      <Link
        href="/turism"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("one")}</NavLink>
      </Link>
      <Link
        href="/professionalportrait"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("two")}</NavLink>
      </Link>
      <Link
        href="/familyportrait"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("three")}</NavLink>
      </Link>
      <Link
        href="/photography"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("four")}</NavLink>
      </Link>
      <Link
        href="/projects"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("five")}</NavLink>
      </Link>
      <Link
        href="/contact"
        style={{ textDecoration: "none" }}
        onClick={() => handleClose()}
      >
        {" "}
        <NavLink>{translate("six")}</NavLink>
      </Link>
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
  top: 160px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const NavLink = styled.p`
  text-decoration: none;
  margin-right: 50px;
  line-height: 20px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #2b2b2b;
`;

export default Menu;

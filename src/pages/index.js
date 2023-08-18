import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FamilyPortrait from "../sections/FamilyPortrait";
import ProfessionalPortrait from "../sections/ProfessionalPortrait";
import Photography from "../sections/Photography";
import Turism from "../sections/Turism";
import { motion } from "framer-motion";
import Projects from "../sections/Projects";
import BigCarousel from "../components/BigCarousel";
import NavbarFixed from "../components/NavbarFixed";

const Home = () => {
  // useEffect(() => {
  //   // Escuchar los clics en los enlaces con anclas
  //   const handleAnchorClick = (event) => {
  //     const hash = event.target.hash;
  //     if (hash) {
  //       event.preventDefault();
  //       const targetElement = document.querySelector(hash);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   };

  //   // Agregar el evento de clic a todos los enlaces con anclas
  //   const anchorLinks = document.querySelectorAll('a[href^="#"]');
  //   anchorLinks.forEach((link) => {
  //     link.addEventListener("click", handleAnchorClick);
  //   });

  //   return () => {
  //     // Limpiar el evento al desmontar el componente
  //     anchorLinks.forEach((link) => {
  //       link.removeEventListener("click", handleAnchorClick);
  //     });
  //   };
  // }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* <Navbar /> */}
        <NavbarFixed/>
        <BigCarousel />
        <Turism />
        <Photography />
        {/* <ProfessionalPortrait /> */}
        <FamilyPortrait />
        <Projects />
        <Footer />
      </motion.div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "turism",
        "familyportrait",
        "professionalportrait",
        "photography",
        "navbar",
        "about",
        "projects",
      ])),
    },
  };
}
export default Home;

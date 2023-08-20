import React from "react";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FamilyPortrait from "../sections/FamilyPortrait";
// import ProfessionalPortrait from "../sections/ProfessionalPortrait";
import Photography from "../sections/Photography";
import Turism from "../sections/Turism";
import { motion } from "framer-motion";
import Projects from "../sections/Projects";
import BigCarousel from "../components/BigCarousel";
import NavbarFixed from "../components/NavbarFixed";
import About from "../sections/About"

const Home = () => {


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavbarFixed/>
        <BigCarousel />
        <Turism />
        <Photography />
        {/* <ProfessionalPortrait /> */}
        <FamilyPortrait />
        <Projects />
        <About/>
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

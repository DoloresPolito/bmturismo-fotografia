import React, { useState, useEffect, useRef } from "react";
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
import About from "../sections/About";

const Home = () => {


  const [currentSection, setCurrentSection] = useState(null);
  const sectionRefs = {
    carousel: useRef(),
    turism: useRef(),
    photography: useRef(),
    professionalportrait: useRef(),
    familyportrait: useRef(),
    projects: useRef(),
    about: useRef(),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    for (const key in sectionRefs) {
      if (sectionRefs.hasOwnProperty(key)) {
        observer.observe(sectionRefs[key].current);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavbarFixed props={currentSection} />
        <section ref={sectionRefs.carousel} id="carousel">
          <BigCarousel />
        </section>
        <div>
          <section ref={sectionRefs.turism} id="turism">
            {" "}
            <Turism />
          </section>

          <section ref={sectionRefs.photography} id="photography" >
            <Photography />
          </section>
          <section ref={sectionRefs.professionalportrait} id="professionalportrait" >
          <ProfessionalPortrait />
          </section>
          <section ref={sectionRefs.familyportrait} id="familyportrait">
            <FamilyPortrait />
          </section>

          <section  ref={sectionRefs.projects} id="projects">
            <Projects />
          </section>
          <section ref={sectionRefs.about} id="about">
            <About />
          </section>
        </div>

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

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import CarouselProjects from "../components/CarouselProjects";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavbarFixed from "../components/NavbarFixed"
const ProjectsHome = () => {
  const { t: translate } = useTranslation("projects");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <section id="projects">
          <Section>
            <NavbarFixed />

            <CarouselProjects />
            <Footer />
          </Section>
        </section>
      </motion.div>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "projects"])),
    },
  };
}
export default ProjectsHome;

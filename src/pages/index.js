import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FamilyPortrait from "../sections/FamilyPortrait";
import ProfessionalPortrait from "../sections/ProfessionalPortrait";
import Photography from "../sections/Photography";
import Turism from "../sections/Turism";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Turism/>
        <FamilyPortrait />
        <ProfessionalPortrait />
        <Photography/>
        <Footer />
      </div>
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
      ])),
    },
  };
}
export default Home;

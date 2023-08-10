import Navbar from "./components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        // "about",
        // "workprogress",
        // "services",
        // "footer",
        "navbar",
      ])),
    },
  };
}

export default Home;

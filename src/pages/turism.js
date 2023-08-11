import Navbar from "../components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const TurismHome = () => {

  const { t: translate } = useTranslation("turism");
    return(<>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
       <Navbar props={translate("title")} />
    <h1>TURISM Home</h1>
    </motion.div>
    </>)
}


export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          "navbar",
          "turism"
      
        ])),
      },
    };
  }

export default TurismHome;
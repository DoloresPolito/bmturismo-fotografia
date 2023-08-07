import { useTranslations } from "next-intl";
import Navbar from "./components/Navbar";


export default function Home() {
  const t = useTranslations();
  return (
    <div>
      {/* {t.rich("richText", {
        important: (chunks) => <b>{chunks}</b>,
        very: (chunks) => <i>{chunks}</i>,
      })} */}
      {/* <Navbar one={t("Navbar.one")} two={t("Navbar.two")}/> */}
      <Navbar />
    </div>
  );
}

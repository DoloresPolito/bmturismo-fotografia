import { useTranslations } from "next-intl";


export default function About() {

    const t = useTranslations("About");
 
  return (
    <div>
     <h2>about</h2>

     <h1>{t("title")}</h1>
     <h1>{t("subtitle")}</h1>
  
    </div>
  );
}

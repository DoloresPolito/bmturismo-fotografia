import Link from "next/link";
import Lang from "./Lang";
import { useTranslations } from "next-intl";

const Navbar = ({}) => {
  const t = useTranslations("Navbar");

  return (
    <>
      <Lang />

      <div className="navbar-section">
        <Link href="/about">
          {" "}
          <p className="navbar-text">{t("one")}</p>
        </Link>
        <Link href="/contact">
          {" "}
          <p className="navbar-text">{t("two")}</p>
        </Link>
        <Link href="/about">
          {" "}
          <p className="navbar-text">{t("three")}</p>
        </Link>
        <Link href="/contact">
          {" "}
          <p className="navbar-text">{t("four")}</p>
        </Link>
        <Link href="/about">
          {" "}
          <p className="navbar-text">{t("five")}</p>
        </Link>
        <Link href="/contact">
          {" "}
          <p className="navbar-text">{t("six")}</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

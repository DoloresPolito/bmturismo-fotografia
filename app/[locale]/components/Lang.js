import Link from "next-intl/link";
import Image from "next/image";
import spanish from "../../../public/assets/icons/spanish.png"
import english from "../../../public/assets/icons/english.png"

const Lang = () => {
  return (
    <>
      <div className="lang-section">
        {" "}
        <h1 className="navbar-title">Belén Miguens</h1>
        <h3 className="navbar-subtitle">TURISMO & FOTOGRAFÍA</h3>
      </div>

      <div className="flags">
      <Link href="/" locale="es">
        <Image src={spanish} alt="spanish"/>
          
        </Link>
        <br />
        <br />
        <Link href="/" locale="en">
        <Image src={english} alt="english"/>
        </Link>
      </div>
    </>
  );
};

export default Lang;

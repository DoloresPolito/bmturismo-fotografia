import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import spanish from "../../public/assets/icons/spanish.png";
// import english from "../../../public/assets/icons/english.png";

const Navbar = ({props}) => {
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };

  return (
    <>
      <LangSection>
        <LangContainer>
          {" "}
          <TitleDiv>
            <NavbarTitle>Belén Miguens</NavbarTitle>
            {props ? (<>  <NavbarSubtitle>{props}</NavbarSubtitle></>) : (<>  <NavbarSubtitle>TURISMO & FOTOGRAFÍA</NavbarSubtitle></>)}
          
          </TitleDiv>
          <Flags>
            {locales.map((l) => (
              <div key={l} onClick={handleClick(l)}>
                <Image
                  src={spanish}
                  alt="spanish"
                  key={l}
                  onClick={handleClick(l)}
                />
              </div>
            ))}
          </Flags>
        </LangContainer>
      </LangSection>

      <NavbarSection>
        <Link href="/turism" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("one")}</NavbarText>
        </Link>
        <Link href="/professionalportrait" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("two")}</NavbarText>
        </Link>
        <Link href="/familyportrait" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("three")}</NavbarText>
        </Link>
        <Link href="/photography" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("four")}</NavbarText>
        </Link>
        <Link href="/projects" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("five")}</NavbarText>
        </Link>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          {" "}
          <NavbarText>{translate("six")}</NavbarText>
        </Link>
      </NavbarSection>
    </>
  );
};

export default Navbar;

const NavbarSection = styled.div`
  width: 100%;
  height: 30px;
  background-color: #c29a00;
  color: #2b2b2b;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavbarText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #2b2b2b;
`;

const LangSection = styled.div`
  width: 100%;
  height: 132px;
  background-color: #2b2b2b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LangContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const NavbarTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  /* margin-left: 40px; */
  font-size: 22px;
  margin-top: 10px;
`;

const NavbarSubtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 300;
  /* margin-left: 40px; */
  margin-top: 0px;
  font-size: 32px;
`;

const Flags = styled.div`
 
  display: flex;
  gap: 10px;
  justify-self:center;
  align-self:center;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-self:center;
  align-self:center;
  line-height: 20px;

`;

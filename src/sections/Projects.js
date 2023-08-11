import styled from "styled-components";
import Title from "../components/Title";
import { useTranslation } from "next-i18next";

const Projects = () => {
//   const { t: translate } = useTranslation("");

  return (
    <>
      <ProjectsSection>
        {/* <Title props={translate("title")} /> */}
      </ProjectsSection>
    </>
  );
};

const ProjectsSection = styled.div`
  width: 100%;
  height: 80vh;
`;

export default Projects;
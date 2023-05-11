import { useEffect, useState } from "react";
import { Stack } from "../../../shared/types/Stack";
import { SectionTitle } from "../../../styles/App.style";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import {
  ExpeciencesArticle,
  SideProjectsList,
  WorkListWrapper,
  SectionWrapper,
} from "./Experiences.style";

import SideProject from "./SideProject/SideProject";
import WorkExperience from "./WorkExperience/WorkExperience";
import { IWorkExperience } from "../../../shared/types/WorkExperience";

import workExperiencesJSON from "../../../data/workExperiences.json";

export default function Experiences() {
  const [worksList, setWorksList] = useState<IWorkExperience[]>([]);

  useEffect(() => {
    setWorksList([...workExperiencesJSON]);
  }, []);

  return (
    <ExpeciencesArticle>
      <SectionTitle>Experiences</SectionTitle>
      <SectionWrapper>
        <SectionSubtitle subtitle="Professionals" />
        <WorkListWrapper>
          {worksList.map((work) => (
            <WorkExperience
              key={work.companyName}
              companyName={work.companyName}
              companyRole={work.role}
              workingPeriod={work.workingPeriod}
              description={work.description}
              skillList={work.skillList}
            />
          ))}
        </WorkListWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionSubtitle subtitle="Side Projects" />
        <SideProjectsList>
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/222441892-d5fcdfb9-8fa4-4f8c-9aad-9b370cb50236.png"
            stacks={[Stack.ANGULAR, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="Marvel Comics E-Commerce"
            projectDate="2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
        </SideProjectsList>
      </SectionWrapper>
    </ExpeciencesArticle>
  );
}

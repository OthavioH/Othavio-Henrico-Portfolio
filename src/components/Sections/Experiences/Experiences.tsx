import { useState } from "react";
import { Stack } from "../../../shared/models/Stack";
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

export default function Experiences() {
  const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(false);
  const [isSideProjectOpen, setIsSideProjectOpen] = useState(false);

  return (
    <ExpeciencesArticle>
      <SectionTitle>Experiences</SectionTitle>
      <SectionWrapper>
        <SectionSubtitle subtitle="Works" />
        <WorkListWrapper>
          <WorkExperience
            companyName="Tokenlab"
            companyRole="Web Developer"
            workingPeriod="May/2021 - Feb/2023"
          />
          <WorkExperience
            companyName="IFMATH"
            companyRole="FullStack Developer"
            workingPeriod="Feb/2020 - Apr/2021"
          />
        </WorkListWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionSubtitle subtitle="Side Projects" />
        <SideProjectsList>
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/222441892-d5fcdfb9-8fa4-4f8c-9aad-9b370cb50236.png"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
        </SideProjectsList>
      </SectionWrapper>
    </ExpeciencesArticle>
  );
}

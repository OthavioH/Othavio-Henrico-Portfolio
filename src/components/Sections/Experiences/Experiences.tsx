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
        <SectionSubtitle subtitle="Career" />
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
        <SectionSubtitle subtitle="Personal Projects" />
        <SideProjectsList>
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/222441892-d5fcdfb9-8fa4-4f8c-9aad-9b370cb50236.png"
            websiteURL="https://rpg-system-frontend-othavioh.vercel.app/"
            stacks={[Stack.ANGULAR, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="Marvel Comics E-Commerce"
            projectDate="2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            websiteURL="https://marvel-comics-ecommerce.vercel.app/"
            stacks={[Stack.REACT, Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="Bot HLTV"
            projectDate="2020"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/e6f81c7e-2ba9-4612-a51b-f24877746793"
            websiteURL="https://twitter.com/BotHltv"
            stacks={[Stack.TYPESCRIPT, Stack.NODE]}
          />
          <SideProject
            projectName="Social Media"
            projectDate="2023"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/df07c8ee-bd1f-42d1-86f6-051052dfbbdb"
            websiteURL="https://code-leap-test-nu.vercel.app/"
            stacks={[Stack.TYPESCRIPT, Stack.REACT]}
          />
          <SideProject
            projectName="Animations Lab"
            projectDate="2023"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/7c115c39-74e1-4eb6-9662-12945446468a"
            websiteURL="https://animations-lab.vercel.app/"
            stacks={[Stack.TYPESCRIPT, Stack.REACT]}
          />
        </SideProjectsList>
      </SectionWrapper>
    </ExpeciencesArticle>
  );
}

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

import englishWorkExperiencesJSON from "../../../data/workExperiences_en_us.json";
import portugueseWorkExperiencesJSON from "../../../data/workExperiences_pt_br.json";
import { FormattedMessage } from "react-intl";
import { locale, messages } from "../../../main";

export default function Experiences() {
  const [worksList, setWorksList] = useState<IWorkExperience[]>([]);

  useEffect(() => {
    setWorksList([
      ...(locale === "pt-BR"
        ? portugueseWorkExperiencesJSON
        : englishWorkExperiencesJSON),
    ]);
  }, []);

  return (
    <ExpeciencesArticle>
      <SectionTitle>
        <FormattedMessage
          description="Experiences Title"
          id="main.experiences.title"
        />
      </SectionTitle>
      <SectionWrapper>
        <SectionSubtitle subtitle={messages["main.experiences.career.title"]} />
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
        <SectionSubtitle
          subtitle={messages["main.experiences.personalProjects.title"]}
        />
        <SideProjectsList>
          <SideProject
            projectName="RPG Sheet System"
            projectDate="2021/2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/222441892-d5fcdfb9-8fa4-4f8c-9aad-9b370cb50236.png"
            websiteURL="https://rpg-system-frontend-othavioh.vercel.app/"
            stacks={[Stack.ANGULAR, Stack.NODE, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Apex Tracker"
            projectDate="2023"
            websiteURL="https://github.com/OthavioH/apex-tracker"
            stacks={[Stack.REACT, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Marvel Comics E-Commerce"
            projectDate="2023"
            thumbnailURL="https://user-images.githubusercontent.com/46772924/227333692-31cb77ba-d153-4db8-9bce-afe85f59c523.png"
            websiteURL="https://marvel-comics-ecommerce.vercel.app/"
            stacks={[Stack.REACT, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Social Media"
            projectDate="2023"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/df07c8ee-bd1f-42d1-86f6-051052dfbbdb"
            websiteURL="https://code-leap-test-nu.vercel.app/"
            stacks={[Stack.REACT, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Animations Lab"
            projectDate="2023"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/7c115c39-74e1-4eb6-9662-12945446468a"
            websiteURL="https://animations-lab.vercel.app/"
            stacks={[Stack.REACT, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Nature Care"
            projectDate="2021"
            websiteURL="https://github.com/OthavioH/nature-care"
            stacks={[Stack.FLUTTER]}
          />
          <SideProject
            projectName="Calendar"
            projectDate="2021"
            websiteURL="https://github.com/OthavioH/calendar-tokenlab-angular"
            stacks={[Stack.ANGULAR, Stack.NODE, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Bot HLTV"
            projectDate="2020"
            thumbnailURL="https://github.com/OthavioH/Marvel-Comics-Ecommerce/assets/46772924/e6f81c7e-2ba9-4612-a51b-f24877746793"
            websiteURL="https://twitter.com/BotHltv"
            stacks={[Stack.NODE, Stack.TYPESCRIPT]}
          />
          <SideProject
            projectName="Score Bot"
            projectDate="2020"
            websiteURL="https://github.com/OthavioH/ScoreBot"
            stacks={[Stack.NODE]}
          />
          <SideProject
            projectName="HLTV App"
            projectDate="2020"
            websiteURL="https://github.com/OthavioH/HltvApp"
            stacks={[Stack.REACT_NATIVE]}
          />
          <SideProject
            projectName="WorkTalkie"
            projectDate="2019"
            websiteURL="https://github.com/OthavioH/WorkTalkie"
            stacks={[Stack.JAVA]}
          />
        </SideProjectsList>
      </SectionWrapper>
    </ExpeciencesArticle>
  );
}

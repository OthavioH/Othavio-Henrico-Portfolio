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
            description="At Tokenlab, I helped develop some projects using Flutter Web, Angular, Node.js, HTML, CSS, SASS, DDD (Domain Driver Design), Docker, BLoC, and Responsive Designs. I also used Jira extensively for team management, as well as Figma, Bitbucket, and utilized SCRUM and Kanban.

Projects Completed:

Cinemark ATM - Self-service machine for the Cinemark cinema chain. The project was developed in Flutter Web, where I learned a lot about the technology, its widgets, design patterns that improve development, and enhanced my collaborative professional skills. - Aug/2021 - May/2022.

MyPromo - Website and application that aims to assist consumers with their supermarket shopping. 2022 - November 2022.

Tokenlab Website Maintenance. 2022 - 2023."
            skillList={[
              "NodeJS",
              "Typescript",
              "Angular",
              "Flutter",
              "Docker",
              "DDD",
              "BLoC",
              "SCRUM",
              "Kanban",
              "Jira",
              "Bitbucket",
              "Figma",
              "HTML",
              "CSS",
              "SASS",
              "Responsive Designs",
              "Flutter Web",
              "Team Collaboration",
            ]}
          />
          <WorkExperience
            companyName="IFMATH"
            companyRole="FullStack Developer"
            workingPeriod="Feb/2020 - Apr/2021"
            description="Helping in the development of the IFMATH website, which is a software aimed at teaching mathematics. The development was done using Angular, Java Spring Boot, Git, CSS, SASS, HTML, and responsive designs."
            skillList={[
              "TDD",
              "Java Spring Boot",
              "Angular",
              "TypeScript",
              "Team Collaboration",
              "Git",
              "SASS",
              "HTML",
            ]}
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

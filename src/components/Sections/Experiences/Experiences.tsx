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
            description="Na Tokenlab ajudei no desenvolvimento de alguns projetos utilizando Flutter Web, Angular, Node.js, HTML, CSS, SASS, DDD (Domain Driver Design), Docker, BLoC e Designs responsivos. Também usei muito o jira para a gestão do time, além do figma, bitbucket e utilizando SCRUM e Kanban.
            
Projetos realizados:

- Cinemark ATM - Máquina de autoatendimento para as redes Cinemark. O projeto foi desenvolvido em Flutter Web, onde aprendi muito sobre a tecnologia, seus widgets, design patterns que melhoram o desenvolvimento e aprimorei minhas habilidades profissionais colaborativas. - Ago/2021 - Maio/2022.

- MyPromo - Website e aplicativo que tem a proposta de auxiliar os consumidores com suas compras nos mercados. 2022 - Novembro de 2022.

- Manutenção do website da empresa. 2022 - 2023"
            skillList={["React", "Typescript", "Node"]}
          />
          <WorkExperience
            companyName="IFMATH"
            companyRole="FullStack Developer"
            workingPeriod="Feb/2020 - Apr/2021"
            description="Ajudar no desenvolvimento do site IFMATH, que é um software com intuito de ensinar matemática. O desenvolvimento foi feito utilizando Angular, Java Spring Boot, Git, CSS, SASS, HTML e designs responsivos."
            skillList={["React", "Typescript", "Node"]}
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

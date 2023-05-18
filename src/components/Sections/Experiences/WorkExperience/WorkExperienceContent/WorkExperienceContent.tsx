import { FormattedMessage } from "react-intl";
import {
  ExperienceContentDescription,
  ExperienceContentSubtitle,
  ExperienceContentSkills,
  ExperienceContentSkill,
  ExperienceContentWrapper,
} from "./WorkExperienceContent.style";

interface WorkExperienceProps {
  description: string;
  skillList: string[];
}

export default function WorkExperienceContent({
  description,
  skillList,
}: WorkExperienceProps) {
  return (
    <ExperienceContentWrapper>
      <ExperienceContentSubtitle>
        <FormattedMessage
          id="main.experiences.career.experience.title"
          defaultMessage="The Experience"
        />
      </ExperienceContentSubtitle>
      <ExperienceContentDescription>{description}</ExperienceContentDescription>
      <ExperienceContentSubtitle>
        <FormattedMessage
          id="main.experiences.career.skills.title"
          defaultMessage="Skills And Techs"
        />
      </ExperienceContentSubtitle>
      <ExperienceContentSkills>
        {skillList.map((skill, index) => (
          <ExperienceContentSkill key={index}>{skill}</ExperienceContentSkill>
        ))}
      </ExperienceContentSkills>
    </ExperienceContentWrapper>
  );
}

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
      <ExperienceContentSubtitle>The Experience</ExperienceContentSubtitle>
      <ExperienceContentDescription>{description}</ExperienceContentDescription>
      <ExperienceContentSubtitle>Skills and Techs</ExperienceContentSubtitle>
      <ExperienceContentSkills>
        {skillList.map((skill, index) => (
          <ExperienceContentSkill key={index}>{skill}</ExperienceContentSkill>
        ))}
      </ExperienceContentSkills>
    </ExperienceContentWrapper>
  );
}

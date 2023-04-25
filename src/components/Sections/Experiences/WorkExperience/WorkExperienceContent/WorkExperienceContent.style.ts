import styled from "styled-components";

export const ExperienceContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  padding: 10px 0px;
`;

export const ExperienceContentSubtitle = styled.p`
  font-size: 22px;
  font-weight: bold;

  margin: 10px 0px;
`;

export const ExperienceContentDescription = styled.p`
  font-size: 18px;
  font-weight: normal;
  text-align: justify;
  white-space: pre-line;
`;

export const ExperienceContentSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 5px;
`;

export const ExperienceContentSkill = styled.div`
  min-width: 40px;
  height: 30px;
  width: fit-content;

  border: 2px solid #27f448;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const ExperienceContentLocationText = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

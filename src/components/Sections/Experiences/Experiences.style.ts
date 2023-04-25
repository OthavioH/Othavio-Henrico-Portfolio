import styled from "styled-components";
import { SectionArticle } from "../../../styles/App.style";
import {
  fadeAndSlideToLeftInAnimation,
  underlineTextAnimation,
} from "../../../styles/Animations.style";

export const SectionWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  &:hover div#underline-text {
    animation: ${underlineTextAnimation} 0.5s ease-in-out forwards;
  }
  gap: 20px;
`;

export const WorkListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;
`;

export const ExpeciencesArticle = styled(SectionArticle)`
  animation: ${fadeAndSlideToLeftInAnimation} 2.5s ease-in-out;
`;

export const WorkExperienceItem = styled.div`
  min-width: 290px;
  height: 100px;
  padding: 10px 22px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0px 12px 0px #000;
  border-radius: 16px;
`;

export const WorkExperienceInfo = styled.div`
  width: fit-content;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const WorkExperienceCompanyName = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const WorkExperienceCompanyRole = styled.p`
  font-size: 18px;
`;

export const WorkExperienceCompanyDate = styled.p`
  font-size: 16px;
`;

export const ArrowDownIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const SideProjectsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

export const SideProjectWrapper = styled.div`
  width: 180px;
  height: 250px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0px 0px 12px 0px #000;
  border-radius: 30px;
`;

export const SideProjectImage = styled.img`
  width: 100%;
  min-height: 120px;
  border-radius: 16px 16px 0px 0px;
`;

export const SideProjectTitle = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;

  text-align: center;
  padding: 10px 0px 5px;
`;

export const SideProjectDate = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 4px 5px;
`;

export const SideProjectStackList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

export const StackItem = styled.img`
  width: 20px;
  height: 20px;
`;

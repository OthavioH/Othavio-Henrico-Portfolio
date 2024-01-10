import styled from "styled-components";
import { SectionArticle } from "../../../styles/App.style";
import {
  fadeAndSlideUpAnimation,
  inverseUpsideDownAnimation,
  underlineTextAnimation,
  upsideDownAnimation,
} from "../../../styles/Animations.style";

export const SectionWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  &:hover div#underline-text {
    animation: ${underlineTextAnimation} 0.5s ease-in-out forwards;
  }
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  user-select: none;
`;

export const WorkListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ExpeciencesArticle = styled(SectionArticle)`
  animation: ${fadeAndSlideUpAnimation} 1.5s ease-in-out;
`;

export const WorkExperienceItem = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(137, 249, 109, 0.6);
  border-radius: 16px;

  background: #101213;
  box-shadow: 0px 0px 20px #000;

  user-select: none;
`;

export const WorkExperienceHeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 12px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid transparent;

  &.expanded {
    border-bottom-color: #fff;
  }

  &.collapsed {
    border-bottom-color: transparent;
  }
`;

export const WorkExperienceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const WorkExperienceCompanyName = styled.p`
  width: fit-content;
  font-size: 18px;
  font-weight: bold;
`;

export const WorkExperienceCompanyRole = styled.p`
  font-size: 16px;
`;

export const WorkExperienceCompanyDate = styled.p`
  font-size: 16px;
`;

export const WorkExperienceDescription = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px 22px;

  display: none;
  flex-direction: column;
  align-items: flex-start;

  &.expanded {
    display: flex;
  }

  &.collapsed {
    display: none;
  }
`;

export const ArrowDownIcon = styled.img`
  width: 50px;
  height: 50px;

  &.expanded {
    animation: ${upsideDownAnimation} 0.5s ease-in-out forwards;
  }

  &.collapsed {
    animation: ${inverseUpsideDownAnimation} 0.5s ease-in-out forwards;
  }
`;

export const IconButton = styled.button`
  height: 100%;
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
  gap: 22px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SideProjectImageFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  border-radius: 16px 16px 0px 0px;
`;

export const SideProjectWrapper = styled.div`
  width: 180px;
  height: 250px;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #101213;
  border: 1px solid rgba(137, 249, 109, 0.5);
  border-radius: 16px;

  background: #101213;
  box-shadow: 0px 0px 10px #000;

  user-select: none;

  &:hover {
    cursor: pointer;
    transform: scale(90%);
  }
`;

export const SideProjectImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 16px 16px 0px 0px;

  overflow: hidden;
`;

export const SideProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  z-index: 0;
  border-radius: 16px 16px 0px 0px;
`;

export const SideProjectTitle = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  word-break: keep-all;
  text-decoration: none;

  text-align: center;
  padding: 10px 0px 5px;
`;

export const SideProjectDate = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 4px 5px;
  text-decoration: none;
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

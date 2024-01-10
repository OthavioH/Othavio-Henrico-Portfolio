import styled from "styled-components";
import {
  fadeAndSlideDownAnimation,
  sideBarBioAnimation,
  sideBarHeaderAnimation,
  sideBarHeaderAnimationMobile,
} from "../../../../styles/Animations.style";

export const SideBar = styled.aside`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 80px 0 0 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }

  user-select: none;
`;

export const SideBarHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  animation: ${sideBarHeaderAnimation} 0.7s ease-out;

  background-color: #101213;
  border-radius: 16px;
  padding: 12px 20px;

  box-shadow: 0px 0px 20px #000;

  @media (max-width: 768px) {
    animation: ${sideBarHeaderAnimationMobile} 1s ease-out;
  }
`;

export const SideBarBio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: #101213;
  border-radius: 16px;
  margin-top: 6px;
  padding: 12px 2rem;

  box-shadow: 0px 0px 20px #000;

  animation: ${sideBarBioAnimation} 1s ease-out;

  @media (max-width: 768px) {
    animation: ${sideBarBioAnimation} 1.6s ease-out;
    padding: 12px 60px;
  }
`;

export const SideBarStacksList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem;
  align-items: center;
  justify-content: center;

  padding: 20px 0;
`;

export const ProfileIconWrapper = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 100%;
  background-color: transparent;

  box-shadow: 0px 0px 20px 0px rgb(137, 249, 109, 0.4);
`;

export const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -20px;
  background-image: url("portfolio_icon.jpeg");
`;

export const ProfileName = styled.p`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  padding-top: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Role = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const DivisionTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-decoration: 3px underline rgba(255, 255, 255, 0.2);
  text-underline-position: under;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  padding-top: 20px;

  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  aspect-ratio: 1 / auto;
`;

export const LanguageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SwitchLanguageSelect = styled.select`
  width: fit-content;
  height: 30px;
  border-radius: 8px;
  background-color: #101213;
  color: #fff;
  border: 2px solid rgba(137, 249, 109, 0.6);
  padding: 0 10px;

  &:focus {
    outline: none;
  }

  animation: ${fadeAndSlideDownAnimation} 1s ease-in;
`;

import styled from "styled-components";
import {
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
`;

export const SideBarHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  animation: ${sideBarHeaderAnimation} 1.55s ease-out;

  background-color: #101213;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(198, 198, 198, 0.3);
  padding: 12px 20px;
  border: 2px solid rgba(137, 249, 109, 0.6);

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
  box-shadow: 0px 0px 10px rgba(198, 198, 198, 0.3);
  margin-top: 6px;
  padding: 12px 20px;

  border: 2px solid rgba(137, 249, 109, 0.6);

  animation: ${sideBarBioAnimation} 3s ease-out;

  @media (max-width: 768px) {
    animation: ${sideBarBioAnimation} 1.6s ease-out;
  }
`;

export const SideBarStacksList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
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
  font-size: 30px;
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
  font-weight: bold;
  text-align: center;
  text-decoration: 3px underline rgba(0, 0, 0, 0.1);
  text-underline-position: under;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

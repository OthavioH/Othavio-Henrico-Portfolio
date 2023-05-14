import styled from "styled-components";
import { fadeAndSlideToRightInAnimation } from "../../../../styles/Animations.style";

export const SideBar = styled.aside`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  background-color: #101213;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  animation: ${fadeAndSlideToRightInAnimation} 0.8s ease-out;

  @media (max-width: 768px) {
    margin-bottom: 20px;
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
`;

export const Role = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: start;
`;

export const DivisionTitle = styled.p`
  width: 100%;
  font-size: 20px;

  font-weight: bold;
  text-align: center;
  padding-top: 36px;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
`;

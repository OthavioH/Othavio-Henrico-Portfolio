import styled from "styled-components";

export const AboutMeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 20px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  padding: 22px 32px;
  box-shadow: 0px 0px 20px 0px #000;
  border-radius: 16px;
  background-color: #101213;
`;

export const AboutMeText = styled.p`
  width: 100%;
  font-size: 16px;

  text-align: justify;
`;

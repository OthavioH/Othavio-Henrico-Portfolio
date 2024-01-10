import styled from "styled-components";
import { SectionArticle } from "../../../../styles/App.style";
import { fadeAndSlideToLeftInAnimation } from "../../../../styles/Animations.style";

export const TextWrapper = styled.div`
  width: 100%;
  padding: 22px;

  border: 1px solid rgba(137, 249, 109, 0.6);
  border-radius: 16px;

  background: #101213;
  box-shadow: 0px 0px 20px #000;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const AboutMeText = styled.p`
  width: 100%;
  font-size: 16px;

  text-align: justify;
  line-height: 1.6rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutMeArticle = styled(SectionArticle)`
  animation: ${fadeAndSlideToLeftInAnimation} 0.5s ease-out;
`;
